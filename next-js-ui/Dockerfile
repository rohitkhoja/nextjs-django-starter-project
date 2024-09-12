# Dockerfile
FROM node:20.17.0

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the application
COPY . .

# Expose port
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "dev"]
