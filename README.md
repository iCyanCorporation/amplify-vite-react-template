## AWS Amplify React+Vite Starter Template

This repository provides a comprehensive starter template for building modern web applications using React+Vite, integrated with AWS Amplify Gen 2. It emphasizes easy setup for authentication, API, database capabilities, and includes popular libraries like Shadcn UI, i18n for internationalization, and Redux for state management.

## Overview

This template equips you with a foundational React application integrated with AWS Amplify, streamlined for scalability and performance. It is ideal for developers looking to jumpstart their project with pre-configured AWS services and essential frontend libraries.

## Features

- **AWS Amplify Gen 2**: Seamless integration with Amplify's latest generation for backend services.
- **Authentication**: Secure user authentication powered by Amazon Cognito.
- **API**: Ready-to-use GraphQL endpoint with AWS AppSync.
- **Database**: Real-time database powered by Amazon DynamoDB.
- **Shadcn UI**: Beautifully designed, accessible, and customizable UI components.
- **Internationalization (i18n)**: Configured with `i18next` for multi-language support.
- **Redux**: Centralized state management for predictable application behavior.

## Getting Started

Follow these steps to get your development environment set up.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [Yarn](https://yarnpkg.com/)
- [AWS Amplify CLI](https://docs.amplify.aws/cli/start/install/)

### Installation

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/iCyanCorporation/amplify-vite-react-template.git
    cd amplify-vite-react-template
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Initialize Amplify**:
    Deploy on Amplify then download `amplify_outputs.json`
    Follow the prompts to configure your Amplify project.

## Project Structure

The project follows a standard React application structure with an integrated Amplify backend:

- `src/`: Contains the React frontend application.
  - `src/App.tsx`: Main application component.
  - `src/main.tsx`: Entry point for the React application.
  - `src/components/`: Reusable React components.
  - `src/components/ui/`: Shadcn UI components.
  - `src/i18n/`: Internationalization configuration and translation files.
  - `src/lib/`: Utility functions.
  - `src/store/`: Redux store configuration and slices.
- `amplify/`: Contains the AWS Amplify backend configuration.
  - `amplify/backend.ts`: Main Amplify backend definition.
  - `amplify/auth/`: Authentication resources (Cognito).
  - `amplify/data/`: Data resources (AppSync, DynamoDB).
- `public/`: Static assets.
- `package.json`: Project dependencies and scripts.

## Scripts

Commonly used scripts for development and deployment:

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run preview`: Previews the production build locally.
- `amplify push`: Deploys backend changes to AWS.
- `amplify pull`: Fetches latest backend changes from AWS.
- `amplify console`: Opens the Amplify Console for your project.

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

## Shadcn UI

This template integrates [Shadcn UI](https://ui.shadcn.com/) components for a modern and customizable user interface.

### Installation

Shadcn UI components are added directly to your project, allowing for full control and customization. To add a new component, use the Shadcn UI CLI:

```bash
npx shadcn@latest add <component-name>
```

For example, to add the `Button` component:

```bash
npx shadcn@latest add button
```

Components are located in `src/components/ui/`.

## Redux

This project uses [Redux Toolkit](https://redux-toolkit.js.org/) for efficient state management.

### Configuration

The Redux store is configured in [`src/store/index.ts`](src/store/index.ts). Slices are defined in `src/store/slices/`.

### Usage in Components

To access the Redux store in your React components, use the `useAppDispatch` and `useAppSelector` hooks from `src/store/hooks.ts`.

Example:

```typescript
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { increment, decrement } from "../store/slices/counterSlice";

function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
```

## Deploying to AWS

For detailed instructions on deploying your application, refer to the [deployment section](https://docs.amplify.aws/react/start/quickstart/#deploy-a-fullstack-app-to-aws) of our documentation.

## Learn More

To learn more about AWS Amplify, React, Vite, i18next, Shadcn UI, and Redux, check out these resources:

- [AWS Amplify Documentation](https://docs.amplify.aws/)
- [React Documentation](https://react.dev/docs/getting-started.html)
- [Vite Documentation](https://vitejs.dev/guide/)
- [i18next Documentation](https://www.i18next.com/overview/getting-started)
- [Shadcn UI Documentation](https://ui.shadcn.com/docs)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/introduction/getting-started)

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.
