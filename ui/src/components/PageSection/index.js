import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";

// this component needs to be styled to take up the entire height of the screen - the menu height
// this component also needs to control the button appearing, needs to pass state down to children
// needs to be turned into a higher order component
// should have a backgroundImage prop to handle the container's background image

class PageSection extends Component {
  state = {
    // controls the display state of the next section button
    button: false
  };

  render() {
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <Image src="/images/wireframe/image.png" />
        </Grid.Column>
      </Grid>
    );
  }
}

export default PageSection;
