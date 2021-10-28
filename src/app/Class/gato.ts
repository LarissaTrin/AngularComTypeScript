import { Animal } from "./animal";
export class Gato extends Animal {
  constructor(name: string) { super(name); }
  makeSound(input : string) : string {
      return "miau"+input;
  }
  move() {
    console.log("movedo...");
    super.moveabstact(5);
  }
}
