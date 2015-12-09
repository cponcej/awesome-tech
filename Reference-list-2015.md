# Red Hat Enterprise Linux 6 remote deployment on Dell PowerEdge R720 & KVM virtualization with qcow2 pre-allocation (2012)

- Document Title: Best practices, recommendations and notes: Red Hat Enterprise Linux 6.3 remote installation/deployment on DELL PowerEdge R720 (12G), KVM hypervisor, Tomcat7, Uptime &amp; Performance Tips.
- [This document in HTML format rendered with rawgit] (https://rawgit.com/inafev/RHEL6_KVM_Tomcat_DellR720_deployment/master/RHEL6_KVM_Tomcat_DellR720_deployment.html)  
- [The URL reference document in HTML format rendered with rawgit](https://rawgit.com/inafev/RHEL6_KVM_Tomcat_DellR720_deployment/master/URL%20references.html)
- [Cambios importantes en la gestión de memoria de Java 8 de Oracle](../master/change_in_memory_management_java_8.md)

### Table of contents
1. Remote Deployment Procedure of RHEL6.3 x86_64 on Dell PowerEdge R720
2. KVM Hypervisor (‘Virtual Host’) with VMs for WebApp on local storage
3. DELL USC
4. BIOS Boot partitioning
5. Importance of detaching VG data from VG system (LVM2) on hypervisors and VMs
6. DELL PowerEdge firmware update via YUM
7. Macvtap
8. qcow2 pre-allocation
9. performance analysis script
10. network latency analysis
11. load testing with JMeter HTTP
12. Java Garbage Collector ulimit & tuning
13. sudo and Upstart scripts for Apache and Tomcat
14. Importance of ports > 1024 no root for balanced Apaches
15. NTP
16. libvirt-snmp zenoss
17. KVM’s virsh CLI
18. rsync (solaris to linux migration), alternatives to portal/CMS Microsoft Sharepoint, etc.


# New reference list updated, December 2015
## Red Hat virtualization
- [How to Install RedHat Enterprise Virtualization (RHEV) 3.5] (http://www.tecmint.com/install-redhat-virtualization-rhev/)
- [How to Create Virtual Machines in Linux Using KVM (Kernel-based Virtual Machine)] (http://www.tecmint.com/install-and-configure-kvm-in-linux/)
- [Open source Virtualization by Quru, the fastest-growing Red Hat solution provider based in London](https://youtu.be/F2lxJTdfVy8)
- [Up and Running with oVirt 3.5](http://community.redhat.com/blog/2014/10/up-and-running-with-ovirt-3-5/)
- [Up and Running with oVirt 3.5, Part Two](http://community.redhat.com/blog/2014/11/up-and-running-with-ovirt-3-5-part-two/)

## Red Hat docs and forums
- [RedHat "subreddit"](https://www.reddit.com/r/redhat/)
- [Red Hat Enterprise Linux 5, 6, and 7.Common administrative commands](https://access.redhat.com/sites/default/files/attachments/rhel_5_6_7_cheatsheet_a4_1114_jcs.pdf)
- [A big step forward in business Linux: Red Hat Enterprise Linux 7 arrives](http://www.zdnet.com/article/a-big-step-forward-in-business-linux-red-hat-enterprise-linux-7-arrives/)
- [Red Hat quiere que su canal se vuelque en middleware y cloud](http://www.channelpartner.es/oportunidades-negocio/noticias/1079121002302/red-hat-quiere-canal-vuelque-middleware-cloud.1.html)
- [Product documentation](https://access.redhat.com/documentation/en/)
- [How to use Red Hat Software Collections (RHSCL) or Red Hat Developer Toolset (DTS)?](https://access.redhat.com/solutions/472793)
- [Reddit: Red Hat Software Collections (SCL) is not provided with RHEL Server/Workstation, Self Support](https://www.reddit.com/r/redhat/comments/39kk0s/red_hat_software_collections_scl_is_not_provided/)
- [Flock 2014 Fedora Conference: Live Streaming Schedule and Video Archives](http://community.redhat.com/blog/2014/08/flock-2014-fedora-conference-live-streaming-schedule-and-video-archives/)
- [Flock 2015 Fedora Conference: Streaming video](https://www.youtube.com/playlist?list=PL0x39xti0_64fA6uRtcfoJPkHfZdeVTRC)
- [Flock Fedora Conference](https://fedoramagazine.org/tag/flock/)
- [Fedora 23 released - Fedora Magazine](http://fedoramagazine.org/fedora-23-released/)
- [Fedora 23: An Impressive Release for Advanced Linux Users](https://www.linux.com/news/software/applications/868617-fedora-23-an-impressive-release-for-advanced-linux-users/)

### Red Hat Development
- [Our 5 most popular developer posts in 2014](http://developerblog.redhat.com/2014/12/31/5-most-popular-posts-2014/)
- [Red Hat Software Collections 2.1 now generally available](http://developerblog.redhat.com/2015/11/17/software-collections-2-1-generally-available/)
- [Red Hat developers blog, an Enterprise Developer’s Journey to the IoT](http://developerblog.redhat.com/2015/12/02/enterprise-developers-journey-to-iot/)
- [Red Hat JBoss Fuse - Integrating Database, Java Bean and Restful Services in EAP, Spring DSL](http://planet.jboss.org/post/red_hat_jboss_fuse_integrating_database_java_bean_and_restful_services_in_eap_spring_dsl)
- [Devdocs.io: Devdocs API Documentation Browser. DevDocs combines multiple API documentations in a fast, organized, and searchable interface] (http://devdocs.io)

## Microservices
- [Introduction to Microservices | NGINX](https://www.nginx.com/blog/introduction-to-microservices/)
- [Microservices, Martin Fowler](http://martinfowler.com/articles/microservices.html)
- [What are Microservices?](https://www.linkedin.com/pulse/what-microservices-walli-datoo)
- [Microservices architecture: advantages and drawbacks](http://cloudacademy.com/blog/microservices-architecture-challenge-advantage-drawback/)

## Nginx
- [How to Setup Name-based and IP-based Virtual Hosts (Server Blocks) with NGINX](http://www.tecmint.com/nginx-name-based-and-ip-based-virtual-hosts-server-blocks/)
- [TCP Load Balancing in NGINX Plus r5 - NGINX](http://nginx.com/blog/tcp-load-balancing-in-nginx-plus-r5/)
- [Nginxconf 2014. When Dynamic Becomes Static: The Next Step in Web Caching Techniques: Wim Godden @nginxconf 2014](https://www.youtube.com/watch?v=OssIuHbgzJY)

## Data virtualization
- [JBoss Data Virtualization 6.1](http://www.ossmentor.com/2015/04/data-virtualization-61-getting-started.html)

## Network virtualization
- [FOSS Network Functions Virtualization](https://www.opnfv.org) 

## Docker
- [Adoption/popularity is the new king. The only constant is change! - puppet, chef, ansible, docker ](http://getcloudify.org/2015/10/21/configuration-management-chef-puppet-ansible-emc-dell-vmware-orchestration.html)
- [DockerCon EU: Software Testing with Docker](http://thenewstack.io/software-testing-docker/)
- [Free eBook - Docker Security: Using Containers Safely in Production](https://www.openshift.com/promotions/docker-security.html)
- [Why docker](http://www.javacodegeeks.com/2015/11/why-docker.html)
- [Getting started with docker](https://dzone.com/refcardz/getting-started-with-docker-1)
- [Deploying Containers with Docker Swarm and Docker Networking](http://www.javacodegeeks.com/2015/11/deploying-containers-docker-swarm-docker-networking.html)
- [Docker for the python developer, podcast at http://talkpython.fm/](http://talkpython.fm/episodes/show/9/docker-for-the-python-developer)
- [How to be Successful Running Docker in Production](http://www.infoq.com/news/2015/11/running-docker-production)
- [Monitoring Docker: Part II](http://blog.logscape.com/2014/07/monitoring-docker-part-ii/)
- [Gathering LXC and Docker containers metrics](http://blog.docker.com/2013/10/gathering-lxc-docker-containers-metrics/)
- [Red Hat containers](http://www.redhat.com/en/insights/containers)
- [Red Hat loves containers in RHEL 7.2](http://www.zdnet.com/article/red-hat-loves-containers-in-rhel-7-2/)
- [Taste of Red Hat Training: Customizing a container to deploy a network service](http://www.redhat.com/en/about/videos/taste-red-hat-training-customizing-container-deploy-network-service)
- [Red Hat Drives Networking, Linux Container Innovation in Latest Version of Red Hat Enterprise Linux 7](http://www.redhat.com/en/about/press-releases/red-hat-drives-networking-linux-container-innovation-latest-version-red-hat-enterprise-linux-7)
- [Architecting Containers Part 1: Why Understanding User Space vs. Kernel Space Matters](http://rhelblog.redhat.com/2015/07/29/architecting-containers-part-1-user-space-vs-kernel-space/)
- [​CoreOS brings end-to-end trusted computing to containers](http://www.zdnet.com/article/coreos-brings-end-to-end-trusted-computing-to-containers/)
- [10 Awesome Docker Tutorials to Kick-Start your DevOps Projects](http://www.javacodegeeks.com/2015/11/10-awesome-docker-tutorials-to-kick-start-your-devops-projects.html)
- [Docker cookbook](http://shop.oreilly.com/product/0636920036791.do?sortby=publicationDate)
- [Docker in Action - Fitter, Happier, More Productive](https://realpython.com/blog/python/docker-in-action-fitter-happier-more-productive/)
- [Docker for PHP Developers.Efficient Nginx, PHP, and MySQL development environments with Docker](http://www.newmediacampaigns.com/blog/docker-for-php-developers)

### Configuration Management, Vagrant
- [Learning Puppet with Vagrant, video tutorial at sysadmincasts.com](http://sysadmincasts.com/episodes/8-learning-puppet-with-vagrant)
- [7 Open Source tools for java deployment:Jenkins, Chef, Vagrant, Packer, Docker, Flyway, Rundeck, Go](http://www.oraclejavamagazine-digital.com/javamagazine_twitter/20140506?pg=6#pg6)
- [How Vagrant Eases the Software Research and Testing - The New Stack](http://thenewstack.io/vagrant-developers-researchers/)
- [Improve your development environments with virtualization - Vagrant, Python ](http://pyvideo.org/video/3411/improve-your-development-environments-with-virtua)
- [Why tools like Docker, Vagrant, and Ansible are hotter than ever](http://opensource.com/business/15/5/why-Docker-Vagrant-and-Ansible)
- [Crash course on Vagrant, video tutorial at sysadmincasts.com](https://sysadmincasts.com/episodes/42-crash-course-on-vagrant-revised)

### Configuration Management, Ansible
- [slideshare.net: Debugging ansible modules](http://www.slideshare.net/aleonhardt/debugging-ansible-modules)
- [Demo: Chef vs Puppet vs Ansible](https://www.youtube.com/watch?v=miO00M4vPok)
- [Are Docker Users Migrating to Ansible and Away from Puppet and Chef?](http://thenewstack.io/are-docker-users-migrating-to-ansible-and-away-from-puppet-and-chef/)
- [Ansible, Just Use It - slide](https://speakerdeck.com/vranac/ansible-just-use-it)
- [Ansible playbook to provision a WebLogic Fusion Middleware Domain on RHEL/CentOS 7](http://unversioned.blogspot.gr/2015/10/ansible-playbook-provision-weblogic-fusion-middleware-12.1.3-centos-7.html)
- [Ansible vs Puppet – Hands-On with Ansible](https://dantehranian.wordpress.com/2015/01/20/ansible-vs-puppet-hands-on-with-ansible/)
- [Ansible for DevOps, a book on Ansible by Jeff Geerling](http://www.ansiblefordevops.com/)
- [Ansible examples from Ansible for DevOps - github code](https://github.com/geerlingguy/ansible-for-devops)
- [How to Install and Configure ‘Ansible’ Automation Tool for IT Management](http://www.tecmint.com/install-and-configure-ansible-automation-tool-in-linux/)
- [Ansible video tutorial at sysadmincasts.com](https://sysadmincasts.com/episodes/43-19-minutes-with-ansible-part-1-4)
- [Ansible Introduction video tutorial](https://www.youtube.com/watch?t=24&v=2jXHxkLBOHg)
- [PyCon US 2015: Ansible beyond YAML](http://www.pyvideo.org/video/3484/ansible-beyond-yaml)
- [DevOps.com: Ansible: Automation, Provisioning and Configuration Management](http://devops.com/2015/05/19/ansible-automation-provisioning-configuration-management/)

### Configuration Management, Puppet
- [Github: The Puppet Dashboard is a web interface providing node classification and reporting features for Puppet, an open source system configuration management tool](https://github.com/sodabrew/puppet-dashboard)
- [Github: Smarter Puppet deployment.R10k provides a general purpose toolset for deploying Puppet environments and modules](https://github.com/puppetlabs/r10k)
- [Librarian-puppet is a bundler for your puppet infrastructure. You can use librarian-puppet to manage the puppet modules your infrastructure depends on, whether the modules come from the Puppet Forge, Git repositories or a just a path](http://librarian-puppet.com/)
- [puppetlabs/mcollective](https://forge.puppetlabs.com/puppetlabs/mcollective)
- [Puppet and Python](http://pyvideo.org/video/3649/puppet-and-python)
- [Puppet Modules: Apps for Ops](http://pyvideo.org/video/2589/puppet-modules-apps-for-ops)
- [Sysadmincasts.com: Git to Puppet Deployment Workflow](https://sysadmincasts.com/episodes/33-git-to-puppet-deployment-workflow)
- [Podcast: Docker & Puppet: Uniting Containers with Configuration Management](https://puppetlabs.com/podcasts/podcast-docker-puppet-combining-containers-configuration-management)
- [Webinar: Getting Started with Puppet Enterprise 3.3](https://puppetlabs.com/webinars/getting-started-puppet-enterprise-33-us)
- [Puppet Enterprise 3.3 disponible con soporte para RHEL 7, Ubuntu 14.04 LTS, Windows Server 2012 R2, y Mac OS X Mavericks](https://puppetlabs.com/blog/puppet-enterprise-3.3-get-started-faster)
- [Sysadmincasts.com: Learning Puppet with Vagrant](https://sysadmincasts.com/episodes/8-learning-puppet-with-vagrant)
- [Twitter's transition from Puppet to Ansible](https://www.youtube.com/watch?v=fwGrKXzocg4)
- [Learning Puppet can be like drinking from a fire hose. Here is a guide to basic terms and resources to help you learn](https://puppetlabs.com/blog/starting-puppet-basics-from-puppet-labs-employee)
- [Geppetto, eclipse plugin for puppet](https://puppetlabs.com/blog-tags/geppetto)

### Configuration Management, Red Hat Satellite, Katello and Foreman
- [The Katello project is the Open Source, upstream equivalent of the new iteration of Red Hat’s Satellite Server](http://itnerdchronicles.com/katello-one-cloud-to-rule-them-all/)
- [Foreman is a complete lifecycle management tool for physical and virtual servers. We give system administrators the power to easily automate repetitive tasks, quickly deploy applications, and proactively manage servers, on-premise or in the cloud](http://www.theforeman.org/)

### Configuration Management, Chef 
- [SAP cookbooks with chef](http://sapcc.github.io/sap-cookbook-docs/)

### DevOps
- [Agilidad, por Javier Garzás](https://www.youtube.com/watch?v=oShXAC26rcs)
- [Un video imprescindible sobre la buena gestión de equipos software](http://www.javiergarzas.com/2014/09/un-video-sobre-la-buena-gestion-de-equipos-software.html)
- [Scrumguides.org: Scrum’s creators seek definitive place for Scrum knowledge](http://www.scrumguides.org/)
- [DevOps Library: The Best Videos for the Best Admins](http://devopslibrary.com/)
- [What to Expect From a DevOps Interview](https://dzone.com/articles/what-to-expect-from-a-devops-interview)
- [Why You’ll NEVER Nail That DevOps Interview](https://dzone.com/articles/why-youll-never-nail-that-devops-interview-1)
- [You will not become agile by implementing scrum](https://www.linkedin.com/pulse/you-become-agile-implementing-scrum-jurriaan-kamer)
- [Why everyone hates DevOps](http://www.networkworld.com/article/2915893/software/why-everyone-hates-devops.html)
- [8 Reasons IT Pros Hate The Cloud](http://www.informationweek.com/cloud/8-reasons-it-pros-hate-the-cloud/d/d-id/1320531)
- [The IT Culture War: The Struggle to Adopt DevOps | WIRED](http://www.wired.com/2015/03/culture-war-struggle-adopt-devops/)
- [Cómo y quién recuperó uno de los mayores desastres del desarrollo software: la web healthcare...](http://www.javiergarzas.com/2014/12/como-y-quien-recupero-healthcare-gov.html)

### Continuous Integration and Delivery
- [Martin Fowler - Continuous Delivery](https://www.youtube.com/watch?v=aoMfbgF2D_4)
- [Software Development in the 21st century](https://www.thoughtworks.com/talks/software-development-21st-century-xconf-europe-2014)
- [A Brief Guide to Success with Agile, Martin Fowler](http://martinfowler.com/articles/agileFluency.html)
- [Learn about how to apply Continuous Delivery principles to SOA, when test services aren't adequate, and the mechanics of service virtualization](https://dzone.com/articles/continuously-delivering-soa)
- [Jenkins User Conference West 2015 - Slides available](https://www.cloudbees.com/jenkins/juc-2015/us-west)
- [Jenkins and Docker: Next Generation Continuous Delivery](https://www.linkedin.com/pulse/jenkins-docker-next-generation-continuous-delivery-khadija-kerissi)
- [Tutorial: Gestión de Configuración – Ansible + Vagrant + Jenkins](http://www.carlessanagustin.com/2015/08/20/tutorial-gestion-de-configuracion-ansible-vagrant-jenkins/)
- [Continuous integration + rpmbuild + Docker](https://access.redhat.com/discussions/1174853)
- [Build native RPM packages by leveraging docker capabilities](https://github.com/alanfranz/docker-rpm-builder)
- [Jenkins Docker Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Docker+Plugin)
- [jenkins-rpm-builder, wrapper for easy building of rpm packages in jenkins ci server](https://github.com/jhrcz/jenkins-rpm-builder)
- [Building RPM with Docker images](http://blog.chmouel.com/2014/12/31/building-rpm-with-docker-images/)
- [Reddit: Creating internal RPM build environment?](https://www.reddit.com/r/linuxadmin/comments/2ke2vs/creating_internal_rpm_build_environment/)

### NoSQL
- [Introduction to NoSQL by Martin Fowler, video tutorial](https://www.youtube.com/watch?v=qI_g07C_Q5I)
- [NoSQL vs. SQL: Choosing a Data Management Solution](http://www.javacodegeeks.com/2015/10/nosql-vs-sql.html)

### NewSQL
- [NuoDB es una de las principales soluciones NewSQL, una revolución con respecto a las monolíticas 1-box BBDD tradicionales. NuoDB es ACID y SQL, pero también distribuida/escalable y schema flexible](http://www.nuodb.com/)
- [Inconvenientes de la replicación tradicional de BBDD](http://www.nuodb.com/blog/replication-is-it-easy)

### Scalability and Reliability
- [Scalable Internet Architectures" slides - Theo Schlossnagle how to build scalable production Internet services and... how not to build them](http://lethargy.org/~jesus/misc/Scalable%20Ti.pdf)
- ["Scalable Internet Architectures" book - Theo Schlossnagle](http://scalableinternetarchitectures.com/)
- [video: Scalable Internet Architectures - Theo Schlossnagle](https://www.youtube.com/watch?v=2WuT2rdLK5A)
- [slides: Scalable Web Architectures: Common Patterns and Approaches](http://es.slideshare.net/techdude/scalable-web-architectures-common-patterns-and-approaches)
- [video: Making Architecture Matter - Martin Fowler Keynote](https://www.youtube.com/watch?v=DngAZyWMGR0)
- [book: Building Scalable Web Sites - Cal Henderson](http://shop.oreilly.com/product/9780596102357.do)
- [book: Site Reliability Engineering. How Google Runs Production Systems - 2016](http://shop.oreilly.com/product/0636920041528.do)

### Search servers
- [Apache Solr vs ElasticSearch](http://solr-vs-elasticsearch.com/) 
 
### HTTP/2
- [SPDY & HTTP 2 with Akamai CTO Guy Podjarny](https://www.youtube.com/watch?v=WkLBrHW4NhQ)
- https://http2.github.io/faq/
- [A Simple Performance Comparison of HTTPS, SPDY and HTTP/2](https://blog.httpwatch.com/2015/01/16/a-simple-performance-comparison-of-https-spdy-and-http2/comment-page-1/)
- [HTTP/2 With JBoss EAP 7 - Tech Preview](http://blog.eisele.net/2015/11/http2-with-jboss-eap-7.html)
- [5 Tips to Boost the Performance of Your Apache Web Server](http://www.tecmint.com/apache-performance-tuning/)
- [Enabling HTTPS Without Sacrificing Your Web Performance](http://moz.com/blog/enabling-https-without-sacrificing-web-performance)
- [HTTP/2 With JBoss EAP 7: Tech Preview](https://dzone.com/articles/http2-with-jboss-eap-7-tech-preview)
- [HTTP/2 resources](https://pinboard.in/u:rmurphey/t:http2/)
- [As sites move to SHA2 encryption, millions face HTTPS lock-out | ZDNet](http://www.zdnet.com/article/as-sha1-winds-down-sha2-leap-will-leave-millions-stranded/)
- [Microsoft may block SHA1 certificates sooner than expected](http://www.zdnet.com/article/as-attacks-near-microsoft-mulls-banning-sha1-certificates/)
 
### Git
- [GitHub lanza su propio curso de formación; ¿el objetivo? Que los desarrolladores exploten todo su potencial](http://www.genbeta.com/comparativa/github-lanza-su-propio-curso-de-formacion-el-objetivo-que-los-desarrolladores-exploten-todo-su-potencial)
- [One Million Downloads of GitLab](https://about.gitlab.com/2015/10/29/one-million-downloads-of-gitlab/)
- [Using GIT to backup your website files on linux](http://techarena51.com/index.php/using-git-backup-website-files-on-linux/)
- [Sysadmincasts.com: Git to Puppet Deployment Workflow](https://sysadmincasts.com/episodes/33-git-to-puppet-deployment-workflow)
- [David Baumgold - Advanced Git - PyCon 2015](https://www.youtube.com/watch?v=4EOZvow1mk4)
- [Udemy e-learning: Git Going Fast: One Hour Git Crash Course - Free](https://www.udemy.com/git-going-fast/)
- [Newrelic: GitHub Flow - Collaborating effectively using Git and GitHub](https://newrelic.com/webinar/github-for-teams)
- [Git Complete: The definitive, step-by-step guide to Git](https://www.udemy.com/git-complete)
- [Command Line Essentials: Git Bash for Windows (free)](https://www.udemy.com/git-bash/)
- [Git Recipes. A Problem-Solution Approach](http://it-ebooks.info/book/3259/)
- [Git Pocket Guide](http://it-ebooks.info/book/2517/)

### Next Generation Firewalls
- [Dell SonicWALL TZ500 Firewall Review](http://www.storagereview.com/dell_sonicwall_tz500_firewall_review)
- http://livedemo.sonicwall.com
- [Disponible la 6ª generación de Dell SonicWALL TZ Series Firewalls con SonicOS 6.2. A tener en cuenta por Pymes interesadas en las nuevas conexiones de Internet para empresa (300 y 500Mbs)](http://www.dell.com/learn/us/en/uscorp1/press-releases/2015-04-28-dell-sonic-wall-tz-series)
- [SonicWALL Firewall vs. Fortinet Fortigate](http://www.firewalls.com/sonicwall_vs_fortigate)
- [Dell Security Adds 50 Percent Rebate On SonicWall TZ And NSA Appliances](http://www.crn.com/news/channel-programs/300077951/dell-security-adds-50-percent-rebate-on-sonicwall-tz-and-nsa-appliances.htm)

### Identity Management
- [Ten New Identity Management (IdM) Features in Red Hat Enterprise Linux 7.1](http://rhelblog.redhat.com/2015/03/25/ten-new-identity-management-idm-features-in-red-hat-enterprise-linux-7-1/)
- [Improvements to Identity Management (IdM) in RHEL 7.1](http://www.redhat.com/en/about/press-releases/red-hat-continues-platform-innovation-general-availability-first-minor-release-red-hat-enterprise-linux-7)
- [Dell Authentication Services](http://software.dell.com/products/authentication-services/)
- [Centrify | Identity Management](https://www.centrify.com/)
- [Employees have no qualms in selling corporate passwords](http://www.csoonline.com/article/2905682/data-breach/employees-have-no-qualms-in-selling-corporate-passwords.html)
- [Are their any valid Active Directory Alternatives?](http://community.spiceworks.com/topic/689453-are-their-any-valid-active-directory-alternatives)

### Load Testing
- [JMeter Tutorial for Load Testing – The ULTIMATE Guide (PDF Download)](http://www.javacodegeeks.com/2014/11/jmeter-tutorial-load-testing.html)

### Metric monitoring
- [Stop using Nagios (so it can die peacefully)](http://www.slideshare.net/superdupersheep/stop-using-nagios-so-it-can-die-peacefully)
- [Linux cluster sysadmin — OS metric monitoring with colmux](http://www.rittmanmead.com/2014/12/linux-cluster-sysadmin-os-metric-monitoring-with-colmux/)
- [Netflix and linux performance analysis in 60 seconds](http://www.itworld.com/article/3010558/linux/netflix-linux-performance-analysis-in-60-seconds.html)
- [Why use Sensu?](http://www.rampmeupscotty.com/blog/2013/01/20/why-use-sensu/)
- [All the slides of Zabbix Conference 2015](http://www.zabbix.com/conf2015_agenda.php)
- [Zabbix for Beginners webinar](https://www.youtube.com/watch?v=uqFaz2HyxVM)
- [Reddit: Zabbix vs Nagios - what are the cases for using one or the other in an enterprise setting?](https://www.reddit.com/r/linuxadmin/comments/2i4k04/zabbix_vs_nagios_what_are_the_cases_for_using_one/)
- [MoSKito.org APM, herramienta de monitorización de JVMs en producción](http://www.moskito.org/)
- [Anemometer: MySQL Slow Query Monitor](http://olindata.com/blog/2014/07/anemometer-mysql-slow-query-monitor)
- [GitHub: Capturing JVM- and application-level metrics. So you know what's going on](http://metrics.dropwizard.io)
- [GitHub: Dropwizard metrics](https://github.com/dropwizard/metrics)
- [Zipkin is a distributed tracing system that helps us gather timing data for all the disparate services at Twitter](http://twitter.github.io/zipkin)
- [The Bro Network Security Monitor](https://www.bro.org/)
- [FLOSS Weekly 296, Bro](https://twit.tv/shows/floss-weekly/episodes/296)
- [pingdom.com webiste monitoring](https://www.pingdom.com/)

### Centralized logging. Big Data Log Management Tools (Splunk,XpoLog, GrayLog2, etc)
- [Logstash | Collect, Enrich & Transport Data](https://www.elastic.co/products/logstash)
- [Kibana | Explore & Visualize Your Data](https://www.elastic.co/products/kibana)
- [Nagios Log Server vs. Elasticsearch – Logstash – Kibana](http://labs.nagios.com/2014/10/19/nagios-log-server-vs-elasticsearch-logstash-kibana/)
- [Kibana is a highly scalable interface for Logstash and ElasticSearch that allows you to efficiently search, graph, analyze and otherwise make sense of a mountain of logs](http://kibana.org)
- [Choosing a Central Logging Tool: 5 Important Features, 6 Optional Tools](https://www.ravellosystems.com/blog/choosing-central-logging-tool-5-features-6-tools/)
- [Using elasticsearch, logstash and kibana to create realtime dashboards (slides)](https://speakerdeck.com/elasticsearch/using-elasticsearch-logstash-and-kibana-to-create-realtime-dashboards)
- [youtube: Logstash Presentation](https://www.youtube.com/watch?v=U3m0jKygAqU)
- [Free Alternative to Splunk Using Fluentd](docs.fluentd.org/articles/free-alternative-to-splunk-by-fluentd)
- [Apache Solr vs ElasticSearch](http://solr-vs-elasticsearch.com/)

### Spark
- [Tools for Troubleshooting, Installation and Setup of Apache Spark Environments](https://dzone.com/articles/tools-for-troubleshooting-installation-and-setup-o)
- [Spark Streaming: What Is It and Who’s Using It?](http://www.datanami.com/2015/11/30/spark-streaming-what-is-it-and-whos-using-it/)
- [Getting Started with Spark (in Python)](https://districtdatalabs.silvrback.com/getting-started-with-spark-in-python)

### Weblogic
- [WLST Scripting to Get WebLogic Libraries and Deployed Applications](https://blogs.oracle.com/practicalbpm/entry/wlst_scripting_to_get_weblogic)
- [Java Serialization Vulnerability Threatens Millions of Applications . Contrast security is promoting their solution for a vulnerability that affects WebLogic, WebSphere, JBoss, Jenkins, and OpenNMS.](https://dzone.com/articles/java-serialization-vulnerability-threatens-million)
- [Oracle WebLogic Server 12c Advanced Administration Cookbook](http://it-ebooks.info/book/3020/)

### Linux
- [Slow System? iotop Is Your Friend](http://www.linuxjournal.com/content/slow-system-iotop-your-friend)
- [Linux and Unix Port Scanning With netcat [nc] Command](http://www.cyberciti.biz/faq/linux-port-scanning/)
- [Sysadmincasts.com: LVM Linear vs Striped Logical Volumes](https://sysadmincasts.com/episodes/27-lvm-linear-vs-striped-logical-volumes)
- [vim graphical cheat sheet](http://www.viemu.com/vi-vim-cheat-sheet.gif)
- [conn-check, a deployment utility to check connectivity between services](http://conn-check.org/)
- [Linux: Keep An Eye On Your System With Glances Monitor](http://www.cyberciti.biz/faq/linux-install-glances-monitoring-tool/)
- [What are useful command-line network monitors on Linux](http://xmodulo.com/useful-command-line-network-monitors-linux.html)
- [GoAccess real time web log analyzer](http://goaccess.io/)
- [awesome-sysadmin - A curated list of amazingly awesome open source sysadmin resources inspired by Awesome PHP](https://github.com/kahun/awesome-sysadmin)

### Microsoft
- [SSH for Windows open sourced by Microsoft. Qué está pasando?](https://github.com/PowerShell/Win32-OpenSSH)
- [Microsoft open sources its Visual Studio Code light-weight editor](http://www.zdnet.com/article/microsoft-open-sources-its-visual-studio-code-light-weight-editor/)
- [Microsoft has released over 100 Free Ebooks](http://blogs.msdn.com/b/mssmallbiz/archive/2014/07/07/largest-collection-of-free-microsoft-ebooks-ever-including-windows-8-1-windows-8-windows-7-office-2013-office-365-office-2010-sharepoint-2013-dynamics-crm-powershell-exchange-server-lync-2013-system-center-azure-cloud-sql.aspx)
- [Spiceworks](http://www.spiceworks.com/app/)
- [Spiceworks Overview,inventory & helpdesk](https://www.youtube.com/watch?v=kHnEXoPxiJ4)
- [Spiceworks Profiles are Better Than a Resume for IT Geeks - Daily Blob - Dec 23, 2013](https://www.youtube.com/watch?v=BJ2mQpOZHPE)

### E-Mail
- [Best Transactional Email Service Comparison](http://socialcompare.com/en/comparison/transactional-emailing-providers-mailjet-sendgrid-critsend)
- [Google Improves Gmail’s Spam Filters, Launches New Analytics Tool For Bulk Senders](http://techcrunch.com/2015/07/09/google-improves-gmails-spam-filters-launches-new-analytics-tool-for-bulk-senders/)

### VoIP
- [VoIP Planning: Calculate Your Bandwidth Before Adding SIP Trunk Service](http://it.toolbox.com/blogs/voip-news/voip-planning-calculate-your-bandwidth-before-adding-sip-trunk-service-66093)
- [The Importance of VoIP Voice Quality](http://it.toolbox.com/blogs/voip-news/the-importance-of-voip-voice-quality-65970)
- [10 Key VoIP Trends to Track in 2015](http://it.toolbox.com/blogs/voip-news/10-key-voip-trends-to-track-in-2015-66121)
- [The Power of VoIP in Disaster Recovery](http://it.toolbox.com/blogs/voip-news/the-power-of-voip-in-disaster-recovery-66205)
- [Implementing A Successful VoIP System](http://it.toolbox.com/blogs/voip-news/implementing-a-successful-voip-system-66450)
- [Hosted vs SIP and PBX: Which is best for your Business?](http://it.toolbox.com/blogs/voip-news/hosted-vs-sip-and-pbx-which-is-best-for-your-business-66697)
- [Understanding the Key Differences between ESBCs and Firewalls?](https://www.edgewaternetworks.com/2015/05/understanding-the-key-differences-between-esbcs-and-firewalls/)
- [Reddit: Hosted VoIP/PBX Suggestions. Moving FreePBX/Asterisk/3CX to the Cloud](http://www.reddit.com/r/sysadmin/comments/11ii9l/hosted_pbx_suggestions/)

### Network forensics
- [WireEdit. First-Of-A-Kind and The Only Full Stack WYSIWYG Packet Editor Edit L2 - L7 with just a few clicks](https://wireedit.com/)
- [Wireshark 101: Transmission Control Protocol, video tutorial](https://www.youtube.com/watch?v=iX44XIZafiw)
- [Calculate HTTP response time in wireshark](http://www.thevisiblenetwork.com/2015/01/21/calculate-http-response-time-in-wireshark/)
- [HTTP Basic Authentication with wireshark](http://www.networkcomputing.com/applications/http-basic-authentication-primer/d/d-id/1323331)
- [Diagnose slow connections with Wireshark](http://theitjuggler.com/how-to/diagnose-slow-connections-wireshark/)
- [Toubleshooting with Wireshark: Detect HTTP Delays](http://youtu.be/5k16DWEnEGA)
- [Troubleshooting with Wireshark: Detect TCP Delays (full video)] (https://www.youtube.com/watch?v=YJRmh6L2Hls)
- [Packet timing and Average IO Graph with Wireshark] (http://www.lovemytool.com/blog/2014/09/documenting-why-its-slow-by-tony-fortunato.html)
- [Calculate HTTP response time in wireshark] (http://thevisiblenetwork.com/2015/01/21/calculate-http-response-time-in-wireshark/)
- [Optimal Wireshark Setup | Enhance Your Wireshark Experience] (https://www.youtube.com/watch?v=F4l3CedRlJc)
- [Troubleshooting with Wireshark: Identifying SIP Errors] (https://www.youtube.com/watch?v=bu6kpneLlFc)
- [How to Capture and Debug SIP Packets from asterisk using tcpdump and Wireshark] (https://www.youtube.com/watch?v=OFpQLyQxt84)
- [Wireshark Tip 10: Identify Separate TCP Conversations with TCP Stream Index (Laura Chappell)] (https://www.youtube.com/watch?v=0dFndZwkDGY)
- [Laura Chappell's Top Videos:] (https://www.youtube.com/user/thebitgirl/videos)
- [How Can the Packet Size Be Greater than the MTU?] (http://packetbomb.com/how-can-the-packet-size-be-greater-than-the-mtu/)
- [Wireshark profiles] (https://www.youtube.com/watch?v=pxxcuR7fwXM)
- http://packetlife.net/
- [Understanding Application Performance on the Network – Part VII: TCP Window Size](http://apmblog.dynatrace.com/2014/08/12/understanding-application-performance-network-part-tcp-window-size/)
- [Network Forensics: ubicación de las herramientas de análisis de tráfico en redes conmutadas (switched networks). Taps, span ports y hubs] (http://www.lovemytool.com/blog/2014/06/switches-and-tool-placement-by-tony-fortunato.html)
- [Seguridad con Wireshark: ejemplos de ataques de seguridad DDoS (macof, DNS), filtros, perfiles, coloreado de frames y tshark para trazas largas](https://www.youtube.com/watch?v=UXAHvwouk6Q)
- [Flood network with random MAC addresses with macof tool] (https://tournasdimitrios1.wordpress.com/2011/03/04/flood-network-with-random-mac-addresses-with-macof-tool/)
- http://www.ehacking.net/2013/01/itsoknoproblembro-toolkit-beast-that.html
- https://www.htcia.org/
- Una forma de evitar los ataques DDoS similares a macof es bloquear desde los firewalls las conexiones (SYN) con MSS=0 y WinSize=0.
- [wireshark's colors, by Laura Chappell] (http://bit.ly/nmapcolors)
- [How to Use Wireshark to Analyze Video] (http://sharkfest.wireshark.org/sharkfest.13/presentations/PA-11_How-to-Use-Wireshark-to-Analyze-Video_Betty-DuBois.pdf)
- [Sharkfest '14 Retrospective. Videos y presentaciones del congreso anual de Wireshark](http://sharkfest.wireshark.org/sharkfest.14/)
- [Sharkfest '14 presentation: Get started with HTTP Analysis](http://sharkfest.wireshark.org/sharkfest.14/presentations/B6-Get%20Started%20with%20HTTP%20Analysis.pdf)
- [Tuning Win7 Using Wireshark’s TCP Stream Graph] (http://sharkfest.wireshark.org/sharkfest.12/presentations/A-3_A-10_Tuning_Win7_Using_Wireshark_TCP_Stream_Graph_a_Case_Study.pdf)
- [Videos con formación en redes publicados por INE.com .Recomiendo el playlist de Wireshark, si bien hay videos formativos en otras disciplinas.](https://www.youtube.com/user/INEtraining/playlists)
- [Fiddler complementa muy bien a las devtools de Firefox ó Chrome (F12 key) para capturar y analizar trazas de tráfico HTTP. Alternativa a Wireshark para HTTP Network Forensics.] (http://www.telerik.com/fiddler)
- http://www.vozidea.com/fiddler-proxy-para-depurar-aplicaciones
- [TRANSUM es un plugin dissector para Wireshark que añade información de tiempo de respuesta a los paquetes de petición de servicio para diferentes protocolos.](http://www.tribelabzero.com/temp/tl_resources.html)
- [Wireshark Transum Quickstart (by Tony Fortunato)](http://www.lovemytool.com/blog/2014/08/wireshark-transum-quickstart-by-tony-fortunato.html)

### WebPerf & Resilient Networking: Planning for Failure
- [WebPerf & Resilient Networking: Planning for Failure. Service Worker tool, wireless and mobile network optimization](https://www.igvita.com/2015/01/26/resilient-networking/)
- [HTML5: Introduction to Service Worker](http://www.html5rocks.com/en/tutorials/service-worker/introduction/)
- [10 emuladores WAN para que pruebes distintas condiciones de red](http://www.hackplayers.com/2015/10/10-emuladores-wan-para-que-pruebes.html)

### Startups
- [Startupxplore, mapa con todas las startups TI](https://startupxplore.com/)
- [Barcelona vs Madrid vs everywhere else: Spain's regions slug it out to be named startup capital](http://www.zdnet.com/article/barcelona-vs-madrid-vs-everywhere-else-spains-regions-slug-it-out-to-be-startup-capital/)

### Python analytics
- [Python for Data Science vs Python for Web Development](http://www.datasciencecentral.com/profiles/blogs/python-for-data-science-vs-python-for-web-development)
- [Cheat Sheet: Data Visualisation in Python](http://www.analyticsvidhya.com/blog/2015/06/data-visualization-in-python-cheat-sheet/)
- [The State of Python for Data Science, PySS 2015](https://speakerdeck.com/chdoig/the-state-of-python-for-data-science-pyss-2015)
- [Distributed Computing on your Cluster with Anaconda (modern open source analytics platform powered by Python) - Webinar 2015](http://www.slideshare.net/continuumio/distributed-computing-on-your-cluster-with-anaconda-webinar-2015)
- [Jeff Reback's pandas tutorial at PyDataNYC2015, notebooks included](https://github.com/jreback/pydatanyc2015)
- [Python: The Next Big Thing in Big Data](https://dzone.com/articles/python-the-next-big-thing-in-big-data)
- [Talk Python to Me Podcast. Episode #34: Continuum: Scientific Python and The Business of Open Source](http://talkpython.fm/episodes/show/34/continuum-scientific-python-and-the-business-of-open-source)
- [Apache Zeppelin. Very cool for data exploration and data science](https://zeppelin.incubator.apache.org/)
- [Continuum Analytics PyData NYC videos are live! Check them out to see talks on Anaconda, Bokeh, pandas, and more, including the keynote from Continuum co-founders Peter Wang and Travis Oliphant](https://www.youtube.com/playlist?list=PLGVZCDnMOq0ourWlul1F7aYE30VQPaMRL)
- [Jessica Forde: Visualizing Wireless Router Timeseries Data with the Density API, Seaborn, and Pandas](https://www.youtube.com/watch?v=V85G5Q-Lj9o&feature=youtu.be&list=PLGVZCDnMOq0ourWlul1F7aYE30VQPaMRL)
- [Network data, also known as linked data, is the new frontier of data analysis](https://www.youtube.com/watch?v=wcrwASR5DCQ&index=42&list=PLGVZCDnMOq0ourWlul1F7aYE30VQPaMRL)

### Big Data
- [Big data is simply another name for complicated business intelligence: New visualization tools like Tableau, Clearstory, and Domo aims to unlock enterprise data for a broader audience than before](http://www.infoworld.com/article/2868007/big-data/big-data-is-just-another-name-for-complicated-business-intelligence.html)
- [Apache Zeppelin, A web-based notebook that enables interactive data analytics](https://zeppelin.incubator.apache.org/)

### SQL 
- [Syadmincasts: Crash Course on MySQL](https://sysadmincasts.com/episodes/38-crash-course-on-mysql)
- [What Every Data Scientist Needs to Know about SQL](http://joshualande.com/data-science-sql/)
- [Top 20+ MySQL Best Practices](http://code.tutsplus.com/tutorials/top-20-mysql-best-practices--net-7855)
- [highperfmysql.com - High Performance MySQL. Learn to Build Fast, Reliable, Scalable Systems with MySQL](http://www.highperfmysql.com/)
- [MySQL very high CPU usage (and other processes)](http://www.corrspt.com/blog/2015/07/01/mysql-very-high-cpu-usage/)
- [Python Mysql Connector](http://jasonralph.org/?p=291)
- [Tutorialspoint.com - MySQL Tutorial](http://www.tutorialspoint.com/mysql/index.htm)
- [Anemometer: MySQL Slow Query Monitor](http://olindata.com/blog/2014/07/anemometer-mysql-slow-query-monitor)
- [MySQL for Excel 1.3.5](http://insidemysql.com/mysql-for-excel-1-3-5-has-been-released/)
- [Top 20+ MySQL Best Practices](http://code.tutsplus.com/tutorials/top-20-mysql-best-practices--net-7855)
- [Find and remove duplicate indexes](https://www.percona.com/blog/2012/06/20/find-and-remove-duplicate-indexes/)
- [SQL in ten minutes](http://www.codeproject.com/Articles/2059/SQL-in-ten-minutes)
- [10 sql tips to speed up your database](http://www.catswhocode.com/blog/10-sql-tips-to-speed-up-your-database)
- [Use-the-index-luke.com: SQL Indexing and Tuning e-Book](http://use-the-index-luke.com/)
- [MySQL Indexing Explained](https://blog.viaduct.io/mysql-indexes-primer/)
- [New subreddit about SQL](https://www.reddit.com/r/sqlporn)
- [Naming Conventions in Database Modeling](http://www.vertabelo.com/blog/technical-articles/naming-conventions-in-database-modeling)
- [High Performance MySQL, 3rd Edition](http://it-ebooks.info/book/676/)
- [Terrible choices: MySQL (for Django)](https://www.reddit.com/r/Python/comments/2qm448/terrible_choices_mysql_for_django)

### SQL replication
- [Amazon RDS](https://serversforhackers.com/amazon-rds)
- [Tungsten Replicator is an open source replication engine supporting a variety of different extractor and applier modules](https://github.com/vmware/tungsten-replicator)
- [Multi-source replication in MySQL 5.7 vs Tungsten Replicator](https://www.percona.com/blog/2015/07/29/multi-source-replication-in-mysql-5-7-vs-tungsten-replicator/)
- [MySQL Multi-Source Replication](https://dev.mysql.com/doc/refman/5.7/en/replication-multi-source.html)
- [MariaDB Galera Cluster 10.0.21 and 5.5.45 now available](https://blog.mariadb.org/mariadb-galera-cluster-10-0-21-and-5-5-45-now-available/)
- [What is MariaDB Galera Cluster?](https://mariadb.com/kb/en/mariadb/what-is-mariadb-galera-cluster/)
- [Replication Manager for PostgreSQL Clusters](http://repmgr.org/)

### Python and AWS
- [Ansible and AWS: cloud IT automation management](http://cloudacademy.com/blog/ansible-aws/)
- [Python and AWS Cookbook. Boto library](http://it-ebooks.info/book/542/)
- [Boto](https://github.com/boto/boto)
- [Managing the Cloud with a Few Lines of Python (EuroPython 2014)](http://pyvideo.org/video/2987/managing-the-cloud-with-a-few-lines-of-python)

### Storage & Backup
- [Presentación Synology 2015 Evento Madrid](http://qloudea.com/blog/evento-synology-2015-madrid/)
- [Forum.synology.com](http://forum.synology.com)
- [Synology Add-on Packages](https://www.synology.com/en-uk/dsm/app_packages)
- https://www.synology.com/en-uk/company/case_study/somersault
- https://www.synology.com/en-uk/company/case_study/Bridges_Electrical
- http://qloudea.com/blog/synology-ds3615xs-lanzamiento/
- [Synology RS815+ NAS](https://www.synology.com/es-es/products/RS815+)
- [Synology DS214Play Revisión a fondo](http://qloudea.com/blog/review-synology-ds214play/)
- [Synology DiskStation DS3615xs review](http://www.itpro.co.uk/storage/23990/synology-diskstation-ds3615xs-review)
- [12 best NAS drives 2015/2016 UK: What's the best network storage you can buy in the UK?](http://www.pcadvisor.co.uk/test-centre/pc-peripheral/12-best-nas-drives-2015-2016-uk-3217608/)
- [Soluciones de almacenamiento Flash Array basadas en Dell y en Supermicro](http://searchdatacenter.techtarget.com/feature/Rethinking-data-center-components-as-commodities)
- [All Flash Buying Guide](http://www.infostor.com/disk-arrays/all-flash-buying-guide.html)
- [Synology Data Backup](https://www.synology.com/en-us/dsm/data_backup)
- [Synology RC18015xs+ and Snapshot Manager at Computex 2015](https://youtu.be/YeMoCDxZYDU?list=PLbeBr03sf2pUuYdoZCwJQ5oGvFhIMvAWM)
- [Synology RackStation RS18016xs+](https://www.synology.com/en-uk/products/RS18016xs+)
- [rsnapshot Remote MySQL Backup Shell Script](http://bash.cyberciti.biz/backup/rsnapshot-remote-mysql-backup-shell-script/)
- [rsnapshot.org, filesystem snapshot](http://rsnapshot.org/)
- [Moving from Tape to Disk Backup with Data Deduplication](http://www.datamation.com/data-center/moving-from-tape-to-disk-backup-with-data-deduplication.html)
- [You need deduplication to do disk backup! Really?](http://www.virtualtothecore.com/en/you-need-deduplication-to-do-disk-backup-really/)
- [Dell Software adds encryption at rest capabilities to updated deduplication appliances](http://www.networksasia.net/article/dell-software-adds-encryption-rest-capabilities-updated-deduplication-appliances.1430791085/)
- [Dell Deduplication Backup and Recovery Appliances](http://software.dell.com/solutions/deduplication-appliances/)
- [Dell DR4100 Disk Backup Appliance](http://www.dell.com/us/business/p/dell-software-dr4100-disk-backup-appliance/pd)
- [6 Steps to Better Data Backup and Quicker Recovery](https://www.linkedin.com/pulse/6-steps-better-data-backup-quicker-recovery-manuel-w-lloyd)
- [3 Ways To Ensure 100 Percent Secure Enterprise File Sharing](http://www.vaultize.com/blog/3-ways-to-ensure-100-percent-secure-enterprise-file-sharing)
- [Top 5 Benefits of Online Backup](http://www.cwps.com/blog/top-5-benefits-of-online-backup)
- [Infrascale: Cloud Disaster Recovery. Is it time to breakup with your backup?](https://www.infrascale.com/)
- [Bacula Enterprise is changing the definition of Open-source Backup Software](http://storageswiss.com/2015/03/19/bacula-enterprise-changing-the-definition/)
- [Bareos open source data protection](http://www.bareos.com/en/)
- [Metricon Reduces Backup Time by 80% with NetApp SteelStore](http://community.netapp.com/t5/Technology/Metricon-Reduces-Backup-Time-by-80-with-NetApp-SteelStore/ba-p/102486)
- [Automatiza tus backups con rsync en Synology NAS - Qloudea Blog](http://qloudea.com/blog/automatiza-tus-backups-con-rsync-en-synology/)
- [Veeam Endpoint Backup Free for desktops and laptops](http://www.veeam.com/endpoint-backup-free.html)
- [VMWare ESXi 5.1 (Free) Easily backup your Virtual Machines using Veeam Backup & Replication (Free)](https://www.youtube.com/watch?v=05dkQnhY9qo)
- [Architecture and Deployment Deep Dive Veeam Backup & Replication v7](https://www.youtube.com/watch?v=8xiucXOinqw)
- [Vembu Online Backup supports Amazon Glacier](https://www.vembu.com/blog/vembu-supports-amazon-glacier)
- [Libro sobre Veeam Backup, by Xavier Genestós](https://www.linkedin.com/pulse/libro-sobre-veeam-backup-xavier-genestós-josep-ros)
- [Announcing: Veeam Backup for Linux](https://www.veeam.com/blog/announcing-linux-server-backup.html)

### Security
- [Java Serialization Vulnerability Threatens Millions of Applications . Contrast security is promoting their solution for a vulnerability that affects WebLogic, WebSphere, JBoss, Jenkins, and OpenNMS.](https://dzone.com/articles/java-serialization-vulnerability-threatens-million)
- [keychain: Set Up Secure Passwordless SSH Access For Backup Scripts](http://www.cyberciti.biz/faq/ssh-passwordless-login-with-keychain-for-scripts/)
- [pyvideo.org: Let's Be Bad Guys: Exploiting and Mitigating the Top 10 Web App Vulnerabilities](http://www.pyvideo.org/video/3512/shiny-lets-be-bad-guys-exploiting-and-mitigati-3)
- [New High Severity OpenSSL Vulnerabilities Announced: CVE-2015-0291 & CVE-2015-0204](http://www.tripwire.com/state-of-security/vulnerability-management/new-high-severity-openssl-vulnerabilities-announced-cve-2015-0291-cve-2015-0204/)
- [Shellshock: Bash bug 'bigger than Heartbleed' could undermine security of millions of websites – and there's nothing you can do to protect yourself](http://www.independent.co.uk/life-style/gadgets-and-tech/shell-shock-bash-bug-bigger-than-heartbleed-could-undermine-security-of-millions-of-websites-9754720.html)
- [Ansible.com shellshock](http://www.ansible.com/blog/shellshock)
- [Patch Shellshock with Ansible](https://raymii.org/s/articles/Patch_CVE-2014-6271_Shellshock_with_Ansible.html)
- [servercheck.in: Secure your servers from Shellshock Bash vulnerability using Ansible](https://servercheck.in/blog/secure-your-servers-shellshock-bash-vulnerability)
- [aroundthecode.org: Ansible - massively fix bash shellshock](http://aroundthecode.org/2014/09/26/fix_bash_shellshock/)
- [shellshock CVE-2014-6271 fix for ubuntu bash](https://gist.github.com/kacy/2b9408af04c71fab686e)
- [community.redhat.com: Critical Bash Security Vulnerability: Update Your Systems Today](http://community.redhat.com/blog/2014/09/critical-bash-security-vulnerability-update-your-systems-today/)
- [Lynda.com: Protect Your System from the Shellshock Bash Exploit](http://www.lynda.com/articles/shellshock-bash-exploit)
- [Red Hat security blog: Frequently Asked Questions about the Shellshock Bash flaws](https://securityblog.redhat.com/2014/09/26/frequently-asked-questions-about-the-shellshock-bash-flaws/)
- [Red Hat security blog: Heartbleed](https://securityblog.redhat.com/tag/heartbleed/)
- [Fixing Heartbleed with Ansible](http://www.ansible.com/blog/fixing-heartbleed-with-ansible)
- [Patching the GHOST glibc gethostbyname CVE-2015-0235 bug](https://sysadmincasts.com/episodes/44-patching-the-ghost-glibc-gethostbyname-cve-2015-0235-bug)

### WiFi security
- [Analyzing the 1000 Most Common Wi-Fi Network Names](https://ghostpath.com/blog/ssid-analyzing-the-1000-most-common-wi-fi-network-names/)
- https://www.ubnt.com/
- http://www.arubanetworks.com/es/

### Remote PC Access
- [Alternatives to LogMeIn for Remote PC Access](http://www.storagecraft.com/blog/alternatives-logmein-remote-pc-access/)
- [Guacamole is a clientless remote desktop gateway. It supports standard protocols like VNC and RDP](http://guac-dev.org/)
- [Nomachine](https://www.nomachine.com/)
- [X2Go](http://x2go.org)

### Servers, Dell
- [Nuevo PowerEdge R930: innovación y potencia x86 para migrar plataformas UNIX con software empresarial](http://www.dell.com/learn/us/en/uscorp1/press-releases/2015-04-28-dell-r930-server)
- [Dell PowerEdge R930](http://www.dell.com/es/empresas/p/poweredge-r930/pd?~ck=anav)
- [Dell launches PowerEdge entry-level servers for SMBs](http://www.infotechlead.com/networking/dell-launches-entry-level-servers-for-smbs-36295)

### Servers, HP
- [HP releases new servers and storage for SMEs](http://www.itwire.com/business-it-news/hardware-and-storage/67312-hp-releases-new-servers-and-storage-for-smes)
- [HP Intros New StoreVirtual-Based Hyper-Converged Infrastructure Appliance](http://www.crn.com/news/storage/300077656/hp-intros-new-storevirtual-based-hyper-converged-infrastructure-appliance.htm)
- [HP’s hyper-converged portfolio grows: meet the CS250-HC](http://www.bitcon.be/?p=3093)

### RAID disks
- [Practical RAID Choices for Spindle Based Arrays](http://www.smbitjournal.com/2015/03/practical-raid-choices-for-spindle-based-arrays/)
- [Can I use a desktop hard drive in my storage array?](http://blog.seagate.com/business/can-i-use-a-desktop-hard-drive-in-my-storage-array/)

### Regular expressions
- [RegExr: Learn, Build, & Test RegEx](http://www.regexr.com/)

### Editors
- [Setting Up Sublime Text 3 for Full Stack Python Development] (https://realpython.com/blog/python/setting-up-sublime-text-3-for-full-stack-python-development/)
- [Sublime Text Unofficial Documentation] (http://sublime-text-unofficial-documentation.readthedocs.org/en/latest/)
- [Create and Open GitHub Gists from Sublime Text] (http://sublimetexttips.com/create-and-open-github-gists-from-sublime-text/)
- [Full-featured Git integration for Sublime Text 2 and 3] (http://sublimegit.net/)
- [An excellent free video course on Sublime Text 2 (Sublime Text 3 is still in beta)] (http://code.tutsplus.com/courses/perfect-workflow-in-sublime-text-2)
- [Git for Windows tip: opening Sublime Text from bash](https://danlimerick.wordpress.com/2014/01/07/git-for-windows-tip-opening-sublime-text-from-bash/)
- [Atom 1.1 is out](http://blog.atom.io/2015/10/29/atom-1-1-is-out.html)
- [Screencast of Docker Tooling for Eclipse](http://tools.jboss.org/blog/docker_tooling_eclipse_mars.html)

### Bash
- [shellcheck.net shell script analyzer:automatically detects problems in sh/bash scripts and commands](http://www.shellcheck.net/)
- [Writing Robust Bash Shell Scripts](http://www.davidpashley.com/articles/writing-robust-shell-scripts/)
- [Defensive BASH Programming](http://www.kfirlavi.com/blog/2012/11/14/defensive-bash-programming)

### Python
- [reddit: python cheat sheet](https://www.reddit.com/r/learnpython/comments/3r2hsq/python_cheat_sheet/)
- [Python 3.4 Programming Tutorials - YouTube](https://www.youtube.com/playlist?list=PL6gx4Cwl9DGAcbMi1sH6oAMk4JHw91mC_) 
- [15 Essential Python Interview Questions](https://www.codementor.io/python/tutorial/essential-python-interview-questions)
- [Learn Python Django in 4 Hours](https://dzone.com/articles/learn-python-django-in-4-hours)
- [Django Development With Docker Compose and Machine] (https://realpython.com/blog/python/django-development-with-docker-compose-and-machine/)
- [Setting up Python on OSX: UPDATED](http://staticnat.com/setting-up-python-on-osx/)
- [18 best online resources for learning sql and database concepts] (http://www.vertabelo.com/blog/notes-from-the-lab/18-best-online-resources-for-learning-sql-and-database)
- [How do you handle the ORM problem? When do you say YES or NO to using ORM?] (http://www.vertabelo.com/blog/technical-articles/orms-under-the-hood)
- [TaskBuster Django Tutorial, made with Django 1.8 and Python 3](http://www.marinamele.com/taskbuster-django-tutorial)
- [Don't Make Us Say We Told You So: virtualenv for New Pythonistas] (http://pyvideo.org/video/3460/dont-make-us-say-we-told-you-so-virtualenv-for)
- [TDD with Django, from scratch: a beginner's intro to testing and web development] (http://www.pyvideo.org/video/3509/tdd-with-django-from-scratch-a-beginners-intro)
- [The docker-py repository: an API client for docker written in Python](http://docker-py.readthedocs.org/en/stable/api/)
- [Java Vs. Python - Which Programming Language is More Productive? - Infographic] (http://blogs.perceptionsystem.com/infographic/java-vs-python-programming-language-productive)
- [Cómo crear un servicio REST en 30 líneas de código de Django y Python] (http://www.genbetadev.com/desarrolloparastartups/como-crear-un-servicio-rest-en-30-lineas-de-codigo-de-django-y-python)
- [Koding is a developer community and cloud development environment where developers come together and code in the browser – with a real development server to run their code. Developers can work, collaborate, write and run apps without jumping through hoops and spending unnecessary money.] (https://koding.com/)
- [I wish I knew these things when I learned Python] (http://bugra.github.io/work/notes/2015-01-03/i-wish-i-knew-these-things-when-i-first-learned-python/)
- [gabbi - Declarative HTTP testing library pypi](http://pypi.python.org/pypi/gabbi/)
- [Python mini-quiz](http://www.mypythonquiz.com/)
- [Python mini-course](http://ai.berkeley.edu/tutorial.html#PythonBasics)
- [Testing Python](http://it-ebooks.info/book/3778/)
- [The Flask Mega-Tutorial: Now with Python 3 Support] (http://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-now-with-python-3-support)
- [Python progression path - From apprentice to guru] (https://stackoverflow.com/questions/2573135/python-progression-path-from-apprentice-to-guru)
- [Web Development using Python & Django] (https://www.mysliderule.com/learning-paths/web-development-python-django/)
- [A beginner's guide to web development with Python 2.7 / Django 1.7](http://www.tangowithdjango.com/)
- http://www.learnpython.org
- https://github.com/vinta/awesome-python/
- https://github.com/rosarior/awesome-django
- [Full Stack Python is an open book that explains each Python web application stack layer and provides the best web resources for those topics](http://www.fullstackpython.com/)
- [Django Development With Docker Compose and Machine] (https://realpython.com/blog/python/django-development-with-docker-compose-and-machine/)
- [The Bottom-Line Single Main Difference Between Python 2 and 3](http://migrateup.com/main-difference-python-3/)
- [Installing and Configuring Django Web Framework with Virtual Environments in CentOS/Debian] (http://www.tecmint.com/install-and-configure-django-web-framework-in-centos-debian-ubuntu/)
- [Profiling Python using cProfile: a concrete case] (https://julien.danjou.info/blog/2015/guide-to-python-profiling-cprofile-concrete-case-carbonara)
- [Talk Python To Me Podcast. Episode #36: Python IDEs with the PyCharm team] (http://talkpython.fm/episodes/show/36/python-ides-with-the-pycharm-team) 

### JVM
- [Reminder: JDK 7 will be EOL soon. Oracle won't publish any Public Updates to JDK 7 after April 2015](http://www.oracle.com/technetwork/java/javase/downloads/eol-135779.html)
- [Cambios importantes en la gestión de memoria de Java 8 de Oracle](../master/change_in_memory_management_java_8.md)
- [Free eGuide: JVM Troubleshooting Guide](http://freepromagazine.blogspot.de/2014/07/free-eguide-jvm-troubleshooting-guide.html)
- [Cambios importantes en la gestión de memoria de Java 8 de Oracle](http://karunsubramanian.com/websphere/one-important-change-in-memory-management-in-java-8/)
- [PermGen eliminado](http://www.infoq.com/articles/Java-PERMGEN-Removed)
- [On heap vs off heap memory usage](http://www.javacodegeeks.com/2014/12/on-heap-vs-off-heap-memory-usage.html)
- [How Garbage Collection differs in the three big JVMs](http://apmblog.dynatrace.com/2011/05/11/how-garbage-collection-differs-in-the-three-big-jvms/)
- [Dr. Low Latency or: How I Learned to Stop Worrying about Pauses and Love the Memory](http://www.c2b2.co.uk/javazone-2013-low-latency)
- [What is a Data Grid?](http://www.c2b2.co.uk/what_is_data_grid_webinar)

### HTML5 & Developer Survey 2015
- [Stack Overflow Developer Survey 2015](http://stackoverflow.com/research/developer-survey-2015)
- [HTML5 and CSS3 Code Generator Tools List, Initializr is perhaps the most popular] (http://www.webcodegeeks.com/html5/html5-css3-code-generator-tools-list)
- [Good things in life are free. Read online "Programming JavaScript Applications" book for free](http://chimera.labs.oreilly.com/books/1234000000262)
- [Ur/Web makes writing Web applications easier — and more secure](http://bostinno.streetwise.co/2014/12/23/urweb-new-programming-language-out-of-mit/)

### Software Testing
- [Learn Software Testing from Scratch](https://www.udemy.com/learn-software-testing-from-scratch/?ccManual=&dtcode=wmOZ6Dq2WrKO&couponCode=qa10)
- [JUnit Tutorial for Unit Testing – The ULTIMATE Guide (PDF Download)](http://www.javacodegeeks.com/2014/11/junit-tutorial-unit-testing.html)
- [Free online Book: O'Reilly® Test-Driven Development with Python](http://freecomputerbooks.com/Test-Driven-Development-with-Python.html)

### Cloud
- [Sysadmincasts.com: Introduction to Amazon Web Services (AWS)](https://sysadmincasts.com/episodes/29-introduction-to-amazon-web-services-aws)
- [Amazon RDS](https://serversforhackers.com/amazon-rds)
- [reddit: Size of your AWS infrastructure and who manages it/how it's managed](https://www.reddit.com/r/aws/comments/277zli/size_of_your_aws_infrastructure_and_who_manages/)
- [Disadvantages of Cloud Computing](http://cloudacademy.com/blog/disadvantages-of-cloud-computing/)
- [AWS simple monthly calculator](http://calculator.s3.amazonaws.com/index.html)
- [Google Cloud Platform Pricing Calculator](https://cloud.google.com/products/calculator/)
- [Azure Pricing Calculator](http://azure.microsoft.com/en-us/pricing/calculator/)
- [Linode pricing calculator](https://www.linode.com/pricing)
- [EC2Instances.info Easy Amazon EC2 Instance Comparison](http://www.ec2instances.info/)

### AWS re:Invent 2015
- [Amazon anuncia Elastic File System (Amazon EFS)](https://aws.amazon.com/es/blogs/aws/amazon-elastic-file-system-shared-file-storage-for-amazon-ec2/)
- [What's New from Amazon Web Services](https://aws.amazon.com/es/new/)
- [AWS Well Architected Framework](https://d0.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf)
- [The cloud wars explained: Why nobody can catch up with Amazon](http://www.businessinsider.com/why-amazon-is-so-hard-to-topple-in-the-cloud-and-where-everybody-else-falls-2015-10)
- [AWS re:Invent 2015 Keynote | Werner Vogels](https://www.youtube.com/watch?v=y-0Wf2Zyi5Q)
- [AWS re:Invent 2015 Keynote | Andy Jassy](https://www.youtube.com/watch?v=D5-ifl7KJ00)
- [Festín de novedades en re:Invent 2015](http://www.siliconweek.es/data-storage/business-intelligence/festin-de-novedades-en-reinvent-2015-89129)
- [AWS re:Invent: Five takeaways on Amazon's new cloud services](http://www.zdnet.com/article/aws-reinvent-five-takeaways-on-new-services/)
- [Amazon Web Services gets serious about big data analytics with bevy of new services](http://www.zdnet.com/article/amazon-web-services-big-data-analytics-enterprise-datacenters/)
- [Amazon QuickSight: Fast, easy to use, in-memory, Cloud BI service for everyone in an organization (not only technical people). It is 1/10 the cost of traditional BI tools.](https://aws.amazon.com/es/quicksight/)
- [Revealed at AWS re:Invent: Amazon Kinesis Firehose - easily load streaming data into Amazon S3 & Amazon RedShift.] (http://oak.ctx.ly/r/3tfr7)
- [Amazon RDS Update – MariaDB is Now Available](https://aws.amazon.com/es/blogs/aws/amazon-rds-update-mariadb-is-now-available)
- [AWS Database Migration Service with AWS Schema Conversion Tool] (http://aws.amazon.com/es/dms/)
- [AWS Import/Export Snowball – Transfer 1 Petabyte Per Week Using Amazon-Owned Storage Appliances] (https://aws.amazon.com/es/blogs/aws/aws-importexport-snowball-transfer-1-petabyte-per-week-using-amazon-owned-storage-appliances/)
- [AWS Web Application Firewall](https://aws.amazon.com/es/blogs/aws/category/aws-web-application-firewall/)
- [AWS Config Rules – Dynamic Compliance Checking for Cloud Resources] (https://aws.amazon.com/es/blogs/aws/aws-config-rules-dynamic-compliance-checking-for-cloud-resources/)
- [Amazon Inspector – Automated Security Assessment Service] (https://aws.amazon.com/es/blogs/aws/amazon-inspector-automated-security-assessment-service)
- [Coming Soon – EC2 Dedicated Hosts] (https://aws.amazon.com/es/blogs/aws/coming-soon-ec2-dedicated-hosts)
- [AWS Device Farm Pruebe su aplicación en dispositivos reales en la nube de AWS. Mejore la calidad de sus aplicaciones iOS, Android y Fire OS al probarlas en smartphones y tablets reales en la nube de AWS.] (http://aws.amazon.com/es/device-farm)
- [EC2 Instance Update – X1 (SAP HANA) & T2.Nano (Websites)] (https://aws.amazon.com/es/blogs/aws/ec2-instance-update-x1-sap-hana-t2-nano-websites)
- [EC2 Container Service Update – Container Registry, ECS CLI, AZ-Aware Scheduling, and More] (https://aws.amazon.com/es/blogs/aws/ec2-container-service-update-container-registry-ecs-cli-az-aware-scheduling-and-more)
- [CloudWatch Dashboards – Create & Use Customized Metrics Views] (https://aws.amazon.com/es/blogs/aws/cloudwatch-dashboards-create-use-customized-metrics-views)
- [AWS Lambda Update – Python, VPC, Increased Function Duration, Scheduling, and More] (https://aws.amazon.com/es/blogs/aws/aws-lambda-update-python-vpc-increased-function-duration-scheduling-and-more)
- [Amazon Launches AWS Mobile Hub To Help Mobile Developers Build Back-End Processes] (http://techcrunch.com/2015/10/08/amazon-launches-aws-mobile-hub-to-help-mobile-developers-build-back-end-processes/)
- [AWS IoT – Cloud Services for Connected Devices](https://aws.amazon.com/es/blogs/aws/aws-iot-cloud-services-for-connected-devices)
- [AWS Mobile Hub – Build, Test, and Monitor Mobile Applications] (https://aws.amazon.com/es/blogs/aws/aws-mobile-hub-build-test-and-monitor-mobile-applications)

### E-Learning
- [Red Hat Certified System Administrator - Exam EX200 - RHCSA (11€ con cupón de descuento)](https://www.udemy.com/red-hat-certified-system-administrator-exam-ex200-rhcsa/)
- [Learn To Run Linux Servers From Scratch (LPI Level 1-101)](https://www.udemy.com/draft/19966/)
- [Learn To Run Linux Servers Part 2 (LPI Level 1-102)](https://www.udemy.com/linuxacademy2/)
- [A Cloud Guru, AWS Certification Courses](https://acloud.guru)
- [Learning Puppet - Udemy](https://www.udemy.com/learning-puppet/)
- [Taming Big Data with Apache Spark - Hands On! - Udemy (~11-12€ with corresponding coupon)](https://www.udemy.com/taming-big-data-with-apache-spark-hands-on/?couponCode=SPARK15)
- [Basics of Scrum, Agile and Project Delivery](https://www.udemy.com/scrum-methodology/)
- [Zabbix Network Monitoring Essentials - Udemy](https://www.udemy.com/zabbix-network-monitoring-essentials/)
- [Udemy - Sensu - Introduction (Gratuito, alternativa a Zabbix, Icinga y Nagios)](https://www.udemy.com/sensu-introduction/)
- [Typing, una web para que los programadores practiquen](http://wwwhatsnew.com/2015/06/19/typing-una-web-para-que-los-programadores-practiquen/)
- [training.linuxfoundation.org: Free Linux Training Publications](https://training.linuxfoundation.org/free-linux-training/download-training-materials)
- [Red Hat Training announces new way to train: Video Classroom](http://servicesblog.redhat.com/2015/08/17/red-hat-training-announces-new-way-to-train-video-classroom/)
