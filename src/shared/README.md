# Shared Layer

## UI Components

### UiModal

Универсальное модальное окно.

#### Пропсы

```typescript
interface UiModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}
```

#### Стили

- Затемнение фона
- Анимации появления/исчезновения
- Адаптивные размеры
- Кнопка закрытия
- Кастомизируемый футер

### UiSpinner

Индикатор загрузки.

#### Пропсы

```typescript
interface UiSpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: string;
}
```

## Styles

### variables.scss

Глобальные SCSS переменные и миксины.

#### Цвета

```scss
$color-primary: #007bff;
$color-secondary: #6c757d;
$color-success: #28a745;
$color-danger: #dc3545;
$color-warning: #ffc107;
$color-info: #17a2b8;
$color-white: #ffffff;
$color-gray-100: #f8f9fa;
$color-gray-900: #212529;
```

#### Отступы

```scss
$space-xs: 4px;
$space-sm: 8px;
$space-md: 16px;
$space-lg: 24px;
$space-xl: 32px;
```

#### Миксины

```scss
@mixin button-base {
  // базовые стили кнопки
}

@mixin button-primary {
  // стили primary кнопки
}

@mixin button-secondary {
  // стили secondary кнопки
}

@mixin respond-to($breakpoint) {
  // медиа-запросы
}
```

## Utils

### localStorage

Утилиты для работы с localStorage.

#### API

```typescript
const storage = {
  get: <T>(key: string): T | null => {...},
  set: <T>(key: string, value: T): void => {...},
  remove: (key: string): void => {...}
};
```

#### Использование

```typescript
import { storage } from "@/shared/lib/local-storage";

// Сохранение
storage.set("news", newsItems);

// Получение
const news = storage.get("news");

// Удаление
storage.remove("news");
```
