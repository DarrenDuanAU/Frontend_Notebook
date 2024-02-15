function Animal (name) {
  this.name = 'this animal ' + name 
  this.makeSound = function() {
    console.log('animal make sound!', this.name)
  }
}


const animal1 = new Animal('cat');
console.log(animal1.name);
animal1.makeSound();


const Animal = (name) => {
  this.name = 'this animal ' + name 
  this.makeSound = function() {
    console.log('animal make sound!', this.name)
  }
}


const animal2 = new Animal('cat');
console.log(animal2.name);
animal2.makeSound();