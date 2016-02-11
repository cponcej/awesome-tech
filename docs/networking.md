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
		- [Virtual LAN](#virtual-lan)
	- [Network virtualization. Software Defined Networking (SDN)](#network-virtualization-software-defined-networking-sdn)
	- [IPv6](#ipv6)
	- [Network Forensics](#network-forensics)
	- [VoIP](#voip)
	- [MPLS Multi Protocol Label Switching (IP VPN)](#mpls-multi-protocol-label-switching-ip-vpn)
	- [WiFi security](#wifi-security)
	- [WiFi Products](#wifi-products)
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
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/osRrBcI1DzI?list=PLlLDGbMf9B8MvwgHg8bJC0QDewDz_inPy" frameborder="0" allowfullscreen class="video"></iframe>
</div>
<br>

<div class="container">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/DSK5MwrYpzquVu" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/DellSoftware/dwuf15-advanced-sonicos-management-best-practices" title="DWUF&#x27;15: Advanced SonicOS Management Best Practices" target="_blank">DWUF&#x27;15: Advanced SonicOS Management Best Practices</a> </strong> from <strong><a href="//www.slideshare.net/DellSoftware" target="_blank">Dell Software</a></strong> </div>
</div>
<br/>

### Dell SonicWALL WAN Acceleration Appliance (WAN optimization)
- [community.dell.com: Accelerate Application Performance for a Better User Experience](http://en.community.dell.com/techcenter/security/network-mobile-email/b/weblog/archive/2016/01/11/accelerate-application-performance-for-a-better-user-experience)

### Fortinet
- [Fortiguard](http://www.fortiguard.com/)
- [twitter.com/Fortinet](https://twitter.com/Fortinet)
- [This was not a “backdoor” vulnerability issue but rather a management authentication issue](http://blog.fortinet.com/post/brief-statement-regarding-issues-found-with-fortios)

## Switches
- [reddit.com/r/networking](https://www.reddit.com/r/networking/)
- [SWITCH Security Report](http://securityblog.switch.ch/)
- [Layer 3 versus Layer 2 Switch for VLANs](https://documentation.meraki.com/MS/Layer_3_Switching/Layer_3_versus_Layer_2_Switch_for_VLANs)
- [Power over Ethernet or PoE](https://en.wikipedia.org/wiki/Power_over_Ethernet)
- [juniper switches](http://www.juniper.net/us/en/products-services/switching/)
- [Netgear switches](http://www.netgear.com/home/products/networking/switches/)
- [D-Link](http://www.dlink.com/uk/en/business-solutions/poe/switches)
- [Cisco Meraki](https://documentation.meraki.com/MS)
- [Cisco Small Business Switches](http://www.newegg.com/Switches/BrandSubCat/ID-12450-30)
- [Extreme](http://www.extremenetworks.com/products/switching-routing)
- [Linksys](http://www.linksys.com/us/c/business-network-switches/)
- [Dell](http://www.dell.com/us/business/p/switch-powerconnect)
- [HP Small and Midsize Business](http://www8.hp.com/us/en/networking/smb-networking-switches.html)
- [youtube: Dell Networking Z9100-ON 100GbE Fabric Switch](https://www.youtube.com/watch?v=GiGqRy5zgCM&feature=youtu.be)
- [The Top 10 Best Selling Switches By Brand](http://www.crn.com/slide-shows/networking/300072355/the-top-10-best-selling-switches-by-brand.htm)
- [Top 5 Small Business Switches](http://www.learncomputer.com/top-5-small-business-switches/)
- [community.spiceworks.com: Best 48 port small business switch?](https://community.spiceworks.com/topic/751984-best-48-port-small-business-switch)

### Virtual LAN
- [Virtual LAN](https://en.wikipedia.org/wiki/Virtual_LAN)
- [Cisco Networking Academy's Introduction to VLANs](http://www.ciscopress.com/articles/article.asp?p=2181837)
- [Fundamentals of 802.1Q VLAN Tagging](https://documentation.meraki.com/zGeneral_Administration/Tools_and_Troubleshooting/Fundamentals_of_802.1Q_VLAN_tagging)
- [reddit: To VLAN or not to VLAN?](https://www.reddit.com/r/sysadmin/comments/22fwl9/to_vlan_or_not_to_vlan/)
- [reddit: Best practices for management network/vlan](https://www.reddit.com/r/networking/comments/1ogx0j/best_practices_for_management_networkvlan/)
- [reddit: VLAN Tagging - Why in increments of 10?](https://www.reddit.com/r/networking/comments/29i9hy/vlan_tagging_why_in_increments_of_10/)
- [reddit: Looking for consumer-grade 1GbE VLAN-trunk capable switch](https://www.reddit.com/r/networking/comments/3aljo9/looking_for_consumergrade_1gbe_vlantrunk_capable/)
- [reddit: Wiki Knowledge: VLANs](https://www.reddit.com/r/networking/comments/2yfr71/wiki_knowledge_vlans/)
- [reddit: Need a better understanding of VLANs](https://www.reddit.com/r/networking/comments/3hz70w/need_a_better_understanding_of_vlans/)
- [reddit: Do you VLAN? If so, what do you have segregated?](https://www.reddit.com/r/homelab/comments/30sv39/do_you_vlan_if_so_what_do_you_have_segregated/)
- [reddit: Question about VLANs and how they are connected in one switch](https://www.reddit.com/r/networking/comments/33xt9z/question_about_vlans_and_how_they_are_connected/)
- [reddit: Cheap Gigabit Switch With VLAN Capabilities](https://www.reddit.com/r/homelab/comments/1z542j/cheap_gigabit_switch_with_vlan_capabilities/)
- [reddit: Multiple VLANs on one NIC in Windows?](https://www.reddit.com/r/homelab/comments/3lzfuh/multiple_vlans_on_one_nic_in_windows_xpost_from/)
- [reddit: How does one learn to do vlans](https://www.reddit.com/r/homelab/comments/3bew99/how_does_one_learn_to_do_vlans/)
- [reddit: Does dividing traffic onto different VLANs implicitly assume a different network for each VLAN?](https://www.reddit.com/r/networking/comments/1s36w9/does_dividing_traffic_onto_different_vlans/)
- [reddit: VLAN iSCSI networks](https://www.reddit.com/r/networking/comments/36evvc/vlan_iscsi_networks/)
- [reddit: Does a Trunk Port have to part of a VLAN?](https://www.reddit.com/r/networking/comments/3h8iwm/does_a_trunk_port_have_to_part_of_a_vlan/)

<div class="container">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/GiGqRy5zgCM?rel=0" frameborder="0" allowfullscreen class="video"></iframe>
</div>
<br>

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
- [Network Forensics](nw_forensics.md)

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

## WiFi Products
- [twitter.com/wifisafespain](https://twitter.com/wifisafespain)

## WebPerf and Resilient Networking: Planning for Failure
- [WebPerf & Resilient Networking: Planning for Failure. Service Worker tool, wireless and mobile network optimization](https://www.igvita.com/2015/01/26/resilient-networking/)
	- [HTML5: Introduction to Service Worker](http://www.html5rocks.com/en/tutorials/service-worker/introduction/)
- [10 emuladores WAN para que pruebes distintas condiciones de red](http://www.hackplayers.com/2015/10/10-emuladores-wan-para-que-pruebes.html)
- [NEWfly, Redes Cisco y Packet Tracker: Network, ejercicios Packet Tracer y simulación de vuelo](https://newfly.wordpress.com/)

[23 Photos That Will Make Anyone Who Works In IT Satisfied](http://www.buzzfeed.com/lukebailey/satisfying-cables)
[![cabling](images/cabling.jpg)](http://www.buzzfeed.com/lukebailey/satisfying-cables)