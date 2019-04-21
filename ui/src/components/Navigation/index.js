import React from "react";
import { Menu } from "semantic-ui-react";

import { items } from "./constants";

// needs to all sections as anchor links
// look for css highlight options when section is selected
const Navigation = () => (
  <nav>
    <Menu widths={1} items={items} />{" "}
  </nav>
);

export default Navigation;
