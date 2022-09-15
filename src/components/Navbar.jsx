import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
    <Stack
        direction="row"
        alignItems="center"
        style={{ padding: "20px 15px" }}
        sx={{
            position: "sticky",
            background: "#000",
            top: 0,
            justifyContent: "space-between",
        }}
    >
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="logo" height={45} />
            <span
                style={{ color: "white", marginLeft: "12px", fontSize: "24px" }}
            >
                MyTube
            </span>
        </Link>
        <SearchBar />
    </Stack>
);

export default Navbar;
