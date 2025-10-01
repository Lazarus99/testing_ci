# Base Image
FROM node:18-alpine

# Set Workspace
WORKDIR /app

# Copy package.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Expose the port 3000
EXPOSE 3000

# Startup command
CMD ["node", "index.js"]
