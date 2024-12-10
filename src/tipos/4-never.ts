const fail = (message:string)=>{
  throw new Error(message)
}

const example = (input:unknown) =>/*never por inferencia*/{
  if(typeof input === 'string'){
    return 'es un string'
  }else if(Array.isArray(input)){
    return 'es un array'
  }
  return fail
}

console.log(example('hola')) // es un string
console.log(example([1,2,3])) // es un array
console.log(example(123))// detiene la ejecución del programa

console.log(example('hola'))// No lo corre porque el llamado anterior la detuvo
