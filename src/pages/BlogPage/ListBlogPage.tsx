import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./styles.scss";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect } from "react";
import { CustomImage, Loader, CustomTable } from "../../components";
import { dateFormat } from "../../utils";
import { Link } from "react-router-dom";
import { getAllBlog } from "../../features/blog";

export default function ListBlogPage() {
  const dispatch = useAppDispatch();
  const { blogs, loading, error } = useAppSelector(
    (state) => state.blogReducer
  );

  const { data } = blogs;

  useEffect(() => {
    dispatch(getAllBlog());
  }, []);

  if (loading) return <Loader />;
  return (
    <div className="listblog">
      <div className="listblog__header">
        <h2>Blog List</h2>
        <Link className="createbutton" to="/blog/create">
          Create
        </Link>
      </div>
      <div className="listblog__table"></div>
    </div>
  );
}

export { ListBlogPage };
