install:
	npm install jspm --save-dev
	jspm init
	jspm install core-js
	jspm install react
	jspm install react-dom
	jspm install fetch
	jspm dl-loader --latest
	npm install uglifyjs
	npm install html-dist
build:
	- rm -r dist
	mkdir dist
	jspm bundle-sfx app/main dist/app.js
	./node_modules/.bin/uglifyjs dist/app.js -o dist/app.min.js
	./node_modules/.bin/html-dist index.html --remove-all --minify --insert app.min.js -o dist/index.html
