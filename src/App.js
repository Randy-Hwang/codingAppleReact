import { useRef, useState } from "react";
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

const Date = () => {
  const today = new window.Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  return (
    <p>
      {year}년, {month}월, {day}일
    </p>
  );
};

function App() {
  const [title, setTitle] = useState(["남자", "여자", "고양이"]);
  const [modal, setModal] = useState(false);
  const [modalTitle, setModalTitle] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [likeNum, setLikeNum] = useState([0, 0, 0]);

  const contentRef = useRef();

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {title.map((item, i) => {
        return (
          <div className={`list`} key={i}>
            {/* Title, Content */}

            <h4
              onClick={() => {
                setModal(!modal);
                setModalTitle(i);
              }}
            >
              {item}, {i + 1}번째 글
            </h4>

            {/* Like, Date */}
            <span
              onClick={() => {
                const copyLike = [...likeNum];
                copyLike[i] += 1;
                setLikeNum(copyLike);
              }}
            >
              👍🏻 {likeNum[i]}
            </span>
            <Date />

            {/* Delete Button */}
            <button
              onClick={() => {
                const copyList = [...title];
                copyList.splice(i, 1);
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
        ref={contentRef}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (inputValue.length < 1) {
            contentRef.current.focus();
            return;
          } else {
            const copyLike = [...likeNum];
            copyLike.unshift(0);
            setLikeNum(copyLike);

            const copyTitle = [...title];
            copyTitle.unshift(inputValue);
            setTitle(copyTitle);
          }
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
