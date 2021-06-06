import React from "react";
import Layout from "../components/Layout";

import TaskList from "../components/TasksList";

const HomeScreen = () => {
  return (
    <Layout>
      <TaskList />
    </Layout>
  );
};

export default HomeScreen;
