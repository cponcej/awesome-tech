# Linux Commands Examples

- Want to increments all numbers in input.txt? 

		perl -pe 's/(\d+)/ 1 + $1 /ge' input.txt

- cp - u will only copy files that don't exist, or are newer than their existing counterparts, in the destination directory.
- Print server serial/product/manufacturer:
		
		for i in serial-number manufacturer product-name; do 
		echo "$i $(dmidecode -s system-${i})"; 
		done

- Quickly find the largest 5 files in the CWD tree without crossing filesystem boundaries

		find . -xdev -ls | sort -n -k 7 | tail -5

- Want to store log of your ssh session? Try:
		
		ssh -l user server1 | tee -a ~/myssh.log

- Want to find out which file is the oldest in tar ball archive?

		tar -tvf xkcd-tar-bomb.tar.gz | sort -k 4 -r | head

- Add ssh key to remote host. Wrong: 

		cat key | ssh usr@box 'cat >> .ssh/authorized_keys' 

- Add ssh key to remote host. Correct: 

		ssh-copy-id usr@box

- List 10 largest open file on Unix:

		lsof /|awk '{ if($7>1048576) print $7/1048576 "MB" " " $9 " " $1 }'|sort -nu|tail 

- list top 50 404's in descending order.

		awk '$9 == "404" {print $7}' access.log |sort|uniq -c|sort -rn| head -n 50

- Want to extract files to another directory using tar command? Try 

		tar xvf file.tar -C /path/to/dir

- Want to see your FreeBSD server cpu temperature? Try:

		sysctl -a |grep temper

- Want to delete a single command from history on a Linux, OS X & Unix Bash shell? 

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

- Search (grep) for multiple error message on Linux/Unix:

		egrep -w 'warning|error|critical' /var/log/messages

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

- Want to delete existing SAN LUNs on Linux?

		multipath -f map # Flush a multipath devicemap 
		echo 1>/sys/block/sdc/device/delete # Delete sdc

- List both running privileged and unprivileged lxc containers: 

		netstat -ax | egrep '@.*/lxc/.*/command$'	

- Show the TCP and UDP ports being listened on and if you're root, also show the process associated, user, etc.
	
		netstat -lepunt

- Want to find out the MAC addresses of the KVM powered VM? Try

		virsh dumpxml VM_NAME | grep 'mac address'	

- Want to list block devices on #Linux easily? Try 

		lsblk 
		lsblk -m 
		lsblk -f

- Start a web service on port 8000 that uses the current directory as its document root

		python -m SimpleHTTPServer

- Make slideshow from *.jpg

		for p in *.jpg; do ffmpeg -loop_input -f image2 -i $p -t 3 -r 4 -s 1080x720 -f avi - >> slides.avi; done 
		
- Wrap the lines of draft.txt at 72 characters wide, doing so at spaces, not middle of word (-s)

		fold -w 72 -s draft.txt > newdraft.txt

- tail log & highlight errors (if your grep supports --color)

		tail -f foo.log|egrep --line-buffered --color=auto 'ERROR|WARN|$'

- Instead of typing the user & group, if they are the same you can just type the user followed by a colon

		chown -R www-data: * 

- Show the query and results of 'select' queries going to your mysql server. Won't work on socket conns

		ngrep -d eth0 -i 'select' port 3306

- Show what processes are using port 80 either locally or remotely. Need to be root for unowned processes.

		lsof -i TCP:80 

- What I've done this week

		git log --author=$USER --format="- %B" --since=-7days --reverse |mail -s "What I've done this week" boss@company\.com

- I find brace expansion useful for renaming files. This cmd expands to "mv Picture.jpg Picture-of-my-cat.jpg"

		mv Picture{,-of-my-cat}.jpg

- Suspend and reattach a process to screen

		longcmd ; [Ctrl-Z] ; bg ; disown ; screen ; reptyr $( pidof longcmd )

- Apparently according to testing, this is the fastest way to delete millions of small files.

		rsync -a -delete empty/ foo/

[![largest open files](images/largest_open_files.png)](https://twitter.com/nixcraft)

<div class="container">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/UvZY7bYt2Lo?rel=0" frameborder="0" allowfullscreen class="video"></iframe>
</div>
<br>

[![commandlinefu 0 star](images/commandlinefu0star.png)](https://twitter.com/commandlinefu)

[![commandlinefu 3 star](images/commandlinefu3star.png)](https://twitter.com/commandlinefu3)

[![commandlinefu 10 star](images/commandlinefu10star.png)](https://twitter.com/commandlinefu10)

[![climagic twiiter](images/climagic.png)](https://twitter.com/climagic)

[![unixtooltip twitter](images/unixtooltip_twitter.png)](https://twitter.com/UnixToolTip)

[![climagic youtube](images/climagic-icon.png)](https://www.youtube.com/user/climagic)

[![linux skill](images/linuxskill.png)](https://www.youtube.com/channel/UCmzTzKZT3yWaIiFvEyIHrOg)

[![commandlinefu](images/commandlinefu.com)](http://commandlinefu.com/)