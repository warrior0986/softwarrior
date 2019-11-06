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
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";

import ProfileImage from "assets/img/profile.jpg";
import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.jsx";

import { FormattedMessage } from "react-intl";

class ProfilePage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <div >
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img src={ProfileImage} alt="..." className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>Diego Guerrero</h3>
                  <h6><FormattedMessage id= "Profile.charge" defaultMessage="Developer" /></h6>
                  <Button
                        href="https://www.facebook.com/warrior0986/"
                        target="_blank"
                        color="facebook"
                        justIcon
                        simple
                      >
                        <i className="fab fa-facebook" />
                  </Button>
                  <Button
                        href="https://www.linkedin.com/in/diego-alejandro-guerrero-valencia"
                        target="_blank"
                        color="linkedin"
                        justIcon
                        simple
                      >
                        <i className="fab fa-linkedin" />
                  </Button>
                  <Button
                        href="https://github.com/warrior0986"
                        target="_blank"
                        color="github"
                        justIcon
                        simple
                      >
                        <i className="fab fa-github" />
                      </Button>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <div
            className={classNames(classes.description, classes.textCenter)}
          >
            <p>
            <FormattedMessage id= "Profile.description" defaultMessage="Web developer with 6 years of experience in different technologies, passionate about music, video games and anime" />
            </p>
          </div>
        </div>  
      </div>
    );
  }
}

ProfilePage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(profilePageStyle)(ProfilePage);
