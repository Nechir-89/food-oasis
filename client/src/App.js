import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { Grid, CssBaseline } from "@material-ui/core";
import theme from "theme/clientTheme";
import {
  tenantId,
  tenantName,
  defaultViewport,
  tenantDetails,
} from "helpers/Configuration";
// import useGeolocation from "hooks/useGeolocation";
// Components
import { ToasterProvider } from "contexts/toaster-context";
import { UserProvider } from "contexts/user-context";
import { OriginCoordinatesContext } from "contexts/origin-coordinates-context";
import Toast from "components/UI/Toast";
import Header from "components/Layout/Header";
import HeaderHome from "components/Layout/HeaderHome";
import WidgetFooter from "components/Layout/WidgetFooter";
import VerificationAdmin from "components/Admin/VerificationAdmin";
import VerificationDashboard from "components/Admin/VerificationDashboard";
import SecurityAdminDashboard from "components/Account/SecurityAdminDashboard/SecurityAdminDashboard";
import OrganizationEdit from "components/Admin/OrganizationEdit";
import ParentOrganizations from "components/Admin/ParentOrganizations";
import TagAdmin from "components/Admin/TagAdmin";
import Donate from "components/StaticPages/Donate";
import About from "components/StaticPages/About";
import Faq from "components/StaticPages/Faq";
import DonateCA from "components/StaticPagesCA/Donate";
import AboutCA from "components/StaticPagesCA/About";
import FaqCA from "components/StaticPagesCA/Faq";
import DonateHI from "components/StaticPagesHI/Donate";
import AboutHI from "components/StaticPagesHI/About";
import FaqHI from "components/StaticPagesHI/Faq";
import DonatePDX from "components/StaticPagesPDX/Donate";
import AboutPDX from "components/StaticPagesPDX/About";
import FaqPDX from "components/StaticPagesPDX/Faq";
import DonateMCK from "components/StaticPagesMCK/Donate";
import AboutMCK from "components/StaticPagesMCK/About";
import FaqMCK from "components/StaticPagesMCK/Faq";
import DonateSB from "components/StaticPagesSB/Donate";
import AboutSB from "components/StaticPagesSB/About";
import FaqSB from "components/StaticPagesSB/Faq";

import Resources from "components/Layout/Resources";
import Register from "components/Account/Register";
import Login from "components/Account/Login";
import ForgotPassword from "components/Account/ForgotPassword";
import ResetPassword from "components/Account/ResetPassword";
import ConfirmEmail from "components/Account/ConfirmEmail";
import FaqEdit from "components/Faq/FaqEdit";
import FaqAdd from "components/Faq/FaqAdd";
import Home from "components/FoodSeeker/Home";
import SearchResults from "components/FoodSeeker/SearchResults";
import Suggestion from "components/FoodSeeker/Suggestion";
import ImportFile from "components/Admin/ImportOrganizations/ImportFile";
import adminTheme from "./theme/adminTheme";
import * as analytics from "../src/services/analytics";
import Suggestions from "components/Admin/Suggestions";
import Logins from "components/Admin/Logins";

const useStyles = makeStyles({
  app: () => ({
    color: "black",
    margin: "0",
    height: "100%",
    //overflowY: "scroll",
  }),
  mainContent: {
    margin: "0",
    paddingBottom: "50px",
    overflowY: "scroll",
    flexGrow: 1,
  },
  organizationEditWrapper: {
    flexBasis: "90%",
    paddingTop: "1em",
    paddingBottom: "1em",
  },
  homeWrapper: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: 'url("/landing-page/map.png")', // replaced the background image style inside useStyles instead of inline styling
    minHeight: "max(100.7vh,20em)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  verificationAdminWrapper: {
    flexBasis: "100%",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  },
});

function App() {
  // origin is where the map should be centered. It is at the App level
  // so it can be passed from landing pages to the SearchResults.
  const [origin, setOrigin] = useState(defaultViewport.center);

  // userCoordinates is the user's location if geolocation is enabled,
  // otherwise null.
  //const userCoordinates = useGeolocation();
  const [userCoordinates, setUserCoordinates] = useState(null);

  const [bgImg, setBgImg] = useState(`url("/landing-page/bg-LA.jpeg")`);

  useEffect(() => {
    switch (tenantId) {
      case 2:
        setBgImg(`url("/landing-page/bg-LA.jpeg")`);
        break;
      case 3:
        setBgImg(`url("/landing-page/bg-HI.jpeg")`);
        break;
      case 5:
        setBgImg(`url("/landing-page/bg-TX.jpeg")`);
        break;
      case 6:
        setBgImg(`url("/landing-page/bg-LA.jpeg")`);
        break;
      default:
        setBgImg(`url("/landing-page/bg-LA.jpeg")`);
        return;
    }
  }, []);

  useEffect(() => {
    analytics.postEvent("visitAppComponent");
  }, []);

  const classes = useStyles();

  return (
    <ToasterProvider>
      <UserProvider>
        <OriginCoordinatesContext.Provider value={origin}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
              <Grid
                container
                direction="column"
                wrap="nowrap"
                alignContent="stretch"
                spacing={0}
                classes={{
                  container: classes.app,
                }}
              >
                <Switch>
                  <Route exact path="/">
                    <HeaderHome />
                  </Route>
                  <Route path="/widget"></Route>
                  <Route>
                    <Header
                      tenantId={tenantId}
                      taglineText={tenantDetails.taglineText}
                    />
                  </Route>
                </Switch>
                <Switch className={classes.mainContent}>
                  <Route exact path="/">
                    <div
                      className={classes.homeWrapper}
                      style={{ backgroundImage: bgImg }}
                    >
                      <Home
                        userCoordinates={userCoordinates}
                        setUserCoordinates={setUserCoordinates}
                        origin={origin}
                        setOrigin={setOrigin}
                        tenantId={tenantId}
                        taglineText={tenantDetails.taglineText}
                      />
                    </div>
                  </Route>
                  {/*
              Following route provides backward-compatibilty for the
              http"//foodoasis.la/search Link that has been published at
              http://publichealth.lacounty.gov/eh/LACFRI/ShareAndDonate.htm
              */}
                  <Redirect from="/search" to="/widget" />
                  <Route path="/widget">
                    <>
                      <SearchResults
                        origin={origin}
                        setOrigin={setOrigin}
                        userCoordinates={userCoordinates}
                        taglineText={tenantDetails.taglineText}
                      />
                      <WidgetFooter tenantId={tenantId} />
                    </>
                  </Route>
                  <Route path="/organizations">
                    <SearchResults
                      origin={origin}
                      setOrigin={setOrigin}
                      userCoordinates={userCoordinates}
                      taglineText={tenantDetails.taglineText}
                    />
                  </Route>
                  <Route path="/suggestion">
                    <Suggestion />
                  </Route>
                  <Route path="/logins">
                    <Logins />
                  </Route>
                  <Route path="/organizationedit/:id?">
                    <ThemeProvider theme={adminTheme}>
                      <div className={classes.organizationEditWrapper}>
                        <OrganizationEdit />
                      </div>
                    </ThemeProvider>
                  </Route>
                  <Route path="/verificationdashboard">
                    <div className={classes.verificationAdminWrapper}>
                      <VerificationDashboard
                        userCoordinates={userCoordinates}
                        origin={origin}
                      />
                    </div>
                  </Route>
                  <Route path="/verificationadmin">
                    <ThemeProvider theme={adminTheme}>
                      <div className={classes.verificationAdminWrapper}>
                        <VerificationAdmin userCoordinates={userCoordinates} />
                      </div>
                    </ThemeProvider>
                  </Route>
                  <Route path="/parentorganizations">
                    <div className={classes.organizationEditWrapper}>
                      <ParentOrganizations />
                    </div>
                  </Route>
                  <Route path="/tags">
                    <div className={classes.organizationEditWrapper}>
                      <TagAdmin />
                    </div>
                  </Route>
                  <Route path="/suggestions">
                    <div className={classes.organizationEditWrapper}>
                      <Suggestions />
                    </div>
                  </Route>
                  <Route path="/logins">
                    <div className={classes.organizationEditWrapper}>
                      <Logins />
                    </div>
                  </Route>
                  <Route path="/securityadmindashboard">
                    <div className={classes.verificationAdminWrapper}>
                      <SecurityAdminDashboard
                        userCoordinates={userCoordinates}
                      />
                    </div>
                  </Route>
                  <Route path="/organizationimport">
                    <ImportFile tenantId={tenantId} tenantName={tenantName} />
                  </Route>
                  <Route path="/faqs/add">
                    <FaqAdd />
                  </Route>
                  <Route path="/faqs/:identifier">
                    <FaqEdit />
                  </Route>
                  <Route path="/resources">
                    <Resources />
                  </Route>
                  <Route path="/register">
                    <Register />
                  </Route>
                  <Route path="/confirm/:token">
                    <ConfirmEmail />
                  </Route>
                  <Route path="/login/:email?">
                    <Login />
                  </Route>
                  <Route path="/forgotpassword/:email?">
                    <ForgotPassword />
                  </Route>
                  <Route path="/resetPassword/:token">
                    <ResetPassword />
                  </Route>
                  <Route path="/donate">
                    {tenantId === 6 ? (
                      <DonateSB />
                    ) : tenantId === 5 ? (
                      <DonateMCK />
                    ) : tenantId === 4 ? (
                      <DonatePDX />
                    ) : tenantId === 3 ? (
                      <DonateHI />
                    ) : tenantId === 2 ? (
                      <DonateCA />
                    ) : (
                      <Donate />
                    )}
                  </Route>
                  <Route path="/about">
                    {tenantId === 6 ? (
                      <AboutSB />
                    ) : tenantId === 5 ? (
                      <AboutMCK />
                    ) : tenantId === 4 ? (
                      <AboutPDX />
                    ) : tenantId === 3 ? (
                      <AboutHI />
                    ) : tenantId === 2 ? (
                      <AboutCA />
                    ) : (
                      <About />
                    )}
                  </Route>
                  <Route exact path="/faqs">
                    {tenantId === 6 ? (
                      <FaqSB />
                    ) : tenantId === 5 ? (
                      <FaqMCK />
                    ) : tenantId === 4 ? (
                      <FaqPDX />
                    ) : tenantId === 3 ? (
                      <FaqHI />
                    ) : tenantId === 2 ? (
                      <FaqCA />
                    ) : (
                      <Faq />
                    )}
                  </Route>
                </Switch>
                <Toast />
              </Grid>
            </Router>
          </ThemeProvider>
        </OriginCoordinatesContext.Provider>
      </UserProvider>
    </ToasterProvider>
  );
}

export default App;
