module.exports = {
	disallowedChangeTypes: ['major'],
  access: 'public',
	ignorePatters: [
		'.ignore',
    '.github/',
    '.prettierrc',
    '.vscode/',
    'jest..js',
    'src/e2e/',
    'src/tests/',
    'src/fixtures/**',
    'package-lock.json',
	]
}