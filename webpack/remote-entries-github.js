module.exports = [
  {
    name: "microservices",
    url: "https://api.github.com/repos/module-federation/MicroLib-Example/contents/dist?ref=master",
    path: __dirname,
    type: "model",
    importRemote: async () => import("microservices/models"),
  },
  {
    name: "adapters",
    url: "https://api.github.com/repos/module-federation/MicroLib-Example/contents/dist?ref=master",
    path: __dirname,
    type: "adapter",
    importRemote: async () => {
      return import("microservices/adapters");
    },
  },
  {
    name: "services",
    url: "https://api.github.com/repos/module-federation/MicroLib-Example/contents/dist?ref=master",
    path: __dirname,
    type: "service",
    importRemote: async () => import("microservices/services"),
  },
];
