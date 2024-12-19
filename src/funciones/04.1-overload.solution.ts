export function parseString(input: string): string[];
export function parseString(input:string[]):string

/*export function parseString(input: string | string[] ): string | string[] {

  if (Array.isArray(input)) {
    return input.join(); // Retorna un string
  } else{
    return input.split('') // Retorna un array de strings
  }
}*/

// Función mas generica para poder reutilizar la funcion mas facilmente
export  function parseString(input:unknown):unknown{
  if(Array.isArray(input)){
    return input.join('');
  } else if(typeof input === 'string'){
    return input.split('')
  }
}
// Utilización

const rtaArr = parseString('YaKe')

rtaArr.forEach

const rtaStr = parseString(['Y,a,K,e'])

rtaStr.toLocaleLowerCase()
