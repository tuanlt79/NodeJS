const fs = require("fs");
const chalk = require("chalk");
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

module.exports = {
  addTask,
  deleteTask,
};
