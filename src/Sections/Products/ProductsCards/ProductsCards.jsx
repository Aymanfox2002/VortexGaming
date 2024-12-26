import "./ProductsCards.css";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { ProductLine } from "../../../Components";

const ProductsCards = ({ filterGames, animate, layout }) => {
  

  return (
    <div className={`ProductsCards row mt-2 ${animate ? "fade-in" : ""}`}>
      {filterGames.map((ele, index) =>
        layout === "grid" ? (
          <ProductCard
            key={index}
            img={ele.img}
            currentPrice={ele.current_price}
            priceBefore={ele.price_before_discount}
            title={ele.title}
            platform={ele.platform}
            gameType={ele.game_type}
          />
        ) : (
          <ProductLine
            key={index}
            img={ele.img}
            currentPrice={ele.current_price}
            priceBefore={ele.price_before_discount}
            title={ele.title}
            platform={ele.platform}
            gameType={ele.game_type}
            studio={ele.studio}
            size={ele.size}
          />
        )
      )}
    </div>
  );
};

export default ProductsCards;
