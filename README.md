# 🌎 **World Recipes Finder** 🍴

Welcome to **World Recipes Finder**, a React.js application that lets you explore and discover various food recipes from around the world. Whether you're curious about dishes from specific countries 🌍 or looking for a particular recipe 🍲, this app has you covered! It integrates two APIs: one for searching recipes by country and another for retrieving detailed recipe information from the backend.

---

## **✨ Features**

### 🌐 **Core Functionalities**
- **Search by Country**: Browse recipes based on the cuisine of a specific country using an external API.
- **Explore Dish Details**: Retrieve detailed recipes from a custom backend API.
- **Interactive UI**: Intuitive design for effortless searching and recipe discovery.
- **Responsive Design**: Fully responsive, providing a seamless experience on all devices.

---

## **🛠️ Technologies Used**

### 🔧 **Frontend**
- **React.js**: Dynamic UI and state management with hooks.
- **JavaScript (ES6)**: Interactive functionality and logic.
- **HTML5**: Semantic structure for the application.
- **CSS3**: Styling and layout for an attractive and responsive user interface.

### 🌐 **APIs**
1. **Recipe by Country API**: Fetch dishes based on the cuisine of a particular country (external API).
2. **Recipe Details API**: Retrieve full recipe data (custom backend API).

---

## **🚀 Project Setup**

### **Step 1: Clone the Repository**
```bash
git clone https://github.com/your-username/world-recipes-finder.git
cd world-recipes-finder
```

### **Step 2: Install Dependencies**
```bash
npm install
```

### **Step 3: Set up Environment Variables**
- Create a `.env` file in the root directory and add the following:
  ```env
  REACT_APP_COUNTRY_API=https://api.example.com/recipes-by-country
  REACT_APP_BACKEND_API=http://localhost:5000/api/recipes
  ```
- Replace the URLs with the actual API endpoints for your project.

### **Step 4: Start the Development Server**
```bash
npm start
```
Access the app at `http://localhost:3000`.

---

## **📂 Project Structure**

```
world-recipes-finder/
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Navbar.js      # Top navigation bar
│   │   ├── SearchBar.js   # Search bar for input
│   │   ├── RecipeList.js  # Displays a list of recipes
│   │   ├── RecipeCard.js  # Individual recipe card
│   │   └── Footer.js      # Footer section
│   ├── pages/
│   │   ├── HomePage.js    # Main landing page
│   │   ├── CountryPage.js # Page for country-based searches
│   │   └── RecipePage.js  # Detailed recipe view
│   ├── services/
│   │   ├── countryAPI.js  # Functions for fetching recipes by country
│   │   └── backendAPI.js  # Functions for interacting with the backend API
│   ├── App.js             # Main React component
│   ├── index.js           # ReactDOM rendering
│   ├── styles/            # CSS files for styling components
│   └── utils/             # Utility functions or helpers
├── .env                   # Environment variables for API keys/URLs
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
```

---

## **📜 Key Files Explained**

### **1. `App.js`**
- Acts as the central component, setting up routing between different pages like the home page, country-based search, and recipe details.

### **2. `countryAPI.js`**
- Contains functions to fetch recipes based on the selected country's cuisine:
  ```javascript
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      );
      const data = await api.json();
      console.log(data.meals);
      setMealData(data.meals);
    };
    fetchDataFromAPI();
  }, [area]);
  ```

### **3. `backendAPI.js`**
- Interacts with the backend to retrieve detailed recipe information:
  ```javascript
  const submitHandler = async (e) => {
    e.preventDefault();
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`
    );
    const data = await api.json();
    console.log("search data = ", data.meals);
    setMealData(data.meals);
    setInputData(" ");
  };
  ```

### **4. Pages**
- **HomePage.js**: Overview of the app with a search bar for countries.
- **CountryPage.js**: Displays recipes fetched from the country API.
- **RecipePage.js**: Shows detailed information about a selected recipe.

---

## **🤔 How It Works**

1. **Select a Country** 🌍
   - Users can search or select a country to view recipes from that cuisine.
2. **Explore Recipes** 🍽️
   - View a list of recipes with images and brief descriptions.
3. **Detailed Recipe View** 📜
   - Click on a recipe to view ingredients, instructions, and more details fetched from the backend.

---

## **📊 API Integration**

### **1. Recipe by Country API**
- Endpoint: `https://api.example.com/recipes-by-country`
- Purpose: Fetch recipes based on country selection.
- Example Request:
  ```
  GET /recipes-by-country?country=Italy
  ```
- Response:
  ```json
  [
      {
          "id": 1,
          "name": "Pasta Carbonara",
          "image": "https://example.com/images/carbonara.jpg",
          "description": "Classic Italian pasta dish."
      },
      ...
  ]
  ```

### **2. Recipe Details API**
- Endpoint: `http://localhost:5000/api/recipes`
- Purpose: Fetch detailed information about a specific recipe.
- Example Request:
  ```
  GET /api/recipes/1
  ```
- Response:
  ```json
  {
      "id": 1,
      "name": "Pasta Carbonara",
      "ingredients": ["Pasta", "Eggs", "Pancetta", "Parmesan"],
      "instructions": "Boil pasta. Cook pancetta. Mix eggs and cheese. Combine."
  }
  ```

---

## **✨ Features to Add in the Future**

- **User Authentication** 🔒: Allow users to create accounts and save their favorite recipes.
- **Advanced Search Filters** 🔍: Filter recipes by dietary preferences, difficulty level, etc.
- **Ratings and Reviews** ⭐: Add functionality for users to rate and review recipes.

---

## **⚠️ Error Handling**

### **Common Issues**
1. **API Errors**:
   - Ensure API endpoints are correct in `.env` and accessible.
   - Handle errors gracefully in the frontend to show user-friendly messages:
     ```javascript
     try {
         const data = await getRecipesByCountry(country);
     } catch (error) {
         console.error("Error fetching data:", error);
         setErrorMessage("Failed to fetch recipes. Please try again later.");
     }
     ```

2. **CORS Issues**:
   - If accessing a backend API locally, configure CORS in the backend to allow requests from `http://localhost:3000`.

3. **React Errors**:
   - Use React Developer Tools to debug component errors or rendering issues.

---

## **🤝 Contributing**

Contributions are welcome! 💡 If you want to report bugs 🐞, request new features ✨, or contribute code 💻, please follow these steps:
1. Fork the repository.
2. Create a new branch (`feature/my-new-feature`).
3. Commit your changes.
4. Push the branch and create a pull request.

---

## **📜 License**

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## **📧 Contact**

For any queries or support, please contact:
- **Name**: Rakesh
- **Email**: sprakesh4114@gmail.com
- **GitHub**: [ krakesh1309](https://github.com/krakesh1309)

---

Let me know if you'd like to add or refine anything further! 🚀🍲✨
