import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import CardTitle from "./components/CardTitle";
import Detail from "./pages/Detail";
import data from "./data";

function App() {
  const [shoes, setShoes] = useState(data);
  const navigate = useNavigate();

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
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home shoes={shoes} setShoes={setShoes} />} />
        <Route path="/detail/:urlId" element={<Detail shoes={shoes} />} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>This is Member</div>} />
          <Route path="location" element={<div>This is Location</div>} />
        </Route>

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문 시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
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
            return <div>상품이 더 없습니다.</div>;
          }
        }}
      >
        button
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

const About = () => {
  return (
    <div>
      <div>This is About</div>
      <Outlet></Outlet>
    </div>
  );
};

const Event = () => {
  return (
    <div>
      <div>
        <h3>오늘의 이벤트</h3>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
