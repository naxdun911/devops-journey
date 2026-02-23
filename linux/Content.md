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


cat <<end> file.txt
hello
world 
end    --> tpye end in a new line to end entering




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



# --- history ---
This is used to see the command history

Searching Your History:
One of the most powerful history shortcuts is Ctrl-R. This initiates a reverse search. After pressing Ctrl-R, start typing any part of the command you're looking for, and the shell will display the most recent match. You can press Ctrl-R repeatedly to cycle through older matches. Once you find the command you want, just press Enter to execute it.



# --- cp ---

cp file.txt /home/naxdun/linux/files   --> file and dest.
cp file.txt /home/naxdun/linux/files/new-file-name    -->add a new file name

cp file*.txt /home/naxdun/linux/files    --> Use wildcard (*) for bulk copying

cp -r folder1 /home/naxdun/linux    --> to copy folders
cp -i file.txt /home/naxdun/linux/files    --> ask before overwrite a file
cp -f file.txt /home/naxdun/linux/files    --> overwrite without asking
cp -p file.txt /hommv file_1 file_2 /somedirectorye/naxdun/linux/files    --> preserve data like timestamp


# --- mv ---
used to move and rename files

mv oldfile newfile    -->works for files and directories

mv test1 ../files    -->file path starts from the parent directory

mv -r    -->    unlike cp, mv doesnt need -r to move directories
mv file_1 file_2 /somedirectory    --> move multiple files

A useful option for this is linux mv -t, which allows you to specify the target directory first. This can be clearer when moving many files.
    >>mv -t /somedirectory file_1 file_2

Important Options for the mv Command:
    By default, if you move a file to a destination where a file with the same name already exists, mv will overwrite it without warning. To prevent accidental data loss, you can use the following options:

    -i (interactive): This is a crucial safety feature. It will prompt you for confirmation before overwriting any existing file.
        mv -i source_file destination_directory

    -b (backup): If you intend to overwrite a file but want to keep the old version, this option creates a backup of the destination file. The backup is typically renamed with a tilde (~) suffix.
        mv -b file1 directory_with_file1

    -v (verbose): This option makes the mv command print out what it is doing, showing each file being moved or renamed.
        mv -v file1 file2 /somedirectory



# --- mkdir ---

mkdir -p books/hemmingway/favorites    -->to create nested directories



# --- rm ---
used for deleting

rm file1
rm folder1    --> doent work
rm -r folder    --> delete folder and its content
rmdir folder1    --> delete empty folder
rm -f file1    --> forcefully delete any protected file
rm -rf    --> the dangerous combination
rm i file1    --> prompts before deleting each file



# --- find ---
to find files

find /home -name puppies.jpg    --> will search for files names puppies.jpg inside home and all the sub directories of it



# --- help ---

echo help    --> get details of echo command
ls --help    --> get details of any other command



# --- man ---
get the manual for every command

man ls



# --- whatis ---
give an one line description for all commands

whatis touch



# --- alias ---
giving a nickname for long commands

alias ll='ls -la'    --> this will be gone after closing the terminal

Alisases can make permanent.. google for it hehe



# --- stdout (echo) ---
used to display sometihng

>>echo hello world
>>echo Hello World > hello.txt    --> instead of printing text, it creates a file and save it. If the file exists, it overwrites it.
>>echo Hello World >> hello.txt    --> appends new content

# --- stdin (cat) ---

Practical Example with cat stdin:
    Let's revisit the peanuts.txt file from the previous lesson, which contains the text "Hello World". Consider the following command:
        cat < peanuts.txt > banana.txt
    
    Here’s a breakdown of what happens:
        The < peanuts.txt part tells the shell to redirect stdin for the cat command, making it read from peanuts.txt instead of the keyboard.
        The cat command processes its input. In this case, using cat stdin means it reads the content of peanuts.txt.
        The > banana.txt part redirects the standard output of cat to a new file named banana.txt.



# --- stderr ---

Understanding File Descriptors
To manage I/O streams like stdin, stdout, and stderr, the system uses file descriptors. A file descriptor is a non-negative number that the kernel uses to identify an open file or stream. The default file descriptors are:

0: stdin (standard input)
1: stdout (standard output)
2: stderr (standard error)

>>cat /etc/hosts > output.txt    --> Redirect output straightly to a file
>>cat /etc/fakefile > output.txt    --> No output.. By default, only stdout saves in the file, not the stderr s
>>cat /etc/fakefile 2> errors.txt    --> Use 2 for std err

-Redirect Both stdout and stderr-
Very commonly used in scripts:
    >>cat /etc/hosts /etc/fakefile > output.txt 2> errors.txt
Normal output → output.txt
Errors → errors.txt

Or send both to the same file:
    >>cat /etc/hosts /etc/fakefile > all-output.txt 2>&1



# --- pipe ---
This uses pipe operator '|' to combines the commands.
The output of the left side of the operator is directly sent into the RHS of the operator

ls -la /etc | less

What Does | Actually Do?
The pipe redirects the output of the left command to become the input of the right command.



# --- tee ---
tee is used to log and monitor at same time.

>>ls | tee peanuts.txt
>>echo "Hello" | tee output.txt --> the output of echo is directly sent to the tee. It displays and writes it.


Combining pipe and tee
>> ls -la /etc | tee etc_listing.txt | grep "conf"



# --- cut ---

>>cut -c 5 sample.txt    --> Just cut the 5h character
>>cut -f 2 sample.txt    --> Cut the second field. Fields are seperated by delimeters. 
                             Default Delimeter is TAB space.
>>cut -f 1 -d ";" sample.txt     --> We can set the delimeter as we want.



# --- paste ---

Let's combine all these lines into one line:

>>paste -s sample2.txt    --> The default delimiter for paste is TAB, so now there is one line with TABs separating each word.

Let's change this delimiter (-d) to something a little more readable:

>>paste -d ' ' -s sample2.txt    --> Now everything should be on one line delimited by spaces.



# --- head ---
Used to view the firstr few lines of a very large file

head Big-file..txt
head -n 15 Big-file.txt    --> to set the number of lines



# --- tail ---
Used to view the last entries of a file. Opposite of "head".

tail Big-file..txt
tail -n 15 Big-file.txt    --> to set the number of lines



Real-Time File Monitoring with tail -f:
One of the most powerful features of the tail command is its ability to monitor files in real-time. This is achieved with the -f (follow) flag. When you use tail -f, the command doesn't exit after displaying the last few lines. Instead, it waits for new data to be appended to the file and prints it to the screen as it arrives.

>>tail -f /var/log/syslog    --> Wait for new lines to be apppeared in the file and displays it.



# --- expand ---
This feature breaks down a TAB space into 8 spaces.. which expands the size of a file

>>expand smaple.txt

>>expand sample.txt > result.txt    --> save the output in a new file


To Unexpand:
    >>unexpand -a result.txt    --> Do the reverse of expand



# --- join ---

file1.txt:
    Anna 25
    John 32
    Bush 55

file2.txt:
    Anna Colombo
    John London
    Bush Tokyo

>>join file1.txt file2.txt
    Anna 25 Colombo
    John 32 London
    BUsh 55 Tokyo

# --- split ---
By default this split a large file into files of 1000 lines.
New file names will be xaa, xab, xac...

>> split somefile.txt
>> split -l 1 somefile.txt    --> now a file conatain only one line



# --- sort ---

sort file.txt    --> sort in alphabetical order
sort -r file.txt    --> Reverse order



# --- tr ---
Used to manipulate text(Translate) 

>>echo "hello world" | tr a-z A-Z
HELLO WORLD

>>echo "My address is 123 Main Street" | tr -d '0-9'    --> Delete
My address is  Main Street



# --- uniq ---
Removes the duplicates

>>uniq file.txt    --> Only removes the duplicates which are adjacent
>>uniq -c file.txt    --> Count the duplicates
>>sort file.txt | uniq -c file.txt    --> This pipelining is wrong.. uniq doesnt use rhe previous output
>>sort file.txt | uniq -c    --> Correct version
>>sort file.txt | uniq     --> No counting



# --- wc ---
Used to get the word count of a file

>>wc file.txt
 8 10 70 test.txt
The output displays three numbers followed by the filename. From left to right, these numbers represent:
    1.The number of lines.
    2.The number of words (the Linux word count).
    3.The number of bytes.

Getting Specific Counts:
Often, you only need one piece of information. You can use options to display a specific count instead of all three.
    -l: Shows only the line count.
    -w: Shows only the word count.
    -c: Shows only the byte count.



# --- nl ---
Used to number the lines of a file.

nl file.txt



# --- grep ---
Used to search within a file

>>grep to example.txt
>>grep -e "to" example.txt    --> Used to say what we are exactly looking for.
>>grep -i somepattern somefile    --> Case-Sensitive search
>>grep -c fox sample.txt    --> How many lines with the required search
>>grep -o fox sample.txt    --> Show only the match
>>env | grep -i User    --> Can be used in pipelining



# --- regex ---
regex = regular expression

| Symbol | Meaning                         |    |
| ------ | ------------------------------- | -- |
| `.`    | Any single character            |    |
| `*`    | 0 or more of previous character |    |
| `+`    | 1 or more of previous character |    |
| `?`    | 0 or 1 of previous character    |    |
| `^`    | Start of line                   |    |
| `$`    | End of line                     |    |
| `[]`   | Character set                   |    |
| `[^]`  | Negated set                     |    |
| `      | `                               | OR |
| `()`   | Grouping                        |    |

>>grep "^apple" file.txt    --> Match any line starting with apple
>>grep "banana$" file.txt     --> Match lines ending with banana
>>grep "b.nana" file.txt    --> Match any single character
# matches banana, bnana, bxnana, etc.

>>grep "[a-z]" file.txt    --> matches any lowercase letter
>>grep "[0-9]" file.txt    --> matches digits

