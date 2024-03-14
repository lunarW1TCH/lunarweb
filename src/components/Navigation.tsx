import { HStack } from '~panda/jsx';
import { Home } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from './ui/link';
import { navigate } from 'astro:transitions/client';

const Navigation = (props: NavigationProps) => {
  const { pathname } = props;

  return (
    <HStack
      w='100%'
      height='80px'
      borderBottom='1px solid'
      borderColor='border.subtle'
      position='fixed'
      bgColor='bg.default'
      px='4'
      gap='4'
      zIndex={100}
      shadow='md'
    >
      <Button
        ml={pathname === '/' ? '-16' : '0'}
        variant='ghost'
        asChild
        w={pathname === '/' ? '0px' : '32px'}
        p='0'
        aspectRatio={1 / 1}
        transition='all 0.2s ease-in-out'
        onClick={() => navigate('/')}
      >
        <Link>
          <Home />
        </Link>
      </Button>
      <Button
        onClick={() => navigate('/projects')}
        variant='ghost'
        asChild
        transition='all 0.2s ease-in-out'
      >
        <Link>Projects</Link>
      </Button>
      <Button
        onClick={() => navigate('/skills')}
        variant='ghost'
        asChild
        transition='all 0.2s ease-in-out'
      >
        <Link href='/skills'>Skills</Link>
      </Button>
      {/* <Button
        onClick={() => navigate('/docs')}
        variant='ghost'
        asChild
        transition='all 0.2s ease-in-out'
      >
        <Link href='/docs'>Docs</Link>
      </Button> */}
    </HStack>
  );
};

export default Navigation;

type NavigationProps = {
  pathname: string;
};
