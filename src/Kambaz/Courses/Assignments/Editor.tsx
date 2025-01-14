export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">
        <h3>Assignment Name</h3>
      </label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description" cols={40} rows={6}>
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option selected value="ASSIGNMENTS">
                ASSIGNMENTS
              </option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option selected value="PERCENTAGE">
                PERCENTAGE
              </option>
              <option value="POINTS">POINTS</option>
              <option value="LETTER">LETTER GRADE</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option selected value="ONLINE">
                Online
              </option>
              <option value="PHYSICAL">Physical</option>
              <option value="COMPLETION">Completion</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top" />
          <td>
            <label>Online Entry Options</label>
            <br />

            <input
              type="checkbox"
              name="check-entry-option"
              id="wd-text-entry"
            />
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />

            <input
              type="checkbox"
              name="check-entry-option"
              id="wd-website-url"
            />
            <label htmlFor="wd-website-url">Website URL</label>
            <br />

            <input
              type="checkbox"
              name="check-entry-option"
              id="wd-media-recordings"
            />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />

            <input
              type="checkbox"
              name="check-entry-option"
              id="wd-student-annotation"
            />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br />

            <input
              type="checkbox"
              name="check-entry-option"
              id="wd-file-upload"
            />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label>Assign</label>
          </td>
          <td>
            <label htmlFor="wd-assign-to">Assign to</label>
            <br />
            <input id="wd-assign-to" value={'Everyone'} />
            <br />
            <br />
            <label htmlFor="wd-due-date">Due</label>
            <br />
            <input type="date" id="wd-due-date" value="2025-05-13" />
            <br />
            <br />

            <tr>
              <td>
                <label htmlFor="wd-available-from">Available from</label>
                <br />
                <input type="date" id="wd-available-from" value="2025-05-06" />
              </td>
              <td>
                <label htmlFor="wd-until">Until</label>
                <br />
                <input type="date" id="wd-until" value="2025-05-20" />
              </td>
            </tr>
          </td>
        </tr>
      </table>
      <hr />
      <table width="100%">
        <tr>
          <td align="right">
            <button id="wd-cancel-submit">Cancel</button>
            &nbsp;
            <button id="wd-save-assignment">Save</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
