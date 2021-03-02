import React from "react";
import "./styles.css";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Box from '@material-ui/core/Box';

function descubrirContenido() {
  return (
    <body>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <div></div>
        </Grid>
        <Grid item xs={6}>
          <div></div>
        </Grid>
        <Grid item xs={3}>
          <div className="search-input">
            <Box>
              <SearchIcon />
              </Box>
              <Box>
            <InputBase
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
            />
            </Box>
          </div>
          <div>
              <h2>What’s happening</h2>
          </div>
            <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            sint ut quo quidem a, magni aliquid nobis, eum libero laborum
            placeat laudantium cupiditate sunt voluptatem dolore hic quasi
            deserunt. Veritatis? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Soluta sint ut quo quidem a, magni aliquid nobis,
            eum libero laborum placeat laudantium cupiditate sunt voluptatem
            dolore hic quasi deserunt. Veritatis? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Soluta sint ut quo quidem a, magni
            aliquid nobis, eum libero laborum placeat laudantium cupiditate sunt
            voluptatem dolore hic quasi deserunt. Veritatis? Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Soluta sint ut quo quidem a,
            magni aliquid nobis, eum libero laborum placeat laudantium
            cupiditate sunt voluptatem dolore hic quasi deserunt. Veritatis?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            sint ut quo quidem a, magni aliquid nobis, eum libero laborum
            placeat laudantium cupiditate sunt voluptatem dolore hic quasi
            deserunt. Veritatis? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Soluta sint ut quo quidem a, magni aliquid nobis,
            eum libero laborum placeat laudantium cupiditate sunt voluptatem
            dolore hic quasi deserunt. Veritatis? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Soluta sint ut quo quidem a, magni
            aliquid nobis, eum libero laborum placeat laudantium cupiditate sunt
            voluptatem dolore hic quasi deserunt. Veritatis? Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Soluta sint ut quo quidem a,
            magni aliquid nobis, eum libero laborum placeat laudantium
            cupiditate sunt voluptatem dolore hic quasi deserunt. Veritatis?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            sint ut quo quidem a, magni aliquid nobis, eum libero laborum
            placeat laudantium cupiditate sunt voluptatem dolore hic quasi
            deserunt. Veritatis?
          </div>
        </Grid>
      </Grid>
    </body>
  );
}

export default descubrirContenido;
