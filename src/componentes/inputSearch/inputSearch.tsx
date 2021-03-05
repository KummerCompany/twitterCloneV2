import React, { useEffect, useState } from 'react'
import { Box } from '@material-ui/core'
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import './inputSearch.css'


function inputSearch() {
  const  [color, setColor] = useState(("gray"));

  useEffect(() => {
    const changeColor =() =>{
      if(<InputBase onFocus = {}/>){
        setColor("blue");
      }
    }
  }, [color])

  


    return (
        <div className="search-input">
            <Box>
              <SearchIcon className="descubrir-icon"/>
              </Box>
              <Box>
            <InputBase
              onClick = {changeColor}
              onFocus = {}
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
            />
            </Box>
          </div>
    )
}

export default inputSearch
