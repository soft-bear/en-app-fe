# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production
FROM node:18-alpine

WORKDIR /app

# Set environment variables
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=8080

# Create a non-root user
RUN addgroup -S nodejs && adduser -S nuxtjs -G nodejs

# Copy essential files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/nuxt.config.js ./
COPY --from=builder /app/static ./static/
COPY --from=builder /app/.nuxt ./.nuxt/
COPY --from=builder /app/node_modules ./node_modules/

# Security: Set ownership to non-root user
RUN chown -R nuxtjs:nodejs /app

USER nuxtjs

# Expose port
EXPOSE 8080

# Start Nuxt in production mode (server-side)
CMD ["npm", "run", "start"]
