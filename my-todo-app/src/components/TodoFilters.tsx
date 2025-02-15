import { useState } from "react";
import "../styles/TodoFilterStyles.css";
import React from 'react';

const TodoFilters = () => {
  const [selectedFilter, setSelectedFilter] = useState("View All");

  return (
    <div className="project-filters-box" data-aos="fade-up">
      {["View All", "Completed", "Pending"].map((filter) => (
        <div className="content" key={filter}>
          <label className="checkBox">
            <input
              id={filter}
              type="radio"
              name="todoFilter"
              checked={selectedFilter === filter}
              onChange={() => setSelectedFilter(filter)}
            />
            <div className="transition"></div>
          </label>
          <div className="filter-name">{filter.replace(/Apps$/, " Apps")}</div>
        </div>
      ))}
    </div>
  );
};

export default TodoFilters;
