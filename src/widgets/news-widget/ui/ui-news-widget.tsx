import { useState } from "react";
import { UiNewsCard } from "@/shared/ui/ui-news-card/ui-news-card";
import { UiNewsForm } from "@/features/news/ui/ui-news-form/ui-news-form";
import { useNews } from "@/features/news/model/useNews";
import { UiModal } from "@/shared/ui/ui-modal/ui-modal";
import { UiSpinner } from "@/shared/ui/ui-spinner/ui-spinner";
import styles from "./ui-news-widget.module.scss";
import { NewsItem } from "@/shared/api/news/types";

export const UiNewsWidget = () => {
  const { news, isLoading, addNews, updateNews, deleteNews } = useNews();
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newsToDelete, setNewsToDelete] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    descripton: "",
    price: "",
  });

  const handleEdit = (news: NewsItem) => {
    setEditingNews(news);
  };

  const handleCancelEdit = () => {
    setEditingNews(null);
  };

  const handleDelete = (news: NewsItem) => {
    setNewsToDelete(news.id);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    if (newsToDelete) {
      deleteNews(newsToDelete);
      setIsModalOpen(false);
      setNewsToDelete(null);
    }
  };

  const handleSubmit = async (
    data: Omit<NewsItem, "id" | "createdAt" | "updatedAt">
  ) => {
    if (editingNews) {
      await updateNews(editingNews.id, data);
      setEditingNews(null);
    } else {
      await addNews(data);
    }
  };

  return (
    <div className={styles.widget}>
      <div className={styles.formContainer}>
        <UiNewsForm
          initialData={editingNews}
          onSubmit={handleSubmit}
          buttonClassName={styles.submitButton}
          descripton={formData}
          node={
            <>
              <div>
                <input
                  placeholder="Desription"
                  id="descripton"
                  value={formData.descripton}
                  onChange={(e) =>
                    setFormData({ ...formData, descripton: e.target.value })
                  }
                />
              </div>
              <div>
                <input
                  placeholder="Price"
                  id="price"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                />
              </div>
            </>
          }
        />
      </div>

      {isLoading ? (
        <UiSpinner />
      ) : (
        <div className={styles.newsGrid}>
          {Object.values(news)
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .map((item) => (
              <UiNewsCard
                key={item.id}
                news={item}
                onEdit={handleEdit}
                onDelete={handleDelete}
                isEditing={editingNews?.id === item.id}
                onCancelEdit={handleCancelEdit}
              />
            ))}
        </div>
      )}

      <UiModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmDelete}
        title="Delete News"
      >
        Are you sure you want to delete this news item?
      </UiModal>
    </div>
  );
};
