import NextLink from "next/link";
import { BsChat } from "react-icons/bs";
import { RxCalendar } from "react-icons/rx";
import { MdHomeFilled } from "react-icons/md";
import { As, Flex, Icon as ChakraIcon, Link } from "@chakra-ui/react";

interface TabButtonProps {
  Icon: As;
  label: string;
  href: string;
}

function TabButton({ Icon, label, href }: TabButtonProps) {
  return (
    <Link
      as={NextLink}
      href={href}
      flex={1}
      display="flex"
      flexDirection="column"
      alignItems="center"
      fontSize="xs"
    >
      <ChakraIcon as={Icon} fontSize={24} aria-hidden />
      {label}
    </Link>
  );
}

function BottomTabs() {
  return (
    <Flex position={"sticky"} bottom={0} bg={"dark.900"} p={2}>
      <TabButton label="Calendario" href="/calendar" Icon={RxCalendar} />
      <TabButton label="Inicio" href="/" Icon={MdHomeFilled} />
      <TabButton label="Chat" href="/chat" Icon={BsChat} />
    </Flex>
  );
}

export default BottomTabs;
