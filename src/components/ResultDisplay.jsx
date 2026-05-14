function ResultDisplay(props) {
  return (
    <div className="mt-6 bg-green-100 p-5 rounded-2xl text-center shadow-inner">
  <h2 className="text-xl font-bold text-green-900">
    Result: {props.result}
  </h2>
</div>
  );
}
export default ResultDisplay;