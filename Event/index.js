class EventTarget {
  constructor() {
    this.listeners = {};
  }

  addEventListener(name, fn) {
    if (!this.listeners[name]) {
      this.listeners[name] = [fn];
    } else {
      this.listeners[name].push(fn);
    }
  }

  removeEventListener(name, fn) {
    if (this.listeners[name]) {
      this.listeners[name] = this.listeners[name].filter(
        (listener) => listener !== fn,
      );
    }
  }

  dispatchEvent(event) {
    if (this.listeners[event.type]) {
      this.listeners[event.type].forEach((fn) => fn(event));
    }
  }
}

var event1 = new EventTarget();

const function1 = (e) => {
  console.log(`Hello, ${e.name}!`);
};

event1.addEventListener('greet', function1);

event1.dispatchEvent({ type: 'greet', name: 'Alice' }); // Hello, Alice!

event1.removeEventListener('greet', function1);

event1.dispatchEvent({ type: 'greet', name: 'Bob' }); // No output
