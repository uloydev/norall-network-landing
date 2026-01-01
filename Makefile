.PHONY: help install dev build docker-up docker-down docker-logs clean

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Available targets:'
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}'

install: ## Install all dependencies
	pnpm install

dev: ## Start all apps in development mode
	pnpm dev

dev-web: ## Start web app only
	pnpm dev:web

dev-cms: ## Start CMS only
	pnpm dev:cms

build: ## Build all apps
	pnpm build

docker-up: ## Start Docker containers
	cd infra && docker-compose up -d

docker-down: ## Stop Docker containers
	cd infra && docker-compose down

docker-logs: ## Show Docker logs
	cd infra && docker-compose logs -f

docker-restart: ## Restart Docker containers
	cd infra && docker-compose restart

docker-rebuild: ## Rebuild and start Docker containers
	cd infra && docker-compose up -d --build

docker-clean: ## Stop containers and remove volumes
	cd infra && docker-compose down -v

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

reset-seed: ## Reset database and seed with default data (use: make reset-seed OPTION=1 or 2)
	@chmod +x scripts/reset-and-seed.sh
	@./scripts/reset-and-seed.sh $(OPTION)

reset-db: ## Quick database reset (requires PostgreSQL access)
	@chmod +x scripts/seed-db.sh
	@./scripts/seed-db.sh

seed: ## Seed database with default data (without reset)
	@echo "🌱 Seeding will run automatically when you start Strapi..."
	@echo "Run: make dev-cms"
	@echo ""
	@echo "Note: If data already exists, seeding will be skipped."
	@echo "To reset and reseed, use: make reset-seed"
