import { Select, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { FetchArea } from "../../data/Fetch";

const Dropdown = () => {
    useEffect (() => {
        // fetch("www.themealdb.com/api/json/v1/1/list.php?a=list")
        // .then((respond) => respond.json())
        // .then((data) => console.log(data));
        FetchArea().then(console.log);
    })
    
    return (
        <Select variant="filled" placeholder="Filled">
            <option value="option1"></option>
            <option value="option2"></option>
            <option value="option3"></option>
        </Select>
    );
}

export default Dropdown;