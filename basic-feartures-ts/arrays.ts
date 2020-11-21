//normal js array
const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

let carsByMake: string[];

//flexible types
const importantDate: (string | Date)[] = [new Date(), '20/11/1996'];

importantDate.push(new Date());
importantDate.push('11/11/2020');
