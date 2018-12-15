const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(proxy('/auth/google', { target: 'http://localhost:5000' }))
    app.use(proxy('/api/*',{target:'http://localhost:5000'}))
    app.use(proxy('/singin',{target:'http://localhost:5000'}))
    app.use(proxy('/singup',{target:'http://localhost:5000'}))
    app.use(proxy('/addCarToDatabase',{target:'http://localhost:5000'}))
    app.use(proxy('/car/showCars',{target:'http://localhost:5000'}))


}