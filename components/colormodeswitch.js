import { useColorMode, useColorModeValue, Button, HStack, Switch } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'


const ColorModeButton = () => {
    const { toggleColorMode } = useColorMode()

    return (
        // <Button p={0} size="sm" onClick={toggleColorMode} colorScheme={useColorModeValue('purple', 'orange')}>
        <HStack>
            <SunIcon color={useColorModeValue('orange.400', 'white')} />
            <Switch size="lg" colorScheme={'purple'} isChecked={useColorModeValue(false, true)} onChange={toggleColorMode} />
            <MoonIcon color={useColorModeValue('black', 'purple.300')} />
        </HStack>
        // </Button>

    )
}

export default ColorModeButton