import { Table } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
export default function PeopleTable() {
  return (
    <div id="wd-people-table">
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Tony</span>{' '}
              <span className="wd-last-name">Stark</span>
            </td>
            <td className="wd-login-id">001234561S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-01</td>
            <td className="wd-total-activity">10:21:32</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Bruce</span>{' '}
              <span className="wd-last-name">Wayne</span>
            </td>
            <td className="wd-login-id">001234562S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">PROFESSOR</td>
            <td className="wd-last-activity">2023-11-21</td>
            <td className="wd-total-activity">2:24:56</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Steve</span>{' '}
              <span className="wd-last-name">Rogers</span>
            </td>
            <td className="wd-login-id">001234563S</td>
            <td className="wd-section">S102</td>
            <td className="wd-role">PROFESSOR</td>
            <td className="wd-last-activity">2022-03-11</td>
            <td className="wd-total-activity">1:22:34</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Natasha</span>{' '}
              <span className="wd-last-name">Romanoff</span>
            </td>
            <td className="wd-login-id">001234564S</td>
            <td className="wd-section">S102</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2024-08-19</td>
            <td className="wd-total-activity">14:29:07</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}