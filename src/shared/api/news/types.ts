export interface NewsItem {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  descripton?: string;
  updatedAt: string;
  imageUrl?: string;
}

export interface NewsState {
  items: NewsItem[];
  loading: boolean;
  error: string | null;
}
