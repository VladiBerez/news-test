import { useState, useCallback, useEffect } from "react";
import { NewsItem } from "@/shared/api/news/types";
import { getNews, saveNews } from "@/shared/lib/local-storage";

export const useNews = () => {
  const [news, setNews] = useState<Record<string, NewsItem>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      try {
        setIsLoading(true);
        const savedNews = getNews();
        setNews(savedNews);
      } finally {
        setIsLoading(false);
      }
    };

    loadNews();
  }, []);

  const addNews = useCallback(
    async (data: Omit<NewsItem, "id" | "createdAt" | "updatedAt">) => {
      setIsLoading(true);
      try {
        const id = Date.now().toString();
        const newNews: NewsItem = {
          ...data,
          id,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };

        const updatedNews = { ...news, [id]: newNews };
        setNews(updatedNews);
        saveNews(updatedNews);
      } finally {
        setIsLoading(false);
      }
    },
    [news]
  );

  const updateNews = useCallback(
    async (
      id: string,
      data: Omit<NewsItem, "id" | "createdAt" | "updatedAt">
    ) => {
      setIsLoading(true);
      try {
        const updatedNews = {
          ...news,
          [id]: {
            ...news[id],
            ...data,
            updatedAt: new Date().toISOString(),
          },
        };
        setNews(updatedNews);
        saveNews(updatedNews);
      } finally {
        setIsLoading(false);
      }
    },
    [news]
  );

  const deleteNews = useCallback(
    async (id: string) => {
      setIsLoading(true);
      try {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [id]: omitted, ...rest } = news;
        setNews(rest);
        saveNews(rest);
      } finally {
        setIsLoading(false);
      }
    },
    [news]
  );

  return {
    news,
    isLoading,
    addNews,
    updateNews,
    deleteNews,
  } as const;
};
