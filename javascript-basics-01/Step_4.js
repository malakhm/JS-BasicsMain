
function printUserInput(){
    let name;
    let nameValue 
    let surname;
    let surnameValue;
    let city;
    let cityValue;

    name = document.getElementById('name');
    nameValue = name.value;
    surname = document.getElementById('surname');
    surnameValue= surname.value;

    city = document.getElementById('city');
    cityValue = city.value;

    alert('Surname: '+ surnameValue + '\n' + 'Name: ' + nameValue + '\n' + 'city: '+  cityValue);
}