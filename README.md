## AWS Amplify React+Vite Starter Template

This repository provides a starter template for creating applications using React+Vite and AWS Amplify, emphasizing easy setup for authentication, API, and database capabilities.

## Overview

This template equips you with a foundational React application integrated with AWS Amplify, streamlined for scalability and performance. It is ideal for developers looking to jumpstart their project with pre-configured AWS services like Cognito, AppSync, and DynamoDB.

## Features

- **Authentication**: Setup with Amazon Cognito for secure user authentication.
- **API**: Ready-to-use GraphQL endpoint with AWS AppSync.
- **Database**: Real-time database powered by Amazon DynamoDB.

## Deploying to AWS

For detailed instructions on deploying your application, refer to the [deployment section](https://docs.amplify.aws/react/start/quickstart/#deploy-a-fullstack-app-to-aws) of our documentation.

## Internationalization (i18n)

This project has been configured with `i18next` to support internationalization.

### Installation

The following packages are used for i18n:

- `i18next`
- `react-i18next`
- `i18next-browser-languagedetector`
- `i18next-resources-to-backend`

These packages can be installed using npm:

```bash
npm install i18next react-i18next i18next-browser-languagedetector i18next-resources-to-backend
```

### Configuration

The i18n configuration is located in [`src/i18n/config.ts`](src/i18n/config.ts). It uses `i18next-browser-languagedetector` to detect the user's language and `i18next-resources-to-backend` to load translation files dynamically.

Translations are stored in JSON files under the `src/i18n/locales` directory. Each language has its own subdirectory (e.g., `en`, `ja`), and translation keys are organized within `translation.json` files.

- English translations: [`src/i18n/locales/en/translation.json`](src/i18n/locales/en/translation.json)
- Japanese translations: [`src/i18n/locales/ja/translation.json`](src/i18n/locales/ja/translation.json)

The `src/main.tsx` file imports the i18n configuration to initialize it when the application starts.

### Usage in Components

To use translations in your React components, import the `useTranslation` hook from `react-i18next`:

```typescript
import { useTranslation } from "react-i18next";

function MyComponent() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <p>{t("description.part1")}</p>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("ja")}>日本語</button>
    </div>
  );
}
```

You can access translated strings using the `t` function (e.g., `t("welcome")`). To change the language, use `i18n.changeLanguage(lng)`.

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.
