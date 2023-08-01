export default function (entryPoint = 'index.js', body = 'Hello World!') {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      ${body}
    </div>
    <script type="module">(() => new EventSource('/esbuild').addEventListener('change', () => location.reload()))()</script>
    <script defer type="module" src="./${entryPoint}"></script>
  </body>
  </html>
  `.trim();
}