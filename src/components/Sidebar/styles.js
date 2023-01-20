import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  imageLink: {
    display: "flex",
    justifyContent: "center",
    padding: "10% 0",
    textDecoration: "none",
  },
  image: {
    width: "70%",
  },
  links: {
    color: theme.palette.text.primary,
    textDecoration: "none",
  },
  genreImages: {
    filter: theme.palette.mode === "dark" ? "invert(1)" : "dark",
  },
  bigText: {
    color: "primary",
    fontSize: 30,
  },
  tittle: {
    textDecoration: "none",
    textAlign: "center",
    color: theme.palette.mode === "dark" ? "red" : "#2196f3",
    fontWeight: "bolder",
  },
}));
