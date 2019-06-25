//Early exits
const {
  log
} = console;

function transformData(rawData) {
  // check if no data
  if (!rawData) {
    return [];
  }

  // check for specific case
  if (rawData.length == 1) {
    return [];
  }

  // actual function code goes here
  return rawData.map(item => item);
}
// Switch
// let createType = null;
// switch ("contentType") {
//   case "post":
//     createType = () => console.log("creating a post...");
//     break;
//   case "video":
//     createType = () => console.log("creating a video...");
//     break;
//   default:
//     createType = () => console.log("unrecognized content type");
// }

// createType();

// Object literal
const contentTypes = {
  post: () => console.log("creating a post..."),
  video: () => console.log("creating a  video..."),
  default: () => console.log("unrecognized content type")
};

const createType = contentTypes["video"] || contentTypes["default"];
createType();

// One loop two arrays
const exampleValues = [2, 15, 8, 23, 1, 32];
const [truthyValues, falseyValues] = exampleValues.reduce(
  (arrays, exampleValue) => {
    if (exampleValue > 10) {
      arrays[0].push(exampleValue);
      return arrays;
    }

    arrays[1].push(exampleValue);
    return arrays;
  },
  [
    [],
    []
  ]
);
console.log(truthyValues);
// bad
const fruit = ["apple", "banana", "cucumber"];
// okay
const fruitArr = ["apple", "banana", "cucumber"];
// good
// const fruits = ["apple", "banana", "cucumber"];

// great - "names" implies strings
const fruitNames = ["apple", "banana", "cucumber"];

// great
const fruits = [{
    name: "apple",
    genus: "malus"
  },
  {
    name: "banana",
    genus: "musa"
  },
  {
    name: "cucumber",
    genus: "cucumis"
  }
];

// bad
const open = true;
const write = true;
// const fruit = true;
// good
const isOpen = true;
const canWrite = true;
// const hasFruit = true;

// const user = {
//   fruits: ["apple"]
// };

// const hasFruit = (user, fruitName) => user.fruits.includes(fruitName);
// // what do we name this boolean?
// const x = hasFruit(user, "apple");

// const checkHasFruit = (user, fruitName) => user.fruits.includes(fruitName);
// const hasFruit = checkHasFruit(user, "apple");

// const doSomething = something => console.log(something);
// bad
// const newFruits = fruits.map(x => {
//   return doSomething(x);
// });
// // good
// const newFruits = fruits.map(fruit => {
//   return doSomething(fruit);
// });

// let result = null;
// if (conditionA) {
//   if (conditionB) {
//     result = "A & B";
//   } else {
//     result = "A";
//   }
// } else {
//   result = "Not A";
// }
let conditionA = "A";
let conditionB = "B";
const result = !conditionA ? "Not A" : conditionB ? "A & B" : "A";

this.whoIsThis = "TOP";
const arrF = () => {
  log(this);
};
const Obj = {
  whoIsThis: "Obj",
  regularF: function () {
    log(this.whoIsThis);
  },
  regularFuncWhoCalls: function () {
    log(this);

    this.innerObj.arrF();
  },
  arrowF: () => {
    log(this.whoIsThis);
    log(whoIsThis);
  },
  arrowFuncWhoDefine: () => {
    log(this);
  },
  innerObj: {
    arrF: () => {
      log(this);
    }
  }
};

// log(whoIsThis); //TOP
// log(this.whoIsThis); //TOP
// log(Obj.whoIsThis); //Obj
// Obj.regularF(); // Obj
// Obj.arrowF(); //TOP
Obj.arrowFuncWhoDefine(); //window
// Obj.regularFuncWhoCalls(); //Obj
// Obj.arrowF.call({ whoIsThis: "Fake" });
Obj.regularF.call({
  whoIsThis: "Fake"
}); //Fake
Obj.regularF.apply({
  whoIsThis: "Fake"
}); //Fake
Obj.arrowFuncWhoDefine.apply({
  whoIsThis: "Fake"
}); //window

const PI = Math.PI;
log(PI);

const fn = ({
  PI
}) => {
  log(PI);
};

fn(Math);