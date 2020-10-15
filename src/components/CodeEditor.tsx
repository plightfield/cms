import React, { useLayoutEffect, useRef } from "react";
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror";
import "codemirror/theme/idea.css";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/css/css.js";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/xml/xml.js";
import "codemirror/addon/hint/css-hint.js";
import "codemirror/addon/hint/html-hint.js";
import "codemirror/addon/hint/javascript-hint.js";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/hint/show-hint.js";

function CodeEditor(props: {
  value: string;
  onChange: (val: string) => void;
  type?: "html" | "javascript";
}) {
  const codeRef = useRef<HTMLTextAreaElement | null>(null);
  const type = props.type;
  useLayoutEffect(() => {
    if (!codeRef.current) return;
    CodeMirror.fromTextArea(codeRef.current, {
      lineNumbers: true,
      tabSize: 4,
      theme: "idea",
      mode: type === "javascript" ? "javascriopt" : "html",
    });
  }, [type]);
  return (
    <textarea
      ref={codeRef}
      name='code'
      value={props.value}
      onChange={(e: any) => {
        props.onChange(e.target.value);
      }}
      placeholder='请输入ejs/smarty代码'
    ></textarea>
  );
}

export default CodeEditor;
