import React, { useState, useRef } from "react";
import { Input, Space } from "antd";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
const FieldPassword = (
  { text, mode, render, renderFormItem, fieldProps },
  ref
) => {
  const inputRef = useRef();
  const [visbile, setVisibile] = useState(false);
  useImperativeHandle(
    ref,
    () => ({
      ...(inputRef.current || {}),
    }),
    [inputRef.current]
  );
  if (mode === "read") {
    let dom = <>-</>;
    if (text) {
      dom = (
        <Space>
          <span>{visbile ? text : "＊ ＊ ＊ ＊ ＊"}</span>
          <a onClick={() => setVisibile(!visbile)}>
            {visbile ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </a>
        </Space>
      );
    }
    if (render) {
      return render(text, { mode, ...fieldProps }, dom);
    }
    return dom;
  }
  if (mode === "edit" || mode === "update") {
    const dom = (
      <Input.Password placeholder="请输入" ref={inputRef} {...fieldProps} />
    );
    if (renderFormItem) {
      return renderFormItem(text, { mode, ...fieldProps }, dom);
    }
    return dom;
  }
  return null;
};
export default React.forwardRef(FieldPassword);
