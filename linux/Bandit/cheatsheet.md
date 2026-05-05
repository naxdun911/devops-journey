# Bandit Levels 0–20 — Notes & Cheatsheet

---

## Level 0
**Goal:** SSH into the server.
**Lesson:** Basic SSH syntax.
```
ssh bandit0@bandit.labs.overthewire.org -p 2220
password: bandit0
```

---

## Level 0 → 1
**Goal:** Find password in `readme` file in home dir.
**Lesson:** `cat` reads a file. `ls` lists files.
```
ls
cat readme
```

---

## Level 1 → 2
**Goal:** Password in file named `-` (dash).
**Lesson:** A dash means stdin to most commands. Use `./` to refer to it as a file.
```
cat ./-
```

---

## Level 2 → 3
**Goal:** Password in file with spaces in the name.
**Lesson:** Escape spaces with `\` or wrap name in quotes.
```
cat "spaces in this filename"
cat spaces\ in\ this\ filename
```

---

## Level 3 → 4
**Goal:** Password in a hidden file inside `inhere/` directory.
**Lesson:** Hidden files start with `.` — use `ls -la` to see them.
```
cd inhere
ls -la
cat .hidden
```

---

## Level 4 → 5
**Goal:** Password in the only human-readable file in `inhere/`.
**Lesson:** `file` detects file type. ASCII text = human-readable.
```
file ./-file0*
cat ./-file07   # whichever shows ASCII text
```

---

## Level 5 → 6
**Goal:** File is human-readable, 1033 bytes, not executable.
**Lesson:** `find` can filter by size, type, permissions.
```
find ./inhere -size 1033c ! -executable -type f
```

---

## Level 6 → 7
**Goal:** File is somewhere on the server, owned by bandit7, group bandit6, 33 bytes.
**Lesson:** `find /` searches whole system. `2>/dev/null` hides permission errors.
```
find / -user bandit7 -group bandit6 -size 33c 2>/dev/null
```

---

## Level 7 → 8
**Goal:** Password is next to the word "millionth" in `data.txt`.
**Lesson:** `grep` searches for a string inside a file.
```
grep "millionth" data.txt
```

---

## Level 8 → 9
**Goal:** Password is the only line that appears once in `data.txt`.
**Lesson:** `sort` then `uniq -u` finds lines that appear exactly once.
```
sort data.txt | uniq -u
```

---

## Level 9 → 10
**Goal:** Password is in `data.txt`, one of few human-readable strings, preceded by `=`.
**Lesson:** `strings` extracts readable text from binary files.
```
strings data.txt | grep "=="
```

---

## Level 10 → 11
**Goal:** Password is base64-encoded in `data.txt`.
**Lesson:** `base64 -d` decodes base64.
```
base64 -d data.txt
```

---

## Level 11 → 12
**Goal:** Password is ROT13-encoded.
**Lesson:** `tr` translates characters. ROT13 shifts letters by 13.
```
cat data.txt | tr 'A-Za-z' 'N-ZA-Mn-za-m'
```

---

## Level 12 → 13
**Goal:** `data.txt` is a hex dump of a repeatedly compressed file.
**Lesson:** `xxd -r` reverses hex dump. Then decompress using `gzip`, `bzip2`, `tar` repeatedly. Work in `/tmp`.
```
mkdir /tmp/mywork && cp data.txt /tmp/mywork && cd /tmp/mywork
xxd -r data.txt > data
file data          # check type, rename and decompress accordingly
mv data data.gz && gzip -d data.gz
# repeat: file → rename → decompress until you get ASCII text
```

---

## Level 13 → 14
**Goal:** No password given — use an SSH private key to log in as bandit14.
**Lesson:** SSH can authenticate with a key file using `-i`.
```
ssh -i sshkey.private bandit14@localhost -p 2220
```

---

## Level 14 → 15
**Goal:** Submit current password to port 30000 on localhost.
**Lesson:** `nc` (netcat) opens raw TCP connections.
```
cat /etc/bandit_pass/bandit14 | nc localhost 30000
```

---

## Level 15 → 16
**Goal:** Submit password to port 30001 using SSL.
**Lesson:** `openssl s_client` connects over TLS/SSL.
```
openssl s_client -connect localhost:30001
# then paste the password
```

---

## Level 16 → 17
**Goal:** Find which port in 31000–32000 speaks SSL and returns credentials.
**Lesson:** `nmap` scans ports. Then use openssl to talk to the right one.
```
nmap -p 31000-32000 localhost
openssl s_client -connect localhost:PORT
```

---

## Level 17 → 18
**Goal:** Password is the only line changed between `passwords.old` and `passwords.new`.
**Lesson:** `diff` shows differences between two files.
```
diff passwords.old passwords.new
```

---

## Level 18 → 19
**Goal:** `.bashrc` logs you out on login. Password is in `readme`.
**Lesson:** Pass a command directly to SSH to run without interactive shell.
```
ssh bandit18@bandit.labs.overthewire.org -p 2220 "cat readme"
```

---

## Level 19 → 20
**Goal:** Use a setuid binary to read the password.
**Lesson:** Setuid binaries run as their owner, not you. `ls -l` shows `s` in permissions.
```
ls -l bandit20-do
./bandit20-do cat /etc/bandit_pass/bandit20
```

---

## Level 20 → 21
**Goal:** Setuid binary connects to a port, you must serve the current password on that port.
**Lesson:** Run `nc` in background to listen, then run the binary. Use `&` to background a process.
```
echo "CURRENT_PASSWORD" | nc -l -p 1234 &
./suconnect 1234
```

---

## Key commands summary

| Command | What it does |
|---|---|
| `ssh -i key user@host -p PORT` | Login with private key |
| `cat ./-` | Read file named with dash |
| `file ./*` | Detect type of all files |
| `find / -user X -size Yc 2>/dev/null` | Find file by owner/size |
| `grep "word" file` | Search text in file |
| `sort file | uniq -u` | Find unique lines |
| `strings file | grep "="` | Readable strings in binary |
| `base64 -d file` | Decode base64 |
| `tr 'A-Za-z' 'N-ZA-Mn-za-m'` | ROT13 decode |
| `xxd -r file > out` | Reverse hex dump |
| `nc localhost PORT` | Raw TCP connection |
| `openssl s_client -connect host:PORT` | SSL connection |
| `nmap -p START-END host` | Scan port range |
| `diff file1 file2` | Compare files |
| `command &` | Run process in background |
