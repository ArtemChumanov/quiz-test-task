import React, { FC, ReactNode } from "react";
import { Navbar } from "@/components";

interface MenuProps {
  children: ReactNode;
}

const Menu: FC<MenuProps> = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

export default Menu;
