var filter = require('./mymodule.js');
var folder = process.argv[2];
var ext = process.argv[3];

filter(folder, ext, function(err, files){});

/*******************************************************
var filterFn = require('./mymodule.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function(err, list) {
  if (err)
    return console.error('There was an error:', err)

  list.forEach(function(file) {
    console.log(file)
  })
})

**********************************************************/