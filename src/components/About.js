import { Card, CardDeck } from "react-bootstrap";

export function About() {
  return (
    <div className="about2">
      <>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src="" />

            <Card.Body>
              <Card.Title>ABOUT US</Card.Title>
              <Card.Text>
                Whether you are opening your first bank account or have managed
                a checking account for years, it helps to know the different
                types of banking services available. This ensures you get the
                most out of your current financial institution. Deciding which
                services are most important can lead you to the bank that best
                fits your needs.
                <br />
                <br />
                <p>
                  <strong>Eassy Access</strong>
                </p>
                <br />
                <p>
                  <strong>Less Annual Interest</strong>
                </p>
                <br />
                <p>
                  <strong>Unlimited Benifits</strong>
                </p>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="bg-info">
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://st2.depositphotos.com/3591429/10566/i/950/depositphotos_105666254-stock-photo-business-people-at-meeting-and.jpg"
            />
            <Card.Body>
              <Card.Title>Our Team</Card.Title>
              <Card.Text>
                We take data privacy seriously so that our users feel empowered
                to share honest and constructive feedback and consequently,
                continuous feedback is sent only to the recipient of the
                feedback.
                <br />
                <br />
                <p>
                  Our Team will Try provide the Best Services in the Market.
                </p>
                <br />
                <br />
                <p>
                  <strong>1. </strong>
                </p>
                <br />
                <p>
                  <strong>2. </strong>
                </p>
                <br />
                <p>
                  <strong>3. </strong>
                </p>
                <br />
                <p>
                  <strong>4. </strong>
                </p>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="bg-info">
              <small className="text-muted text-secondry">Team Abc Bank</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://st.depositphotos.com/1962533/4806/i/950/depositphotos_48069011-stock-photo-contact-display-with-mail-e.jpg"
            />
            <Card.Body>
              <Card.Title>CONTACT</Card.Title>
              <Card.Text>
                <p>Contact us and we'll get back to you within 24 hours.</p>
                <p className="text-primary">Mumbai, India</p>
                <input
                  type="button"
                  value="Location"
                  className="btn btn-info"
                />
                <p className="text-primary">+91 1515151515</p>
                <input type="button" value="Call" className="btn btn-info" />
                <p className="text-primary">customer-service@abcbank.com</p>
                <input type="button" value="Email" className="btn btn-info" />
              </Card.Text>
            </Card.Body>
            <Card.Footer className="bg-info">
              <small className="text-muted">Contact Us 24/7</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </>
    </div>
  );
}
