import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <div class="center-div">
        <h1 class="font-weight-bold">Welcome To ABC Banking System</h1>
        <p>Banking For Everyone</p>
        <div>
          <Nav.Link as={Link} to="/home/customerloanrequest">
            Apply Loan
          </Nav.Link>
        </div>
      </div>
    </div>
  );
}
