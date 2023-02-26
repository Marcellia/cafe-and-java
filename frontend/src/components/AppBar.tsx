import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TerminalIcon from "@mui/icons-material/Terminal";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import coffee from "../Assets/CoffeeCup.png"
import styled from "styled-components";

const Logo = styled.img`
height:4em;
width:4em;
padding: 1em;

`

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" style={{
                background: "#BC8F8F", opacity: "0.95", color: 'black', zIndex: 1251, height: '12%'
            }} >
                <Toolbar style={{ paddingTop: '1.5%' }} >
                    <Logo src={coffee} alt="Logo" />
                    <Typography
                        variant="h3"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            fontStyle: "oblique",
                            letterSpacing: 2,
                            fontFamily: "Brush Script MT, cursive",
                        }}
                    >
                        Cafe & Java
                    </Typography>
                    <Button color="inherit" sx={{ fontSize: '1.3em' }}>Menu</Button>
                    <Button color="inherit" sx={{ fontSize: '1.3em' }} >About</Button>
                    <Button color="inherit" sx={{ fontSize: '1.3em' }} >Art Gallery</Button>
                    <Button color="inherit" sx={{ fontSize: '1.3em' }} >Donate</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
