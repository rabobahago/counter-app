const object = {
  name: "rabo",
  walk() {
    console.log(this);
  },
};
object.walk();

let result = object.walk.bind(object);
result();

const person = {
  name: "Bolagi",
  wailk: function () {
    console.log(this);
  },
};
console.log(person);

class MajorColor {
  constructor(name) {
    this.name = name;
  }
  whatColor() {
    console.log("Hello I am ", this.name);
  }
}

class SpecialColor extends MajorColor {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  whatColorDo() {
    console.log("I am a color the child class " + this.name);
  }
}

const majorColorRed = new MajorColor("red");
const majorColorBlue = new MajorColor("blue");

console.log(majorColorRed);
console.log(majorColorBlue);
console.log(majorColorRed.whatColor());

const specialColor = new SpecialColor("#000000", 23);
console.log(specialColor.whatColor());
