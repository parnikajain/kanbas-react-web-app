import Kanbas from '../../index';
import { Navigate } from 'react-router';
export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description" cols={30} rows={10}>
          The assignment is available online Submit a link to the landing page of your
          Web application running on Netlify. The landing page should include the following:
          Your full name and section Links to each of the Lab assignments Link to the Kanbas 
          application Links to all relevant source code repositories The Kanbas application 
          should include a link to navigate back to the landing page.
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
          {/* Complete on your own */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
              </td>
              <select id="wd-group">
                <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                </select>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
              </td>
              <select id="wd-display-grade-as">
                <option selected value="PERCENTAGE">Percentage</option>
                </select>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission type</label>
              </td>
              <select id="wd-submission-type">
                <option selected value="ONLINE">Online</option>
                </select><br/>
                <label>Online Entry Options</label><br/>
                <input type="checkbox" name="check-option" id="wd-text-entry"/>
                <label htmlFor="wd-text-entry">Text Entry</label><br/>

                <input type="checkbox" name="check-option" id="wd-website-url"/>
                <label htmlFor="wd-website-url">Website URL</label><br/>

                <input type="checkbox" name="check-option" id="wd-media-recordings"/>
                <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

                <input type="checkbox" name="check-option" id="wd-student-annotation"/>
                <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

                <input type="checkbox" name="check-option" id="wd-file-upload"/>
                <label htmlFor="wd-file-upload">File Upload</label>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign</label>
              </td>
              <label htmlFor='wd-assign-to'>Assign to</label><br/>
              <input id="wd-everyone" value={"Everyone"} /><br/>
              <label>Due</label><br/>
              <input type="date" id="wd-due" value={"2024-05-13"} /><br/>
              <label htmlFor='wd-available-from'>Available from</label>
              <label htmlFor='wd-available-until'>Until</label><br/>
              <input type="date" id="wd-available-from" value={"2024-05-06"} />
              <input type="date" id="wd-available-until" value={"2024-05-20"} /><br/>
          </tr>
        </table>
        <button id="wd-cancel">Cancel</button>
        <button id="wd-save">Save</button>
      </div>
  );}  