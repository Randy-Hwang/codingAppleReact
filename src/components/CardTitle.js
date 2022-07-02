import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const CardTitle = ({ order, shoes }) => {
  let imgSrc;
  const navigate = useNavigate();

  if (order === 0) {
    imgSrc = "https://codingapple1.github.io/shop/shoes1.jpg";
  } else if (order === 1) {
    imgSrc = "https://codingapple1.github.io/shop/shoes2.jpg";
  } else if (order === 2) {
    imgSrc = "https://codingapple1.github.io/shop/shoes3.jpg";
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{shoes[order].title}</Card.Title>
        <Card.Text>
          {shoes[order].content}
          <br /> {shoes[order].price} ₩
        </Card.Text>
        <Button
          variant="secondary"
          onClick={() => navigate(`/detail/${shoes[order].id}`)}
        >
          Buy It!!
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardTitle;
