import React, { useEffect, useState } from "react";
import { INews } from "../../../entities/news/model/types";
import { newsApi } from "../../../features/news/api/newsApi";

export const NewsList: React.FC = () => {
  const [news, setNews] = useState<INews[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    try {
      const data = await newsApi.getAll();
      setNews(data);
    } catch (err) {
      setError("Failed to load news");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await newsApi.delete(id);
      setNews(news.filter((item) => item.id !== id));
    } catch (err) {
      setError("Failed to delete news");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="grid gap-4">
      {news.map((item) => (
        <div key={item.id} className="p-4 border rounded shadow">
          <h2 className="text-xl font-bold">{item.title}</h2>
          <p className="mt-2">{item.content}</p>
          <div className="mt-4 flex gap-2">
            <button
              onClick={() => handleDelete(item.id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
