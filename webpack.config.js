const path = require('path')

modile.exports = {
  entry:path.join(__dirname,'src/index.js'),
  output:{
    filename:'bundle.js',
    path:path.join(__dirname,'dist')
  }
}