// Tuple can contain two values of different data types
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

//option 1:
// const pepsi: [string, boolean, number] = ['brown', true, 40];

//option 2:
//Alias for type
type Drink = [string, boolean, number];
const pepsi: Drink = ['brown', true, 40];

// pepsi[0] = 40 =>>error
