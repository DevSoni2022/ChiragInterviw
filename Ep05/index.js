// Make a counter that remember previous count and on reset it reset the value

const count = (() => {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
    return counter;
  }
  inner.reset = function () {
    counter = 0;
  };
  return inner;
})();

count();
count();
count();
count();
count.reset()
count()
count()
