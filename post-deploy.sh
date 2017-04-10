#!/bin/bash
cp ecosystem.config{.example,}.js &&
cnpm install --production &&
npm run build &&
pm2 startOrGracefulReload ecosystem.config.js --env production
