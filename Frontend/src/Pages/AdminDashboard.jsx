import React from "react";
import useFetch from "../Utils/useFetch";

const tableHeaders = [
  "S.No",
  "Name",
  "Email",
  "Role",
  "Joined At",
  "Total Logs",
];

const users = [
  {
    name: "Alice Johnson",
    email: "alice.j@example.com",
    role: "admin",
    joinedAt: "2024-10-05",
    logs: 47,
  },
  {
    name: "Rahul Mehta",
    email: "rahul.m@demo.com",
    role: "user",
    joinedAt: "2024-11-12",
    logs: 23,
  },
  {
    name: "Sofia Martins",
    email: "sofia.m@demo.com",
    role: "user",
    joinedAt: "2025-01-20",
    logs: 31,
  },
  {
    name: "Leo Nakamura",
    email: "leo.naka@demo.com",
    role: "admin",
    joinedAt: "2024-09-15",
    logs: 65,
  },
  {
    name: "Emily Carter",
    email: "emily.c@demo.com",
    role: "user",
    joinedAt: "2025-02-02",
    logs: 12,
  },
  {
    name: "Mohammed Zahir",
    email: "zahir.m@demo.com",
    role: "user",
    joinedAt: "2024-12-28",
    logs: 19,
  },
  {
    name: "Isabella Rossi",
    email: "bella.r@demo.com",
    role: "user",
    joinedAt: "2025-03-10",
    logs: 27,
  },
  {
    name: "Kevin Park",
    email: "kevin.p@demo.com",
    role: "admin",
    joinedAt: "2025-04-08",
    logs: 53,
  },
  {
    name: "Ananya Verma",
    email: "ananya.v@demo.com",
    role: "user",
    joinedAt: "2025-01-30",
    logs: 9,
  },
  {
    name: "Carlos Mendez",
    email: "carlos.m@demo.com",
    role: "user",
    joinedAt: "2025-05-22",
    logs: 36,
  },
];

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-5 md:p-2 lg:p-5">
      {/* Title */}
      <h1 className="text-xl text-center font-bold mt-5 lg:text-4xl">
        👑 Privilege verified. Welcome to the control room, Commander.
      </h1>

      <div className="flex flex-col gap-3 p-1">
        <h2 className="text-lg font-bold lg:text-2xl">
          Here is your knowledge :-
        </h2>

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
              {users.map((item, index) => {
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
                      {item.name}
                    </td>
                    <td className="py-2 px-4 border-r border-gray-400">
                      {" "}
                      {item.email}
                    </td>
                    <td className="py-2 px-4 border-r border-gray-400">
                      {" "}
                      {item.role}
                    </td>
                    <td className="py-2 px-4 border-r border-gray-400">
                      {" "}
                      {item.joinedAt}
                    </td>
                    <td className="py-2 px-4 border-r border-gray-400">
                      {" "}
                      {item.logs}
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
