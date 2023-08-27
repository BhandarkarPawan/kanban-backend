# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the application's dependencies inside the container
RUN npm install

# Bundle the application source inside the container
COPY . .

# Specify the command to run when the container starts
CMD [ "node", "app.js" ]

# Expose port 3000 for the Express server
EXPOSE 3000
