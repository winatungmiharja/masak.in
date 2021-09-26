import React, { useState } from "react";
import {
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Heading,
  Box,
} from "@chakra-ui/react";

import {
  Menu,
  Bookmark,
  Home,
  Calendar,
  User,
  DollarSign,
  Briefcase,
  Settings,
} from "react-feather";

import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  const [navSize, changeNavSize] = useState("large");
  return (
    <div>
      <Flex
        left="5"
        overflow="hidden"
        h="100vh"
        marginTop="10px"
        borderRadius={navSize == "small" ? "15px" : "30px"}
        w={navSize == "small" ? "75px" : "200px"}
        flexDir="column"
        justifyContent="space-between"
      >
        <Flex
          mt={2}
          p="5%"
          flexDir="column"
          w="100%"
          alignItems={navSize == "small" ? "center" : "flex-start"}
          as="nav"
        >
          <IconButton
            background="none"
            _hover={{ background: "none" }}
            icon={<Menu />}
            onClick={() => {
              if (navSize == "small") changeNavSize("large");
              else changeNavSize("small");
            }}
          />

          <SidebarItem
            navSize={navSize}
            icon={Home}
            title="Dashboard"
            description="This is the description for the dashboard."
            to="/dashboard"
            active
          />

          <SidebarItem
            navSize={navSize}
            icon={Bookmark}
            title="Meals"
            to="/apapun"
          />
        </Flex>

        <Flex
          p="5%"
          flexDir="column"
          w="100%"
          alignItems={navSize == "small" ? "center" : "flex-start"}
          mb={4}
        >
          <Divider display={navSize == "small" ? "none" : "flex"} />
          <Flex mt={4} align="center">
            <Avatar size="sm" src="avatar-1.jpg" />
            <Flex
              flexDir="column"
              ml={4}
              display={navSize == "small" ? "none" : "flex"}
            >
              <Heading as="h3" size="sm">
                Wina Tungm
              </Heading>
              <Text color="gray">Orang</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
