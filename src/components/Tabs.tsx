import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { TabDoor, TabPrice, TapDevices } from "./TabIcons";
import styled from "styled-components";

interface TapIndex {
  index: number;
}

export default () => {
  const [state, setState] = useState<TapIndex>({ index: 0 });

  return (
    <Tabs selectedIndex={state.index} onSelect={(index) => setState({ index })}>
      <StyledTabList>
        <StyledTab className={`${state.index === 0 ? "active" : null}`}>
          <TabDoor />
          <TapText>
            No commitments Cancel <br /> Online at anytime
          </TapText>
        </StyledTab>

        <StyledTab className={`${state.index === 1 ? "active" : null}`}>
          <TapDevices />
          <TapText>Watch anywhere</TapText>
        </StyledTab>

        <StyledTab className={`${state.index === 2 ? "active" : null}`}>
          <TabPrice />
          <TapText>Pick your Price</TapText>
        </StyledTab>
      </StyledTabList>

      <TabPanel>
        <h1>hi</h1>
      </TabPanel>
      <TabPanel>
        <h1>hi2</h1>
      </TabPanel>
      <TabPanel>
        <h1>hi3</h1>
      </TabPanel>
    </Tabs>
  );
};

const StyledTabList = styled(TabList)`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 170px);
  align-content: center;
  justify-content: center;
  text-align: center;

  .active {
    border-bottom: 4px solid var(--main-red);
    color: white;
    svg path {
      fill: white;
    }
  }
`;

const StyledTab = styled(Tab)`
  width: 120px;
  outline: none;
  cursor: pointer;
  color: grey;
  &:hover {
    color: white;
  }
  &:hover svg path {
    fill: white;
  }
`;

const TapText = styled.p`
  font-weight: 500;
  font-size: 10px;
`;
