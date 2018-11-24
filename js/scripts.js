document.addEventListener('DOMContentLoaded',function(){
    let name, surname, h1tag, btnCheck, person, out;

    h1tag = document.querySelector('.beginner_class');
    btnCheck = document.querySelector('#btn_check');
    name = "Marcin";
    surname = "Wo";

    person = name + " " + surname;
    //out = person.length;  
    //out = person.concat(' ', ' LINDA');
    //out = person.toUpperCase();  
    //out = person.substring(0,6);
    out = person.substring(person.length - 3);


    btnCheck.addEventListener('click', function(){

        h1tag.innerHTML = out;
    

    });

    
});