
const path = require('path');
const fs = require('fs-extra');
let fileStr = `import { App } from 'vue';
declare class UIComponent {
  static install(vue: App): void;
}\n
declare class GCompA extends UIComponent {}
declare function install(app: App): void;
export { GCompA }
declare const _default: {
    install: typeof install;
};
export default _default;`;
fs.outputFile(
  path.resolve(__dirname, '../dist/gcompa.d.ts'),
  fileStr,
  'utf8',
  () => {}
);
