// На вход подается строка '/home/user/dir/file.txt'. 
// Необходимо вернуть имя файла (подстрока после последнего символа “/" ) из полного пути к файлу('file.txt')

const str = '/home/user/dir/file.txt';

console.log(str.slice(str.lastIndexOf('f')));