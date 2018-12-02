const mysql = require('mysql');

module.exports=()=>
{
    return mysql.createConnection({
        host:'host',
        user:'root',
        password:'',
        database:''
    });
}