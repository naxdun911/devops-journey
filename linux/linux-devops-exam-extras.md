# ==============================
# Linux & DevOps - Extra Topics
# For WSO2 Selection Exam
# ==============================



# ----------------------
# Filesystem Hierarchy
# ----------------------

# The Linux filesystem has a standard structure. Every directory has a purpose.

/           --> Root of the entire filesystem. Everything starts here.
/home       --> Home directories for regular users (/home/naxdun)
/root       --> Home directory for the root user (not /home/root)
/etc        --> System configuration files (network, services, users)
/var        --> Variable data that changes over time (logs, caches, mail)
/var/log    --> System log files live here (syslog, auth.log, kern.log)
/tmp        --> Temporary files. Cleared on reboot.
/dev        --> Device files. Hardware represented as files (disks, USB, terminals)
/proc       --> Virtual filesystem. Info about running processes and system (/proc/cpuinfo)
/sys        --> Virtual filesystem. Info about hardware and kernel modules
/bin        --> Essential user command binaries (ls, cp, cat, grep)
/sbin       --> Essential system binaries (fdisk, iptables, reboot) - usually need root
/usr        --> User programs and data. /usr/bin has most commands you use daily
/usr/local  --> Software you install manually (not from package manager)
/opt        --> Optional third-party software (like manually installed apps)
/boot       --> Boot loader files, kernel images
/lib        --> Shared libraries needed by binaries in /bin and /sbin
/mnt        --> Temporary mount point for manually mounted filesystems
/media      --> Auto-mounted removable media (USB drives, CDs)



# ----------------------
# Networking Commands
# ----------------------


# --- ip ---
# Modern replacement for ifconfig. Used to manage network interfaces and routing.

>> ip addr show              --> Show all network interfaces and their IP addresses
>> ip addr show eth0         --> Show details for a specific interface
>> ip link show              --> Show link layer info (MAC address, state up/down)
>> ip link set eth0 up       --> Bring an interface up
>> ip link set eth0 down     --> Bring an interface down
>> ip route show             --> Show the routing table
>> ip route add default via 192.168.1.1    --> Add a default gateway

# Old command (still works on most systems):
>> ifconfig                  --> Show network interfaces (deprecated, use ip instead)


# --- ping ---
# Test if a host is reachable over the network

>> ping google.com           --> Send ICMP packets to google.com (runs forever, Ctrl+C to stop)
>> ping -c 4 google.com      --> Send only 4 packets then stop
>> ping -i 2 google.com      --> Wait 2 seconds between pings (default is 1)
>> ping 192.168.1.1          --> Ping a local IP


# --- traceroute ---
# Shows the path packets take to reach a destination. Each line is a "hop" (a router).

>> traceroute google.com     --> Show all hops to google.com
>> traceroute -n google.com  --> Use IP addresses instead of hostnames (faster)

# If traceroute is not installed:
>> sudo apt install traceroute


# --- netstat / ss ---
# Show network connections, listening ports, and socket info.
# ss is the modern replacement for netstat.

>> ss -tulnp                 --> Show all listening TCP/UDP ports with process names
    # t = TCP
    # u = UDP  
    # l = listening ports only
    # n = show port numbers (not names)
    # p = show process using the port

>> ss -a                     --> Show all connections (listening + established)
>> ss -t                     --> Show TCP connections only
>> ss -s                     --> Show summary statistics

# Old command (still works):
>> netstat -tulnp            --> Same as ss -tulnp
>> netstat -an               --> All connections, numeric


# --- DNS lookup: dig and nslookup ---
# Used to query DNS records

>> dig google.com            --> Full DNS lookup for google.com
>> dig google.com +short     --> Just show the IP address
>> dig -t MX google.com      --> Look up mail server records
>> dig -t NS google.com      --> Look up nameserver records
>> dig @8.8.8.8 google.com   --> Query using Google's DNS server specifically

>> nslookup google.com       --> Simpler DNS lookup tool
>> nslookup google.com 8.8.8.8    --> Query specific DNS server


# --- curl ---
# Transfer data from or to a server. Supports HTTP, HTTPS, FTP, etc.

>> curl https://example.com          --> Fetch a webpage and print to terminal
>> curl -o file.html https://example.com    --> Save output to a file
>> curl -O https://example.com/file.zip     --> Save with original filename
>> curl -I https://example.com       --> Show only HTTP headers (HEAD request)
>> curl -v https://example.com       --> Verbose output (shows full request/response)
>> curl -X POST -d "name=naxdun" https://api.example.com    --> Send POST request with data
>> curl -s https://example.com       --> Silent mode (no progress bar)


# --- wget ---
# Download files from the internet

>> wget https://example.com/file.zip         --> Download a file
>> wget -O newname.zip https://example.com/file.zip    --> Download with custom name
>> wget -c https://example.com/file.zip      --> Resume interrupted download
>> wget -q https://example.com/file.zip      --> Quiet mode


# --- Common Ports (memorize these) ---

| Port | Service         |
|------|-----------------|
| 22   | SSH             |
| 80   | HTTP            |
| 443  | HTTPS           |
| 53   | DNS             |
| 25   | SMTP (email)    |
| 21   | FTP             |
| 23   | Telnet          |
| 3306 | MySQL           |
| 5432 | PostgreSQL      |
| 6379 | Redis           |
| 27017| MongoDB         |
| 8080 | Alt HTTP        |
| 3000 | Dev servers     |



# ----------------------
# Firewall (ufw / iptables)
# ----------------------

# ufw = Uncomplicated Firewall. A simple frontend for iptables.

>> sudo ufw status              --> Check if firewall is active and show rules
>> sudo ufw status verbose      --> More detailed status
>> sudo ufw enable              --> Turn on the firewall
>> sudo ufw disable             --> Turn off the firewall

>> sudo ufw allow 22            --> Allow SSH (port 22)
>> sudo ufw allow 80/tcp        --> Allow HTTP on TCP only
>> sudo ufw allow 443           --> Allow HTTPS
>> sudo ufw deny 23             --> Block Telnet
>> sudo ufw delete allow 80     --> Remove a rule

>> sudo ufw allow from 192.168.1.100       --> Allow all traffic from specific IP
>> sudo ufw allow from 192.168.1.0/24      --> Allow from entire subnet

>> sudo ufw default deny incoming    --> Default policy: block all incoming
>> sudo ufw default allow outgoing   --> Default policy: allow all outgoing

# iptables (lower level, more powerful):

>> sudo iptables -L              --> List all current rules
>> sudo iptables -L -n           --> List rules with port numbers (not names)
>> sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT    --> Allow SSH incoming
>> sudo iptables -A INPUT -p tcp --dport 80 -j DROP       --> Block HTTP incoming
>> sudo iptables -F              --> Flush (delete) all rules

# iptables chains:
#   INPUT    --> traffic coming INTO the system
#   OUTPUT   --> traffic going OUT of the system
#   FORWARD  --> traffic being routed THROUGH the system

# iptables targets:
#   ACCEPT   --> allow the packet
#   DROP     --> silently discard the packet
#   REJECT   --> discard and send error back to sender



# ----------------------
# systemd and systemctl
# ----------------------

# systemd is the init system that manages services (daemons) on modern Linux.
# systemctl is the command to control systemd.

>> systemctl status nginx            --> Check if nginx is running, show recent logs
>> systemctl start nginx             --> Start the service
>> systemctl stop nginx              --> Stop the service
>> systemctl restart nginx           --> Stop then start
>> systemctl reload nginx            --> Reload config without stopping (not all services support this)

>> systemctl enable nginx            --> Start automatically on boot
>> systemctl disable nginx           --> Do NOT start on boot
>> systemctl is-enabled nginx        --> Check if enabled on boot
>> systemctl is-active nginx         --> Check if currently running

>> systemctl list-units --type=service              --> List all loaded services
>> systemctl list-units --type=service --state=running    --> Only running services
>> systemctl list-unit-files --type=service          --> List all installed services

>> systemctl daemon-reload           --> Reload systemd itself after editing unit files

# Unit files are stored in:
#   /etc/systemd/system/      --> custom/override unit files (highest priority)
#   /lib/systemd/system/      --> default unit files from packages

# Common service names: sshd, nginx, apache2, mysql, docker, cron, ufw, networking



# ----------------------
# journalctl (System Logs)
# ----------------------

# journalctl reads logs from systemd's journal. Replaces reading /var/log/* directly for systemd services.

>> journalctl                        --> Show all logs (oldest first)
>> journalctl -r                     --> Show logs newest first (reverse)
>> journalctl -f                     --> Follow logs in real time (like tail -f)
>> journalctl -n 50                  --> Show last 50 log entries

>> journalctl -u nginx               --> Show logs for a specific service
>> journalctl -u nginx -f            --> Follow nginx logs live
>> journalctl -u nginx --since "1 hour ago"    --> Logs from last hour

>> journalctl --since "2026-09-19"              --> Logs since a date
>> journalctl --since "2026-09-19 08:00" --until "2026-09-19 12:00"

>> journalctl -p err                 --> Show only error level and above
    # Priority levels: emerg, alert, crit, err, warning, notice, info, debug

>> journalctl -b                     --> Logs from current boot only
>> journalctl -b -1                  --> Logs from previous boot
>> journalctl --disk-usage           --> How much disk space logs are using

# Traditional log files still exist:
#   /var/log/syslog       --> General system logs
#   /var/log/auth.log     --> Authentication logs (SSH logins, sudo usage)
#   /var/log/kern.log     --> Kernel messages
#   /var/log/dmesg        --> Boot and hardware messages
#   /var/log/apt/         --> Package manager logs



# ----------------------
# SSH (Secure Shell)
# ----------------------

# SSH lets you securely connect to a remote machine over the network.

>> ssh user@192.168.1.100            --> Connect to remote machine
>> ssh user@hostname                 --> Can use hostname too
>> ssh -p 2222 user@host             --> Connect on a non-default port
>> ssh user@host "ls /var/log"       --> Run a command remotely without opening a shell

# SSH Key-Based Authentication (passwordless login):

>> ssh-keygen                        --> Generate a key pair (public + private)
    # Default location: ~/.ssh/id_rsa (private) and ~/.ssh/id_rsa.pub (public)
    # You can set a passphrase or leave empty

>> ssh-keygen -t ed25519             --> Use modern ed25519 algorithm (recommended)

>> ssh-copy-id user@host             --> Copy your public key to the remote server
    # This adds your key to remote ~/.ssh/authorized_keys
    # After this, you can SSH without a password

>> cat ~/.ssh/id_rsa.pub             --> View your public key

# SCP - Secure Copy (transfer files over SSH):

>> scp file.txt user@host:/home/user/        --> Copy local file to remote
>> scp user@host:/home/user/file.txt .       --> Copy remote file to local
>> scp -r folder/ user@host:/home/user/      --> Copy entire directory
>> scp -P 2222 file.txt user@host:/tmp/      --> Use non-default port

# SSH Config File (~/.ssh/config) - shortcuts for frequent connections:
#
#   Host myserver
#       HostName 192.168.1.100
#       User naxdun
#       Port 22
#       IdentityFile ~/.ssh/id_rsa
#
# After this, just type: ssh myserver

# Important SSH files:
#   ~/.ssh/id_rsa           --> Your private key (NEVER share this)
#   ~/.ssh/id_rsa.pub       --> Your public key (safe to share)
#   ~/.ssh/authorized_keys  --> On server: lists keys allowed to connect
#   ~/.ssh/known_hosts      --> Fingerprints of servers you've connected to
#   /etc/ssh/sshd_config    --> SSH server configuration file



# ----------------------
# Disk Management
# ----------------------

# --- df (disk free) ---
# Shows disk space usage for mounted filesystems

>> df                    --> Show all mounted filesystems
>> df -h                 --> Human readable sizes (GB, MB instead of blocks)
>> df -h /               --> Show space for root partition only
>> df -T                 --> Show filesystem type (ext4, xfs, etc.)


# --- du (disk usage) ---
# Shows how much space files and directories are using

>> du -h /home/naxdun            --> Show size of each subdirectory
>> du -sh /home/naxdun           --> Show total size only (summary)
>> du -sh *                      --> Size of each item in current directory
>> du -h --max-depth=1 /var      --> Only go 1 level deep


# --- lsblk (list block devices) ---
# Shows all storage devices and partitions in a tree view

>> lsblk                 --> Show all block devices
>> lsblk -f              --> Show filesystem type and UUIDs too

# Output example:
#   sda         disk
#   ├─sda1      part   /boot
#   ├─sda2      part   /
#   └─sda3      part   [SWAP]
#   sdb         disk
#   └─sdb1      part   /mnt/data


# --- fdisk ---
# Partition management tool

>> sudo fdisk -l                 --> List all disks and their partitions
>> sudo fdisk /dev/sdb           --> Open interactive partition editor for a disk
    # Inside fdisk:
    #   p   --> print partition table
    #   n   --> create new partition
    #   d   --> delete a partition
    #   w   --> write changes and exit
    #   q   --> quit without saving


# --- mount and umount ---
# Attach and detach filesystems

>> mount                          --> Show all currently mounted filesystems
>> sudo mount /dev/sdb1 /mnt/usb  --> Mount a partition to a directory
>> sudo umount /mnt/usb           --> Unmount

# To make a mount permanent, add it to /etc/fstab:
#   /dev/sdb1   /mnt/data   ext4   defaults   0   0


# --- mkfs (make filesystem) ---
>> sudo mkfs.ext4 /dev/sdb1      --> Format partition as ext4
>> sudo mkfs.xfs /dev/sdb1       --> Format as xfs


# --- swap ---
>> sudo swapon --show             --> Show active swap
>> free -h                        --> Show RAM and swap usage



# ----------------------
# Cron Jobs
# ----------------------

# Cron is used to schedule tasks to run automatically at specific times.

>> crontab -e                --> Edit your cron jobs
>> crontab -l                --> List your current cron jobs
>> crontab -r                --> Remove all your cron jobs
>> sudo crontab -u john -l   --> List another user's cron jobs

# Cron Syntax:
#   * * * * * command_to_run
#   | | | | |
#   | | | | └── Day of week (0-7, 0 and 7 = Sunday)
#   | | | └──── Month (1-12)
#   | | └────── Day of month (1-31)
#   | └──────── Hour (0-23)
#   └────────── Minute (0-59)

# Examples:

# Run every minute
* * * * * /home/naxdun/script.sh

# Run at 2:30 AM every day
30 2 * * * /home/naxdun/backup.sh

# Run every Monday at 9 AM
0 9 * * 1 /home/naxdun/weekly-report.sh

# Run every 15 minutes
*/15 * * * * /home/naxdun/check.sh

# Run at midnight on the 1st of every month
0 0 1 * * /home/naxdun/monthly.sh

# Run Mon-Fri at 6 PM
0 18 * * 1-5 /home/naxdun/workday-end.sh

# System-wide cron files:
#   /etc/crontab            --> System crontab
#   /etc/cron.d/            --> Drop-in cron files
#   /etc/cron.daily/        --> Scripts that run daily
#   /etc/cron.hourly/       --> Scripts that run hourly
#   /etc/cron.weekly/       --> Scripts that run weekly



# ----------------------
# Environment Variables
# ----------------------

# Environment variables are key-value pairs available to all processes.

>> env                       --> Show all environment variables
>> echo $HOME                --> Print a specific variable
>> echo $PATH                --> Show the command search path
>> echo $USER                --> Current username
>> echo $SHELL               --> Current shell
>> echo $PWD                 --> Current working directory
>> echo $?                   --> Exit code of last command (0 = success, non-zero = error)

>> export MYVAR="hello"      --> Set a variable for current session + child processes
>> unset MYVAR               --> Remove a variable

# Making variables permanent:
# Add export lines to one of these files:
#   ~/.bashrc        --> Runs every time you open a new terminal
#   ~/.bash_profile  --> Runs on login (SSH, TTY login)
#   /etc/environment --> System-wide variables

>> source ~/.bashrc          --> Reload bashrc without closing terminal

# $PATH explained:
# PATH is a colon-separated list of directories where the shell looks for commands.
# Example: /usr/local/bin:/usr/bin:/bin:/home/naxdun/.local/bin
# When you type "python3", it searches each directory in order until it finds it.

>> export PATH="$PATH:/home/naxdun/scripts"    --> Add a directory to PATH



# ----------------------
# Bash Scripting
# ----------------------

# Bash scripts are files containing a sequence of commands.
# They start with a shebang line and need execute permission.

>> nano myscript.sh          --> Create a script
>> chmod +x myscript.sh      --> Make it executable
>> ./myscript.sh             --> Run it
>> bash myscript.sh          --> Alternative way to run (no chmod needed)


# --- Basic Structure ---

#!/bin/bash
# This is a comment
echo "Hello World"


# --- Variables ---

#!/bin/bash
NAME="Naxdun"
AGE=22
echo "My name is $NAME and I am $AGE years old"
echo "Home directory: $HOME"

# Rules: no spaces around =, use $ to access, use quotes for strings with spaces


# --- User Input ---

#!/bin/bash
read -p "Enter your name: " USERNAME
echo "Hello $USERNAME"


# --- If/Else ---

#!/bin/bash
FILE="/etc/passwd"

if [ -f "$FILE" ]; then
    echo "$FILE exists"
elif [ -d "$FILE" ]; then
    echo "$FILE is a directory"
else
    echo "$FILE does not exist"
fi

# Common test operators:
#   -f file     --> true if file exists and is a regular file
#   -d dir      --> true if directory exists
#   -e path     --> true if path exists (file or directory)
#   -r file     --> true if file is readable
#   -w file     --> true if file is writable
#   -x file     --> true if file is executable
#   -s file     --> true if file is not empty
#   -z "$VAR"   --> true if variable is empty
#   -n "$VAR"   --> true if variable is not empty

# String comparison:
#   [ "$A" = "$B" ]     --> strings are equal
#   [ "$A" != "$B" ]    --> strings are not equal

# Number comparison:
#   [ $A -eq $B ]   --> equal
#   [ $A -ne $B ]   --> not equal
#   [ $A -gt $B ]   --> greater than
#   [ $A -lt $B ]   --> less than
#   [ $A -ge $B ]   --> greater or equal
#   [ $A -le $B ]   --> less or equal


# --- For Loop ---

#!/bin/bash
for i in 1 2 3 4 5; do
    echo "Number: $i"
done

# Loop through files:
for file in /var/log/*.log; do
    echo "Log file: $file"
done

# C-style for loop:
for ((i=0; i<5; i++)); do
    echo "Count: $i"
done


# --- While Loop ---

#!/bin/bash
COUNT=1
while [ $COUNT -le 5 ]; do
    echo "Count: $COUNT"
    COUNT=$((COUNT + 1))
done


# --- Functions ---

#!/bin/bash
greet() {
    echo "Hello $1, welcome to $2"
}

greet "Naxdun" "Linux"
# $1 = first argument, $2 = second argument, $0 = script name


# --- Exit Codes ---

# Every command returns an exit code.
#   0     --> success
#   non-0 --> failure

>> ls /nonexistent
>> echo $?         --> Will print a non-zero number (error)

>> ls /home
>> echo $?         --> Will print 0 (success)

# In scripts:
#!/bin/bash
if [ $? -eq 0 ]; then
    echo "Last command succeeded"
else
    echo "Last command failed"
fi

# Or use && and ||:
>> mkdir /tmp/test && echo "Created" || echo "Failed"


# --- Useful Script Patterns ---

# Redirect output to log:
#!/bin/bash
echo "Backup started at $(date)" >> /var/log/backup.log

# Command substitution:
TODAY=$(date +%Y-%m-%d)
HOSTNAME=$(hostname)
echo "Running on $HOSTNAME on $TODAY"

# Check if running as root:
if [ "$EUID" -ne 0 ]; then
    echo "Please run as root (use sudo)"
    exit 1
fi



# ----------------------
# Docker Basics
# ----------------------

# Docker packages applications into containers - lightweight, isolated environments.

# Key concepts:
#   Image      --> A blueprint/template (like a class in OOP)
#   Container  --> A running instance of an image (like an object)
#   Dockerfile --> Instructions to build an image
#   Volume     --> Persistent storage that survives container restarts
#   Registry   --> Where images are stored (Docker Hub is the default)


# --- Basic Commands ---

>> docker --version                  --> Check docker version
>> docker info                       --> System-wide docker info

>> docker pull nginx                 --> Download an image from Docker Hub
>> docker images                     --> List all downloaded images
>> docker rmi nginx                  --> Remove an image

>> docker run nginx                  --> Create and start a container from image
>> docker run -d nginx               --> Run in background (detached mode)
>> docker run -d -p 8080:80 nginx    --> Map host port 8080 to container port 80
>> docker run -d --name webserver nginx    --> Give container a custom name
>> docker run -it ubuntu bash        --> Run interactively with a terminal

>> docker ps                         --> List running containers
>> docker ps -a                      --> List ALL containers (including stopped)
>> docker stop <container_id>        --> Stop a running container
>> docker start <container_id>       --> Start a stopped container
>> docker restart <container_id>     --> Restart a container
>> docker rm <container_id>          --> Remove a stopped container
>> docker rm -f <container_id>       --> Force remove (even if running)

>> docker logs <container_id>        --> View container logs
>> docker logs -f <container_id>     --> Follow logs in real time
>> docker exec -it <container_id> /bin/bash    --> Open a shell inside running container
>> docker inspect <container_id>     --> Detailed info about a container


# --- Dockerfile ---

# A Dockerfile tells Docker how to build your image.

# Example Dockerfile:
FROM ubuntu:22.04              # Base image
RUN apt update && apt install -y nginx    # Run commands during build
COPY index.html /var/www/html/ # Copy files from host into image
EXPOSE 80                      # Document which port the app uses
CMD ["nginx", "-g", "daemon off;"]   # Command to run when container starts

# WORKDIR /app                 # Set working directory inside container
# ENV NODE_ENV=production      # Set environment variable
# ENTRYPOINT ["python3"]       # Like CMD but harder to override

# Build and run:
>> docker build -t myapp .              --> Build image from Dockerfile in current dir
>> docker build -t myapp:v1.0 .         --> Build with a tag/version
>> docker run -d -p 3000:3000 myapp     --> Run your custom image


# --- Volumes ---

>> docker volume create mydata               --> Create a named volume
>> docker volume ls                          --> List volumes
>> docker run -d -v mydata:/app/data nginx   --> Mount volume to container
>> docker run -d -v /host/path:/container/path nginx    --> Bind mount (host dir)


# --- Docker Compose ---

# docker-compose lets you define multi-container apps in a YAML file.

# docker-compose.yml example:
# version: "3"
# services:
#   web:
#     image: nginx
#     ports:
#       - "8080:80"
#   db:
#     image: mysql:8
#     environment:
#       MYSQL_ROOT_PASSWORD: secret
#     volumes:
#       - dbdata:/var/lib/mysql
# volumes:
#   dbdata:

>> docker compose up                --> Start all services
>> docker compose up -d             --> Start in background
>> docker compose down              --> Stop and remove all containers
>> docker compose ps                --> List running services
>> docker compose logs              --> View logs of all services
>> docker compose build             --> Rebuild images


# --- Docker Networking ---

>> docker network ls                         --> List all networks
>> docker network create mynet               --> Create a custom network
>> docker run -d --network mynet nginx       --> Run container on custom network

# Containers on the same custom network can reach each other by container name.


# --- Cleanup ---

>> docker system prune               --> Remove all stopped containers, unused images, networks
>> docker system prune -a             --> Also remove unused images (aggressive cleanup)
>> docker volume prune                --> Remove unused volumes



# ----------------------
# General DevOps Concepts (Quick Reference)
# ----------------------


# --- CI/CD ---
# CI = Continuous Integration: automatically build and test code on every commit
# CD = Continuous Delivery/Deployment: automatically deploy tested code to production
# Tools: Jenkins, GitHub Actions, GitLab CI, CircleCI

# --- Infrastructure as Code (IaC) ---
# Managing infrastructure through code files instead of manual setup
# Terraform   --> Provisions infrastructure (create servers, networks, databases)
# Ansible     --> Configures servers (install software, manage config files)
# Key difference: Terraform creates things, Ansible configures things

# --- Configuration Management ---
# Keeping all servers in a consistent state automatically
# Tools: Ansible, Puppet, Chef, SaltStack
# Instead of SSHing into 50 servers to update nginx, you write one playbook

# --- Version Control ---
# Git basics you should know:
>> git init                  --> Initialize a new repo
>> git clone <url>           --> Clone a remote repo
>> git add .                 --> Stage all changes
>> git commit -m "message"   --> Commit staged changes
>> git push                  --> Push to remote
>> git pull                  --> Pull latest from remote
>> git branch                --> List branches
>> git checkout -b feature   --> Create and switch to new branch
>> git merge feature         --> Merge a branch into current
>> git log --oneline         --> Compact commit history
>> git status                --> Show current state
>> git diff                  --> Show unstaged changes

# --- Security Concepts ---
# CIA Triad:
#   Confidentiality  --> Only authorized people can access data (encryption, access control)
#   Integrity        --> Data is not tampered with (checksums, hashing)
#   Availability     --> Systems are up when needed (redundancy, backups)

# Encryption:
#   Symmetric    --> Same key to encrypt and decrypt (AES)
#   Asymmetric   --> Public key encrypts, private key decrypts (RSA, SSH keys)

# TLS/SSL:
#   Encrypts data in transit (HTTPS = HTTP + TLS)
#   Certificates verify server identity

# Hashing:
#   One-way function. Cannot reverse. Used for passwords and file integrity.
#   md5sum file.txt      --> Generate MD5 hash
#   sha256sum file.txt   --> Generate SHA-256 hash (more secure)

# --- Database Basics ---
# SQL (Relational): MySQL, PostgreSQL, SQLite - structured tables, ACID compliant
# NoSQL: MongoDB (documents), Redis (key-value), Cassandra (wide-column)
# ACID = Atomicity, Consistency, Isolation, Durability
