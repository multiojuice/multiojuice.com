# --- Build Stage ---
    FROM node:20-alpine AS builder

    WORKDIR /app
    
    COPY package.json ./
    COPY yarn.lock ./
    
    RUN yarn install --frozen-lockfile
    RUN yarn cache clean
    
    COPY . .
    
    RUN yarn build
    
    # --- Production Stage ---
    FROM node:20-alpine AS runner
    
    WORKDIR /app
    
    RUN addgroup --system --gid 1001 nodejs
    RUN adduser --system --uid 1001 nextjs
    
    COPY --from=builder /app/public ./public
    COPY --from=builder /app/.next/standalone ./
    COPY --from=builder /app/.next/static ./.next/static
    
    RUN chown -R nextjs:nodejs /app
    
    USER nextjs
    
    EXPOSE 3000
    
    ENV PORT=3000
    ENV HOSTNAME="0.0.0.0"
    
    CMD ["node", "server.js"]