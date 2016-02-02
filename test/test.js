var index = require("../lib/module-file.js");

var assert = require('./assert')
var data = require('../data/data')
var expectedArrayOfArrays = require('../data/array-of-arrays')
var expectedFormattedDates = require('../data/formatted-dates')


function isEmail (str) {
  if (str.indexOf("@") > 0 && str.indexOf("@") != str.length - 1) {
    return true
  } else {
    return false
  }
}

function filterStringsWithCommas (str) {
return str.indexOf(',') > 1;

}

function isNumber (thing) {
  // if (typeof thing === Number) {
  if (typeof thing === "number") {
    return true;
  }
  else {
    return false;
  }
}

function isDate (str) {
  var punctuation = /[.,\/#!$%\^&\*;:{}=\-_`~()]/
  return !Number.isNaN(Date.parse(str)) && punctuation.test(str)
}

function map (func, arr) {
  var results = []

  for (var i = 0; i < arr.length; i++) {
    results.push(func(arr[i]))
  }

  return results
}

var meaningOfLife = '42'
var expectedType = 'string'

var mixedArray = [1, '21', null, Date.now(), 5, meaningOfLife, 42]
var expectedNumberCount = 4 // why are there 4 expected number data-types?  What are they?
var expectedStringCount = 2

var numberCount = index.countIf(isNumber, mixedArray)
var stringCount = index.countIf(function (x) { return typeof x === 'string' }, mixedArray)

assert(numberCount, expectedNumberCount, 'countIf can count the numbers in an array' )
console.log("-----------------------------");
assert(stringCount, expectedStringCount, 'countIf can count the strings in an array')

var emails = index.filter(isEmail, data)
assert(emails.length, 44, 'filter and isEmail returns the correct number of emails' )

var stringsWithCommas = index.filter(filterStringsWithCommas, data)
assert(stringsWithCommas.length, 62, 'filter and filterStringsWithCommas returns the correct number of commas')

var dates = index.filter(isDate, data)
assert(dates.length, 51, 'filter and isDate return the correct number of dates from data')



