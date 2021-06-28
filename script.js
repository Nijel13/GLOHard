/* part 1   */
let lang = prompt('Выберите язык');
    if (lang === 'en'){
        console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
    }
    else{
        console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
}

switch(lang) {
    case 'en': console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
    break;
    case 'ru':console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
    break;
}

let array = [];
array['.ru'] = ['Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'];
array['.en'] = ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'];
console.log(array[lang]);

/*  part 2  */
let namePerson = prompt('Введите имя');
let person = (namePerson === "Артем") ? "Директор" : (namePerson === "Максим") ? "Преподаватель" : "Студент";
console.log(person);