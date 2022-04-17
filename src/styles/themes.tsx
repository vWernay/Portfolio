import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#be50f4'
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { color: 'primary' },
          style: {
            backgroundColor: '#623686',
            borderColor: '#623686',
            color: '#fff',
            '&:hover': {
              color: '#fff',
              backgroundColor: '#6d20c5d7',
              borderColor: '#6d20c5d7'
            }
          },
        },
      ],
    },
  },
});

export default theme;