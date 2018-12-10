
if(process.env.NODE_ENV === 'production'){
    // jestesmy w prod - return the prod set of keys
    module.exports = require('./prod');
}else {
    // jestesmy w dev - return the dev set of keys
    module.exports = require('./dev');
}
