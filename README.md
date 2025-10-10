# 🛡️ Spam Email Detector

A modern, beautiful React TypeScript application for detecting spam emails using AI-powered analysis.

## ✨ Features

- 🎨 **Beautiful UI/UX** - Modern gradient designs with smooth animations
- ⚡ **Lightning Fast** - Optimized performance with React Query
- 🔒 **Type Safe** - Built with TypeScript for robust code
- 📱 **Responsive** - Works perfectly on all devices
- 🎯 **High Accuracy** - Advanced spam detection with confidence scores
- 🏗️ **Clean Architecture** - Well-organized code structure with separation of concerns

## 🛠️ Tech Stack

- **React 19** - Latest React with modern hooks
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **React Router** - Client-side routing
- **React Query** - Powerful data fetching and caching
- **Formik** - Form management with validation
- **Yup** - Schema validation
- **Axios** - HTTP client
- **SCSS** - Advanced styling with variables and mixins

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar/         # Navigation bar component
│   ├── Footer/         # Footer component
│   └── ResultDisplay/  # Spam detection result display
├── pages/              # Page components
│   ├── Home/           # Main page with email checker
│   ├── About/          # About page
│   └── Contact/        # Contact page
├── services/           # API services
│   └── api.ts          # Axios API client
├── types/              # TypeScript type definitions
│   └── index.ts        # Shared types
└── App.tsx             # Main app component with routing

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

4. Update the API URL in `.env`:

```
VITE_API_URL=http://localhost:3000/api
```

### Running the Application

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🔌 API Integration

The application expects a POST endpoint at `/check-spam` that:

**Request:**
```json
{
  "email": "Email content to check..."
}
```

**Response:**
```json
{
  "result": "spam" | "ham",
  "percentage": 85.5
}
```

## 🎨 Features Breakdown

### Home Page
- Email content input with validation
- Real-time spam detection
- Animated result display with confidence percentage
- Feature showcase section

### Navigation
- Smooth animations
- Responsive design
- Active route highlighting

### Result Display
- Color-coded results (red for spam, green for safe)
- Animated confidence meter
- Detailed classification information

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
