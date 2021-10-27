import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
//Image
import searchIcon from "../../images/search-icon.svg";

//styles
import { Warpper, Content } from "./SearchBar.styles";

const SearchBar = ({ setSearchTeam }) => {
  const [state, setState] = useState("");
  const inital = useRef(true);

  useEffect(() => {
    if (inital.current) {
      inital.current = false;
      return;
    }

    const timer = setTimeout(() => {
      setSearchTeam(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTeam, state]);

  return (
    <Warpper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={(event) => setState(event.currentTarget.value)}
          value={state}
        />
      </Content>
    </Warpper>
  );
};

SearchBar.propTypes = {
  callback: PropTypes.func,
};

export default SearchBar;
