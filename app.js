//1. Write a program to display the message “Hello World” 5 times in your browser using for loop.


for (let i = 0; i <= 5; i++) {
    console.log(`hellow world`, [i]);

}


//2. Write a program to print numeric counting from 1 to 10.


for (let i = 1; i <= 10; i++) {
    console.log(i, [i]);

}

//3. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

// let userinput = +prompt('enter table number')
// let times = +prompt(`How many time do you want?`)

// for (let i = 1; i <= times; i++) {
//     console.log(`${userinput} x  ${i} = ${userinput* i}`);

// }



//4. You have an array
//A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
//Write each element on new line with the help of for loop.


let A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];

for (let i = 0; i < A.length; i++) {
    console.log(A[i]);
}




// 5. Write a program to print items of the following array using for loop:



var fruits = [`apple`, `banana`, `mango`, `orange`, `strawberry`]

let ul = document.querySelector('ul')
for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
    document.write(fruits[i], `</br>`)
    ul.innerHTML += `<li> Element at index ${i} is ${fruits[i]}</li>`
    // ul.innerHTML =`<li> jawad${fruits[0]}<li>`
}


//6. Write a program to initialize an array of N items by using prompt. Where N is number of items as entered by the user.


// let N = prompt("Enter the number of items:");
// let array = [];
// for (let i = 0; i <br N; i++) {
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
document.write(`a.Counting: `)
for (let i = 1; i <= 15; i++) {
    // counting.push(i);
    console.log(i);
    document.write(i + `,`);
}

document.write(`</br>`);
document.write(`b.Reverse Counting: `);
for (let i = 10; i >= 1; i--) {
    // counting.push(i);
    console.log(i);
    document.write(i + `,`);
}
document.write(`</br>`);

document.write(`c.Even: `);
for (let i = 1; i <= 10; i++) {
    console.log(i);
    document.write(i * 2 + `,`);
}
document.write(`</br>`);

document.write(`d.Odd: `);
for (let i = 0; i <= 10; i++) {
    console.log(i);
    document.write(i * 2 + 1 + `,`)
}

document.write(`</br>`);

document.write(`e.Series: `);
for (let i = 1; i <= 10; i++) {
    console.log(i);
    document.write(i * 2 + `k` + `,`)
}



// 8. You have an array.
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
//Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example:

document.write(`</br>`)

let material = prompt(`enter product name`)
let sweet = [`cake`, `apple pie`, `cookie`, `chips`, `patties`];


for (let i = 1; i <= 1; i++) {

    if (sweet.includes (sweet[i])) {
        console.log('Item Available');
        document.write(`${material} are available`);
    } else {
        console.log(`item not available`);
        document.write(`${material} are not available`);
    }
}
// let N = prompt("Enter the number of items:");
// let array = [];
// for (let i = 0; i < N; i++) {
// let item = prompt("Enter item " + (i+1) + ":");
// array.push(item);
// document.write(array[i],`</br>`)
// }
// console.log(array);

