# Game Hub

**Game Hub** is a powerful and user-friendly web app designed to help gamers discover new and exciting games across multiple genres and platforms. Whether you’re looking for the latest indie hits or AAA blockbusters, Game Hub has got you covered. Engage with the community, stay updated on gaming news, and make informed choices with user reviews.

## Deployed Site

Deployed Site address: [Game Hub](https://game-hub-jalaj.vercel.app/)

## Features

- **Game Library**: Browse and discover a vast collection of games. Use filters to search by platform, genre, release date, and more.
- **Community Forum**: Connect with like-minded gamers, share tips, discuss strategies, and participate in ongoing discussions. Moderated to maintain a healthy, positive environment.
- **Updates & News**: Stay ahead of the curve with the latest gaming news, updates, and announcements. Never miss a release or important patch again.
- **User Reviews**: Read and write game reviews, rate your favorite (or least favorite) games, and help fellow gamers find the best titles.

## Getting Started

To start using **Game Hub**, follow these simple steps:

1. **Clone the Repository**: Clone this repository to your local machine using `git clone <repository-url>`.
2. **Install Dependencies**: Run `npm install` to install all the required packages and dependencies.
3. **Get RAWG API Key**: Visit [RAWG API Docs](https://rawg.io/apidocs) and create an account to get your free API key.
4. **Set API Key**: Add your API key to the `src/services/api-client.ts` file to enable game data fetching.
5. **Run the Development Server**: Start the local development server using `npm run dev` and navigate to `http://localhost:3000`.

That’s it! You’re ready to explore and contribute.

## Recent Updates

- **Type Safety**: Initialized `gameQuery` with default values, ensuring type safety across the app.
- **Performance Optimization**: Leveraged `useCallback` for event handlers to avoid unnecessary re-renders, improving app performance.

## Technologies Used

- **React & TypeScript**: Built with React for the UI and TypeScript for type safety.
- **CSS Modules & Styled Components**: Combination of vanilla CSS, CSS modules, and CSS-in-JS for flexible and maintainable styling.
- **React Hook Form & Zod**: Form handling with validation powered by React Hook Form and Zod.
- **RAWG API**: Integrated RAWG API for real-time game data and content.

## Learning Objectives

Through building **Game Hub**, you’ll develop and enhance the following skills:

- **React & TypeScript**: Gain hands-on experience in building scalable and reusable components.
- **State Management**: Learn to manage component states effectively.
- **Form Handling**: Build forms using React Hook Forms and enforce validation with Zod.
- **Backend Integration**: Connect your frontend app to the backend and consume APIs.
- **Performance Tuning**: Write optimized React apps using best practices such as memoization and efficient state updates.
- **Clean Code Practices**: Apply industry-standard best practices to keep your code clean and maintainable.

## Contributing

We welcome contributions from the community! If you'd like to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to your branch (`git push origin feature/new-feature`).
5. Open a pull request, and we’ll review your contribution.

For detailed guidelines on contributing, check out [CONTRIBUTING.md](CONTRIBUTING.md).

### Areas to Contribute:

- Bug fixes and performance enhancements.
- New feature suggestions and implementations.
- Improved UI/UX design.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any inquiries, feedback, or support, feel free to reach out via email at [your-new-email@example.com](mailto:your-new-email@example.com). Join our Discord community [here] for further interaction with fellow gamers and developers.

**Happy Gaming!**
