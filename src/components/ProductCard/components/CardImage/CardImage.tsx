import "./styles.css";

type Props = {
  url: string;
  alt: string;
};

const CardImage: React.FC<Props> = (props) => {
  const { url, alt } = props;
  return <img className="CardImage" src={url} alt={alt} />;
};

export default CardImage;
