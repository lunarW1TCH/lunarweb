import { defineGlobalStyles } from '@pandacss/dev';

export default defineGlobalStyles({
  html: {
    minH: '100vh',
  },
  code: {
    fontFamily: 'firaCode',
  },
  '*': {
    _scrollbar: {
      w: '2',
      h: '2',
      display: 'flex',
      touchAction: 'none',
      userSelect: 'none',
    },
    _scrollbarThumb: {
      position: 'relative',
      flex: '1',
      rounded: 'full',
      bg: 'border.subtle',
      _hover: {
        bg: 'border.default',
      },
    },
    _scrollbarTrack: {
      bgColor: 'bg.canvas',
    },
  },
});
