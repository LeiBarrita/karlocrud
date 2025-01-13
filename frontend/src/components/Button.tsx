const Button = ({ text, onClick }: { text: string; onClick?: () => void }) => {
  return (
    <button className="p-1 bg-emerald-400" type="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
