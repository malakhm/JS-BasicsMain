function calc(){
    let shoe;
    let dob;
    let shoeValue;
    let dobValue;
    let multiply2;
    let add;
    let multiply50;
    let sub;
    let result;

    shoe = document.getElementById('shoe_size');
    dob = document.getElementById('year');
    shoeValue = shoe.value;
    dobValue = dob.value;

    multiply2 = shoeValue * 2;
    add = multiply2 + 5;
    multiply50 = add * 50;
    sub = multiply50 - dobValue;
    result = sub + 1766;

    alert("the result is: " + result);




}