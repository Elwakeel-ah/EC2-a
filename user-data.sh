#!/bin/bash

# Update package lists
apt-get update -y

# Install git
apt-get install git -y

# Clone your repository (replace 'https://your_github_repo.git' with your actual repo URL)
git clone https://github.com/Elwakeel-ah/EC2.git /var/www/app

# update
sudo apt update

# Install Node.js and npm using nvm (Node Version Manager)
sudo apt install -y nodejs

sudo apt install -y npm

# Navigate to the application directory
cd /var/www/app

# Install application dependencies
npm install

# Start the application (replace 'npm start' with your specific startup command if different)
sudo node ./main.js