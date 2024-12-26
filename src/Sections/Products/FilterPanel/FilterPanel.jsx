import {  useEffect } from "react";
import Slider from "@mui/material/Slider";
import { Chips } from "../../../Components";
import "./FilterPanel.css";
import GamesData from "../../../Data/GamesData";
import { FaArrowDown } from "react-icons/fa6";
// material UI
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const FilterPanel = ({
  SetFilterGames,
  price,
  setPrice,
  studioName,
  setStudioName,
  playersRange,
  setPlayersRange,
  platformName,
  setPlatformName,
  maxPrice
}) => {
  // ##########################
  // Handler Changes ♻
  // ##########################

  function handelPrice(event, newValue) {
    setPrice(newValue);
  }

  function handelPlayers(event, newValue) {
    setPlayersRange(event.target.value);
  }

  function handelPlatform(event) {
    setPlatformName(event.target.value);
  }

  function handelCheckbox(event) {
    if (event.target.checked) {
      setStudioName([...studioName, event.target.value]);
    } else {
      setStudioName(studioName.filter((ele) => ele !== event.target.value));
    }
  }

  // Collect all status and handelers in one object to deliver it to chips component

  let statusGroup = {
    maxPrice,
    price,
    studioName,
    playersRange,
    platformName,
    setPrice,
    setPlayersRange,
    setStudioName,
    setPlatformName,
  };

  // *************************************
  // main function to filter all states 📌
  // *************************************

  const handleFilter = () => {
    const filteredGames = GamesData.filter(
      (game) => game.current_price >= price[0] && game.current_price <= price[1]
    )
      .filter(
        (game) => studioName.includes(game.studio) || studioName.length === 0
      )
      .filter((game) => game.players === playersRange || playersRange === "All")
      .filter(
        (game) =>
          game.platform.some((platform) => platform === platformName) ||
          platformName === "All"
      );

    SetFilterGames(filteredGames);
  };

  useEffect(() => {
    handleFilter();
  }, [price, studioName, playersRange, platformName]);

  // Flat the tags array
  const getUniqueTags = (data) => {
    const allTags = data.flatMap((item) => item.studio);
    return [...new Set(allTags)];
  };

  const uniqueTags = getUniqueTags(GamesData);

  return (
    <div className="FilterPanel">
      <h2 className="mb-3">Filters</h2>
      <Chips {...statusGroup} />

      <Accordion defaultExpanded sx={{ backgroundColor: "transparent" }}>
        <AccordionSummary
          expandIcon={<FaArrowDown className="accordionArrow" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Price
        </AccordionSummary>
        <AccordionDetails>
          <Slider
            min={0}
            max={maxPrice}
            name="price"
            value={price}
            onChange={handelPrice}
            valueLabelDisplay="auto"
            disableSwap
          />
          <p>
            {" "}
            The selected range is{" "}
            <strong>
              {price[0]} - {price[1]}
            </strong>
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded sx={{ backgroundColor: "transparent" }}>
        <AccordionSummary
          expandIcon={<FaArrowDown className="accordionArrow" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Studio
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {uniqueTags.map((ele, index) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={studioName.includes(ele)}
                    onChange={handelCheckbox}
                    name={`${ele}`}
                  />
                }
                label={`${ele}`}
                value={`${ele}`}
                key={index}
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded sx={{ backgroundColor: "transparent" }}>
        <AccordionSummary
          expandIcon={<FaArrowDown className="accordionArrow" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Number of Players
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Players</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="players"
                value={playersRange}
                label="Number of Players"
                onChange={handelPlayers}
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={8}>8</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded sx={{ backgroundColor: "transparent" }}>
        <AccordionSummary
          expandIcon={<FaArrowDown className="accordionArrow" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Platforms
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Platform</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="platform"
                value={platformName}
                label="platforms"
                onChange={handelPlatform}
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="PS">PS</MenuItem>
                <MenuItem value="Xbox">Xbox</MenuItem>
                <MenuItem value="PC">PC</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FilterPanel;
