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
import { IntlProvider } from "react-intl";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";

import { FormattedMessage } from "react-intl";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";

import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.jsx";

import messages from "translations/messages";
import AboutUsPage from "views/AboutUsPage/AboutUsPage";
import ContactUsPage from "views/ContactUsPage/ContactUsPage";

class PresentationPage extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    console.log(localStorage.getItem("lang"))
    if (localStorage.getItem("lang")===null) {
      localStorage.setItem("lang", "en");
      this.state = {
        lang : "en"
      }
    } else {
      this.state = {
        lang : localStorage.getItem("lang")
    };
    }
  }   
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  changeLanguage = (lang) => {
    localStorage.setItem("lang", lang);
    this.setState({
      lang: lang
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <IntlProvider 
        locale={this.state.lang} 
        messages= {messages[this.state.lang]}>
        <div>
          <Header
            brand="Softwarrior"
            links={<HeaderLinks dropdownHoverColor="info" changeLanguage = {this.changeLanguage} />}
            fixed
            color="transparent"
            changeColorOnScroll={{
              height: 400,
              color: "info"
            }}
          />
          <Parallax
            image={require("assets/img/landing-page2.jpg")}
            className={classes.parallax}
          >
            <div className={classes.container}>
              <GridContainer>
                <GridItem>
                  <div className={classes.brand}>
                    <h1>
                      Softwarrior
                    </h1>
                    <h3 className={classes.title}>
                    <FormattedMessage id= "Landing.presentation" defaultMessage="A Freelancer that makes your life easy" />
                    </h3>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
          </Parallax>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <AboutUsPage />
            <ContactUsPage />
          </div>
          <Footer
            theme="white"
            content={
              <div>
                <div className={classes.left}>
                  <a
                    href="https://softwarrior.co"
                    target="_blank"
                    className={classes.footerBrand}
                  >
                    Softwarrior
                  </a>
                </div>
                
                <div className={classes.rightLinks}>
                  <ul>
                    <li>
                      <Button
                        href="https://www.facebook.com/warrior0986/"
                        target="_blank"
                        color="facebook"
                        justIcon
                        simple
                      >
                        <i className="fab fa-facebook" />
                      </Button>
                    </li>
                    <li>
                      <Button
                        href="https://www.linkedin.com/in/diego-alejandro-guerrero-valencia"
                        target="_blank"
                        color="linkedin"
                        justIcon
                        simple
                      >
                        <i className="fab fa-linkedin" />
                      </Button>
                    </li>
                    <li>
                      <Button
                        href="https://github.com/warrior0986"
                        target="_blank"
                        color="github"
                        justIcon
                        simple
                      >
                        <i className="fab fa-github" />
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            }
          />
        </div>
      </IntlProvider>
    );
  }
}

PresentationPage.propTypes = {
  classes: PropTypes.object,
  lang: PropTypes.string
};

export default withStyles(presentationStyle)(PresentationPage);
