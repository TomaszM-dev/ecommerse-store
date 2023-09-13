export interface Billboard {
  id: String;
  name: String;
  imageUrl: string;
}

export interface Category {
  id: String;
  name: String;
  billboard: Billboard;
}
