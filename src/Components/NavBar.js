import React from "react";
import { Box, Button, Typography } from "@mui/material";
import logo from "../assets/logo.svg";

export const NavBar = () => {
  const links = ["Home", "About", "Contact", "Blog", "Careers"];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "1em 0",
        justifyContent: "space-evenly",
      }}
    >
      <Box sx={{ width: "200px" }}>
        <img src={logo} />
      </Box>
      <Box
        sx={{ display: "flex", width: "30%", justifyContent: "space-between" }}
      >
        {links.map((link) => (
          <Typography color="primary" key={link}>
            {link}
          </Typography>
        ))}
      </Box>
      <Button
        sx={{
          background:
            "linear-gradient(90deg, hsla(136, 82%, 72%, 1) 0%, hsl(192, 70%, 51%) 100%)",
          backgroundColor: " hsla(136, 82%, 72%, 1)",
          color: 'white',
          padding: '10px 30px',
          borderRadius: '30px',
          fontWeight: 400
        }}
      >
        Request Invite
      </Button>
    </Box>
  );
};