

function confirm(){
    let confirm = prompt("Are you sure you want to reset the form?");
    if (confirm == "y" || confirm == "Y")
    {
        clear();
    }
    else if (confirm == "n" || confirm == "N")
    {
        pass;
    }

    else
    {
        alert("Please enter a valid answer(y or n) ")
    }

}
function clear(){
   
        let input1 = document.getElementById("name");
        let input2 = document.getElementById("surname");
        let input3 = document.getElementById("city")
        input1.value = " ";
        input2.value = " ";
        input3.value = " ";
    
}
