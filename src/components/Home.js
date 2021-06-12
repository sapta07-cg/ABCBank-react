import { Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Home.css";

export function Home() {
  return (
    <div class="body">
      <div class="header-section">
        <div class="heading">
          <h1 class="">Welcome To ABC Banking System</h1>
          <p id="bfe">Banking For Everyone</p>

          <Button id="btn">
            <div class="al">
              <Nav.Link as={Link} to="/home/customerloanrequest">
                Apply Loan
              </Nav.Link>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
