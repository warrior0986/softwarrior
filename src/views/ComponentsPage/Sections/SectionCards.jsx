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
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Info from "components/Typography/Info.jsx";
import Button from "components/CustomButtons/Button.jsx";

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx";

import pamSvg from "assets/img/pam.svg";
import ecommerceSvg from "assets/img/ecommerce.svg";
import plpSvg from "assets/img/plp.svg";
import lostPetsImage from "assets/img/lostpets.png";

import { FormattedMessage } from "react-intl";

class SectionCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRotate1: "",
      activeRotate2: ""
    };
  }
  componentDidMount() {
    if (window) {
      window.addEventListener("resize", this.addStylesForRotatingCards);
    }
    this.addStylesForRotatingCards();
  }
  componentWillUnmount() {
    if (window) {
      window.removeEventListener("resize", this.addStylesForRotatingCards);
    }
  }
  addStylesForRotatingCards = () => {
    const { classes } = this.props;
    var rotatingCards = document.getElementsByClassName(classes.cardRotate);
    for (let i = 0; i < rotatingCards.length; i++) {
      var rotatingCard = rotatingCards[i];
      var rotatingWrapper = rotatingCard.parentElement;
      var cardWidth = rotatingCard.parentElement.offsetWidth;
      var cardHeight = rotatingCard.children[0].children[0].offsetHeight;
      rotatingWrapper.style.height = cardHeight + "px";
      rotatingWrapper.style["margin-bottom"] = 30 + "px";
      var cardFront = rotatingCard.getElementsByClassName(classes.front)[0];
      var cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
      cardFront.style.height = cardHeight + 35 + "px";
      cardFront.style.width = cardWidth + "px";
      cardBack.style.height = cardHeight + 35 + "px";
      cardBack.style.width = cardWidth + "px";
    }
  };
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div {...rest} className="cd-section" id="cards">
        <div id="portfolio">
            {/* PROFILE CARDS START */}
            <div>
              <div className={classes.container}>
                <div className={classes.title}>
                  <h3><FormattedMessage id= "Portfolio.title" defaultMessage="What I've done" /></h3>
                </div>
                <GridContainer>
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile>
                      <CardHeader image>
                        <img src={pamSvg} alt="..." />
                        <div className={classes.cardTitleAbsolute}>
                          PAM
                        </div>
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: `url(${pamSvg})`,
                            opacity: "1"
                          }}
                        />
                      </CardHeader>
                      <CardBody>
                        <Info>
                          <h6 className={classes.cardCategory}>PAM</h6>
                        </Info>
                        <p className={classes.stats}>
                          <FormattedMessage id= "Portfolio.pam.description" defaultMessage="PAM Description" />
                        </p>
                      </CardBody>
                      <CardFooter
                        profile
                        className={classes.justifyContentCenter}
                      >
                        <Button
                          href="https://softwarrior.co/pam/web"
                          target="_blank"
                          color="primary"
                        ><FormattedMessage id= "Portfolio.button.go" defaultMessage="Go to demo" /></Button>
                      </CardFooter>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={3} md={3}>
                  <Card profile>
                    <CardHeader image>
                        <img src={ecommerceSvg} alt="..." />
                        <div className={classes.cardTitleAbsolute}>
                          Ecommerce
                        </div>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${ecommerceSvg})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody>
                      <Info>
                        <h6 className={classes.cardCategory}>ECOMMERCE</h6>
                      </Info>
                      <p className={classes.cardDescription}>
                        <FormattedMessage id= "Portfolio.ecommerce.description" defaultMessage="Ecommerce Description" />
                      </p>
                    </CardBody>
                    <CardFooter
                      profile
                      className={classes.justifyContentCenter}
                    >
                      <Button
                        href="https://tienda.softwarrior.co"
                        target="_blank"
                        color="primary"
                      ><FormattedMessage id= "Portfolio.button.go" defaultMessage="Go to demo" /></Button>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={3} md={3}>
                  <Card profile>
                      <CardHeader image>
                        <img src={plpSvg} alt="..." />
                        <div className={classes.cardTitleAbsolute}>
                          PlayList Puzzle
                        </div>
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: `url(${plpSvg})`,
                            opacity: "1"
                          }}
                        />
                      </CardHeader>
                      <CardBody>
                        <Info>
                          <h6 className={classes.cardCategory}>PLAYLIST PUZZLE</h6>
                        </Info>
                        <p className={classes.cardDescription}>
                          <FormattedMessage id= "Portfolio.playlistpuzzle.description" defaultMessage="Playlist Puzzle Description" />
                        </p>
                      </CardBody>
                      <CardFooter
                        profile
                        className={classes.justifyContentCenter}
                      >
                        <Button
                          href="https://softwarrior.co/plp/web"
                          target="_blank"
                          color="primary"
                        ><FormattedMessage id= "Portfolio.button.go" defaultMessage="Go to demo" /></Button>
                      </CardFooter>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={3} md={3}>
                  <Card profile>
                      <CardHeader image>
                          <img src={lostPetsImage} alt="..." />
                          <div className={classes.cardTitleAbsolute}>
                            LostPets
                          </div>
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: `url(${lostPetsImage})`,
                            opacity: "1"
                          }}
                        />
                      </CardHeader>
                      <CardBody>
                        <Info>
                          <h6 className={classes.cardCategory}>LOST PETS</h6>
                        </Info>
                        <p className={classes.cardDescription}>
                          <FormattedMessage id= "Portfolio.lostpets.description" defaultMessage="LostPets Description" />
                        </p>
                      </CardBody>
                      <CardFooter
                        profile
                        className={classes.justifyContentCenter}
                      >
                        <Button
                          href="https://softwarrior.co/lostpets/web"
                          target="_blank"
                          color="primary"
                        ><FormattedMessage id= "Portfolio.button.go" defaultMessage="Go to demo" /></Button>
                      </CardFooter>
                    </Card>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
            {/* PROFILE CARDS END */}
        </div>
      </div>
    );
  }
}

SectionCards.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(SectionCards);
