//Напишите код, который сделает из массива объект [ {name: 'width', value: 10}, {name: 'height', value: 20} ] -> {width: 10, height: 20}

interface iUser9 {
  name: string;
  value: number;
}

const arr9: iUser9[] = [
  { name: "width", value: 10 },
  { name: "height", value: 20 },
];

const obj9 = { ...arr9 };

console.log(obj9);
///?????