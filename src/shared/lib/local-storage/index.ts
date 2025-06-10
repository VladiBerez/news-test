import { NewsItem } from "@/entities/news/model/types";

const NEWS_STORAGE_KEY = "news";

export const getNews = (): Record<string, NewsItem> => {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const stored = localStorage.getItem(NEWS_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.error("Error reading from localStorage:", error);
    return {};
  }
};

export const saveNews = (news: Record<string, NewsItem>): void => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.setItem(NEWS_STORAGE_KEY, JSON.stringify(news));
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
};
