/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
import path from 'node:path';
import { fileURLToPath } from 'node:url';

//20260310 @storybook/addon-vitest 제거함
//import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
//import { playwright } from '@vitest/browser-playwright';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react()],

  //scss호출 시 최상위 강제 호출 /src/assets/scss/_bulid-set.scss (variables, mixin 만 존재함)
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/build-set.scss";
        `,
        api: 'modern-compiler' // Sass 최신 컴파일러 사용 (선택사항)
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },

  //20260310 @storybook/addon-vitest 제거함
 /*
  test: {
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        },
        setupFiles: ['.storybook/vitest.setup.js']
      }
    }]
  }
  */
});