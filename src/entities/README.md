# Entities Layer

## News Entity

### UiNewsCard

Компонент для отображения карточки новости.

#### Пропсы

```typescript
interface UiNewsCardProps {
  news: NewsItem;
  onEdit: (news: NewsItem) => void;
  onDelete: (id: string) => void;
}
```

#### Стили

- Адаптивная карточка с тенью
- Анимация при наведении
- Поддержка изображения
- Отзывчивый дизайн

#### Использование

```tsx
import { UiNewsCard } from "@/shared/ui/ui-news-card/ui-news-card";

<UiNewsCard
  news={{
    id: "1",
    title: "Заголовок",
    description: "Описание",
    imageUrl: "/image.jpg",
    createdAt: "2024-03-20",
  }}
  onEdit={handleEdit}
  onDelete={handleDelete}
/>;
```

### Модель данных

```typescript
interface NewsItem {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  createdAt: string;
}
```
