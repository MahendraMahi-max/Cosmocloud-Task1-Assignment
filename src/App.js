import React from "react";
import "./styles.css";
import { useState } from "react";
import { plusIcon, deleteIcon } from "./Utils";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";
import Comp4 from "./Comp4";
import Comp5 from "./Comp5";
import Toggle from "./Toggle";
const App = () => {
  const [name1, setName1] = useState("person");

  const [data, setData] = useState(false);
  const [data2, setData2] = useState(false);
  const [visible, setVisible] = useState(true);
  return (
    <>
      <div className="app">
        <div className="top-section">
          <label style={{ padding: 10, fontSize: 25 }}>
            Field name and Type
          </label>
          <img
            style={{ fontSize: 20 }}
            alt="add"
            className="plus-image"
            onClick={() => setData2(true)}
            src={plusIcon}
          />
        </div>
        {visible && (
          <div className="Title box Req">
            <label style={{ padding: 10 }}>1</label>

            <input
              className="input-box"
              type="text"
              value={name1}
              onChange={(e) => setName1(e.target.value)}
            />
            <select className="input-box">
              <option value="object" selected>
                OBJECT
              </option>
              <option value="string">STRING</option>
              <option value="number">NUMBER</option>
              <option value="boolean">BOOLEAN</option>
            </select>
            <p style={{ margin: 10 }}>Required</p>
            <Toggle />

            <img alt="add" onClick={() => setData(true)} src={plusIcon} />
            <img
              alt="delete"
              className="delete-icon"
              src={deleteIcon}
              onClick={() => setVisible(!visible)}
            />
          </div>
        )}
        {visible && <Comp1 />}
        {data && <Comp3 />}
        <Comp5 />
        <Comp4 />
        {data2 && <Comp2 />}
      </div>
    </>
  );
};

export default App;
