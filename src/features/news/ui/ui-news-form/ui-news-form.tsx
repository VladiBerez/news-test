import { useState, FormEvent, useEffect } from "react";
import { NewsItem } from "@/shared/api/news/types";
import styles from "./ui-news-form.module.scss";

interface NewsFormProps {
  initialData?: NewsItem | null;
  onSubmit: (data: Omit<NewsItem, "id" | "createdAt" | "updatedAt">) => void;
  buttonClassName?: string;
}

export const UiNewsForm = ({
  initialData,
  onSubmit,
  buttonClassName = "",
}: NewsFormProps) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    imageUrl: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title,
        content: initialData.content,
        imageUrl: initialData.imageUrl || "",
      });
    } else {
      setFormData({
        title: "",
        content: "",
        imageUrl: "",
      });
    }
  }, [initialData]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          className="input"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          className="input"
          value={formData.content}
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
          required
          rows={5}
        />
      </div>

      <div className="form-group">
        <label htmlFor="imageUrl">Image URL (optional)</label>
        <input
          type="url"
          id="imageUrl"
          className="input"
          value={formData.imageUrl}
          onChange={(e) =>
            setFormData({ ...formData, imageUrl: e.target.value })
          }
        />
      </div>

      <button
        type="submit"
        className={`button button-primary ${buttonClassName}`}
      >
        {initialData ? "Update" : "Create"} News
      </button>
    </form>
  );
};
