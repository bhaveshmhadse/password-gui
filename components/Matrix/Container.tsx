import { useEffect, useState } from "react";

import Matrix from "./Matrix";

import { MatrixData } from "./defaultData";
import { getShuffledMatrix, reload, reset } from "../../utils/Helpers";

const Container = () => {
  let [password, setPassword] = useState<any>("");
  let [matrix, setMatrix] = useState<any[]>(MatrixData);

  const authenticate = () => {
    const userPassword = localStorage.getItem("userpassword");

    if (JSON.stringify(userPassword) == JSON.stringify(password)) {
      alert("Authenticated!!! You are genuine");
      return;
    }

    alert("Please try again");
    reload();
  };

  const generatePattern = () => {
    localStorage.setItem("userpassword", password);

    setTimeout(() => {
      setPassword("");
      reload();
    }, 500);

    alert("Password Saved Successfully!!");
  };

  useEffect(() => {
    setMatrix(getShuffledMatrix(matrix));
  }, []);

  return (
    <div className='block items-center justify-center text-center'>
      <div className=' w-full flex justify-center items-center' style={{ height: "50vh" }}>
        <Matrix matrix={matrix} setMatrix={setMatrix} password={password} setPassword={setPassword} />
      </div>
      <div>
        <div className=' w-full flex justify-center items-center'>
          <button className='bg-white px-6 py-2 mx-2 rounded-md font-extrabold duration-300 hover:border-blue-700 hover:text-blue-700 hover:bg-blue-100 text-gray-500 ' onClick={generatePattern}>
            Generate Pattern
          </button>
          <button className='bg-white px-6 py-2 mx-2 rounded-md font-extrabold duration-300 hover:border-blue-700 hover:text-blue-700 hover:bg-blue-100 text-gray-500 ' onClick={authenticate}>
            Authenticate
          </button>
        </div>
        <div className='mt-2 w-full flex justify-center items-center'>
          <button className='bg-white px-6 py-2 mx-2 rounded-md font-extrabold duration-300 hover:border-red-700 hover:text-red-700 hover:bg-red-100 text-gray-500 ' onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Container;
