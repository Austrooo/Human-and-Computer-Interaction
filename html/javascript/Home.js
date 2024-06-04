function SwitchProductTab(num){
    let S = document.getElementsByClassName("classS");
    let A = document.getElementsByClassName("classA");
    let B = document.getElementsByClassName("classB");
    let C = document.getElementsByClassName("classC");
    let D = document.getElementsByClassName("classD");

    let s = document.getElementById("S");
    let a = document.getElementById("A");
    let b = document.getElementById("B");
    let c = document.getElementById("C");
    let d = document.getElementById("D");

    let At = document.getElementsByClassName("textA");
    let Bt = document.getElementsByClassName("textB");
    let Ct = document.getElementsByClassName("textC");
    let Dt = document.getElementsByClassName("textD");
    let St = document.getElementsByClassName("textS");

    function hideAll() {
        [S, A, B, C, D].forEach(image => {
            for(let i = 0; i < image.length; i++) {
                image[i].style.display = "none";
            }
        });
        [s, a, b, c, d].forEach(element => {
            element.style.color = "white";
        });
        [At, Bt, Ct, Dt, St].forEach(text => {
            for(let i = 0; i < text.length; i++) {
                text[i].style.display = "none";
            }
        });
    }

    function show(image, element, text) {
        for(let i = 0; i < image.length; i++) {
            image[i].style.display = "grid";
        }
        for(let i = 0; i < text.length; i++) {
            text[i].style.display = "grid";
        }
        element.style.color = "red";
    }

    hideAll();

    if(num == 1){
        show(S, s, St);
    }else if(num == 2){
        show(A, a, At);
    }else if(num == 3){
        show(B, b, Bt);
    }else if(num == 4){
        show(C, c, Ct);
    }else if(num == 5){
        show(D, d, Dt);
    }
}
// Subscription Form Animation Helper

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#Sub1').addEventListener('animationend', () => {
        document.querySelector('#Sub1').style.visibility = 'hidden';
        document.querySelector('#Sub2').style.visibility = 'visible';
    });

    document.querySelector('#Sub2').addEventListener('animationend', () => {
        document.querySelector('#Sub2').style.visibility = 'hidden';
        document.getElementsByClassName('SubForm')[0].style.visibility = 'visible';
    });
});

// Subscription Form Validation


function validateSub() {
    let input_fname = document.getElementById("firstName");
    let input_lname = document.getElementById("lastName");
    let input_email = document.getElementById("email");
    let input_dob = document.getElementById("dob");
    let input_male = document.getElementById("male");
    let input_female = document.getElementById("female");
    let input_agree = document.getElementById("terms");

    if(input_fname.value == "" || input_lname.value == "" || input_email.value == "" || input_dob.value == "") {
        alert("Please fill all the fields");
        return false;
    }else if(input_fname.value.length < 5){
        alert("First Name must be at least 5 characters");
        return false;
    }else if(input_lname.value.length < 5){
        alert("Last Name must be at least 5 characters");
        return false;
    }else if(!input_email.value.includes("@") || !input_email.value.includes(".")){
        alert("Please input a valid email");
        return false;
    }else if(!input_male.checked && !input_female.checked){
        alert("Please choose a gender");
        return false;
    }else if(!input_agree.checked){
        alert("Please agree to the terms and conditions");
        return false;
    }else{
        document.getElementsByClassName('SubForm')[0].style.visibility = "hidden";
        document.querySelector('#done').style.visibility = 'visible';
        return true;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    let submitButton = document.querySelector('#Submit');

    submitButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent form submission from refreshing the page
        validateSub();
    });
});

// Event Page

// let Prize = document.getElementsById("Prize");
// let Car = document.getElementsById("Car");
// let People = document.getElementsById("People");
// let Earth = document.getElementsById("Earth");

// let PrizeOpen = document.getElementsById("PrizeOpen");
// let CarOpen = document.getElementsById("CarOpen");
// let PeopleOpen = document.getElementsById("PeopleOpen");
// let EarthOpen = document.getElementsById("EarthOpen");

// function OpenPrize(){

// }

document.addEventListener('DOMContentLoaded', () => {
    let prize = document.getElementById("Prize");
    let car = document.getElementById("Car");
    let people = document.getElementById("People");
    let earth = document.getElementById("Earth");

    let prizeOpen = document.getElementById("PrizeOpen");
    let carOpen = document.getElementById("CarOpen");
    let peopleOpen = document.getElementById("PeopleOpen");
    let earthOpen = document.getElementById("EarthOpen");

    prize.addEventListener('click', () => {
        prizeOpen.style.visibility = 'visible';
    });

    car.addEventListener('click', () => {
        carOpen.style.visibility = 'visible';
    });

    people.addEventListener('click', () => {
        peopleOpen.style.visibility = 'visible';
    });

    earth.addEventListener('click', () => {
        earthOpen.style.visibility = 'visible';
    });
});