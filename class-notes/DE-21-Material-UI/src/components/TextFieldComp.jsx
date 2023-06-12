import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";

const TextFieldComp = () => {
  let error1 = true;
  return (
    <div>
      <Container>
        <Typography variant="h4" align="center" color="error">
          TEXT-FIELD (INPUT)
        </Typography>
        <Box sx={{ mt: 4 }}>
          <TextField
            margin="normal"
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
            type="email"
            fullWidth
            // fullWidth ile kutucuk sayfa boyunca kapladi
          />
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
            variant="filled"
          />
          {/* defaultta label input outline cizgisinde gelir, varianti=filled diyerek label'i input alanina alabiliriz */}
          <TextField
            margin="normal"
            fullWidth
            error={error1}
            id="password"
            type="password"
            placeholder="password giriniz"
            // label="Error"
            // defaultValue="Hello World"
            helperText={error1 && "yanlis girdiniz"}
          />
          <Button variant="contained" color="error">

            <FormControl variant="standard">
              <InputLabel htmlFor="input-with-icon-adornment">
                With a start adornment
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>
            SUBMIT
          </Button>
        </Box>
      </Container>
    </div>
  );
};
export default TextFieldComp;
