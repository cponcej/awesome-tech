<!-- MarkdownTOC -->

- [Linux Commands Examples](#linux-commands-examples)

<!-- /MarkdownTOC -->

[![commandlinefu](images/commandlinefu.com)](http://commandlinefu.com/)

[![climagic youtube](images/climagic-icon.png)](https://www.youtube.com/user/climagic)

[![linux skill](images/linuxskill.png)](https://www.youtube.com/channel/UCmzTzKZT3yWaIiFvEyIHrOg)

# Linux Commands Examples
- [Linux Commands Tweets](linux-commands-tweets.md)
- [nixCraft: My 10 UNIX Command Line Mistakes](http://www.cyberciti.biz/tips/my-10-unix-command-line-mistakes.html)

- Make your prompt safer with # so that if you accidentally copy & paste it, it doesn't run. 🌟🌟🌟🌟🌟

		PS1="# $PS1"

- In bash, cd - takes you back to your previous directory.

- Tired of repeatedly pressing 'y' through some shell process? Try the 'yes' command: 🌟

		yes | rm *.txt 
		yes | fsck /dev/FOO

- Edit a file on a remote server using vim from your local *nix desktop

		vim scp://user@server1//etc/httpd/httpd.conf 

- Using +F option or pressing F in less is similar to `tail -f filename.log` but can use less's features. 🌟🌟

		less +F filename.log 

- Show the first and last 5 lines of the file 'log'.

		(head -5; tail -5) < log
		
- Make less more like more, but still more than more. Percent of file in prompt, etc. 

		export LESS='-sCmqPm--Less--(?eEND:%pb\%.)'

- This environment variable will invoke 'less' with these options when it is used. Like when viewing a man page.

		export LESS="-S -j10 -i" 

- Find out which of your directories(below the current directory) occupy at least 1GB of space. 🌟🌟

		du -h . | grep "^[0-9\.]\+G"

- List of empty subdirectories of current directory.

		find . -empty -type d

- Find and long list mp3 files in Music dir older than a year and larger than 10MB.

		find music -name '*.mp3' -mtime +365 -a -size +10M -ls 

- Like ping, but it uses an ARP request to check, which gets around host firewalls blocking ICMP. Only works on same subnet

		arping 10.0.8.5

- Show directory size and sort by human readable amount (MB, GB, etc.). Requires GNU sort for -h option. 🌟🌟

		du -sh */ | sort -h 

- Show the total space used on all your local disk partitions. 🌟

		df -lP |awk '{sum += $3} END {printf "%d GiB\n", sum/2**20}' 

- Print disk space used on all ext3 or 4 FS in GiB.

		df -Pl -t ext3 -t ext4 | tail -n+2 | awk '{ sum+=$3 } END { print sum/2**20 }'

- Life is too short to run the same command twice.

		export HISTSIZE=0 

- Want to increments all numbers in input.txt? 

		perl -pe 's/(\d+)/ 1 + $1 /ge' input.txt

- cp - u will only copy files that don't exist, or are newer than their existing counterparts, in the destination directory.
- Print server serial/product/manufacturer:
		
		for i in serial-number manufacturer product-name; do 
		echo "$i $(dmidecode -s system-${i})"; 
		done

- Copy a file using "ionice -c 3" to give it idle priority to reduce load on the system.

		ionice -c 3 cp vm1.img vm1-clone.img

- Remove the prefix 'unwanted' from the beginning of each filename with .jpg suffix in CWD.

		rename 's/^unwanted//' *.jpg

- Find file duplicates in 'dir' recursively based on size and mdsum and log to dupes.txt

		fdupes -r dir > dupes.txt

- Quickly find the largest 5 files in the CWD tree without crossing filesystem boundaries 🌟🌟🌟

		find . -xdev -ls | sort -n -k 7 | tail -5

- counts files in the current path by modification month

		find . -maxdepth 1 -type f -printf '%TY-%Tm\n' | sort | uniq -c 

- Use the */ trick to get only the directories, then use ${dir%/} to remove the trailing / you get

		for dir in */ ; do echo "${dir%/}" ; done

- Move current year pics to 2015 directory.

		find . -maxdepth 1 -daystart -type f -name '*.jpg' -mtime -$( date +%j ) -exec mv -v {} 2015/ \;

- Lower case all files in a folder.

		for f in *; do b=$(echo "$f" | tr '[A-Z]' '[a-z]'); mv "$f" "$b"; done

- Print the day of the year. Can be useful with things like find.

		date +%j 

- Make month histogram of dates of files in current directory.

		ls -la --full-time |tr -s " " |cut -f6 -d " "|cut -c1-7 | sort | uniq -c

- Use cut to print out columns 1, 5 and 10 through 15 in data.csv and write that to new.csv

		cut -d, -f1,5,10-15 data.csv > new.csv 
		
- Want to store log of your ssh session? Try:
		
		ssh -l user server1 | tee -a ~/myssh.log

- Want to find out which file is the oldest in tar ball archive?

		tar -tvf xkcd-tar-bomb.tar.gz | sort -k 4 -r | head

- Add ssh key to remote host. Wrong: 

		cat key | ssh usr@box 'cat >> .ssh/authorized_keys' 

- Add ssh key to remote host. Correct: 🌟🌟

		ssh-copy-id usr@box

- Create a dynamic SOCKS5 proxy on port 8989 using an SSH connection. Some apps can be configured to use this.

		ssh -D 8989 you@remotehost 

- After all the host keys and auth, you'll be on server3.

		ssh -t user1@server1 'ssh -t user2@server2 "ssh -t user3@server3"'

- The awk variable $1 contains the first field in a record, $2 the second, $3 the third, etc. $0 contains all fields.

- Print all from 3rd field to end of line. Very useful for log parsing.

		awk '{ print substr($0, index($0,$3)) }' mail.log

- List 10 largest open file on Unix:

		lsof /|awk '{ if($7>1048576) print $7/1048576 "MB" " " $9 " " $1 }'|sort -nu|tail 

- *"Attempt"* to recover an accidentally removed file. 🌟🌟

		fgrep --binary-files=text -C 2000 "string in file" /dev/sda > recovereddata.out 

- Replace foo with bar only on lines that contain 'bang'. Use in pipeline or with file args. 🌟

		sed "/bang/ s/foo/bar/" 

- Watch web server access log for HTTP status code 500 & display entry generated that code: 🌟

		tail -f access.log | awk '$9 == 500 { print $0 }'

- You can actually follow more than one log at once and get new updates on them. Use -q to not print filename header.  🌟

		tail -f *.log 

- list top 50 404's in descending order.

		awk '$9 == "404" {print $7}' access.log |sort|uniq -c|sort -rn| head -n 50

- Request by hour graph.

		awk '{print $4}' apache_log|sort -n|cut -c1-15|uniq -c|awk '{b="";for(i=0;i<$1/10;i++){b=b"#"}; print $0 " " b;}'

- Count syslog hits per minute in your messages log file. Useful for doing quick stats.

		awk -F: {'print $1 ":" $2'} messages |uniq -c

- Get list of top URLs from all logs combined 🌟🌟🌟

		zcat access_log*.gz |cat - access_log |awk '{print $7}' |sed 's/\?.*//' |sort|uniq -c|sort -nr 

- For Mar 22nd, print the req fields for hosts from two letter gTLD

		fgrep 22/Mar/2015 access_log |awk '$1~/\.[a-z][a-z]$/{print $6 " " $7}'

- Want to extract files to another directory using tar command? Try 

		tar xvf file.tar -C /path/to/dir

- Compress files with xz in PWD according to size, starting with smallest.

		ls -Sr1 | while IFS=$'\n' read -r file; do xz "$file"; done
		
- The utility 'file' reports a file's type. With the option -z it will try to look inside zipped files.

- Compare the contents of 2 dirs. Show only 2 columns, each for files unique to the directory:

		comm -3 <(ls -1 dir1) <(ls -1 dir2)

- Want to see your FreeBSD server cpu temperature? Try:

		sysctl -a |grep temper

- Want to delete a single command from history on a Linux, OS X & Unix Bash shell? 🌟

		history -d N

- Want to resume failed download on Linux/Unix/OSX/BSD?

		curl -LOC - url 
		wget -c url

- Quick and easy way to make a mirror of a website

		wget -m http://www.example\.com/

- Is my HTTPD using Gzip?

		curl -sILH 'Accept-Encoding: gzip,deflate' http://cyberciti.biz | grep Content-Encoding

- Want to use the curl command with proxy username/password on Linux/Unix? 

		curl -x usr:pwd@proxy:port url

- You can use the text-based web browser to browse the Internet in console

		w3m cyberciti.biz
		lynx cyberciti.biz 

- Search (grep) for multiple error message on Linux/Unix: 🌟🌟🌟

		egrep -w 'warning|error|critical' /var/log/messages

- Search for names and build a frequency count for each name.

		egrep -wo "(Donnie|Frank|Roberta|Grandma)" story.txt |sort|uniq -c|sort -r 

- [The following is Juniper screenOS authentication backdoor - master ssh password:](https://t.co/IQOGT33oTC)

		<<< %s(un='%s') = %u

- [Want to list all iptables rules with line numbers? Try](http://www.cyberciti.biz/faq/linux-viewing-all-iptables-rules-with-numbers-command/)

		iptables -L -n -v --line-numbers

- Want to see whether there was an error after executing a command but no error message was displayed? $? shows the exit status. Try 

		echo $?

- Want to see disks attached to Linux server? Try 

		lsscsi

- Want to list SCSI devices (or hosts) and their attributes under Linux operating systems? Try 

		lsscsi -g

- Want to delete existing SAN LUNs on Linux? 🌟

		multipath -f map # Flush a multipath devicemap 
		echo 1>/sys/block/sdc/device/delete # Delete sdc

- List both running privileged and unprivileged lxc containers: 

		netstat -ax | egrep '@.*/lxc/.*/command$'	

- Show the TCP and UDP ports being listened on and if you're root, also show the process associated, user, etc. 🌟🌟🌟
	
		netstat -lepunt

- Want to find out the MAC addresses of the KVM powered VM? Try

		virsh dumpxml VM_NAME | grep 'mac address'	

- Want to list block devices on #Linux easily? Try 

		lsblk 
		lsblk -m 
		lsblk -f

- Start a web service on port 8000 that uses the current directory as its document root

		python -m SimpleHTTPServer

- Use perl regex (negative look-behind/look-ahead assertions) to get URLs.

		grep -P -o '(?<=href=")http:\S+(?=")' *.html 

- WP abuse

		grep -h "POST /.*wp-login.php" *-access_log |awk '$1!~/^my.ip.addr$/{print $1}' |sort|uniq -c|sort -nr |head -50> wp-abusers.txt 

- Make slideshow from *.jpg

		for p in *.jpg; do ffmpeg -loop_input -f image2 -i $p -t 3 -r 4 -s 1080x720 -f avi - >> slides.avi; done 
		
- Wrap the lines of draft.txt at 72 characters wide, doing so at spaces, not middle of word (-s)

		fold -w 72 -s draft.txt > newdraft.txt

- tail log & highlight errors (if your grep supports --color)

		tail -f foo.log|egrep --line-buffered --color=auto 'ERROR|WARN|$'

- Random color per log line.

		tail -F syslog |while read -r line;do printf "\033[38;5;%dm%s\033[0m\n" $(($RANDOM%255)) "$line";done

- Instead of typing the user & group, if they are the same you can just type the user followed by a colon

		chown -R www-data: * 

- Show the query and results of 'select' queries going to your mysql server. Won't work on socket conns

		ngrep -d eth0 -i 'select' port 3306

- Show what processes are using port 80 either locally or remotely. Need to be root for unowned processes. 🌟

		lsof -i TCP:80 

- On Linux, print out a list of the process IDs that are in the zombie state.

		ps aux | awk '{if ($8=="Z") { print $2 }}'
		
- What I've done this week

		git log --author=$USER --format="- %B" --since=-7days --reverse |mail -s "What I've done this week" boss@company\.com

- Which days I've worked...

		git log --date=short --format="%ci"|awk '{print $1}'|uniq 

- I find brace expansion useful for renaming files. This cmd expands to "mv Picture.jpg Picture-of-my-cat.jpg"

		mv Picture{,-of-my-cat}.jpg

- Show % reports of CPU statistics for every active task in the server at two second intervals. 🌟

		pidstat 2 5

- Suspend and reattach a process to screen

		longcmd ; [Ctrl-Z] ; bg ; disown ; screen ; reptyr $( pidof longcmd )

- Want to clean metadata from images and other files on Linux? Try 

		mat -d file.jpg # Display it 
		mat file.jpg # Clean it

- Apparently according to testing, this is the fastest way to delete millions of small files.

		rsync -a -delete empty/ foo/

[![largest open files](images/largest_open_files.png)](https://twitter.com/nixcraft)

<div class="container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/GaAfhO1kpUk?rel=0" frameborder="0" allowfullscreen class="video"></iframe>
</div>
<br/>

<div class="container">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/UvZY7bYt2Lo?rel=0" frameborder="0" allowfullscreen class="video"></iframe>
</div>
<br>

<div class="container">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/zyZZiqphwk4WEs" width="668" height="714" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/prakashrockz/red-hat-lvm-cheatsheet" title="Red hat lvm cheatsheet" target="_blank">Red hat lvm cheatsheet</a> </strong> from <strong><a href="//www.slideshare.net/prakashrockz" target="_blank">Prakash Ghosh</a></strong> </div>
</div>
<br/>

<blockquote class="imgur-embed-pub" lang="en" data-id="a/Ia5mz"><a href="//imgur.com/a/Ia5mz">Got inspired and made this wallpaper today. Hope you enjoy.</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>

[![commandlinefu 0 star](images/commandlinefu0star.png)](https://twitter.com/commandlinefu)

[![commandlinefu 3 star](images/commandlinefu3star.png)](https://twitter.com/commandlinefu3)

[![commandlinefu 10 star](images/commandlinefu10star.png)](https://twitter.com/commandlinefu10)

[![climagic twiiter](images/climagic.png)](https://twitter.com/climagic)

[![unixtooltip twitter](images/unixtooltip_twitter.png)](https://twitter.com/UnixToolTip)
