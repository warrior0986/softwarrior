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
/* eslint-disable */
import React, { useState } from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import AccountBalance from "@material-ui/icons/AccountBalance";
import LocationOn from "@material-ui/icons/LocationOn";
import Store from "@material-ui/icons/Store";
import Language from "@material-ui/icons/Language";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx";

// images 
import GBFlag from "assets/img/flags/GB.png";
import SPFlag from "assets/img/flags/ES.png";

function HeaderLinks({ ...props }) {

  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function() {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
  var onClickSections = {};

  const { classes, dropdownHoverColor, changeLanguage } = props;
  return (
    <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <Button
          href="/#about"
          color='transparent'
          className={classes.navLink}
        >
          <AccountBalance/><FormattedMessage id= "NavBar.about" defaultMessage="About Us" />
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/#portfolio"
          color='transparent'
          className={classes.navLink}
        >
          <Store/><FormattedMessage id= "NavBar.portfolio" defaultMessage="Portfolio" />
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/#contact"
          color='transparent'
          className={classes.navLink}
        >
          <LocationOn/><FormattedMessage id= "NavBar.contact" defaultMessage="Contact Us" />
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText={<FormattedMessage id= "Language.button" defaultMessage="Language" />}
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Language}
          dropdownList={[
            <Link to="/" id="EnglishLang" className={classes.dropdownLink} onClick= {() => changeLanguage("en")} >
              <img src = {GBFlag} /><FormattedMessage id= "Language.english" defaultMessage="English" />
            </Link>,
            <Link to="/" id="SpanishLang" className={classes.dropdownLink} onClick= {() => changeLanguage("es")}>
              <img src = {SPFlag} /><FormattedMessage id= "Language.spanish" defaultMessage="Spanish" />
            </Link>
          ]}
        />
      </ListItem>
    </List>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary"
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ]),
  changeLanguage: PropTypes.func
};

export default withStyles(headerLinksStyle)(HeaderLinks);
