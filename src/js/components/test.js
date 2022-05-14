class Test {
  constructor() {
    console.log('this is test.js');

    this.get();
  }

  async get() {
    const data = await fetch('https://swapi.dev/api/people/1').then(data => data.json());
    console.log('data: ', data);
  }
}

export default Test;
