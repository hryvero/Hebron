// Зробити свій розпорядок дня.

// У вас має бути від 7 до 10 асинхронних дій з різними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.

// Напиклад.
// Прикнутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с

// І так далі
function WakeUp(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time > 8) {
        return reject("Ти запізнюєшся");
      }
      resolve("Ти молодець.Встав вчасно");
    }, 1000);
  });
}
function BreakfastCook() {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve("А тепер готуємо сніданок");
    });
  }, 500);
}
function Eating() {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve("Тепер можна їсти, смачного");
    });
  }, 2000);
}
function Waiting() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Викликай таксі");
    });
  }, 3000);
}
function Studying() {
  return new Promise((resolve) => {
    setTimeout(() => {
      let time = "4 hod";
      return resolve(`Повинен вчитися ${time}`);
    });
  }, 1000);
}
function Walking(friends) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if ((friends = "friends")) {
        return resolve("Ура, йдем гуляти!");
      }
      return reject("Прогулянки не буде:(");
    });
  }, 1000);
}
function Returning() {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve("Нарешті вдома:)");
    });
  }, 1000);
}
function Resting() {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve("ВІДПОЧИНОК!!!");
    });
  }, 1000);
}

WakeUp(prompt("time", 7))
  .then((value) => {
    console.log(value);
    return BreakfastCook();
  })

  .then((value) => {
    console.log(value);
    return Eating();
  })
  .then((value) => {
    console.log(value);

    return Waiting();
  })
  .then((value) => {
    console.log(value);
    return Studying();
  })
  .then((value) => {
    console.log(value);
    return Walking("friends");
  })

  .then((value) => {
    console.log(value);
    return Returning();
  })
  .then((value) => {
    console.log(value);
    return Resting();
  })
  .then((value) => {
    console.log(value);
  })

  .catch((reason) => {
    console.log(reason);
    console.log("Нікуди не йдеш!");
  });

//async
async function WakeUping() {
  let promise = new Promise((resolve) => {
    setTimeout(() => resolve("готово!"), 1000);
  });
  let result = await promise;

  alert(result);
}
WakeUping();
