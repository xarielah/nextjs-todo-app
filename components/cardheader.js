import ArchiveButton from './archivebtn';
import { DeleteIcon, StarIcon } from '@chakra-ui/icons';
import { Flex, HStack, Text, Box } from '@chakra-ui/react';

const CardHeader = ({ data, delTaskDialog }) => {
  if (data.pinned)
    return (
      <Box mx={3} mt={3}>
        <Flex align="center" justify={'space-between'}>
          <HStack>
            <StarIcon />
            <Text>Pinned</Text>
          </HStack>

          <Flex align="center">
            <ArchiveButton data={data} />

            <DeleteIcon
              cursor={'pointer'}
              _hover={{
                color: 'red',
              }}
              onClick={() => delTaskDialog(data)}
            />
          </Flex>
        </Flex>
      </Box>
    );
  else
    return (
      <Box mx={3} mt={3} className="task-options">
        <Flex align="center" justify={'flex-end'}>
          <ArchiveButton data={data} />

          <DeleteIcon
            cursor={'pointer'}
            _hover={{
              color: 'red',
            }}
            onClick={() => delTaskDialog(data)}
          />
        </Flex>
      </Box>
    );
};

export default CardHeader;
