// Необхідно реалізувати групування користувачів за тим, на який курс вони записані. На фото приклад вихідного об'єкту
const list = [
    { name: 'Vika', course: 'REACT' },
    { name: 'Viktoria', course: 'JS' },
    { name: 'Maks', course: 'REACT' },
    { name: 'Tamara', course: 'JAVA' },
    { name: 'Volodymyr', course: 'JS' },
    { name: 'Maks',course: 'JS' },
    { name: 'Alina',  course: 'REACT' },
    { name: 'Olena', course: 'JS' },
    { name: 'Dima', course: 'JAVA' }
  ];

  let reducer=list.reduce((acc, value)=>{

    acc[value.course]=acc[value.course] || [];
    acc[value.course].push(value);
    
    return acc;

  },{});
console.log(reducer);

// let maper=list.map((item)=>{
 
 
//   items={
    
//   };
// return item

// })
// console.log(maper)

// for(elem of list){
 
//   elem[elem.course]=elem[elem.course] || [];
//   elem[elem.course].push(elem)
//   console.log(elem[elem.course])
// }







