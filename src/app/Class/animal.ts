export abstract class Animal {
  constructor(public name: string) { }
    makeSoundabstract(input : string) : string {
        throw new Error('This method is abstract');
    }
    moveabstact(meters: number) {
      console.log(this.name + " moveu " + meters + " metros.");
    }
}
