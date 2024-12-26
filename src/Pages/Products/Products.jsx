import { useEffect, useState } from "react";
import {
  ChangeLayout,
  Footer,
  Header,
  Hero,
  ProductsCards,
} from "../../Sections";
import "./Products.css";
import GamesData from "../../Data/GamesData";
import { Pagination, Stack } from "@mui/material";
import { ToTop } from "../../Components";

const Products = () => {
  // **************************************************************************************************************
  // This function will be passed to 'filterPanel' through the 'ChangeLayout' and called when filtering happens ***
  // **************************************************************************************************************
  const [filterGames, SetFilterGames] = useState(GamesData);
  const [animateCards, setAnimateCards] = useState(false);

  const handleFilterGames = (filteredGames) => {
    SetFilterGames(filteredGames);
    setAnimateCards(true);
    setTimeout(() => setAnimateCards(false), 500);
  };

  //********************************
  // This status to change layout **
  //********************************
  const [layout, setLayout] = useState("grid");

  // ***********************************************************************************
  // This value pass to "ChangeLayout" to control sorting data (sort Type, isReverse) **
  // ***********************************************************************************
  const [sortMenu, setSortMenu] = useState(["", false]);

  // sort the data depand on "sortMenu" prop
  // let [result, setResult] = useState([]);

  const handelSortFilter = () => {
    const sortedFilterGames = [...filterGames];
    if (sortMenu[0] === "byName") {
      sortedFilterGames.sort((a, b) => a.title.localeCompare(b.title));

      if (sortMenu[1] === true) {
        sortedFilterGames.sort((a, b) => b.title.localeCompare(a.title));
      }
      //  setResult(sortedFilterGames)
    }

    if (sortMenu[0] === "byPrice") {
      sortedFilterGames.sort((a, b) => a.current_price - b.current_price);

      if (sortMenu[1] === true) {
        sortedFilterGames.sort((a, b) => b.current_price - a.current_price);
      }
      //  setResult(sortedFilterGames)
    }

    return sortedFilterGames;
  };

  useEffect(() => {
    handelSortFilter();
  }, [sortMenu, filterGames]);

  // *****************************
  // Pagination code 1️⃣2️⃣3️⃣4️⃣ **
  // *****************************
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(16);

  // Calculate the (First & Last) indexes of products and slice it
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  let totalGames = handelSortFilter(filterGames);
  const currentProducts = totalGames.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Calculate total pages needed
  const totalPages = Math.ceil(filterGames.length / itemsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // drive you to top of the page
  const handelToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {}, 1000);
  };

  return (
    <>
      <ToTop />
      <Header />
      <div className="Products container">
        <div className="row">
          <div className="cards-col col-12">
            <Hero />
            <ChangeLayout
              fromProductsToFilter={handleFilterGames}
              layout={layout}
              setLayout={setLayout}
              sortMenu={sortMenu}
              setSortMenu={setSortMenu}
              setItemsPerPage={setItemsPerPage}
              itemsPerPage={itemsPerPage}
            />
            <ProductsCards
              filterGames={currentProducts}
              animate={animateCards}
              layout={layout}
              sortMenu={sortMenu}
            />
            <Stack
              spacing={2}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: "30px",
                marginBottom: "30px",
              }}
            >
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                onClick={handelToTop}
                variant="outlined"
                size="large"
              />
            </Stack>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
