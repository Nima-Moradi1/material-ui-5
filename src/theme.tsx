
//this is how to create a theme in MUI 5
//you can use this theme in your components by wrapping your app with ThemeProvider
//and passing the theme as a prop
//you can also use this theme in your components by using the useTheme hook

import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette:{
    primary:{
      main: "#1760a5",
      light: "skyblue"
    },
    secondary:{
      main: '#15c630',
    }
  }
})