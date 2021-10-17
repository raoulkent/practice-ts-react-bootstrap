type Props = {
  isFavourite: boolean;
  onClick: () => void;
};

const CardFavourite: React.FC<Props> = (props) => {
  const { isFavourite, onClick } = props;

  return isFavourite ? (
    <span
      className="CardFavourite"
      role="img"
      aria-label="A heart"
      onClick={onClick}
    >
      ❤️
    </span>
  ) : (
    <span
      className="CardFavourite"
      role="img"
      aria-label="A broken heart"
      onClick={onClick}
    >
      💔
    </span>
  );
};

export default CardFavourite;
