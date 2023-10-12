FROM node:latest

# Set environment variables to non-interactive mode for the installation
ENV DEBIAN_FRONTEND=noninteractive

# Set the working directory in the container
WORKDIR /app

# Update the package index and install necessary dependencies
RUN apt-get update \
    && apt-get install -y net-tools

# Copy the rest of the application code to the container
COPY . .