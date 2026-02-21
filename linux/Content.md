# ----------------------
# Linux Fundamentals
# ----------------------


# --- cd ---

cd -    #previous working directory
cd ~    #root directry



# --- ls ---
s
ls -a       # show al
ls      #show detaill details including the hidden files
ls -l       #use long format
ls -r       #lists in reverse alphabelticcal order
ls -alr     #order doesnt matter



# --- touch ---
#Used to create files
#Main usage of this file is updating the Timestamp of this file. If we touch the file, it updates the timestamp

touch -r file1.txt file2.txt    # Set file2.txt's timestamp to match file1.txt's timestamp
touch -d "2023-01-01 12:30:00" mysuperduperfile     # Set the timestamp to a specific date and time



# --- file ---
This command is used to find the real file type of a file
In linux, test.txt doesnt actually needs to be a text file.

file banana.jpg



# --- cat ---
Basically used to read the whole content of a file.Not good for a large file

cat dogfile birdfile        --> This command will first display the contents of dogfile, immediately followed by the contents of birdfile

cat > newfile.txt       --> Crate and lets us write in the text file same time

cat options...
-n: This option numbers all output lines, starting from 1.
-b: This option numbers only the non-empty output lines.



# --- less ---
Used to view large files.. 
This opens a seperate window like thing

less filename.txt

Use:
    h - help
    q - quit

Unix Less Search:
A powerful feature of less is its ability to search for text. To perform a unix less search, type / followed by the text you want to find, and then press Enter. This will highlight all occurrences of your search term.

/search_term: Searches forward for "search_term".
?search_term: Searches backward for "search_term".
n: Jumps to the next occurrence of the search term.
N: Jumps to the previous occurrence.


