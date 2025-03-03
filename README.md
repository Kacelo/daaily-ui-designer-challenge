# Movie Search App

## How to Run the Project

### Prerequisites
Before running the project, ensure you have the following installed:
- **Node.js** (Latest LTS version recommended)
- **Yarn** or **npm** (package managers)

### Installation
1. Clone the repository:
   ```sh
   git clone git@github.com:Kacelo/daaily-ui-designer-challenge.git
   cd movie-search-app
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Obtain an API key from **[OMDb API](https://www.omdbapi.com/)**.
4. Create a `.env.local` file in the project root and add your API key:
   ```sh
   NEXT_PUBLIC_API_KEY=your_api_key_here
   ```
5. Run the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```
6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features
✅ **Movie search functionality with real-time updates**  
✅ **Infinite scrolling for seamless browsing**  
✅ **Debounced search to optimize API calls**  
✅ **Movie detail page with extended information**  
✅ **Loading and error states for better UX**  
✅ **Responsive UI for mobile and desktop**  
✅ **Theming to provide dark mode**  

## Potential Improvements
- **Authentication** so users can:
  - Add movies to a watchlist
  - Create their own library of movies
  - Rate the movies they've watched
- **Filtering movies by genre** on the landing page
- **Sorting options** like rating, release year, and popularity

## Why I Chose Certain Technologies
- **Next.js** for **Server-Side Rendering (SSR)** to improve SEO and performance.
- **React Query** for fetching because it has built-in infinite scroll capabilities and other features that prevent unnecessary data queries.
- **ShadCN UI library** because it is built with **Tailwind CSS**, which was a requirement.
- **Tailwind CSS** for styling due to its utility-first approach and responsiveness.

## Assumptions Made
- **Performance Expectations** – infinite scrolling and debounced search will improve UX and API efficiency.
- **Default Theme** – most users may prefer dark mode, but theming is provided for customization.

## Running Tests
To run tests, use:
```sh
npm test
# or
yarn test
```
Ensure your test environment is properly configured.

## Conclusion
This project provides a great foundation for a movie search app with real-time updates, infinite scrolling, and a great user experience. Further improvements could include authentication, watchlists, and filtering options. Hope you enjoy using it!

