const sum = (x, y) => {
  return x + y;
};

const ele = [1, 2, 3, 4, 5];
const newEle = [...ele, 45, -6];

const person = {
  name: "Suvojit",
  email: "suvojit.das@hub.com"
};

const newPerson = {
  ...person,
  number: "909090"
};

let x = [1, 2, 3];

const newX = x.map(num => {
  return num * 2;
});

console.log(newX);
