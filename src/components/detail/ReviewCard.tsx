import Image from "next/image";
import { Button, Flex, Heading, Spacer, Stack, Text } from "@chakra-ui/react";

interface Props {
  name: string;
  image: string;
  text: string;
}

function ReviewCard({ name, image, text }: Props) {
  return (
    <Stack>
      <Flex gap={3} alignItems="center">
        <Image
          src={image}
          width="38"
          height="38"
          alt={`Foto de perfil de ${name}`}
          style={{
            width: 38,
            height: 38,
            objectFit: "cover",
            borderRadius: 9999,
          }}
        />
        <Heading as="h4" size="sm" fontWeight="normal">
          {name}
        </Heading>
        <Spacer />
        <Button variant="ghost" color="secondary" size="xs" fontWeight={400}>
          Responder
        </Button>
      </Flex>

      <Text fontSize="sm">{text}</Text>
    </Stack>
  );
}

export default ReviewCard;
