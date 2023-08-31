import Catalogo from "@/components/Catalogo";
import NavBar from "../components/NavBar";
import { Box } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import CustomScrollbar from "@/components/CustomScrollbar";

export default function Index() {
  const { colorMode } = useColorMode();
  const shadowColor = {
    light: "shadow-[5px_8px_30px_-15px_rgba(0,0,0,1)]",
    dark: "shadow-[5px_8px_30px_-15px_rgba(255,255,255,1)]",
  };
  const [text] = useTypewriter({
    words: ["Full-Stack Developer", "Web Developer", "Mobile Developer"],
    loop: 0,
    deleteSpeed: 80,
  });
  return (
    <Box className="overflow-hidden">
      <Box id="home-section">
        <Home />
      </Box>
      {/* <Box id="catalogo-section">
        <Catalogo />
      </Box> */}
      {/* <Box id="portfolio-section">
        <Portfolio />
      </Box>
      <Box id="contact-section">
        <Contact />
      </Box> */}
      <NavBar />
      <CustomScrollbar />
    </Box>
  );
}
