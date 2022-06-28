import { useParams } from "react-router-dom";

const Detail = ({ shoes }) => {
  let { urlId } = useParams();

  const itemId = shoes.find((i) => parseInt(i.id) === parseInt(urlId));

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
          <p>{shoes[itemId.id].content}</p>
          <p>{shoes[itemId.id].price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
};
export default Detail;
