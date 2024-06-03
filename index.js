/*
other way to call modules that works with lodash module
require(["node_modules/dayjs/dayjs.min"], function () {
  __.format();
});
*/
const dayjs = require("dayjs");
var utc = require("dayjs/plugin/utc");
var timezone = require("dayjs/plugin/timezone"); // dependent on utc plugin
dayjs.extend(utc);
dayjs.extend(timezone);

//User Timezone
let userTimezone = dayjs.tz.guess();
let userTime = dayjs().format("HH:mm:ss");
let userDate = dayjs().format("dddd, D MMMM, YYYY");

//console.log(userTimezone);
//console.log(userTime);
//console.log(userDate);

//JST Timezone
const jstTimezone = "Japan Standard Time";
let jstTime = dayjs().tz("JST").format("HH:mm:ss");
let jstDate = dayjs().tz("JST").format("dddd, D MMMM, YYYY");

//console.log(jstTimezone);
//console.log(jstTime);
//console.log(jstDate);

//EST Timezone
const estTimezone = "Eastern Standard Time";
let estTime = dayjs().tz("EST").format("HH:mm:ss");
let estDate = dayjs().tz("EST").format("dddd, D MMMM, YYYY");

//console.log(estTimezone);
//console.log(estTime);
//console.log(estDate);

//PST Timezone
const pstTimezone = "Pacific Standard Time";
let pstTime = dayjs().tz("PST").format("HH:mm:ss");
let pstDate = dayjs().tz("PST").format("dddd, D MMMM, YYYY");

//console.log(pstTimezone);
//console.log(pstTime);
//console.log(pstDate);

let currTz = dayjs.tz.guess();

global.window.changeTimezone = function (newTz) {
  currTz = newTz;
};

function getDates() {
  let now = dayjs();

  global.window.userTimezone = currTz;
  global.window.userTime = now.tz(currTz).format("hh:mm:ss A");
  global.window.userDate = now.tz(currTz).format("dddd, D MMMM, YYYY");

  global.window.jstTimezone = "Japan Standard Time";
  global.window.jstTime = now.tz("JST").format("hh:mm:ss A");
  global.window.jstDate = now.tz("JST").format("dddd, D MMMM, YYYY");

  global.window.estTimezone = "Eastern Standard Time";
  global.window.estTime = now.tz("EST").format("hh:mm:ss A");
  global.window.estDate = now.tz("EST").format("dddd, D MMMM, YYYY");

  global.window.pstTimezone = "Pacific Standard Time";
  global.window.pstTime = now.tz("PST").format("hh:mm:ss A");
  global.window.pstDate = now.tz("PST").format("dddd, D MMMM, YYYY");
}
getDates();
setInterval(function () {
  getDates();
}, 1000);

//uses browserify to use dayjs module in client-side
//Command: browserify index.js -o getTime.js
