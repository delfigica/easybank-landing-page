import React from "react";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import desktop from "../assets/bg-intro-desktop.svg";
import mobiles from "../assets/image-mockups.png";
export const Banner = () => {
  return (
    <Box
      sx={{
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
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "70%",
          width: "30%",
          margin: "0px 150px",
        }}
      >
        <Typography
          sx={{
            fontSize: "3em",
            color: "hsl(233, 26%, 24%)",
            lineHeight: "55px",
          }}
        >
          Next generation digital banking
        </Typography>
        <Typography
          sx={{ margin: "30px 0px", fontWeight: 400, fontSize: "1.2Fem" }}
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
        sx={{
          height: "530px",
          width: "650px",
          backgroundImage: `url(${mobiles})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "550px",
          backgroundPositionX: "200px",
          backgroundPositionY: "-120px",
        }}
      ></Box>
    </Box>
  );
};
