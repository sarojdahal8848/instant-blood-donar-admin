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
import { getAllBlog } from "../../features/blog";
import { CustomImage, Loader } from "../../components";
import { dateFormat } from "../../utils";

export default function ListBlogPage() {
  const dispatch = useAppDispatch();
  const { entity, loading, error } = useAppSelector(
    (state) => state.getAllBlog
  );

  const { data } = entity;

  useEffect(() => {
    dispatch(getAllBlog());
  }, []);

  if (loading) return <Loader />;
  return (
    <div className="listblog">
      <div className="listblog__header">
        <h2>Blog List</h2>
        <a className="createbutton">Create</a>
      </div>
      <div className="listblog__table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Image</TableCell>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Created At</TableCell>
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
