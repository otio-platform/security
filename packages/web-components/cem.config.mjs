import { generateCustomData } from 'cem-plugin-vs-code-custom-data-generator';

export default {
  globs: ['src/**/define.ts'],
  outdir: 'dist',
  dev: false,
  watch: false,
  packagejson: true,
  fast: true,
  plugins: [
    generateCustomData({
			outdir: 'dist',
			htmlFileName: 'html-custom-data.json',
			cssFileName: 'css-custom-data.json',
			descriptionSrc: 'summary',
			slotDocs: true,
			eventDocs: true,
			cssPropertiesDocs: true,
			cssPartsDocs: true,
			methodDocs: true
		})
  ]
}