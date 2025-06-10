import { useState } from "react";
import Image from "next/image";
import { UiModal } from "@/shared/ui/ui-modal/ui-modal";
import styles from "./ui-news-card.module.scss";
import { NewsItem } from "@/shared/api/news/types";

interface NewsCardProps {
  news: NewsItem;
  onEdit?: (news: NewsItem) => void;
  onDelete?: (news: NewsItem) => void;
  isEditing?: boolean;
  onCancelEdit?: () => void;
}

export const UiNewsCard = ({
  news,
  onEdit,
  onDelete,
  isEditing = false,
  onCancelEdit,
}: NewsCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancelClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmCancel = () => {
    setIsModalOpen(false);
    onCancelEdit?.();
  };

  const isCurrentlyEditing = isEditing;
  const isOtherCardEditing = onEdit && !isEditing && isEditing;

  return (
    <>
      <article className={styles.card}>
        {news.imageUrl && (
          <div className={styles.imageContainer}>
            <Image
              src={news.imageUrl}
              alt={news.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.newsImage}
              priority={false}
            />
          </div>
        )}
        <h2>{news.title}</h2>
        <p className={styles.newsContent}>{news.content}</p>
        <div className={styles.cardActions}>
          {isCurrentlyEditing ? (
            <button
              className="button button-secondary highlight"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          ) : (
            <>
              <button
                className={styles.editButton}
                onClick={() => onEdit?.(news)}
                disabled={isOtherCardEditing}
              >
                Edit
              </button>
              <button
                className={styles.deleteButton}
                onClick={() => onDelete?.(news)}
                disabled={isOtherCardEditing}
              >
                Delete
              </button>
            </>
          )}
        </div>
      </article>

      <UiModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmCancel}
        title="Cancel Editing"
      >
        Are you sure you want to cancel your changes?
      </UiModal>
    </>
  );
};
