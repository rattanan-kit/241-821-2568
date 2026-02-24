const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql2/promise');
const port = 8000

app.use(bodyParser.json());
let users = []
let counter = 1;

let conn = null;
const initDBConnection = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8821
    });
}

// path = Get / Users สำหรับ get ข้่อมูล user ทั้งหมด
app.get('/users', async (req, res) => {
    const result = await conn.query('SELECT * FROM users');
    res.json(result[0])
});



// path = GET /test
app.get('/test', (req, res) => {
    let user = {
        name: 'John Doe',
        age: 30,
        email: 'john.doe@example.com'
    }
    res.json(user);
});

app.get('/users', (req, res) => {
    res.json(users);
});


// path = POST /users สำหรับเพิ่ม user ใหม่
app.post('/users', async (req, res) => {
    let user = req.body;
    const result = await conn.query('INSERT INTO users SET ?', user);
    console.log('result',result)
    res.json({
        message: 'User added successfully',
        data: result[0]
    });
})





// path = POST /user
app.post('/user', (req, res) => {
    let user = req.body;
    user.id = counter
    counter += 1
    users.push(user);
    res.json({
        message: 'User added successfully',
        user: user
    });
});

// path = PUT /user/:id
app.patch('/user/:id', (req, res) => {
    let id = req.params.id;
    let updateUser = req.body;

    //หา uesr จาก id 
    let selectedIndex = users.findIndex(user => user.id == id);


    // update ข้อมูล user
    // users[selectedIndex] = updateUser 
    if (updateUser.email) {
        users[selectedIndex].email = updateUser.email;
    }
    if (updateUser.name) {
        users[selectedIndex].name = updateUser.name;
    }

    // เอาข้อมูลที่ update ส่ง response กลับไป 
    // res.send(selectedIndex + '')
    res.json({
        message: 'User updated successfully',
        data: {
            user: updateUser,
            indexUpdated: selectedIndex
        }
    });
});

// user จาก id ที่ส่งมา
app.delete('/user/:id', (req, res) => {
    let id = req.params.id;

    // หา index ของ user ที่ต้องการลบจาก id ที่ส่งมา
    let selectedIndex = users.findIndex(user => user.id == id);
    //ลบ user จาก array โดยใช้ delete
    // delete users[selectedIndex];
    users.splice(selectedIndex, 1);
    res.json({
        message: 'User deleted successfully',
        indexDeleted: selectedIndex

    });
});


app.listen(port, async () => {
    await initDBConnection();
    console.log(`Server is running on port ${port}`)
});