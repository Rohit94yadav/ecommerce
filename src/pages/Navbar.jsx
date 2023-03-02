import { useState } from 'react'
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

import { Link } from 'react-router-dom'


export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const [display, changeDisplay] = useState('none')
  return (
    <Flex>
      <Flex
        position="fixed"
        top="1rem"
       border="1px solid red"
        align="center"
        w="100%"
       
       
        justifyContent="center"
        alignItems="center"
      >
        {/* Desktop */}
        <Flex
          display={['none', 'none', 'flex','flex']}
        >
          <Link href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
             
              w="100%"
            >
              Home
                    </Button>
          </Link>

          <Link href="/about" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="About"
             
              w="100%"
            >
              About
                    </Button>
          </Link>

          <Link href="/contact" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Contact"
             
              w="100%"
            >
              Contact
                    </Button>
          </Link>
          <Link href="/contact" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Contact"
             
              w="100%"
            >
              Contact
                    </Button>
          </Link>
          <Link href="/contact" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Contact"
             
              w="100%"
            >
              Contact
                    </Button>
          </Link>
          <Link href="/contact" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Contact"
             
              w="100%"
            >
              Contact
                    </Button>
          </Link>
          <Link href="/contact" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Contact"
             
              w="100%"
            >
              Contact
                    </Button>
          </Link>
          <Link href="/contact" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Contact"
             
              w="100%"
            >
              Contact
                    </Button>
          </Link>
          <Link href="/contact" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Contact"
             
              w="100%"
            >
              Contact
                    </Button>
          </Link>
        </Flex>

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={
            <HamburgerIcon />
          }
          onClick={() => changeDisplay('flex')}
          display={['flex', 'flex', 'none', 'none']}
        />

      </Flex>

      {/* Mobile Content */}
      <Flex
        w='100vw'
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
       
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={
              <CloseIcon />
            }
            onClick={() => changeDisplay('none')}
          />
        </Flex>

        <Flex
          flexDir="column"
          align="center"
        >
          <Link href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
             
              w="100%"
            >
              Home
                    </Button>
          </Link>

          <Link href="/about" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="About"
             
              w="100%"
            >
              About
                    </Button>
          </Link>

          <Link href="/contact" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Contact"
             
              w="100%"
            >
              Contact
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}