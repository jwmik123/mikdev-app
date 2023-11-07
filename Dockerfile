# Stage 1: Build the Next.js application
FROM node:16-alpine as builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install # Or `npm install` if using npm
COPY . .
RUN yarn build # Or `npm run build` if using npm

# Stage 2: Run the Next.js application using the output from the builder stage
FROM node:16-alpine as runner
WORKDIR /app
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Setup environment variables
ENV NODE_ENV production

# Expose the port Next.js runs on
EXPOSE 3000

CMD ["yarn", "start"] # Or `npm start` if using npm
