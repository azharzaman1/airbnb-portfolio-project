import { Container } from "@mui/material";
import { styled } from "@mui/system";

export const MuiContainer = styled(Container)(({ theme }) => ({
  padding: `0 8px 0`,
  [theme.breakpoints.up("xs")]: {
    padding: `0 ${theme.spacing(2)} 0`,
  },
  [theme.breakpoints.up("lg")]: {
    padding: `0 ${theme.spacing(9)} 0`,
  },
}));

export const MuiContainerNarrowPadded = styled(Container)(({ theme }) => ({
  padding: `0 8px 0`,
  [theme.breakpoints.up("xs")]: {
    padding: `0 ${theme.spacing(2)} 0`,
  },

  [theme.breakpoints.up("md")]: {
    padding: `0 ${theme.spacing(1)} 0`,
  },
}));
