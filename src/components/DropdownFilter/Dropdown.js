import { Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FetchData } from "../../data/Fetch";

const optionStyle = {
  fontFamily: "Poppins, sans-serif",
  fontSize: "12px",
  borderWidth: "0",
};
const selectStyle = {
  fontFamily: "Poppins, sans-serif",
  fontSize: "12px",
  padding: "10px",
  borderRadius: "12px",
  backgroundColor: "inherit",
};

const Dropdown = ({ filter, setFilter, url, type, data }) => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    FetchData(url).then((data) => {
      setItem(data.meals);
      setFilter("");
    });
  }, []);

  return (
    <Select
      style={selectStyle}
      maxWidth="200px"
      variant="none"
      placeholder={type}
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    >
      {item.length > 0 &&
        item.map((item, i) => {
          return (
            <option value={item.strArea} key={i} style={optionStyle}>
              {item[data]}
            </option>
          );
        })}
    </Select>
  );
};

export default Dropdown;
