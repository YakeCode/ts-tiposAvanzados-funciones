//string => [s,t,r,i,n,g]
//[a,r,r,a,y]=>array

export function parseString(input: string | string[] ): string | string[] {

  if (Array.isArray(input)) {
    return input.join(); // Retorna un string
  } else{
    return input.split('') // Retorna un array de strings
  }
}
