'use client'

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'

// interface Props {
//   children: React.ReactNode
// }

const Links = ['Dashboard', 'Projects', 'Team']

const NavLink = () => {
  //const { children } = props
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
    </Box>
  )
}

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const buttonStyle = {
    backgroundColor: '#007bff', // Blue background color
    color: '#fff',              // White text color
    padding: '10px 20px',       // Padding for the button
    border: 'none',             // Remove button border
    borderRadius: '5px',        // Rounded corners
    cursor: 'pointer',          // Show pointer cursor on hover
    fontSize: '16px',           // Font size
  };
  

  return (
    <>
      <Box w="100%" style={{ background: "#fff", padding: "4px",  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", }} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
    
          <HStack spacing={8} alignItems={'center'}>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              <Link to={'/storylist'}>
              <button
             style={buttonStyle}
              >Home</button>
              </Link>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
                ))}
            </HStack>
          </HStack>
                <Box style={{color:"#000",fontSize: "28px" , fontWeight: '700', textAlign:'center' }}>{localStorage.getItem('storyTitle')}</Box>
          <Flex alignItems={'center'}>
            <Button className='btn btn-success'
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}>
              My Profile : {localStorage.getItem('virtualID')}
            </Button>
            <Menu>
              <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}