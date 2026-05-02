#!/bin/bash

# Update package lists
apt-get update -y

# Install git
apt-get install git -y

# Clone your repository (replace 'https://your_github_repo.git' with your actual repo URL)
git clone https://github.com/Elwakeel-ah/EC2-a.git /var/www/app

# update
sudo apt update

# Install Node.js and npm using nvm (Node Version Manager)
sudo apt install -y nodejs

sudo apt install -y npm

cd /var/www/app

npm install

# Navigate to the application directory

# Install application dependencies
npm install -g pm2
pm2 start main.js --name app-a
pm2 startup systemd -u root --hp /root
pm2 save
