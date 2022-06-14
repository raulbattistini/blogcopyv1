import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import * as C from "./style";
export function PostCard() {
  return (
    <C.Container>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Post Title
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Post content
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </C.Container>
  );
}
