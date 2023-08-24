FROM node:20.4.0 as build 

# Set the working directory
WORKDIR /movies-parents-guide/client

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Expose the React app port
EXPOSE 5000

# Command to start the React app
RUN npm run preview
