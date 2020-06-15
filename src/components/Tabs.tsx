import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { TabDoor, TabPrice, TapDevices } from "./TabIcons";
import styled from "styled-components";

export default () => {
  return (
    <Tabs>
      <StyledTabList>
        <Tab>
          <TabDoor />
        </Tab>
        <Tab>
          <TapDevices />
        </Tab>
        <Tab>
          <TabPrice />
        </Tab>
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
`;
