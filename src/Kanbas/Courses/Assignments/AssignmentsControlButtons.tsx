import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { BsPlus } from "react-icons/bs"

export default function AssignmentsControlButtons() {
  return (
    <div className="float-end">
        <button>
            40% of Total
        </button>
        <BsPlus/>
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}
