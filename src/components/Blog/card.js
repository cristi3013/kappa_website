import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxwidth: 345,
      background: "#232323",
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
    header: {
      color: "white",
    },
  })
);

const RecipeReviewCard = ({ post }) => {
  const classes = useStyles();

  const tagToText = (node) => {
    let tag = document.createElement("div");
    tag.innerHTML = node;
    node = tag.innerText;
    return node;
  };

  const shortenText = (text, startingPoint, maxLength) => {
    return text.length > maxLength
      ? text.slice(startingPoint, maxLength)
      : text;
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title={post.title}
        subheader={post.pubDate}
      />
      <CardMedia className={classes.media} image={post.thumbnail} />
      <CardContent>
        <Typography variant="body2" color="black" component="p">
          {shortenText(tagToText(post.content), 0, 200) + "..."}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RecipeReviewCard;

// const CardComponent = ({ post }) => {
//   const tagToText = (node) => {
//     let tag = document.createElement("div");
//     tag.innerHTML = node;
//     node = tag.innerText;
//     return node;
//   };

//   const shortenText = (text, startingPoint, maxLength) => {
//     return text.length > maxLength
//       ? text.slice(startingPoint, maxLength)
//       : text;
//   };

//   return (
//     <Card cover={<img alt="example" src={post.thumbnail} />}>
//       <Meta
//         avatar={
//           <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
//         }
//         title={post.title}
//         description={
//           "..." + shortenText(tagToText(post.content), 60, 200) + "..."
//         }
//       />
//     </Card>
//   );
// };

// export default CardComponent;
