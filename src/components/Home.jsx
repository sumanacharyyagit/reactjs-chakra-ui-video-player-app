import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container minH={'100vh'} maxW={'container.xl'} p="16">
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
            alias magnam totam odio. Cum pariatur ipsum quos dolorem. Autem
            doloribus maxime reprehenderit, architecto dicta tenetur id beatae
            quae, consectetur maiores, praesentium sequi! Animi sequi quia
            nesciunt ex cupiditate temporibus, praesentium dolor dolore
            laboriosam aperiam optio molestiae facere rerum? Officia sequi
            suscipit vel sed nulla magni saepe repudiandae maxime officiis
            quasi, sunt pariatur iste, blanditiis, quam necessitatibus neque
            facere aliquam numquam debitis in nemo. Ipsa cum eveniet iste
            architecto itaque beatae recusandae consequatur autem quidem,
            exercitationem voluptate quas natus delectus aliquam at quis numquam
            possimus alias totam iusto et distinctio! Minus modi exercitationem
            quod at corporis fuga maiores dignissimos, est explicabo! Labore
            quis, ullam est reiciendis vero quae quia voluptate soluta delectus
            accusamus sequi beatae laudantium sunt impedit, enim inventore
            eveniet dicta sit porro officiis minima vel a, ab quam. Omnis
            provident autem explicabo, in maxime tenetur rerum possimus
            repellendus eum modi deleniti inventore assumenda magni ut
            voluptatum quisquam rem earum soluta doloremque ipsum! Enim
            consequuntur necessitatibus mollitia assumenda, molestiae dolorem.
            Impedit temporibus amet praesentium nam eligendi quidem quam illo
            necessitatibus, odio facere? Veniam magni sit non tempore dolor nemo
            mollitia quasi ducimus expedita, amet cumque vel placeat reiciendis
            voluptates odio!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={2000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Image src={img1} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        The Meta World
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img2} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Future Console
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img3} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Closeup to the Console
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img4} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Going to the Future
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
