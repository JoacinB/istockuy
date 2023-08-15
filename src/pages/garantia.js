import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import CustomScrollbar from "@/components/CustomScrollbar";
import ConsultaGarantia from "@/components/ConsultaGarantia";


export default function Garantia() {
    return (
        <Box className="overflow-hidden">
            <NavBar />
            <ConsultaGarantia />
            <CustomScrollbar />
        </Box>
    )
}
