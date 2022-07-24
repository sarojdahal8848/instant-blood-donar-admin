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
import { CustomImage, Loader } from "../../components";
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
      <div className="listblog__table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  Image
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  Title
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  Status
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  Created At
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((val) => (
                <TableRow
                  key={val._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">
                    <CustomImage imageUrl={val.imageUrl} />
                  </TableCell>
                  <TableCell align="center">{val.title}</TableCell>
                  <TableCell align="center">
                    {val.isActive.toString()}
                  </TableCell>
                  <TableCell align="center">
                    {dateFormat(val.createdAt)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export { ListBlogPage };
