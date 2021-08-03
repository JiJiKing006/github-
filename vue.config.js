module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: "src/main.js",
    },
  },
  lintOnSave: false, //关闭语法检查
  // 开启代理服务器
  devServer: {
    proxy: {
      // "/stu": {
      //   target: "http://localhost:5000",
      //   pathRewrite: { "^/stu": "" },
      // },
      // "/car": {
      //   target: "http://localhost:5001",
      //   pathRewrite: { "^/car": "" },
      // },
    },
  },
};
