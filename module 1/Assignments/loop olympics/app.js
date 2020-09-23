for (i = 0; i < 10; i++) {
    console.log(i);
}

for (o = 9; o >= 0; o--) {
    console.log(o);
}

var fruit = ["banana", "orange", "apple", "kiwi"]

for (p = 0; p < fruit.length; p++) {
    console.log(fruit[p]);
}

var numbers = [];
for (q = 0; q < 10; q++) {
    numbers.push(q);
}
console.log(numbers);

var peopleArray = [{
        name: "Harrison Ford",
        occupation: "Actor"
    },
    {
        name: "Justin Bieber",
        occupation: "Singer"
    },
    {
        name: "Vladimir Putin",
        occupation: "Politician"
    },
    {
        name: "Oprah",
        occupation: "Entertainer"
    }
]


for (w = 0; w < peopleArray.length; w++) {
    console.log(peopleArray[w].name);
}

var name = [];
for (e = 0; e < peopleArray.length; e++) {
    name.push(peopleArray[e].name);
}
console.log(name);

var occupation = [];
for (r = 0; r < peopleArray.length; r++) {
    occupation.push(peopleArray[r].occupation);
}
console.log(occupation)

var names = [];
var occupations = [];
for (t = 0; t < name.length; t += 2) {
    names.push(name[t]);
    for (y = 0; y < occupation.length; y += 2) {
        occupations.push(occupation[y]);
    }
}
console.log(names);
console.log(occupations)

var zeros = [];
for (u = 0; u <= 0; u += 1) {
    zeros.push(u)
    for (a = 0; a = zeros[u].length; a += 1) {
        zeros.push(a)
        for (s = 0; s = zeros[a].length; s += 1) {
            zeros.push(s)
        }
    }

}
console.log(zeros)