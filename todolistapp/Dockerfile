# Use the official Nginx image as a base image
FROM nginx:alpine

# Copy the content of the current directory to the Nginx html directory
COPY . /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
