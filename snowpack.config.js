// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
      src: "/",
    },
    plugins: [
      [
        "angular-snowpack-plugin",
        {
          src: "src",
          angularJson: "angular.json",
          ngccTargets: ["@angular/router","@model/mockupModel"],
        },
      ],
    ],
    // installOptions: {},
    // devOptions: {},
    buildOptions: {
      out: "dist",
      clean: true
    },
  };