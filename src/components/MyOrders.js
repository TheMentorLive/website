import { Container } from "react-bootstrap";

const MyOrders = () => {
  return (
    <Container className="order-container" style={{ marginTop: "30px" }}>
      <span className="order-heading">My Orders</span>
      <div className="order-details-row">
        <span id="order-id">Order #674FD3933845</span>
        <span id="order-date">Order placed on 17/08/2021</span>
      </div>
      <div className="order-details-view">
        <img src="/images/order-img.png" alt="orderImg" />
        <div className="order-format-col">
          <span>Professional Custom Resume</span>
          <span>Document Type - PDF</span>
          <span>page 01 | price $20</span>
        </div>
        <div className="order-format-col">
            <button className="order-format-btn-outline">Track order</button>
            <button className="order-format-btn">Cancel order</button>
        </div>
      </div>
    </Container>
  );
};
export default MyOrders;
