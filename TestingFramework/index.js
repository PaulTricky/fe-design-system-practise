/**
 
 describe('Dog service', () => {
    tests go here
 })

 it('should return a list of dogs', () => {
    test logic
 })

 expect(result).toEqual([{ name: 'Buddy' }])

*/

// Implementation
function describe(name, fn) {
  console.log(`Describe: ${name}`);

  try {
    fn();
  } catch (error) {
    console.error(error);
  }
}

function it(description, fn) {
  console.log(`It: ${description}`);

  try {
    fn();
  } catch (error) {
    console.error(error);
  }
}

function expect(received) {
  return new Exception(received);
}

class Exception {
  constructor(received) {
    this.received = received;

    this.stringifyReceived = JSON.stringify(received);
  }

  toEqual(expected) {
    const stringifyExpected = JSON.stringify(expected);

    if (this.stringifyReceived !== stringifyExpected) {
      return false;
    }

    return true;
  }
}

// Test
describe('Dog service', () => {
  it('should return a list of dogs', () => {
    console.log(expect([{ name: 'Buddy' }]).toEqual([{ name: 'Buddy' }]));
    console.log(expect([{ name: 'Buddy' }]).toEqual([{ name: 'Buddy 1' }]));
  });
});
