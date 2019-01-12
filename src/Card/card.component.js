import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  img: {
    width: "100%"
  },
  card: {
    maxWidth: 400,
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },

  cardMedia: {
    // paddingTop: "136%" // 16:9
  },
  empty: {
    background:
      "url('https://starwars-visualguide.com/assets/img/placeholder.png')"
  },
  cardContent: {
    flexGrow: 1
  }
});

class SWCard extends Component {
  toggleFavorite = e => {
    e.preventDefault();
    console.log("e", e);
    console.log("item", e.target);
  };

  render() {
    const { name, url, classes, category } = this.props;
    const [id] = url.split("/").slice(-2);
    const imagePath = `https://starwars-visualguide.com/assets/img/${category ||
      "characters"}/${id}.jpg`;
    // const placeHolder =
    //   "https://starwars-visualguide.com/assets/img/placeholder.png";
    const faveData = { name, url, imagePath };

    return (
      <Grid item sm={4} md={4} lg={2}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            src={imagePath}
            component="img"
            alt="image not available"
          />

          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              View
            </Button>
            <button
              data={JSON.stringify(faveData)}
              size="small"
              color="primary"
              onClick={this.toggleFavorite}
              className={classes.Button}
            >
              Edit
            </button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

SWCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SWCard);
