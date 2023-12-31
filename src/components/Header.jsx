import React from "react";
import {
  AppBar,
  Container,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "./CryptoContext";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    fontWeight: "bolder",
    cursor: "pointer",
    color: "gold",
  },
}));

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const { currency, setCurrency } = CryptoState();
  console.log(currency);

  const handleTitleClick = () => {
    navigate("/"); // Navigate to thcde home page
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppBar color="transparent" position="static">
          <Container>
            <Toolbar>
              <Typography
                onClick={handleTitleClick}
                className={classes.title}
                variant="h4"
              >
                CRYPTO CATCHER
              </Typography>

              <Select
                style={{
                  width: 100,
                  height: 40,
                  marginRight: 15,
                  color: "white",
                }}
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>
              </Select>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};

export default Header;
