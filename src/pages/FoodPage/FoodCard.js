const FoodCard = ({ data, className, onClick }) => {
  console.log("data", data);
  const getThumbnail = (description) => {
    const imgTags = description.match(/<img[^>]+src="([^">]+)"/);
    return imgTags ? imgTags[1] : null;
  };

  const thumbnail = getThumbnail(data.description);
  console.log("thumbnail", thumbnail);
  return (
    <div className={`card ${className}`} onClick={onClick}>
      <div className="card-image">
        <figure className="image is-4by3">
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={data.name}
              style={{ maxWidth: "100%", height: "100%" }}
            />
          ) : (
            <div
              className="has-background-light card-not-image"
              style={{ flexWrap: "wrap" }}
            >
              <i className="fa-solid fa-triangle-exclamation has-text-grey-light font-xxx-large mb-2"></i>
              <div>이미지가 존재하지 않습니다.</div>
            </div>
          )}
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4 mb-1">{data.name}</p>
            <p className="subtitle is-6 row-align-baseline">
              <i className="fa-solid fa-location-dot mr-1 has-text-primary"></i>
              <div className="address">{data.address}</div>
            </p>
          </div>
        </div>
        <div className="content">
          <div className="row-align-baseline">
            <i className="fa-regular fa-calendar mr-1 has-text-primary"></i>
            {data.date}
          </div>
          <div className="description">
            {data.description
              .replace(/<\/?[^>]+(>|$)/g, "")
              .replace(/&nbsp;/g, " ")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
