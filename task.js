const fs = require("fs");
const chalk = require("chalk");
const saveTask = (task) => {
  const taskJSON = JSON.stringify(task);
  fs.writeFileSync("task.json", taskJSON);
};
const addTask = (title, description, type) => {
  //lấy danh sách từ file lên
  const allTasks = fechTask();
  //   console.log(allTasks);
  //tạo đông id
  //tạo đối đượng task
  const task = {
    id: Math.round(Math.random() * 10000).toString(),
    title: title,
    description: description,
    type: type,
  };
  //them task vao danh sach
  allTasks.push(task);
  //luu lai ds file
  fs.writeFileSync("task.json", JSON.stringify(allTasks));
};

const deleteTask = (id) => {
  const allTask = fechTask();

  const index = allTask.findIndex((task) => {
    return task.id === id;
  });
  if (index === -1) {
    console.log(chalk.red("Task not found"));
    return;
  }
  allTask.splice(index, 1);
  console.log(chalk.green("Task delete success"));
  fs.writeFileSync("task.json", JSON.stringify(allTask));
};
const updateTask = (id, title, description, type) => {
  const allTask = fechTask();
  const task = {
    id: id,
    title: title,
    description: description,
    type: type,
  };
  console.log(id);
  // const index = allTask.findIndex((task) => {
  //   return task.id === id;
  // });

  // if (index !== -1) {
  // allTask.push(task);
  //   return;
  // }
  // saveTask(allTask);
};
const fechTask = () => {
  try {
    const buffer = fs.readFileSync("task.json");
    // console.log(buffer);
    const taskJSON = buffer.toString();
    return JSON.parse(taskJSON);
  } catch (errors) {
    return [];
  }
};
const listAllTask = () => {
  const allTask = fechTask();

  allTask.forEach((item, index) => {
    console.log(chalk.red("id: "), item.id);
    console.log(chalk.green("title: "), item.title);
    console.log(chalk.blue("description: "), item.description);
    console.log(chalk.yellow("type: "), item.type);
    console.log("-------------------------------");
  });
};
const listByType = (type) => {
  const allTask = fechTask();
  allTask.find((item) => {
    console.log(chalk.red("Type :"), item.type);
    console.log("-----------------");
  });
};
const idDetail = (id) => {
  const allTask = fechTask();
  allTask.find((item) => {
    console.log(chalk.red("ID :"), item.id);
    console.log("-----------------");
  });
};
module.exports = {
  addTask,
  deleteTask,
  listAllTask,
  listByType,
  idDetail,
  updateTask,
};
