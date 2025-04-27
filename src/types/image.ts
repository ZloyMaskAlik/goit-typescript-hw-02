export type Image = {
  id: number;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  description: string;
  likes: number;
  user: {
    name: string;
  };
};
