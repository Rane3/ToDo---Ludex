import React, { useEffect, useState } from "react";
import styled from "styled-components";
// from https://uiverse.io/satyamchaudharydev/shy-earwig-18
const Switch = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    return (localStorage.getItem("theme") as "dark" | "light") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <StyledWrapper>
      <label className="switch">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <span className="slider" />
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .switch {
    display: block;
    --width-of-switch: 3.5em;
    --height-of-switch: 2em;
    --size-of-icon: 1.4em;
    --slider-offset: 0.3em;
    position: relative;
    width: var(--width-of-switch);
    height: var(--height-of-switch);
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f4f4f5;
    transition: 0.4s;
    border-radius: 30px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: var(--size-of-icon, 1.4em);
    width: var(--size-of-icon, 1.4em);
    border-radius: 20px;
    left: var(--slider-offset, 0.3em);
    top: 50%;
    transform: translateY(-50%);
    background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #303136;
  }

  input:checked + .slider:before {
    left: calc(100% - (var(--size-of-icon, 1.4em) + var(--slider-offset, 0.3em)));
    background: #303136;
    box-shadow: inset -3px -2px 5px -2px #8983f7, inset -10px -4px 0 0 #a3dafb;
  }
`;

export default Switch;
