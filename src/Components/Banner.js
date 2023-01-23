import React from "react";
import { Box } from "@mui/system";
import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import desktop from "../assets/bg-intro-desktop.svg";
import mobiles from "../assets/image-mockups.png";
export const Banner = () => {
  const theme = useTheme();

  const laptop = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box
      sx={
        laptop
          ? {
              backgroundImage: `url(${desktop})`,
              height: "80vh",
              width: "100%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "900px",
              backgroundPositionX: "730px",
              backgroundPositionY: "-200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }
          : {
              display: "flex",
              flexDirection: "column-reverse",
              backgroundImage: `url(${desktop})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "550px",
              backgroundPositionX: "-100px",
              backgroundPositionY: "-150px",
            }
      }
    >
      <Box
        sx={
          laptop
            ? {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "70%",
                width: "30%",
                margin: "0px 150px",
              }
            : {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "20px",
                padding: '.8em'
              }
        }
      >
        <Typography
          sx={
            laptop
              ? {
                  fontSize: "3em",
                  color: "hsl(233, 26%, 24%)",
                  lineHeight: "55px",
                }
              : {
                  color: "hsl(233, 26%, 24%)",
                  textAlign: "center",
                  fontSize: "2em",
                }
          }
        >
          Next generation digital banking
        </Typography>
        <Typography
          sx={
            laptop
              ? { margin: "30px 0px", fontWeight: 400, fontSize: "1.2Fem" }
              : {
                  margin: "20px 0px",
                  fontWeight: 400,
                  fontSize: ".8em",
                  textAlign: "center",
                }
          }
          color="primary"
        >
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for speanding, saving, budgeting, investing, and much
          more.
        </Typography>
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
      </Box>
      <Box
        sx={
          laptop
            ? {
                height: "530px",
                width: "650px",
                backgroundImage: `url(${mobiles})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "550px",
                backgroundPositionX: "200px",
                backgroundPositionY: "-120px",
              }
            : {
                backgroundImage: `url(${mobiles})`,
                backgroundRepeat: "no-repeat",
                height: "290px",
                width: "330px",
                backgroundSize: "300px",
                backgroundPositionX: "10px",
                backgroundPositionY: "-100px",
              }
        }
      ></Box>
    </Box>
  );
};
