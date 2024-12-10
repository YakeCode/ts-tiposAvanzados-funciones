//tipado normal de un array
const array :(number | string)[] = [1,2,3,'a','b','c',]

//Tipado de tuplas

const user:[string, number]= ['Yake', 26]

// tuplas con desestruccturación

let randomData:[string, number,boolean];

randomData = ['Hola', 30, true]
randomData = ['ok', 30, false]

const [palabra, numero] = randomData

console.log(palabra)
console.log(numero)

// Ejemplo

type CellValue = 'x' | 'o' | ''

type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
];


const GameBoard : GameBoard = [
  ['x', 'o', 'x'],
  ['x', 'o', 'x'],
  ['x', '', 'x'],
]
