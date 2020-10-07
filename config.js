const env = process.env.ENV || "development";

const configs = {
  development: {
    API: "http://localhost:3001",
  },
  staging: {
    API: "http://localhost:3009",
  },
  production: {
    API: "http://localhost:3009",
  }
}[env];


module.exports = configs;