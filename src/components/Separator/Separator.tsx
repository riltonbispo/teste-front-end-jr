import "./style.scss";
type Props = {
  title: string;
};

const Separator = ({ title }: Props) => {
  return (
    <div className="separator__container">
      <hr className="separator__row" />
      <h2 className="separator__title">{title}</h2>
      <hr className="separator__row" />
    </div>
  );
};

export default Separator;
