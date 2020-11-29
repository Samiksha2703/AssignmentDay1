function linearSearch(numberSet, userInput) {
    for (var i = 0; i < numberSet.length; i++) {
      if (numberSet[i] === userInput) {
          flag = 1; 
          break;
      }
    }
if (flag == 1 ){
    console.log("Found.");
}  
else{
    console.log("Not found.")
}
}
 var flag = 0;
  var numberSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var userInput = 5;
linearSearch(numberSet, userInput);