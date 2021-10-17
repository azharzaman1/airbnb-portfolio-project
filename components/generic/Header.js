import { Container, Grid, useMediaQuery } from "@mui/material";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import { ThemeButton } from "./Components";
import { MuiContainer } from "../../files/StyledMui";

const Header = () => {
  const above660px = useMediaQuery("(min-width:660px)");
  const above465px = useMediaQuery("(min-width:465px)");
  return (
    <header className="header sticky top-0 z-50 bg-white shadow-md py-4">
      <MuiContainer maxWidth="xl">
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid
            item
            md={above465px ? 4 : 3}
            className="relative flex items-center cursor-pointer h-10 my-auto bg-orange-500"
          >
            <img src="https://links.papareact.com/qd3" width="100px" />
          </Grid>
          <Grid item md={above465px ? 4 : 8}>
            <div className="flex items-center md:border-2 py-2 rounded-full transition-shadow duration-100 md:shadow-sm hover:shadow-md">
              <input
                type="text"
                placeholder="Start your search"
                className="pl-5 bg-transparent outline-none flex-grow text-gray-700 placeholder-gray-400"
              />
              <SearchIcon className="hidden md:inline-flex text-white bg-red-400 rounded-full p-2 h-8 cursor-pointer md:mx-2" />
            </div>
          </Grid>
          <Grid item md={4}>
            <Grid
              container
              alignItems="center"
              justifyContent="flex-end"
              spacing={1}
            >
              {above660px && (
                <>
                  <Grid item>
                    <ThemeButton type="tertiary">Become a Host</ThemeButton>
                  </Grid>
                  <Grid item>
                    <div className="bg-transparent p-2 hover:bg-gray-200 rounded-full">
                      <GlobeAltIcon className="icon h-6" />
                    </div>
                  </Grid>
                </>
              )}
              {above465px && (
                <Grid item>
                  <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer hover:shadow-sm transition-shadow duration-100">
                    <MenuIcon className="icon h-6" />
                    <UserCircleIcon className="icon h-6" />
                  </div>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </MuiContainer>
    </header>
  );
};

export default Header;
