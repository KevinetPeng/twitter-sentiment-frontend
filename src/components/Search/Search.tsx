import "./Search.css";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { selectOptions } from "../../constants";
import { useState } from "react";
import { useSearch } from "../../redux/hooks/search";

const Search = () => {
  const [searchType, setSearchType] = useState(Object.keys(selectOptions)[0]);
  const [search, setSearch] = useState("");

  const { sendSearch } = useSearch();

  const handleSearch = () => {
    search && sendSearch(search, searchType as keyof typeof selectOptions);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <TextField
      placeholder={
        selectOptions[searchType as keyof typeof selectOptions].placeholder
      }
      variant="outlined"
      color="secondary"
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      value={search}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon onClick={handleSearch} className="search-icon" />
          </InputAdornment>
        ),
        startAdornment: (
          <div className="search-select-container">
            <FormControl variant="standard" fullWidth>
              <Select
                disableUnderline
                value={searchType}
                label="Age"
                onChange={(e) => setSearchType(e.target.value)}
                className="search-select"
                inputProps={{
                  classes: {
                    icon: "search-select-icon",
                  },
                }}
              >
                {Object.entries(selectOptions).map(([key], i) => (
                  <MenuItem
                    value={key}
                    className="search-select-menu-item"
                    key={i}
                  >
                    {key}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <div className="seperator-div"/>
          </div>
        ),
      }}
    />
  );
};

export default Search;
