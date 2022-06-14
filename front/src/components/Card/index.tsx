import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import {
  Button,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@mui/material";
import * as C from "./style";
import { api } from "../../services/api";
export function PostCard() {
  //usestate -> 2
  const [postData, setPostData] = useState([]);
  const [postFields, getPostFields] = useState({
    id: 0,
    title: "",
    content: "",
  });

  // useEffect -> 1
  useEffect(() => {
    loadPost();
  }, []);

  // funcoes

  //http

  const loadPost = async () => {
    const res = await api.get("/posts");
    setPostData(res.data);
  };

  const GetSinglePost = async (id: any) => {
    const res = await api.get(`/posts/${id}`);
    const navigate = useNavigate();
    navigate("/posts" + id) 
  };
  return (
    <C.Container>
      <TableContainer>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="center">Content</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {postData?.map((postsInfo: any, key: number) => {
            return (
              <>
                <TableRow key={postsInfo.id}></TableRow>
                <Button onClick={GetSinglePost}> <TableCell component="th" scope="row">{postsInfo.title} </TableCell>
                <TableCell  align="center">  {postsInfo.content}  </TableCell></Button>
              </>
            );
          })}
        </TableBody>
      </TableContainer>
    </C.Container>
  );
}
