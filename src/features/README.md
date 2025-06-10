# Features Layer

## News Feature

### UiNewsForm

Компонент формы для создания и редактирования новостей.

#### Пропсы

```typescript
interface UiNewsFormProps {
  initialData?: NewsItem;
  onSubmit: (data: NewsItem) => void;
  onCancel: () => void;
}
```

#### Функциональность

- Валидация полей
- Предпросмотр изображения
- Адаптивный дизайн
- Поддержка режимов создания и редактирования

#### Поля формы

- Заголовок (обязательное)
- Описание (обязательное)
- URL изображения (опциональное)

#### Стили

- Отзывчивая форма
- Стилизованные поля ввода
- Кнопки действий с состояниями наведения

#### Использование

```tsx
import { UiNewsForm } from '@/features/news/ui/ui-news-form/ui-news-form';

// Создание новости
<UiNewsForm
  onSubmit={handleSubmit}
  onCancel={handleCancel}
/>

// Редактирование новости
<UiNewsForm
  initialData={newsItem}
  onSubmit={handleSubmit}
  onCancel={handleCancel}
/>
```

### Валидация

- Заголовок: минимум 5 символов
- Описание: минимум 10 символов
- URL изображения: валидный URL (опционально)
