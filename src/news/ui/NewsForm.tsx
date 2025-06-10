import React, { useState } from "react";
import { INews } from "../../../entities/news/model/types";
import { newsApi } from "../api/newsApi";

interface NewsFormProps {
  news?: INews;
  onSuccess: () => void;
}

export const NewsForm: React.FC<NewsFormProps> = ({ news, onSuccess }) => {
  const [formData, setFormData] = useState({
    title: news?.title || "",
    content: news?.content || "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (news) {
        await newsApi.update(news.id, formData);
      } else {
        await newsApi.create({
          ...formData,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
      }
      onSuccess();
    } catch (error) {
      console.error("Failed to save news:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Content
        </label>
        <textarea
          value={formData.content}
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          rows={4}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {news ? "Update" : "Create"} News
      </button>
    </form>
  );
};
