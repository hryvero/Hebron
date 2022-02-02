// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
// Оперативна память.
// Потужність процесора. (цифра від 0 до 1000)
// Назва.
// В кожного компютера має бути метод включання.
// ===


class Computer{
    constructor(operativka, power, name){
        this.operativka=operativka;
        this.power=power;
        this.name=name
        
        
    }
    turnOn() {
  console.log(`The computer ${this.name} is turned on`);
    }

}
let msi= new Computer(1500,1200,"MSI");
console.log(msi.operativka);
// Від базового компютрера треба реалізувати ноутбук.
// Він має нову властивість дюймаж монітора.
// У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)

// class Notebook extends Computer{
//     constructor(operativka,power,name, width, batery){
//         super(operativka,power,name);
//         this.width=width;
//         this.batery=power/(width*operativka)
        
       
        
//     }

// }
// let worker=new Notebook(1200,600 ,'lg',20);
// console.log(worker.batery);

// ===
// Від ноутбука потрібно зробити ультрабук.
// Він має нову змінну ваги.
// При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.

// class Ultrabook extends Notebook{
//     constructor(operativka,power,name, width, batery, weight){
//         super(operativka,power,name, width, batery);

//         this.weight=weight;

//     }

//     algoritm(){
//         if(this.weight>2 || this.batery<4){
//             console.log(`Error`)
//         }
//     }
// }
// let system =new Ultrabook(122,2220,'lenovo',45,20,4);
// system.algoritm()
// ===


// Від базвого класу потрібно створити базовий ПК.
// В нього має бути новий метод запуску ігор.
// Кількість FPS визначається як потужність / опервтивку.
// Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`


// Компютер можна апгрейдити.
// Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
// Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
// Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.


class PK extends Computer{
    constructor(operativka, power, name,fps){
        super(operativka, power, name);
        this.fps=power/operativka;       
    }
 increasing(power) {

    if(this.power){
   let newpower= this.power*0.1;
   this.power+=newpower;
   console.log(this.power)
    }

 }

 increasing2(){
     this.opertivka=this.operativka*2;
     console.log(this.opertivka)

 }


   
   
}
let game=new PK(200,1020,'GTA');
console.log(`You are playing ${game.name} with ${game.fps}`)
game.increasing();
game.increasing2()




// ===
// Від базового ПК необхідно зробити ігровий ПК.
// Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
// При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// що на цьому відрі ігри не запускаються.

class Gaming extends PK{

    constructor(operativka, power, name,fps){
        super(operativka, power, name,fps);
        
    }
    parametrs(fps){
        this.fps=fps*2;
        console.log(fps)
    }
    method(){
        let smallerPower=this.power*0.1;
        this.power=this.power-smallerPower;
        console.log(this.power)
    }
  checking(){
      if(this.power<500 || this.operativka<8){
          alert(`На цьому відрі ігри не запускаються)`)

      }
  }

  
}

let  value=new Gaming(5,650,'GTA',22);
value.parametrs();
value.method();
value.checking()



