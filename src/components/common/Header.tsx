import { useRouter } from "next/router";
import { BiMenu, BiSolidBell, BiSolidUser } from "react-icons/bi";
import { MdOutlineArrowBack } from "react-icons/md";
import { Flex, IconButton, IconButtonProps, Spacer } from "@chakra-ui/react";

function HeaderButton(props: IconButtonProps) {
  return <IconButton variant="ghost" fontSize={24} {...props} />;
}

function Header() {
  const router = useRouter();
  const shouldRenderBackBtn = router.pathname !== "/";

  return (
    <Flex
      as="header"
      position="sticky"
      zIndex={999}
      top={0}
      bg="dark.900"
      p={2}
    >
      {shouldRenderBackBtn ? (
        <HeaderButton
          aria-label="Volver"
          icon={<MdOutlineArrowBack />}
          onClick={router.back}
        />
      ) : (
        <HeaderButton aria-label="Menu" icon={<BiMenu />} />
      )}
      <Spacer />
      <HeaderButton aria-label="Notificaciones" icon={<BiSolidBell />} />
      <HeaderButton aria-label="Perfil" icon={<BiSolidUser />} />
    </Flex>
  );
}

export default Header;
