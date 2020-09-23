const readline = require("readline-sync");
const name = readline.question("What is your name? ");
console.log('Welcome ' + name + ' you find yourself locked in a room. There is a locked door and there is a hole in one of the walls.')
var action = readline.question("What would you like to do: find the key, put hand in hole, or open the door? ");
console.log(action)
var win = false;

for (; win != true;) {

    switch (action) {
        case 'find the key':
            var key = true;
            keyAction()
            break;

        case 'open the door':
            doorAction(key)
            break;

        case 'put hand in hole':
            handAction()
            break;

    }

}

function keyAction() {
    key = true;
    console.log('You find a stone in the floor that is loose; you pry it open and find an ancient key')
    action = readline.question("What would you like to do next: put hand in hole, or open the door? ")
    console.log(action)
    return key;

}


function doorAction(key) {
    if (key === true) {
        console.log('You find a keyhole on the door and insert the key; you find that if you twist hard enough the ancient lock gives and the door opens. CONGRATULATIONS YOU WIN')
        win = true;
    } else {
        console.log('You find a keyhole on the door, but do not have a key yet; maybe you should look for a key')
        action = readline.question("What would you like to do next: find the key, or put hand in hole? ")
        console.log(action)
    }
}

function handAction() {
    console.log('You courageously stick your hand in an unknown hole, but now that you take a second to think about what you just did you realize it was very dumb, but too late, a very small spider has now bitten your hand and you immediately experience the most plesant dreams that you never wake up from. YOU ARE DEAD!')
    win = true;
    return win;
}