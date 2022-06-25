import { useState } from "react";
import "./App.css";

const Modal = ({ title, setTitle, modalTitle }) => {
  return (
    <div className="modal">
      <h4>{title[modalTitle]}</h4>
      <p>Date</p>
      <p>Text</p>
      <button
        onClick={() => {
          const copyTitle = [...title];
          copyTitle[modalTitle] = "변경된 제목";
          setTitle(copyTitle);
        }}
      >
        Edit
      </button>
    </div>
  );
};

function App() {
  const [title, setTitle] = useState(["남자", "여자", "고양이"]);
  const [modal, setModal] = useState(false);
  const [modalTitle, setModalTitle] = useState(0);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {title.map((item, i) => {
        return (
          <div className={`list`} key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setModalTitle(i);
              }}
            >
              {item}, {i + 1}번째 글
            </h4>
            <p>6월 23일 발행</p>
            <button
              onClick={() => {
                const copyList = [...title];
                copyList.splice(i, 1);
                console.log(i);
                setTitle(copyList);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}

      {modal === true ? (
        <Modal title={title} setTitle={setTitle} modalTitle={modalTitle} />
      ) : null}

      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          // const copyTitle = title;
          const copyTitle = [...title];
          copyTitle.unshift(inputValue);
          setTitle(copyTitle);
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
