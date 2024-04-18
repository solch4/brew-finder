import NextLink from "next/link";
import { BsChat } from "react-icons/bs";
import { RxCalendar } from "react-icons/rx";
import { MdHomeFilled } from "react-icons/md";
import { As, Flex, Icon as ChakraIcon, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";

const tabs = [
  { label: "Calendario", href: "/calendar", Icon: RxCalendar },
  { label: "Inicio", href: "/", Icon: MdHomeFilled },
  { label: "Chat", href: "/chat", Icon: BsChat },
];

interface TabButtonProps {
  Icon: As;
  label: string;
  href: string;
  isActive: boolean;
}

function TabButton({ Icon, label, href, isActive }: TabButtonProps) {
  return (
    <Link
      as={NextLink}
      href={href}
      flex={1}
      display="flex"
      flexDirection="column"
      alignItems="center"
      fontSize="xs"
      color={isActive ? "primary" : "white"}
    >
      <ChakraIcon as={Icon} fontSize={24} aria-hidden />
      {label}
    </Link>
  );
}

function BottomTabs() {
  const router = useRouter();

  return (
    <Flex position={"sticky"} bottom={0} bg={"dark.900"} p={2}>
      {tabs.map((tab, i) => (
        <TabButton isActive={router.pathname === tab.href} {...tab} key={i} />
      ))}
    </Flex>
  );
}

export default BottomTabs;
