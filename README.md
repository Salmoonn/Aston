# NFT Marketplace

## Команды

- запуск - `npm start`

## 1 уровень (необходимый минимум)

### React

- Пишем функциональные компоненты c хуками в приоритете над классовыми.
- Есть разделение на [умные](https://github.com/Salmoonn/Aston/blob/master/src/pages/ItemPage/ItemPage.tsx) и [глупые](https://github.com/Salmoonn/Aston/blob/master/src/components/SubForm/SubForm.tsx) компоненты.
- Есть рендеринг списков: [Items](https://github.com/Salmoonn/Aston/blob/master/src/pages/Marketplace/components/Items/Items.tsx).
- Реализована хотя бы одна форма: [Signup](https://github.com/Salmoonn/Aston/blob/master/src/pages/Signup/Signup.tsx#67).
- Есть применение Контекст API: [Size](https://github.com/Salmoonn/Aston/blob/search/src/App.tsx).
- Есть применение предохранителя: [index](https://github.com/Salmoonn/Aston/blob/search/src/index.tsx).
- Есть хотя бы один кастомный хук: [useLogin](https://github.com/Salmoonn/Aston/blob/master/src/hooks/useLogin.ts).
- Хотя бы несколько компонентов используют PropTypes: [Button1](https://github.com/Salmoonn/Aston/blob/search/src/components/Button/Button1.tsx) .
- Поиск не триггерит много запросов к серверу
- Есть применение lazy + Suspense: [App](https://github.com/Salmoonn/Aston/blob/search/src/App.tsx).

### Redux

- Используем Modern Redux with Redux Toolkit: [store](https://github.com/Salmoonn/Aston/blob/master/src/store/index.ts).
- Используем слайсы: [authSlice](https://github.com/Salmoonn/Aston/blob/master/src/store/slices/authSlice.ts).
- Есть хотя бы одна кастомная мидлвара: [logger](https://github.com/Salmoonn/Aston/blob/master/src/store/middleware/logger.ts).
- Используется RTK Query: [authAPI](https://github.com/Salmoonn/Aston/blob/master/src/store/api/slice/auth.ts).
- Используется Transforming Responses: [transformResponse](https://github.com/Salmoonn/Aston/blob/master/src/utils/transformResponse.ts).

## 2 уровень (необязательный)

- Использован TypeScript
  <!-- - Подключен storybook и созданы несколько сторисов. -->
  <!-- - Использование Firebase для учетных записей пользователей и их Избранного. -->
  <!-- - Настроен CI/CD. -->
  <!-- - Реализована виртуализация списков -->
  <!-- - Используются мемоизированные селекторы -->
  <!-- - Используется нормализованная структура стейта -->
  <!-- - Проведена оптимизация приложения -->
  <!-- - Feature Flags. Реализовать фичу “Поделиться в телеграм”, -->
  <!-- - Накинуто парочку тестов для компонентов -->
  <!-- - Связь UI и бизнес-логики построена не через команды, а через события -->
  <!-- - Project Console API -->
