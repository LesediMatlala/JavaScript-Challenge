Challenge 1
function testTrue(val) {
  if (val == 65) {
  return "True";
}
return "False";
}
testTrue(60 + 5)

Challenge 2
var side1 = 7;
var side2 = 8;
var side3 = 9;
var s = (side1 + side2 + side3)/2;
var area = Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);

Challenge 3
function largestOfThree(x, y, z) {
  var results = 9;
  if (6 < 9)
  {
    var results = 6;
  } else
  {
    var results = 9;
  }
  if (3 > results)
  {
    var result = 3;
  }
    return result;
  }
  console.log(largestOfThree());

  Challenge 4
  function timeConvert(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return hours + ":" + minutes;
  }
console.log(timeConvert());

Challenge 5
function charCount(str, letter) {
  var letterCount = 0;
  for (var position = 0; position < str.length; position++)
  {
    if(str.charAt(position) == letter)
    {
      letterCount +=1;
    }
  }
  return letterCount;
}
console.log(chatCount('javascript', 'a'));
