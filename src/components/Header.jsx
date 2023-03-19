import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';

import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        position={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme="purple"
        p={'0'}
        w={'10'}
        h={'10'}
        zIndex={'overlay'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <div>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>VIDEO PORTAL</DrawerHeader>
            <DrawerBody>
              <VStack alignItems={'flex-start'}>
                <Button
                  onClick={onClose}
                  variant={'ghost'}
                  colorScheme={'purple'}
                >
                  <Link to={'/'}>Home</Link>
                </Button>
                <Button
                  onClick={onClose}
                  variant={'ghost'}
                  colorScheme={'purple'}
                >
                  <Link to={'/videos'}>Videos</Link>
                </Button>
                <Button
                  onClick={onClose}
                  variant={'ghost'}
                  colorScheme={'purple'}
                >
                  <Link to={'/videos?category=free'}>Free Videos</Link>
                </Button>
                <Button
                  onClick={onClose}
                  variant={'ghost'}
                  colorScheme={'purple'}
                >
                  <Link to={'/upload'}>Upload Video</Link>
                </Button>
              </VStack>

              <HStack
                position={'absolute'}
                bottom={'10'}
                left={'0'}
                w={'full'}
                justifyContent={'space-evenly'}
              >
                <Button onClick={onClose} colorScheme={'purple'}>
                  <Link to={'/login'}>Login</Link>
                </Button>
                <Button
                  onClick={onClose}
                  colorScheme={'purple'}
                  variant={'outline'}
                >
                  <Link to={'/signup'}>Signup</Link>
                </Button>
              </HStack>
            </DrawerBody>
          </DrawerContent>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
