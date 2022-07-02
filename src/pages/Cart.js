import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { increaseStock } from "../store/cartSlice";

const Cart = () => {
  const cartItem = useSelector((state) => state.cartItem);
  const dispatch = useDispatch();

  return (
    <div className="cart_table">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {cartItem.map((item, idx) => {
            return (
              <tr key={idx}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>
                  <button onClick={() => dispatch(increaseStock(item.id))}>
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
