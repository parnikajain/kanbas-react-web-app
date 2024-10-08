import { Link, NavLink } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
export default function KanbasNavigation() {
  return (
    <div id="wd-kanbas-navigation" style={{ width: 110 }}
    className="list-group rounded-0 position-fixed
    bottom-0 top-0 d-none d-md-block bg-black z-2">
      <a id="wd-neu-link" target="_blank" 
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center">
          <img id="wd-neu-link" src="NEU.png" height="75px"/></a>
          <NavLink
        to="/Kanbas/Account"
        id="wd-account-link"
        className={({ isActive }) =>
          isActive
            ? "list-group-item text-center border-0 bg-white text-black"
            : "list-group-item text-center border-0 bg-black text-white"
        }
      >
      <FaRegCircleUser className='fs-1 ${isActive ? "text-black" : "text-white"}' /><br />
      Account</NavLink>
      <NavLink
        to="/Kanbas/Dashboard"
        id="wd-dashboard-link"
        className={({ isActive }) =>
          isActive
            ? "list-group-item text-center border-0 bg-white text-danger"
            : "list-group-item text-center border-0 bg-black text-danger"
        }
      >
        <AiOutlineDashboard className={'fs-1 ${isActive ? "text-danger" : "text-danger"}'} />
        <br />
        Dashboard
      </NavLink>
        <NavLink to="/Kanbas/Courses" id="wd-course-link"
        className={({ isActive }) =>
        isActive
          ? "list-group-item text-center border-0 bg-white text-danger"
          : "list-group-item text-center border-0 bg-black text-danger"
      }>
        <LiaBookSolid className={'fs-1 ${isActive ? "text-danger" : "text-danger"}'} /><br />
        Courses </NavLink>
        <NavLink to="/Kanbas/Calendar" id="wd-calendar-link"
        className={({ isActive }) =>
        isActive
          ? "list-group-item text-center border-0 bg-white text-danger"
          : "list-group-item text-center border-0 bg-black text-danger"
      }>
        <IoCalendarOutline className={'fs-1 ${isActive ? "text-danger" : "text-danger"}'} /><br />
        Calendar </NavLink>
        <NavLink to="/Kanbas/Inbox" id="wd-inbox-link"
        className={({ isActive }) =>
        isActive
          ? "list-group-item text-center border-0 bg-white text-danger"
          : "list-group-item text-center border-0 bg-black text-danger"
      }>
        <FaInbox className={'fs-1 ${isActive ? "text-danger" : "text-danger"}'} /><br />
        Inbox </NavLink>
        <NavLink to="/Kanbas/Labs" id="wd-labs-link"
        className={({ isActive }) =>
        isActive
          ? "list-group-item text-center border-0 bg-white text-danger"
          : "list-group-item text-center border-0 bg-black text-danger"
      }>
        <LiaCogSolid className={'fs-1 ${isActive ? "text-danger" : "text-danger"}'} /><br />
        Labs </NavLink>
    </div>
);}
