function Sidebar(props) {
  return (
    <div className="w-[250px] bg-green-200 p-4">

      <h2 className="text-2xl font-bold mb-4">
        Categories
      </h2>
      {
        Object.keys(props.units).map((item) => (
          <button
            key={item}
            onClick={() => props.setCategory(item)}
            className="block w-full mb-3 p-4 rounded-xl bg-white shadow-md hover:scale-105 hover:bg-green-100 transition-all duration-300 font-semibold"
          >
            {item}
          </button>

        ))
      }

    </div>

  );
}
export default Sidebar;