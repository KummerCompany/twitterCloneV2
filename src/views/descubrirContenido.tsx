import React from "react";
import "./styles.css";
import Grid from "@material-ui/core/Grid";
import InputSearch from "../componentes/inputSearch/inputSearch";

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
          <div className="div-input">
          <InputSearch />
          </div>
          <div className="feed-descrubrir">
            <div className="descubrir-titulo">
              <h2>What’s happening</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis delectus ut illum reiciendis maxime nihil hic ad, doloremque temporibus rem harum necessitatibus laborum vero! Modi suscipit similique quibusdam laudantium.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis delectus ut illum reiciendis maxime nihil hic ad, doloremque temporibus rem harum necessitatibus laborum vero! Modi suscipit similique quibusdam laudantium.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis delectus ut illum reiciendis maxime nihil hic ad, doloremque temporibus rem harum necessitatibus laborum vero! Modi suscipit similique quibusdam laudantium.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis delectus ut illum reiciendis maxime nihil hic ad, doloremque temporibus rem harum necessitatibus laborum vero! Modi suscipit similique quibusdam laudantium.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis delectus ut illum reiciendis maxime nihil hic ad, doloremque temporibus rem harum necessitatibus laborum vero! Modi suscipit similique quibusdam laudantium.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis delectus ut illum reiciendis maxime nihil hic ad, doloremque temporibus rem harum necessitatibus laborum vero! Modi suscipit similique quibusdam laudantium.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis delectus ut illum reiciendis maxime nihil hic ad, doloremque temporibus rem harum necessitatibus laborum vero! Modi suscipit similique quibusdam laudantium.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis delectus ut illum reiciendis maxime nihil hic ad, doloremque temporibus rem harum necessitatibus laborum vero! Modi suscipit similique quibusdam laudantium.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis delectus ut illum reiciendis maxime nihil hic ad, doloremque temporibus rem harum necessitatibus laborum vero! Modi suscipit similique quibusdam laudantium.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis delectus ut illum reiciendis maxime nihil hic ad, doloremque temporibus rem harum necessitatibus laborum vero! Modi suscipit similique quibusdam laudantium.</p>
          </div>
        </Grid>
      </Grid>
    </body>
  );
}

export default descubrirContenido;
