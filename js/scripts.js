document.addEventListener('DOMContentLoaded',function(){
    let name, surname, h1tag, btnCheck, person, out;

    h1tag = document.querySelector('.beginner_class');
    btnCheck = document.querySelector('#btn_check');
    
    
    
    // Some basic strings methods in JS
    // name = "Marcin";
    // surname = "Wo";
    // person = name + " " + surname;
    //out = person.length;  
    //out = person.concat(' ', ' LINDA');
    //out = person.toUpperCase();  
    //out = person.substring(0,6);
    //out = person.substring(person.length - 3);
    //out = person.replace(name, 'Nina');

    // btnCheck.addEventListener('click', function(){

    //     h1tag.innerHTML = out;
    

    // });

    // Some basic numbers in JS
    let number_a, number_b, number_c,number_d, num_out;

    number_a = 40;
    number_b = 35;
    number_c = -10;
    number_d = 1.4;

    // num_out = number_a + number_b;
    // num_out = Math.ceil(number_d);
    // num_out = Math.floor(number_d);
    // num_out = Math.min(2345,234,5234,5623,53,2345,234,5234,6,4367,3456,2,623,6,46,243,6);
    // num_out = Math.max(2345,234,5234,5623,53,2345,234,5234,6,4367,3456,2,623,6,46,243,6);


    btnCheck.addEventListener('click', function(){

        h1tag.innerHTML = num_out;
        console.log(2=='2');
        console.log(2==='2');
        console.log(typeof(null));
        console.log(typeof(undefined));

        
    });

    
});