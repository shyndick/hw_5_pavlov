// 1. Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа передаются параметром.
console.log('задача 1');

function getNumber(a, b, c) {
    let number = (a - b)/c;
    return number;
}

console.log(getNumber(5, 2, 3));


// 2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается параметром.
console.log('задача 2');

function getNumber2(number) {
    let arr2 = [];
    arr2.push(number**3);
    arr2.push(number**2);

    // let kvadrat = number**2;
    // console.log(kvadrat);
    // let kub = number**3;
    // console.log(kub);
    // return kub, kvadrat;
    return  arr2; 
}

console.log(getNumber2(5));



// 3. Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.
console.log('задача 3');

function getNumber3(a, b) {
    if (a > b) {
        console.log(`${a} большее из чисел, ${b} Меньшее из чисел`);
    } else {
        console.log(`${b} большее из чисел, ${a} Меньшее из чисел`);
    }

    return;
}

getNumber3(6, 48);


// 4. Напишите две функции: первая ф-ция должна возвращать массив счисловыми значениями, диапазон которых должен вводиться пользователем с клавиатуры; вторая – выводить полученный массив.
console.log('задача 4');

function getNumber4(a, b) {
    let arr4 = [];
    for(let i = a; i <= b; i++){
        arr4.push(i);
        
    }
return arr4;
} 

console.log(getNumber4(4, 9));

// getNumber4(4, 9);

// function getArr4() {

// }

// console.log(getArr4)


//5. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное — false.
console.log('задача 5');

function isEven(number) {
    let number5;
    if (number % 2 == 0) {
        number5 = true;
    } else {
        number5 = false;
    }
    return number5;
}

console.log(isEven(6))

// 6. Напишите ф-цию, в которую передается массив с целыми числами. Верните новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
console.log('задача 6');

let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function sortArr6(arr) {
    let arr61 = [];
    for(let i = 0; i < arr.length; i++) {
       // console.log(isEven(i))
        if (isEven(arr[i]) == true) {
            arr61.push(+arr[i])
        }

    }
    return arr61; 
}

console.log(sortArr6(arr6));


// 7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные циклы):
//     1
//     22
//     333
//     4444
//     55555
//     666666
//     7777777
//     88888888
//     999999999
//     Кол-во рядов должно вводиться параметром. Если пользователь ввел доп. параметр, непредусмотренный ф-цией по умолчанию - один любой символ, кроме пробела, то пирамида должна быть нарисована этим символом, например:
    
//     *
//     **
//     ***
//     ****
//     *****
//     ******
//     *******
//     ********
//     *********

// console.log('задача 7');

function pyramid(number7) {
    
    for(let i = 1; i <= number7; i++) {
        let pyram = '';
        
        for(let x = 1; x <= i; x++){
            pyram = pyram + i;
            // console.log(i)
        }
        console.log(pyram);   
    }
}

pyramid(9);




