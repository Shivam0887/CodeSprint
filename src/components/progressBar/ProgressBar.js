import { useEffect } from "react";
import "./progressBar.css";

const ProgressBar = ({ progress }) => {
  useEffect(() => {
    const ele = document.querySelector(".progress__bar__container .move");
    if (ele) ele.style.width = `${progress}%`;
  }, [progress]);
  return (
    <div className="progress__bar__container">
      <div className="move">
        <div className="progress__bar__1"></div>
        <div className="progress__bar__2"></div>
      </div>
    </div>
  );
};

export default ProgressBar;
