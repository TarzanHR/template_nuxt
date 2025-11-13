#!/bin/bash
echo "Pulling..."
git pull
npm ci
npm run prisma:generate
npm run prisma:migrate:deploy
npm run build