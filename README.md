# News Portal

Новостной портал, построенный на Next.js с использованием архитектуры Feature-Sliced Design (FSD).

## Архитектура

Проект следует принципам Feature-Sliced Design, разделяя код на следующие слои:

### 1. App Layer

Корневой слой приложения, содержащий:

- `layout.tsx` - основной layout приложения
- `page.tsx` - главная страница
- Глобальные стили и конфигурации

### 2. Widgets Layer

Композиционный слой для сборки функциональных блоков:

#### NewsWidget

- Компонент-композиция для отображения списка новостей
- Интегрирует сущности и фичи для работы с новостями
- Управляет состоянием списка новостей и модальными окнами

### 3. Features Layer

Слой пользовательских сценариев:

#### News Feature

- `ui-news-form` - форма создания/редактирования новости
  - Валидация полей
  - Обработка отправки формы
  - Адаптивный дизайн

### 4. Entities Layer

Бизнес-сущности:

#### News Entity

- `ui-news-card` - карточка новости
  - Отображение изображения, заголовка и описания
  - Кнопки управления (редактирование/удаление)
  - Адаптивный дизайн

### 5. Shared Layer

Переиспользуемые ресурсы:

#### UI Components

- `ui-modal` - модальное окно
  - Кастомизируемый заголовок и содержимое
  - Анимации открытия/закрытия
  - Поддержка кнопок действий
- `ui-spinner` - индикатор загрузки

#### Styles

- `variables.scss` - SCSS переменные и миксины
  - Цветовая палитра
  - Отступы и размеры
  - Тени и радиусы
  - Миксины для кнопок и адаптива

#### Utils

- `localStorage` - утилиты для работы с локальным хранилищем
  - Сохранение/получение данных
  - Типизация данных

## Стилизация

Проект использует SCSS модули с следующими особенностями:

- Изолированные стили для компонентов
- Переиспользуемые миксины и переменные
- Адаптивный дизайн через миксин `respond-to`
- Единая система отступов и цветов

## Компоненты

### UiModal

Универсальное модальное окно:

```tsx
<UiModal
  isOpen={boolean}
  onClose={() => void}
  title="Заголовок"
>
  Содержимое
</UiModal>
```

### UiNewsCard

Карточка новости:

```tsx
<UiNewsCard
  news={NewsItem}
  onEdit={() => void}
  onDelete={() => void}
/>
```

### UiNewsForm

Форма новости:

```tsx
<UiNewsForm
  initialData={NewsItem?}
  onSubmit={(data: NewsItem) => void}
  onCancel={() => void}
/>
```

## Типы данных

```typescript
interface NewsItem {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  createdAt: string;
}
```

## Стили

### Цветовая палитра

- `$color-primary` - основной цвет
- `$color-secondary` - вторичный цвет
- `$color-danger` - цвет опасности/удаления
- `$color-white` - белый
- `$color-gray-{100-900}` - оттенки серого

### Отступы

- `$space-xs`: 4px
- `$space-sm`: 8px
- `$space-md`: 16px
- `$space-lg`: 24px
- `$space-xl`: 32px

### Breakpoints

- `small`: 576px
- `medium`: 768px
- `large`: 1200px

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
