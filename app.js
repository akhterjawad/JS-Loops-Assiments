//1. Write a program to display the message “Hello World” 5 times in your browser using for loop.


// for (let i = 0; i <= 5; i++) {
//     console.log(`hellow world`, [i]);

// }


//2. Write a program to print numeric counting from 1 to 10.


// for (let i = 1; i <= 10; i++) {
//     console.log(i, [i]);

// }

//3. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

// let userinput = +prompt('enter table number')
// let times = +prompt(`How many time do you want?`)

// for (let i = 1; i <= times; i++) {
//     console.log(`${userinput} x  ${i} = ${userinput* i}`);

// }



//4. You have an array
//A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
//Write each element on new line with the help of for loop.


// let A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];

// for (let i = 0; i < A.length; i++) {
//     console.log(A[i]);
// }




// 5. Write a program to print items of the following array using for loop:



// var fruits = [`apple`, `banana`, `mango`, `orange`, `strawberry`]

// let ul = document.querySelector('ul')
// for (let i = 0; i < fruits.length; i++) {
//     console.log(i, fruits[i]);
//     document.write(fruits[i], `</br>`)
//     ul.innerHTML += `<li> Element at index ${i} is ${fruits[i]}</li>`
//     // ul.innerHTML =`<li> jawad${fruits[0]}<li>`
// }


//6. Write a program to initialize an array of N items by using prompt. Where N is number of items as entered by the user.


// let N = prompt("Enter the number of items:");
// let array = [];
// for (let i = 0; i < N; i++) {
// let item = prompt("Enter item " + (i+1) + ":");
// array.push(item);
// document.write(array[i],`</br>`)
// }
// console.log(array);





//7. Generate the following series in your browser. See example output.
//a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
//b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
//c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
//d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
//e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

document.write(`</br> `)

// let counting = []
// document.write(`a.Counting: `)
// for (let i = 1; i <= 15; i++) {
//     // counting.push(i);
//     console.log(i);
//     document.write(i + `,`);
// }

// document.write(`</br>`);
// document.write(`b.Reverse Counting: `);
// for (let i = 10; i >= 1; i--) {
//     // counting.push(i);
//     console.log(i);
//     document.write(i + `,`);
// }
// document.write(`</br>`);

// document.write(`c.Even: `);
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     document.write(i * 2 + `,`);
// }
// document.write(`</br>`);

// document.write(`d.Odd: `);
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
//     document.write(i * 2 + 1 + `,`)
// }

// document.write(`</br>`);

// document.write(`e.Series: `);
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     document.write(i * 2 + `k` + `,`)
// }



// 8. You have an array.
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
//Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example:

document.write(`</br>`)

// let emtyArray = [`cake`, `apple pie`, `cookie`, `chips`, `patties`]
// let item = prompt(`enter your item`)
// let myfunc = indexNumber =>{
//     return indexNumber === item
// }
// let value = emtyArray.findIndex(myfunc)
// console.log(value);
//     if (emtyArray.includes(item)) {
//         document.write(`${item} are availale at index ${value}`)
//     } else {
//         document.write(`${item} not available`)
//     }

//9. Write a program to identify the largest number in the given array.
// let A = [24, 53, 78, 91, 12]
// document.write(A)
// A.sort((a,b)=>{
// return b-a
// })
// document.write(`</br>`,`the largers number of the aray is `,A[0])



 //10. Write a program to identify the smallest number in the given array.
//  let b = [24, 53, 78, 91, 12]
// document.write(`</br>`,b)
//  b.sort((a,b)=>{
//     return a-b
//  } )
//  document.write(`</br>`,`the smallest number of the aray is `,b[0],`</br>`)



// 11. Write a program to identify the largest & the smallest number in the given array.




// let B = [90,67,109,672,787,1000,653];
// let largestNumber = Math.max(...B)
// document.write("THE LARGEST NUMBER OF ARRAY IS " +largestNumber,`</br>`)

// let smallesttNumber = Math.min(...B)

// document.write("THE SMALLEST NUMBER OF ARRAY IS " +smallesttNumber)
// // done


//12. Write a program to print multiples of 5 ranging 1 to 100

// let c = [5]
// for (let i = 1; i <= 20; i++) {
//     document.write(c*i+`,`);
// } 


// //13. You have given the following arrays:   Write a program to generate the following HTML table in your browser using JS.
// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];

// document.write(`<table>
// <tr>
//     <td>Student</td>
//     <td>Scores</td>
// </tr>
// <tr>
//     <td>${students[0]}</td>
//     <td>${scores[0]}</td>
// </tr>
// <tr>
//     <td>${students[1]}</td>
//     <td>${scores[1]}</td>
// </tr>
// <tr>
//     <td>${students[2]}</td>
//     <td>${scores[2]}</td>
// </tr>
// <tr>
//     <td>${students[3]}</td>
//     <td>${scores[3]}</td>
// </tr>
// </table>`)
// document.write(`</br>`)



// 14. Write a program that prints number from start of the array to desired stop value. Given array:
// var scores = [12, 45, 3, 22, 34, 50];
// (Hint: take stop value from user)
// E.g. if user gives 3 as input value print 12, 45, 3 if user gives 34 as input value print 12, 45, 3, 22, 


// let scores = [12, 45, 3, 22, 34, 50];
// let scoresNumber = prompt(`enter any number`)
// for (let i = 0; i <= scoresNumber -1; i++) {
//     document.write(scores[i]+`,`)    
// }



// 15. You have an array
//A = [ [1,2,3] , [4,5,6] , [7,8,9] ]
//Write each element on new line with the help of nested for loops.


let nested = [ [1,2,3] , [4,5,6] , [7,8,9] ]

for (let i = 0; i < nested.length; i++) {
document.write(nested[i],`</br>`)    
}

// 16. Write a program to repeatedly print the value of the variable num which is input by user. Value should be decreasing by 0.5 each time, as long as x Value remains positive.

// let enternum = +prompt(`enter yournumber`)
// for (let i = 0; i <= enternum-0.5 ; i++) {
// document.write(i-0.5,`,`)    
// }
// document.write(enternum)



for (let i = 0; i <= 10; i++) {
    console.log('even number  ===> ' , i*2);
    for(let j = i; j <= i; j++){
        console.log('odd number===>' , +2+j+i-1);
    }
}


