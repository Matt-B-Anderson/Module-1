document.querySelector("form").onsubmit = (e) => {
    e.preventDefault();
    var form = document.querySelector("#airline-form");
    var firstName = form.elements["first-name"].value;
    var lastName = form.elements["last-name"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travel-location"].value;
    var diet = [];

    if (form.elements["vegan"].checked) {
        diet.push(document.querySelector("#vegan").value);
    } else if (form.elements["gluten"].checked) {
        diet.push(document.querySelector("#gluten").value);
    } else if (form.elements["paleo"].checked) {
        diet.push(document.querySelector("#paleo").value);
    } else { diet.push(" "); }



    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");


}