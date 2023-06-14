import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { kullaniciSil } from "../features/yetkiSlice";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useSelector((state) => state.yetkiSlice.email);
  const handleLogout = () => {
    //  ben sayfaya kendi bilgilerimle girdiğimde, biri gelip bu siteye girerse benim bilgilerimle girer, bu yüzden logout yaptığımda bilgilerim silinsin
    dispatch(kullaniciSil());
    navigate("/login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
          >
            Clarusway News
          </Typography>
          {email === "osman" ? (
            <Button color="inherit" onClick={handleLogout}>
              LogOut
            </Button>
          ) : (
            <Button color="inherit">LogIn</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
