import React, { useEffect, useState } from "react";
import "./meal.css";

const Meal = () => {
  const [mealData, setMealData] = useState([]);
  const [area, setArea] = useState("indian");
  const [inputData, setInputData] = useState("");

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

  return (
    <>
      <div className="navbar">
        <div className="buttons">
          <button onClick={() => setArea("Indian")}>Indian</button>
          <button onClick={() => setArea("Canadian")}>Canadian</button>
          <button onClick={() => setArea("American")}>American</button>
          <button onClick={() => setArea("Thai")}>Thai</button>
          <button onClick={() => setArea("British")}>British</button>
          <button onClick={() => setArea("Russian")}>Russian</button>
        </div>
        <form onSubmit={submitHandler} className="search-form">
          <input
            type="text"
            placeholder="Search Your meals...."
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div id="meal-container">
        {mealData.map((data) => (
          <div key={data.idMeal} className="meal-card">
            <img src={data.strMealThumb} alt={data.strMeal} />
            <h5>{data.strMeal}</h5>
          </div>
        ))}
      </div>
    </>
  );
};

export default Meal;
