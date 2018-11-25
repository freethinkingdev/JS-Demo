document.addEventListener('DOMContentLoaded',function(){
    // let name, surname, person, out;

    let h1tag = document.querySelector('.beginner_class');
    let btnCheck = document.querySelector('#btn_check');
    
    

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
    // let number_a, number_b, number_c,number_d, num_out;

    // number_a = 40;
    // number_b = 35;
    // number_c = -10;
    // number_d = 1.4;

    // num_out = number_a + number_b;
    // num_out = Math.ceil(number_d);
    // num_out = Math.floor(number_d);
    // num_out = Math.min(2345,234,5234,5623,53,2345,234,5234,6,4367,3456,2,623,6,46,243,6);
    // num_out = Math.max(2345,234,5234,5623,53,2345,234,5234,6,4367,3456,2,623,6,46,243,6);



    // btnCheck.addEventListener('click', function(){

    //     h1tag.innerHTML = num_out;
    //     console.log(2=='2');
    //     console.log(2==='2');
    //     console.log(typeof(null));
    //     console.log(typeof(undefined));

        
    // });


    // let age_array = [23,43,5,23,12,45,58];



    // let numA = '10', numB = 10;
    // let me_person = {
    //     name: 'Marcin',
    //     age: '40'
    // };
    // num_out = Number(numA)+numB;
    // num_out = numA.to+numB;
    // num_out = age_array;
    // num_out = me_person.name;

    // btnCheck.addEventListener('click', function(){

    //     h1tag.innerHTML = num_out;
    //     console.log(num_out);
    //     console.log(typeof num_out);
        
    // });


    // ARRAYS

    // let ages = [23,42,35,46,34,6,34,243,25,,63,46,34], arr_fun;
    // let names = ['marta','karla','anita','marlena', 'anna'];

    // arr_fun = ages.length;
    // arr_fun = ages.indexOf(34);
    
    // Adds item to the end of the array
    // ages.push(54,34,5,32,46,56,75,43,7,3,45,63,42,4);

    // Adds item to the front of the array
    // ages.unshift('DRATA');

    // Removes item from the top (element 0)
    // ages.shift();

    // Adds the element at a given index
    //  ages.splice(2,null,'LALALAND');

    // Remove the item from the bottom of the array
    //ages.pop();

    // Merging arrays
    //    arr_fun = ages.concat(names);


    // Sorting arrays
    // arr_fun = names.sort().reverse();

    // For sorting numbers one need to write the function that sorts the numbers
    // arr_fun = ages.sort(function(num_a, num_b){
    //     return num_a - num_b;
    // });


    // btnCheck.addEventListener('click', function(){

    //     h1tag.innerHTML = arr_fun;
    //     console.log(arr_fun);
        
        
    // });

    // ages.forEach(function(age){
    //     console.log(age);
        
    // });

    

    // let person_mw = {
    //     first_name: 'Marcin',
    //     last_name: 'Wuu',
    //     email: 'email@email.com',
    //     work: 'Web Developer',
    //     education: true,
    //     driving_licence: true,
    //     age: 35,
    //     getDOB: function() {
    //         return new Date().getFullYear() - this.age;
    //     },
    //     getWork: function(){
    //         return `He works as a ${this.work}.`;
    //     },
    //     family: ['wife','children']
    // };


    // let math_stuff = {
    //     add_me: function(numA=0,numB=0){
    //         return `Total of the addition ${numA} and ${numB} is ${numA+numB}.`;
            
    //     }
    // };



    // let dzisiaj = new Date();
    // let data_nowa;
    

    // data_nowa = dzisiaj.();









    



    btnCheck.addEventListener('click', function(){

        let simple_iterator = 0;
        // let some_name = prompt('What is your name love?');
        let some_name = 'Amy';
        let temp_string, temp_name;
            temp_name = some_name.toUpperCase();

        switch(some_name.toLowerCase()){
            case 'anna':
                temp_string = `Hello ${temp_name}. We have been waiting for you!`;
                break;

            case 'samanta':
                temp_string = `Hello ${temp_name}. We have a cookie for you!`;
                break;
            case 'alex':
                temp_string = `Hello ${temp_name}. Nice car you got there!`;
                break;

            default:
                temp_string = `Hello ${temp_name}. Thanks for stopping by :)`;
        }

        // if (some_name == 'Anna') {
        //     temp_string = `Hello ${some_name}. We have been waiting for you!`;
        // } else if (some_name == 'Samanta') {
        //     temp_string = `Hello ${some_name}. We have your cookie ready.`;
        // } else {
        //     temp_string = `Hello ${some_name}. Thanks for stopping by :)`;
        // }

        h1tag.innerHTML = temp_string;
        // for(let i=0;i<10;i++){
        //     console.log(i);
        // };

        // while(simple_iterator<10){
        //     console.log(`Iterator value: ${simple_iterator}`);
            
        //     simple_iterator++;
        // };
        
        // do {
        //     console.log(simple_iterator);
        //     simple_iterator++;
        // } while (simple_iterator<=0);
        




    });


    let new_names = ['ada', 'madzia', 'natalia', 'magda', 'martyna'];
    let cars = [
        {
            make: 'BMW',
            color: 'Blue'
        },
        {
            make: 'Ford',
            color: 'Red'
        },
        {
            make: 'Fiat',
            color: 'Indigo'
        }
    ];

    // for(let i =0;i<new_names.length; i++){
    //     console.log(new_names[i]);
        
    // }
    
    // new_names.forEach(function(el){
    //     console.log(el);
        
    // });

    // let car_colors = cars.map(function(color){
    //     return color.color;
    // });

    // console.log(car_colors);
    // console.log(typeof car_colors);
    
    


    // let computerPc = {
    //     make: 'Microsoft',
    //     model: 'Surface',
    //     cpu: 'i7',
    //     memory: 16,
    //     memoryUnit: 'GB'
    // };

    // for(let key in computerPc){
    //     console.log(`${key.toUpperCase()} :: ${computerPc[key]}`);
        
    // };


    // some try and catch basic


    // function elloMessage2(){
    //     console.log('This is the elllo message....');

    //     setTimeout(function(){
    //         console.log('This is the yello message....');
    //     },2000);
        
    // }

    // try {
    //     elloMessage();
    // } catch(er) {
    //     console.error(`There is no such funciton. ${er}`);
    
    // }
    
    
    
    // console.log('RULES.');
    


});