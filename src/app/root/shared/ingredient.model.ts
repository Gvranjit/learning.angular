// export class Ingredient {
//   public name: string;
//   public amount: number;

//   constructor(name: string, amount: number) {
//     this.name = name;
//     this.amount = amount;
//   }
// }

// THE FOLLOWING IS A TYPESCRIPT WAY OF DEFINING THE ACCESSOR .. pretty convenient innit ?
export class Ingredient {
  constructor(
    public name: string,
    public amount: number,
    public urgency: 'URGENT' | 'NORMAL'
  ) {}
}