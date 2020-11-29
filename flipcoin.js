function flipcoin() {
    var random = Math.floor(Math.random() * 2);
    console.log(random);
    if (random == 0 ) {
        console.log("Head");
    }
    else {
        console.log("Tail")
    }
}
  flipcoin();