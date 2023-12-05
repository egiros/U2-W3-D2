console.log("ESERCIZIO 1");

class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAge(anotherUser) {
    if (this.age < anotherUser.age) {
      return `${anotherUser.firstName} è più vecchio di ${this.firstName}...`;
    } else if (this.age > anotherUser.age) {
      return `${anotherUser.firstName} è più giovane di ${this.firstName}...`;
    } else {
      return `${anotherUser.firstName} è della stessa età di ${this.firstName}...`;
    }
  }
}

x = new User("Antonio", "Marucci", 25, "Napoli");
console.log(
  "Nuovo user aggiunto= " +
    "Nome: " +
    x.firstName +
    " Cognome: " +
    x.lastName +
    " Età: " +
    x.age +
    " Località: " +
    x.location
);
y = new User("Franesco", "Napoli", 27, "Genova");
console.log(
  "Nuovo user aggiunto= " +
    "Nome: " +
    y.firstName +
    " Cognome: " +
    y.lastName +
    " Età: " +
    y.age +
    " Località: " +
    y.location
);
z = new User("Melissa", "Canu", 36, "Firenze");
console.log(
  "Nuovo user aggiunto= " +
    "Nome: " +
    z.firstName +
    " Cognome: " +
    z.lastName +
    " Età: " +
    z.age +
    " Località: " +
    z.location
);

console.log("Comaparando l'età: ");
console.log(x.compareAge(y));
console.log(y.compareAge(z));
console.log(z.compareAge(x));
