function forception(arr1, arr2) {
    for (let i = 0; i < arr1.length; i += 5) {
        for (let j = 0; j < 1; j++) {
            var newArr = " ".concat(arr1[i] + arr2)
            console.log(newArr);

        }
    }
}


var people = ["Jon:", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = [,
    " a", " b", " c", " d", " e", " f", " g", " h", " i", " j", " k", " l", " m", " n", " o", " p", " q", " r", " s", " t", " u", " v", " w", " x", " y", " z"
]
var upperCase = alphabet.map(alphabet => alphabet.toUpperCase());
forception(people, upperCase)