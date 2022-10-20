export interface ICategory {
  name: string
}

interface ICategoryFull extends ICategory {
  id: number,
}

export default ICategoryFull;
