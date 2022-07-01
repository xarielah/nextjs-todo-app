import { StarIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Flex, HStack, Text, Box } from '@chakra-ui/react';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import axios from 'axios';
import * as actions from '../utils/actions';

const CardHeader = ({ data, delTaskDialog }) => {
  const updateArchive = async data => {
    try {
      await axios.post(`http://localhost:3000/api/actions/update?action=${actions.UPDATE_ARCHIVE}`, { data });
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box mx={3} mt={3}>
      <Flex align="center" justify={data.pinned ? 'space-between' : 'flex-end'}>
        {data.pinned && (
          <HStack>
            <StarIcon />
            <Text>Pinned</Text>
          </HStack>
        )}

        <Menu>
          <MenuButton
            as={Box}
            p={1}
            borderRadius={'md'}
            _hover={{ color: 'purple.200' }}
            lineHeight={0}
            bg={'whiteAlpha.200'}
            cursor={'pointer'}>
            <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => updateArchive(data)}>{data.completed ? 'Set as incomplete' : 'Set as completed'}</MenuItem>
            <MenuItem onClick={() => delTaskDialog(data)} color="red.400">
              Delete Task
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default CardHeader;
