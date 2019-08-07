// Promise.reject("Reject DATA!")
//   .then(result => {
//     console.log("[1] then", result); // won't be called
//     return "[2] then payload";
//   })
//   .finally(() => {
//     console.log("[1] finally"); // first finally will be called
//     return "[1] finally payload";
//   })
//   .then(result => {
//     console.log("[2] then", result); // won't be called
//     return "[2] then payload";
//   })
//   .catch(error => {
//     console.log("[1] catch", error); // first catch will be called
//     return "[1] catch payload";
//   })
//   .catch(error => {
//     console.log("[2] catch", error); // won't be called
//     return "[2] catch payload";
//   })
//   .then(result => {
//     console.log("[3] then", result); // will be called
//     return "[3] then payload";
//   })
//   .finally(() => {
//     console.log("[2] finally"); // will be called
//     return "[2] finally payload";
//   })
//   .catch(error => {
//     console.log("[3] catch", error); // won't be called
//     return "[3] catch payload";
//   })
//   .then(result => {
//     console.log("[4] then", result); // will be called
//     return "[4] then payload";
//   });
// // Nested
// Promise.resolve("Fulfill DATA!")
//   .then(result => {
//     console.log("[1] then", result);

//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve("Nested promise data!");
//       }, 1000); // resolve after 1 second
//     });
//   })
//   .then(result => {
//     console.log("[2] then", result);
//   });

// // main promise
// Promise.resolve("Fulfill DATA!")
//   .then(result => {
//     console.log("[1] then", result);

//     // inner promise
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         //   reject("Nested promise error data!");
//         resolve("Fulfill nested data");
//       }, 1000);
//     }).then(data => {
//       return `Inner promise data: ${data}`;
//     });
//     //   .catch(error => {
//     //     console.log(`Inner promise catch: ${error}`); // for main and inner promise
//     //     return "catch";
//     //   });
//   })
//   .then(result => {
//     console.log("[2] then", result);
//   })
//   .catch(error => {
//     console.log("[1] catch", error); // for main and inner promise
//   });

const a = () =>
  new Promise(resolve => {
    setTimeout(() => resolve("result of a()"), 1000); // 1s delay
  });

const b = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("result of b()"), 500); // 0.5s delay
    // setTimeout(() => reject("error of b()"), 500); // 0.5s delay
  });

const c = () =>
  new Promise(resolve => {
    setTimeout(() => resolve("result of c()"), 1100); // 1.1s delay
  });

// // call a(), b(), and c() in series
// a()
//   .then(result => {
//     console.log("a() success:", result);

//     b()
//       .then(result => {
//         console.log("b() success:", result);

//         c()
//           .then(result => {
//             console.log("c() success:", result);
//           })
//           .catch(error => {
//             console.log("c() error:", error);
//           });
//       })
//       .catch(error => {
//         console.log("b() error:", error);
//       });
//   })
//   .catch(error => {
//     console.log("a() error:", error);
//   });

// // race a(), b(), c()
// // Promise.race([a(), b(), c()])
// Promise.all([a(), b(), c(), { key: "I am plain data!" }])
//   .then(data => {
//     console.log("success: ", data);
//   })
//   .catch(error => {
//     console.log("error: ", error);
//   });

// const doJobs = async () => {
//   try {
//     var resultA = await a();
//     var resultB = await b();
//     var resultC = await c();
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve({
//           values: [resultA, resultB, resultC]
//         });
//       }, 3000);
//     });
//   } catch (error) {
//     return [error];
//   }
//   return [resultA, resultB, resultC];
// };

// // doJobs() returns a promise
// doJobs()
//   .then(result => {
//     console.log("success:", result);
//   })
//   .catch(error => {
//     console.log("error:", error);
//   });

// // normal flow
// console.log("I am a sync operation!");
// async generator function
const MyAsyncGenerator = async function*() {
  yield await a();
  yield await b();
  yield await c();
};

// generator object
const gen = MyAsyncGenerator();

// get `gen` values
(async () => {
  console.log(await gen.next());
  console.log(await gen.next());
  console.log(await gen.next());
  console.log(await gen.next());
})();
