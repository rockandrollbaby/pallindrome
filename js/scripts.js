$(document).ready(function() {
  $("#button").click(function(event) {
    var arrName = []
    arrName = $("input#wordList").val().split("");
    function removeOdd(param1){
      if (arrName.length % 2 === 1){
      var check = ((arrName.length-1)/2)
      alert(check);
      param1.slice(check);
      alert(param1);
    }
    return param1
  };
    arrName = removeOdd(arrName);
    // alert(arrName);
    var full_length = (arrName.length);
    var half_length = (arrName.length/2);
    var leftSide = arrName.splice(0,half_length);
    var rightSide = arrName
    // console.log(leftSide.reverse().toString());
    // console.log(rightSide.toString());
    // debugger;
    if (leftSide.reverse().toString() === rightSide.toString()){
      alert("yay! it's a palindrome!")
    } else {
      alert("boooo, it's not a palindrome")
    }
    event.preventDefault();
  });
});
