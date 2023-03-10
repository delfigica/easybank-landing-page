import React from "react";
import {
  Avatar,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import api from "../assets/icon-api.svg";
import online from "../assets/icon-online.svg";
import onboarding from "../assets/icon-onboarding.svg";
import budgeting from "../assets/icon-budgeting.svg";

export const Information = () => {
  const benefits = [
    {
      id: 0,
      title: "Online Banking",
      description:
        "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
      image: online,
    },
    {
      id: 1,
      title: "Simple Budgeting",
      description:
        "See exactly where your money goes each month. Receive notifications where you're close to hitting your limits.",
      image: budgeting,
    },
    {
      id: 2,
      title: "Fast Onboarding",
      description:
        "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
      image: onboarding,
    },
    {
      id: 3,
      title: "Open API",
      description:
        "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
      image: api,
    },
  ];

  const theme = useTheme();

  const laptop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      sx={
        laptop
          ? { height: "80vh", background: "hsl(0, 0%, 98%)", padding: "2.5em" }
          : { background: "hsl(0, 0%, 98%)", padding: "20px 0px" }
      }
    >
      <Box
        sx={laptop ? { width: "45%", margin: "20px" } : { textAlign: "center" }}
      >
        <Typography
          sx={
            laptop
              ? { fontSize: "2em", color: "hsl(233, 26%, 24%)" }
              : { fontSize: "2em", color: "hsl(233, 26%, 24%)" , margin: '10px 0px'}
          }
        >
          Why choose Easybank?
        </Typography>
        <Typography color="primary">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </Typography>
      </Box>
      <Box
        sx={
          laptop
            ? { display: "flex" }
            : { display: "flex", flexDirection: "column", alignItems: "center" }
        }
      >
        {benefits.map((b) => (
          <Box
            key={b.id}
            sx={{
              padding: "1em",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar src={b.image} sx={{ width: "70px", height: "70px" }} />
            <Typography
              sx={{
                margin: "20px 0px",
                fontSize: "1.7em",
                color: "hsl(233, 26%, 24%)",
              }}
            >
              {b.title}
            </Typography>
            <Typography
              sx={{ width: "90%", fontWeight: 300, textAlign: "center" }}
              color="primary"
            >
              {b.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
