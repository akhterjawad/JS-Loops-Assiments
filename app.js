//1. Write a program to display the message “Hello World” 5 times in your browser using for loop.


for (let i = 0; i <= 5; i++) {
    console.log(`hellow world`,[i]);
    
}


//2. Write a program to print numeric counting from 1 to 10.


for (let i = 1; i <= 10; i++) {
    console.log(i,[i]);
    
}

//3. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

let userinput = +prompt('enter table number')
let times = +prompt(`How many time do you want?`)

for (let i = 1; i <= times; i++) {
    console.log(`${userinput} x  ${i} = ${userinput* i}`);
    
}



//4. You have an array
//A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
//Write each element on new line with the help of for loop.


let A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];

for (let i = 0; i < A.length; i++) {
    console.log(A[i]);
}




// 5. Write a program to print items of the following array using for loop: