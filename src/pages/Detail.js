import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import DetailNav from "../components/DetailNav";
import { addItem } from "../store/cartSlice";
import { Toast } from "react-bootstrap";

const Detail = ({ shoes }) => {
  const { urlId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");
  const [alert, setAlert] = useState(false);

  const itemId = shoes.find((i) => parseInt(i.id) === parseInt(urlId));

  useEffect(() => {
    let watchedArr = JSON.parse(localStorage.getItem("watched"));
    watchedArr.push(itemId.title);
    // new Set() => 중복을 허용하지 않는 set 전용 배열을 만들어줌
    // Array.from() => Set으로 바꾼 배열을 다시 원래 배열로 만들어줌
    watchedArr = Array.from(new Set(watchedArr));
    localStorage.setItem("watched", JSON.stringify(watchedArr));
  }, [itemId.title]);

  useEffect(() => {
    if (isNaN(inputValue) === true) {
      setAlert(true);
    }
  }, [inputValue]);

  return (
    <div className="container">
      <Toast className="watched">
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">최근 본 목록</strong>
        </Toast.Header>
        <Toast.Body>
          {JSON.parse(localStorage.getItem("watched")).map((i, idx) => (
            <div key={idx}>{i}</div>
          ))}
        </Toast.Body>
      </Toast>

      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
            alt="shoes"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{itemId.title}</h4>
          {alert === true ? <div>숫자만 입력하세요</div> : null}
          <input
            placeholder="수량을 입력하세요"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />

          <p>{itemId.content}</p>
          <p>{itemId.price}원</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(addItem(shoes[itemId.id].title));
              navigate("/cart");
            }}
          >
            주문하기
          </button>
        </div>
      </div>
      <div className="detail_nav">
        <DetailNav />
      </div>
    </div>
  );
};
export default Detail;
