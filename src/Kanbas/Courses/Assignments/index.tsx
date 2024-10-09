import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmemtControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs"
import AssignmentsControlButtons from "./AssignmentsControlButtons";

export default function Assignments() {
    return (
  //     <div id="wd-assignments">
  //       <input id="wd-search-assignment"
  //              placeholder="Search for Assignments" />
  //       <button id="wd-add-assignment-group">+ Group</button>
  //       <button id="wd-add-assignment">+ Assignment</button>
  //       <h3 id="wd-assignments-title">
  //         ASSIGNMENTS 40% of Total <button>+</button>
  //       </h3>
  //       <ul id="wd-assignment-list">
  //         <li className="wd-assignment-list-item">
  //           <a className="wd-assignment-link"
  //             href="#/Kanbas/Courses/1234/Assignments/123">
  //             A1 - ENV + HTML
  //           </a>
  //           <br />
  //           Multiple Modules | <b>Not available until</b> May 6 at 12:00am |
  //           <br />
  //           <b>Due</b> May 13 at 11:59 pm | 100 pts
  //         </li>
  //         <li className="wd-assignment-list-item">
  //           {/* Complete On Your Own */}
  //           <a className="wd-assignment-link"
  //             href="#/Kanbas/Courses/1234/Assignments/123">
  //             A2 - CSS + BOOTSTRAP
  //           </a>
  //           <br />
  //           Multiple Modules | <b>Not available until</b> May 13 at 12:00am |
  //           <br />
  //           <b>Due</b> May 20 at 11:59 pm | 100 pts
  //         </li>
  //         <li className="wd-assignment-list-item">
  //           <a className="wd-assignment-link"
  //             href="#/Kanbas/Courses/1234/Assignments/123">
  //             A3 - JAVASCRIPT + REACT
  //           </a>
  //           <br />
  //           Multiple Modules | <b>Not available until</b> May 20 at 12:00am |
  //           <br />
  //           <b>Due</b> May 27 at 11:59 pm | 100 pts
  //         </li>
  //       </ul>
  //       <div>
  // </div>

  //     </div>
  <div>
        <div>
  <AssignmemtControls /><br /><br /><br /><br />
  <ul id="wd-assignments" className="list-group rounded-0">
    <li className="wd-assignments list-group-item p-0 mb-5 fs-5 border-gray">
    <div className="wd-title p-3 ps-2 bg-secondary">
        <BsGripVertical className="me-2 fs-3" />
        ASSIGNMENTS
        <AssignmentsControlButtons />
      </div>
      <ul className="wd-assignment list-group rounded-0">
        <li className="wd-editor list-group-item p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" />
          A1
          <AssignmentControlButtons />
        </li>
        <li className="wd-editor list-group-item p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" />
          A2
          <AssignmentControlButtons />
        </li>

        <li className="wd-editor list-group-item p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" />
          A3
          <AssignmentControlButtons />
        </li>

      </ul>
    </li>
  </ul> </div>

      </div>
  );}
  