// ax + b = 0;

function findX(numa, numb) {
  while (numa !== 0) {
    return -numb / numa;
  }
}

console.log("Phương trình có nghiệm x = " + findX(5, 10));
