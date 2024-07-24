import React from "react";
import UserDetails from "./UserDetails";
import SectionContainer from "@common/SectionContainer";
import EditUser from "./EditUser";
import styled from "styled-components";
import Flexbox from "../common/UI/Flexbox";
import Form from "./Form";
const Wrapper = styled(Flexbox)`
  flex-direction: column;
`;
const UserManagement = () => {
  return (
    <Wrapper>
      <UserDetails />
      <Form />
    </Wrapper>
  );
};

export default UserManagement;
