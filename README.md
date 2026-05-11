# ADVantage Gen - AI Image Generator
live server link - https://ad-vantage-gen.vercel.app/
A premium, modern AI image generation website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- **AI Image Generation**: Powered by Pollinations AI (free) with OpenAI DALL-E support.
- **Premium UI**: Dark theme, glassmorphism, and smooth animations using Framer Motion.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
- **Prompt History**: Keep track of your recent creations and prompts.
- **Sample Prompts**: Clickable categories to inspire your next masterpiece.
- **Download & Share**: High-quality exports with a single click.

## Tech Stack

- **Frontend**: React + Vite + TypeScript
- **Styling**: Tailwind CSS 4.0
- **Animations**: Motion (Framer Motion)
- **Icons**: Lucide React
- **API**: Pollinations AI (Default) / OpenAI (Optional)

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Configure API Keys (Optional)**:
   Create a `.env` file based on `.env.example` and add your `VITE_OPENAI_API_KEY` to use OpenAI instead of Pollinations AI.

## Project Structure

- `src/components`: UI sections and reusable components.
- `src/services`: API integration for image generation.
- `src/constants`: Static data for prompts, features, etc.
- `src/styles`: Theme and utility CSS.
- `src/types`: TypeScript interfaces.

## License

SPDX-License-Identifier: Apache-2.0
