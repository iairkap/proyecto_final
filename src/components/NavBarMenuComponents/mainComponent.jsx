//necesito que este componente de next js sea use client

"use client";

import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Menu from "../Menu/Menu";

const MainComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <NavBar handleBotonMenu={handleOpenMenu} />
      <Menu handleCloseMenu={handleCloseMenu} openMenu={menuOpen} />
    </div>
  );
};

export default MainComponent;

//
