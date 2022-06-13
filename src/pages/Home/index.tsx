import React from "react";
import * as C from "./style";
import { PostCard } from "../../components/Card";
import { Grid } from "@mui/material";
export function Home() {
  return (
    <C.Container>
      <C.Header>
        <Grid container>
          <Grid item md={1}>
           <div> Logo </div>
          </Grid>
          <Grid item md={1}>
            <div> Blog </div>
          </Grid>
          <Grid item md={1}>
            <div> Frontend </div>
          </Grid>
          <Grid item md={1}>
            <div> Backend </div>
          </Grid>
          <Grid item md={1}>
            <div> Mobile </div>
          </Grid>
          <Grid item md={1}>
            <div> Carreira </div>
          </Grid>
          <Grid item md={6}>
            <C.ThemeSet className="theme"> Sol </C.ThemeSet>
          </Grid>
        </Grid>
      </C.Header>
      <C.Section>
        Keyword
      </C.Section>
      <Grid container>
      <Grid item md={4}>
      <PostCard />
      </Grid>
      <Grid item md={4}>
      <PostCard />
      </Grid>      
      <Grid item md={4}>
      <PostCard />
      </Grid>
      </Grid>
    </C.Container>
  );
}
