test:
	@NODE_ENV=test DEBUG=practice:* ./node_modules/.bin/mocha ./test/*.mocha.js

start:
	@NODE_ENV=development DEBUG=practice:* node .

.PHONY: test start
