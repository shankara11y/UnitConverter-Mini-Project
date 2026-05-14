function UnitSelect(props) {
  return (
    <div>
      <label className="font-semibold">
        {props.label}
      </label>
      <select
        value={props.selectedUnit}
        onChange={(e) => props.setSelectedUnit(e.target.value)}
        className="w-full border p-3 rounded-lg mb-4 mt-2"
      >
        {
          props.units.map((unit) => (
            <option key={unit}>
              {unit}
            </option>
          ))
        }
      </select>
    </div>
  );
}
export default UnitSelect;