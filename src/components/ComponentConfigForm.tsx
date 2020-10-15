import React, { Component, useLayoutEffect, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import JsxParser from "react-jsx-parser";
import { testCompoConfig } from "./RequestCompoInterface";
const Parser: any = JsxParser;

/**
 * wrap form so can trans event
 *
 * @class WrapForm
 * @extends {Component}
 */
class WrapForm extends Component {
  static defaultProps = { handleSubmit: (e: any) => {} };
  render() {
    return (
      <Form
        onSubmit={(e) => {
          (this.props as any).handleSubmit(e);
          e.preventDefault();
          return false;
        }}
      >
        {this.props.children}
      </Form>
    );
  }
}

/**
 * update component config form with jsxParser
 *
 * @param {{
 *   initValue: any[];
 *   onChange: (val: any[]) => void;
 * }} props
 * @returns
 */
function ComponentConfigForm(props: {
  initValue: any[];
  onChange: (val: any[]) => void;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    if (!ref.current) return;
    const form = ref.current.querySelector("form");
    if (!form) return;
    for (let i in props.initValue) {
      (form[i] as any).value = props.initValue[i];
    }
  }, [props, ref]);
  return (
    <div ref={ref}>
      <Parser
        bindings={{
          handleSubmit: (e: any) => {
            const form = e.currentTarget;
            let result = [];
            for (let i = 0; i < testCompoConfig.valNum; i++) {
              result.push(form[i].value);
            }
            props.onChange(result);
          },
        }}
        components={{
          WrapForm,
          Group: Form.Group,
          Label: Form.Label,
          Control: Form.Control,
          Button,
        }}
        jsx={testCompoConfig.form}
      />
    </div>
  );
}

export default ComponentConfigForm;
