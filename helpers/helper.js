// A function that creates a formated date. For Felanamalans. So that we can call this function when we create one and when we complte it.
exports.dater = function () {
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  if (month < 10) month = '0' + month;
  var day = dateObj.getUTCDate();
  if (day < 10) day = '0' + day;
  var year = dateObj.getUTCFullYear();

  var newdate = year + "-" + month + "-" + day;
  return newdate;
}

// A function that sets the besiktnings period based on the last numbers in the registration.
exports.besiktningDates = function (str) {
  var lastChar = str.substr(str.length - 1);
  switch (lastChar) {
    case '1': return ['November', 'Mars'];

    case '2': return ['December', 'April'];

    case '3': return ['Januari', 'Maj'];

    case '4': return ['Februari', 'Juni'];

    case '5': return ['Maj', 'September'];

    case '6': return ['Juni', 'Oktober'];

    case '7': return ['Juli', 'November'];

    case '8': return ['Augusti', 'December'];

    case '9': return ['September', 'Januari'];

    case '0': return ['Oktober', 'Februari'];

  }
}

// Compares boknings dates too se if a booked time collides with already booked cars.
exports.comparer = (bokningFrom, bokningTom, reqFrom, reqTom ) => {
 var from = reqFrom;
 var tom = reqTom;
 if (bokningFrom > from && bokningFrom < tom || bokningTom > from && bokningTom < tom || bokningFrom < from && bokningTom > tom) {
   return true
 } else {
   return false
 }
}
