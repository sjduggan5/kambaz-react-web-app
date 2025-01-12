export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
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
            <label htmlFor="wd-assignment-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-assignment-group">
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
            <label htmlFor="wd-grade-display">Display Grade as</label>
          </td>
          <td>
            <select id="wd-grade-display">
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
              id="wd-online-entry-text"
            />
            <label htmlFor="wd-online-entry-text">Text Entry</label>
            <br />

            <input
              type="checkbox"
              name="check-entry-option"
              id="wd-online-entry-website"
            />
            <label htmlFor="wd-online-entry-website">Website URL</label>
            <br />

            <input
              type="checkbox"
              name="check-entry-option"
              id="wd-online-entry-media"
            />
            <label htmlFor="wd-online-entry-media">Media Recordings</label>
            <br />

            <input
              type="checkbox"
              name="check-entry-option"
              id="wd-online-entry-annotation"
            />
            <label htmlFor="wd-online-entry-annotation">
              Student Annotation
            </label>
            <br />

            <input
              type="checkbox"
              name="check-entry-option"
              id="wd-online-entry-file"
            />
            <label htmlFor="wd-online-entry-file">File Uploads</label>
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
