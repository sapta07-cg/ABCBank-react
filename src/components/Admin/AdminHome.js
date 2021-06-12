import { Nav } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export function AdminHome() {
  const state = useSelector((state) => state);
  return (
    <div className="body">
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
        </div>
      </div>
    </div>
  );
}
