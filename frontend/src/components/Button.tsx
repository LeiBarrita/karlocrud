const Button = ({ text }: { text: string }) => {
  return (
    <button className="p-1 bg-emerald-400" type="button">
      {text}
    </button>
  );
};

export default Button;
