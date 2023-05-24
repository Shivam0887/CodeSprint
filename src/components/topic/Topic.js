import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "./topic.css";
import { FcSearch } from "react-icons/fc";
import position from "../../data/topicPosition";
import GoToTop from "../GoToTop";

const Topic = ({ Data, updateData, author }) => {
  const [list, setList] = useState([]);
  const [type, setType] = useState("");
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef("");

  const params = useParams();
  const { id } = params;
  const pos = position[author][id];

  useEffect(() => {
    //Change event handler
    function handleChange(isDone, index, topicName) {
      let newDoneQuestion = 0;
      let key = topicName.replace(/[^A-Z]+/gi, "").toLowerCase();
      for (let i = 0; i < Data[pos].questions.length; i++) {
        if (Data[pos].questions[i].Done) newDoneQuestion++;
      }

      Data[pos].questions[index].Done = isDone;
      newDoneQuestion = isDone ? newDoneQuestion + 1 : newDoneQuestion - 1;

      updateData(
        key,
        {
          started: newDoneQuestion ? true : false,
          doneQuestions: newDoneQuestion,
          questions: Data[pos].questions,
        },
        Data[pos].position,
        author
      );
    }
    if (Data[pos] !== undefined) {
      const questionLink = Data[pos].questions.map((info, index) => {
        const value = info.Topic.replace(/[^A-Z]+/gi, "").toLowerCase() + index;
        const id = info.Topic.replace(/[^A-Z]+/gi, "") + index;
        return (
          <div className="row-items" key={index} id={id}>
            <span>
              <input
                type={"checkbox"}
                id={value}
                onChange={(e) =>
                  handleChange(e.target.checked, index, Data[pos].topicName)
                }
              />
            </span>
            <span>{index + 1}.</span>
            <a href={info.URL} target={"_blank"} rel={"nooperner noreferrer"}>
              {info.Problem}
            </a>
            <span>{info.Platform}</span>
          </div>
        );
      });
      setList(questionLink);
      setType(Data[pos].topicName);

      const id = setTimeout(() => {
        if (Data[pos].started) {
          Data[pos].questions.forEach((value, index) => {
            const check =
              value.Topic.replace(/[^A-Z]+/gi, "").toLowerCase() + index;
            if (value.Done) document.querySelector(`#${check}`).checked = true;
          });
        }
      }, 100);

      //Cleanup
      return () => {
        clearTimeout(id);
      };
    }
  }, [Data[pos]]);

  //Search handler
  function handleSearch(e) {
    const pattern = e.target.value;
    inputRef.current = inputValue;
    Data[pos].questions.forEach((info, index) => {
      const ind = info.Topic.replace(/[^A-Z]+/gi, "") + index;
      const name = info.Problem.toLowerCase();
      const element = document.querySelector(`#${ind}`);
      if (
        !name.includes(pattern.toLowerCase()) &&
        inputRef.current.length < pattern.length
      ) {
        element.classList.add("hide");
      }
      if (
        inputRef.current.length > pattern.length &&
        element.classList.contains("hide")
      )
        element.classList.remove("hide");
    });

    setInputValue(pattern);
  }

  return (
    <div className="row-container">
      <h3 style={{ color: "green", lineHeight: "2" }}>Category: {type}</h3>
      <div className="searching">
        <FcSearch style={{ marginLeft: "5px" }} />
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          placeholder="Search..."
          id="search"
          onChange={handleSearch}
          style={{ fontWeight: "700", height: "20px", marginLeft: "3px" }}
        />
      </div>
      <div className="row-items">
        <span>Done</span>
        <span>Q-Id</span>
        <span>Problem Statement</span>
        <span>Platform</span>
      </div>
      {list}
      <GoToTop />
    </div>
  );
};

export default Topic;
