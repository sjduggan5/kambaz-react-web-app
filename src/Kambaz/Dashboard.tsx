import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: '270px' }}>
            <Card>
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kambaz/Courses/1234/Home"
              >
                <Card.Img
                  variant="top"
                  src="/images/react.png"
                  width="100%"
                  height={160}
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">
                    CS1234 React JS
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Full Stack software developer
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: '270px' }}>
            <Card>
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kambaz/Courses/1234/Home"
              >
                <Card.Img
                  variant="top"
                  src="/images/css.png"
                  width="100%"
                  height={160}
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">
                    CS1235 CSS
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Full Stack software developer
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: '270px' }}>
            <Card>
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kambaz/Courses/1236/Home"
              >
                <Card.Img
                  variant="top"
                  src="/images/nodejs.png"
                  width="100%"
                  height={160}
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">
                    CS1236 Node JS
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Backend software developer
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: '270px' }}>
            <Card>
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kambaz/Courses/1237/Home"
              >
                <Card.Img
                  variant="top"
                  src="/images/mongodb.png"
                  width="100%"
                  height={160}
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">
                    CS1237 MongoDB
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Database architect
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: '270px' }}>
            <Card>
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kambaz/Courses/1238/Home"
              >
                <Card.Img
                  variant="top"
                  src="/images/netlify.png"
                  width="100%"
                  height={160}
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">
                    CS1238 Netlify
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Site reliability engineer
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: '270px' }}>
            <Card>
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kambaz/Courses/1239/Home"
              >
                <Card.Img
                  variant="top"
                  src="/images/redux.png"
                  width="100%"
                  height={160}
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">
                    CS1239 Redux
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    State management
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: '270px' }}>
            <Card>
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kambaz/Courses/1240/Home"
              >
                <Card.Img
                  variant="top"
                  src="/images/nextjs.png"
                  width="100%"
                  height={160}
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">
                    CS1240 Next.js
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Full Stack all-in-one developer
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
