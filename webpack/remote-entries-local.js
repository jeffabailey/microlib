module.exports = [
  {
    name: "microservices",
    url: "http://localhost:8060/remoteEntry.js",
    path: __dirname,
    type: "model",
    importRemote: async () => import("microservices/models"),
  },
  {
    name: "adapters",
    url: "http://localhost:8060/remoteEntry.js",
    path: __dirname,
    type: "adapter",
    importRemote: async () => import("microservices/adapters"),
  },
  {
    name: "services",
    url: "http://localhost:8060/remoteEntry.js",
    path: __dirname,
    type: "service",
    importRemote: async () => import("microservices/services"),
  },
];