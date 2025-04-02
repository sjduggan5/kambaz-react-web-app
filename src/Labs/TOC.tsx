import Nav from 'react-bootstrap/Nav';
import { useLocation } from 'react-router';
export default function TOC() {
  const { pathname } = useLocation();
  return (
    <Nav variant="pills">
      <Nav.Item>
        <Nav.Link href="#/Labs">Labs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/Labs/Lab1" active={pathname.includes('Lab1')}>
          Lab 1
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/Labs/Lab2" active={pathname.includes('Lab2')}>
          Lab 2
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/Labs/Lab3" active={pathname.includes('Lab3')}>
          Lab 3
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/Labs/Lab4" active={pathname.includes('Lab4')}>
          Lab 4
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/Labs/Lab5" active={pathname.includes('Lab5')}>
          Lab 5
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/Kambaz">Kambaz</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://github.com/sjduggan5/kambaz-react-web-app">
          Frontend GitHub
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://github.com/sjduggan5/kambaz-node-server-app">
          Backend GitHub
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
