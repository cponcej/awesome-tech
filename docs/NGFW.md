<!-- MarkdownTOC -->

- [Next Generation Firewalls (NGFW)](#next-generation-firewalls-ngfw)
    - [Dell SonicWall TZ Series 5th Generation. Escrito en primavera 2015](#dell-sonicwall-tz-series-5th-generation-escrito-en-primavera-2015)
    - [Dell SonicWall TotalSecure and CGSS Bundles](#dell-sonicwall-totalsecure-and-cgss-bundles)
    - [Dell SonicWall TZ Series 6th Generation](#dell-sonicwall-tz-series-6th-generation)
    - [Dell SonicWALL WAN Acceleration Appliance (WAN optimization)](#dell-sonicwall-wan-acceleration-appliance-wan-optimization)
    - [Fortinet](#fortinet)

<!-- /MarkdownTOC -->

<div class="tumblr-post" data-href="https://embed.tumblr.com/embed/post/Y6ORssbcHF5P4Puns-jRoA/134533644467" data-did="5149c43f6654210e160397d04d6c754abcfbba41"><a href="http://securityreactions.tumblr.com/post/134533644467/bypassing-firewall">http://securityreactions.tumblr.com/post/134533644467/bypassing-firewall</a></div><script async src="https://secure.assets.tumblr.com/post.js"></script>
<br>

# Next Generation Firewalls (NGFW)
- [Firewalls.com](http://www.firewalls.com/)
	- [youtube channel: Firewalls.com](https://www.youtube.com/user/firewallsDotCom)
- [sonicwallonline.co.uk TZ Series](http://www.sonicwallonline.co.uk/ranges/TZ-Series/)
- [Fortinet Fortigate](http://www.fortinet.com/products/fortigate/)
- [Cisco ASA 5500-X Series Firewalls](http://www.cisco.com/c/en/us/products/security/asa-5500-series-next-generation-firewalls/index.html)
- [PaloAlto Firewall Platforms](https://paloaltonetworks.com/products/platforms/firewalls.html)

## Dell SonicWall TZ Series 5th Generation. Escrito en primavera 2015
>Una característica muy conveniente de los NGFW es la de "3G/4G Modem Failover", que junto al balanceo de varias conexiones simultáneas WAN nos garantiza una conexión permanente a Internet de alta disponibilidad. No olvidemos el punto crítico para nuestro negocio que supone la conexión a Internet con el auge de VoIP IP-PBX (en la nube ó alojado en nuestra infraestructura), donde una caída de Internet puede suponer la incomunicación telefónica del negocio. En cualquier caso existen en el mercados productos balanceadores WAN/ADSL expécíficos con 3G/4G failover, como por ejemplo los balanceadores "Peplink Balance" (http://www.wifisafe.com/balanceadores-adsl.html)

>Del mismo modo, SonicWALL integra otras interesantes funcionalidades: proporciona el antivirus de escritorio mediante un enlace de descarga además del incluído en el mismo Gateway, evitando así la compra de un antivirus comercial de escritorio.

>Desde Marzo 2013 existen dos categorías de SonicWALL 5th Generation firewall:

>1. TZ Series (gama baja) 
2. NSA (gama media alta)

>Oferta de NSA 220 hasta finales de Abril 2015 con el mismo precio del TZ-215, a excepción del coste de renovación de licencias Level-7 firewall anuales (no tiene sentido adquirir un NGFW sin estas licencias). NSA 220 es la solución más económica dentro de su categoría, pero también una solución mucho más potente que el TZ-215 5th Generation.

>Dentro de la categoría TZ series, los dos más pequeños TZ-105 y TZ-205 serían apropiados para empresas de no más de 25 empleados. El TZ-215 5th Generation actual resulta conveniente para empresas de hasta 50 empleados siempre y cuando sus 60Mbps Full DPI throughput sean suficientes para nuestra planificación a cuatro años vista. Otra ventaja de los TZ Series es que incluyen Wifi-N, lo cual puede ser de interés para algunas pymes. En cambio nos puede interesar un NSA 220 no sólo por su mayor DPI throughput (muchas amenazas de seguridad actuales vienen encriptadas en el tráfico SSL), sino también por buscar una solución NGFW sin Wifi a ubicar dentro de nuestro Server Room. Mi último cliente tenía el Server Room junto al comedor con sus dos microondas -> interferencias. Un Wifi AP podemos colocarlo donde mejor nos convenga dentro de la oficina. Las soluciones WIFI AP de Dell SonicPoint no parece ser las más populares entre los expertos, existiendo productos WIFI AP más reconocidos como los de Aruba Networks ó Ubiquiti Networks.

>Del NSA 220 con respecto al TZ 215 también nos puede interesar su mayor número de licencias SSL-VPN y conexiones RDP (acceder al escritorio de la oficina en remoto).

>En cuestión de semanas DELL actualizará los TZ series con la sexta generación de firewalls con mayor CPU, memoria, DPI throughput y SonicOS 6.2 (basado en CentOS). A tener en cuenta con las últimas novedades de fibra existente en el mercado con ofertas de 300Mbs y 500Mbs. Si disponemos de una conexión de fibra de 100Mbs ó superior, conviene un NSA220 en lugar del actual TZ-215 para hacer un mejor uso del ancho de banda y evitar cuellos de botella (mayor DPI throughput del primero: 110Mbps full throughput). Coste alrededor de 900€ primer año con TotalSecure Bundle + renovación de CGSS Bundle a partir del segundo año por ~300€ anuales según el minorista correspondiente. Renovación de equipo NGFW cada 4 años.

## Dell SonicWall TotalSecure and CGSS Bundles
- [SonicWALL TotalSecure bundle](http://www.sonicwall.com/es/es/products/Network-Security-TotalSecure.html)
- [SonicWALL Comprehensive Gateway Security Suite bundle](http://www.sonicwall.com/es/es/products/Network-Security-Comprehensive-Gateway-Security-Suite.html)

## Dell SonicWall TZ Series 6th Generation
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

## Dell SonicWALL WAN Acceleration Appliance (WAN optimization)
- [community.dell.com: Accelerate Application Performance for a Better User Experience](http://en.community.dell.com/techcenter/security/network-mobile-email/b/weblog/archive/2016/01/11/accelerate-application-performance-for-a-better-user-experience)

[![Dell SonicWall TZ500 Management Monitor](images/Dell-SonicWall-TZ500-Management-Monitor.png)](http://www.storagereview.com/dell_sonicwall_tz500_firewall_review)

<div class="container">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/osRrBcI1DzI?list=PLlLDGbMf9B8MvwgHg8bJC0QDewDz_inPy" frameborder="0" allowfullscreen class="video"></iframe>
</div>
<br>

<div class="container">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/DSK5MwrYpzquVu" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/DellSoftware/dwuf15-advanced-sonicos-management-best-practices" title="DWUF&#x27;15: Advanced SonicOS Management Best Practices" target="_blank">DWUF&#x27;15: Advanced SonicOS Management Best Practices</a> </strong> from <strong><a href="//www.slideshare.net/DellSoftware" target="_blank">Dell Software</a></strong> </div>
</div>
<br/>

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">When connection counts are high but you need <a href="https://twitter.com/hashtag/DPI?src=hash">#DPI</a>, enter the <a href="https://twitter.com/DellSecurity">@DellSecurity</a> <a href="https://twitter.com/SonicWall">@SonicWALL</a> <a href="https://twitter.com/hashtag/SuperMassive10400?src=hash">#SuperMassive10400</a> <a href="https://t.co/LZ8grGq95j">pic.twitter.com/LZ8grGq95j</a></p>&mdash; Jeremiah Johnson (@jjohnson757) <a href="https://twitter.com/jjohnson757/status/690297532119916544">enero 21, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">.<a href="https://twitter.com/Dell">@Dell</a> SonicWALL wireless network security combines high speed 802.11ac &amp; next-gen firewalls:<a href="https://t.co/JATrWCNhRY">https://t.co/JATrWCNhRY</a> <a href="https://t.co/IX3nF5aED3">pic.twitter.com/IX3nF5aED3</a></p>&mdash; Dell Security (@DellSecurity) <a href="https://twitter.com/DellSecurity/status/682312836685651969">diciembre 30, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">New SonicAlert: Trojan distributed as 8 Ball Pool game hack (Dec 18, 2015) by <a href="https://twitter.com/DellSecurity">@DellSecurity</a> Threats Research: <a href="https://t.co/MTnEiQmUnf">https://t.co/MTnEiQmUnf</a></p>&mdash; Dell Security (@DellSecurity) <a href="https://twitter.com/DellSecurity/status/677928570010927104">diciembre 18, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">Achieve deeper <a href="https://twitter.com/hashtag/network?src=hash">#network</a> security w/ <a href="https://twitter.com/Dell">@Dell</a> SonicWALL <a href="https://twitter.com/hashtag/NGFWs?src=hash">#NGFWs</a> w/out compromising performance: <a href="https://t.co/KYh6h6KKoY">https://t.co/KYh6h6KKoY</a> <a href="https://t.co/BffTehgOmF">pic.twitter.com/BffTehgOmF</a></p>&mdash; Dell Security (@DellSecurity) <a href="https://twitter.com/DellSecurity/status/674667047192813570">diciembre 9, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">Sathya T. discusses <a href="https://twitter.com/hashtag/network?src=hash">#network</a> security designs for your retail business: <a href="https://t.co/UuhjqWnaGm">https://t.co/UuhjqWnaGm</a> <a href="https://twitter.com/Dell">@Dell</a> <a href="https://twitter.com/hashtag/SonicWALL?src=hash">#SonicWALL</a> <a href="https://t.co/Npcawjy8Ap">pic.twitter.com/Npcawjy8Ap</a></p>&mdash; Dell Security (@DellSecurity) <a href="https://twitter.com/DellSecurity/status/674688974200422401">diciembre 9, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

## Fortinet
- [Fortiguard](http://www.fortiguard.com/)
- [twitter.com/Fortinet](https://twitter.com/Fortinet)
- [This was not a “backdoor” vulnerability issue but rather a management authentication issue](http://blog.fortinet.com/post/brief-statement-regarding-issues-found-with-fortios)

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">Good piece from the Fortinet Blog on email hacking campaigns and the low costs and massive returns available &gt;&gt; <a href="https://t.co/t5o8sKGlh9">https://t.co/t5o8sKGlh9</a></p>&mdash; Sean Huggett (@seanhuggett) <a href="https://twitter.com/seanhuggett/status/694124366850887680">febrero 1, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<div class="tumblr-post" data-href="https://embed.tumblr.com/embed/post/Y6ORssbcHF5P4Puns-jRoA/137299316242" data-did="01ae80a50a24446e87cce8bedfb90340b1b3e3b7"><a href="http://securityreactions.tumblr.com/post/137299316242/fortinet-official-response-to-the-backdoor">http://securityreactions.tumblr.com/post/137299316242/fortinet-official-response-to-the-backdoor</a></div><script async src="https://secure.assets.tumblr.com/post.js"></script>