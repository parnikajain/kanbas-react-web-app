import { NavLink } from "react-router-dom";

export default function CoursesNavigation() {
  const links = [
    { label: "Home", path: "/Kanbas/Courses/1234/Home" },
    { label: "Modules", path: "/Kanbas/Courses/1234/Modules" },
    { label: "Piazza", path: "/Kanbas/Courses/1234/Piazza" },
    { label: "Zoom", path: "/Kanbas/Courses/1234/Zoom" },
    { label: "Assignments", path: "/Kanbas/Courses/1234/Assignments" },
    { label: "Quizzes", path: "/Kanbas/Courses/1234/Quizzes" },
    { label: "People", path: "/Kanbas/Courses/1234/People" },
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link, index) => (
        <NavLink 
          key={index} 
          to={link.path} 
          id={`wd-course-${link.label.toLowerCase()}-link`}
          className="list-group-item text-danger border border-0"
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
}
// import { Link, NavLink } from "react-router-dom";
// export default function CoursesNavigation() {
//   return (
//     <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
//       <NavLink 
//       to="/Kanbas/Courses/1234/Home" 
//       id="wd-course-home-link"
//       className="list-group-item border border-0"> 
//       Home 
//       </NavLink>
//       <NavLink to="/Kanbas/Courses/1234/Modules" id="wd-course-modules-link"
//         className="list-group-item text-danger border border-0"> Modules </NavLink>
//       <NavLink to="/Kanbas/Courses/1234/Piazza" id="wd-course-piazza-link"
//         className="list-group-item text-danger border border-0"> Piazza </NavLink>
//       <NavLink to="/Kanbas/Courses/1234/Zoom" id="wd-course-zoom-link"
//         className="list-group-item text-danger border border-0"> Zoom </NavLink>
//       <NavLink to="/Kanbas/Courses/1234/Assignments" id="wd-course-quizzes-link"
//         className="list-group-item text-danger border border-0"> Assignments </NavLink>
//       <NavLink to="/Kanbas/Courses/1234/Quizzes" id="wd-course-assignments-link"
//         className="list-group-item text-danger border border-0"> Quizzes </NavLink>
//       <NavLink to="/Kanbas/Courses/1234/People" id="wd-course-people-link"
//         className="list-group-item text-danger border border-0" > People </NavLink>
//     </div>
// );}


