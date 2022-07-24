import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./styles.scss";
import Switch from "@mui/material/Switch";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { createBlog } from "../../features/blog";
import { Loader } from "../../components";

interface BlogInput {
  title: string;
  description: string;
  image: File[];
  status: boolean;
}

const blogSchema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
  image: yup
    .mixed()
    .test("required", "image is required", (value) => value.length > 0)
    .test("fileSize", "File Size is too large", (value) => {
      return value.length && value[0].size <= 5242880;
    })
    .test("fileType", "Only supports jpeg, jpg and png format", (value) => {
      return (
        value.length &&
        ["image/jpeg", "image/png", "image/jpg"].includes(value[0].type)
      );
    }),
  status: yup.boolean().required(),
});

const CreateBlogPage = () => {
  const dispatch = useAppDispatch();
  const { getBlog, loading } = useAppSelector((state) => state.blogReducer);

  console.log(getBlog);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BlogInput>({
    resolver: yupResolver(blogSchema),
  });

  const onSubmit: SubmitHandler<BlogInput> = (data) => {
    // console.log({ ...data, image: Array.from(data.image)[0] });
    const actImage = Array.from(data.image)[0];
    dispatch(createBlog({ ...data, image: actImage }));
    // reset();
  };

  if (loading) return <Loader />;

  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <div className="createblog">
      <div className="createblog__header">
        <h2>Create Blog</h2>
        <Link className="listbutton" to="/blog">
          List
        </Link>
      </div>
      <div className="createblog__form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <div>
              <input
                size={100}
                type="text"
                placeholder="Title"
                {...register("title", { required: true })}
              />
            </div>
            <p className="error-message">{errors.title?.message}</p>
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <div style={{ border: "none" }}>
              <input type="file" {...register("image", { required: true })} />
            </div>
            <p className="error-message">{errors.image?.message}</p>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <div>
              <textarea
                cols={100}
                rows={20}
                placeholder="description"
                {...register("description", { required: true })}
              ></textarea>
            </div>
            <p className="error-message">{errors.description?.message}</p>
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <div style={{ border: "none" }}>
              <Switch {...label} defaultChecked {...register("status")} />
            </div>
          </div>
          <div
            className="form-group"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { CreateBlogPage };
