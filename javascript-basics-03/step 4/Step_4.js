function validation(){
    let pass = document.getElementById('password');
    passValue = pass.value;
    let confirm = document.getElementById('confirmation');
    confirmValue = confirm.value;
    

    if(passValue != confirmValue){
        pass.style.border = '2px solid red';
        confirm.style.border = '2px solid red';


    }else{
        pass.style.border = '2px solid black';
        confirm.style.border = '2px solid black';

    }
}