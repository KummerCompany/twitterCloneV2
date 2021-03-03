import React from 'react'
import { Box } from '@material-ui/core'
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import './inputSearch.css'

function inputSearch() {
    return (
        <div className="search-input">
            <Box>
              <SearchIcon className="descubrir-icon"/>
              </Box>
              <Box>
            <InputBase
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
            />
            </Box>
          </div>
    )
}

export default inputSearch
