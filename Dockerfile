# Use an official Node.js runtime as a base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your app
COPY . .

# Expose port 3000 to the host
EXPOSE 3000

# Run the server
CMD ["node", "server.js"]
