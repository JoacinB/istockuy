import { useColorMode } from "@chakra-ui/react";

const CustomScrollbar = () => {
  const { colorMode } = useColorMode();
  const scrollbarTrackColor = colorMode === "dark" ? "#1A202C" : "#EDF2F7";
  return (
    <style jsx global>{`
      /* Firefox */
      * {
        scrollbar-width: auto;
        scrollbar-color: #8f54a0 #000000;
      }

      /* Chrome, Edge, and Safari */
      *::-webkit-scrollbar {
        width: 10px;
      }

      *::-webkit-scrollbar-track {
        background: ${scrollbarTrackColor};
      }

      *::-webkit-scrollbar-thumb {
        background-image: linear-gradient(180deg, #d0368a 0%, #708ad4 99%);
        border-radius: 10px;
        border: 3px none #ffffff;
      }
    `}</style>

  );
};

export default CustomScrollbar;
