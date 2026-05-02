#!/bin/bash
set -e
exec > /var/log/cloud-init-custom.log 2>&1

apt-get update -y
apt-get install -y git curl

curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs

rm -rf /var/www/app
mkdir -p /var/www

git clone https://github.com/Elwakeel-ah/EC2-a.git /var/www/app

cd /var/www/app
npm install

cat > /etc/systemd/system/app-a.service << 'EOF'
[Unit]
Description=App A Node.js
After=network-online.target
Wants=network-online.target

[Service]
WorkingDirectory=/var/www/app
ExecStart=/usr/bin/node /var/www/app/main.js
Restart=always
User=root

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable app-a
systemctl start app-a