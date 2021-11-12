/*
 * @Author: yuzhoufen
 * @Date: 2021-11-12 17:25:14
 * @LastEditors: yuzhoufen
 * @LastEditTime: 2021-11-12 17:25:18
 * @Description: Do not edit
 * @FilePath: \my-app\mock\api\example\table.js
 */
const Mock = require("mockjs");

const data = Mock.mock({
  "items|30": [
    {
      id: "@id",
      title: "@sentence(10, 20)",
      "status|1": ["published", "draft", "deleted"],
      author: "name",
      display_time: "@datetime",
      pageviews: "@integer(300, 5000)",
    },
  ],
});

module.exports = [
  {
    url: "/table/list",
    type: "get",
    response: (config) => {
      const items = data.items;
      return {
        code: 200,
        data: {
          total: items.length,
          items: items,
        },
      };
    },
  },
];
