import "./styles.css";

type Props = {
  extraClassName?: string;
};

const CardText: React.FC<Props> = (props) => {
  const { children, extraClassName } = props;
  const className = `CardText ${extraClassName}`;
  return <p className={className}>{children}</p>;
};

export default CardText;
