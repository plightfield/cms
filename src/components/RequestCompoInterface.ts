/**
 * data to render or config a component
 *
 * @export
 * @interface RequestCompo
 */
export interface RequestCompo {
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
  form: { [key: string]: any };
}

export const testRequestCompo = new Promise<RequestCompo>((res) => {
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
