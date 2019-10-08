const proxy = require('http-proxy-middleware');

console.log('app listener')
module.exports  = function(app){
    app.use(
        proxy("/api",{
            target: "http://localhost:8000/api",
            secure:false,
            changeOrigin:true
        })
    );
}