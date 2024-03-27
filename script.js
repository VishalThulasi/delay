function delay(fn, ms) {
  setTimeout(fn, ms);
}

delay(function() {
  console.log('Hello, world!');
}, 2000);
