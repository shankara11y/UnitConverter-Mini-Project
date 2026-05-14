import InputField from "./InputField";
import UnitSelect from "./UnitSelect";
import ResultDisplay from "./ResultDisplay";

function ConverterCard(props) {
  return (
    <div className="bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-[550px] border border-white/40 hover:shadow-green-200
hover:-translate-y-1
transition-all duration-300">

      <h1 className="text-4xl font-bold mb-6 text-center ">
        {props.category} Converter
      </h1>

      <InputField
        value={props.value}
        setValue={props.setValue}
      />

      <UnitSelect
        label="From"
        selectedUnit={props.fromUnit}
        setSelectedUnit={props.setFromUnit}
        units={props.units[props.category]}
      />

      <UnitSelect
        label="To"
        selectedUnit={props.toUnit}
        setSelectedUnit={props.setToUnit}
        units={props.units[props.category]}
      />

      <ResultDisplay
        result={props.result}
      />

    </div>
  );
}
export default ConverterCard;