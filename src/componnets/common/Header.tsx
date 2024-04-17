import { useRouter } from "next/router";
import { BiMenu, BiSolidBell, BiSolidUser } from "react-icons/bi";
import { MdOutlineArrowBack } from "react-icons/md";
import { Flex, IconButton, Spacer } from "@chakra-ui/react";

function Header() {
  const router = useRouter();
  const shouldRenderBackBtn = router.pathname !== "/";

  return (
    <Flex as={"header"} position={"sticky"} top={0} bg={"dark.900"} p={2}>
      {shouldRenderBackBtn ? (
        <IconButton
          aria-label="Volver"
          fontSize={24}
          icon={<MdOutlineArrowBack />}
          onClick={router.back}
        />
      ) : (
        <IconButton aria-label="Menu" fontSize={24} icon={<BiMenu />} />
      )}
      <Spacer />
      <IconButton
        aria-label="Notificaciones"
        fontSize={24}
        icon={<BiSolidBell />}
      />
      <IconButton aria-label="Perfil" fontSize={24} icon={<BiSolidUser />} />
    </Flex>
  );
}

export default Header;
