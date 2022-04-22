const arr = [];

function test() {
  for (let i = 1; i < 51; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  return arr;
}
