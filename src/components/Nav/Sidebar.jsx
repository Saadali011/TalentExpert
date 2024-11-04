import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Assets
import CloseIcon from "../../assets/svg/CloseIcon";
import LogoIcon from "../../assets/logo.png";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <Wrapper sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <img src={LogoIcon} alt="" style={{ height: 35, width: "auto" }} />
        </div>
        <CloseBtn  onClick={() => toggleSidebar(!sidebarOpen)} className="animate pointer blackColor" >
        <CloseIcon fill={"black"} />
        </CloseBtn>
      </SidebarHeader>
      <div className="row">
        <div className="col">
          <UlStyle className="flexNullCenter flexColumn">
            <li className="semiBold font20 pointer">
              <Link to="/" className="blackColor">
                Home
              </Link>
            </li>
            <li className="semiBold font20 pointer">
              <Link to="/aboutthecompany" className="blackColor">
                About us
              </Link>
            </li>
            <li className="semiBold font20 pointer">
              <Link to="/teams" className="blackColor">
                Services
              </Link>
            </li>
            <li className="semiBold font20 pointer">
              <Link to="/BookaRoom" className="blackColor">
                Career
              </Link>
            </li>
            <li className="semiBold font20 pointer">
              <Link to="/WhatWeDo" className="blackColor">
                Blog
              </Link>
            </li>
            <li className="semiBold font20 pointer">
              <Link to="/CommingSoonPage" className="blackColor">
                Contact us
              </Link>
            </li>
            {/* <li className="semiBold font15 pointer">
              <Link to="/CommingSoonPage" className="blackColor">
                Digital Academy
              </Link>
            </li> */}
          </UlStyle>
        </div>
      </div>
      </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: ${(props) => (props.sidebarOpen ? "430px" : "400px")};
  background-color: #D5D0EF;
  // height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 20px;
  overflow-y: scroll;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;
const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;
