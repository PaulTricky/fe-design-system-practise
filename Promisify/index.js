/**
 * 
 async function run() {
    try {
      const user = await getUserAsync(1);
      console.log(user); // { id: 1, name: "John" }
    } catch (err) {
      console.error(err);
    }
  }

  const getUserAsync = promisify(getUser);
  
  function getUser(id, callback) {
   // call api 
   // success: callback(null, { id: id, name: "John" });
   // error: callback(new Error("User not found"), null);
  }
 */

function getUser(id, callback) {
  setTimeout(() => {
    if (id === 1) {
      callback(null, { id: 1, name: 'John' });
    } else {
      callback('User not found', null);
    }
  }, 1000);
}

function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
}

const getUserAsync = promisify(getUser);

async function run() {
  try {
    const user = await getUserAsync(1);
    console.log(user); // { id: 1, name: "John" }
  } catch (err) {
    console.error(err);
  }
}

run();
