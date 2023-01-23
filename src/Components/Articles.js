import React from "react";
import currency from "../assets/image-currency.jpg";
import restaurant from "../assets/image-restaurant.jpg";
import plane from "../assets/image-plane.jpg";
import confetti from "../assets/image-confetti.jpg";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export const Articles = () => {
  const articles = [
    {
      id: 0,
      author: "Claire Robinson",
      title: "Receive money in any currency with no fees",
      image: currency,
      description:
        "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...",
    },
    {
      id: 1,
      author: "Wilson Hutton",
      title: "Treat yourself without worrying about money",
      image: restaurant,
      description:
        "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...",
    },
    {
      id: 2,
      author: "Wilson Hutton",
      title: "Take your Easybank card wherever you go",
      image: plane,
      description:
        "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ...",
    },
    {
      id: 3,
      author: "Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      image: confetti,
      description:
        "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...",
    },
  ];

  const theme = useTheme();

  const laptop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      sx={laptop ? { height: "80vh", padding: "1em", margin: "10px 50px" } : {}}
    >
      <Typography
        sx={
          laptop
            ? {
                color: "hsl(233, 26%, 24%)",
                fontSize: "2em",
                marginLeft: "10px",
              }
            : {
                textAlign: "center",
                color: "hsl(233, 26%, 24%)",
                fontSize: "2em",
                marginLeft: "10px",
              }
        }
      >
        Latest Articles
      </Typography>
      <Box sx={laptop ? { display: "flex" } : {}}>
        {articles.map((art) => (
          <Box
            key={art.id}
            sx={
              laptop
                ? { padding: ".7em" }
                : {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "30px 0px",
                  }
            }
          >
            <Box
              sx={{
                width: "270px",
                height: "230px",
                background: `url(${art.image})`,
                objectFit: "contain",
                backgroundSize: "350px",
                backgroundRepeat: "no-repeat",
              }}
            ></Box>
            <Box sx={{ padding: ".5em", width: "80%" }}>
              <Typography color="primary" sx={{ fontSize: ".8em" }}>
                By {art.author}
              </Typography>
              <Typography
                sx={{
                  color: "hsl(233, 26%, 24%)",
                  fontWeight: 400,
                  fontSize: "1.2em",
                  margin: "5px 0px",
                }}
              >
                {art.title}
              </Typography>
              <Typography sx={{ fontSize: ".8em" }} color="primary">
                {art.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
