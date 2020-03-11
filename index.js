const yargs = require("yargs");
const geocode = require("./geocode/geocode");
const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "enter you target address",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;
geocode.geocodeAddress(argv.address, (err, res, body) => {
  if (err) {
    console.log("err connect serve");
  } else if (body.code === 400) {
    console.log("address not found");
  } else {
    console.log("summary : ", body.currently.summary);
    console.log("icon : ", body.currently.icon);
    console.log("temperature : ", body.currently.temperature);
  }
});
