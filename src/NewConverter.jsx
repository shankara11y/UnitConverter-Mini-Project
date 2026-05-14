import { useState } from "react";

import Sidebar from "./components/Sidebar";
import ConverterCard from "./components/ConverterCard";
import Navbar from "./components/Navbar";
const units = {

  Temperature: [
    "Celsius",
    "Fahrenheit"
  ],

  Length: [
    "Kilometers",
    "Miles"
  ]

};

function NewConverter() {

  const [category, setCategory] = useState("Temperature");

  const [fromUnit, setFromUnit] = useState("Celsius");

  const [toUnit, setToUnit] = useState("Fahrenheit");

  const [value, setValue] = useState("");

  let result = "";

  if (
    fromUnit === "Celsius" &&
    toUnit === "Fahrenheit"
  ) {

    result = ((value * 9 / 5) + 32).toFixed(2);

  }

  else if (
    fromUnit === "Fahrenheit" &&
    toUnit === "Celsius"
  ) {

    result = ((value - 32) * 5 / 9).toFixed(2);

  }

  else if (
    fromUnit === "Kilometers" &&
    toUnit === "Miles"
  ) {

    result = (value * 0.621371).toFixed(2);

  }

  else if (
    fromUnit === "Miles" &&
    toUnit === "Kilometers"
  ) {

    result = (value * 1.60934).toFixed(2);

  }

  else {

    result = value;

  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200">

      <Navbar />

      <div className="flex min-h-[calc(100vh-70px)]">
        <Sidebar
          units={units}
          setCategory={setCategory}
        />

        <div className="flex-1 flex justify-center items-start pt-40">
          <ConverterCard
            category={category}

            value={value}
            setValue={setValue}

            fromUnit={fromUnit}
            setFromUnit={setFromUnit}

            toUnit={toUnit}
            setToUnit={setToUnit}

            units={units}

            result={result}
          />

        </div>

      </div>

    </div>

  );
}

export default NewConverter;