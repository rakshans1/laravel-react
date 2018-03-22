import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';


const styles = theme => ({
  grid: {
    padding: theme.spacing.unit,
  },
  card: {
    width: 280,
  },
  media: {
    height: 200,
  },
});


class Products extends Component {
  constructor() {
    super()
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
      <Grid container justify="space-around" spacing={8} className={classes.grid}>
      {this.props.products.map((product) =>
        <Grid key={product.id} item>
          <Card  className={classes.card}>
          <CardMedia className={classes.media}
            image={product.featured_image}
            title={product.title}
          />
          <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
          {product.title}
          </Typography>
          <Typography component="p">
              {product.description}
            </Typography>
          </CardContent>
          </Card>
        </Grid>
      )}
      </Grid>
      </div>
    )
  };
}


Products.propTypes = {
  products: PropTypes.array.isRequired,
};

export default withStyles(styles)(Products);