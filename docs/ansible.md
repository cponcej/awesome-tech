<!-- MarkdownTOC -->

- [Ansible](#ansible)
    - [Ansible on Twitter](#ansible-on-twitter)
    - [Ansible Support and Forums](#ansible-support-and-forums)
    - [Is ansible replacing puppet?](#is-ansible-replacing-puppet)
    - [Ansible Videos and Slides](#ansible-videos-and-slides)
    - [Apache via Ansible](#apache-via-ansible)
    - [WebLogic via Ansible](#weblogic-via-ansible)
    - [Drupal via Ansible](#drupal-via-ansible)
    - [Databases via Ansible](#databases-via-ansible)
    - [MySQL via Ansible](#mysql-via-ansible)
    - [PostgreSQL via Ansible](#postgresql-via-ansible)
    - [Oracle via Ansible](#oracle-via-ansible)
    - [Elasticsearch via Ansible](#elasticsearch-via-ansible)
    - [Provisioning Docker containers with Ansible](#provisioning-docker-containers-with-ansible)
    - [Security with Ansible](#security-with-ansible)
    - [Windows Automation with Ansible](#windows-automation-with-ansible)
    - [Network Automation with Ansible](#network-automation-with-ansible)

<!-- /MarkdownTOC -->

[![Red Hat acquires Ansible](images/redhat-ansible.png)](https://www.redhat.com/en/about/press-releases/red-hat-acquire-it-automation-and-devops-leader-ansible)

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">Impressions from <a href="https://twitter.com/hashtag/AnsibleFest?src=hash">#AnsibleFest</a> London 2016 <a href="https://t.co/Xbr1FkkB0q">https://t.co/Xbr1FkkB0q</a></p>&mdash; Red Hat Community (@redhatopen) <a href="https://twitter.com/redhatopen/status/700724093214130177">febrero 19, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

[![redhat_admins_wait_ansible_puppet](images/redhat_admins_wait_ansible_puppet.png)](http://searchdatacenter.techtarget.com/tip/Red-Hat-admins-await-an-Ansible-vs-Puppet-showdown)

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">Ansible grows headcount, international presence since Red Hat buyout - Triangle Business Journal <a href="https://t.co/bIQYSLeCfc">https://t.co/bIQYSLeCfc</a></p>&mdash; Ansible by Red Hat (@ansible) <a href="https://twitter.com/ansible/status/709811512995659776">15 de marzo de 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

# Ansible
- [docs.ansible.com 🌟🌟🌟🌟](http://docs.ansible.com)
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
- [Webinar: Ansible 2.0 & Beyond](https://www.ansible.com/webinar-on-demand-ansible-2)
- [Puppet is out, in comes Ansible](https://kanarip.wordpress.com/2016/01/28/puppet-is-out-in-comes-ansible/)
- [F5 Deployment Automation Demo with Ansible](https://www2.wwt.com/f5-deployment-automation-demo-with-ansible/)
- [Enabling DevOps Approach with Cisco NX-OS and Ansible](http://blogs.cisco.com/datacenter/devops)
- [Deploying a Mesos based visual effects studios with Ansible](https://www.ansible.com/ansible-mesos-visual-effects)
- [Learning DevOps: Automated setup and cloud VM provisioning with Ansible](http://techbeacon.com/learning-devops-automated-setup-cloud-vm-provisioning-ansible)
- [SSH Agent Forwarding Configuration with Ansible and Tower 🌟](https://www.datapipe.com/blog/2016/03/01/ssh-agent-forwarding-configuration-with-ansible-and-tower/)

[![Ansible for DevOps](images/ansible-for-devops-cover.jpg)](http://www.ansiblefordevops.com/)

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">.<a href="https://twitter.com/ansible">@ansible</a> is the gateway drug to <a href="https://twitter.com/hashtag/DevOps?src=hash">#DevOps</a>. <a href="https://t.co/PlURr51Qio">https://t.co/PlURr51Qio</a> <a href="https://twitter.com/TechBeacon">@techbeacon</a></p>&mdash; Steven A. Lowe (@StevenALowe) <a href="https://twitter.com/StevenALowe/status/709795988198825985">15 de marzo de 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

## Ansible on Twitter
- [twitter.com/ansible](https://twitter.com/ansible)
- [twitter.com/ansible4devops](https://twitter.com/ansible4devops)
	- [twitter.com/geerlingguy](https://twitter.com/geerlingguy)
- [twitter.com/ansiblebook](https://twitter.com/ansiblebook)
- [twitter.com/AnsibleBenelux](https://twitter.com/AnsibleBenelux)
- [twitter.com/ansible_berlin](https://twitter.com/ansible_berlin)
- [twitter.com/AnsibleBCN](https://twitter.com/AnsibleBCN)

## Ansible Support and Forums
- [Ansible Support](https://support.ansible.com)
- [Ansible subreddit](https://www.reddit.com/r/ansible/)
- [ansible-tips-and-tricks.readthedocs.org](http://ansible-tips-and-tricks.readthedocs.org)
- [ansible-flow.readthedocs.org](http://ansible-flow.readthedocs.org)
- [Google Groups ansible-project](https://groups.google.com/forum/#!forum/ansible-project)
- [Google Groups ansible-announce 🌟](https://groups.google.com/forum/#!forum/ansible-announce)

## Is ansible replacing puppet?
- [redhat subreddit: Is ansible replacing puppet?](https://www.reddit.com/r/redhat/comments/3xj6ja/is_ansible_replacing_puppet/)
- [Demo: Chef vs Puppet vs Ansible](https://www.youtube.com/watch?v=miO00M4vPok)
- [Are Docker Users Migrating to Ansible and Away from Puppet and Chef?](http://thenewstack.io/are-docker-users-migrating-to-ansible-and-away-from-puppet-and-chef/)
- [Twitter's transition from Puppet to Ansible](https://www.youtube.com/watch?v=fwGrKXzocg4)
- [Puppet or Ansible: How to Choose?](https://dzone.com/articles/puppet-or-ansible-how-to-choose) When choosing between Puppet and Ansible, understanding the design choices can get us past wondering which is better, so we can make an informed decision.

![I volunteer](images/i_volunteer.gif)

## Ansible Videos and Slides
- [Youtube: Livestream von codecentric AG](https://www.youtube.com/watch?v=B7K1ETPyzoQ)
    - [Speakerdeck: Multi Stage Deployment with Ansible 2016](https://speakerdeck.com/kontrafiktion/multi-stage-deployment-with-ansible-2016)
    - [Slideshare: Ansible module development 101. Feb 2016](http://de.slideshare.net/yfauser/ansible-module-development-101-58580867)

<div class="container">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/fwGrKXzocg4?rel=0" frameborder="0" allowfullscreen class="video"></iframe>
</div>
<br>

<div class="container">
<iframe width="640" height="360" src="http://www.youtube.com/embed/miO00M4vPok?rel=0" frameborder="0" class="video"></iframe>
</div>
<br>

<div class="container">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/o-uMN65vsh0?list=PL2_OBreMn7FplshFCWYlaN2uS8et9RjNG" frameborder="0" allowfullscreen class="video"></iframe>
</div>
<br>

<div class="container">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ZNB1at8mJWY?rel=0" frameborder="0" allowfullscreen class="video"></iframe>
</div>
<br>

[![LPP025_Jeff_Geerling_2015_10_16.mp3](images/mp3-logo.jpg)](https://s3.amazonaws.com/leanpub_podcasts/LPP025_Jeff_Geerling_2015_10_16.mp3)

<div class="container">
<iframe width="420" height="315" src="https://www.youtube.com/embed/aQi8ghaGMfI?rel=0" frameborder="0" allowfullscreen class="video"></iframe>
</div>
<br>

<div class="container">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/6A2PXrsC6JbvmH" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/Flux7Labs/provisioning-using-ansible-in-aws" title="Provisioning using Ansible in AWS" target="_blank">Provisioning using Ansible in AWS</a> </strong> from <strong><a href="//www.slideshare.net/Flux7Labs" target="_blank">Flux7 </a></strong> </div>
</div>
<br/>

<div class="container">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/sy7ybpuwqkRbdH" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/jtyr/automation-and-ansible" title="Automation and Ansible" target="_blank">Automation and Ansible</a> </strong> from <strong><a href="//www.slideshare.net/jtyr" target="_blank">jtyr</a></strong> </div>
</div>
<br/>

<div class="container">
<iframe width="420" height="315" src="https://www.youtube.com/embed/sy8i4VXIVEE?rel=0" frameborder="0" allowfullscreen class="video"></iframe>
</div>
<br/>

<div class="container">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/ggQvKfaCgtGQ0s" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/bdu_p/how-weuseansible" title="How we-use-ansible" target="_blank">How we-use-ansible</a> </strong> from <strong><a target="_blank" href="//www.slideshare.net/bdu_p">bdu_p</a></strong> </div>
</div>
<br/>

<div class="container">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/Dk9c8VYYykVABw" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/robertreiz/docker-ansible-51576034" title="Infrastructure Deployment with Docker &amp; Ansible" target="_blank">Infrastructure Deployment with Docker &amp; Ansible</a> </strong> from <strong><a target="_blank" href="//www.slideshare.net/robertreiz">Robert Reiz</a></strong> </div>
</div>
<br/>

<div class="container">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/NHO07xKHJzScS0" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/MartinEtmajer/automated-deployments-with-ansible" title="Automated Deployments with Ansible" target="_blank">Automated Deployments with Ansible</a> </strong> from <strong><a target="_blank" href="//www.slideshare.net/MartinEtmajer">Martin Etmajer</a></strong> </div>
</div>
<br/>

<div class="container">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/fR2UEjiTv85RmI" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/OrestesCA/deploying-php-applications-with-ansible" title="Deploying PHP Applications with Ansible" target="_blank">Deploying PHP Applications with Ansible</a> </strong> from <strong><a target="_blank" href="//www.slideshare.net/OrestesCA">Orestes Carracedo</a></strong> </div>
</div>
<br/>

<div class="container">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/1xSB43CQoJUyLY" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/SarahZelechoski/ansible-how-to-get-more-sleep-and-require-less-coffee" title="Ansible: How to Get More Sleep and Require Less Coffee" target="_blank">Ansible: How to Get More Sleep and Require Less Coffee</a> </strong> from <strong><a target="_blank" href="//www.slideshare.net/SarahZelechoski">Sarah Zelechoski</a></strong> </div>
</div>
<br/>

<div class="container">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/oQWFQxGXiIU7z2" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/johnthethird/ansible-presentation-24942953" title="Ansible presentation" target="_blank">Ansible presentation</a> </strong> from <strong><a target="_blank" href="//www.slideshare.net/johnthethird">John Lynch</a></strong> </div>
</div>
<br/>

<div class="container">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/Ca83dBBYh4GISm" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/MartinEtmajer/testing-ansible-roles-with-test-kitchen-serverspec-and-rspec-48185017" title="Test-Driven Infrastructure with Ansible, Test Kitchen, Serverspec and RSpec" target="_blank">Test-Driven Infrastructure with Ansible, Test Kitchen, Serverspec and RSpec</a> </strong> from <strong><a target="_blank" href="//www.slideshare.net/MartinEtmajer">Martin Etmajer</a></strong> </div>
</div>
<br/>

<div class="container">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/hZF8CHg9DlxExS" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/shr3kst3r/testing-ansible-with-jenkins-and-docker" title="Testing Ansible with Jenkins and Docker" target="_blank">Testing Ansible with Jenkins and Docker</a> </strong> from <strong><a target="_blank" href="//www.slideshare.net/shr3kst3r">Dennis </a></strong> </div>
</div>
<br/>

<div class="container">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/4qOuuGiQj5Tzn1" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/bcoca/ansible-tips-tricks" title="Ansible tips &amp; tricks" target="_blank">Ansible tips &amp; tricks</a> </strong> from <strong><a target="_blank" href="//www.slideshare.net/bcoca">bcoca</a></strong> </div>
</div>
<br/>

## Apache via Ansible
- [middlewaresnippets.blogspot.com - Ansible the Apache HTTP Server](http://middlewaresnippets.blogspot.com/2015/08/ansible-apache-http-server.html)

## WebLogic via Ansible
- [middlewaresnippets.blogspot.com - set-up Oracle WebLogic Server environment with Ansible (3 hosts, one control node and two managed nodes)](http://middlewaresnippets.blogspot.com/2015/03/fun-with-ansible.html)
- [blogs.oracle.com - Ansible playbook to provision a WebLogic Fusion Middleware Domain on RHEL/CentOS 7 by Christos Vezalis](https://blogs.oracle.com/emeapartnerweblogic/entry/ansible_playbook_to_provision_a)
	- [Using Ansible to install WebLogic 12c R2 (12.2.1) and Fusion Middleware Infastructure on Oracle Linux 7.1](http://unversioned.blogspot.gr/2015/11/using-ansible-to-install-weblogic-12c.html)
	- [Ansible Playbook: install and configure WebLogic server 12c with Oracle Fusion Middleware in RHEL7](https://github.com/cvezalis/weblogic-ansible)
	- [Ansible playbook: deploy and create a WebLogic 12c R2 Domain with Oracle Fusion Middleware](https://github.com/cvezalis/ansible-weblogic-fmw-infra-12c-R2)

## Drupal via Ansible
- [drupalvm.com](http://www.drupalvm.com/)

## Databases via Ansible
- [List of Database Modules](http://docs.ansible.com/ansible/list_of_database_modules.html)
- [Ansible Role: MySQL](https://github.com/geerlingguy/ansible-role-mysql)
- [Example Ansible playbook that uses the MySQL module](https://github.com/ansible/ansible-examples/blob/master/language_features/mysql.yml)

## MySQL via Ansible
- [Ansible and Loading MySQL Databases Part I](https://opensourcedba.wordpress.com/2015/07/14/ansible-and-loading-mysql-databases-part-i/)
	- [Ansible and Loading MySQL Databases Part II](https://opensourcedba.wordpress.com/2015/07/29/ansible-and-loading-mysql-databases-part-ii/)

## PostgreSQL via Ansible
- [Ansible Loves PostgreSQL](http://blog.2ndquadrant.com/ansible-loves-postgresql/)

## Oracle via Ansible
- [Nodalpoint.com: Using Ansible to configure a CentOS 7.1 server with Oracle 12c R1 Enterprise Edition Database](http://www.nodalpoint.com/devops-ansible-oracle-database-oraclelinux-7-vagrant/)
	- [middlewaresnippets.blogspot.com - How to set-up an Oracle Database with Ansible](http://middlewaresnippets.blogspot.com/2015/06/more-fun-with-ansible.html)

## Elasticsearch via Ansible
- [Deploying Elasticsearch with Ansible](https://www.elastic.co/blog/deploying-elasticsearch-with-ansible)

## Provisioning Docker containers with Ansible
- [ibm.com: Provisioning Docker containers with Ansible](https://www.ibm.com/developerworks/cloud/library/cl-provision-docker-containers-ansible/)

## Security with Ansible
- [Fixing Heartbleed with Ansible](http://www.ansible.com/blog/fixing-heartbleed-with-ansible)
- [Ansible.com shellshock](http://www.ansible.com/blog/shellshock)
- [Patching your systems for DROWN doesn’t have to be a big deal thanks to Ansible](https://www.ansible.com/blog/drown-openssl-vulnerability)

## Windows Automation with Ansible
- [How Ansible Makes Automating Windows Easier](https://www.ansible.com/blog/ansible-windows-features)

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">Ansible 2.0 Windows automation is better and faster than 1.x. Time to upgrade <a href="https://twitter.com/hashtag/AnsibleFest?src=hash">#AnsibleFest</a> <a href="https://t.co/7YUxLRAuLX">pic.twitter.com/7YUxLRAuLX</a></p>&mdash; tbarr (@tbarr) <a href="https://twitter.com/tbarr/status/700285887947603968">febrero 18, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">How Ansible Makes Automating Windows Easier by <a href="https://twitter.com/mattdavispdx">@mattdavispdx</a> <a href="https://t.co/cvJDKBu1qt">https://t.co/cvJDKBu1qt</a> <a href="https://t.co/TCzkkGteLG">pic.twitter.com/TCzkkGteLG</a></p>&mdash; Ansible by Red Hat (@ansible) <a href="https://twitter.com/ansible/status/707664939880726528">marzo 9, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

## Network Automation with Ansible
- [ansible.com/networks](https://www.ansible.com/networks)
- [Ansible charges into network automation with Cisco, Juniper](http://www.theregister.co.uk/2016/02/18/ansible_dives_into_network_automation/) But where's Huawei? 
- [Moving to the DevOps Model with Cisco and Ansible](http://blogs.cisco.com/cloud/moving-to-the-devops-model-with-cisco-and-ansible)
- [ansible.com: Managing your Cisco data center network with ansible](https://www.ansible.com/ansible-cisco-data-center)
- [Arista + Ansible: A Dramatically Simple New Approach](https://eos.arista.com/arista-ansible-a-dramatically-simple-new-approach/)
- [ansible.com: Ansible network technology preview](https://www.ansible.com/blog/ansible-network-technology-preview)

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">. <a href="https://twitter.com/redhat">@RedHat</a> <a href="https://twitter.com/ansible">@Ansible</a> applies its IT automation capabilities to the network <a href="https://t.co/pjHwvSjlKx">https://t.co/pjHwvSjlKx</a></p>&mdash; The New Stack (@thenewstack) <a href="https://twitter.com/thenewstack/status/700391369190338560">febrero 18, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">Red Hat Brings DevOps to the Network with New Ansible Capabilities  <a href="https://t.co/QKPt4K6Eqk">https://t.co/QKPt4K6Eqk</a></p>&mdash; Ansible (@ansible) <a href="https://twitter.com/ansible/status/700261052794142720">febrero 18, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">Network Automation with <a href="https://twitter.com/ansible">@ansible</a> it&#39;s easy if you try.... <a href="https://t.co/VZVJSmUDqs">https://t.co/VZVJSmUDqs</a> <a href="https://twitter.com/hashtag/netdevops?src=hash">#netdevops</a></p>&mdash; CumulusNetworks (@CumulusNetworks) <a href="https://twitter.com/CumulusNetworks/status/700280050554265600">febrero 18, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">Why Ansible + Network <a href="https://twitter.com/hashtag/AnsibleFest?src=hash">#AnsibleFest</a> <a href="https://t.co/bLaaCFRatv">pic.twitter.com/bLaaCFRatv</a></p>&mdash; tbarr (@tbarr) <a href="https://twitter.com/tbarr/status/700259062278131712">febrero 18, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">Peter Sprygada talks about the new <a href="https://twitter.com/hashtag/Ansible?src=hash">#Ansible</a> <a href="https://twitter.com/hashtag/network?src=hash">#network</a> support at <a href="https://twitter.com/hashtag/AnsibleFest?src=hash">#AnsibleFest</a> - just look at the list!  <a href="https://twitter.com/hashtag/RedHat?src=hash">#RedHat</a> <a href="https://t.co/H66eV5a7Fn">pic.twitter.com/H66eV5a7Fn</a></p>&mdash; liquidat (@liquidat) <a href="https://twitter.com/liquidat/status/700261315219210240">febrero 18, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">Network testing playbooks available in Ansible GitHub <a href="https://twitter.com/hashtag/AnsibleFest?src=hash">#AnsibleFest</a> <a href="https://t.co/oF5OQgY8VH">pic.twitter.com/oF5OQgY8VH</a></p>&mdash; tbarr (@tbarr) <a href="https://twitter.com/tbarr/status/700263234604023808">febrero 18, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">The future of <a href="https://twitter.com/hashtag/Tower?src=hash">#Tower</a> will improve support for huge scale installations. <a href="https://twitter.com/hashtag/AnsibleFest?src=hash">#AnsibleFest</a> <a href="https://twitter.com/hashtag/RedHat?src=hash">#RedHat</a> <a href="https://t.co/jlxv5DkpXs">pic.twitter.com/jlxv5DkpXs</a></p>&mdash; liquidat (@liquidat) <a href="https://twitter.com/liquidat/status/700274786728022017">febrero 18, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">Why Cisco loves <a href="https://twitter.com/ansible">@ansible</a> <a href="https://twitter.com/hashtag/AnsibleFest?src=hash">#AnsibleFest</a> <a href="https://t.co/SacP0DxZiH">pic.twitter.com/SacP0DxZiH</a></p>&mdash; tbarr (@tbarr) <a href="https://twitter.com/tbarr/status/700356782288293888">febrero 18, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">Cisco slide from <a href="https://twitter.com/hashtag/AnsibleFest?src=hash">#AnsibleFest</a> Better Together <a href="https://t.co/gD40Rka8t9">pic.twitter.com/gD40Rka8t9</a></p>&mdash; tbarr (@tbarr) <a href="https://twitter.com/tbarr/status/700356300815773696">febrero 18, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">Moving to the <a href="https://twitter.com/hashtag/DevOps?src=hash">#DevOps</a> model and network automation. Read the blog: <a href="https://t.co/A63B0o7tY8">https://t.co/A63B0o7tY8</a> <a href="https://twitter.com/mscohen">@mscohen</a> <a href="https://twitter.com/shanecorban">@shanecorban</a> <a href="https://t.co/Vk15AMDcOT">pic.twitter.com/Vk15AMDcOT</a></p>&mdash; Cisco Cloud (@CiscoCloud) <a href="https://twitter.com/CiscoCloud/status/700354479498117120">febrero 18, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<div class="tumblr-post" data-href="https://embed.tumblr.com/embed/post/jjKfzzzhxu5DrcjAf25xLg/138976713666" data-did="da39a3ee5e6b4b0d3255bfef95601890afd80709"><a href="http://yourreactiongifs.tumblr.com/post/138976713666">http://yourreactiongifs.tumblr.com/post/138976713666</a></div><script async src="https://secure.assets.tumblr.com/post.js"></script>