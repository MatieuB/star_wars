import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { pick } from "lodash";

import StarWarsCrawl from "./Crawl/crawl.component";
import CardContainer from "./Card/card.container.component";
import Nav from "./navigation.component";

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  scroll: {
    backgroundColor: "black",
    overflow: "hidden",
    minHeight: "50vh",
    maxHeight: "50vh",
    color: "gold"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  }
});

function Album(props) {
  const {
    classes,
    filmData,
    data,
    category,
    loading,
    setCategory,
    changePage
  } = props;

  return (
    <>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap />
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.scroll}>
          <StarWarsCrawl
            {...pick(filmData, ["opening_crawl", "episode_id", "title"])}
          />
        </div>
        <Nav
          setCategory={setCategory}
          changePage={changePage}
          previous={data.previous}
          category={category}
        />
        <CardContainer
          style={{ padding: "3%" }}
          data={data.results}
          category={category}
          loading={loading}
        />
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </footer>
      {/* End footer */}
    </>
  );
}

Album.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Album);
