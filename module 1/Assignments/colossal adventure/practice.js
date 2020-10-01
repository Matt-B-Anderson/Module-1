const readLine = require("readline-sync");

const greeting = "Welcome to Dusk Falls, the adventure game where you are only one command away from becoming enthralled in the happnenings of the night.";

const begin = "Your adventure starts as you wake up. You find yourself stuck beneath a dead horse, but you are unclear as to how you got there. You manage to extract yourself from under the horse, and find that besides a few scrapes you are unharmed. You check the saddle bags of the horse and find nothing of use, but a note that says, 'it begins....'. You look around but find it is hard to see very far becuase night has fallen. You can just make out that to your right is a cliff and two your left is a body of water. Straight ahead of you is a forest, and behind you is a cliffside. You decide to walk into the forest... Here is where your adventure begins...";

console.log(greeting + "\n " + begin);

const name = readLine.question("What is your name? ");
console.log("Welcome " + name + ", when you are ready to start your adventure, please press the 'W' key. If you would ever like to check the status of your health, your current name, or your inventory press 'P' or type 'Print'. ");

var walk = readLine.question("Press 'W'... or 'P' or 'Print' ").toLowerCase();
var win = false;
var duskbane = false;
var playerHp = 10;

do {
    switch (walk) {
        case 'w':
            wildEnemy();
            break;

        case 'p':
        case 'print':
            inventory();
            break;
    }

    function inventory() {
        const itemsArr = [];
        if (duskbane === true) {
            itemsArr.push(duskbane);
        } else if (potion === true) {
            itemsArr.push(potion);
        } else if (boots === true) {
            itemsArr.push(boots);
        } else {
            itemsArr.push(" ");
        }
        console.log("Your name: " + name + " Your hp: " + playerHp + " Your item(s): " + itemsArr);
        walk = readLine.question("Quickly! You must continue your adventure! There is no time to dilly dally! Press 'W' to continue ");
        console.log(walk);
    }

    function wildEnemy() {
        let enemy;
        const enemies = ["Balthizar", "Veronia", "Dusk"];
        const index = Math.floor(Math.random() * enemies.length);
        const battle = Math.floor(Math.random() * 4) + 1;
        if (battle === 3) {
            enemy = enemies[index];
            const fight = "As you were walking through the forest you heard a noise up ahead and a vampire named " + enemy + " appears.";
            console.log(fight);
            var choice = readLine.question("What will you do? Fight? or Run?").toLowerCase();

            console.log(choice);

            switch (choice) {
                case 'fight':
                    fightEnemy();
                    break;

                case 'run':
                    runAway();
                    break;
            }

            function fightEnemy() {
                var enemyHp = 6;
                var playerDamage = Math.floor(Math.random() * 10) + 1;
                console.log(playerDamage, enemyHp)
                if (playerDamage >= enemyHp) {
                    console.log(`You attack, and deal ${playerDamage} damage. Your foe has been defeated. Congrats! You reach down and loot their body`);
                    var items = readLine.question("You find 3 different items. A sword, a potion, and boots. You can only choose one, choose wisely! Sword, potion, or boots?").toLowerCase();

                    switch (items) {
                        case 'sword':
                            lightsbane();
                            break;

                        case 'potion':
                            potion();
                            break;

                        case 'boots':
                            boots();
                            break;
                    }
                } else {
                    isDead();
                }
            }

            function runAway() {
                var success = Math.floor(Math.random() * 2) + 1;
                switch (success) {
                    case 1:
                        console.log("You manage to through garlic in the vampires eyes, and you escape for now.")
                        choice = readLine.question("You must continue your adventure! There is no time to dilly dally! Press 'W' to continue");
                        console.log(choice);
                        break;

                    case 2:
                        console.log("You attempt to grab garlic from your pocket, but the vampire is too fast for you and he attacks you before your next heartbeat.")

                        isDead();
                        break;
                }
            }
        } else {
            var cont = "You continue walking through the forest, and after walking for 15 minutes you take a rest."
            var ready = readLine.question("Quickly! You must continue your adventure! There is no time to dilly dally! Press 'W' to continue ");
            console.log(ready);
            console.log(cont);
        }
    }

    function isDead() {
        var enemyHp = 10;
        var playerHp = 10;
        var playerDamage = Math.floor(Math.random() * 10) + 1;
        var enemyDamage = Math.floor(Math.random() * 10) + 1;
        var newEHp = Math.abs(playerDamage - enemyHp);
        var newPHp = Math.abs(enemyDamage - playerHp);
        if (newPHp === 0) {
            console.log("You bravely face the vampire, and they attack with such speed that the next thing you know is the dusk has claimed you; you never wake from your dreams again. YOU ARE DEAD! GAME OVER!");
            win = true;
        } else {
            console.log("You attack, and deal " + playerDamage + " damage. Your foe has " + newEHp + " healh left, and is not yet defeated; infact they are in shock at how weak you are.");

            console.log("They attack you and deal " + enemyDamage + " damage." + "Your remaining health is " + newPHp);
            choice = readLine.question("What will you do? Fight? or Run?");
            console.log(choice);
            return newPHp;
        }
    }

    function lightsbane() {
        console.log("You have defeated one of the three vampires and when choosing the sword you actually found the secret to slaying all vampires. The sword is so bright that it illumiantes the water next to you, and you find a boat. You manage to sail the boat to the other side. CONGRATULATIONS!!! YOU WIN!!!");
        win = true;
    }

    function potion() {
        var potion = true;
        console.log("You have chosen the potion. You pick up a small glass vile with a bright red liquid in it. It will heal you to full health. Your adventure still continues.");
        walk = readLine.question("Press 'W'... or 'P' or 'Print' ");
        console.log(walk);
        return potion;
    }

    function boots() {
        var boots = true;
        console.log("You pick up a pair of boots that let you run faster than light.");
        walk = readLine.question("Press 'W'... or 'P' or 'Print' ");
        console.log(walk);
        return boots;

    }
}
while (win != true);