

// 1) створити функцію яка приймає масив та виводить його
// let array = [1,2,3,4];
// function forArr(arr){
//            for (const arrElement of arr) {
//             console.log(arrElement);
//         }
//     };
//     forArr(array)


// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

// function randNum(value,num){
//     let nums=[];

//     for(i=0;i<value; i++){
//     nums.push(Math.floor(Math.random()*num));
//     }
//  return nums

// }
// console.log(randNum(12,4));


// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function nums(num1,num2,num3){
//     if(num1<num2 && num1<num3){
//         console.log(num1)
//         return num1;
//     }else if (num2 < num3 && num2 < num1){
//                 console.log(num2);
//                 return num2;
//             }else{
//                 console.log(num3);
//                 return num3;
//             };

// }
//     nums(2,6,7)


// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function nums(num1,num2,num3){
//     if(num1>num2 && num1>num3){
//         console.log(num1)
//         return num1;
//     }else if (num2 > num3 && num2 > num1){
//                 console.log(num2);
//                 return num2;
//             }else{
//                 console.log(num3);
//                 return num3;
//             };

// }
//     nums(2,6,7)

// 5) створити функцію яка повертає найбільше число з масиву
      
    // function biggest(array){
    //     let max= array[0];
    //     for( let eachElement of array){
    //         if(eachElement>max) { 
    //             max=eachElement;}
               
           
    //     }
    //     return max
    // }
    // console.log(biggest([2,3,4,5,6,7]));

// 6) створити функцію яка повертає найменьше число з масиву
// function smallest(array){
//     let min= array[0];
//     for( let eachElement of array){
//         if(eachElement<min) { 
//             min=eachElement;}
           
       
//     }
//     return min
// }
// console.log(smallest([2,3,4,5,6,7]));


// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// function sumator(arr){
//     let sum=0;

//     for(let elements of arr){
//         sum+=elements
//     }
//       return sum;
// }

// console.log(sumator([2,3,1,2]))


// let arr=[2,3,1,2];
// let result=arr.reduce(function(sum, values){
//     return sum+values;
// },0);
// console.log(result)

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function average(arr){
//     let sum=0;

//     for(let elements of arr){
//         sum+=elements
//     }
//       return sum/arr.length;
// }
  
// console.log(average([2,3,1,2]))

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]


// let mas=[{name: 'Dima', age: 13},{model: 'Camry'}];

// let mas1= mas.map(obj=>{
// return Object.keys(obj)

// })

//  console.log(mas1)

    
   



// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів


// let mas=[{name: 'Dima', age: 13},{model: 'Camry'}];
// let mas1= mas.map(obj=>{
//     return Object.values(obj)
    
//     })
    
//      console.log(mas1)

// let mas=[{name: 'Dima', age: 13},{model: 'Camry'}];
   
  
// for(const value in mas){

//   console.log(Object.values(mas[value]))

// }








// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]


// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
   
// const summator=(arr1,arr2)=>{
//     let arr3=[];
//     for(let i=0;i<arr1.length; i++){
//         arr3.push(arr1[i]+arr2[i]);
//     }
//     return arr3;
// }
// const res=summator([1,2,3,4], [2,3,4,5]);
// console.log(res)


// EXAMPLE:
//   
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// Відомо вартість одного кілограма цукерок. Вивести на екран вартості 1, 2, 3, ...10 кг цукерок.
// let price=22;
// for( let i=1; i<=10; i++){
//     let sum= price*i
//     console.log(sum)
// }

// З клавіатури вводиться 12 довільних чисел. Підрахувати кількість додатніх чисел.
// let mas=[2,-4,-5,-5,2,3,-4,5,45];
// // let amount=[];
// let amount=0;
// for(let i=0; i<=mas.length; i++){
//     if(mas[i]>0){
//         amount++
//         // amount.push(mas[i])
//     }
// }
// console.log(amount);

// З клавіатури вводиться температура повітря за К днів. Підрахувати середню температуру теплих та холодних днів.
// let mas=[-2,2,-3,-4,5,5,-2,2,0];
// let warm=0;
// let cold=0;
// let aver1=0;
// let aver2=0;
// for(let i=0; i<=mas.length; i++){
    
//         if(mas[i]>0){
//             warm+=mas[i];
//             aver1++;
         
//         }
//         else if(mas[i]<=0){
//             cold+=mas[i];
//             aver2++;
            
//         }
//     }
//     warm=warm/aver1;
//     cold=cold/aver2;
//     console.log(warm);
//     console.log(cold);

// З клавіатури вводиться К довільних чисел. Визначити перше відємне число.
// let mas=[2,4,-4,2,3];
// for(let i=0; i<mas.length;i++){
//     if(mas[i]<0){
//         let num=mas[i]
//         console.log(num)
//         break
//     }
//    else{
       
//        console.log(mas[i])
//    }
   
// }


//З клавіатури вводиться результати змагань для К спортсменів.
// (Визначити три найкращих результати.)

// let mas=[2,2,1,3,1,5,6,6];
// for(let i=0; i<mas.length;i++){
//          if(mas[i]=='1'){
//              console.log(mas[i])
//          }}

// let a=1636;
// a/=100;
// console.log(a)


// Знайти значення aN без використання функції pow(a, N).
// let a=prompt("Enter a:", 2);
// let n=prompt("Enter n:", 10)
// let a=2;
// let n=10;
// for(let i=0;i<=n;i++){
// a*=a
// }
// console.log(a)




