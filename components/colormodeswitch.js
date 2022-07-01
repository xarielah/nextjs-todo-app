import { useColorMode, useColorModeValue, HStack, Switch } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ColorModeButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <HStack>
      <SunIcon color={useColorModeValue('orange.400', 'white')} />
      <Switch size="lg" colorScheme={'purple'} isChecked={useColorModeValue(false, true)} onChange={toggleColorMode} />
      <MoonIcon color={useColorModeValue('black', 'purple.300')} />
    </HStack>
  );
};

export default ColorModeButton;
