import { notification, Modal } from "antd";
import { mockURL } from "../../config/config";
import "whatwg-fetch";
const _options = {
  after: (response, url, data, header) => {
    if (response.result) {
      if (response.token) {
        config({ token: response.token });
      }
      if (
        url === "/v1/edf/user/login" ||
        url === "/v1/edf/user/create" ||
        url === "v1/edf/org/checkCanUpdatePeriod"
      ) {
        return response;
      }
      return response.value;
    } else if (response.sysNetException) {
      response.error = {};
      response.error.code = 504;
      response.error.message = "网络异常";
      notification["error"]({
        message: "数据请求提示",
        description: "网络异常",
      });
      //return null;
    } else if (response.networkException) {
      //window.location.href = gotoLogin('notfound.html')
      //Toast.destory()
      notification["error"]({
        message: "数据请求提示",
        description: "服务器正在维护中,请稍后访问!",
      });
      return false;
    } else if (response.unknownException) {
      return {
        result: false,
        error: {
          code: "9999",
        },
      };
    } else {
      if (data && data.isReturnValue) {
        return response;
      } else {
        let errorCode = "";
        if (response.error && response.error.code) {
          errorCode = response.error.code;
        }
        if (response.error && response.error.message) {
          Modal.error({
            title: "提示信息:" + errorCode || "",
            okText: "关闭",
            width: 600,
            bodyStyle: "height:300px;overflow:auto;",
            content: response.error.message,
          });
        } else if (response.error && response.error.message) {
          Modal.error({
            title: "提示信息:" + errorCode || "",
            okText: "关闭",
            width: 600,
            bodyStyle: "height:300px;overflow:auto;",
            content: response.error.message,
          });
        } else if (response.code == 0 && response.message) {
          Modal.error({
            title: "提示信息:" + errorCode || "",
            okText: "关闭",
            width: 600,
            bodyStyle: "height:300px;overflow:auto;",
            content: response.message,
          });
        } else {
          console.log(response);
        }
        return;
      }
    }
  },
};

function after(response, url, data, headers) {
  if (_options.after) {
    return _options.after(response, url, data, headers);
  }

  return response;
}
function before(url, data, headers) {
  if (_options.before) {
    _options.before(url, data, headers);
  }
}
function setAccessToken(token) {
  sessionStorage["_accessToken"] = token;
}
export function config(options) {
  Object.assign(_options, options);
  if (options.token) {
    setAccessToken(options.token);
  }
}

export function post(url, data, headers, option) {
  if (!option || option.ignoreAOP !== true) {
    before(url, data, headers);
  }

  headers = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...headers,
      //token: getAccessToken(),
    },
    body: JSON.stringify(data),
  };

  return new Promise((resolve, reject) => {
    fetch(mockURL + url, headers)
      .then((response) => {
        if (response.status == 504 || response.status == 502) {
          return {
            sysNetException: true,
          };
          //return reject(response)
        } else if (
          response.status == 500 ||
          response.status == 403 ||
          response.status == 0
        ) {
          return {
            networkException: true,
          };
        }
        return response.json();
      })
      .then((responseJson) => {
        responseJson = after(responseJson, url, data, headers);
        resolve(responseJson);
      })
      .catch((error) => {
        if (error) {
          if (
            error.message &&
            error.message.toLowerCase().indexOf("fetch") > -1
          ) {
            return {
              networkException: true,
            };
          }
        }
        reject(error);
      });
  });
}
export default { config, post };
