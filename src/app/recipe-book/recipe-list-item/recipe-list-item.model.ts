export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredient: string;

  constructor(
    name: string,
    description: string,
    imagePath: string,
    ingredient: string
  ) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredient = ingredient;
  }
}
