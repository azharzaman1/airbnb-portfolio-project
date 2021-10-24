import { Grid, useMediaQuery } from "@mui/material";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import { MuiContainer } from "../../files/StyledMui";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import SearchCalender from "./_Header_SearchCalender";
import { useLocalStorage } from "react-use";
import useWindowScroll from "../../Hooks/useWindowScroll";

const Header = ({ placeholder, transparentEffect = false }) => {
  const [input, setInput] = useState("");
  const above660px = useMediaQuery("(min-width:660px)");
  const above465px = useMediaQuery("(min-width:465px)");
  const [inputLS, setInputLS, removeInputLS] = useLocalStorage(
    "searchQuery",
    ""
  );
  const isScrolled = useWindowScroll(25);

  const transparentHeader = transparentEffect && !isScrolled ? true : false;

  const router = useRouter();

  return (
    <header
      className={`header fixed left-0 top-0 w-full z-40 py-4 transition duration-200 ${
        transparentHeader ? "bg-transparent" : "bg-white shadow-md"
      }`}
    >
      <MuiContainer maxWidth="xl">
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid
            item
            md={above465px ? 4 : 3}
            className="relative flex items-center cursor-pointer h-10 my-auto bg-orange-500"
          >
            <img
              src="https://links.papareact.com/qd3"
              width="100px"
              onClick={() => router.push("/")}
            />
          </Grid>
          <Grid item md={above465px ? 4 : 8}>
            <div className="flex items-center md:border-2 py-2 rounded-full transition-shadow duration-100 md:shadow-sm hover:shadow-md bg-white">
              <input
                type="text"
                value={input}
                placeholder={placeholder || "Start your search"}
                onChange={(e) => {
                  setInput(e.target.value);
                  setInputLS(e.target.value);
                }}
                className={`pl-5 bg-transparent outline-none flex-grow placeholder-gray-600 text-gray-700`}
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
                    <button
                      className={`${
                        transparentHeader
                          ? "text-button-variant-2"
                          : "text-button"
                      }`}
                    >
                      Become a Host
                    </button>
                  </Grid>
                  <Grid item>
                    <button
                      className={`${
                        transparentHeader
                          ? "icon-button-variant-2"
                          : "icon-button"
                      }`}
                    >
                      <GlobeAltIcon
                        className={`icon h-6  active:scale-95 ${
                          transparentHeader ? "text-gray-200" : "text-gray-700"
                        }`}
                      />
                    </button>
                  </Grid>
                </>
              )}
              {above465px && (
                <Grid item>
                  <div
                    className={`flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer hover:shadow-sm transition-shadow duration-100 bg-gray-200`}
                  >
                    <MenuIcon className={`icon h-6 text-gray-700`} />
                    <UserCircleIcon className={`icon h-6 text-gray-700`} />
                  </div>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
        {input && <SearchCalender searchQuery={input} />}
      </MuiContainer>
    </header>
  );
};

export default Header;
