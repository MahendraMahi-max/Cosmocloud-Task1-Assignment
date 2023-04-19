import { useState } from "react";
import Toggle from "./Toggle";
import { deleteIcon } from "./Utils";
const Comp4 = () => {
  const [name3, setName3] = useState("class");

  const [visible, setVisible] = useState(true);
  return (
    <>
      {visible && (
        <div className="Title box Req">
          <label style={{ padding: 10 }}>3</label>
          <input
            className="input-box"
            type="text"
            value={name3}
            onChange={(e) => setName3(e.target.value)}
          />
          <select className="input-box">
            <option value="object">OBJECT</option>
            <option value="string">STRING</option>
            <option value="number">NUMBER</option>
            <option value="boolean" selected>
              BOOLEAN
            </option>
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
export default Comp4;
