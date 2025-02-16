import { FC } from "react";
import "../styles/TodoFilterStyles.css";
import React from 'react';
import { TodoFilterProps } from "../types/todo";
import Switch from "./ThemeSwitch.tsx";

/**
 * Used for the filter box component
 */
const TodoFilters: FC<TodoFilterProps> = ({ currentFilter, setFilter }) => {
  return (
    <>
       
    <div className="project-filters-box" >
    <Switch/>
      {["View All", "Completed", "Pending"].map((filter) => (
        <div className="content" key={filter}>
          <label className="checkBox">
            <input
              id={filter}
              type="radio"
              name="todoFilter"
              checked={currentFilter === filter}
              onChange={() => setFilter(filter)}
            />
            <div className="transition"></div>
          </label>
          <div className="filter-name">{filter.replace(/Apps$/, " Apps")}</div>
        </div>
      ))}
    </div>
    </>
  );
};

export default TodoFilters;
