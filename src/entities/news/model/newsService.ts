import { NewsItem } from "./types";
import { storage } from "../../../shared/lib/localStorage";

const NEWS_STORAGE_KEY = "news_items";

export const newsService = {
  getAll: (): NewsItem[] => {
    return storage.get<NewsItem[]>(NEWS_STORAGE_KEY) || [];
  },

  create: (
    data: Omit<NewsItem, "id" | "createdAt" | "updatedAt">
  ): NewsItem => {
    const news = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const currentNews = newsService.getAll();
    storage.set(NEWS_STORAGE_KEY, [news, ...currentNews]);

    return news;
  },

  update: (id: string, data: Partial<NewsItem>): NewsItem | null => {
    const currentNews = newsService.getAll();
    const newsIndex = currentNews.findIndex((item) => item.id === id);

    if (newsIndex === -1) return null;

    const updatedNews = {
      ...currentNews[newsIndex],
      ...data,
      updatedAt: new Date().toISOString(),
    };

    currentNews[newsIndex] = updatedNews;
    storage.set(NEWS_STORAGE_KEY, currentNews);

    return updatedNews;
  },

  delete: (id: string): boolean => {
    const currentNews = newsService.getAll();
    const filteredNews = currentNews.filter((item) => item.id !== id);

    if (filteredNews.length === currentNews.length) return false;

    storage.set(NEWS_STORAGE_KEY, filteredNews);
    return true;
  },
};
