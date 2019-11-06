/*!

=========================================================
* Material Kit PRO React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// sections for this page
import SectionDescription from "views/AboutUsPage/Sections/SectionDescription.jsx";
import Profile from "views/ProfilePage/ProfilePage.jsx";
import SectionCards from "views/ComponentsPage/Sections/SectionCards.jsx";

import aboutUsStyle from "assets/jss/material-kit-pro-react/views/aboutUsStyle.jsx";

class AboutUsPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
    return (
      <div id="about">
        <div className={classes.container}>
          <Profile />
          <SectionDescription />
          <SectionCards />
        </div>
      </div>
    );
  }
}

AboutUsPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(aboutUsStyle)(AboutUsPage);
