import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { MdAssignmentTurnedIn } from "react-icons/md";

export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
    <MdAssignmentTurnedIn/>
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}
