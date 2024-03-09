import * as Card from '~/components/ui/card';
import { Button } from '../ui/button';
import { Linkedin, Github } from 'lucide-react';
import { Link } from '../ui/link';
import gala from '../../assets/gala.jpg';
import { styled } from '~panda/jsx';

const Introduction = () => {
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>Hello, I am Adrian Żegnałek</Card.Title>
        <Card.Description>
          A student and software developer from Poznań
        </Card.Description>
      </Card.Header>
      <Card.Body>
        <styled.img
          rounded='md'
          borderColor='border.muted'
          border='2px solid'
          src={gala.src}
          maxW='350px'
          maxH='350px'
        />
      </Card.Body>
      <Card.Footer gap='3'>
        <Button asChild variant='outline' w='50%'>
          <Link href='https://github.com/lunarW1TCH'>
            <Github width='16px' height='16px' /> Github
          </Link>
        </Button>
        <Button asChild variant='outline' w='50%'>
          <Link href='https://www.linkedin.com/in/adrian-zegnalek/'>
            <Linkedin width='16px' height='16px' /> LinkedIn
          </Link>
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default Introduction;
