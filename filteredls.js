var fs = require('fs');
var path = require('path');
var folder = process.argv[2];
var ext = "." + process.argv[3];

fs.readdir(folder, function(err, files) {
  if (err) return console.log(err);

  for (var i = 0; i < files.length; i++) {
    if (path.extname(files[i]) === ext) {
      console.log(files[i]);
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