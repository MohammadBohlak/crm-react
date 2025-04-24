import React from "react";
import { LogoutButton, StyledTopSection } from "./topSection.styles";
import ThemeButton from "../../themeButton/ThemeButton";
import { IoIosLogOut } from "react-icons/io";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/slices/userSlice";

function TopSection(props) {
  const dispatch = useDispatch();

  return (
    <>
      <StyledTopSection>
        <ThemeButton />
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
