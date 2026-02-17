const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 8000

app.use(bodyParser.json());

let users = []
let counter = 1;
// path = GET /test
app.get('/test', (req, res) => {
    let user ={
        name: 'John Doe',
        age: 30,
        email: 'john.doe@example.com'
    }
    res.json(user);
});
app.get('/users', (req, res) => {
    res.json(users);
});

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


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});