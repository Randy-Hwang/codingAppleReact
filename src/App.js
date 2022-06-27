import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import CardTitle from "./components/CardTitle";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container className="nav_container">
          <Navbar.Brand href="#home">Duckgu's Shoe</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main_bg" />
      <div className="goods_wrapper">
        <div className="goods_0">
          <CardTitle order={0} />
        </div>
        <div className="goods_1">
          <CardTitle order={1} />
        </div>
        <div className="goods_2">
          <CardTitle order={2} />
        </div>
      </div>
    </div>
  );
}

export default App;
