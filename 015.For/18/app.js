// На вход подается число произвольной 
// длины. Необходимо обратиться к каждому 
// значению числа и выявить 
// четность/нечетность 1234 -> 
// 1 неч 2 чет 3 неч4 чет 
// 444444 -> 4 чет 4 чет 4 чет 4 чет 4 чет 4 чет

const n = String(1234);

for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 === 0) {
        console.log('Чётное');
    } else {
        console.log('Нечётное');
    }
}