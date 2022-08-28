// Modelo de datos
export type Sizes = 'M' | 'S' | 'L' | 'XL';

export type product = {
  title: string,
  createAt: Date,
  stock: number,
  size?: Sizes
};
