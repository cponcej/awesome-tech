**Table of Contents**
<!-- MarkdownTOC -->

- [Configuration Management and Orchestration](#configuration-management-and-orchestration)
	- [Vagrant](#vagrant)
	- [Ansible](#ansible)
		- [Ansible on Twitter](#ansible-on-twitter)
		- [Ansible Support and Forums](#ansible-support-and-forums)
		- [Is ansible replacing puppet?](#is-ansible-replacing-puppet)
		- [Apache via Ansible](#apache-via-ansible)
		- [WebLogic via Ansible](#weblogic-via-ansible)
		- [Drupal via Ansible](#drupal-via-ansible)
		- [Databases via Ansible](#databases-via-ansible)
			- [MySQL via Ansible](#mysql-via-ansible)
			- [PostgreSQL via Ansible](#postgresql-via-ansible)
			- [Oracle via Ansible](#oracle-via-ansible)
			- [Elasticsearch via Ansible](#elasticsearch-via-ansible)
	- [Puppet](#puppet)
		- [Application Orchestration](#application-orchestration)
		- [WebLogic via Puppet](#weblogic-via-puppet)
	- [Provisioning: Red Hat Satellite, Katello, Foreman, Cobbler and others](#provisioning-red-hat-satellite-katello-foreman-cobbler-and-others)
	- [Chef and SAP](#chef-and-sap)
	- [Capistrano](#capistrano)
	- [SaltStack](#saltstack)
	- [Docker](#docker)
		- [Docker on Twitter](#docker-on-twitter)
		- [Microservices](#microservices)
		- [Docker references](#docker-references)
		- [Docker Tools. Docker Machine. Docker Toolbox](#docker-tools-docker-machine-docker-toolbox)
		- [MySQL via Docker](#mysql-via-docker)
		- [PostgreSQL via Docker](#postgresql-via-docker)
		- [WebLogic via Docker](#weblogic-via-docker)
		- [JBoss via Docker](#jboss-via-docker)
		- [Swift via Docker](#swift-via-docker)
	- [IBM Rational ClearCase](#ibm-rational-clearcase)

<!-- /MarkdownTOC -->


# Configuration Management and Orchestration
## Vagrant
- [How Vagrant Eases the Software Research and Testing - The New Stack](http://thenewstack.io/vagrant-developers-researchers/)
- [Improve your development environments with virtualization - Vagrant, Python ](http://pyvideo.org/video/3411/improve-your-development-environments-with-virtua)
- [Why tools like Docker, Vagrant, and Ansible are hotter than ever](http://opensource.com/business/15/5/why-Docker-Vagrant-and-Ansible)
- [Crash course on Vagrant, video tutorial at sysadmincasts.com](https://sysadmincasts.com/episodes/42-crash-course-on-vagrant-revised)
- [developerblog.redhat.com: Using Vagrant Tooling in Eclipse](http://developerblog.redhat.com/2015/12/22/using-vagrant-tooling-in-eclipse/)
- [vagrantbox.es](http://www.vagrantbox.es/)
- [Discover Vagrant Boxes](https://atlas.hashicorp.com/boxes/search)
- [Synced Folders Basic Usage](http://docs.vagrantup.com/v2/synced-folders/basic_usage.html)
> By default Vagrant will set up a share with your host machine automatically... /vagrant on the virtual box will be mapped to the folder containing your Vagrantfile this allows you to edit anything in this folder and the changes will be made instantly on the virtual box as well.

## Ansible
- [releases.ansible.com](http://releases.ansible.com)
- [fast.wistia.net: Ansible video tutorial](http://fast.wistia.net/embed/iframe/qrqfj371b6)
- [Ansible, Just Use It - slide](https://speakerdeck.com/vranac/ansible-just-use-it)
- [Ansible playbook to provision a WebLogic Fusion Middleware Domain on RHEL/CentOS 7](http://unversioned.blogspot.gr/2015/10/ansible-playbook-provision-weblogic-fusion-middleware-12.1.3-centos-7.html)
- [Ansible vs Puppet – Hands-On with Ansible](https://dantehranian.wordpress.com/2015/01/20/ansible-vs-puppet-hands-on-with-ansible/)
- [Ansible.com Blog - Confessions of a Full Stack DevOp](http://www.ansible.com/blog/confessions-of-a-full-stack-devop)
- [Ansible for DevOps, a book on Ansible by Jeff Geerling](http://www.ansiblefordevops.com/)
	- [Ansible by Jeff Geerling - youtube playlist](https://www.youtube.com/playlist?list=PL2_OBreMn7FplshFCWYlaN2uS8et9RjNG)
	- [Leanpub Podcast Interview #25: Jeff Geerling](http://blog.leanpub.com/2016/01/jeff-geerling.html)
	- [drupalvm.com](http://www.drupalvm.com/)
- [Ansible examples from Ansible for DevOps - github code](https://github.com/geerlingguy/ansible-for-devops)
- [How to Install and Configure ‘Ansible’ Automation Tool for IT Management](http://www.tecmint.com/install-and-configure-ansible-automation-tool-in-linux/)
- [Ansible video tutorial at sysadmincasts.com](https://sysadmincasts.com/episodes/43-19-minutes-with-ansible-part-1-4)
- [Ansible Introduction video tutorial](https://www.youtube.com/watch?t=24&v=2jXHxkLBOHg)
- [PyCon US 2015: Ansible beyond YAML](http://www.pyvideo.org/video/3484/ansible-beyond-yaml)
- [DevOps.com: Ansible: Automation, Provisioning and Configuration Management](http://devops.com/2015/05/19/ansible-automation-provisioning-configuration-management/)
- [AnsibleFest San Francisco 2015 Presentations](http://www.ansible.com/videos-ansiblefest-sf-2015)
	- [Microservices via Ansible. Deploying services with rollback and error handling, truncating releases, and restarting processes](http://www.ansible.com/ansiblefest-videos-spark-central-sf15)
	- [Lessons Automating the Deployment of J.Crew’s Website](http://www.ansible.com/ansiblefest-videos-jcrew-sf15)+
- [slideshare.net: Debugging ansible modules](http://www.slideshare.net/aleonhardt/debugging-ansible-modules)
- [Asset and lifecycle management using APIC-EM and Ansible.](https://communities.cisco.com/community/developer/blog/2015/12/17/asset-and-lifecycle-management-using-apic-em-and-ansible) Automate the collection of output from a series of 'show' commands from routers and switches
- [Ansible: Top posts of 2015](http://www.ansible.com/blog/top-ansible-posts-of-2015)
- [dzone: Introduction to Ansible Setup in Ubuntu 14.04 ](https://dzone.com/articles/ansible-setup-in-ubuntu-14o4-using-docker-with-ans)
- [dzone: Ansible Introduction](https://dzone.com/articles/ansible-introduction)
- [dzone: Environment Variables with Vagrant and Ansible.](https://dzone.com/articles/environment-variable-with-vagrant-and-ansible) How to configure Ansible and Vagrant to use a web proxy server.
- [How We Use AWS, Ansible, and Packer to Make Deployment Awesome](https://blog.branch.io/how-we-use-aws-ansible-and-packer-to-make-deployment-awesome)
- [Ansible: write and run your first playbook](http://abregman.com/2015/12/25/ansible-write-and-run-your-first-playbook/)
- [Ansible 2.0 Has Arrived and includes over 200 new modules](http://www.ansible.com/blog/ansible-2.0-launch)
- [Puppet is out, in comes Ansible](https://kanarip.wordpress.com/2016/01/28/puppet-is-out-in-comes-ansible/)

### Ansible on Twitter
- [twitter.com/ansible](https://twitter.com/ansible)
- [twitter.com/ansible4devops](https://twitter.com/ansible4devops)
	- [twitter.com/geerlingguy](https://twitter.com/geerlingguy)
- [twitter.com/ansiblebook](https://twitter.com/ansiblebook)
- [twitter.com/AnsibleBenelux](https://twitter.com/AnsibleBenelux)
- [twitter.com/ansible_berlin](https://twitter.com/ansible_berlin)
- [twitter.com/AnsibleBCN](https://twitter.com/AnsibleBCN)

### Ansible Support and Forums
- [Ansible Support](https://support.ansible.com)
- [Ansible subreddit](https://www.reddit.com/r/ansible/)

### Is ansible replacing puppet?
- [redhat subreddit: Is ansible replacing puppet?](https://www.reddit.com/r/redhat/comments/3xj6ja/is_ansible_replacing_puppet/)
- [Demo: Chef vs Puppet vs Ansible](https://www.youtube.com/watch?v=miO00M4vPok)
- [Are Docker Users Migrating to Ansible and Away from Puppet and Chef?](http://thenewstack.io/are-docker-users-migrating-to-ansible-and-away-from-puppet-and-chef/)
- [Twitter's transition from Puppet to Ansible](https://www.youtube.com/watch?v=fwGrKXzocg4)

![I volunteer](images/i_volunteer.gif align="center")

### Apache via Ansible
- [middlewaresnippets.blogspot.com - Ansible the Apache HTTP Server](http://middlewaresnippets.blogspot.com/2015/08/ansible-apache-http-server.html)

### WebLogic via Ansible
- [middlewaresnippets.blogspot.com - set-up Oracle WebLogic Server environment with Ansible (3 hosts, one control node and two managed nodes)](http://middlewaresnippets.blogspot.com/2015/03/fun-with-ansible.html)
- [blogs.oracle.com - Ansible playbook to provision a WebLogic Fusion Middleware Domain on RHEL/CentOS 7 by Christos Vezalis](https://blogs.oracle.com/emeapartnerweblogic/entry/ansible_playbook_to_provision_a)
	- [Using Ansible to install WebLogic 12c R2 (12.2.1) and Fusion Middleware Infastructure on Oracle Linux 7.1](http://unversioned.blogspot.gr/2015/11/using-ansible-to-install-weblogic-12c.html)
	- [Ansible Playbook: install and configure WebLogic server 12c with Oracle Fusion Middleware in RHEL7](https://github.com/cvezalis/weblogic-ansible)
	- [Ansible playbook: deploy and create a WebLogic 12c R2 Domain with Oracle Fusion Middleware](https://github.com/cvezalis/ansible-weblogic-fmw-infra-12c-R2)

### Drupal via Ansible
- [drupalvm.com](http://www.drupalvm.com/)

### Databases via Ansible
- [List of Database Modules](http://docs.ansible.com/ansible/list_of_database_modules.html)
- [Ansible Role: MySQL](https://github.com/geerlingguy/ansible-role-mysql)
- [Example Ansible playbook that uses the MySQL module](https://github.com/ansible/ansible-examples/blob/master/language_features/mysql.yml)

#### MySQL via Ansible
- [Ansible and Loading MySQL Databases Part I](https://opensourcedba.wordpress.com/2015/07/14/ansible-and-loading-mysql-databases-part-i/)
	- [Ansible and Loading MySQL Databases Part II](https://opensourcedba.wordpress.com/2015/07/29/ansible-and-loading-mysql-databases-part-ii/)

#### PostgreSQL via Ansible
- [Ansible Loves PostgreSQL](http://blog.2ndquadrant.com/ansible-loves-postgresql/)

#### Oracle via Ansible
- [Nodalpoint.com: Using Ansible to configure a CentOS 7.1 server with Oracle 12c R1 Enterprise Edition Database](http://www.nodalpoint.com/devops-ansible-oracle-database-oraclelinux-7-vagrant/)
	- [middlewaresnippets.blogspot.com - How to set-up an Oracle Database with Ansible](http://middlewaresnippets.blogspot.com/2015/06/more-fun-with-ansible.html)

#### Elasticsearch via Ansible
- [Deploying Elasticsearch with Ansible](https://www.elastic.co/blog/deploying-elasticsearch-with-ansible)

[![Red Hat acquires Ansible](images/redhat-ansible.png)](https://www.redhat.com/en/about/press-releases/red-hat-acquire-it-automation-and-devops-leader-ansible)

## Puppet
- [Download the Learning VM](https://puppetlabs.com/download-learning-vm)
	- [Bringing application orchestration to the Learning VM](https://puppetlabs.com/blog/bringing-application-orchestration-to-learning-vm)
- [sysadmincasts.com: Learning Puppet with Vagrant](http://sysadmincasts.com/episodes/8-learning-puppet-with-vagrant)
	- [Sysadmincasts.com: Git to Puppet Deployment Workflow](https://sysadmincasts.com/episodes/33-git-to-puppet-deployment-workflow)
- [Webinar: Getting Started with Puppet Enterprise 3.3](https://puppetlabs.com/webinars/getting-started-puppet-enterprise-33-us)
	- [Puppet Enterprise 3.3 disponible con soporte para RHEL 7, Ubuntu 14.04 LTS, Windows Server 2012 R2, y Mac OS X Mavericks](https://puppetlabs.com/blog/puppet-enterprise-3.3-get-started-faster)
	- [Learning Puppet can be like drinking from a fire hose. Here is a guide to basic terms and resources to help you learn](https://puppetlabs.com/blog/starting-puppet-basics-from-puppet-labs-employee)
	- [puppetlabs/mcollective](https://forge.puppetlabs.com/puppetlabs/mcollective)
- [Github: The Puppet Dashboard is a web interface providing node classification and reporting features for Puppet, an open source system configuration management tool](https://github.com/sodabrew/puppet-dashboard)
- [Github: Smarter Puppet deployment.R10k provides a general purpose toolset for deploying Puppet environments and modules](https://github.com/puppetlabs/r10k)
- [Librarian-puppet is a bundler for your puppet infrastructure. You can use librarian-puppet to manage the puppet modules your infrastructure depends on, whether the modules come from the Puppet Forge, Git repositories or a just a path](http://librarian-puppet.com/)
- [Puppet and Python](http://pyvideo.org/video/3649/puppet-and-python)
- [Puppet Modules: Apps for Ops](http://pyvideo.org/video/2589/puppet-modules-apps-for-ops)
- [Geppetto, eclipse plugin for puppet](https://puppetlabs.com/blog-tags/geppetto)
- [New Releases for AWS and vSphere Modules](https://puppetlabs.com/blog/new-releases-aws-and-vsphere-modules)

### Application Orchestration
- [Bringing application orchestration to the Learning VM](https://puppetlabs.com/blog/bringing-application-orchestration-to-learning-vm)
- [Extending your Puppet language dictionary for application orchestration](https://puppetlabs.com/blog/extending-your-puppet-language-dictionary-application-orchestration)

### WebLogic via Puppet
- [Setup WebLogic 12c environment with Vagrant and Puppet](http://multikoop.blogspot.com.br/2013/11/setup-weblogic-12c-environment-with.html)
- [New Puppet 3 Weblogic provisioning module by Edwin Biemond](https://blogs.oracle.com/emeapartnerweblogic/entry/new_puppet_3_weblogic_provisioning)
	- [puppet forge: Oracle WebLogic / Fusion Middleware ( ADF, OSB, WebCenter, SOA Suite, WebCenter ,OAM, OIM) puppet module](https://forge.puppetlabs.com/biemond/wls)
	- [middlewaresnippets.blogspot.com - Install and Configure a WebLogic Server Environment using Puppet](http://middlewaresnippets.blogspot.com/2015/03/install-and-configure-weblogic-server.html)

## Provisioning: Red Hat Satellite, Katello, Foreman, Cobbler and others
- [Red Hat Satellite](https://access.redhat.com/products/red-hat-satellite)
	- [redhat.com: Product Documentation for Red Hat Network Satellite](https://access.redhat.com/documentation/en/red-hat-network-satellite/)
	- [community.dell.com: Red Hat Network Satellite administration tips](http://en.community.dell.com/techcenter/os-applications/w/wiki/red-hat-network-satellite-administration-tips)
	- [Satellite 6 and Foreman re-provisioning](https://chruz.wordpress.com/2015/11/23/satellite-6-and-foreman-re-provisioning/)
- [Katello](http://www.katello.org/)
	- [The Katello project is the Open Source, upstream equivalent of the new iteration of Red Hat’s Satellite Server](http://itnerdchronicles.com/katello-one-cloud-to-rule-them-all/)
- [Foreman is a complete lifecycle management tool](http://www.theforeman.org/)
- [Cobbler](http://cobbler.github.io/)
- [Candlepin](http://www.candlepinproject.org/)
- [Pulp](http://www.pulpproject.org/)

<div class="tumblr-post" data-href="https://embed.tumblr.com/embed/post/Y6ORssbcHF5P4Puns-jRoA/134927085230" data-did="bb1e1b59231f5382026568844e915c19da08f253"><a href="http://securityreactions.tumblr.com/post/134927085230/when-client-confidently-references-sneakernet">http://securityreactions.tumblr.com/post/134927085230/when-client-confidently-references-sneakernet</a></div><script async src="https://secure.assets.tumblr.com/post.js"></script>

## Chef and SAP
- [twitter.com/chef](https://twitter.com/chef)
- [docs.chef.io](https://docs.chef.io/)
- [SAP cookbooks with chef](http://sapcc.github.io/sap-cookbook-docs/)
- [Chef for DevOps - an Introduction. This slide deck Introduces Chef and its role in DevOps](http://www.slideshare.net/sanjeev-sharma/chef-for-dev-ops-an-introduction)

## Capistrano
- [Capistrano](http://capistranorb.com)
- [Capistrano GitHub](https://github.com/capistrano/capistrano)

## SaltStack
- [twitter.com/saltstack](https://twitter.com/saltstack)
- [devopslibrary.com: Mastering SaltStack](http://devopslibrary.com/courses/mastering-saltstack/)
- [Salt vs. Ansible](http://jensrantil.github.io/salt-vs-ansible.html)

## Docker
### Docker on Twitter
- [twitter.com/docker](https://twitter.com/docker)
- [twitter.com/solomonstre](https://twitter.com/solomonstre)
- [twitter.com/DockerCon](https://twitter.com/DockerCon)
- [twitter.com/jpetazzo](https://twitter.com/jpetazzo)
- [twitter.com/frazelledazzell](https://twitter.com/frazelledazzell)
- [twitter.com/golubbe](https://twitter.com/golubbe)
- [twitter.com/coreoslinux](https://twitter.com/coreoslinux)
- [twitter.com/docker_fr](https://twitter.com/docker_fr)
- [twitter.com/DockerParis](https://twitter.com/DockerParis)
- [twitter.com/SecureDocker](https://twitter.com/SecureDocker)
- [twitter.com/DockerSwarm](https://twitter.com/DockerSwarm)

### Microservices
- [Introduction to Microservices | NGINX](https://www.nginx.com/blog/introduction-to-microservices/)
- [Microservices, Martin Fowler](http://martinfowler.com/articles/microservices.html)
- [What are Microservices?](https://www.linkedin.com/pulse/what-microservices-walli-datoo)
- [Microservices architecture: advantages and drawbacks](http://cloudacademy.com/blog/microservices-architecture-challenge-advantage-drawback/)
- [Welcome to Microservices.TV, where you will get the latest news, trends and tutorials on all things microservices](https://developer.ibm.com/tv/microservices/)
- [Microservices via Ansible. Deploying services with rollback and error handling, truncating releases, and restarting processes](http://www.ansible.com/ansiblefest-videos-spark-central-sf15)
- [capgemini.github.io: Is REST best in a Microservices architecture](https://capgemini.github.io/architecture/is-rest-best-microservices/)
- [javaadvent.com: Microservices and Java EE](http://www.javaadvent.com/2015/12/microservices-and-java-ee.html)
- [ibm.com: Microservices in action, Part 2: Containers and microservices — a perfect pair](http://www.ibm.com/developerworks/cloud/library/cl-bluemix-microservices-in-action-part-2-trs/)
- [DZone.com: Microservices and DevOps. A great list of resources to help you with your microservice development and deployments](https://dzone.com/articles/microservices-and-devops) 
- [ibm.com: Microservices in action, Part 2: Containers and microservices — a perfect pair](http://www.ibm.com/developerworks/cloud/library/cl-bluemix-microservices-in-action-part-2-trs/index.html)
- [Red Hat Middleware: All the videos from the #RedHat #Microservices Day 2015](https://www.youtube.com/watch?v=jAYvizggc9M&list=PLJFQ0_l_KBO7DXxeF4g0pcqT3AZ4oSHCT)
	- [Microservices in the Real World](https://www.youtube.com/watch?v=XG5sl_7Zi6k)
- [redhat.com videos: Logging and Management for Microservices](http://www.redhat.com/en/about/videos/logging-and-management-microservices)
- [rhelblog.redhat.com: Looking Back on Containers in 2015](http://rhelblog.redhat.com/2016/01/08/looking-back-on-containers-in-2015/)
- [DZone/Integration: Apache Camel for Micro­service Architectures](https://dzone.com/articles/apache-camel-micro%C2%ADservice)
	- [hawt.io: a modular web console for managing your Java stuff](http://hawt.io/)

[![Updated map of the microservices ecosystem](images/microservices_ecosystem_map.png)](http://techcrunch.com/2016/01/23/get-small-to-get-big-through-microservices/)

![extraordinary](images/extraordinary.gif)

### Docker references
- [gettopical.com: Docker Latest News](http://gettopical.com/docker)
- [Docker Hub](https://hub.docker.com)
- [github.com: Docker Official Images](https://github.com/docker-library/official-images)
- [docs.docker.com: Official Repositories on Docker Hub](https://docs.docker.com/docker-hub/official_repos/)
- [github.com: Docker Library](https://github.com/docker-library/)
- [Awesome Docker. A curated list of Docker resources and projects](https://github.com/veggiemonk/awesome-docker)
- [medium.com: Review of @nigelpoulton's course on @Docker and #Containers](https://medium.com/@vinrandazzo/docker-and-containers-do-you-want-to-design-beautiful-apps-99ad61d82168#.yfeaa5iiu)
- [DZone Refcard: Getting started with docker](https://dzone.com/refcardz/getting-started-with-docker-1)
- [10 Awesome Docker Tutorials to Kick-Start your DevOps Projects](http://www.javacodegeeks.com/2015/11/10-awesome-docker-tutorials-to-kick-start-your-devops-projects.html)
- [Introduction to Docker for Java Developers – Getting started with Docker](http://examples.javacodegeeks.com/devops/introduction-docker-java-developers/)
- [Free eBook - Docker Security: Using Containers Safely in Production](https://www.openshift.com/promotions/docker-security.html)
- [javacodegeeks.com: Why docker](http://www.javacodegeeks.com/2015/11/why-docker.html)
- [Why Docker Could Revolutionize Enterprise Cloud Computing](https://www.linkedin.com/pulse/why-docker-could-revolutionize-enterprise-cloud-computing-andy-waroma)
- [Adoption/popularity is the new king. The only constant is change! - puppet, chef, ansible, docker ](http://getcloudify.org/2015/10/21/configuration-management-chef-puppet-ansible-emc-dell-vmware-orchestration.html)
- [DockerCon EU: Software Testing with Docker](http://thenewstack.io/software-testing-docker/)
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
- [How Red Hat’s Inception DevOps team utilized Docker for the Release Engine](http://developerblog.redhat.com/2014/07/29/red-hat-inception-devops-team-utilized-docker-release-engine/)
- [5 Ways to Make Your DevOps Team More Efficient](https://www.linkedin.com/pulse/20140804141049-8208183-5-ways-to-make-your-devops-team-more-efficient)
- [slideshare: Busting the Five Biggest DevOps Myths](http://www.slideshare.net/CAinc/busting-the-five-biggest-devops-myths/)
- [Red Hat CEO Whitehurst on DevOps, apps, and infrastructure](http://www.networkworld.com/article/2688724/opensource-subnet/red-hat-ceo-whitehurst-on-devops-apps-and-infrastructure.html)
- [The DevOps Lifecycle: Keep C.A.L.M. and Carry On](http://newrelic.com/devops/lifecycle)
	- [How to Keep CALMS and Release More!](https://blog.logentries.com/2014/10/how-to-keep-calms-and-release-more/)
- [​CoreOS brings end-to-end trusted computing to containers](http://www.zdnet.com/article/coreos-brings-end-to-end-trusted-computing-to-containers/)
- [Docker cookbook](http://shop.oreilly.com/product/0636920036791.do?sortby=publicationDate)
- [Docker in Action - Fitter, Happier, More Productive](https://realpython.com/blog/python/docker-in-action-fitter-happier-more-productive/)
- [Docker for PHP Developers.Efficient Nginx, PHP, and MySQL development environments with Docker](http://www.newmediacampaigns.com/blog/docker-for-php-developers)
- [Dockerizing a Node.js Web Application](https://semaphoreci.com/community/tutorials/dockerizing-a-node-js-web-application)
- [DockerCon EU 2015 Videos: Use Cases](http://blog.docker.com/2015/12/dockercon-eu-2015-use-cases/)
- [Podcast: Docker & Puppet: Uniting Containers with Configuration Management](https://puppetlabs.com/podcasts/podcast-docker-puppet-combining-containers-configuration-management)
- [dchq.io via webcodegeeks.com: Advanced Platform for Automation of Container based Apps on any Cloud](http://www.webcodegeeks.com/web-development/step-step-guide-deploying-managing-php-application-docker-lamp-lapp-laop-stacks/)
- [medium.com: Logging with Docker — Part 1.1](https://medium.com/@yoanis_gil/logging-with-docker-part-1-b23ef1443aac#.j04jttgqb)
- [javacodegeeks.com: Docker Java Application With Solr, Mongo & Cassandra: Design, Deployment, Service Discovery, And Management In Production](http://www.javacodegeeks.com/2015/12/docker-java-application-with-solr-mongo-cassandra.html)
- [opensource.com: 10 cool tools from the Docker community](https://opensource.com/business/15/12/10-cool-tools-docker-community)
- [Docker Monitoring: Best Practices, and a Comparison of the cAdvisor and Prometheus Monitoring Tools](http://www.infoq.com/news/2015/12/dockercon-docker-monitoring)
- [The Role of Configuration Management in a Containerized World](http://www.infoq.com/news/2015/12/containers-vs-config-mgmt)
- [How to be Successful Running Docker in Production](http://www.infoq.com/news/2015/11/running-docker-production)
- [Stop Being Lazy, and Test Your Software (with the Help of Docker)](http://www.infoq.com/news/2015/11/testing-software-docker)
- [medium.com: Development environments with Docker](https://medium.com/on-docker/development-environments-with-docker-89657c7b4ea2#.paptr5pep)
- [Securing Docker with TLS certificates](http://tech.paulcz.net/2016/01/secure-docker-with-tls/)
- [Docker and Security: How do they fit together?](https://jaxenter.com/docker-and-security-how-do-they-fit-together-122333.html)
- [ibm.com: Docker: A boon for the modern developer](http://www.ibm.com/developerworks/library/wa-docker-polyglot-programmers/index.html) Make the transition to containerized apps to increase coding productivity and boost your development IQ
- [javacodegeeks.com: 10 Awesome Docker Tutorials to Kick-Start your DevOps Projects](http://www.javacodegeeks.com/2015/11/10-awesome-docker-tutorials-to-kick-start-your-devops-projects.html)
- [examples.javacodegeeks.com: Docker Compose example](http://examples.javacodegeeks.com/devops/docker-compose-example)
- [youtube: Container security: Do containers actually contain? Should you care? - 2015 Red Hat Summit](https://youtu.be/a9lE9Urr6AQ)
- [Spotify GitHub: Docker garbage collection of containers and images](https://github.com/spotify/docker-gc) If you’re using Docker for development, you should probably know about this.
- [DevOps: The Importance of Monitoring Containers](http://www.javacodegeeks.com/2016/01/devops-the-importance-monitoring-containers.html)
- [Cisco slideshare: Monitoring docker container and dockerized applications](http://www.slideshare.net/AnanthCB/monitoring-docker-container-and-dockerized-applications)
- [prakhar.me: Docker for Beginners. Learn to build & deploy your distributed applications easily to the cloud with Docker](http://prakhar.me/docker-curriculum/)
	- [prakhar.me github: A comprehensive tutorial on getting started with Docker!](https://github.com/prakhar1989/docker-curriculum)
- [Dockerizing Commands (PHP). Chris Tankersley, author of 'Docker for Developers'](http://ctankersley.com/2015/12/23/dockerize-commands/)
	- [Docker for Developers, by Chris Tankersley](https://leanpub.com/dockerfordevs)
- [developerblog.redhat.com: A Practical Introduction to Docker Container Terminology](http://developerblog.redhat.com/2016/01/13/a-practical-introduction-to-docker-container-terminology/)
- [Starter, an open-source command line tool to generate a Dockerfile and a service.yml file from arbitrary source code](http://www.startwithdocker.com/)
	- [vimeo.com: Containers #101: Introduction to Starter](https://vimeo.com/149675614) In this session Khash gave an introduction to the the starter project. Starter is an open source project. It reads your code and generates a Dockerfile and service composition file you can then use to build images needed to run your application and the composition file to host it.
- [Swarm, a cluster manager for Docker: Collecting Metrics, Events & Logs](http://blog.sematext.com/2016/01/12/docker-swarm-collecting-metrics-events-logs/)
- [blog.emccode.com: Discovering Docker Volume Plugins and Applications with VirtualBox](http://blog.emccode.com/2016/01/06/discovering-docker-volume-plugins-and-applications-with-virtualbox/)
- [redhat.com: Great intro to container best practices on RHEL (and in general)..](https://access.redhat.com/documentation/en/red-hat-enterprise-linux-atomic-host/7/recommended-practices-for-container-development/recommended-practices-for-container-development) Best Practices Guide for Container Development

[![keep calms and release more](images/keep-calms-and-relase-more.png)](https://blog.logentries.com/2014/10/how-to-keep-calms-and-release-more/)


### Docker Tools. Docker Machine. Docker Toolbox
- [Docker Machine](https://docs.docker.com/machine/)
	- [Docker toolbox](https://www.docker.com/docker-toolbox) The Docker Toolbox is an installer to quickly and easily install and setup a Docker environment on your computer. Available for both Windows and Mac, the Toolbox installs Docker Client, Machine, Compose, Kitematic and VirtualBox.
	- [Using Ansible with Docker Machine to Bootstrap Host Nodes](http://nathanleclaire.com/blog/2015/11/10/using-ansible-with-docker-machine-to-bootstrap-host-nodes/)
- [Get started with Docker on Windows using Chocolatey](https://stefanscherer.github.io/get-started-with-docker-on-windows-using-chocolatey/)
	- [chocolatey.org](https://chocolatey.org/) Chocolatey NuGet is a Machine Package Manager, somewhat like apt-get, but built with Windows in mind.
- [Runc Containers on the Desktop](https://blog.jessfraz.com/post/runc-containers-on-the-desktop/)
- [DLite: Simplifying Docker on OS X](https://blog.andyet.com/2016/01/25/easy-docker-on-osx/)

[![Docker toolbox docker hub](images/docker_hub_images_docker_toolbox.png)](https://www.docker.com/docker-toolbox)

[![Docker toolbox jenkins](images/docker_toolbox_jenkins.png)](https://www.docker.com/docker-toolbox)

<iframe width="560" height="315" src="https://www.youtube.com/embed/0BmWDysy9RY" frameborder="0" allowfullscreen></iframe>

### MySQL via Docker
- [MySQL 5.7 Docker images](http://mysqlrelease.com/2015/12/update-from-dockerland-fruitful-collaboration-and-some-security-news/)

### PostgreSQL via Docker
- [Dockerizing PostgreSQL](https://docs.docker.com/engine/examples/postgresql_service/)

### WebLogic via Docker
- [multikoop.blogspot.com.es - WebLogic 12.2.1 on Docker](http://multikoop.blogspot.com.es/2015/12/weblogic-1221-on-docker.html)
- [community.oracle.com: Creating Fast, Scalable and Portable WebLogic Development Environments with Docker](https://community.oracle.com/docs/DOC-919606)
- [blogs.oracle.com: WebLogic on Docker Containers Series, Part 1](https://blogs.oracle.com/brunoborges/entry/docker_and_weblogic_enabling_cloud)
	- [blogs.oracle.com: WebLogic on Docker Containers Series, Part 2](https://blogs.oracle.com/brunoborges/entry/weblogic_on_docker_containers_series)
	- [dzone: WebLogic on Docker Containers Series — Part 2 ](https://dzone.com/articles/weblogic-on-docker-containers-series-part-2)
- [github.com: WebLogic on Docker](https://github.com/oracle/docker-images/tree/master/OracleWebLogic) Sample Docker configurations to facilitate installation, configuration, and environment setup for DevOps users. This project includes dockerfiles and samples for both WebLogic 12.1.3 and 12.2.1 based on Oracle Linux and Oracle JDK 8
	- [Oracle WebLogic on Multihost Network Docker](https://github.com/oracle/docker-images/tree/master/OracleWebLogic/samples/1221-multihost) Say hello to WebLogic on a multihost network of Docker containers using Docker Machine. This sample demonstrates how to create a cluster of WebLogic on a multihost network of Docker containers.

### JBoss via Docker
- [oraclejavamagazine-digital.com: Using Docker in Java Applications](http://www.oraclejavamagazine-digital.com/javamagazine_twitter/20151112?pg=52#pg52) The lightweight virtualization container is fast becoming the preferred way to package and deploy Java web apps.

### Swift via Docker
- [developer.ibm.com: running swift within docker](https://developer.ibm.com/swift/2015/12/15/running-swift-within-docker/)

## IBM Rational ClearCase 
- [Deploying secure software configuration management](http://www.ibm.com/developerworks/rational/library/rational-deploy-secure-software-configuration-management-trs/index.html)

[![disruption cycle](images/disruption-cycle.png)](http://getcloudify.org/2015/10/21/configuration-management-chef-puppet-ansible-emc-dell-vmware-orchestration.html)
