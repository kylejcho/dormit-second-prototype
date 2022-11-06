import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { bottomNavStyles } from "./muiStyles.js";

/*
 * Material-UI Imports
 */
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

/*
 * Material-UI Icons
 */

function BottomNav() {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(`/${newValue}`);
  };

  return (
    <BottomNavigation
      sx={bottomNavStyles.bottomNav}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        value=""
        icon={
          <svg
            width="24"
            height="23"
            viewBox="0 0 24 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.6889 11.8726L12.8901 0.364239C12.4354 -0.121413 11.5619 -0.121413 11.1071 0.364239L0.308346 11.8726C0.152911 12.0378 0.0508845 12.2428 0.014672 12.4627C-0.0215404 12.6825 0.00962142 12.9077 0.104369 13.1109C0.296347 13.5263 0.725899 13.7933 1.19985 13.7933H3.09958C3.37572 13.7933 3.59958 14.0172 3.59958 14.2933V21.8492C3.59958 22.1544 3.72599 22.4471 3.95101 22.6629C4.17603 22.8788 4.48122 23 4.79944 23H8.39904C8.71727 23 9.02246 22.8788 9.24748 22.6629C9.47249 22.4471 9.59891 22.1544 9.59891 21.8492V17.7458C9.59891 17.4697 9.82277 17.2458 10.0989 17.2458H13.8984C14.1745 17.2458 14.3984 17.4697 14.3984 17.7458V21.8492C14.3984 22.1544 14.5248 22.4471 14.7498 22.6629C14.9748 22.8788 15.28 23 15.5982 23H19.1978C19.5161 23 19.8213 22.8788 20.0463 22.6629C20.2713 22.4471 20.3977 22.1544 20.3977 21.8492V14.2933C20.3977 14.0172 20.6216 13.7933 20.8977 13.7933H22.7974C23.0298 13.7943 23.2575 13.7304 23.4526 13.6094C23.6478 13.4884 23.802 13.3155 23.8965 13.1119C23.991 12.9083 24.0217 12.6827 23.9848 12.4626C23.948 12.2426 23.8452 12.0376 23.6889 11.8726Z"
              fill="#C1C1C1"
            />
          </svg>
        }
        sx={bottomNavStyles.bottomNavButton}
      />
      <BottomNavigationAction
        value="search"
        icon={
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.9231 9.73077C15.9231 8.02604 15.3172 6.56781 14.1055 5.35607C12.8937 4.14433 11.4355 3.53846 9.73077 3.53846C8.02604 3.53846 6.56781 4.14433 5.35607 5.35607C4.14433 6.56781 3.53846 8.02604 3.53846 9.73077C3.53846 11.4355 4.14433 12.8937 5.35607 14.1055C6.56781 15.3172 8.02604 15.9231 9.73077 15.9231C11.4355 15.9231 12.8937 15.3172 14.1055 14.1055C15.3172 12.8937 15.9231 11.4355 15.9231 9.73077ZM23 21.2308C23 21.7099 22.8249 22.1246 22.4748 22.4748C22.1246 22.8249 21.7099 23 21.2308 23C20.7332 23 20.3185 22.8249 19.9868 22.4748L15.2458 17.7476C13.5964 18.8902 11.758 19.4615 9.73077 19.4615C8.41306 19.4615 7.15294 19.2058 5.95042 18.6944C4.7479 18.183 3.71124 17.4919 2.84044 16.6211C1.96965 15.7503 1.27855 14.7136 0.767127 13.5111C0.255709 12.3086 0 11.0485 0 9.73077C0 8.41306 0.255709 7.15294 0.767127 5.95042C1.27855 4.7479 1.96965 3.71124 2.84044 2.84044C3.71124 1.96965 4.7479 1.27855 5.95042 0.767127C7.15294 0.255709 8.41306 0 9.73077 0C11.0485 0 12.3086 0.255709 13.5111 0.767127C14.7136 1.27855 15.7503 1.96965 16.6211 2.84044C17.4919 3.71124 18.183 4.7479 18.6944 5.95042C19.2058 7.15294 19.4615 8.41306 19.4615 9.73077C19.4615 11.758 18.8902 13.5964 17.7476 15.2458L22.4886 19.9868C22.8295 20.3277 23 20.7424 23 21.2308Z"
              fill="#B8B8B8"
            />
          </svg>
        }
        sx={bottomNavStyles.bottomNavButton}
      />
      <BottomNavigationAction
        value="order"
        icon={
          <svg
            width="20"
            height="25"
            viewBox="0 0 20 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.1 3.2998H2.15C1.51487 3.2998 1 3.81468 1 4.4498V22.8498C1 23.4849 1.51487 23.9998 2.15 23.9998H17.1C17.7351 23.9998 18.25 23.4849 18.25 22.8498V4.4498C18.25 3.81468 17.7351 3.2998 17.1 3.2998Z"
              stroke="#B8B8B8"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M5.02502 18.825H9.62502M6.17502 1V4.45V1ZM13.075 1V4.45V1ZM5.02502 9.625H14.225H5.02502ZM5.02502 14.225H11.925H5.02502Z"
              stroke="#B8B8B8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
        sx={bottomNavStyles.bottomNavButton}
      />
      <BottomNavigationAction
        value="account"
        icon={
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.91667 23C1.91667 23 0 23 0 21.0833C0 19.1667 1.91667 13.4167 11.5 13.4167C21.0833 13.4167 23 19.1667 23 21.0833C23 23 21.0833 23 21.0833 23H1.91667ZM11.5 11.5C13.025 11.5 14.4875 10.8942 15.5659 9.81586C16.6442 8.73753 17.25 7.27499 17.25 5.75C17.25 4.22501 16.6442 2.76247 15.5659 1.68414C14.4875 0.605802 13.025 0 11.5 0C9.975 0 8.51247 0.605802 7.43414 1.68414C6.3558 2.76247 5.75 4.22501 5.75 5.75C5.75 7.27499 6.3558 8.73753 7.43414 9.81586C8.51247 10.8942 9.975 11.5 11.5 11.5V11.5Z"
              fill="#B8B8B8"
            />
          </svg>
        }
        sx={bottomNavStyles.bottomNavButton}
      />
    </BottomNavigation>
  );
}

export default BottomNav;
