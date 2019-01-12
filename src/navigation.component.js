import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  active: {
    borderBottom: "2px solid red"
  },
  input: {
    display: "none"
  }
});

function ContainedButtons({
  classes,
  setCategory,
  changePage,
  previous,
  category
}) {
  const categories = ["characters", "planets", "starships"];
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => changePage(true)}
      >
        Next
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        disabled={!previous}
        onClick={() => changePage(false)}
      >
        Previous
      </Button>
      {categories.map(c => {
        return (
          <Button
            key={c}
            variant="contained"
            className={classnames(classes.button, {
              [classes.active]: c === category
            })}
            onClick={() => setCategory(c)}
          >
            {c}
          </Button>
        );
      })}
    </div>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContainedButtons);
