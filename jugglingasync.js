var http = require('http');
var bl = require('bl');
var contents = [];
var count = 0;

function printData(url, index) {
  http.get(url, function(response) {
    response.pipe(bl(function(err, data) {
      if (err) return console.error(err);

      contents[index] = data.toString();
      count++;
      if (count === 3)
        contents.forEach(function(str) {
          console.log(str);
        });
    }));
  });
}

for (var i = 0; i < 3; i++)
  printData(process.argv[2 + i], i);

/***********************************************************/

// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults() {
//   for (var i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }

// function httpGet(index) {
//   http.get(process.argv[2 + index], function(response) {
//     response.pipe(bl(function(err, data) {
//       if (err) {
//         return console.error(err)
//       }

//       results[index] = data.toString()
//       count++

//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }

// for (var i = 0; i < 3; i++) {
//   httpGet(i)
// }

/***********************************************************************/
// var http = require('http');
// var bl = require('bl');
// var async = require('async');

// async.parallel([
//   function(callback) {
//     http.get(process.argv[2], function(response) {
//       response.pipe(bl(function(err, data) {
//         if (err) return console.error(err);
//         callback(null, data.toString());
//       }));
//     })
//   },
//   function(callback) {
//     http.get(process.argv[3], function(response) {
//       response.pipe(bl(function(err, data) {
//         if (err) return console.error(err);
//         callback(null, data.toString());
//       }));
//     })
//   },
//   function(callback) {
//     http.get(process.argv[4], function(response) {
//       response.pipe(bl(function(err, data) {
//         if (err) return console.error(err);
//         callback(null, data.toString());
//       }));
//     })
//   }
// ], function(err, results) {
//   results.forEach(function(str) {
//     console.log(str);
//   })
// });