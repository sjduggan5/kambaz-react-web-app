import { IoSearch } from 'react-icons/io5';

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="input-group mb-3" style={{width: '25%'}}>
        <span className="input-group-text" id="basic-addon1">
          <IoSearch />
        </span>
        <input type="text" className="form-control" placeholder="Search..." />
      </div>
      <button id="wd-add-assignment-group">+ Group</button>&nbsp;
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>{' '}
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a
            href="#/Kambaz/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A1 - ENV + HTML
          </a>
          <p>
            Multiple Modules | <strong>Not available until</strong> May 6 at
            12:00 am | <strong>Due</strong> May 13 at 11:59pm | 100 pts
          </p>{' '}
        </li>
        <li className="wd-assignment-list-item">
          <a
            href="#/Kambaz/Courses/1234/Assignments/124"
            className="wd-assignment-link"
          >
            A1 - CSS + BOOTSTRAP
          </a>
          <p>
            Multiple Modules | <strong>Not available until</strong> May 13 at
            12:00 am | <strong>Due</strong> May 20 at 11:59pm | 100 pts
          </p>{' '}
        </li>
        <li className="wd-assignment-list-item">
          <a
            href="#/Kambaz/Courses/1234/Assignments/125"
            className="wd-assignment-link"
          >
            A1 - JAVASCRIPT + REACT
          </a>
          <p>
            Multiple Modules | <strong>Not available until</strong> May 20 at
            12:00 am | <strong>Due</strong> May 27 at 11:59pm | 100 pts
          </p>{' '}
        </li>
      </ul>
    </div>
  );
}
