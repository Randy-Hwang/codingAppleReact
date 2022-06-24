import { useState } from "react";
import "./App.css";

const Modal = (props) => {
  return (
    <div className="modal">
      <h4>{props.title[0]}</h4>
      <p>Date</p>
      <p>Text</p>
      <button
        onClick={() => {
          const copyTitle = [...props.title];
          copyTitle[0] = "여자코트추천";
          props.setTitle(copyTitle);
          // props.setTitle((copyTitle[0] = "여자코트추천"));
        }}
      >
        Edit
      </button>
    </div>
  );
};

function App() {
  const [title, setTitle] = useState(["다", "가", "나"]);

  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {title.map((it, i) => {
        return (
          <div className="list" key={i}>
            <h4 onClick={() => setModal(!modal)}>
              {it}, {i + 1}번째 글
            </h4>
            <p>6월 23일 발행</p>
          </div>
        );
      })}

      {modal === true ? <Modal title={title} setTitle={setTitle} /> : null}
    </div>
  );
}

export default App;
