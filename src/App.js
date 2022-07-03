import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import CardTitle from "./components/CardTitle";
import Detail from "./pages/Detail";
import data from "./data";
import Cart from "./pages/Cart";
import { useQuery } from "react-query";

function App() {
  useEffect(() => {
    const isExist = localStorage.getItem("watched");

    return isExist
      ? undefined
      : localStorage.setItem("watched", JSON.stringify([]));
  }, []);

  const [shoes, setShoes] = useState(data);
  const navigate = useNavigate();

  const userName = useQuery("userName", () => {
    return axios
      .get("https://codingapple1.github.io/userdata.json")
      .then((a) => a.data);
  });

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container className="nav_container">
          <Navbar.Brand onClick={() => navigate("/")}>
            Duckgu's Shoe
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate("/detail/0")}>Details</Nav.Link>
            <Nav.Link onClick={() => navigate("/cart")}>Cart</Nav.Link>
          </Nav>
          <Nav className="ms_auto">
            {userName.isLoading ? "Loading..." : `Hello ${userName.data.name}!`}
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home shoes={shoes} setShoes={setShoes} />} />
        <Route path="/detail/:urlId" element={<Detail shoes={shoes} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

const Home = ({ shoes, setShoes }) => {
  const [buttonCount, setButtonCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setButtonCount(buttonCount + 1);
          if (buttonCount === 0) {
            axios
              .get("https://codingapple1.github.io/shop/data2.json")
              .then((result) => {
                const copyData = [...data, ...result.data];
                setShoes(copyData);
              });
          } else if (buttonCount === 1) {
            axios
              .get("https://codingapple1.github.io/shop/data3.json")
              .then((result) => {
                const secondCopy = [...shoes, ...result.data];
                setShoes(secondCopy);
              });
          } else {
            alert("No more items");
          }
        }}
        className="add_button"
      >
        상품 더 보여주기
      </button>

      <div className="main_bg" />
      <div className="goods_wrapper">
        {shoes.map((i) => {
          return (
            <div className={`goods`} key={i.id}>
              <CardTitle order={i.id} shoes={shoes} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
