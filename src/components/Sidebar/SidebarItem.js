import React from "react";
import {
  Flex,
  Text,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import HoverBox from "./HoverBox";

export default function SidebarItem({
  icon,
  title,
  description,
  active,
  navSize,
  to,
}) {
  return (
    <Flex
      alignItems="spaceBetweens"
      flexDir="column"
      width="100%"
      alignItems={navSize == "small" ? "center" : "flex-start"}
    >
      <Menu placement="right">
        <Link
          backgroundColor={active && "#AEC8CA"}
          p={3}
          borderRadius={8}
          _hover={{ textDecor: "none", backgroundColor: "#AEC8CA" }}
          w={navSize == "large" && "100%"}
        >
          <RouterLink to={to}>
            <MenuButton w="100%">
              <Flex>
                <Icon
                  as={icon}
                  fontSize="xl"
                  color={active ? "#82AAAD" : "gray.500"}
                />
                <Text ml={5} display={navSize == "small" ? "none" : "flex"}>
                  {title}
                </Text>
              </Flex>
            </MenuButton>
          </RouterLink>
        </Link>
        <MenuList
          py={0}
          border="none"
          w={200}
          h={200}
          ml={5}
          backgroundColor="transparent"
        >
          <HoverBox title={title} icon={icon} description={description} />
        </MenuList>
      </Menu>
    </Flex>
  );
}
