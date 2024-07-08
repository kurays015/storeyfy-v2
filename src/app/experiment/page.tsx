"use client";
import { categories } from "@/lib/categories";
import { useState } from "react";

export default function ExperimentPage() {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <h1>Experiment page!!</h1>
      <select
        name=""
        id=""
        onChange={(e) => {
          setIndex(parseInt(e.target.value));
          console.log(e.target.value);
        }}
      >
        <option value="">Select an option</option>

        {categories.map((category, index) => (
          <option key={category.category} value={index}>
            {category.category}
          </option>
        ))}
      </select>

      <select name="" id="" disabled={!index}>
        <option value="">Select an option</option>
        {categories[index]?.subCategories?.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
