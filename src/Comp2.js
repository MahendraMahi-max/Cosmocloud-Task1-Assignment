import { deleteIcon } from "./Utils";
import { useState } from "react";
import Toggle from "./Toggle";
const Comp2 = () => {
  const [name, setName] = useState("addName");
  const [visible, setVisible] = useState(true);
  return (
    <>
      {visible && (
        <div className="Title box Req">
          <label style={{ padding: 10 }}>4</label>

          <input
            className="input-box"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select className="input-box">
            <option value="object">OBJECT</option>
            <option value="string" selected>
              STRING
            </option>
            <option value="number">NUMBER</option>
            <option value="boolean">BOOLEAN</option>
          </select>
          <p style={{ margin: 10 }}>Required</p>
          <Toggle />

          <img
            alt="delete"
            className="delete-icon"
            src={deleteIcon}
            onClick={() => setVisible(!visible)}
          />
        </div>
      )}
    </>
  );
};

export default Comp2;
