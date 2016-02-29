**Table of Contents**
<!-- MarkdownTOC -->

- [Networking](#networking)
	- [Next Generation Firewalls (NGFW)](#next-generation-firewalls-ngfw)
	- [Switches](#switches)
		- [Virtual LAN](#virtual-lan)
	- [Network virtualization. Software Defined Networking (SDN)](#network-virtualization-software-defined-networking-sdn)
	- [IPv4](#ipv4)
	- [IPv6](#ipv6)
	- [Network Forensics](#network-forensics)
	- [Network Performance](#network-performance)
	- [VoIP](#voip)
	- [MPLS Multi Protocol Label Switching (IP VPN)](#mpls-multi-protocol-label-switching-ip-vpn)
	- [WiFi security](#wifi-security)
	- [WiFi Products](#wifi-products)
	- [WebPerf and Resilient Networking: Planning for Failure](#webperf-and-resilient-networking-planning-for-failure)

<!-- /MarkdownTOC -->

![michael jordan](images/air_jordan.gif)

[! [telcos vs web giants](images/telcos_vs_web_giants_spain.png)](http://www.zdnet.com/article/telcos-vs-the-web-giants-is-the-playing-field-a-fair-one-and-does-it-matter/)

<div class="container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/4YgGuK9cuSU?rel=0" frameborder="0" allowfullscreen class="video"></iframe>
</div>
<br/>

# Networking
## Next Generation Firewalls (NGFW)
- [Next Generation Firewalls (NGFW)](NGFW.md)

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

<div class="container">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/GiGqRy5zgCM?rel=0" frameborder="0" allowfullscreen class="video"></iframe>
</div>
<br>

### Virtual LAN
- [Virtual LAN](VLAN.md)

## Network virtualization. Software Defined Networking (SDN)
- [FOSS Network Functions Virtualization](https://www.opnfv.org)
- [SDxCentral.com: Trusted News and Resources for SDx, SDN, NFV](https://www.sdxcentral.com/)
- [sdxcentral.com: What is NFV – Network Functions Virtualization?](https://www.sdxcentral.com/resources/nfv/whats-network-functions-virtualization-nfv/)
	- [Software-defined networking (SDN)](https://www.sdxcentral.com/flow/sdn-software-defined-networking/)
- [SDxCentral’s Top 10 News Stories of 2015](https://www.sdxcentral.com/articles/news/sdxcentrals-top-10-news-stories-of-2015/2016/01/)
- [sdxcentral.com: The Top NFV & Telecom Influencers in 2015](https://www.sdxcentral.com/articles/news/top-nfv-influencers-2015/)
- [aunclicdelastic.com: SDN, NFV y los fundamentos de las redes del futuro](http://www.aunclicdelastic.com/sdn-nfv-y-los-fundamentos-de-las-redes-del-futuro/)
- [Open Source MANO](http://osm.etsi.org) Open Source Mano is an ETSI-hosted project to develop an Open Source NFV Management and Orchestration (MANO) software stack aligned with ETSI NFV.
	- [Telefónica se une a otras 22 operadoras y proveedores de equipos para crear una comunidad global de Open Source Mano (OSM)](https://www.telefonica.com/es/web/sala-de-prensa/-/telefonica-se-une-a-otras-22-operadoras-y-proveedores-de-equipos-para-crear-una-comunidad-global-de-open-source-mano-osm-)
- [2016 Survey Shows More and Diverse SDN Use Cases Being Deployed by Open SDN Power Users](https://www.opendaylight.org/news/blogs/2016/02/2016-survey-shows-more-and-diverse-sdn-use-cases-being-deployed-open-sdn-power)

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">Great interview w/ <a href="https://twitter.com/darrelljs">@darrelljs</a> &amp; <a href="https://twitter.com/intel">@intel</a> John Healy discussing &quot;The Future of NFV&quot; <a href="https://twitter.com/TIA_Now">@TIA_Now</a> <a href="https://twitter.com/hashtag/MWC16?src=hash">#MWC16</a> <a href="https://twitter.com/OpenTelco">@OpenTelco</a> <a href="https://twitter.com/hashtag/redhat?src=hash">#redhat</a> <a href="https://t.co/NzB8p1Qur1">https://t.co/NzB8p1Qur1</a></p>&mdash; Annie Potvin (@anniep0206) <a href="https://twitter.com/anniep0206/status/702396797063454722">febrero 24, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<div class="container">
<iframe width="420" height="315" src="https://www.youtube.com/embed/CHtpQznAn5Q?rel=0" frameborder="0" allowfullscreen class="video"></iframe>
</div>
<br/>

## IPv4
- [wikipedia: IPv4](https://en.wikipedia.org/wiki/IPv4)

<div class="container">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/efHHF5aHeCPyv" width="668" height="714" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/UmerQureshi9/simple-ipv4subnetting" title="Simple IPv4_Subnetting" target="_blank">Simple IPv4_Subnetting</a> </strong> from <strong><a href="//www.slideshare.net/UmerQureshi9" target="_blank">Umer Qureshi</a></strong> </div>
</div>
<br/>

<div class="container">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/EnfPCPLoYI8A9Q" width="668" height="714" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/swapnilkapate/i-pv4-subnetting-16465968" title="I pv4 subnetting" target="_blank">I pv4 subnetting</a> </strong> from <strong><a href="//www.slideshare.net/swapnilkapate" target="_blank">Swapnil Kapate</a></strong> </div>
</div>
<br/>

<div class="container">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/NTUP0U3kq421kQ" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/nilmenon/ccna-1-routing-and-switching-v50-chapter-9" title="CCNA 1 Routing and Switching v5.0 Chapter 9" target="_blank">CCNA 1 Routing and Switching v5.0 Chapter 9</a> </strong> from <strong><a href="//www.slideshare.net/nilmenon" target="_blank">Nil Menon</a></strong> </div>
</div>
<br/>

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="es" dir="ltr">Telefónica se une a 22 operadoras y proveedores de equipos para crear una comunidad global Open Source Mano <a href="https://twitter.com/hashtag/MWC16?src=hash">#MWC16</a> <a href="https://t.co/gCRmbpHduW">https://t.co/gCRmbpHduW</a></p>&mdash; Telefónica (@Telefonica) <a href="https://twitter.com/Telefonica/status/701724993441415168">febrero 22, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

## IPv6
- [wikipedia: IPv6](https://en.wikipedia.org/wiki/IPv6)
- [arstechnica.com: IPv6 celebrates its 20th birthday by reaching 10 percent deployment](http://arstechnica.com/business/2016/01/ipv6-celebrates-its-20th-birthday-by-reaching-10-percent-deployment/)

<div class="container">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/jNw65ZLpdYJz4Y" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/shaileshpachori/master-all-home" title="Ipv4 vs Ipv6 comparison" target="_blank">Ipv4 vs Ipv6 comparison</a> </strong> from <strong><a href="//www.slideshare.net/shaileshpachori" target="_blank">Shailesh Pachori</a></strong> </div>
</div>
<br>

## Network Forensics
- [Network Forensics](nw_forensics.md)

## Network Performance
- [infoworld.com: 10 tips for boosting network performance 🌟](http://www.infoworld.com/article/2627174/network-monitoring/10-tips-for-boosting-network-performance.html)

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
<br/>

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
