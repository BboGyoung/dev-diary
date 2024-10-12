import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import axios from "axios";

const FoodEditPage = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const descriptionRef = useRef(null);
  const history = useHistory();
  const { id } = useParams();

  const onSubmit = () => {
    axios
      .put(`http://localhost:3001/foods/${id}`, {
        name,
        address,
        date,
        description,
      })
      .then((response) => {
        previous();
      });
  };

  const onChangeFile = (event) => {
    const files = event.target.files;

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        const imgTag = `<img src="${e.target.result}" style="max-width: 100%; height: auto;" />`;

        insertImage(imgTag);
      };
    });
  };

  const previous = () => {
    history.goBack();
  };

  const insertImage = (imgTag) => {
    const updatedDescription = descriptionRef.current.innerHTML + imgTag;
    setDescription(updatedDescription);
  };

  const handleInput = () => {
    setDescription(descriptionRef.current.innerHTML);
  };

  useEffect(() => {
    if (descriptionRef.current) {
      descriptionRef.current.innerHTML = description;
    }
  }, [description]);

  useEffect(() => {
    axios.get(`http://localhost:3001/foods/${id}`).then((response) => {
      setName(response.data.name);
      setAddress(response.data.address);
      setDate(response.data.date);
      setDescription(response.data.description);
    });
  }, [id]);

  return (
    <div className="food-page">
      <section className="bd-hero">
        <div className="bd-hero-body">
          <h1 className="bd-hero-title">먹부림 기록 수정하기</h1>
          <hr className="bd-hr has-background-primary" />
        </div>
      </section>
      <section className="section pt-0">
        <div className="column is-half is-offset-one-quarter">
          <div className="field">
            <label className="label">맛집의 이름은?</label>
            <div className="control">
              <input
                className="input is-primary"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">맛집의 주소는?</label>
            <div className="control">
              <input
                className="input is-primary"
                type="text"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">다녀온 날짜는?</label>
            <div className="control">
              <input
                className="input is-primary"
                type="text"
                value={date}
                onChange={(event) => setDate(event.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label mb-0">이 맛집 어때?</label>
            <div className="control">
              <div className="file is-right is-small">
                <label className="file-label">
                  <input
                    className="file-input"
                    type="file"
                    name="resume"
                    onChange={onChangeFile}
                    multiple={true}
                  />
                  <span className="file-cta">
                    <span className="file-icon">
                      <i className="fas fa-upload"></i>
                    </span>
                    <span className="file-label">사진 넣기</span>
                  </span>
                </label>
              </div>
              <div
                ref={descriptionRef}
                rows="20"
                className="textarea is-primary"
                contentEditable={true}
                onInput={handleInput}
                style={{ minHeight: 400 }}
              />
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-primary" onClick={onSubmit}>
                저장
              </button>
            </div>
            <div className="control">
              <button
                className="button is-primary is-light"
                onClick={() => history.push(`/food/${id}`)}
              >
                취소
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodEditPage;
