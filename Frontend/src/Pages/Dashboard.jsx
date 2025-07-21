import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* Title */}
      <h1 className="text-xl text-center font-bold mt-5">
        🛡️ Authenticated. Access granted, commander!
      </h1>

      <div className="flex flex-col gap-3 p-1">
        <h2 className="text-lg font-semibold">Your Logs :-</h2>

        {/* table of logs */}
        <table className="w-full">
          <thead className="">
            <tr>
              <th>S.no</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td>1</td>
              <td> User has logged in</td>
              <td> 21 july 2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
