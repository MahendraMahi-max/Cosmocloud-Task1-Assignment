const Comp1 = () => {
  return (
    <div className="child1">
      <input className="input-box" type="text" value="name" />
      <select className="input-box">
        <option value="object">OBJECT</option>
        <option value="string">STRING</option>
        <option value="number">NUMBER</option>
        <option value="boolean">BOOLEAN</option>
      </select>
      <div className="child1">
        <input className="input-box" type="text" value="firstName" />
        <select className="input-box">
          <option value="object">OBJECT</option>
          <option value="string" selected>
            STRING
          </option>
          <option value="number">NUMBER</option>
          <option value="boolean">BOOLEAN</option>
        </select>
        <br />
        <input className="input-box" type="text" value="lastName" />
        <select className="input-box">
          <option value="object">OBJECT</option>
          <option value="string" selected>
            STRING
          </option>
          <option value="number">NUMBER</option>
          <option value="boolean">BOOLEAN</option>
        </select>
      </div>

      <input className="input-box" type="text" value="age" />
      <select className="input-box">
        <option value="object">OBJECT</option>
        <option value="string">STRING</option>
        <option value="number" selected>
          NUMBER
        </option>
        <option value="boolean">BOOLEAN</option>
      </select>
    </div>
  );
};

export default Comp1;
