import "./index.css";

const Card = ({ userName, profileUrl, avtarUrl }) => {
  return (
    <div class="card">
      <img src={avtarUrl} alt="profile_image" class="image" width="40%" />

      <h3>{userName}</h3>

      <a href={profileUrl} class="btn" target="_blank" rel="noreferrer">
        click Here
      </a>
    </div>
  );
};

export default Card;
