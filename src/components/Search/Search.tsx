import "./Search.css";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { selectOptions } from "../../constants";
import { useState } from "react";

const Search = () => {
  const [searchType, setSearchType] = useState(Object.keys(selectOptions)[0]);

  return (
    <TextField
      placeholder={
        selectOptions[searchType as keyof typeof selectOptions].placeholder
      }
      variant="outlined"
      color="secondary"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
        startAdornment: (
          <InputAdornment position="start">
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
                {Object.entries(selectOptions).map(([key]) => (
                  <MenuItem value={key} className="search-select-menu-item">
                    {key}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Search;
