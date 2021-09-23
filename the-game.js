const prompt = require('prompt-sync')({ sigint: true });

const title = prompt ('welcome to my little game! you are a captin of a ship that is trying to take over the sea fight your way through all 4 battles to win the game if you lose one you get sunk...... GLHF');



let x = 0
let y = 0

let position = x && y


while(true){

    const move = prompt ('to move up press [w] to move down press [s] to move left press [a] to move right press [d]');

if (move === 'w') { 
    y = y + 1
  
}else if (move === 'd'){
    x = x + 1
   
}if (move === 'a'){ 
  x = x - 1
    
}else if (move === 's'){
    y = y - 1 
}


console.log('your position is:', x, y,);
}