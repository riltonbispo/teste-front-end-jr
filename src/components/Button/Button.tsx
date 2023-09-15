import "./style.scss";

type Props = {
  label: string;
  bold?: boolean;
  type: "extra-large" | "large" | "medium" | "small";
  onClick?: () => void;
};

const Button = ({ ...props }: Props) => {
  return (
    <button
      className={`button ${props.bold && "bold"} ${props.type}`}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default Button;
