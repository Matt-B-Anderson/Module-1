const readLine = require("readline-sync");
const enemies = [
    { name: "Balthizar", hp: 10, inventory: "lightsbane", str: 10 },
    { name: "Veronia", hp: 6, inventory: "potion", str: 4 },
    { name: "Marcus", hp: 3, inventory: "boots", str: 7 }
]

const greeting = "Welcome to Dusk Falls, the adventure game where you are only one command away from becoming enthralled in the happnenings of the night.";

const begin = "Your adventure starts as you wake up. You find yourself stuck beneath a dead horse, but you are unclear as to how you got there. You manage to extract yourself from under the horse, and find that besides a few scrapes you are unharmed. You check the saddle bags of the horse and find nothing of use, but a note that says, 'it begins....'. You look around but find it is hard to see very far becuase night has fallen. You can just make out that to your right is a cliff and two your left is a body of water. Straight ahead of you is a forest, and behind you is a cliffside. You decide to walk into the forest... Here is where your adventure begins...";

console.log(greeting + "\n " + begin);
const player = { name: "", hp: 10, inventory: "", str: 10 };
player.name = readLine.question("What is your name? ");
console.log(`Welcome ${player.name}, when you are ready to start your adventure, please press the 'W' key. If you would ever like to check the status of your health, your current name, or your inventory press 'P' or type 'Print'. `);

function getRandomNum(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function fight(fighter, target) {
    const damage = getRandomNum(fighter.str);
    target.hp = target.hp - damage;
    console.log(`${fighter.name} hits ${target.name} for ${damage} and ${target.name} has ${target.hp} hp.`)
    return target.hp < 1;
}

function walk() {
    if (getRandomNum(4) === 3) {
        wildEnemy();
    } else {
        noWildEnemy();
    }
}

function wildEnemy() {
    let enemy = Object.assign({}, enemies[getRandomNum(enemies.length - 1)]);
    console.log(`As you were walking through the forest you hear a noise up ahead and a vampire named ${enemy.name} appears.`);

    let fighting = true;
    while (fighting) {
        const choice = readLine.question("What will you do? Fight? or Run?")
            .toLowerCase();

        switch (choice) {
            case 'fight':
                fighting = fightEnemy(enemy);
                break;

            case 'run':
                fighting = runAway(enemy);
                break;
        }
    }
}

function fightEnemy(enemy) {
    if (fight(player, enemy)) {
        console.log(`Congrats! You reach down and loot their body and find ${enemy.inventory}`);
        player.inventory = enemy.inventory;
        return false;
    } else {
        if (fight(enemy, player)) {
            console.log("You bravely face the vampire, and they attack with such speed that the next thing you know is the dusk has claimed you; you never wake from your dreams again. YOU ARE DEAD! GAME OVER!");
            playing = false;
            return false;
        } else {
            return true;
        }
    }
}

function runAway(target) {
    const success = getRandomNum(2);
    switch (success) {
        case 1:
            console.log(`You manage to through garlic in the eyes of ${target.name}, and you escape for now.`)
            return false;

        case 2:
            console.log(`You attempt to grab garlic from your pocket, but ${target.name} is too fast for you and he attacks you before your next heartbeat.`)
            if (fight(enemy, player)) {
                console.log("You bravely face the vampire, and they attack with such speed that the next thing you know is the dusk has claimed you; you never wake from your dreams again. YOU ARE DEAD! GAME OVER!");
                playing = false;
                return false;
            } else {
                return true;
            }
    }
}

function noWildEnemy() {
    console.log("You continue walking through the forest, and after walking for 15 minutes you take a rest.");
}

function inventory(player) {
    console.log(`${player.name} has ${player.hp} hp and has ${player.inventory}`);
}

let playing = true;
while (playing) {
    var action = readLine.question("Press 'W'... or 'P' or 'Print' ").toLowerCase();
    switch (action) {
        case 'w':
            walk();
            break;

        case 'p':
        case 'print':
            inventory(player);
            break;
    }
}