import "./customImage.scss";

interface ImageData {
  imageUrl: string;
}
const CustomImage = ({ imageUrl }: ImageData) => {
  return <img className="customImage" src={imageUrl} alt="blog-image" />;
};

export { CustomImage };
