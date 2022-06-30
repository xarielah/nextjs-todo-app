import {
  Box,
  Text,
  Heading,
  Divider,
  useColorModeValue,
  Progress,
  Badge,
} from "@chakra-ui/react";
import CardHeader from "./cardheader";

const Card = ({ data, delTaskDialog }) => {
  const cardBg = useColorModeValue("gray.50", "gray.700");

  const creationDate = new Date(data.createdAt);
  const fixDate = (n) => (n > 9 ? n : "0" + n);

  const displayDate = `${fixDate(creationDate.getUTCDate() + 1)}/${fixDate(
    creationDate.getUTCMonth() + 1
  )}/${creationDate.getUTCFullYear()}`;
  const displayHour = `${fixDate(
    creationDate.getUTCHours() + 3 === 24 ? 0 : creationDate.getUTCHours() + 3
  )}:${fixDate(creationDate.getUTCMinutes())}`;

  return (
    <Box
      bg={cardBg}
      maxW="300px"
      maxH="300px"
      boxShadow={"md"}
      borderTop={`10px solid ${data.color === "#FFFFFF" ? "#CCC" : data.color}`}
      borderRadius={"md"}
    >
      <CardHeader data={data} delTaskDialog={(data) => delTaskDialog(data)} />

      <Box px={5} pb={5}>
        <Box my={4}>
          <Box>
            <Heading size="md">
              {data.title} <Badge>{data.cat}</Badge>
            </Heading>
            <Text as="sub">
              Created at {displayDate} {displayHour}
            </Text>
          </Box>

          <Divider my={2} />

          <Text>{data.desc}</Text>
        </Box>
        <Box>
          <Text as="sub">Level of urgency:</Text>
          <Progress
            mt={1}
            value={parseInt(data.urgency) !== 0 ? parseInt(data.urgency) : 1}
            size="sm"
            borderRadius={"md"}
            max={10}
            colorScheme={"teal"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
