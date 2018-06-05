$(document).ready(function() {
  $("#button").click(function(event) {
    var arrName = []
    arrName = $("input#wordList").val().split("");
    function removeOdd(param1){
      if (arrName.length % 2 === 1){
      var check = (((arrName.length-1)/2)+1)
      delete arrName[check]
    }
    return param1
  };
  alert(arrName);
    removeOdd(arrName);
    var full_length = (arrName.length);
    var half_length = (arrName.length/2);
    var leftSide = arrName.splice(0,half_length);
    var rightSide = arrName
    console.log(leftSide.reverse().toString());
    console.log(rightSide.toString());
    debugger;
    if (leftSide.reverse().toString() === rightSide.toString()){
      alert("yay! it's a palindrome!")
    } else {
      alert("boooo, it's not a palindrome")
    }

    event.preventDefault();
  });
});
