// // TODO: write a type
// // TODO: write an interface

// const getDataString = (name, age, isProgrammer) => {
//   const fullAge = isProgrammer
//     ? age + 100
//     : age;
//   return `${name}: ${fullAge}.`;
// };

// // TODO: add all types into the function
// function getDataString2(name, age, isProgrammer) {
//   const fullAge = isProgrammer
//     ? age + 100
//     : age;
//   return `${name}: ${fullAge}.`;
// };

type dataString = (name: string, age: number, isProgrammer: boolean) => string;

interface dataString2 {
    (
      name: string, 
      age:number, 
      isProgrammer: boolean
    )
    : string;
}

const getDataString: dataString2 = (name, age, isProgrammer) => {
  const fullAge = isProgrammer
    ? age + 100
    : age;
  return `${name}: ${fullAge}.`;
};

// TODO: add all types into the function
function getDataString2(name: string, age: number, isProgrammer: boolean) {
  const fullAge = isProgrammer
    ? age + 100
    : age;
  return `${name}: ${fullAge}.`;
};