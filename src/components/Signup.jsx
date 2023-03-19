import React from 'react';
import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading>Signup Here</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'} />
          <Input
            placeholder="Enter Name"
            type="text"
            required
            focusBorderColor={'purple.500'}
          />
          <Input
            placeholder="Enter Email"
            type="email"
            required
            focusBorderColor={'purple.500'}
          />
          <Input
            placeholder="Enter Password"
            type="password"
            required
            focusBorderColor={'purple.500'}
          />

          <Button colorScheme={'purple'} type="submit">
            Signup
          </Button>

          <Text textAlign={'right'}>
            Already have an account?&nbsp;
            <Button variant={'link'} alignSelf={'end'} colorScheme={'purple'}>
              <Link to={'/login'}>Login</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
