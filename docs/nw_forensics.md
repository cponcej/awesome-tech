<!-- MarkdownTOC -->

- [Network Forensics](#network-forensics)
	- [Network Forensics Blogs](#network-forensics-blogs)
	- [Network Forensics and Wireshark on Twitter](#network-forensics-and-wireshark-on-twitter)
	- [Network Forensics Docs](#network-forensics-docs)
		- [WireEdit](#wireedit)
		- [Wireshark](#wireshark)
			- [Laura Chappell](#laura-chappell)
			- [Sharkfest](#sharkfest)
		- [Fiddler](#fiddler)
		- [Transum wireshark plugin](#transum-wireshark-plugin)
		- [Network Performance](#network-performance)
		- [Manuales de Wireshark](#manuales-de-wireshark)
		- [Wireshark 2.0](#wireshark-20)
	- [Network Forensics and Monitoring for MySQL and PostgreSQL](#network-forensics-and-monitoring-for-mysql-and-postgresql)

<!-- /MarkdownTOC -->

[![digital attack map](images/digital_attack_map.png)](http://www.digitalattackmap.com/)

# Network Forensics
## Network Forensics Blogs
- [wireshark.org](http://wireshark.org/)
- [sharkfest.wireshark.org](https://sharkfest.wireshark.org)
- [wiresharktraining.com](http://wiresharktraining.com)
- [packetbomb.com](http://packetbomb.com/)
- [blog.packet-foo.com](https://blog.packet-foo.com)
- [LoveMyTool - Building an Open Community for Network Management and Monitoring](http://www.lovemytool.com/blog)
- [thevisiblenetwork.com](http://www.thevisiblenetwork.com)
- [packetlife.net](http://packetlife.net/)
- [Packet Pushers](http://packetpushers.net/)
- [The Networking Nerd](http://networkingnerd.net/)
- [sharkfest.wireshark.org](http://sharkfest.wireshark.org)
- [seguridadyredes.wordpress.com](https://seguridadyredes.wordpress.com/)

## Network Forensics and Wireshark on Twitter
- [twitter.com/LauraChappell](https://twitter.com/LauraChappell)
- [twitter.com/WiresharkNews](https://twitter.com/WiresharkNews)
- [twitter.com/wiresharktweets](https://twitter.com/wiresharktweets)
- [twitter.com/wiresharku](https://twitter.com/wiresharku)
- [twitter.com/seguridadyredes](https://twitter.com/seguridadyredes)
- [twitter.com/packetbomb](https://twitter.com/packetbomb)
- [twitter.com/PacketJay](https://twitter.com/PacketJay)
- [twitter.com/packetlife](https://twitter.com/packetlife/)
- [twitter.com/packetpushers](https://twitter.com/packetpushers)
- [twitter.com/networkingnerd](https://twitter.com/networkingnerd)
- [twitter.com/SharkFest_2016](https://twitter.com/SharkFest_2016)
- [twitter.com/NetBeez](https://twitter.com/NetBeez)
- [twitter.com/Securactivepv](https://twitter.com/Securactivepv)

<div class="container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/iX44XIZafiw" frameborder="0" allowfullscreen class="video"></iframe>
</div>
<br>

## Network Forensics Docs
- [Digital Attack Map. Top daily DDoS attacks worldwide 🌟🌟🌟](http://www.digitalattackmap.com/)
	- [radware.com: DDoS Handbook](https://www.radware.com/social/ddoshandbook/)

### WireEdit
- [WireEdit. First-Of-A-Kind and The Only Full Stack WYSIWYG Packet Editor Edit L2 - L7 with just a few clicks](https://wireedit.com/)

### Wireshark 
- [Optimal Wireshark Setup | Enhance Your Wireshark Experience](https://www.youtube.com/watch?v=F4l3CedRlJc)
	- [Switches And Tool Placement (by Tony Fortunato). Ubicación de las herramientas de análisis de tráfico en redes conmutadas (switched networks). Taps, span ports y hubs](http://www.lovemytool.com/blog/2014/06/switches-and-tool-placement-by-tony-fortunato.html)
- [Wireshark 101: Transmission Control Protocol, video tutorial](https://www.youtube.com/watch?v=iX44XIZafiw)
- [Tip: do not capture on a computer directly unless you understand the side effects and you can live with them.](https://blog.packet-foo.com/2014/05/the-drawbacks-of-local-packet-captures/) 
>Do not capture on local systems. Use SPAN ports and TAPs, if you have to. It’s the only way to get good readings. Unless you don’t care about frame sizes, timings, broken checksums, interference from other software you should not capture on a local system.
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
- [tcpdump is amazing](http://jvns.ca/blog/2016/03/16/tcpdump-is-amazing/)

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">i finally figured out that tcpdump is amazing. here&#39;s some of what I learned: <a href="https://t.co/OxqKocS3p3">https://t.co/OxqKocS3p3</a></p>&mdash; Julia Evans (@b0rk) <a href="https://twitter.com/b0rk/status/710334113421664256">17 de marzo de 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

#### Laura Chappell
- [Laura Chappell's Top Videos](https://www.youtube.com/user/thebitgirl/videos)
	- [Wireshark Tip 10: Identify Separate TCP Conversations with TCP Stream Index (Laura Chappell)](https://www.youtube.com/watch?v=0dFndZwkDGY)
	- [Wireshark profiles](https://www.youtube.com/watch?v=pxxcuR7fwXM)
	- [PacketLife.net](http://packetlife.net/)
	- [Sharkfest 2013 - Wireshark Network Forensics (Laura Chappell). Seguridad con Wireshark: ejemplos de ataques de seguridad DDoS (macof, DNS), filtros, perfiles, coloreado de frames y tshark para trazas largas](https://www.youtube.com/watch?v=UXAHvwouk6Q)
	- [wireshark's colors, by Laura Chappell](http://bit.ly/nmapcolors)

#### Sharkfest
- [Sharkfest '14 Retrospective](http://sharkfest.wireshark.org/sharkfest.14/)
	- [How to Use Wireshark to Analyze Video](http://sharkfest.wireshark.org/sharkfest.13/presentations/PA-11_How-to-Use-Wireshark-to-Analyze-Video_Betty-DuBois.pdf)
	- [Sharkfest '14 presentation: Get started with HTTP Analysis](http://sharkfest.wireshark.org/sharkfest.14/presentations/B6-Get%20Started%20with%20HTTP%20Analysis.pdf)
	- [Tuning Win7 Using Wireshark’s TCP Stream Graph](http://sharkfest.wireshark.org/sharkfest.12/presentations/A-3_A-10_Tuning_Win7_Using_Wireshark_TCP_Stream_Graph_a_Case_Study.pdf)
- **One way to prevent DDoS attacks similar to macof is by blocking connections (SYN) going through the firewall with MSS=0 and WinSize=0.**
	- [Flood network with random MAC addresses with macof tool](https://tournasdimitrios1.wordpress.com/2011/03/04/flood-network-with-random-mac-addresses-with-macof-tool/)
	- ['itsoknoproblembro' Toolkit - The Beast that Beat Banks](http://www.ehacking.net/2013/01/itsoknoproblembro-toolkit-beast-that.html)
	- [HTCIA | High Technology Crime Investigation Association](https://www.htcia.org/)

### Fiddler
- [Fiddler is an HTTP debugging proxy server that complements Firefox or Chrome devtools (F12 key)](http://www.telerik.com/fiddler)
	- [Fiddler, un proxy para depurar aplicaciones](http://www.vozidea.com/fiddler-proxy-para-depurar-aplicaciones)
	- [slideshare: Debugging with Fiddler](http://www.slideshare.net/idof/debugging-with-fiddler)

### Transum wireshark plugin
- [TRANSUM Wireshark Plugin. Some Wireshark dissectors provide response time measurement values, but what gets measured is not ideal for performance analysis work](http://www.tribelabzero.com/transum)
	- [Wireshark Transum Quickstart (by Tony Fortunato)](http://www.lovemytool.com/blog/2014/08/wireshark-transum-quickstart-by-tony-fortunato.html)

### Network Performance
- [Corvil.com Network Data Analsysis. Free eBook: Understanding Packet Loss](http://corvil.com/resources/white-papers/ebook-understanding-packet-loss)
- [What’s the performance meaning of 0-Windows?](http://blog.securactive.net/performance-meaning-0-windows/) When a machine starts to send more and more 0-win you have to investigate if there is enough resources, CPU, RAM …
- [Great explanation on how performance metrics are calculated by Tony Fortunato (Tech firm)](http://www.lovemytool.com/blog/2015/10/application-performance-term-connect-time-by-tony-fortunato.html)

### Manuales de Wireshark
- [Manual básico de wireshark](http://www.slideshare.net/DIANYSS2012/manual-bsico-de-wireshark)
- [Analisis de red mediante Wireshark y Tcpdump](http://www.slideshare.net/JavierMartinRivero/analisis-de-red-mediante-wireshark-y-tcpdump)
- [Protocolo dns analizado con wireshark](http://www.slideshare.net/jopa001/protocolo-dns-con-wireshark)

<div class="container">
<iframe width="420" height="315" src="https://www.youtube.com/embed/UXAHvwouk6Q" frameborder="0" allowfullscreen class="video"></iframe>
</div>
<br>

<div class="container">
<iframe width="420" height="315" src="https://www.youtube.com/embed/N-n1n6WKmRs?rel=0" frameborder="0" allowfullscreen class="video"></iframe>
</div>
<br>

<div class="container">
<iframe width="420" height="315" src="https://www.youtube.com/embed/Mp1hpMOjk6c?rel=0" frameborder="0" allowfullscreen class="video"></iframe>
</div>
<br>

<div class="container">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/MoJJdezWYicCvT" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/idof/debugging-with-fiddler" title="Debugging with Fiddler" target="_blank">Debugging with Fiddler</a> </strong> from <strong><a target="_blank" href="//www.slideshare.net/idof">Ido Flatow</a></strong> </div>
</div>
<br>

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">Learn to write <a href="https://twitter.com/hashtag/Wireshark?src=hash">#Wireshark</a> dissectors at <a href="https://twitter.com/hashtag/SharkFest16?src=hash">#SharkFest16</a> <a href="https://t.co/krDz2SPD0R">https://t.co/krDz2SPD0R</a></p>&mdash; Laura Chappell (@LauraChappell) <a href="https://twitter.com/LauraChappell/status/705404824234434560">3 de marzo de 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">A Deep Dive Into DNS Packet Sizes: Why Smaller Packet Sizes Keep The Internet Safe <a href="https://t.co/9a8duqMk5j">https://t.co/9a8duqMk5j</a> <a href="https://twitter.com/hashtag/networking?src=hash">#networking</a> <a href="https://twitter.com/hashtag/security?src=hash">#security</a> <a href="https://twitter.com/hashtag/sysadmin?src=hash">#sysadmin</a></p>&mdash; nixCraft (@nixcraft) <a href="https://twitter.com/nixcraft/status/705859377907920896">4 de marzo de 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>


### Wireshark 2.0 
- [Wireshark 2.0 Follow TCP Stream (by Tony Fortunato)](http://www.lovemytool.com/blog/2016/03/wireshark-20-follow-tcp-stream-by-tony-fortunato.html)

<div class="container">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/qZL8kNj0E-A?rel=0" frameborder="0" allowfullscreen class="video"></iframe>
</div>
<br>

<div class="container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/xPgCZwj446o?rel=0" frameborder="0" allowfullscreen class="video"></iframe>
</div>
<br>

## Network Forensics and Monitoring for MySQL and PostgreSQL
- [VividCortex](https://twitter.com/VividCortex)
- [Announcing VividCortex's Free Network Analyzer Tools for MySQL and PostgreSQL](https://www.vividcortex.com/blog/2015/05/13/announcing-vividcortex-network-analyzer-mysql-postgresql/)
- [Analyzing PostgreSQL Network Traffic with vc-pgsql-sniffer](http://www.pgconfsv.com/sessions/analyzing-postgresql-network-traffic-vc-pgsql-sniffer)


