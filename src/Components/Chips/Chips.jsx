import "./Chips.css";
import { useEffect, useRef } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
// Material Ui
import { Box } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const Chips = ({
  price,
  maxPrice,
  setPrice,
  studioName,
  setStudioName,
  playersRange,
  setPlayersRange,
  platformName,
  setPlatformName,
}) => {
  
  let filtersDone = useRef(false);

  // Delete handelars to each state
  const handleDeletePrice = () => {
    setPrice([0, maxPrice]);
  };

  const handelDeleteCheckbox = (ele) => {
    setStudioName(studioName.filter((val) => val !== ele));
  };

  const handlePlayersRange = () => {
    setPlayersRange("All");
  };

  const handlePlatformName = () => {
    setPlatformName("All");
  };
  // Reset all fiters
  const isFiltersDone = () => {
    if (
      price[0] !== 0 ||
      price[1] !== maxPrice ||
      studioName.length > 0 ||
      playersRange !== "All" ||
      platformName !== "All"
    ) {
      filtersDone.current = true;
    } else {
      filtersDone.current = false;
    }
  };

  useEffect(isFiltersDone, [
    price,
    maxPrice,
    studioName,
    playersRange,
    platformName,
  ]);

  const handelReset = () => {
    handleDeletePrice();
    setStudioName([]);
    handlePlayersRange();
    handlePlatformName();
  };

  return (
    <div className="Chips">
      <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}>
        {price && (price[0] !== 0 || price[1] !== maxPrice) && (
          <Chip
            label={`Price: ${price[0]} - ${price[1]}`}
            variant="outlined"
            onDelete={handleDeletePrice}
          />
        )}

        {studioName.length > 0 &&
          studioName.map((ele, index) => (
            <Chip
              key={index}
              label={ele}
              variant="outlined"
              onDelete={() => handelDeleteCheckbox(ele)}
            />
          ))}

        {playersRange !== "All" && (
          <Chip
            label={`Players Range is ${playersRange}`}
            variant="outlined"
            onDelete={handlePlayersRange}
          />
        )}

        {platformName !== "All" && (
          <Chip
            label={`Platform is ${platformName}`}
            variant="outlined"
            onDelete={handlePlatformName}
          />
        )}
      </Stack>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 2,
        }}
      >
        {filtersDone.current && (
          <Chip
            label="Clear All"
            icon={<FaRegTrashCan />}
            color="error"
            variant="outlined"
            onClick={handelReset}
            sx={{ padding: 1 }}
          />
        )}
      </Box>
    </div>
  );
};

export default Chips;
