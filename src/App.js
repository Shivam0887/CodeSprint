import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getBabbarData, getStriverData, getData, updateDB } from "./db";
import TopicCard from "./components/topicCard/TopicCard";
import ProblemCard from "./components/problemCards/ProblemCard";
import Topic from "./components/topic/Topic";
import Course from "./pages/courses/Course";
import loveBabbar from "./assets/image/loveB.jpg";
import striver from "./assets/image/striver.jpg";
import apnaCollege from "./assets/image/apnaCollege.jpg";
import Nav from "./components/Nav";
import LandingPage from "./pages/LandingPage/LandingPage";
import Contest from "./pages/ContestPage/Contest";
import SignupPage from "./pages/sign-up/SignupPage";
import SigninPage from "./pages/sign-in/SigninPage";
import Blogs from "./pages/blogs/Blogs";
import NewBlog from "./pages/add-blog/NewBlog";
import Blog from "./components/singleBlog/Blog";

function App() {
  const [select, setSelect] = useState(undefined);
  const [babbarData, setBabbarData] = useState([]);
  const [striverData, setStriverData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    getBabbarData((question) => {
      setBabbarData(question);
    });
    getStriverData((question) => {
      setStriverData(question);
    });
    getData((question) => {
      setData(question);
    });
  }, []);

  const updateData = (key, updatedData, position, author) => {
    if (author === "striver") {
      let newData = striverData.map((topic, index) => {
        if (index === position) {
          updateDB(key, updatedData, author);
          return {
            topicName: topic.topicName,
            position: topic.position,
            ...updatedData,
          };
        } else return topic;
      });
      setStriverData(newData);
    }
    if (author === "babbar") {
      let newData = babbarData.map((topic, index) => {
        if (index === position) {
          updateDB(key, updatedData, author);
          return {
            topicName: topic.topicName,
            position: topic.position,
            ...updatedData,
          };
        } else return topic;
      });
      setBabbarData(newData);
    }
    if (author === "apnaCollege") {
      let newData = data.map((topic, index) => {
        if (index === position) {
          updateDB(key, updatedData, author);
          return {
            topicName: topic.topicName,
            position: topic.position,
            ...updatedData,
          };
        } else return topic;
      });
      setData(newData);
    }
  };
  return (
    <div className="App">
      <Nav
        select={select}
        setSelect={setSelect}
      />

      <Routes>
        <Route
          path="/"
          element={<LandingPage select={select} setSelect={setSelect} />}
        />
        <Route path="/contest" element={<Contest />} />
        <Route path="/practice">
          <Route index element={<ProblemCard />} />
          <Route path="sde-sheet-loveBabbar">
            <Route
              index
              element={<TopicCard data={babbarData} image={loveBabbar} />}
            />
            <Route
              path=":id"
              element={
                <Topic
                  Data={babbarData}
                  updateData={updateData}
                  author={"babbar"}
                />
              }
            />
          </Route>
          <Route path="sde-sheet-striver">
            <Route
              index
              element={<TopicCard data={striverData} image={striver} />}
            />
            <Route
              path=":id"
              element={
                <Topic
                  Data={striverData}
                  updateData={updateData}
                  author={"striver"}
                />
              }
            />
          </Route>
          <Route path="sde-sheet-apnaCollege">
            <Route index element={<TopicCard data={data} image={apnaCollege} />}
            />
            <Route
              path=":id"
              element={
                <Topic
                  Data={data}
                  updateData={updateData}
                  author={"apnaCollege"}
                />
              }
            />
          </Route>
        </Route>
        <Route path="/courses" element={<Course />} />
        <Route path="/sign-up" element={<SignupPage />} />

        <Route
          path="/sign-in"
          element={
            <SigninPage />
          }
        />
        <Route path="/new-blog" element={<NewBlog />} />
        <Route path="/blog-posts">
          <Route index element={<Blogs />} />
          <Route path=":id" element={<Blog  />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
