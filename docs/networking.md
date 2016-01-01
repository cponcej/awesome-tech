**Table of Contents**
<!-- MarkdownTOC -->

- [Networking](#networking)
	- [Next Generation Firewalls. Dell SonicWall](#next-generation-firewalls-dell-sonicwall)
	- [Network virtualization](#network-virtualization)
	- [Network Forensics](#network-forensics)
		- [Network Forensics Blogs](#network-forensics-blogs)
		- [Network Forensics Docs](#network-forensics-docs)
		- [Network Forensics and Monitoring for MySQL and PostgreSQL](#network-forensics-and-monitoring-for-mysql-and-postgresql)
	- [VoIP](#voip)
	- [WiFi security](#wifi-security)
	- [WebPerf and Resilient Networking: Planning for Failure](#webperf-and-resilient-networking-planning-for-failure)

<!-- /MarkdownTOC -->


# Networking
## Next Generation Firewalls. Dell SonicWall
- Compliant with new Enterprise Broadband Internet Connections (300 & 500Mbps)
- [Dell SonicWALL PowerPoint Presentation](http://www.infinigate.dk/fileadmin/user_upload/CH/Events/ITSCR2015/DELL_SonicWALL1.pdf)
- [Dell SonicWALL TZ500 Firewall Review](http://www.storagereview.com/dell_sonicwall_tz500_firewall_review)
- [Dell Security Live Demo](http://livedemo.sonicwall.com)
- [New Dell SonicWALL 6th Generation TZ Series Firewalls Deliver Enterprise-Class Capabilities for Small Business Budgets](http://www.dell.com/learn/us/en/uscorp1/press-releases/2015-04-28-dell-sonic-wall-tz-series)
- [SonicWALL Firewall vs. Fortinet Fortigate](http://www.firewalls.com/sonicwall_vs_fortigate)
- [Dell Security Adds 50 Percent Rebate On SonicWall TZ And NSA Appliances](http://www.crn.com/news/channel-programs/300077951/dell-security-adds-50-percent-rebate-on-sonicwall-tz-and-nsa-appliances.htm)
- [darkreading.com: 5 Tips For Getting The Most Out Of Your Firewall](http://www.darkreading.com/perimeter/5-tips-for-getting-the-most-out-of-your-firewall/d/d-id/1323634) Role-based Access Control is a must for getting the most out of your firewall
- [11 cool things your firewall should do](http://www.sonicwall.com/documents/11-cool-things-your-firewall-should-do-ebook-24538.pdf) Extend beyond blocking network threats to protect, manage and control application traffic 
- [Demand more from your wireless network. SonicWALL wireless network security combines high speed 802.11ac & next-gen firewalls](http://www.sonicwall.com/documents/demand-more-from-your-wireless-network-datasheet-75796.pdf)
- [mysonicwall.com: Dell SonicWALL Security Center](https://www.mysonicwall.com/sonicalert/SonicALERT.aspx)
	- [Data stealing trojan described as a JPG file (December 31, 2015)](https://www.mysonicwall.com/sonicalert/searchresults.aspx?ev=article&id=886)

![Dell SonicWall TZ500 Management Monitor](images/Dell-SonicWall-TZ500-Management-Monitor.png)

## Network virtualization
- [FOSS Network Functions Virtualization](https://www.opnfv.org)

## Network Forensics

### Network Forensics Blogs
- [seguridadyredes.wordpress.com](https://seguridadyredes.wordpress.com/)
- [packetbomb.com](http://packetbomb.com/)
- [blog.packet-foo.com](https://blog.packet-foo.com)
- [LoveMyTool - Building an Open Community for Network Management and Monitoring](http://www.lovemytool.com/blog)
- [thevisiblenetwork.com](http://www.thevisiblenetwork.com)
- [packetlife.net](http://packetlife.net/)
- [Packet Pushers](http://packetpushers.net/)
- [The Networking Nerd](http://networkingnerd.net/)
- [sharkfest.wireshark.org](http://sharkfest.wireshark.org)

### Network Forensics Docs
- [Digital Attack Map. Top daily DDoS attacks worldwide](http://www.digitalattackmap.com/)
	- [radware.com: DDoS Handbook](https://www.radware.com/social/ddoshandbook/)
- [WireEdit. First-Of-A-Kind and The Only Full Stack WYSIWYG Packet Editor Edit L2 - L7 with just a few clicks](https://wireedit.com/)
- [Optimal Wireshark Setup | Enhance Your Wireshark Experience](https://www.youtube.com/watch?v=F4l3CedRlJc)
	- [Switches And Tool Placement (by Tony Fortunato). Ubicación de las herramientas de análisis de tráfico en redes conmutadas (switched networks). Taps, span ports y hubs](http://www.lovemytool.com/blog/2014/06/switches-and-tool-placement-by-tony-fortunato.html)
- [Wireshark 101: Transmission Control Protocol, video tutorial](https://www.youtube.com/watch?v=iX44XIZafiw)
- [Tip: do not capture on a computer directly unless you understand the side effects and you can live with them.](https://blog.packet-foo.com/2014/05/the-drawbacks-of-local-packet-captures/) Do not capture on local systems. Use SPAN ports and TAPs, if you have to. It’s the only way to get good readings. Unless you don’t care about frame sizes, timings, broken checksums, interference from other software you should not capture on a local system.
- [HTTP Basic Authentication with wireshark](http://www.networkcomputing.com/applications/http-basic-authentication-primer/d/d-id/1323331)
- [youtube: TCP Window Performance Analysis](https://youtu.be/N-n1n6WKmRs)
- [How Can the Packet Size Be Greater than the MTU?](http://packetbomb.com/how-can-the-packet-size-be-greater-than-the-mtu/)
- [INE.com training videos: Analyzing Packet Lengths](https://youtu.be/qsUaB36CVDw)
- [blog.cloudflare.com - The story of one latency spike](https://blog.cloudflare.com/the-story-of-one-latency-spike/)
	- [packetbomb.com: Case Study: All Web Pages Load Slooooowly](http://packetbomb.com/case-study-all-web-pages-load-slooooowly/)
	- [Calculate HTTP response time in wireshark](http://www.thevisiblenetwork.com/2015/01/21/calculate-http-response-time-in-wireshark/)
	- [Diagnose slow connections with Wireshark](http://theitjuggler.com/how-to/diagnose-slow-connections-wireshark/)
	- [Toubleshooting with Wireshark: Detect HTTP Delays](http://youtu.be/5k16DWEnEGA)
	- [Troubleshooting with Wireshark: Detect TCP Delays (full video)](https://www.youtube.com/watch?v=YJRmh6L2Hls)
	- [Packet timing and Average IO Graph with Wireshark](http://www.lovemytool.com/blog/2014/09/documenting-why-its-slow-by-tony-fortunato.html)
	- [Calculate HTTP response time in wireshark](http://thevisiblenetwork.com/2015/01/21/calculate-http-response-time-in-wireshark/)
	- [Understanding Application Performance on the Network – Part VII: TCP Window Size](http://apmblog.dynatrace.com/2014/08/12/understanding-application-performance-network-part-tcp-window-size/)
- [Troubleshooting with Wireshark: Identifying SIP Errors](https://www.youtube.com/watch?v=bu6kpneLlFc)
	- [How to Capture and Debug SIP Packets from asterisk using tcpdump and Wireshark](https://www.youtube.com/watch?v=OFpQLyQxt84)
- [Laura Chappell's Top Videos](https://www.youtube.com/user/thebitgirl/videos)
	- [Wireshark Tip 10: Identify Separate TCP Conversations with TCP Stream Index (Laura Chappell)](https://www.youtube.com/watch?v=0dFndZwkDGY)
	- [Wireshark profiles](https://www.youtube.com/watch?v=pxxcuR7fwXM)
	- [PacketLife.net](http://packetlife.net/)
	- [Sharkfest 2013 - Wireshark Network Forensics (Laura Chappell). Seguridad con Wireshark: ejemplos de ataques de seguridad DDoS (macof, DNS), filtros, perfiles, coloreado de frames y tshark para trazas largas](https://www.youtube.com/watch?v=UXAHvwouk6Q)
	- [wireshark's colors, by Laura Chappell](http://bit.ly/nmapcolors)
- [Sharkfest '14 Retrospective](http://sharkfest.wireshark.org/sharkfest.14/)
	- [How to Use Wireshark to Analyze Video](http://sharkfest.wireshark.org/sharkfest.13/presentations/PA-11_How-to-Use-Wireshark-to-Analyze-Video_Betty-DuBois.pdf)
	- [Sharkfest '14 presentation: Get started with HTTP Analysis](http://sharkfest.wireshark.org/sharkfest.14/presentations/B6-Get%20Started%20with%20HTTP%20Analysis.pdf)
	- [Tuning Win7 Using Wireshark’s TCP Stream Graph](http://sharkfest.wireshark.org/sharkfest.12/presentations/A-3_A-10_Tuning_Win7_Using_Wireshark_TCP_Stream_Graph_a_Case_Study.pdf)
- **One way to prevent DDoS attacks similar to macof is by blocking connections (SYN) going through the firewall with MSS=0 and WinSize=0.**
	- [Flood network with random MAC addresses with macof tool](https://tournasdimitrios1.wordpress.com/2011/03/04/flood-network-with-random-mac-addresses-with-macof-tool/)
	- ['itsoknoproblembro' Toolkit - The Beast that Beat Banks](http://www.ehacking.net/2013/01/itsoknoproblembro-toolkit-beast-that.html)
	- [HTCIA | High Technology Crime Investigation Association](https://www.htcia.org/)
- [Fiddler is an HTTP debugging proxy server that complements Firefox or Chrome devtools (F12 key)](http://www.telerik.com/fiddler)
	- [Fiddler, un proxy para depurar aplicaciones](http://www.vozidea.com/fiddler-proxy-para-depurar-aplicaciones)
- [TRANSUM Wireshark Plugin. Some Wireshark dissectors provide response time measurement values, but what gets measured is not ideal for performance analysis work](http://www.tribelabzero.com/transum)
	- [Wireshark Transum Quickstart (by Tony Fortunato)](http://www.lovemytool.com/blog/2014/08/wireshark-transum-quickstart-by-tony-fortunato.html)
- [Corvil.com Network Data Analsysis. Free eBook: Understanding Packet Loss](http://corvil.com/resources/white-papers/ebook-understanding-packet-loss)

### Network Forensics and Monitoring for MySQL and PostgreSQL
- [VividCortex](https://twitter.com/VividCortex)
- [Announcing VividCortex's Free Network Analyzer Tools for MySQL and PostgreSQL](https://www.vividcortex.com/blog/2015/05/13/announcing-vividcortex-network-analyzer-mysql-postgresql/)
- [Analyzing PostgreSQL Network Traffic with vc-pgsql-sniffer](http://www.pgconfsv.com/sessions/analyzing-postgresql-network-traffic-vc-pgsql-sniffer)

## VoIP
- [VoIP Planning: Calculate Your Bandwidth Before Adding SIP Trunk Service](http://it.toolbox.com/blogs/voip-news/voip-planning-calculate-your-bandwidth-before-adding-sip-trunk-service-66093)
- [The Importance of VoIP Voice Quality](http://it.toolbox.com/blogs/voip-news/the-importance-of-voip-voice-quality-65970)
- [10 Key VoIP Trends to Track in 2015](http://it.toolbox.com/blogs/voip-news/10-key-voip-trends-to-track-in-2015-66121)
- [The Power of VoIP in Disaster Recovery](http://it.toolbox.com/blogs/voip-news/the-power-of-voip-in-disaster-recovery-66205)
- [Implementing A Successful VoIP System](http://it.toolbox.com/blogs/voip-news/implementing-a-successful-voip-system-66450)
- [Hosted vs SIP and PBX: Which is best for your Business?](http://it.toolbox.com/blogs/voip-news/hosted-vs-sip-and-pbx-which-is-best-for-your-business-66697)
	- [Reddit: Hosted VoIP/PBX Suggestions. Moving FreePBX/Asterisk/3CX to the Cloud](http://www.reddit.com/r/sysadmin/comments/11ii9l/hosted_pbx_suggestions/)
- [Understanding the Key Differences between ESBCs and Firewalls?](https://www.edgewaternetworks.com/2015/05/understanding-the-key-differences-between-esbcs-and-firewalls/)
- [In 2015 Lync became Skype for Business](https://products.office.com/en-US/skype-for-business)
- [voipmonitoringzone.com: Enterprise VoIP is Growing Up and Meeting More Companies' Needs](http://www.voipmonitoringzone.com/articles/415200-enterprise-voip-growing-up-meeting-more-companies-needs.htm)

## WiFi security
- [Analyzing the 1000 Most Common Wi-Fi Network Names](https://ghostpath.com/blog/ssid-analyzing-the-1000-most-common-wi-fi-network-names/)
	- [Recommend Length for Wi-FI PSK?](http://security.stackexchange.com/questions/15653/recommend-length-for-wi-fi-psk)
	- [Is a WPA/WPA2 Wi-Fi network secure?](https://www.acrylicwifi.com/en/blog/is-a-wpawpa2-wi-fi-network-secure/)
	- [wikipedia: Wi-Fi Protected Access](https://en.wikipedia.org/wiki/Wi-Fi_Protected_Access)
- [Ubiquiti Networks](https://www.ubnt.com)
- [Aruba Networks](http://www.arubanetworks.com)

![passwords](images/passwords.jpg)

## WebPerf and Resilient Networking: Planning for Failure
- [WebPerf & Resilient Networking: Planning for Failure. Service Worker tool, wireless and mobile network optimization](https://www.igvita.com/2015/01/26/resilient-networking/)
	- [HTML5: Introduction to Service Worker](http://www.html5rocks.com/en/tutorials/service-worker/introduction/)
- [10 emuladores WAN para que pruebes distintas condiciones de red](http://www.hackplayers.com/2015/10/10-emuladores-wan-para-que-pruebes.html)
- [NEWfly, Redes Cisco y Packet Tracker: Network, ejercicios Packet Tracer y simulación de vuelo](https://newfly.wordpress.com/)

![cabling](images/cabling.jpg)
