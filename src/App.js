import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

function App() {
  return (
    <div style={{ marginTop: 50 }}>
      <Container>
        <Row>
          <Col xs={{ span: 7, offset: 3 }}>
            <ListGroup>
              <ListGroup.Item variant="warning">Big Dog Proposal</ListGroup.Item>
              <ListGroup.Item variant="success">Ada For Everyone Proposal</ListGroup.Item>
              <ListGroup.Item variant="success">Build Developers Proposal</ListGroup.Item>
              <ListGroup.Item variant="success">Community Talk</ListGroup.Item>
              <ListGroup.Item variant="success">New Coins</ListGroup.Item>
              <ListGroup.Item variant="success">Industry News</ListGroup.Item>
              <ListGroup.Item variant="success">Charles in Charge </ListGroup.Item>
              {/* <ListGroup.Item variant="light">Light</ListGroup.Item>
              <ListGroup.Item variant="dark">Dark</ListGroup.Item> */}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
