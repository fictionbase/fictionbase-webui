dev: ## npm run dev
	npm run dev
start: ## npm run start
	npm run start
build: clean ## npm run build
	npm run build
prettier: ## npx prettier --write pages component
	npx prettier --write styles lib components pages src
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
.PHONY: help
clean: ## rm -rf build
	rm -rf build

.DEFAULT_GOAL := dev
