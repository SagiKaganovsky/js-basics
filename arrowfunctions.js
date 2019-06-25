      /*
            1. Given this array: `[3,62,234,7,23,74,23,76,92]`,
            use the array filter method and an arrow function to create an array of the numbers greater than `70`
            */
      const {
          table: log_table,
          error
      } = console;
      const ages = [3, 62, 234, 7, 23, 74, 23, 76, 92];
      /* Filter the startks */
      const agesFiltered = ages.filter(age => age > 70);
      log_table(agesFiltered);

      let x = [10, 20, 30, 40, 50];
      let [y, z, ...rest] = x;
      log(x);

      log(y); // 10

      log(z);
      log_table(rest);

      f = () => [1, 2, 3];

      let [a, , b] = f();
      log("A is " + a + " B is " + b);

      const url = "https://developer.mozilla.org/en-US/Web/JavaScript";

      const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
      const [, protocol, fullhost, fullpath] = parsedURL;
      log(protocol);

      let people = [{
              name: "Mike Smith",
              family: {
                  mother: "Jane Smith",
                  father: "Harry Smith",
                  sister: "Samantha Smith"
              },
              age: 35
          },
          {
              name: "Tom Jones",
              family: {
                  mother: "Norah Jones",
                  father: "Richard Jones",
                  brother: "Howard Jones"
              },
              age: 25
          }
      ];

      for (let {
              name: n,
              family: {
                  father: f
              }
          } of people) {
          log("Name: " + n + ", Father: " + f);
      }

      let user = {
          id: 42,
          displayName: "jdoe",
          fullName: {
              firstName: "John",
              lastName: "Doe"
          }
      };
      userId = ({
          id
      }) => id;
      log("userId: " + userId(user)); // "userId: 42"

      const whois = ({
          displayName: displayName,
          fullName: {
              firstName: name
          }
      }) => log(displayName + " is " + name);

      whois(user);

      let key = "z";
      let {
          [key]: foo
      } = {
          z: "bar"
      };

      log(foo); // "bar"

      const person = {
          firstName: "Tom",
          lastName: "Cruise",
          actor: true,
          age: 54 //made up
      };
      const {
          firstName: name,
          age
      } = person;
      log(name, age);

      const string = `Hey
               this
                   string
                         is awesome!`;
      log(string);

      const string2 = `
                   First
                   Second
           f`.trim();

      log(string2);

      const test = "test1234";
      const string3 = `something ${test}`;
      log(string3);

      class Person {
          constructor(name) {
              this.name = name;
          }
          hello() {
              return `Hello, I am ${this.name}.`;
          }
      }
      const flavio = new Person("Flavio");
      log(flavio.hello());

      class Programmer extends Person {
          hello() {
              return super.hello() + " I am a programmer.";
          }
      }
      const p_flavio = new Programmer("Flavio");
      p_flavio.hello();

      class ProgrammerType extends Person {
          constructor(lang, name) {
              super(name);
              this.lang = lang;
          }
          hello() {
              return `${super.hello()} I am ${this.lang} programmer.`;
          }
      }

      const p_l_flavio = new ProgrammerType("C#", "Flavio");
      log(p_l_flavio.hello());

      const isItDoneYet = done =>
          new Promise((resolve, reject) => {
              if (done) {
                  const workDone = "Here is the thing I built";
                  resolve(workDone);
              } else {
                  const why = "Still working on something else";
                  reject(why);
              }
          });

      const checkIfItsDone = done => {
          isItDoneYet(done)
              .then(ok => {
                  log(ok);
              })
              .catch(err => {
                  error(err);
              });
      };
      checkIfItsDone(false);

      checkIfItsDone(true);

      const doSomethingAsync = () => {
          return new Promise(resolve => {
              setTimeout(() => resolve("Timeout something"), 3000);
          });
      };
      const doSomething = async () => {
          log(await doSomethingAsync());
      };
      log("Before");
      doSomething();
      log("After");

      // const aFunction = async () => {
      //   return "test";
      // };

      const aFunction = async () => {
          return Promise.resolve("test");
      };
      // aFunction().then(alert);
      aFunction().then(log);

      const promiseToDoSomething = a => {
          return new Promise(resolve => {
              log("last");
              setTimeout(() => resolve(`${a} I did something`), 10000);
              // resolve("I did something");
          });
      };
      const watchOverSomeoneDoingSomething = async a => {
          log("second");
          return `${await promiseToDoSomething(a)} and I watched`;
      };

      const watchOverSomeoneWatchingSomeoneDoingSomething = async a => {
          log("first");
          return `${await watchOverSomeoneDoingSomething(
               a
             )} and I watched as well`;
      };

      watchOverSomeoneWatchingSomeoneDoingSomething(1234).then(log);