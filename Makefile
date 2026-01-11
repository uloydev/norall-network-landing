.PHONY: help install dev build docker-up docker-down docker-logs clean

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Available targets:'
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}'

install: ## Install all dependencies
	pnpm install

dev: ## Start web app in development mode
	pnpm dev

dev-web: ## Start web app only
	pnpm dev:web

build: ## Build web app
	pnpm build

docker-up: ## Start Docker containers
	cd infra && docker compose up -d

docker-up-service: ## Start a specific Docker service (use: make docker-up-service SERVICE=service-name)
	@if [ -z "$(SERVICE)" ]; then \
		echo "❌ Error: SERVICE parameter is required"; \
		echo "Usage: make docker-up-service SERVICE=service-name"; \
		exit 1; \
	fi
	cd infra && docker compose up -d $(SERVICE)

docker-down: ## Stop Docker containers
	cd infra && docker compose down

docker-logs: ## Show Docker logs
	cd infra && docker compose logs -f

docker-restart: ## Restart Docker containers
	cd infra && docker compose restart

docker-rebuild: ## Rebuild and start Docker containers
	cd infra && docker compose up -d --build

docker-clean: ## Stop containers and remove volumes
	cd infra && docker compose down -v

clean: ## Clean all build artifacts and dependencies
	pnpm clean
	rm -rf node_modules
	find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +

format: ## Format code
	pnpm format

lint: ## Lint code
	pnpm lint

setup: ## Initial setup (create .env if missing)
	@if [ ! -f .env ]; then \
		cp .env.example .env; \
		echo "✅ Created .env file. Please update with your secrets!"; \
	else \
		echo "✅ .env already exists"; \
	fi
