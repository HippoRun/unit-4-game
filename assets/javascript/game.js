// player will get a random number. 

var player = 0;

function playernumberInt (){
    return parseInt(Math.random()* (120-19)+19);
}

console.log(playernumberInt());
player = playernumberInt();

console.log(player);

// random for crystals

function crystals () {
    return parseInt(Math.random()*(12-1)+1);
}
