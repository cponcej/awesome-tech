<!-- MarkdownTOC -->

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
    - [Provisioning Docker containers with Ansible](#provisioning-docker-containers-with-ansible)

<!-- /MarkdownTOC -->

[![Red Hat acquires Ansible](images/redhat-ansible.png)](https://www.redhat.com/en/about/press-releases/red-hat-acquire-it-automation-and-devops-leader-ansible)

# Ansible
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

## Is ansible replacing puppet?
- [redhat subreddit: Is ansible replacing puppet?](https://www.reddit.com/r/redhat/comments/3xj6ja/is_ansible_replacing_puppet/)
- [Demo: Chef vs Puppet vs Ansible](https://www.youtube.com/watch?v=miO00M4vPok)
- [Are Docker Users Migrating to Ansible and Away from Puppet and Chef?](http://thenewstack.io/are-docker-users-migrating-to-ansible-and-away-from-puppet-and-chef/)
- [Twitter's transition from Puppet to Ansible](https://www.youtube.com/watch?v=fwGrKXzocg4)
- [Puppet or Ansible: How to Choose?](https://dzone.com/articles/puppet-or-ansible-how-to-choose) When choosing between Puppet and Ansible, understanding the design choices can get us past wondering which is better, so we can make an informed decision.

![I volunteer](images/i_volunteer.gif)

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

<div class="tumblr-post" data-href="https://embed.tumblr.com/embed/post/P8tjxHPaumGfvn6V1XLvRA/138981762031" data-did="da39a3ee5e6b4b0d3255bfef95601890afd80709"><a href="http://inafev.tumblr.com/post/138981762031">http://inafev.tumblr.com/post/138981762031</a></div><script async src="https://secure.assets.tumblr.com/post.js"></script>