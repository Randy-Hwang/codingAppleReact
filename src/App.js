import { useState } from "react";
import "./App.css";

function App() {
  let [title, setTitle] = useState([
    "남자 코트 추천",
    "강아지 코트 추천",
    "고양이 코트 추천",
  ]);

  const [like, setLike] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>
          {title[0]} <span onClick={() => setLike(like + 1)}>👍🏻</span> {like}
          <button
            onClick={() => {
              let copyTitle = [...title];
              copyTitle[0] = "여자 코트 추천";
              setTitle(copyTitle);
            }}
          >
            제목바꾸기
          </button>
        </h4>
        <p>6월 22일 발행</p>
      </div>
      <div className="list">
        <h4> {title[1]} </h4>
        <p>6월 22일 발행</p>
      </div>
      <div className="list">
        <h4> {title[2]} </h4>
        <p>6월 22일 발행</p>
      </div>
    </div>
  );
}

export default App;
