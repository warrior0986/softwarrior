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
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

import { FormattedMessage, injectIntl  } from "react-intl";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import Email from "@material-ui/icons/Email";
import Warning from "@material-ui/icons/Warning";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";

import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.jsx";

const CustomSkinMap = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 6.250413, lng: -75.589143}}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true,
        styles: [
          {
            featureType: "water",
            stylers: [
              { saturation: 43 },
              { lightness: -11 },
              { hue: "#0088ff" }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
              { hue: "#ff0000" },
              { saturation: -100 },
              { lightness: 99 }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#808080" }, { lightness: 54 }]
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{ color: "#ece2d9" }]
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#ccdca1" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#767676" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ffffff" }]
          },
          { featureType: "poi", stylers: [{ visibility: "off" }] },
          {
            featureType: "landscape.natural",
            elementType: "geometry.fill",
            stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
          },
          { featureType: "poi.park", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.sports_complex",
            stylers: [{ visibility: "on" }]
          },
          { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.business",
            stylers: [{ visibility: "simplified" }]
          }
        ]
      }}
    >
      <Marker position={{ lat: 6.250413, lng: -75.589143}} />
    </GoogleMap>
  ))
);

const injectGetMessage = (fn) => 
  React.createElement(injectIntl(({ intl }) => fn(intl.formatMessage)));

class ContactUsPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  getMessages(key) {
    console.log(intl.injectGetMessage({id: key}));
  }
  render() {
    const { classes } = this.props;
    return (
      <div id="contact">
        <div className={classes.bigMap}>
          <CustomSkinMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC6Qe42Y5JGSOaPC5YzlUHgzvr1WsfVxuk"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
              <div
                style={{
                  height: `100%`,
                  borderRadius: "6px",
                  overflow: "hidden"
                }}
              />
            }
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.contactContent}>
            <div className={classes.container}>
              <h2 className={classes.title}><FormattedMessage id= "ContactMe.title" defaultMessage="Send us a message" /></h2>
              <GridContainer>
                <GridItem md={6} sm={6}>
                  <p>
                  <FormattedMessage id= "ContactMe.description" defaultMessage="You can contact us with anything related to our Products. We will get in touch with you as soon as possible." /> 
                    <br />
                    <br />
                  </p>
                  <form>
                    <CustomInput
                      labelText={<FormattedMessage id= "ContactMe.form.name" defaultMessage="Your Name" />}
                      id="float"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                    <CustomInput
                      labelText={<FormattedMessage id= "ContactMe.form.email" defaultMessage="Email address" />}
                      id="float"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                    <CustomInput
                      labelText={<FormattedMessage id= "ContactMe.form.phone" defaultMessage="Phone" />}
                      id="float"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                    <CustomInput
                      labelText={<FormattedMessage id= "ContactMe.form.message" defaultMessage="Your Message" />}
                      id="float"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 6
                      }}
                    />
                    <div className={classes.textCenter}>
                      <Button color="primary" round disabled>
                      <FormattedMessage id= "ContactMe.button" defaultMessage="Contact Me" />
                      </Button>
                      <SnackbarContent
                        message={
                          <span>
                            <b><FormattedMessage id= "ContactMe.warning.title" defaultMessage="WARNING ALERT" /></b>
                            <FormattedMessage id= "ContactMe.warning.message" defaultMessage="This site is currently under construction, so mail delivery is not yet developed, however, you can send me an email to those described in the next section" />
                          </span>
                        }
                        color="warning"
                        icon={Warning}
                      />
                    </div>
                  </form>
                </GridItem>
                <GridItem md={4} sm={4} className={classes.mlAuto}>
                  <InfoArea
                    className={classes.info}
                    title="Office"
                    description={
                      <p>
                        Calle 45 D #72-75 <br /> Florida Nueva
                        <br /> Medellín
                      </p>
                    }
                    icon={PinDrop}
                    iconColor="primary"
                  />
                  <InfoArea
                    className={classes.info}
                    title="Call"
                    description={
                      <p>
                        Diego Guerrero <br /> +57 301 767 97 85 <br /> Mon - Fri,
                        8:00-22:00
                      </p>
                    }
                    icon={Phone}
                    iconColor="primary"
                  />
                  <InfoArea
                    className={classes.info}
                    title="Email"
                    description={
                      <p>
                        diegoguerrero@gmail.com <br /> administrador@softwarrior.co
                      </p>
                    }
                    icon={Email}
                    iconColor="primary"
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ContactUsPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(contactUsStyle)(ContactUsPage);
