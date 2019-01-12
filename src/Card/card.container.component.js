import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Grid from "@material-ui/core/Grid";

import StarWarsCard from "./card.component";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    margin: "20px !important",
    backgroundColor: theme.palette.background.paper
  }
});

function CardContainer({ classes, data, category }) {
  return (
    <div className={classNames(classes.layout, classes.cardGrid)}>
      <Grid container spacing={40} style={{ padding: "3%" }}>
        {data.map(({ url, name }) => (
          <StarWarsCard key={url} url={url} name={name} category={category} />
        ))}
      </Grid>
    </div>
  );
}

CardContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardContainer);
