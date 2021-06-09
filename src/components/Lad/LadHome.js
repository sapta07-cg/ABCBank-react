import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export function LadHome() {
  return (
    <div>
      <div>
        <h1>Welcome to lad</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Nav.Link as={Link} to="/lad/ladpage">
              Loan Status
            </Nav.Link>
          </div>
          <div className="col-4">
            <Nav.Link as={Link} to="/lad/ladlistpage">
              Customer Loan Request Details
            </Nav.Link>
          </div>
          <div className="col-4">
            <Nav.Link as={Link} to="/lad/customerpage">
              Customer Page
            </Nav.Link>
          </div>
        </div>
      </div>
    </div>
  );
}
