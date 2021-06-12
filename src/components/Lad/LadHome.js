import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Card, CardDeck } from "react-bootstrap";

export function LadHome() {
  return (
    <div className="body">
      <div>
        <h1>Welcome to lad</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title text-center>Loan Status</Card.Title>
                <hr />
                <Card.Text>This is for Loan Status</Card.Text>
                <hr />
                <Card.Link href="/lad/ladpage">Loan Status</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-4">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title text-center>
                  Customer Loan Request Details
                </Card.Title>
                <hr />
                <Card.Text>This is for Customer Loan Request Details</Card.Text>
                <hr />
                <Card.Link href="/lad/ladlistpage">
                  Customer Loan Request Details
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-4">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title text-center>Customer Page</Card.Title>
                <hr />
                <Card.Text>This is for Customer Page</Card.Text>
                <hr />
                <Card.Link href="/lad/customerpage">Customer Page</Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
