import React from "react";
import useFetch from "../Utils/useFetch";

const tableHeaders = ["S.No", "Date", "Device Info", "Message"];

const Dashboard = () => {
  const { logs, exist } = useFetch();

  // load the data
  if (exist === null)
    return (
      <div className="w-full h-screen flex justify-center items-center text-xl font-semibold text-gray-600">
        Checking authentication...
      </div>
    );

  return (
    <div className="flex flex-col gap-5 md:p-2 lg:p-5">
      {/* Title */}
      <h1 className="text-xl text-center font-bold mt-5 lg:text-4xl">
        🛡️ Authenticated. Access granted, commander!
      </h1>

      <div className="flex flex-col gap-3 p-1">
        <h2 className="text-lg font-bold lg:text-2xl">Your Logs :-</h2>

        {/* table of logs */}
        <div className=" overflow-x-auto rounded-xl overflow-hidden">
          <table className="w-full text-sm ">
            <thead className=" bg-[#004030] text-white">
              <tr className="">
                {tableHeaders.map((item, index) => {
                  return (
                    <th
                      key={index}
                      className="px-4 py-2 whitespace-nowrap border-x border-gray-400"
                    >
                      {item}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="bg-[#DCD0A8] ">
              {logs.map((item, index) => {
                const readableDate = new Date(item.date).toLocaleString();

                return (
                  <tr
                    key={index}
                    className="text-center whitespace-nowrap font-semibold border-b border-gray-400"
                  >
                    <td className="py-2 px-4 border-r border-gray-400">
                      {index + 1}
                    </td>
                    <td className="py-2 px-4 border-r border-gray-400">
                      {" "}
                      {readableDate}
                    </td>
                    <td className="py-2 px-4 border-r border-gray-400">
                      {" "}
                      {item.userAgent}
                    </td>
                    <td className="py-2 px-4 border-r border-gray-400">
                      {" "}
                      {item.message}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
