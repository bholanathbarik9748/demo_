import React, { useEffect, useState } from "react";
import axios from "axios";

const TaskList = () => {
  const [data, setData] = useState([]);

  const deleteHandler = async (id) => {
    const res = await axios.get(`http://localhost:4000/delete/${id}`);
    setData(res.data);
  };

  useEffect(() => {
    const fetchTask = async () => {
      const res = await axios.get("http://localhost:4000/task");
      console.log("res", res);
      setData(res.data);
    };

    fetchTask();
  }, []);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-2 mx-auto">
          <div className="flex flex-wrap -m-4">
            {data &&
              data?.data?.length > 0 &&
              data?.data?.map((ele, ind) => (
                <>
                  {console.log("ele", ele)}
                  <div key={ind} className="p-4 md:w-1/3">
                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                      <div className="flex items-center mb-3">
                        <h2 className="text-gray-900 text-lg title-font font-medium">
                          {ele.Task}
                        </h2>
                      </div>
                      <div className="flex-grow">
                        <a
                          onClick={() => deleteHandler(ele._id)}
                          className="mt-3 text-indigo-500 inline-flex items-center cur"
                        >
                          delete
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskList;
