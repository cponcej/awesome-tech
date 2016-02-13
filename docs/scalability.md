**Table of Contents**
<!-- MarkdownTOC -->

- [Scalability](#scalability)
	- [Scalability and Data Center Blogs](#scalability-and-data-center-blogs)
	- [Scalability and Reliability. Distributed Systems](#scalability-and-reliability-distributed-systems)
	- [Web Performance](#web-performance)
	- [Scalability Solutions](#scalability-solutions)

<!-- /MarkdownTOC -->

[![Bicycle parking at Delft Central Station](images/logo-bicycle-dutch.jpg)](https://bicycledutch.wordpress.com/2015/06/02/bicycle-parking-at-delft-central-station/)

# Scalability
## Scalability and Data Center Blogs
- [highscalability.com](http://highscalability.com/)
- [All Things Distributed. Werner Vogels' weblog on building scalable and robust distributed systems](http://www.allthingsdistributed.com/)
- [Data Center Knowledge](http://www.datacenterknowledge.com/)
- [Youtube: Iceland - A Growing Data Center Hub](https://www.youtube.com/watch?v=LH5lj4sARI0)
- [RackTables.org - a datacenter asset management system](http://racktables.org/)
- [iheavy.com Scalable Startups](http://www.iheavy.com/) MySQL, AWS & Scalability Expert NYC

[![If you think it's expensive to hire a professional](images/If-you-think-its-expensive-to-hire-a-professional.jpg)](http://www.javiergarzas.com/2014/12/como-y-quien-recupero-healthcare-gov.html)

## Scalability and Reliability. Distributed Systems
- [Scalable Internet Architectures" slides - Theo Schlossnagle how to build scalable production Internet services and... how not to build them](http://lethargy.org/~jesus/misc/Scalable%20Ti.pdf)
	- ["Scalable Internet Architectures" book - Theo Schlossnagle](http://scalableinternetarchitectures.com/)
	- [video: Scalable Internet Architectures - Theo Schlossnagle](https://www.youtube.com/watch?v=2WuT2rdLK5A)
	- [Theo Schlossnagle's slides](http://es.slideshare.net/postwait)
	- Switch configurations should be in version control
	- Router configurations should be in version control
	- Firewall configurations should be in version control
	- System configurations should be in version control
	- Application configurations should be in version control
	- Monitoring configurations should be in version control
	- Documentation should be in version control
	- Application code should be in version control
	- Database schema should be in version control
	- Everything you do should be in version control
- [slides: Scalable Web Architectures: Common Patterns and Approaches](http://es.slideshare.net/techdude/scalable-web-architectures-common-patterns-and-approaches)
- [highscalability.com](http://highscalability.com/)
- [video: Making Architecture Matter - Martin Fowler Keynote](https://www.youtube.com/watch?v=DngAZyWMGR0)
- [book: Building Scalable Web Sites - Cal Henderson](http://shop.oreilly.com/product/9780596102357.do)
- [book: Site Reliability Engineering. How Google Runs Production Systems - 2016](http://shop.oreilly.com/product/0636920041528.do)
- [How Does The Use Of Docker effect latency on Linux?](http://highscalability.com/blog/2015/12/16/how-does-the-use-of-docker-effect-latency.html)
- [Cloud Computing: What are the key characteristics of a robust, scalable and healthy cloud architecture?](https://www.quora.com/Cloud-Computing/What-are-the-key-characteristics-of-a-robust-scalable-and-healthy-cloud-architecture) The biggest benefit of moving to the cloud is unsurprisingly a financial one. The financial model associated with the cloud is healthy and economical.
- [dzone: Distributed Systems in the Real World](https://dzone.com/articles/reasoning-about-distributed-systems-in-the-real-wo)

<div class="container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/2WuT2rdLK5A" frameborder="0" allowfullscreen class="video"></iframe>
</div>
<br>

<div class="container">
<iframe src="//es.slideshare.net/slideshow/embed_code/key/LnRFhtfXLoOMHx" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//es.slideshare.net/postwait/scalable-internet-architecture" title="Scalable Internet Architecture" target="_blank">Scalable Internet Architecture</a> </strong> from <strong><a href="//es.slideshare.net/postwait" target="_blank">Theo Schlossnagle</a></strong> </div>
</div>
<br/>

<div class="container">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/DngAZyWMGR0?rel=0" frameborder="0" allowfullscreen class="video"></iframe>
</div>
<br/>

<div class="container">
<iframe src="//es.slideshare.net/slideshow/embed_code/key/HghUgbjBasxURW" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//es.slideshare.net/techdude/scalable-web-architectures-common-patterns-and-approaches" title="Scalable Web Architectures: Common Patterns and Approaches" target="_blank">Scalable Web Architectures: Common Patterns and Approaches</a> </strong> from <strong><a href="//es.slideshare.net/techdude" target="_blank">Tech Dude</a></strong> </div>
</div>
<br/>

## Web Performance
- [webpagetest.org](http://www.webpagetest.org) Test a website's performance
- [Iframe loading techniques and performance](http://www.aaronpeters.nl/blog/iframe-loading-techniques-performance)

<div class="container">
<iframe src="//es.slideshare.net/slideshow/embed_code/key/mcjpimBYK0PsoM" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//es.slideshare.net/AndyDavies/speed-matters-so-why-is-your-site-so-slow" title="Speed matters, So why is your site so slow?" target="_blank">Speed matters, So why is your site so slow?</a> </strong> from <strong><a href="//es.slideshare.net/AndyDavies" target="_blank">Andy Davies</a></strong> </div>
</div>
<br/>

<div class="container">
<iframe src="//es.slideshare.net/slideshow/embed_code/key/mGQp2yMZSIeGHQ" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//es.slideshare.net/tammyeverts/how-slow-load-times-hurt-your-bottom-line-and-17-things-you-can-do-to-fix-it" title="How Slow Load Times Hurt Your Bottom Line (And 17 Things You Can Do to Fix It)" target="_blank">How Slow Load Times Hurt Your Bottom Line (And 17 Things You Can Do to Fix It)</a> </strong> from <strong><a href="//es.slideshare.net/tammyeverts" target="_blank">Tammy Everts</a></strong> </div>
</div>
<br/>

[![Using WebPage test](images/Using-WebPagetest.png)](http://www.wowebook.org/using-webpagetest.html)

<div class="container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/WBmttwfA_k8?rel=0" frameborder="0" allowfullscreen class="video"></iframe>
</div>
<br/>

## Scalability Solutions
- [OpenShift Dedicated](https://www.openshift.com/dedicated/)
- [OpenStack](http://www.openstack.org/)
- [Apache Mesos](http://mesos.apache.org/)
- [Kubernetes.io](http://kubernetes.io/)
	- [Kubernetes repo analyzed with gitm. Top changeset contributors by employer](https://github.com/karlkfi/kubernetes-gitdm/wiki#top-changeset-contributors-by-employer)
- [Univa Grid Engine](http://www.univa.com/)
- [Apache ZooKeeper](http://zookeeper.apache.org/)
	- [Coordination and service discovery with Apache Zookeeper](http://www.javacodegeeks.com/2013/11/coordination-and-service-discovery-with-apache-zookeeper.html)

<div class="tumblr-post" data-href="https://embed.tumblr.com/embed/post/P8tjxHPaumGfvn6V1XLvRA/139052088856" data-did="7f6c00872721685c446e6dac9a8ffc64a9ec3ba3"><a href="http://inafev.tumblr.com/post/139052088856/the-technical-account-manager-when-youre">http://inafev.tumblr.com/post/139052088856/the-technical-account-manager-when-youre</a></div><script async src="https://secure.assets.tumblr.com/post.js"></script>

[![get healthier](images/Get_Healthier.png)](https://www.quora.com/Cloud-Computing/What-are-the-key-characteristics-of-a-robust-scalable-and-healthy-cloud-architecture)
