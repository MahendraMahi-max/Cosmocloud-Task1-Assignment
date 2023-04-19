import { useState } from "react";
import Toggle from "./Toggle";
import { deleteIcon } from "./Utils";

const Comp5 = () => {
  const [name2, setName2] = useState("order");

  const [visible, setVisible] = useState(true);
  return (
    <>
      {visible && (
        <div className="Title box Req">
          <label style={{ padding: 10 }}>2</label>
          <input
            className="input-box"
            type="text"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
          />

          <select className="input-box">
            <option value="object" selected>
              OBJECT
            </option>
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

export default Comp5;
