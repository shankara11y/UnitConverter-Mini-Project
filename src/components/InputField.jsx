function InputField(props) {
  return (
    <input
      type="number"
      value={props.value}
      onChange={(e) => props.setValue(e.target.value)}
      placeholder="Enter value"
      className="w-full border border-gray-300 p-4 rounded-xl mb-4 mt-2 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all"
    />
  );
}
export default InputField;