// На вход подается 1 слово. 
// Необходимо преобразовать слово в хештег. 
// Добавить проверку на ввод текстовых значений hSСhOol-> #hschool

let str = 'hSСhOol'.toLowerCase().trim();

if(!isNaN(str)){
    console.log('ошибка');
}else{
    console.log('#'+str);
}
