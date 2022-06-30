import { Link, Button, useColorModeValue } from '@chakra-ui/react';
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

const MenuList = ({ route }) => {
  const conditionedBtnClr = useColorModeValue('teal', 'purple');
  return (
    <>
      {menu.map((item, index) => (
        <NextLink key={index} href={item.href}>
          <Link style={{ textDecoration: 'none' }}>
            <Button mx={1} size="sm" colorScheme={route === item.href ? conditionedBtnClr : 'gray'}>
              {item.routeName}
            </Button>
          </Link>
        </NextLink>
      ))}
    </>
  );
};

export default MenuList;
