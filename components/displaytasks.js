import CardGridDisplay from './layouts/cardgrid';
import Card from './card';
import { Box, useDisclosure, Divider, Button } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import DeletionAlert from './deletionalert';
import { useState, useContext } from 'react';
import { SearchContext } from './searchContext';
import NoResult from './notasks';
import AnimationLayout from './layouts/pageanimation';

const DisplayTasks = ({ data }) => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const [delData, setDelData] = useState({});
  const [sortingMethodPinned, setSortMethodPinned] = useState(false);
  const [sortingMethod, setSortMethod] = useState(false);
  const { searchTerm } = useContext(SearchContext);

  //  Search Algo
  const globalData =
    searchTerm !== ''
      ? data.filter(
          item =>
            item.title.toLowerCase().includes(searchTerm) ||
            item.title.includes(searchTerm) ||
            item.desc.toLowerCase().includes(searchTerm) ||
            item.desc.includes(searchTerm)
        )
      : data;

  const pinned = globalData.filter(item => item.pinned && !item.complete);
  const notPinned = globalData.filter(item => !item.pinned && !item.complete);

  const changeSortMethodPinned = () => setSortMethodPinned(prev => !prev);
  const changeSortMethod = () => setSortMethod(prev => !prev);

  const sortMethodPinned = (a, b) => {
    if (sortingMethodPinned) return parseInt(a.urgency) - parseInt(b.urgency);
    else if (!sortingMethodPinned) return parseInt(b.urgency) - parseInt(a.urgency);
  };

  const sortMethod = (a, b) => {
    if (sortingMethod) return parseInt(a.urgency) - parseInt(b.urgency);
    else if (!sortingMethod) return parseInt(b.urgency) - parseInt(a.urgency);
  };

  return (
    <Box>
      {isOpen && <DeletionAlert data={delData} isOpen={isOpen} onClose={onClose} />}

      {notPinned.length === 0 && pinned.length === 0 && <NoResult />}

      {pinned.length !== 0 && (
        <>
          <Box my={5}>
            <Button colorScheme={'gray'} onClick={changeSortMethodPinned}>
              Sort {sortingMethodPinned ? <ChevronDownIcon /> : <ChevronUpIcon />}
            </Button>
          </Box>

          <Box>
            <CardGridDisplay>
              {pinned.sort(sortMethodPinned).map((card, index) => (
                <AnimationLayout i={index} key={index}>
                  <Card
                    delTaskDialog={data => {
                      onToggle();
                      setDelData(data);
                    }}
                    data={card}
                  />
                </AnimationLayout>
              ))}
            </CardGridDisplay>
          </Box>
        </>
      )}

      {notPinned.length !== 0 && (
        <>
          <Divider my={6} />

          <Box my={5}>
            <Button colorScheme={'gray'} onClick={changeSortMethod}>
              Sort {sortingMethod ? <ChevronDownIcon /> : <ChevronUpIcon />}
            </Button>
          </Box>

          <CardGridDisplay>
            {notPinned.sort(sortMethod).map((card, index) => (
              <AnimationLayout i={index + pinned.length} key={index}>
                <Card
                  delTaskDialog={data => {
                    onToggle();
                    setDelData(data);
                  }}
                  data={card}
                />
              </AnimationLayout>
            ))}
          </CardGridDisplay>
        </>
      )}
    </Box>
  );
};

export default DisplayTasks;
