function checkAge(){
    let age;
    let ageValue;
    let over;
    let under;

    age = document.getElementById('age');
    ageValue = age.value;
    over = "you are over 18";
    under = "you are under 18";
  
    if(ageValue > 18)
    {
        alert(over);
    }else{
        alert(under);
    }
}