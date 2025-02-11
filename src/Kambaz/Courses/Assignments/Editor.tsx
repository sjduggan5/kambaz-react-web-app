import { Button, Col, Row } from 'react-bootstrap';

export default function AssignmentEditor() {
  return (
    <div className="ms-4" id="wd-assignments-editor">
      <Row>
        <label htmlFor="wd-name">Assignment Name</label>
      </Row>
      <Row>
        <input className="form-control" type="text" id="wd-name" value="A1" />
      </Row>
      <Row className="mt-3">
        <textarea className="form-control" id="wd-name" rows={6}>
          The assignment is available online. Submit a link to the landing page
          of your Web application running on Netlify of
        </textarea>
      </Row>
      <Row className="mt-3">
        <Col xs={3}>
          <label className="float-end" htmlFor="wd-points">
            Points
          </label>
        </Col>
        <Col>
          <input
            className="form-control"
            type="number"
            id="wd-points"
            value={100}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={3}>
          <label className="float-end" htmlFor="wd-group">
            Assignment Group
          </label>
        </Col>
        <Col>
          <select className="form-select" id="wd-group">
            <option selected value="ASSIGNMENTS">
              Assignments
            </option>
            <option value="QUIZZES">Quizzes</option>
            <option value="EXAMS">Exams</option>
            <option value="PROJECT">Project</option>
          </select>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={3}>
          <label className="float-end" htmlFor="wd-display-grade-as">
            Display Grade as
          </label>
        </Col>
        <Col>
          <select className="form-select" id="wd-display-grade-as">
            <option selected value="PERCENTAGE">
              Percentage
            </option>
            <option value="POINTS">Points</option>
            <option value="LETTER">Letter Grade</option>
          </select>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={3}>
          <label className="float-end">Submission Type</label>
        </Col>
        <Col>
          <div className="form-control">
            <select className="form-select mt-2" id="wd-submission-type">
              <option selected value="ONLINE">
                Online
              </option>
              <option value="PHYSICAL">Physical Copy</option>
            </select>
            <br />
            <strong className="mt-3">Online Entry Options</strong>
            <div className="form-check mt-2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="wd-text-entry"
              />
              <label className="form-check-label" htmlFor="wd-text-entry">
                Text Entry
              </label>
            </div>
            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="wd-website-url"
              />
              <label className="form-check-label" htmlFor="wd-website-url">
                Website URL
              </label>
            </div>
            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="wd-media-recordings"
              />
              <label className="form-check-label" htmlFor="wd-media-recordings">
                Media Recordings
              </label>
            </div>
            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="wd-student-annotation"
              />
              <label
                className="form-check-label"
                htmlFor="wd-student-annotation"
              >
                Student Annotation
              </label>
            </div>
            <div className="form-check mt-3 mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="wd-file-upload"
              />
              <label className="form-check-label" htmlFor="wd-file-upload">
                File Uploads
              </label>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={3}>
          <label className="float-end">Assign</label>
        </Col>
        <Col>
          <div className="form-control">
            <label htmlFor="wd-assign-to">
              <strong className="mt-2">Assign to</strong>
            </label>
            <input
              className="form-control"
              type="text"
              id="wd-points"
              value="Everyone"
            />
            <label className="mt-2" htmlFor="wd-due-date">
              <strong>Due</strong>
            </label>
            <input
              className="form-control"
              type="date"
              id="wd-due-date"
              value="2025-05-13"
            />
            <div className="d-flex flex-row justify-content-evenly mb-3">
              <div className="me-2" style={{ width: '100%' }}>
                <label className="mt-2" htmlFor="wd-available-from">
                  <strong>Available from</strong>
                </label>
                <input
                  className="form-control"
                  type="date"
                  id="wd-available-from"
                  value="2025-05-06"
                />
              </div>
              <div style={{ width: '100%' }}>
                <label className="mt-2" htmlFor="wd-until">
                  <strong>Until</strong>
                </label>
                <input
                  className="form-control"
                  type="date"
                  id="wd-until"
                  value="2025-05-20"
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <hr />
      <div className="d-flex flex-row justify-content-end">
        <Button variant="secondary" className="ms-2 mb-3" id="wd-add-group-btn">
          Cancel
        </Button>
        <Button variant="danger" className="ms-2 mb-3" id="wd-add-group-btn">
          Save
        </Button>
      </div>
    </div>
  );
}
