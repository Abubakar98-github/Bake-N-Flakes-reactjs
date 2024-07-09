import React, { useState } from "react";

export default function Sort() {
  const [selectedSort, setSelectedSort] = useState("all");

  const handleSortChange = (e: any) => {
    setSelectedSort(e.target.value);
  };

  return (
    <>
      <div className="flex justify-center items-center mt-6">
        <div className="ml-3">
          <label htmlFor="">Sort by:</label>
          <div className="flex mt-3">
            <label htmlFor="all" className="mr-2">
              All
              <input
                type="radio"
                id="all"
                name="sort"
                value="all"
                checked={selectedSort === "all"}
                onChange={handleSortChange}
                className="ml-1"
              />
            </label>
            <label htmlFor="bestseller">
              Best Seller
              <input
                type="radio"
                id="bestseller"
                name="sort"
                value="bestseller"
                checked={selectedSort === "bestseller"}
                onChange={handleSortChange}
                className="ml-1"
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
