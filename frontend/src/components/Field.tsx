interface FieldProps {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Field = ({ type, value, onChange }: FieldProps) => {
  return (
    <input
      className="bg-white rounded-md border border-gray-300"
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default Field;
