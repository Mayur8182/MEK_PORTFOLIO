# EcoVillage Builder

A comprehensive platform for sustainable community development and management.

## Prerequisites

- Node.js (v18.x or higher)
- npm (v9.x or higher)
- MongoDB Atlas account
- Git

## Environment Variables

Create a `.env` file in the root directory with these variables:

```env
MONGODB_URI=mongodb+srv://mkbharvad8080:Mkb@8080@cluster0.a82h2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
NODE_ENV=development
SESSION_SECRET=your_session_secret
PORT=5000
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd EcoVillageBuilder
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

4. Start the development server:
```bash
npm run dev
```

## Project Structure

- `/client` - Frontend React application
  - `/src/components` - Reusable UI components
  - `/src/pages` - Application pages and routes
  - `/src/hooks` - Custom React hooks
  - `/src/lib` - Utility functions and configurations

- `/server` - Backend Express.js server
  - `/routes` - API routes
  - `/db.ts` - Database configuration
  - `/auth.ts` - Authentication logic

## Technologies Used

- **Frontend**:
  - React
  - TypeScript
  - Vite
  - Tailwind CSS
  - Radix UI Components
  - React Query
  - React Hook Form

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
  - Passport.js
  - TypeScript

## Features

- User Authentication
- Dashboard Analytics
- Real-time Market Data
- Portfolio Management
- Investment Tracking
- Risk Analysis
- AI Recommendations
- Tax Harvesting
- Report Generation

## Development

To run the application in development mode:

```bash
npm run dev
```

For production build:

```bash
npm run build
npm start
```

## Database Setup

The application uses MongoDB Atlas. Make sure to:
1. Create a MongoDB Atlas account
2. Create a new cluster
3. Configure network access (IP whitelist)
4. Create a database user
5. Get your connection string and add it to `.env`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Deployment

The application is configured for deployment on Render.com. The `render.yaml` file contains the necessary configuration.

## License

This project is licensed under the MIT License - see the LICENSE file for details.