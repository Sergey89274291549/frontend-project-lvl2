install: install-deps
install-deps:
	npm ci
publish:
	npm publish --dry-run
push:
	sudo git push origin master
lint:
	npx eslint .
build:
	rm -rf dist
	npm run build
fix:
	sudo npx eslint --fix .
start:
	npx babel-node src/bin/gendiff.js
test:
	npm test
jest:
	npx jest --watchAll
test-coverage:
	npm test -- --coverage
