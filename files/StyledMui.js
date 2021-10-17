import { Container } from "@mui/material";
import { styled } from "@mui/system";

export const MuiContainer = styled(Container)(({ theme }) => ({
  paddingLeft: `0 ${theme.spacing(1)} 0`,
  [theme.breakpoints.up("xs")]: {
    padding: `0 ${theme.spacing(4)} 0`,
  },
  [theme.breakpoints.up("lg")]: {
    padding: `0 ${theme.spacing(9)} 0`,
  },
}));
