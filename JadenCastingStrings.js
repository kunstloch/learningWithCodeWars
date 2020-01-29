// Jaden Casing Strings

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// var str = "How can mirrors be real if our eyes aren't real";

String.prototype.toJadenCase = function() {
  var string = this;
  string = string.split(' ');
  string = string.map(function(element) {
    return (element = element[0].toUpperCase() + element.slice(1));
  });
  string = string.join(' ');
  return string;
};

// or in one line:

String.prototype.toJadenCase = function() {
  return this.split(' ')
    .map(function(element) {
      return (element = element[0].toUpperCase() + element.slice(1));
    })
    .join(' ');
};
