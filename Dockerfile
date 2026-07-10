# Stage 1: Bağımlılıkların Kurulması (Dependencies)
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Stage 2: Uygulamanın Derlenmesi (Build)
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Derleme sırasında telemetriyi kapatalım
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# Stage 3: Üretim Çalışma Aşaması (Runner)
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Güvenlik için yetkisiz kullanıcı grubu oluşturalım
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Statik dosyaların kopyalanması
COPY --from=builder /app/public ./public

# Standalone Next.js sunucusunun ve static dosyalarının kopyalanması
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
