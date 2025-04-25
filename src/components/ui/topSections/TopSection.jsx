import React from "react";
import { LogoutButton, StyledTopSection } from "./topSection.styles";
// import ThemeButton from "../../themeButton/ThemeButton";
import { IoIosLogOut } from "react-icons/io";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/slices/userSlice";
import ThemeSwitcher from "../../ThemeSwitcher";

function TopSection(props) {
  const dispatch = useDispatch();
// ThemeSwitcher 
  return (
    <>
      <StyledTopSection>
        {/* <ThemeButton /> */}
        <ThemeSwitcher/> 
        <LogoutButton
          onClick={() => {
            dispatch(logout());
          }}
        >
          <span>Logout</span>
          <IoIosLogOut />
        </LogoutButton>
      </StyledTopSection>

    </>
  );
}

export default TopSection;
