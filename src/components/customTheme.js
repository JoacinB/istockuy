import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: (props) => ({
          body: {
            bg: props.colorMode === 'dark' ? 'black' : 'white',
            color: props.colorMode === 'dark' ? 'white' : 'black',
          },
        }),
      },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
    },
});

export default theme;