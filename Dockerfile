# Use Node.js base image
FROM node:16

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Expose app port
EXPOSE 3000

# Run app
CMD ["npm", "start"]
