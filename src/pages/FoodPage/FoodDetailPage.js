import { useState, useEffect } from "react";
import { useParams } from "react-router";
import parse from "html-react-parser";
import axios from "axios";

const FoodDetailPage = () => {
  const { id } = useParams();
  const [food, setFood] = useState({});
  const getFood = () => {
    axios.get(`http://localhost:3001/foods/${id}`).then((response) => {
      setFood(response.data);
    });
  };

  useEffect(() => {
    getFood();
  }, []);

  return (
    <div className="food-page">
      <section className="bd-hero">
        <div className="bd-hero-body">
          <h1 className="bd-hero-title">{food.name}</h1>
          <hr className="bd-hr has-background-primary" />
        </div>
      </section>
      <section className="section pt-0">
        <div className="column is-half is-offset-one-quarter">
          <div className="field">
            <label className="label">맛집의 주소는?</label>
            <div className="box row-align-center">
              <i class="fa-solid fa-location-dot mr-1 has-text-primary"></i>
              <p>{food.address}</p>
            </div>
          </div>
          <div className="field">
            <label className="label">다녀온 날짜는?</label>
            <div className="box row-align-center">
              <i class="fa-regular fa-calendar mr-1 has-text-primary"></i>
              <p>{food.date}</p>
            </div>
          </div>
          <div className="field">
            <label className="label mb-0">이 맛집 어때?</label>
            <div className="box">
              <div>
                {food.description
                  ? typeof food.description === "string"
                    ? parse(food.description)
                    : food.description
                  : "No description available"}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodDetailPage;
