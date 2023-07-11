import { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import {  useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Blog = () => {
  const apiKey = "87cd1114d2a6488c86a31ea3b3728107";

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=tesla&from=2023-06-11&sortBy=publishedAt&apiKey=${apiKey}`
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <div>
      <h1 style={{ marginLeft: "100px" }}>Trending News</h1>
      {data.articles &&
        data.articles.map((article) => (
          <Card
            key={article.source.name}
            sx={{
              maxWidth: 745,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginBottom: "20px",
              flexWrap: "wrap",
              marginLeft: isDesktop ? '300px' : { sm: '100px' },
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="290"
                image={article.urlToImage}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {article.content}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href={article.url}
                target="_blank"
              >
                View More
              </Button>
            </CardActions>
          </Card>
        ))}
    </div>
  );
};

export default Blog;
