/* eslint-disable no-unused-vars */

import { useState } from "react";
import { Button } from "react-bootstrap";
import Products from "../../Pages/productsPage/Products";
import "./TabMenu.css";


function TabMenu() {

  const [defaultType, setDefaultType] = useState("All");

  return (
    <div>
      <div className="tabContainer text-center">
        <Button
          variant="light"
          className="mr-3 bgHover tabMenu"
          data-testid="all_button"
          onClick={() => setDefaultType("All")}
        >
          All Categories
        </Button>
        <Button
          variant="light"
          className="mr-3 bgHover tabMenu"
          data-testid="reg_button"
          onClick={() => setDefaultType("Regular")}
        >
          Regular
        </Button>
        <Button
          variant="light"
          className="mr-3 bgHover tabMenu"
          data-testid="print_button"
          onClick={() => setDefaultType("Printed")}
        >
          Printed
        </Button>
        <Button
          variant="light"
          className="mr-3 bgHover tabMenu"
          data-testid="plain_button"
          onClick={() => setDefaultType("Plain")}
        >
          Plain
        </Button>
      </div>
      <Products type={defaultType} />
    </div>
  );
}

export default TabMenu;
