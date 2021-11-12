/*
 * @Author: yuzhoufen
 * @Date: 2021-11-12 16:16:30
 * @LastEditors: yuzhoufen
 * @LastEditTime: 2021-11-12 17:28:13
 * @Description: Do not edit
 * @FilePath: \my-app\mock\index.js
 */

const Mock = require("mockjs");
const { param2Obj } = require("./utils");

const article = require("./api/example/article");
const table = require("./api/example/table");

const mocks = [...article, ...table];
// const apis = require.context('./api', true, /\.js$/)
// apis.keys().filter(key => key.indexOf('/index.js') === -1).forEach(api => {
//   let apiPath = api.replace(/^\.(.*)\.\w+$/, '$1')
//   if (apiPath.includes('/basics/role/routes')) {
//     apiPath = '/basics/role'
//   }
//   api = require('./api' + apiPath)
//   mocks = mocks.concat(api)
// })

// 纯前端 mock
// 谨慎使用，它将重新定义XMLHttpRequest，不走NetWork，不方便调试
// 同时这将导致许多第三方库失效（例如progress事件）。
function mockXHR() {
  // mock patch
  // https://github.com/nuysoft/Mock/issues/300
  Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send;
  Mock.XHR.prototype.send = function () {
    if (this.custom.xhr) {
      this.custom.xhr.withCredentials = this.withCredentials || false;

      if (this.responseType) {
        this.custom.xhr.responseType = this.responseType;
      }
    }
    this.proxy_send(...arguments);
  };

  function XHR2ExpressReqWrap(respond) {
    return function (options) {
      let result = null;
      if (respond instanceof Function) {
        const { body, type, url } = options;
        // https://expressjs.com/en/4x/api.html#req
        result = respond({
          method: type,
          body: JSON.parse(body),
          query: param2Obj(url),
        });
      } else {
        result = respond;
      }
      return Mock.mock(result);
    };
  }

  for (const i of mocks) {
    Mock.mock(
      new RegExp(i.url),
      i.type || "get",
      XHR2ExpressReqWrap(i.response)
    );
  }
}

module.exports = {
  mocks,
  mockXHR,
};
