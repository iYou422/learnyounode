var fs = require('fs');
var path = require('path');
var pathName = process.argv[2];
var extName = "." + process.argv[3];

fs.readdir(pathName, function(err, list) {  
  if (err) throw err;
  
  for (var i = 0; i < list.length; i++) {
    if (path.extname(list[i]) === extName) {
      console.log(list[i]);
    }
  }
});

/***************************************************
var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})
***************************************************/