
const express = require('express');
const app = express();
const {db} = require('./database');


app.listen(3000)

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded());


app.get('/users', (req, res) => {
    let sql = "select * from student";
    db.query(sql, (err, result) => {
        if(err) {
            return console.log(err);
        }
        res.send(result);
    })
});


app.get('/users/:id', (req, res) => {
    let id = req.params.id;
    let sql = "select * from student where id = ?";
    db.query(sql, [id], (err, result) => {
        if(err) {
            return console.log(err);
        }
        res.send(result);
    })
});

app.delete('/users/:id', (req, res) => {
    let id = req.params.id;
    let sql = "delete from student where id = ?";
    db.query(sql, [id], (err) => {
        if(err) {
            return console.log(err);
        }
        res.send({message: "Deleted successful!"});
    })
});


app.put('/users/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let stu = req.body;
    let sql = "update student set first_name = ?, last_name = ?, age = ?, province = ? where id = ?";
    let data = [
        stu.first_name,
        stu.last_name,
        stu.age,
        stu.province,
        id
    ]
    db.query(sql, data, (err) => {
        if(err) {
            return console.log(err);
        }
        res.send({messag: "Updated successful!"});
    })
});

app.post('/users', (req, res) => {
    let stu = req.body;
   
    let sql = "insert into student(first_name, last_name, age, province) values ?";
    let values = [
        [stu.first_name, stu.last_name, stu.age, stu.province]
    ];
    db.query(sql, [values], (err) => {
        if(err) {
            return console.log(err);
        }
        res.send({message: "Inserted successful"});
    })
})

