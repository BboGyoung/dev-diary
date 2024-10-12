import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import parse from "html-react-parser";
import axios from "axios";

const FoodDetailPage = () => {
  const { id } = useParams();
  const dropdownRef = useRef(null);
  const history = useHistory();
  const [food, setFood] = useState({});
  const [isActive, setIsActive] = useState(false);
  const [isMounted, setIsMounted] = useState(true); // 컴포넌트가 마운트되었는지 추적

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const getFood = () => {
    axios.get(`http://localhost:3001/foods/${id}`).then((response) => {
      if (isMounted) {
        setFood(response.data); // 컴포넌트가 마운트된 상태에서만 상태 업데이트
      }
    });
  };

  const deleteFood = (id) => {
    axios
      .delete(`http://localhost:3001/foods/${id}`)
      .then(() => history.push("/food"));
  };

  const onClickEdit = (id) => {
    history.push(`/food/${id}/edit`);
  };

  useEffect(() => {
    setIsMounted(true); // 컴포넌트가 마운트되면 true 설정
    getFood();
    return () => {
      setIsMounted(false); // 컴포넌트 언마운트 시 false 설정
    };
  }, [id]); // id가 변경될 때마다 데이터를 불러옴

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="food-page">
      <section className="bd-hero">
        <div className="bd-hero-body">
          <h1 className="bd-hero-title">{food.name}</h1>
          <hr className="bd-hr has-background-primary" />
        </div>
      </section>
      <section className="section pt-0 pb-0 column is-half is-offset-one-quarter is-flex is-justify-content-flex-end">
        <div
          className={`dropdown ${isActive ? "is-active" : ""}`}
          ref={dropdownRef}
        >
          <div className="dropdown-trigger">
            <button
              aria-haspopup="true"
              aria-controls="dropdown-menu"
              onClick={toggleDropdown}
            >
              <i className="fa-solid fa-ellipsis-vertical font-18"></i>
            </button>
          </div>
          <div
            className="dropdown-menu min-width-100"
            id="dropdown-menu"
            role="menu"
          >
            <div className="dropdown-content">
              <button className="dropdown-item" onClick={() => onClickEdit(id)}>
                <i className="fa-regular fa-pen-to-square mr-1 has-text-primary"></i>
                수정
              </button>
              <hr className="dropdown-divider" />
              <button className="dropdown-item" onClick={() => deleteFood(id)}>
                <i className="fa-regular fa-trash-can mr-1 has-text-primary"></i>
                삭제
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="section pt-0">
        <div className="column is-half is-offset-one-quarter">
          <div className="field">
            <label className="label">맛집의 주소는?</label>
            <div className="box row-align-baseline">
              <i className="fa-solid fa-location-dot mr-1 has-text-primary"></i>
              <p>{food.address}</p>
            </div>
          </div>
          <div className="field">
            <label className="label">다녀온 날짜는?</label>
            <div className="box row-align-baseline">
              <i className="fa-regular fa-calendar mr-1 has-text-primary"></i>
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
