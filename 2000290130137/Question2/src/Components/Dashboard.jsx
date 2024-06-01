import React, { useEffect, useState } from "react";
import { fetchProduct } from "./action";
import Card from "./Card";

function Dashboard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchProduct().then((res) => {
      console.log(res);
      setData(res);
    });
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
      }}
    >
      {data &&
        data.map((elem, i) => {
          return (
            <Card
              key={i}
              productName={elem.productName}
              price={elem.price}
              rating={elem.rating}
              discount={elem.discount}
              availability={elem.availability === "out-of-stock" ? false : true}
              id={elem.id}
            />
          );
        })}
    </div>
  );
}

export default Dashboard;
