import { Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FetchArea } from "../../data/Fetch";

const Dropdown = ({ filter, setFilter }) => {
  const [area, setArea] = useState([]);

  useEffect(() => {
    FetchArea().then((data) => setArea(data.meals));
  }, []);

  return (
    <Select variant="filled" placeholder="Filled" value={filter}>
      {area.length > 0 &&
        area.map((item, i) => {
          return (
            <option value={`option${i + 1}`} key={i} onClick={() => console.log(item.strArea)}>
              {item.strArea}
            </option>
          );
        })}
    </Select>
  );
};

export default Dropdown;
