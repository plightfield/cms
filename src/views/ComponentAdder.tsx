import React, { useEffect, useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import Navigation from "src/components/Navigation";
import CodeEditor from "src/components/CodeEditor";
import styled from "styled-components";

const Preview = styled.img`
  width: 100px;
`;

function ComponentAdder() {
  const [file, setFile] = useState<File | null>(null);
  const [template, setTemplate] = useState("");
  const [script, setScript] = useState("");
  const uploadRef = useRef<any>(null);
  const [blobUrl, setBlobUrl] = useState("");
  useEffect(() => {
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e: any) => {
      setBlobUrl(e.target.result);
    };
  }, [file]);
  return (
    <div>
      <Navigation active={"/component-adder"} />
      <Alert variant='info'>
        <p>一个 bootstrap 组件由以下内容组成：</p>
        <ol>
          <li>组件名称，作为标识</li>
          <li>组件缩略图</li>
          <li>模板代码，以{"<%=xxx%>"}的形式埋入变量，遵循 php/ejs 语法</li>
          <li>script 代码，同样支持变量埋点</li>
          <li>form 代码，用以配置组件表单中的变量</li>
        </ol>
      </Alert>
      <div style={{ padding: "1em" }}>
        <Card>
          <Card.Body>
            <Card.Title>基本配置</Card.Title>
            <Form.Group>
              <Form.Control
                type='text'
                placeholder='请输入组件名称'
              ></Form.Control>
              <Form.Text>一旦命名不可修改!</Form.Text>
              <Form.Control
                ref={uploadRef}
                style={{ display: "none" }}
                type='file'
                onChange={(e: any) => {
                  const file = e.target?.files?.[0];
                  if (file) {
                    setFile(file);
                    e.target.value = null;
                  }
                }}
                multiple={false}
                placeholder='请上传封面图片'
              ></Form.Control>
            </Form.Group>
            <Button
              variant='primary'
              onClick={() => {
                uploadRef.current.click();
              }}
            >
              上传图片
            </Button>
            {file ? (
              <Alert
                variant='primary'
                style={{ marginTop: ".4em" }}
                dismissible
                onClose={() => {
                  setFile(null);
                }}
              >
                <Preview src={blobUrl} alt='preview' />
              </Alert>
            ) : null}
          </Card.Body>
        </Card>
        <Card style={{ marginTop: "1em" }}>
          <Card.Body>
            <Card.Title>模板代码</Card.Title>
            <CodeEditor value={template} onChange={setTemplate} type='html' />
          </Card.Body>
        </Card>
        <Card style={{ marginTop: "1em" }}>
          <Card.Body>
            <Card.Title>脚本代码</Card.Title>
            <CodeEditor value={script} onChange={setScript} type='javascript' />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default ComponentAdder;
