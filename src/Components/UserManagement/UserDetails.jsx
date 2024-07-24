import React, { useState } from "react";
import styled from "styled-components";
import { boxShadowDs1 } from "@common/UI/styles";
import FlexBox from "@common/UI/FlexBox";
import { Body1, Body2 } from "@common/UI/Headings";
import EditUser from "./EditUser";
import { GiSettingsKnobs } from "react-icons/gi";
import { ButtonText } from "../common/UI/Headings";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { TiUserDeleteOutline } from "react-icons/ti";

const Wrapper = styled(FlexBox)`
  width: fit-content;
  padding: 1.5rem;
  background-color: #ffffff;
  align-items: center;
  column-gap: 1.5rem;
  border-radius: 1rem;
  ${boxShadowDs1}
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 1rem;
  row-gap: 1.5rem;
  justify-content: space-between;
  cursor: pointer;
`;

const AddButton = styled(FlexBox)`
  border-radius: 0.5rem;
  background-color: #3dbaf8;
  border: none;
  padding: 1rem 1.5rem;
  align-items: center;
  justify-content: center;
`;

const DeleteButton = styled(FlexBox)`
  border-radius: 0.5rem;
  background-color: #fafafa;
  border: none;
  padding: 1rem 1.5rem;
  color: #3dbaf8;
  border: 1px solid #3dbaf8;
  align-items: center;
  justify-content: center;
`;
const userdetails = [
  {
    name: "John Doe",
    role: "Senior Analyst",
    employeeId: 35412,
    numberOfTests: 10,
    commodityTested: "Gold",
  },
  {
    name: "Jane Smith",
    role: "Junior Analyst",
    employeeId: 35413,
    numberOfTests: 5,
    commodityTested: "Silver",
  },
  {
    name: "Emily Johnson",
    role: "Lead Analyst",
    employeeId: 35414,
    numberOfTests: 20,
    commodityTested: "Platinum",
  },
];

const UserDetails = ({
  name,
  role,
  employeeId,
  numberOfTests,
  commodityTested,
}) => {
  return (
    <>
      <Wrapper>
        <FlexBox column align="center" justify="center">
          <img src="/assets/ProfilePhoto.svg" alt="Profile" />
          <Body1 bold>{name}</Body1>
          <Body2>{role}</Body2>
        </FlexBox>
        <FlexBox
          column
          justify="center"
          style={{ borderLeft: "1px solid", padding: "0 1rem" }}
          rowGap="0.5rem"
        >
          <Body1>
            <strong>Employee Id</strong> - {employeeId}
          </Body1>
          <Body1>
            <strong>No. of Tests</strong> - {numberOfTests}
          </Body1>
          <Body1>
            <strong>Commodity Tested</strong> - {commodityTested}
          </Body1>
        </FlexBox>
      </Wrapper>
    </>
  );
};

const UserList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <FlexBox width="100%" justify="space-between">
        <FlexBox>
          <FlexBox columnGap="0.5rem" align="center">
            <GiSettingsKnobs />
            <Body2>Filters</Body2>
          </FlexBox>
        </FlexBox>
        <FlexBox columnGap="1.5rem">
          <AddButton>
            <MdOutlinePersonAddAlt />
            Add User
          </AddButton>
          <DeleteButton>
            <TiUserDeleteOutline />
            Delete User
          </DeleteButton>
        </FlexBox>
      </FlexBox>
      {isModalOpen && <EditUser closeModal={closeModal} />}
      <Card onClick={openModal}>
        {userdetails.map((user, index) => (
          <UserDetails
            key={index}
            name={user.name}
            role={user.role}
            employeeId={user.employeeId}
            numberOfTests={user.numberOfTests}
            commodityTested={user.commodityTested}
          />
        ))}
      </Card>
    </>
  );
};

export default UserList;
