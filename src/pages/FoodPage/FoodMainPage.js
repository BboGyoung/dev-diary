import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const FoodMainPage = () => {
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
        <div class="food-create-button">
          <Link
            class="button is-primary is-light is-medium has-text-weight-semibold"
            to="/food/create"
          >
            ✏️ 오늘의 먹부림 기록하기 ✏️
          </Link>
        </div>
      </section>
      <section className="section">
        <div className="food-contents">
          <div className="card bd-theme-food is-food">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src="/image.png" alt="juseomjuseom" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">주섬주섬</p>
                  <p className="subtitle is-6">
                    서울 마포구 와우산로21길 36-12
                  </p>
                </div>
              </div>
              <div className="content">
                <div>2024년 10월 8일</div>
                <div>
                  생일 파티 하러 갔었는데 칵테일이 너무 맛있었다.😍 칵테일 한
                  잔이 잘못 나와서 사장님께서 그냥 주셨다. 완전 럭키비키잖아☘️
                  홍댕에서 양식과 술 조합은 여기로❣️
                </div>
              </div>
            </div>
          </div>
          <div className="card bd-theme-food is-food">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src="/image.png" alt="juseomjuseom" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">주섬주섬</p>
                  <p className="subtitle is-6">
                    서울 마포구 와우산로21길 36-12
                  </p>
                </div>
              </div>
              <div className="content">
                <div>2024년 10월 8일</div>
                생일 파티 하러 갔었는데 칵테일이 너무 맛있었다.😍 칵테일 한 잔이
                잘못 나와서 사장님께서 그냥 주셨다. 완전 럭키비키잖앙☘️ 홍댕에서
                양식과 술 조합은 여기로❣️
              </div>
            </div>
          </div>
          <div className="card bd-theme-food is-food">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src="/image.png" alt="juseomjuseom" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">주섬주섬</p>
                  <p className="subtitle is-6">
                    서울 마포구 와우산로21길 36-12
                  </p>
                </div>
              </div>
              <div className="content">
                <div>2024년 10월 8일</div>
                생일 파티 하러 갔었는데 칵테일이 너무 맛있었다.😍 칵테일 한 잔이
                잘못 나와서 사장님께서 그냥 주셨다. 완전 럭키비키잖앙☘️ 홍댕에서
                양식과 술 조합은 여기로❣️
              </div>
            </div>
          </div>
          <div className="card bd-theme-food is-food">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src="/image.png" alt="juseomjuseom" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">주섬주섬</p>
                  <p className="subtitle is-6">
                    서울 마포구 와우산로21길 36-12
                  </p>
                </div>
              </div>
              <div className="content">
                <div>2024년 10월 8일</div>
                <div>
                  생일 파티 하러 갔었는데 칵테일이 너무 맛있었다.😍 칵테일 한
                  잔이 잘못 나와서 사장님께서 그냥 주셨다. 완전 럭키비키잖앙☘️
                  홍댕에서 양식과 술 조합은 여기로❣️
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodMainPage;
