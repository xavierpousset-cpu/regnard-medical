#!/bin/bash
set -e

echo "Installing dependencies with pnpm..."
pnpm install --frozen-lockfile

echo "Building the project..."
pnpm build

echo "Build completed successfully!"
