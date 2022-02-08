// // TODO: write a type
// // TODO: write an interface

// const obj = {
//     id: 'id_1',
//     timestamp: Date.now(),
//     setTimeout: window.setTimeout,
//   };
  
//   obj.nextId = 'id_2';
  
//   obj.people = [['Dima', 12], ['Dimon', 38], ['Dimas', 99]];
//   obj.people.push(['Dimka', 20]);
  


// TODO: write a type
// TODO: write an interface
type people = [string, number ]

interface objInterface {
  id: string,
  timestamp: number,
  people?: people[],
  setTimeout: Window["setTimeout"],
  nextId?: string,
}

const obj: objInterface = {
  id: 'id_1',
  timestamp: Date.now(),
  setTimeout: window.setTimeout,
};

obj.nextId = 'id_2';
obj.people = [['Dima', 12], ['Dimon', 38], ['Dimas', 99]];
obj.people.push(['Dimka', 20]);

