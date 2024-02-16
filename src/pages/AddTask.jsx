import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddTask = () => {
  const nav = useNavigate();
  const [task, setTask] = useState("");
  const [error, setError] = useState(false);

  const submitHandler = () => {
    if (!task) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    axios.post("http://localhost:4000/add/task", { task: task });
  };

  return (
    <>
      <section className="bg-gray-200">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-gray-100 rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Add task
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="name@company.com"
                    required=""
                    onChange={(e) => setTask(e.target.value)}
                  />
                </div>
                {error && <p> Invalid task input</p>}
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={submitHandler}
                >
                  Add Task
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddTask;
