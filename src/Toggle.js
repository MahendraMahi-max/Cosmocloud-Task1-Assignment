import { useState } from "react";
import { onToggle, offToggle } from "./Utils";

const Toggle = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      {toggle ? (
        <img
          alt="delete"
          className="delete-icon"
          src={onToggle}
          onClick={() => setToggle(!toggle)}
        />
      ) : (
        <img
          alt="delete"
          src={offToggle}
          className="delete-icon"
          onClick={() => setToggle(!toggle)}
        />
      )}
    </>
  );
};

export default Toggle;
