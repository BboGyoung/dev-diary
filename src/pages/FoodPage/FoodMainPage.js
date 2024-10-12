import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import FoodCard from "./FoodCard";

const FoodMainPage = () => {
  const history = useHistory();
  const [foods, setFoods] = useState([]);

  const getFoods = () => {
    axios.get("http://localhost:3001/foods").then((response) => {
      setFoods(response.data);
    });
  };

  useEffect(() => {
    getFoods();
  }, []);

  return (
    <div className="food-page">
      <section className="bd-hero">
        <div className="bd-hero-body">
          <h1 className="bd-hero-title">Food Diary</h1>
          <hr className="bd-hr has-background-primary" />
        </div>
      </section>
      <section className="section pt-0 pb-0">
        <div className="food-create-button">
          <Link
            className="button is-primary is-light is-medium has-text-weight-semibold"
            to="/food/create"
          >
            ✏️ 오늘의 먹부림 기록하기 ✏️
          </Link>
        </div>
      </section>
      <section className="section">
        <div className="food-contents">
          {foods.map((food, index) => {
            return (
              <FoodCard
                key={index}
                data={food}
                className={"bd-theme-food is-food"}
                onClick={() => history.push(`/food/${food.id}`)}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default FoodMainPage;
