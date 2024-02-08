import React, { useState } from "react";
import Container from "../components/Container";
function Hamburger() {
  const [isClicked, setIsClicked] = useState(false);
  const [removeMenu, setRemoveMenu] = useState(true);
  const handleClick = () => {
    setRemoveMenu(false);
    setIsClicked(true);
  };

  const secondClick = () => {
    setRemoveMenu(true);
    setIsClicked(false);
  };

  return (
    <div className="semiMenu">
      <div className="allMenu">
        {removeMenu && (
          <div onClick={handleClick} className="menu">
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
          </div>
        )}
        {isClicked && (
          <>
            <p className="times" onClick={secondClick}>
              &times;
            </p>
            <Container />
          </>
        )}
      </div>
    </div>
  );
}

export default Hamburger;
