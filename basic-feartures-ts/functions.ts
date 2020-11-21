const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): void => {
  a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  return null;
  //return undefined;
};

const throwError = (message: string): never => {
  throw new Error(message);
};

//destructuring object
const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};
const logWeather = (forecast: { date: Date; weather: string }) => {
  console.log(forecast.date);
  console.log(forecast.weather);
};
logWeather(todaysWeather);
