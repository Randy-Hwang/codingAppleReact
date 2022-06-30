import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailNav from "../components/DetailNav";

const Detail = ({ shoes }) => {
  let { urlId } = useParams();

  const itemId = shoes.find((i) => parseInt(i.id) === parseInt(urlId));

  const [inputValue, setInputValue] = useState("");
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    if (isNaN(inputValue) === true) {
      setAlert(true);
    }
  }, [inputValue]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
            alt="shoes"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{shoes[itemId.id].title}</h4>
          {alert === true ? <div>숫자만 입력하세요</div> : null}
          <input
            placeholder="수량을 입력하세요"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />

          <p>{shoes[itemId.id].content}</p>
          <p>{shoes[itemId.id].price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      <div className="detail_nav">
        <DetailNav />
      </div>
    </div>
  );
};
export default Detail;
