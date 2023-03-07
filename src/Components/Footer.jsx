import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <footer>
      <AlternateEmailIcon />
      <Box className="container">
        <LocalPhoneIcon />
        <span>(XX)XXXX-XXXX</span>
      </Box>
    </footer>
  );
};

export default Footer;
