import "./style.scss";
type Props = {
  title: string;
  subtitle?: string;
};

const Separator = ({ title, subtitle }: Props) => {
  return (
    <div className="separator__container">
      <hr className="separator__row" />
      <div className="separator__texts">
        <h2 className="separator__title">{title}</h2>
        <span className="separator__subtitle">{subtitle}</span>
      </div>
      <hr className="separator__row" />
    </div>
  );
};

export default Separator;
