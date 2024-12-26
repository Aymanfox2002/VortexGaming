import { useState } from "react";
import "./ChangeLayout.css";
import { FaList, FaFilter, FaBorderAll, FaAngleDown } from "react-icons/fa6";
import {
  FaSortAlphaDown,
  FaSortAlphaUp,
  FaSortNumericDown,
  FaSortNumericUp,
} from "react-icons/fa";
import FilterPanel from "../FilterPanel/FilterPanel";
// Material UI
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  Box,
  Divider,
  Drawer,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import GamesData from "../../../Data/GamesData";

const ChangeLayout = ({
  fromProductsToFilter,
  layout,
  setLayout,
  sortMenu,
  setSortMenu,
  setItemsPerPage,
  itemsPerPage,
}) => {
  // select the large price and put it in "maxPrice" vriable
  const maxPrice = Math.max(...GamesData.map((ele) => ele.current_price));

  const [price, setPrice] = useState([0, maxPrice]);
  const [studioName, setStudioName] = useState([]);
  const [playersRange, setPlayersRange] = useState("All");
  const [platformName, setPlatformName] = useState("All");

  // Filter Drawer part
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpenDrawer(newOpen);
  };

  //*************************************
  //*******   Sort Data code    *********
  //*************************************
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleSortClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handelClickItem = (val, isReverse) => {
    setSortMenu([val, isReverse]);
    setAnchorEl(null);
  };

  //*************************************
  // The number of products in a page ***
  //*************************************
  const [paginationAnchorEl, setPaginationAnchorEl] = useState(null);
  const open_2 = Boolean(paginationAnchorEl);
  const handlePaginationClick = (event) => {
    setPaginationAnchorEl(event.currentTarget);
  };

  const handlePaginationClose = () => {
    setPaginationAnchorEl(null);
  };

  const handelClickPages = (val) => {
    setItemsPerPage(val);
    setPaginationAnchorEl(null);
  };

  return (
    <div className="ChangeLayout mt-2 d-flex justify-content-between p-3">
      <div className="ChangeFilter">
        <div className="filterDrawer">
          <button onClick={toggleDrawer(true)}>
            <FaFilter /> <span>Filter</span>
          </button>
          <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
            <Box sx={{ width: "350px" }}>
              <FilterPanel
                SetFilterGames={fromProductsToFilter}
                price={price}
                setPrice={setPrice}
                studioName={studioName}
                setStudioName={setStudioName}
                playersRange={playersRange}
                setPlayersRange={setPlayersRange}
                platformName={platformName}
                setPlatformName={setPlatformName}
                maxPrice={maxPrice}
              />
            </Box>
          </Drawer>
        </div>
      </div>

      <div className="displayPages">
        <Button
          id="basic-button-2"
          aria-controls={open_2 ? "basic-menu-2" : undefined}
          aria-haspopup="true"
          aria-expanded={open_2 ? "true" : undefined}
          endIcon={<FaAngleDown />}
          onClick={handlePaginationClick}
        >
          Display: {itemsPerPage} per page
        </Button>
        <Menu
          id="basic-menu2"
          anchorEl={paginationAnchorEl}
          open={open_2}
          onClose={handlePaginationClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={(e) => handelClickPages(9)}>9 Per Page</MenuItem>
          <MenuItem onClick={(e) => handelClickPages(12)}>12 Per Page </MenuItem>
          <MenuItem onClick={(e) => handelClickPages(16)}>16 Per Page </MenuItem>
        </Menu>
      </div>

      <div className="sort-by">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          endIcon={<FaAngleDown />}
          onClick={handleSortClick}
        >
          sort by
        </Button>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <Stack divider={<Divider orientation="horizontal" />}>
            <Box sx={{ width: 200 }}>
              <MenuItem onClick={(e) => handelClickItem("byName", false)}>
                <ListItemText>By Name</ListItemText>
                <ListItemIcon>
                  <FaSortAlphaDown />
                </ListItemIcon>
              </MenuItem>
            </Box>

            <Box>
              <MenuItem onClick={(e) => handelClickItem("byName", true)}>
                <ListItemText>By Name</ListItemText>
                <ListItemIcon>
                  <FaSortAlphaUp />
                </ListItemIcon>
              </MenuItem>
            </Box>

            <Box>
              <MenuItem onClick={(e) => handelClickItem("byPrice", false)}>
                <ListItemText>Number</ListItemText>
                <ListItemIcon>
                  <FaSortNumericDown />
                </ListItemIcon>
              </MenuItem>
            </Box>

            <Box>
              <MenuItem onClick={(e) => handelClickItem("byPrice", true)}>
                <ListItemText>Number</ListItemText>
                <ListItemIcon>
                  <FaSortNumericUp />
                </ListItemIcon>
              </MenuItem>
            </Box>
          </Stack>
        </Menu>
      </div>

      <div className="card_line_layout">
        <button
          className={layout === "grid" && "active"}
          onClick={() => setLayout("grid")}
        >
          <FaBorderAll />
        </button>
        <button
          className={layout === "lines" && "active"}
          onClick={() => setLayout("lines")}
        >
          <FaList />
        </button>
      </div>
    </div>
  );
};

export default ChangeLayout;
