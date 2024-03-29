import "./cardStyle.css";

const Card = (props) => {
  return (
    <div className="card1">
        <h1>{props.title}</h1>
        <h2>
          {`${props.totalProblems} Problems`} <span>Solve Now</span>
        </h2>
    </div>
  );
};

export default Card;
