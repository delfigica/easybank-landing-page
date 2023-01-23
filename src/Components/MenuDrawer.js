import React, { useState } from "react";
import { Box, Dialog, Typography } from "@mui/material";
import menu from "../assets/icon-hamburger.svg";
import close from "../assets/icon-close.svg";

export const MenuDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const links = ["Home", "About", "Contact", "Blog", "Careers"];
  return (
    <Box>
      <Box onClick={() => setOpenDrawer((prev) => !prev)}>
        {openDrawer ? <img src={close} /> : <img src={menu} />}
      </Box>
      <Dialog open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Box
          sx={{
            padding: "2em",
            width: "240px",
            height: "250px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {links.map((link) => (
            <Typography
              key={link}
              sx={{
                color: "hsl(233, 26%, 24%)",
                fontWeight: 400,
                fontSize: "1.2em",
                textAlign: "center",
              }}
            >
              {link}
            </Typography>
          ))}
        </Box>
      </Dialog>
    </Box>
  );
};
