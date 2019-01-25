import React from "react";
import { Menu } from "semantic-ui-react";

import { items } from "./constants"

// needs to all sections as anchor links
// look for css highlight options when section is selected
const Navigation = () => <Menu items={items} />;

export default Navigation;