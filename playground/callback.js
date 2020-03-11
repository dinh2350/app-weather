function getData(cb) {
  setTimeout(() => {
    console.log("Got Data");
    cb();
  }, 1000);
}
function showData() {
  console.log("Show Data");
}

getData(showData);
