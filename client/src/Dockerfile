# Use official Node.js image as the base image
FROM node:latest AS builder
LABEL author="ngnphmgiahuy <yuh.nguyenpham@gmail.com>"

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Next.js application
RUN npm run build

# Start a new stage to reduce the image size
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy the built files from the previous stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json

# Expose the port Next.js is running on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
