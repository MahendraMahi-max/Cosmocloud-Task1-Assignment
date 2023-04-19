import { useState } from "react";
import { deleteIcon } from "./Utils";
import Toggle from "./Toggle";
const Comp3 = () => {
  const [name, setName] = useState("addName");
  const [visible, setVisible] = useState(true);

  return (
    <>
      {visible && (
        <div className=" Title box Req child1">
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
            src={deleteIcon}
            className="delete-icon"
            onClick={() => setVisible(!visible)}
          />
        </div>
      )}
    </>
  );
};

export default Comp3;
