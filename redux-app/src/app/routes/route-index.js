const apiTags = require('../../api/apiTags')
module.exports = (app)=>
{
    app.get('/',function(req,res)
    {

        res.render('index',{titulo:'index',apiTags});
    });
}