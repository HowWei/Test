import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 450,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Container>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            User 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           abcdefghijklmnopqrstuvwxyz
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Container>
  );
}