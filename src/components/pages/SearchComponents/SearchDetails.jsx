import React, { useState } from "react";

function SearchDeatails() {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="searchDetails">
      <p>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          required
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </p>
    </div>
  );
}

export default SearchDeatails;
