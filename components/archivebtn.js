import { Icon } from '@chakra-ui/react';
import { MdAssignmentReturn, MdAssignmentReturned } from 'react-icons/md';
import axios from 'axios';
import * as actions from '../utils/actions';

const ArchiveButton = ({ data }) => {
  const updateArchive = async data => {
    try {
      await axios.post(`http://localhost:3000/api/actions/update?action=${actions.UPDATE_ARCHIVE}`, { data });
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (data.completed)
    return (
      <Icon
        as={MdAssignmentReturn}
        _hover={{ color: 'blue.300', cursor: 'pointer' }}
        onClick={() => updateArchive(data)}
        w={5}
        h={5}
      />
    );
  else
    return (
      <Icon
        as={MdAssignmentReturned}
        _hover={{ color: 'green.500', cursor: 'pointer' }}
        onClick={() => updateArchive(data)}
        w={5}
        h={5}
      />
    );
};

export default ArchiveButton;
