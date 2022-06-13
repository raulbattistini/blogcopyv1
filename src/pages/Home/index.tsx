import React from "react";
import * as C from "./style";
import { PostCard } from "../../components/Card";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
export function Home() {
  return (
    <C.Container>
      <C.Header>
        <Grid container>
          <Grid item md={1}>
            <C.Logo> Logo </C.Logo>
          </Grid>
          <Grid item md={1}>
            <div> Blog </div>
          </Grid>
          <Grid item md={1}>
            <Link to="/" className="upperButtons">
              {" "}
              <div> Frontend </div>{" "}
            </Link>
          </Grid>
          <Grid item md={1}>
            <Link to="/" className="upperButtons">
              {" "}
              <div> Backend </div>{" "}
            </Link>
          </Grid>
          <Grid item md={1}>
            <Link to="/" className="upperButtons">
              {" "}
              <div> Mobile </div>{" "}
            </Link>
          </Grid>
          <Grid item md={1}>
            <Link to="/" className="upperButtons">
              <div> Carreira </div>{" "}
            </Link>
          </Grid>
          <Grid item md={6}>
            <C.ThemeSet className="theme"> Sol </C.ThemeSet>
          </Grid>
        </Grid>
      </C.Header>
      <C.Section>Keyword</C.Section>
      <Grid container marginTop={10}>
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
