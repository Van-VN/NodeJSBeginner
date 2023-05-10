let sampleArray = [2, 5, 6, 456, 2, 76, 1000, 123, 888];
function checkMaxNum(inputArray) {
  let max = inputArray[0];
  inputArray.forEach((item) => {
    if (max < item) {
      max = item;
    }
  });
  return max;
}

console.log(
  "Giá trị lớn nhất của Array đã nhập là: " + checkMaxNum(sampleArray)
);
