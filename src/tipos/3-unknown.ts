let unknownVar: unknown;


unknownVar = 10;
unknownVar = "hello";
unknownVar = true;

if (typeof unknownVar === "string") {
  const strVar = unknownVar as string;
  console.log(strVar.toUpperCase());
}

// Uso en funciones
const parse = (str:string): unknown => {
  return JSON.parse(str)
}

const jsonString = '{"name": "Yake", "age": 26}'
