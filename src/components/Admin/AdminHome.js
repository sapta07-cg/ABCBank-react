import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export function AdminHome() {
  return (
    <div>
      <div>
        <h1>Welcome to Admin module</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Nav.Link as={Link} to="/admin/dashboard">
              Dashboard
            </Nav.Link>
          </div>
          <div className="col-3">
            <Nav.Link as={Link} to="/admin/create-loan">
              Create Loan Program
            </Nav.Link>
          </div>
          <div className="col-3">
            <Nav.Link as={Link} to="/admin/list-loan">
              Loan Types List
            </Nav.Link>
          </div>
          <div className="col-3">
            <Nav.Link as={Link} to="/admin/customer-list">
              Customer List
            </Nav.Link>
          </div>
          <div className="col-3">
            <Nav.Link as={Link} to="/admin/profile">
              Admin profile
            </Nav.Link>
          </div>
        </div>
      </div>
    </div>
  );
}
