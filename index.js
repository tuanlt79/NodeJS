const yargs = require("yargs");
const { addTask, deleteTask } = require("./task");
//command add task
yargs.command({
  command: "add",
  builder: {
    title: {
      type: "string",
      demandOption: true,
    },
    description: {
      type: "string",
      demandOption: true,
    },
    type: {
      type: "string",
      demandOption: true,
    },
  },
  handler: function (args) {
    addTask(args.title, args.description, args.type);
  },
});
//command delete task
yargs.command({
  command: "delete",
  builder: {
    id: {
      type: "string",
    },
  },
  handler: function (args) {
    deleteTask(args.id);
  },
});
//command update task
yargs.command({
  command: "update",
  builder: {
    id: {
      type: "string",
    },
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
    type: {
      type: "string",
    },
  },
  handler: function (args) {
    console.log("update", args);
  },
});
//view all task
yargs.command({
  command: "list",

  handler: function (args) {
    console.log("list", args);
  },
});
// view task detail
yargs.command({
  command: "detail",
  builder: {
    id: {
      type: "string",
    },
  },
  handler: function (args) {
    console.log("detail", args);
  },
});
//view task by type
yargs.command({
  command: "listByType",
  builder: {
    type: {
      type: "string",
    },
  },
  handler: function (args) {
    console.log("listByType", args);
  },
});
yargs.parse();
