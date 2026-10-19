// GitHub Pages has no rewrite rules: serving index.html as 404.html lets
// deep links such as /work/helaiq load the app, which then routes itself.
import { copyFile } from 'node:fs/promises';
await copyFile('dist/index.html', 'dist/404.html');
console.log('dist/404.html written for static hosts without rewrites');
