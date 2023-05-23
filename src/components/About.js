import {
  Box,
  Flex,
  ListItem,
  Text,
  Grid,
  UnorderedList,
  useColorMode,
} from "@chakra-ui/react";
import { differenceInYears } from "date-fns";

export default function About() {
  const { colorMode } = useColorMode();
  const textColor = colorMode === "dark" ? "white" : "gray.800";
  const shadowColor = {
    light: "shadow-[5px_8px_30px_-15px_rgba(0,0,0,1)]",
    dark: "shadow-[5px_5px_30px_-15px_rgba(150,150,150,1)]",
  };
  const borderColor = colorMode === "dark" ? "#2B2A2A" : "#D4D5D5";
  const backgroundColor =
    colorMode === "dark" ? "bg-black/40" : "bg-slate-100/40";
  const Birthday = new Date(2002, 1, 8);
  const age = differenceInYears(new Date(), Birthday);

  return (
    <Box
      // style={{
      //   background: `url('/fondoabout.png') ${colorMode === "dark" ? "black" : "white"} no-repeat center`,
      // }}
      color={textColor}
      px={8}
      py={5}
      h={["auto", "auto", "auto", "100-full"]}
    >
      <Box className="mx-auto text-center">
        <Text className="mb-20 text-3xl font-bold xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl">
          Productos
        </Text>
        <Flex className="justify-between mx-auto">
          <Box
            w="50%"
            className={`text-left ${backgroundColor} p-3 mr-3 rounded-xl border-2 border-${borderColor}`}
          >
            <Box>
              <Text className="mb-4 text-2xl font-bold uppercase xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl">
                Personal Info
              </Text>
              <UnorderedList
                listStyleType="none"
                className="text-xl font-light inline-block"
              >
                <ListItem className="mb-4 text-lg">
                  First Name: <span className="font-semibold">Joaquín</span>
                </ListItem>
                <ListItem className="mb-4 text-lg">
                  Age: <span className="font-semibold">{age} Years</span>
                </ListItem>
                <ListItem className="mb-4 text-lg">
                  Phone: <span className="font-semibold">+598 91339424</span>
                </ListItem>
                <ListItem className="mb-4 text-lg">
                  Email:{" "}
                  <span className="font-semibold">
                    joaquinborgesborio@gmail.com
                  </span>
                </ListItem>
              </UnorderedList>
              <UnorderedList
                listStyleType="none"
                className="text-xl font-light inline-block"
              >
                <ListItem className="mb-4 text-lg">
                  Last Name: <span className="font-semibold">Borges</span>
                </ListItem>
                <ListItem className="mb-4 text-lg">
                  Nationality: <span className="font-semibold">Uruguayan</span>
                </ListItem>
                <ListItem className="mb-4 text-lg">
                  Address:{" "}
                  <span className="font-semibold">Juan Paullier 1783</span>
                </ListItem>
                <ListItem className="mb-4 text-lg">
                  City: <span className="font-semibold">Montevideo</span>
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>
          <Box
            w="50%"
            className={`text-left ${backgroundColor} p-3 mr-3 rounded-xl border-2 border-${borderColor}`}
          >
            <Text className="text-xl p-5">
              I am currently pursuing a Bachelor's Degree in Computer Systems at
              ORT University located in Montevideo, Uruguay. My current priority
              is to enhance my learning and face challenges that push me to
              perform at my best. I have a strong passion for working and
              creating solutions that have a positive impact on people's daily
              lives. My ability to learn quickly and continuously seek out
              opportunities to develop new skills is what sets me apart.
              Moreover, I believe in the power of teamwork and always strive to
              support my colleagues while tackling new challenges together.
            </Text>
          </Box>
        </Flex>
        <Text className="mt-20 mb-10 text-3xl font-bold xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl">
          Skills
        </Text>
        <Grid
        templateColumns="repeat(auto-fill, minmax(110px, 1fr))"
        gap={4}
        className=" mx-auto m-auto text-center flex row flex-wrap justify-center text-xl font-semibold mb-10"
        >
          <Box
            className={`${shadowColor[colorMode]} rounded-2xl hover:-translate-y-2 transition duration-250 flex flex-col items-center justify-center`}
          >
            <img
              src="https://img.icons8.com/color/240/000000/html-5--v1.png"
              alt="HTML5"
              height={144}
              width={144}
              className="p-3"
            />
            HTML5
          </Box>

          <Box
            className={`${shadowColor[colorMode]} rounded-2xl hover:-translate-y-2 transition duration-250 flex flex-col items-center justify-center`}
          >
            <img
              src="https://img.icons8.com/color/240/000000/css3.png"
              alt="CSS"
              height={144}
              width={144}
              className="p-3"
            />
            CSS3
          </Box>

          <Box
            className={`${shadowColor[colorMode]} rounded-2xl hover:-translate-y-2 transition duration-250 flex flex-col items-center justify-center`}
          >
            <img
              src="https://img.icons8.com/color/240/000000/javascript--v1.png"
              alt="JavaScript"
              height={144}
              width={144}
              className="p-3"
            />
            JavaScript
          </Box>

          <Box
            className={`${shadowColor[colorMode]} rounded-2xl hover:-translate-y-2 transition duration-250 flex flex-col items-center justify-center`}
          >
            <img
              src="https://img.icons8.com/color/240/000000/bootstrap.png"
              alt="Bootstrap"
              height={144}
              width={144}
              className="p-3"
            />
            Bootstrap
          </Box>

          <Box
            className={`${shadowColor[colorMode]} rounded-2xl hover:-translate-y-2 transition duration-250 flex flex-col items-center justify-center`}
          >
            <img
              src={
                colorMode === "light"
                  ? "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iOTYiIGhlaWdodD0iOTYiCnZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgICA8cGF0aCBkPSJNMTAuOSwyLjFjLTQuNiwwLjUtOC4zLDQuMi04LjgsOC43Yy0wLjUsNC43LDIuMiw4LjksNi4zLDEwLjVDOC43LDIxLjQsOSwyMS4yLDksMjAuOHYtMS42YzAsMC0wLjQsMC4xLTAuOSwwLjEgYy0xLjQsMC0yLTEuMi0yLjEtMS45Yy0wLjEtMC40LTAuMy0wLjctMC42LTFDNS4xLDE2LjMsNSwxNi4zLDUsMTYuMkM1LDE2LDUuMywxNiw1LjQsMTZjMC42LDAsMS4xLDAuNywxLjMsMWMwLjUsMC44LDEuMSwxLDEuNCwxIGMwLjQsMCwwLjctMC4xLDAuOS0wLjJjMC4xLTAuNywwLjQtMS40LDEtMS44Yy0yLjMtMC41LTQtMS44LTQtNGMwLTEuMSwwLjUtMi4yLDEuMi0zQzcuMSw4LjgsNyw4LjMsNyw3LjZDNyw3LjIsNyw2LjYsNy4zLDYgYzAsMCwxLjQsMCwyLjgsMS4zQzEwLjYsNy4xLDExLjMsNywxMiw3czEuNCwwLjEsMiwwLjNDMTUuMyw2LDE2LjgsNiwxNi44LDZDMTcsNi42LDE3LDcuMiwxNyw3LjZjMCwwLjgtMC4xLDEuMi0wLjIsMS40IGMwLjcsMC44LDEuMiwxLjgsMS4yLDNjMCwyLjItMS43LDMuNS00LDRjMC42LDAuNSwxLDEuNCwxLDIuM3YyLjZjMCwwLjMsMC4zLDAuNiwwLjcsMC41YzMuNy0xLjUsNi4zLTUuMSw2LjMtOS4zIEMyMiw2LjEsMTYuOSwxLjQsMTAuOSwyLjF6Ij48L3BhdGg+Cjwvc3ZnPg=="
                  : "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iOTYiIGhlaWdodD0iOTYiCnZpZXdCb3g9IjAgMCAyNCAyNCIKc3R5bGU9ImZpbGw6I0ZGRkZGRjsiPgogICAgPHBhdGggZD0iTTEwLjksMi4xYy00LjYsMC41LTguMyw0LjItOC44LDguN2MtMC41LDQuNywyLjIsOC45LDYuMywxMC41QzguNywyMS40LDksMjEuMiw5LDIwLjh2LTEuNmMwLDAtMC40LDAuMS0wLjksMC4xIGMtMS40LDAtMi0xLjItMi4xLTEuOWMtMC4xLTAuNC0wLjMtMC43LTAuNi0xQzUuMSwxNi4zLDUsMTYuMyw1LDE2LjJDNSwxNiw1LjMsMTYsNS40LDE2YzAuNiwwLDEuMSwwLjcsMS4zLDFjMC41LDAuOCwxLjEsMSwxLjQsMSBjMC40LDAsMC43LTAuMSwwLjktMC4yYzAuMS0wLjcsMC40LTEuNCwxLTEuOGMtMi4zLTAuNS00LTEuOC00LTRjMC0xLjEsMC41LTIuMiwxLjItM0M3LjEsOC44LDcsOC4zLDcsNy42QzcsNy4yLDcsNi42LDcuMyw2IGMwLDAsMS40LDAsMi44LDEuM0MxMC42LDcuMSwxMS4zLDcsMTIsN3MxLjQsMC4xLDIsMC4zQzE1LjMsNiwxNi44LDYsMTYuOCw2QzE3LDYuNiwxNyw3LjIsMTcsNy42YzAsMC44LTAuMSwxLjItMC4yLDEuNCBjMC43LDAuOCwxLjIsMS44LDEuMiwzYzAsMi4yLTEuNywzLjUtNCw0YzAuNiwwLjUsMSwxLjQsMSwyLjN2Mi42YzAsMC4zLDAuMywwLjYsMC43LDAuNWMzLjctMS41LDYuMy01LjEsNi4zLTkuMyBDMjIsNi4xLDE2LjksMS40LDEwLjksMi4xeiI+PC9wYXRoPgo8L3N2Zz4="
              }
              alt="GitHub"
              height={144}
              width={144}
              className="p-3"
            />
            GitHub
          </Box>

          <Box
            className={`${shadowColor[colorMode]} rounded-2xl hover:-translate-y-2 transition duration-250 flex flex-col items-center justify-center`}
          >
            <img
              src="https://img.icons8.com/color/240/000000/java-coffee-cup-logo--v1.png"
              alt="Java"
              height={144}
              width={144}
              className="p-3"
            />
            Java
          </Box>

          <Box
            className={`${shadowColor[colorMode]} rounded-2xl hover:-translate-y-2 transition duration-250 flex flex-col items-center justify-center`}
          >
            <img
              src="https://img.icons8.com/color/96/000000/mysql-logo.png"
              alt="MySQL"
              height={144}
              width={144}
              className="p-3"
            />
            MySQL
          </Box>

          <Box
            className={`${shadowColor[colorMode]} rounded-2xl hover:-translate-y-2 transition duration-250 flex flex-col items-center justify-center`}
          >
            <img
              src="https://img.icons8.com/color/96/000000/python--v1.png"
              alt="Python"
              height={144}
              width={144}
              className="p-3"
            />
            Python
          </Box>

          <Box
            className={`${shadowColor[colorMode]} rounded-2xl hover:-translate-y-2 transition duration-250 flex flex-col items-center justify-center`}
          >
            <img
              src="https://img.icons8.com/external-those-icons-flat-those-icons/96/000000/external-PHP-programming-and-development-those-icons-flat-those-icons.png"
              alt="PHP"
              height={144}
              width={144}
              className="p-3"
            />
            PHP
          </Box>

          <Box
            className={`${shadowColor[colorMode]} rounded-2xl hover:-translate-y-2 transition duration-250 flex flex-col items-center justify-center`}
          >
            <img
              src="https://img.icons8.com/color/96/000000/git.png"
              alt="Git"
              height={144}
              width={144}
              className="p-3"
            />
            Git
          </Box>

          <Box
            className={`${shadowColor[colorMode]} rounded-2xl hover:-translate-y-2 transition duration-250 flex flex-col items-center justify-center`}
          >
            <img
              src="https://img.icons8.com/color/96/null/flutter.png"
              alt="Flutter"
              height={144}
              width={144}
              className="p-3"
            />
            Flutter
          </Box>

          <Box
            className={`${shadowColor[colorMode]} rounded-2xl hover:-translate-y-2 transition duration-250 flex flex-col items-center justify-center`}
          >
            <img
              src="https://www.svgrepo.com/show/452130/vue.svg"
              alt="Vue JS"
              height={144}
              width={144}
              className="p-3"
            />
            Vue.js
          </Box>

          <Box
            className={`${shadowColor[colorMode]} rounded-2xl hover:-translate-y-2 transition duration-250 flex flex-col items-center justify-center`}
          >
            <img
              src="https://laravel.com/img/logomark.min.svg"
              alt="Laravel"
              height={144}
              width={144}
              className="p-3"
            />
            Laravel
          </Box>

          <Box
            className={`${shadowColor[colorMode]} rounded-2xl hover:-translate-y-2 transition duration-250 flex flex-col items-center justify-center`}
          >
            <img
              src="https://www.svgrepo.com/show/452092/react.svg"
              alt="React"
              height={144}
              width={144}
              className="p-3"
            />
            React
          </Box>

          <Box
            className={`${shadowColor[colorMode]} rounded-2xl hover:-translate-y-2 transition duration-250 flex flex-col items-center justify-center`}
          >
            <img
              src="https://www.svgrepo.com/show/354048/material-ui.svg"
              alt="Material UI"
              height={144}
              width={144}
              className="p-3"
            />
            Material UI
          </Box>

          <Box
            className={`${shadowColor[colorMode]} rounded-2xl hover:-translate-y-2 transition duration-250 flex flex-col items-center justify-center`}
          >
            <img
              src="https://img.icons8.com/color/96/null/nodejs.png"
              alt="Node JS"
              height={144}
              width={144}
              className="p-3"
            />
            Node JS
          </Box>

          <Box
            className={`${shadowColor[colorMode]} rounded-2xl hover:-translate-y-2 transition duration-250 flex flex-col items-center justify-center`}
          >
            <img
              src="https://img.icons8.com/color/96/null/chakra-ui.png"
              alt="Chakra UI"
              height={144}
              width={144}
              className="p-3"
            />
            Chakra UI
          </Box>

          <Box
            className={`${shadowColor[colorMode]} rounded-2xl hover:-translate-y-2 transition duration-250 flex flex-col items-center justify-center`}
          >
            <img
              src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-light-atom.svg"
              alt="Vuetify"
              height={144}
              width={144}
              className="p-3"
            />
            Vuetify
          </Box>
          <Box
            className={`${shadowColor[colorMode]} rounded-2xl hover:-translate-y-2 transition duration-250 flex flex-col items-center justify-center`}
          >
            <img
              src="https://cdn.cdnlogo.com/logos/n/80/next-js.svg"
              alt="Next JS"
              height={144}
              width={144}
              className="p-3"
            />
            Next.JS
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}
