import * as React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { FixedSizeList as List } from "react-window";
import Cards from "./Components/Cards";

export default function VirtualList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api();
  });

  const api = () => {
    axios
      .get("https://dummyjson.com/products?limit=100")
      .then((res) => setData(res.data.products))
      .catch((err) => console.error(err));
  };

  const renderData = ({ index, style }) => {
    const item = data[index];

    return (
      <div
        style={{
          ...style,
          display: "flex",
          placeItems: "center",
          padding: "1rem",
        }}
      >
        <Cards
          title={item.title}
          price={item.price}
          discountPercentage={item.discountPercentage}
          rating={item.rating}
          stock={item.stock}
        />
      </div>
    );
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", paddingTop: "4rem" }}
    >
      <div>
        <List height={600} width={900} itemSize={70} itemCount={data.length}>
          {renderData}
        </List>
      </div>

      {/* {data.map((item) => {
        return (
          <List height={700} width={700} itemSize={50} itemCount={data.length}>
              <h1>{item.title}</h1>
            </div>
          </List>
        );
      })} */}
    </div>
  );
}
