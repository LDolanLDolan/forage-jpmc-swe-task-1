FROM python:3.11-slim

# Set up working directory
WORKDIR /app

# Copy code
COPY . .

# Install dependencies
RUN pip install python-dateutil

# Expose port
EXPOSE 8080

# Run your custom server
CMD ["python3", "server3.py"]
