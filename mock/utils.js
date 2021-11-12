/*
 * @Author: yuzhoufen
 * @Date: 2021-11-12 16:18:36
 * @LastEditors: yuzhoufen
 * @LastEditTime: 2021-11-12 17:03:29
 * @Description: Do not edit
 * @FilePath: \my-app\mock\utils.js
 */

/**
 *
 * @param {string} url
 * @returns
 */
function url2Obj(url) {
  const search = decodeURIComponent(url.split("?")[1]).replace(/\+/g, " ");
  if (!search) {
    return {};
  }
  const obj = {};
  const searchArr = search.split("&");
  searchArr.forEach((v) => {
    const index = v.indexOf("=");
    const name = v.substring(0, index);
    const val = v.substring(index + 1, v.length);
    obj[name] = val;
  });

  return obj;
}

/**
 *
 * @param {Object} source
 * @returns {Object}
 */
function deepClone(source) {
  if (!source && typeof source !== "object") {
    throw new Error("error arguments", "deepCone");
  }

  const targetObj = source.constructor === Array ? [] : {};
  Object.keys(source).forEach((key) => {
    if (source[key] && typeof source[key] === "object") {
      targetObj[key] = deepClone(source[key]);
    } else {
      targetObj[key] = source[key];
    }
  });
  return targetObj;
}

module.export = {
  url2Obj,
  deepClone,
};
