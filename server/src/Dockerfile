# Use official Node.js image as the base image
FROM node:latest AS builder
LABEL author="ngnphmgiahuy <yuh.nguyenpham@gmail.com>"

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

COPY --chown=node:node . .

# Expose the port Node.js is running on
EXPOSE 8080

# Start the Node.js application
CMD ["node", "index.js"]
