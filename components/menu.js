import { HamburgerIcon } from '@chakra-ui/icons';
import { Link, Button, useColorModeValue, Box } from '@chakra-ui/react';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import NextLink from 'next/link';

const menu = [
  {
    href: '/',
    routeName: 'Home',
  },
  {
    href: '/archive',
    routeName: 'Archive',
  },
];

const MenuNavBar = ({ route }) => {
  const conditionedBtnClr = useColorModeValue('teal', 'purple');
  const menuBTNClr = useColorModeValue('teal', 'purple.200');
  const menuBTNClr2 = useColorModeValue('white', 'black');

  return (
    <>
      <Menu>
        <MenuButton
          display={{ base: 'block', md: 'none' }}
          as={Box}
          color={menuBTNClr2}
          cursor="pointer"
          lineHeight={0}
          p={2}
          borderRadius="md"
          bg={menuBTNClr}>
          <HamburgerIcon />
        </MenuButton>
        <MenuList>
          {menu.map((item, index) => (
            <NextLink key={index} href={item.href}>
              <MenuItem>
                <Link style={{ textDecoration: 'none' }}>{item.routeName}</Link>
              </MenuItem>
            </NextLink>
          ))}
        </MenuList>
      </Menu>
      <Box display={{ base: 'none', md: 'block' }}>
        {menu.map((item, index) => (
          <NextLink key={index} href={item.href}>
            <Link style={{ textDecoration: 'none' }}>
              <Button mx={1} size="sm" colorScheme={route === item.href ? conditionedBtnClr : 'gray'}>
                {item.routeName}
              </Button>
            </Link>
          </NextLink>
        ))}
      </Box>
    </>
  );
};

export default MenuNavBar;
