class Key {
  private key: number;
  constructor() {
    this.key = Math.floor(Math.random() * 1000);
  }
  getKey() {
    return this.key;
  }
}

class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }
  getKey() {
    return this.key;
  }
}

abstract class House {
  door: boolean;
  key: Key;
  tenants: Person[];
  constructor(key: Key) {
    this.door = false;
    this.key = key;
  }

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getKey() === this.key.getKey()) {
      this.door = true;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
