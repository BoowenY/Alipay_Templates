/*
 * @Author: your name
 * @Date: 2021-05-19 09:31:33
 * @LastEditTime: 2021-05-19 14:22:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /yorn_react_cli/lib/core/actions.js
 */
const path = require("path");
const { ejsCompile, writeFile, mkdirSync } = require("../utils/file");

const handleEjsToFile = async (name, dest, template, filename) => {
  // 1.获取模块引擎的路径
  const templatePath = path.resolve(__dirname, template);
  const result = await ejsCompile(templatePath, {
    name,
    lowerName: name.toLowerCase(),
  });

  // 2.写入文件中
  // 判断文件不存在,那么就创建文件
  mkdirSync(dest);
  const targetPath = path.resolve(dest, filename);
  writeFile(targetPath, result);
};

const addcmp = async (name, dest) => {
  handleEjsToFile(name, dest, "../templates/miniAlipay.ts.ejs", `${name}.ts`);
  handleEjsToFile(
    name,
    dest,
    "../templates/miniAlipay.axml.ejs",
    `${name}.axml`
  );
  handleEjsToFile(
    name,
    dest,
    "../templates/miniAlipay.json.ejs",
    `${name}.json`
  );
  handleEjsToFile(
    name,
    dest,
    "../templates/miniAlipay.less.ejs",
    `${name}.less`
  );
  handleEjsToFile(
    name,
    dest,
    "../templates/miniAlipay.d.ts.ejs",
    `${name}.d.ts`
  );
};

const addpg = async (name, dest) => {
  handleEjsToFile(
    name,
    dest,
    "../templates/miniAlipay_page.ts.ejs",
    `${name}.ts`
  );
  handleEjsToFile(
    name,
    dest,
    "../templates/miniAlipay.axml.ejs",
    `${name}.axml`
  );
  handleEjsToFile(
    name,
    dest,
    "../templates/miniAlipay_page.json.ejs",
    `${name}.json`
  );
  handleEjsToFile(
    name,
    dest,
    "../templates/miniAlipay.less.ejs",
    `${name}.less`
  );
  handleEjsToFile(
    name,
    dest,
    "../templates/miniAlipay_page.d.ts.ejs",
    `${name}.d.ts`
  );
};

module.exports = {
  addcmp,
  addpg,
};
