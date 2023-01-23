import React from "react";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import logo from "../assets/logo-white.svg";
import facebook from "../assets/icon-facebook.svg";
import youtube from "../assets/icon-youtube.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";
import instagram from "../assets/icon-instagram.svg";

export const Footer = () => {
  const redes = [facebook, youtube, twitter, pinterest, instagram];

  const theme = useTheme();

  const laptop = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box
      sx={
        laptop
          ? {
              height: "30vh",
              backgroundColor: "hsl(233, 26%, 24%)",
              display: "flex",
            }
          : { backgroundColor: "hsl(233, 26%, 24%)", padding: "1em" }
      }
    >
      <Box
        sx={
          laptop
            ? {
                padding: "0 10em",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                height: "100%",
              }
            : {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "20px 0px",
              }
        }
      >
        <Box sx={{ width: "150px" }}>
          <img src={logo} />
        </Box>
        <Box
          sx={
            laptop
              ? { display: "flex", alignItems: "center" }
              : { display: "flex", alignItems: "center", margin: "20px 0px" }
          }
        >
          {redes.map((r) => (
            <Box sx={{ width: "20px", margin: "0px 5px" }} key={r}>
              <img src={r} />
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        sx={
          laptop
            ? {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }
            : {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }
        }
      >
        <Typography
          color="primary"
          sx={{ fontWeight: 400, margin: "5px 0px", color: "white" }}
        >
          About Us
        </Typography>
        <Typography
          color="primary"
          sx={{ fontWeight: 400, margin: "5px 0px", color: "white" }}
        >
          Contact
        </Typography>
        <Typography
          color="primary"
          sx={{ fontWeight: 400, margin: "5px 0px", color: "white" }}
        >
          Blog
        </Typography>
      </Box>
      <Box
        sx={
          laptop
            ? {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginLeft: "100px",
              }
            : {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }
        }
      >
        <Typography sx={{ fontWeight: 400, margin: "5px 0px", color: "white" }}>
          Careers
        </Typography>
        <Typography
          color="primary"
          sx={{ fontWeight: 400, margin: "5px 0px", color: "white" }}
        >
          Support
        </Typography>
        <Typography
          color="primary"
          sx={{ fontWeight: 400, margin: "5px 0px", color: "white" }}
        >
          Privacy Policy
        </Typography>
      </Box>
      <Box
        sx={
          laptop
            ? {
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                marginLeft: "250px",
                alignItems: "flex-end",
                height: "70%",
                margin: "auto",
              }
            : {
                margin: "20px 0px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }
        }
      >
        <Button
          sx={{
            background:
              "linear-gradient(90deg, hsla(136, 82%, 72%, 1) 0%, hsl(192, 70%, 51%) 100%)",
            backgroundColor: " hsla(136, 82%, 72%, 1)",
            color: "white",
            padding: "10px 30px",
            borderRadius: "30px",
            fontWeight: 400,
            width: "200px",
          }}
        >
          Request Invite
        </Button>
        <Typography
          color="primary"
          sx={laptop ? { fontSize: "1em" } : { margin: "20px 0px" }}
        >
          Easybank. All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};
