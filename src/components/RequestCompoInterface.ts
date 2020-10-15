/**
 * data to render or config a component
 *
 * @export
 * @interface CompoData
 */
export interface CompoData {
  name: string;
  template: string;
  script: string;
  config: { [key: string]: any };
}

export interface CompoConfig {
  name: string;
  cover: string;
  template: string;
  script: string;
  // 配置项
  form: string;
  // 变量数量
  valNum: number;
}

export const testRequestCompo = new Promise<CompoData>((res) => {
  setTimeout(() => {
    res({
      name: "test",
      template: `<button type="button" class="btn btn-danger"><%= test%></button><script>console.log(123)</script>`,
      script: `console.log('<%= log%>')`,
      config: {
        test: "test button",
        log: "fuck",
      },
    });
  }, 3000);
});

export const testCompoConfig: CompoConfig = {
  name: "test",
  cover: "",
  template:
    '`<button type="button" class="btn btn-danger"><%= test%></button><script>console.log(123)</script>`',
  script: `console.log('<%= log%>')`,

  form: `
  <WrapForm handleSubmit={handleSubmit}>
  <Group>
  <Label>测试按钮内容</Label>
  <Control
  required
  type="text"
  placeholder="请输入内容"
  defaultValue=""
  />
  </Group>
  <Group>
  <Label>打印信息</Label>
  <Control 
  required 
  type="text"
  placeholder="请输入"
  defaultValue=""
  ></Control>
  </Group>
  <Button type="submit" block>更新</Button>
  </WrapForm>`,
  valNum: 2,
};
