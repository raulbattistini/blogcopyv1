import React from "react";
import * as C from "./style";
import { PostCard } from "../../components/Card";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import blogLogo from '../../assets/svgs/logo.svg'
import Brightness4Icon from '@mui/icons-material/Brightness4';
export function Home() {
  return (
    <C.Container>
      <C.Header>
        <Grid container>
          <Grid item md={2}>
            <C.Logo>  <img  src={blogLogo} alt="rocketseatLogo"/>  </C.Logo>
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
          <C.ThemeSet><Brightness4Icon/></C.ThemeSet>
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
