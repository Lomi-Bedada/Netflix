const express = require("express");

import React from "react";

const webpack = require("webpack");

module.exports = {
  // Other configurations...
  plugins: [
    new webpack.DefinePlugin({
      "process.env.REACT_APP_API_KEY": JSON.stringify(
        process.env.REACT_APP_API_KEY
      ),
    }),
  ],
};
