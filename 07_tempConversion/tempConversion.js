//limit to 1 decimal place

const ftoc = function(farValue) {
  let cel = (farValue - 32) * (5/9)
  let celVal = Math.round(cel * 10) / 10;
  return celVal
};


const ctof = function(celValue) {
  let far = celValue * 9/5 + 32
  let farVal = Math.round(far * 10) / 10;
  return farVal;
};


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

