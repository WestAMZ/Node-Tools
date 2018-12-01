var app = require('./config/server');

require('./app/routes/route-index')(app);

//starting the server
app.listen(app.get('port'),()=>{
    console.log('server on port http://localhost:'+app.get('port'))
});