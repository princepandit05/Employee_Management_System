import React from "react";
import Header from "../Header/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDasboard = () => {
  return (
    <div className="h-screen w-full p-7">
      <Header />
      <CreateTask/>
      <AllTask/>
    </div>
  );
};

export default AdminDasboard;
