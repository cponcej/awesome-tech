**Table of Contents**
<!-- MarkdownTOC -->

- [Networking](#networking)
	- [Next Generation Firewalls (NGFW)](#next-generation-firewalls-ngfw)
		- [Dell SonicWall TZ Series 5th Generation. Escrito en primavera 2015](#dell-sonicwall-tz-series-5th-generation-escrito-en-primavera-2015)
		- [Dell SonicWall TotalSecure and CGSS Bundles](#dell-sonicwall-totalsecure-and-cgss-bundles)
		- [Dell SonicWall TZ Series 6th Generation](#dell-sonicwall-tz-series-6th-generation)
		- [Dell SonicWALL WAN Acceleration Appliance (WAN optimization)](#dell-sonicwall-wan-acceleration-appliance-wan-optimization)
		- [Fortinet](#fortinet)
	- [Switches](#switches)
	- [Network virtualization. Software Defined Networking (SDN)](#network-virtualization-software-defined-networking-sdn)
	- [IPv6](#ipv6)
	- [Network Forensics](#network-forensics)
		- [Network Forensics Blogs](#network-forensics-blogs)
		- [Network Forensics and Wireshark on Twitter](#network-forensics-and-wireshark-on-twitter)
		- [Network Forensics Docs](#network-forensics-docs)
		- [Network Forensics and Monitoring for MySQL and PostgreSQL](#network-forensics-and-monitoring-for-mysql-and-postgresql)
	- [VoIP](#voip)
	- [MPLS Multi Protocol Label Switching (IP VPN)](#mpls-multi-protocol-label-switching-ip-vpn)
	- [WiFi security](#wifi-security)
	- [WebPerf and Resilient Networking: Planning for Failure](#webperf-and-resilient-networking-planning-for-failure)

<!-- /MarkdownTOC -->


# Networking
## Next Generation Firewalls (NGFW)
- [Firewalls.com](http://www.firewalls.com/)
	- [youtube channel: Firewalls.com](https://www.youtube.com/user/firewallsDotCom)
- [sonicwallonline.co.uk TZ Series](http://www.sonicwallonline.co.uk/ranges/TZ-Series/)
- [Fortinet Fortigate](http://www.fortinet.com/products/fortigate/)
- [Cisco ASA 5500-X Series Firewalls](http://www.cisco.com/c/en/us/products/security/asa-5500-series-next-generation-firewalls/index.html)
- [PaloAlto Firewall Platforms](https://paloaltonetworks.com/products/platforms/firewalls.html)

<div class="tumblr-post" data-href="https://embed.tumblr.com/embed/post/Y6ORssbcHF5P4Puns-jRoA/137299316242" data-did="01ae80a50a24446e87cce8bedfb90340b1b3e3b7"><a href="http://securityreactions.tumblr.com/post/137299316242/fortinet-official-response-to-the-backdoor">http://securityreactions.tumblr.com/post/137299316242/fortinet-official-response-to-the-backdoor</a></div><script async src="https://secure.assets.tumblr.com/post.js"></script>

### Dell SonicWall TZ Series 5th Generation. Escrito en primavera 2015
>Una característica muy conveniente de los NGFW es la de "3G/4G Modem Failover", que junto al balanceo de varias conexiones simultáneas WAN nos garantiza una conexión permanente a Internet de alta disponibilidad. No olvidemos el punto crítico para nuestro negocio que supone la conexión a Internet con el auge de VoIP IP-PBX (en la nube ó alojado en nuestra infraestructura), donde una caída de Internet puede suponer la incomunicación telefónica del negocio. En cualquier caso existen en el mercados productos balanceadores WAN/ADSL expécíficos con 3G/4G failover, como por ejemplo los balanceadores "Peplink Balance" (http://www.wifisafe.com/balanceadores-adsl.html)

>Del mismo modo, SonicWALL integra otras interesantes funcionalidades: proporciona el antivirus de escritorio mediante un enlace de descarga además del incluído en el mismo Gateway, evitando así la compra de un antivirus comercial de escritorio.

>Desde Marzo 2013 existen dos categorías de SonicWALL 5th Generation firewall:

>1. TZ Series (gama baja) 
2. NSA (gama media alta)

>Oferta de NSA 220 hasta finales de Abril 2015 con el mismo precio del TZ-215, a excepción del coste de renovación de licencias Level-7 firewall anuales (no tiene sentido adquirir un NGFW sin estas licencias). NSA 220 es la solución más económica dentro de su categoría, pero también una solución mucho más potente que el TZ-215 5th Generation.

>Dentro de la categoría TZ series, los dos más pequeños TZ-105 y TZ-205 serían apropiados para empresas de no más de 25 empleados. El TZ-215 5th Generation actual resulta conveniente para empresas de hasta 50 empleados siempre y cuando sus 60Mbps Full DPI throughput sean suficientes para nuestra planificación a cuatro años vista. Otra ventaja de los TZ Series es que incluyen Wifi-N, lo cual puede ser de interés para algunas pymes. En cambio nos puede interesar un NSA 220 no sólo por su mayor DPI throughput (muchas amenazas de seguridad actuales vienen encriptadas en el tráfico SSL), sino también por buscar una solución NGFW sin Wifi a ubicar dentro de nuestro Server Room. Mi último cliente tenía el Server Room junto al comedor con sus dos microondas -> interferencias. Un Wifi AP podemos colocarlo donde mejor nos convenga dentro de la oficina. Las soluciones WIFI AP de Dell SonicPoint no parece ser las más populares entre los expertos, existiendo productos WIFI AP más reconocidos como los de Aruba Networks ó Ubiquiti Networks.

>Del NSA 220 con respecto al TZ 215 también nos puede interesar su mayor número de licencias SSL-VPN y conexiones RDP (acceder al escritorio de la oficina en remoto).

>En cuestión de semanas DELL actualizará los TZ series con la sexta generación de firewalls con mayor CPU, memoria, DPI throughput y SonicOS 6.2 (basado en CentOS). A tener en cuenta con las últimas novedades de fibra existente en el mercado con ofertas de 300Mbs y 500Mbs. Si disponemos de una conexión de fibra de 100Mbs ó superior, conviene un NSA220 en lugar del actual TZ-215 para hacer un mejor uso del ancho de banda y evitar cuellos de botella (mayor DPI throughput del primero: 110Mbps full throughput). Coste alrededor de 900€ primer año con TotalSecure Bundle + renovación de CGSS Bundle a partir del segundo año por ~300€ anuales según el minorista correspondiente. Renovación de equipo NGFW cada 4 años.

### Dell SonicWall TotalSecure and CGSS Bundles
- [SonicWALL TotalSecure bundle](http://www.sonicwall.com/es/es/products/Network-Security-TotalSecure.html)
- [SonicWALL Comprehensive Gateway Security Suite bundle](http://www.sonicwall.com/es/es/products/Network-Security-Comprehensive-Gateway-Security-Suite.html)

<div class="tumblr-post" data-href="https://embed.tumblr.com/embed/post/Y6ORssbcHF5P4Puns-jRoA/135125776940" data-did="9e79099acd0b5daa3f8b74dc625a47adf3422f39"><a href="http://securityreactions.tumblr.com/post/135125776940/management-is-so-busy-developing-security-metrics">http://securityreactions.tumblr.com/post/135125776940/management-is-so-busy-developing-security-metrics</a></div><script async src="https://secure.assets.tumblr.com/post.js"></script>

### Dell SonicWall TZ Series 6th Generation
- Available since April 2015. Compliant with new Enterprise Broadband Internet Connections (300 & 500Mbps)
- [infinigate.dk: Dell SonicWALL PowerPoint Presentation](http://www.infinigate.dk/fileadmin/user_upload/CH/Events/ITSCR2015/DELL_SonicWALL1.pdf)
- [storagereview.com: Dell SonicWALL TZ500 Firewall Review](http://www.storagereview.com/dell_sonicwall_tz500_firewall_review)
- [itpro.co.uk: Dell combines WiFi and firewall to fend off SMB cyber attacks](http://www.itpro.co.uk/firewalls/25042/dell-combines-wifi-and-firewall-to-fend-off-smb-cyber-attacks)
- [en.community.dell.com: Wireless Firewall Solutions for Small Offices and Distributed Enterprises](http://en.community.dell.com/techcenter/security/network-mobile-email/b/weblog/archive/2015/08/03/wireless-firewall-solutions-for-small-offices-and-distributed-enterprises)
- [livedemo.sonicwall.com: Dell Security Live Demo](http://livedemo.sonicwall.com)
- [New Dell SonicWALL 6th Generation TZ Series Firewalls Deliver Enterprise-Class Capabilities for Small Business Budgets](http://www.dell.com/learn/us/en/uscorp1/press-releases/2015-04-28-dell-sonic-wall-tz-series)
- [SonicWALL Firewall vs. Fortinet Fortigate](http://www.firewalls.com/sonicwall_vs_fortigate)
- [darkreading.com: 5 Tips For Getting The Most Out Of Your Firewall](http://www.darkreading.com/perimeter/5-tips-for-getting-the-most-out-of-your-firewall/d/d-id/1323634) Role-based Access Control is a must for getting the most out of your firewall
- [11 cool things your firewall should do](http://www.sonicwall.com/documents/11-cool-things-your-firewall-should-do-ebook-24538.pdf) Extend beyond blocking network threats to protect, manage and control application traffic 
- [Demand more from your wireless network. SonicWALL wireless network security combines high speed 802.11ac & next-gen firewalls](http://www.sonicwall.com/documents/demand-more-from-your-wireless-network-datasheet-75796.pdf)
- [mysonicwall.com: Dell SonicWALL Security Center](https://www.mysonicwall.com/sonicalert/SonicALERT.aspx)
	- [Data stealing trojan described as a JPG file (December 31, 2015)](https://www.mysonicwall.com/sonicalert/searchresults.aspx?ev=article&id=886)
- [crn.com: Dell Security Chief: SonicWall Trounces Cisco On Price, Performance And Ease of Use.](http://www.crn.com/news/security/300076874/dell-security-chief-sonicwall-trounces-cisco-on-price-performance-and-ease-of-use.htm) 
> Hutcheson told CRN that Dell's "disruptive value" is putting Cisco to shame. "It's a great networking company, but it's also a very expensive networking company, and customers face monumental costs just to maintain what they have," he said. "We're a company that's focused on innovation. We're focused on disruptive value. I don't have a legacy business model to protect. Our design point is midmarket. We don't believe that only the best 100 banks in the world and the top 1,000 customers in the world should have world-class security. Every enterprise needs world-class security, and we can provide the economic model to do that and make it affordable for them." Curtis Hutcheson, who was recently named vice president and general manager of Dell Security Solutions, said Cisco's security solutions cost at least three times more than comparable Dell offerings, and tend to be complex and difficult to manage. The price difference between Dell SonicWall solutions and Cisco was perhaps Hutcheson's most powerful point of attack. He pitted Dell SonicWall's new TZ400 against the Cisco ASA 5506, comparing them on a three-year basis with all licensing. "You're looking at around $6,000 for the Cisco ASA 5506-X with FirePower and support, whereas we are offering the TZ400 for around $1,995, which includes full support and services licensing," Hutcheson said in an interview with CRN. "For any business, that's a significant cost difference."
- [crn.com: Dell Security Adds 50 Percent Rebate On SonicWall TZ And NSA Appliances](http://www.crn.com/news/channel-programs/300077951/dell-security-adds-50-percent-rebate-on-sonicwall-tz-and-nsa-appliances.htm)
- [youtube channel: Dell Software](https://www.youtube.com/user/DellSoftwareVideo)
	- [youtube playlist: Dell Software SonicWall](https://www.youtube.com/user/DellSoftwareVideo/search?query=sonicwall)
	- [youtube playlist: Dell Security](https://www.youtube.com/playlist?list=PLtVMPnH0I8TSLxGad4D9UGr12S1SH3kcM)
	- [youtube: Dell Solutions Tour 2015 - Dell Software Defined (SDS/SDN/SDDC)](https://www.youtube.com/watch?v=C0wEbuoK_34)
- [youtube channel: Andrew Crouthamel Dell SonicWALL Training](https://www.youtube.com/playlist?list=PLC909885E4476986B)
	- [youtube.com: Andrew Crouthamel Dell SonicWALL Failover and Load Balancing](https://www.youtube.com/watch?v=3wn9Q_v6MVU)

[![Dell SonicWall TZ500 Management Monitor](images/Dell-SonicWall-TZ500-Management-Monitor.png)](http://www.storagereview.com/dell_sonicwall_tz500_firewall_review)

<div class="container">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/on2f0BZaNi4?list=PLlLDGbMf9B8MvwgHg8bJC0QDewDz_inPy" frameborder="0" allowfullscreen class="video"></iframe>
</div>
<br>

<div class="container">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/osRrBcI1DzI?list=PLlLDGbMf9B8MvwgHg8bJC0QDewDz_inPy" frameborder="0" allowfullscreen class="video"></iframe>
</div>
<br>

### Dell SonicWALL WAN Acceleration Appliance (WAN optimization)
- [community.dell.com: Accelerate Application Performance for a Better User Experience](http://en.community.dell.com/techcenter/security/network-mobile-email/b/weblog/archive/2016/01/11/accelerate-application-performance-for-a-better-user-experience)

### Fortinet
- [Fortiguard](http://www.fortiguard.com/)
- [twitter.com/Fortinet](https://twitter.com/Fortinet)
- [This was not a “backdoor” vulnerability issue but rather a management authentication issue](http://blog.fortinet.com/post/brief-statement-regarding-issues-found-with-fortios)

## Switches
- [youtube: Dell Networking Z9100-ON 100GbE Fabric Switch](https://www.youtube.com/watch?v=GiGqRy5zgCM&feature=youtu.be)

## Network virtualization. Software Defined Networking (SDN)
- [FOSS Network Functions Virtualization](https://www.opnfv.org)
- [SDxCentral.com: Trusted News and Resources for SDx, SDN, NFV](https://www.sdxcentral.com/)
- [sdxcentral.com: What is NFV – Network Functions Virtualization?](https://www.sdxcentral.com/resources/nfv/whats-network-functions-virtualization-nfv/)
	- [Software-defined networking (SDN)](https://www.sdxcentral.com/flow/sdn-software-defined-networking/)
- [SDxCentral’s Top 10 News Stories of 2015](https://www.sdxcentral.com/articles/news/sdxcentrals-top-10-news-stories-of-2015/2016/01/)
- [sdxcentral.com: The Top NFV & Telecom Influencers in 2015](https://www.sdxcentral.com/articles/news/top-nfv-influencers-2015/)
- [aunclicdelastic.com: SDN, NFV y los fundamentos de las redes del futuro](http://www.aunclicdelastic.com/sdn-nfv-y-los-fundamentos-de-las-redes-del-futuro/)

## IPv6
- [arstechnica.com: IPv6 celebrates its 20th birthday by reaching 10 percent deployment](http://arstechnica.com/business/2016/01/ipv6-celebrates-its-20th-birthday-by-reaching-10-percent-deployment/)

## Network Forensics

### Network Forensics Blogs
- [wireshark.org](http://wireshark.org/)
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

### Network Forensics and Wireshark on Twitter
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

### Network Forensics Docs
- [Digital Attack Map. Top daily DDoS attacks worldwide](http://www.digitalattackmap.com/)
	- [radware.com: DDoS Handbook](https://www.radware.com/social/ddoshandbook/)
- [WireEdit. First-Of-A-Kind and The Only Full Stack WYSIWYG Packet Editor Edit L2 - L7 with just a few clicks](https://wireedit.com/)
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
- [What’s the performance meaning of 0-Windows?](http://blog.securactive.net/performance-meaning-0-windows/) When a machine starts to send more and more 0-win you have to investigate if there is enough resources, CPU, RAM …
- [Great explanation on how performance metrics are calculated by Tony Fortunato (Tech firm)](http://www.lovemytool.com/blog/2015/10/application-performance-term-connect-time-by-tony-fortunato.html)

[![digital attack map](images/digital_attack_map.png)](http://www.digitalattackmap.com/)

<div class="container">
<iframe width="420" height="315" src="https://www.youtube.com/embed/UXAHvwouk6Q" frameborder="0" allowfullscreen class="video"></iframe>
</div>
<br>

<div class="container">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/qZL8kNj0E-A?rel=0" frameborder="0" allowfullscreen class="video"></iframe>
</div>
<br>

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
- [El 86% de las empresas utiliza herramientas de Comunicaciones Unificadas y colaboración. La colaboración móvil, el nuevo frente de batalla](http://www.aunclicdelastic.com/la-colaboracion-movil-el-nuevo-frente-de-batalla/)

## MPLS Multi Protocol Label Switching (IP VPN)
- [tech-faq.com: MPLS](http://www.tech-faq.com/mpls.html)
- [Why Cloud is making MPLS obsolete - and how Service Providers can adapt](https://www.linkedin.com/pulse/20140915110843-538739-why-cloud-is-making-mpls-obsolete-and-how-service-providers-can-adapt)
- [Software-defined wide-area network, Is this the end of MPLS VPNs?](https://www.linkedin.com/pulse/software-defined-wide-area-network-end-mpls-vpns-greg-de-chasteauneuf)
- [MPLS vs. Metro-Ethernet](https://www.linkedin.com/pulse/mpls-vs-metro-ethernet-dave-calhoun)

<div class="container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/cLZg1XZUruk?rel=0" frameborder="0" allowfullscreen class="video"></iframe>
</div>
<br>

## WiFi security
- [Analyzing the 1000 Most Common Wi-Fi Network Names](https://ghostpath.com/blog/ssid-analyzing-the-1000-most-common-wi-fi-network-names/)
	- [Recommend Length for Wi-FI PSK?](http://security.stackexchange.com/questions/15653/recommend-length-for-wi-fi-psk)
	- [Is a WPA/WPA2 Wi-Fi network secure?](https://www.acrylicwifi.com/en/blog/is-a-wpawpa2-wi-fi-network-secure/)
	- [wikipedia: Wi-Fi Protected Access](https://en.wikipedia.org/wiki/Wi-Fi_Protected_Access)
- [Ubiquiti Networks](https://www.ubnt.com)
- [Aruba Networks](http://www.arubanetworks.com)
- [HP Acquires Aruba Networks to Create an Industry Leader in Enterprise Mobility](http://www8.hp.com/hpnext/posts/hp-announcement-march-2015)
- [zdnet: DD-WRT Linux firmware comes to Linksys routers](http://www.zdnet.com/article/dd-wrt-linux-firmware-comes-to-linksys-routers/)

## WebPerf and Resilient Networking: Planning for Failure
- [WebPerf & Resilient Networking: Planning for Failure. Service Worker tool, wireless and mobile network optimization](https://www.igvita.com/2015/01/26/resilient-networking/)
	- [HTML5: Introduction to Service Worker](http://www.html5rocks.com/en/tutorials/service-worker/introduction/)
- [10 emuladores WAN para que pruebes distintas condiciones de red](http://www.hackplayers.com/2015/10/10-emuladores-wan-para-que-pruebes.html)
- [NEWfly, Redes Cisco y Packet Tracker: Network, ejercicios Packet Tracer y simulación de vuelo](https://newfly.wordpress.com/)

[23 Photos That Will Make Anyone Who Works In IT Satisfied](http://www.buzzfeed.com/lukebailey/satisfying-cables)
[![cabling](images/cabling.jpg)](http://www.buzzfeed.com/lukebailey/satisfying-cables)