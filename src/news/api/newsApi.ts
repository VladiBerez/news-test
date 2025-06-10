import { INews } from "../../../entities/news/model/types";

export const newsApi = {
  getAll: async (): Promise<INews[]> => {
    const response = await fetch("/api/news");
    return response.json();
  },

  getById: async (id: number): Promise<INews> => {
    const response = await fetch(`/api/news/${id}`);
    return response.json();
  },

  create: async (news: Omit<INews, "id">): Promise<INews> => {
    const response = await fetch("/api/news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(news),
    });
    return response.json();
  },

  update: async (id: number, news: Partial<INews>): Promise<INews> => {
    const response = await fetch(`/api/news/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(news),
    });
    return response.json();
  },

  delete: async (id: number): Promise<void> => {
    await fetch(`/api/news/${id}`, {
      method: "DELETE",
    });
  },
};
