import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { fetchCitySuggestions } from "../../store/locations-actions";
import { setSearchTerm, setValue } from "../../store/locations-slice";
import "./SearchBar.module.css";

const SearchBar = () => {
  const searchTerm = useSelector((state) => state.locations.searchTerm);
  const suggestions = useSelector((state) => state.locations.suggestions);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;

    if (/[^a-zA-Z]/.test(newSearchTerm)) {
      return;
    }
    dispatch(setSearchTerm(newSearchTerm));
    dispatch(fetchCitySuggestions(newSearchTerm));
  };

  const setInputValueHandler = (value) => {
    dispatch(setValue(value));
  };

  return (
    <Stack spacing={2} sx={{ width: 600, margin: "auto" }}>
      <Autocomplete
        id="id-city-autocomplete"
        inputValue={searchTerm}
        options={suggestions || []}
        getOptionLabel={(option) =>
          `${option.LocalizedName}, ${option.AdministrativeArea?.LocalizedName}, ${option.Country?.LocalizedName}` ||
          ""
        }
        isOptionEqualToValue={(option, value) => option.Key === value.Key}
        onChange={(event, newValue) => {
          setInputValueHandler(newValue);
        }}
        noOptionsText={"No city found"}
        renderInput={(params) => (
          <>
            <TextField
              {...params}
              label="Search for a city..."
              onChange={handleInputChange}
            />
          </>
        )}
      />
    </Stack>
  );
};

export default SearchBar;
