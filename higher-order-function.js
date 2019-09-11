//Take DOM element and wrap it in alist item element
// function itemise(el) {
//   const li = document.createElement("li");
//   li.appendChild(el);
//   return li;
// }
// const itemise = function(el) {
//   const li = document.createElement("li");
//   li.appendChild(el);
//   return li;
// };
const itemise = el => {
  const li = document.createElement("li");
  li.appendChild(el);
  return li;
};

//Apply a given function to every item in a NodeList and return an array
function elListMap(transform, list) {
  //list might be a NodeList, wich doesn't have map(), so we conert it to an array
  return [...list].map(transform);
}

//Grab all the spans on the page with the class 'for-listing'
const mySpans = document.querySelectorAll("span.for-listing");

//Wrap each one inside an <li> element. We re-use the itemise() function from earlier
const wrappedList = elListMap(itemise, mySpans);
document.body.innerHTML += `<ul> ${wrappedList
  .map(item => {
    return item.outerHTML;
  })
  .join("")} </ul>`;
function addSpinnerClass(el) {
  el.classList.add("spinner");
  return el;
}

// Find all the buttons with class 'loader'
const loadButtons = document.querySelectorAll("button.loader");

// Add the spinner class to all the buttons we found.
elListMap(addSpinnerClass, loadButtons);

// function wrapWithUl(children) {
//   const ul = document.createElement("ul");
//   return [...children].reduce((listEl, child) => {
//     listEl.appendChild(child);
//     return listEl;
//   }, ul);
// }
// function wrapWithDiv(children) {
//   const div = document.createElement("div");
//   return [...children].reduce((divEl, child) => {
//     divEl.appendChild(child);
//     return divEl;
//   }, div);
// }

function createListWrapperFunction(elementType) {
  // Straight away, we return a function.
  return function wrap(children) {
    // Inside our wrap function, we can 'see' the elementType parameter.
    const parent = document.createElement(elementType);
    return [...children].reduce((parentEl, child) => {
      parentEl.appendChild(child);
      return parentEl;
    }, parent);
  };
}

const wrapWithUl = createListWrapperFunction("ul");
// Our wrapWithUl() function now 'remembers' that it creates a ul element.

const wrapWithDiv = createListWrapperFunction("div");
// Our wrapWithDiv() function now 'remembers' that it creates a div element.

function showAlert() {
  alert(this.innerHTML);
}

document.body.innerHTML += `<button type="button" class="js-alertbtn">
    Show alert
  </button>`;

const btn = document.querySelector(".js-alertbtn");

btn.addEventListener("click", showAlert);

function removeHighlights() {
  const highlightedElements = document.querySelectorAll(".highlighted");
  elListMap(el => el.classList.remove("highlighted"), highlightedElements);
}

setTimeout(removeHighlights, 3000);

function maybe(fn) {
  return function _maybe(...args) {
    // Note that the == is deliberate.
    if (args.length === 0 || args.some(a => a == null)) {
      return undefined;
    }
    return fn.apply(this, args);
  };
}

const safeElListMap = maybe(elListMap);
safeElListMap(x => x, null);

const compareNumbers = (a, b) => {
  if (a === b) return 0;
  if (a > b) return 1;
  /* else */ return -1;
};

let nums = [7, 3, 1, 5, 8, 9, 6, 4, 2];
nums.sort(compareNumbers);
console.log(nums);
// 〕[1, 2, 3, 4, 5, 6, 7, 8, 9]

const typeaheadMatches = [
  {
    keyword: "bogey",
    weight: 0.25,
    matchedChars: ["bog"]
  },
  {
    keyword: "bog",
    weight: 0.5,
    matchedChars: ["bog"]
  },
  {
    keyword: "boggle",
    weight: 0.3,
    matchedChars: ["bog"]
  },
  {
    keyword: "bogey",
    weight: 0.25,
    matchedChars: ["bog"]
  },
  {
    keyword: "toboggan",
    weight: 0.15,
    matchedChars: ["bog"]
  },
  {
    keyword: "bag",
    weight: 0.1,
    matchedChars: ["b", "g"]
  }
];

function compareTypeaheadResult(word1, word2) {
  return -1 * compareNumbers(word1.weight, word2.weight);
}

typeaheadMatches.sort(compareTypeaheadResult);
console.log(typeaheadMatches);
// 〕[{keyword: "bog", weight: 0.5, matchedChars: ["bog"]}, … ]
