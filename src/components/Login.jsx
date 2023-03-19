import React from 'react';
import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Login = () => {
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
          <Heading>Login Here</Heading>

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

          <Button variant={'link'} alignSelf={'end'}>
            <Link to={'/forgetpassword'}>Forgot password?</Link>
          </Button>

          <Button colorScheme={'purple'} type="submit">
            Login
          </Button>

          <Text textAlign={'right'}>
            New User?&nbsp;
            <Button variant={'link'} alignSelf={'end'} colorScheme={'purple'}>
              <Link to={'/signup'}>Signup</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
