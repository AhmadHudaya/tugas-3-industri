function minMax(numberArr) {
  const Small = Math.min(...numberArr);
  const Big = Math.max (...numberArr);
  console.log(Small,Big);
}
minMax([1,2,3,4,5]);
minMax([1]);
minMax([2334454, 5]);