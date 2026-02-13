# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Build arguments for environment variables
ARG MICROSOFT_CLIENT_ID
ARG MICROSOFT_CLIENT_SECRET
ARG MICROSOFT_TENANT_ID
ARG EMAIL_USER

# Set as environment variables for the build process
ENV MICROSOFT_CLIENT_ID=$MICROSOFT_CLIENT_ID
ENV MICROSOFT_CLIENT_SECRET=$MICROSOFT_CLIENT_SECRET
ENV MICROSOFT_TENANT_ID=$MICROSOFT_TENANT_ID
ENV EMAIL_USER=$EMAIL_USER

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build the Next.js application
RUN npm run build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built assets from builder stage
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
