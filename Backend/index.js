const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const mysql = require('mysql2/promise');
const app = express();
const port = 8000

app.use(bodyParser.json());
app.use(cors());

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


app.put('/users/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let user = req.body;
        const result = await conn.query('UPDATE users SET ? WHERE id = ?', [user, id]);
        if (result[0].affectedRows == 0) {
            throw {statusCode: 404, message: 'User not found'};
        }
        res.json({
            message: 'User updated successfully',
            data: user
        });
    } catch (error) {
        console.error('Error',error);
        let statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            message: 'Error updating user',
            error: error
        });
    }
}); 


app.get('/users', async (req, res) => {
    const result = await conn.query('SELECT * FROM users');
    res.json(result[0])
});


app.get('/users', (req, res) => {
    res.json(users);
});


app.delete('/users/:id', async (req, res) => {
    try{
        let id = req.params.id;
        let user = req.body;
        const result = await conn.query('DELETE FROM users WHERE id = ?',id);
        if (result[0].length == 0) {
            throw {statusCode: 404,message: 'User not found'}
        }
        res.json({
            message: 'User delete success',
            
        })
    }
    catch (error) {
        console.error('Error',error);
        let statusCode = error.statusCode || 500;
        res.status(500).json({
            message: 'Error getting user',
            error: error
        });
    }
});

app.post('/users', async (req, res) => {
    try {
    let user = req.body;
    const result = await conn.query('INSERT INTO users SET ?', user);
    console.log('result',result)
    res.json({
        message: 'User added successfully',
        data: result[0]
    });

    } catch (error) {
        console.error('Error',error);
        res.status(500).json({
            message: 'Error adding user',
            error: error
        });
    }
})

app.get('/user/:id', async (req, res) => {
    try{
        let id = req.params.id;
        const result = await conn.query('SELECT * FROM users WHERE id = ?', id);
        if (result[0].length == 0) {
            throw {statusCode: 404, message: 'User not found'};
        }
        res.json(result[0][0]);
    }
    catch (error) {
        console.error('Error',error);
        let statusCode = error.statusCode || 500;
        res.status(500).json({
            message: 'Error getting user',
            error: error
        });
    }
});





app.listen(port, async () => {
    await initDBConnection();
    console.log(`Server is running on port ${port}`)
});