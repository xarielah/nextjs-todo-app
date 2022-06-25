import { useColorMode, useColorModeValue, Button } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'


const ColorModeButton = () => {
    const { toggleColorMode } = useColorMode()

    return (
        <Button p={0} size="sm" onClick={toggleColorMode} bg={useColorModeValue('purple.200', 'yellow.500')}>
            {useColorModeValue(<MoonIcon />, <SunIcon />)}
        </Button>

    )
}

export default ColorModeButton