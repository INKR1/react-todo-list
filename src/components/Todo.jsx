import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";


export default function Todo({ todo, toggleComplete, handleDelete, handleEdit,}) {

  const [newTitle, setNewTitle] = useState();

  return (
    <div className="todo">
      <input
        type="text"
        value={"added todo"}
        className="list"
        onChange={() => {}}
      />
      <div>
        <button>
          <CheckCircleIcon id="i" />
        </button>
        <button>
          <EditIcon id="i" />
        </button>
        <button>
          <DeleteIcon id="i" />
        </button>
      </div>
    </div>
  );
}