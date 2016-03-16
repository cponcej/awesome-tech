**Table of Contents**
<!-- MarkdownTOC -->

- [DevOps](#devops)
	- [DevOps Blogs](#devops-blogs)
	- [Description](#description)
	- [Cultura DevOps](#cultura-devops)
	- [Collaborative tools](#collaborative-tools)
	- [DevOps Tools 2016](#devops-tools-2016)
		- [Server Provisioning and Automation: Red Hat Satellite, Katello, Foreman, Cobbler and others](#server-provisioning-and-automation-red-hat-satellite-katello-foreman-cobbler-and-others)
	- [Agile planning: Scrum, Kanban, Lean](#agile-planning-scrum-kanban-lean)
		- [Javier Garzas](#javier-garzas)
		- [Project Management](#project-management)
			- [Product Owner](#product-owner)
			- [Scrum Master. Scrum Cheat Sheet](#scrum-master-scrum-cheat-sheet)
			- [Open Project](#open-project)
		- [Continuous Integration and Delivery](#continuous-integration-and-delivery)
			- [Continuous Integration Tools](#continuous-integration-tools)
	- [Metrics](#metrics)
- [ITIL](#itil)
	- [Is DevOps replacing ITIL?](#is-devops-replacing-itil)
	- [ITIL Tools](#itil-tools)

<!-- /MarkdownTOC -->

![term devops](images/term_devops.jpg)

[![Hiring for DevOps: Look beyond the gurus and ninjas](images/devops_beyond_gurus_ninjas.png)](http://techbeacon.com/devops-experts-hiring)

[![not my job](images/not_my_job.jpg)](https://www.linkedin.com/pulse/silo-mentality-ruining-your-business-neal-woodson)

# DevOps
## DevOps Blogs
- [devops.com](http://devops.com/)
- [TechBeacon.com](http://techbeacon.com/) Practical Knowledge for dev and tech pros
- [DevOps Library: The Best Videos for the Best Admins](http://devopslibrary.com/)
- [DZone/DevOps Zone](https://dzone.com/devops-tutorials-tools-news)
- [DevOpsCube](http://devopscube.com/)
- [DevOpsSummit Blog](http://devops.sys-con.com/)
- [20 DevOps Leaders to Follow on Twitter](https://dzone.com/articles/20-devops-leaders-to-follow-on-twitter)
- [redhat.com On-demand webinars about DevOps](http://www.redhat.com/en/about/events/devops-webinars)
- [github: DevopsWiki](https://github.com/Leo-G/DevopsWiki) A wiki of Guides, Scripts, Tutorials related to devops
- [Accenture DevOps Blog](https://www.accenture.com/us-en/blogs/blogs-accenture-devops.aspx)
- [List of DevOps Blogs and Resources for Learning](http://devopscube.com/list-of-devops-blogs-and-resources/)
	1. [Dzone DevOps](https://dzone.com/devops-tutorials-tools-news)
	2. [Devops.com](http://devops.com/)
	3. [TechTarget Devops](http://www.techtarget.com/technology/DevOps)
	4. [Devops Sub-Reddit](https://www.reddit.com/r/devops)
	5. [Devops on Quora](https://www.quora.com/topic/DevOps)
	6. [Dev2Ops.org](http://dev2ops.org/)
	7. Linkedin Groups
		- [DevOps](https://www.linkedin.com/groups/2825397)
		- [Devops discussions](https://www.linkedin.com/groups/6585254)
	8. Devops Podcasts
		- [The ship show](http://theshipshow.com/)
		- [Arrested Devops](http://theshipshow.com/)
		- [Devops Cafe](http://devopscafe.org/)

[![devops.com page](images/devops_com-logo.png)](http://devops.com/)

[![find a debug during the deploy](images/find_debug_during_deploy.gif)](http://devopsreactions.tumblr.com/)

[![devops library](images/devopslibrary.png)](http://devopslibrary.com/)

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">Video: <a href="https://twitter.com/hashtag/RedHat?src=hash">#RedHat</a>&#39;s Pierre Olivier Mathis at <a href="https://twitter.com/hashtag/MWC16?src=hash">#MWC16</a> - <a href="https://twitter.com/hashtag/Telcos?src=hash">#Telcos</a> finding the value leveraging <a href="https://twitter.com/hashtag/DevOps?src=hash">#DevOps</a> <a href="https://t.co/IhtGnxscXM">https://t.co/IhtGnxscXM</a> via <a href="https://twitter.com/TIA_Now">@TIA_Now</a></p>&mdash; Red Hat Cloud (@RedHatCloud) <a href="https://twitter.com/RedHatCloud/status/710122453360648192">16 de marzo de 2016</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

## Description
- [What is DevOps? - In Simple English 🌟🌟](https://youtu.be/_I94-tJlovg)
- [Software Development in the 21st century 🌟🌟🌟](https://www.thoughtworks.com/talks/software-development-21st-century-xconf-europe-2014)
- [New Relic eBook: What is DevOps and Why it Can Help Your Business?](http://newrelic.com/devops-101)
- [slideshare: Jelastic - DevOps for Java with Docker Containers - Madrid 2015](http://www.slideshare.net/jelastic/jelastic-devops-for-java-with-docker-containers-madrid-2015-55033859)
- [ebook: IBM DevOps for Dummies (free)](http://www.ibm.com/ibm/devops/us/en/resources/dummiesbooks/)
- [New Relic: Glossary of DevOps Tools. Get a glimpse into some of New Relic's favorite DevOps tools](http://newrelic.com/devops/toolset)
- [What to Expect From a DevOps Interview 🌟🌟🌟🌟🌟](https://dzone.com/articles/what-to-expect-from-a-devops-interview)
	- [Why You’ll NEVER Nail That DevOps Interview 🌟🌟🌟🌟🌟](https://dzone.com/articles/why-youll-never-nail-that-devops-interview-1)
- [Deloitte: The DevOps Difference](http://deloitte.wsj.com/cio/2014/04/24/the-devops-difference/)
- [MountainWest Devops 2014 - How I Learned to Stop Worrying and Love DevOps](https://youtu.be/uLfIp-2zm6I)
- [DevOps does not negate ITIL or ITSM; they can be leveraged for greater agility](http://www.itworldcanada.com/article/devops-does-not-negate-itil-or-itsm-they-can-be-leveraged-for-greater-agility/379603)
- [thoughtsoncloud.com: Why are we racing to DevOps?](http://www.thoughtsoncloud.com/2015/12/why-are-we-racing-to-devops/)
- [DevOps isn’t just about engineering better processes. It’s also about cultural transformation 🌟](http://cloudcomputing.sys-con.com/node/3588052)
- [How IBM Reduced Time to Development From 120 Days to 3.](https://dzone.com/articles/how-ibm-reduced-time-to-development-from-120-days) A case study on how even large, monolithic corporations can embrace DevOps and decrease their time to development.
- [Operations is Dead, but Please Don’t Replace it with DevOps](http://diversity.net.nz/operations-is-dead-but-please-dont-replace-it-with-devops/2013/05/15/)
- [scriptrock.com free eBook - DevOps: A Cynics Guide](https://www.scriptrock.com/devops-for-cynics)
- [devops.sys-con.com slides - A DevOps State of Mind By @RedHatNews|@DevOpsSummit #DevOps](http://devops.sys-con.com/node/3620720)
	- [slide: A DevOps state of mind, by Chris Van Tuin, Chief Technologist at Red Hat](http://dw.connect.sys-con.com/session/2958/Chris_Van_Tuin.pdf)
- [techspective.net: DevOps works best when everyone is running the same play](http://techspective.net/2016/01/05/devops-works-best-when-everyone-is-running-the-same-play/)
- [DevOps — Metrics, Goals, and Waste](https://dzone.com/articles/devops-metrics-goals-and-waste) Barry Chandler, DevOpsDays London Organizer, reviews how DevOps is measured, as well as the Japanese lean engineering practices it evolved from.
- [Devops — Developers Doing Ops, or Ops Doing Development?](https://dzone.com/articles/devops-developers-doing-ops-or-ops-doing-developme) DevOps encourages collaboration between both development and operations, but is one side taking up more of the workload?
- [DZone: Automate to Save Mental Energy, Not Time. 🌟](https://dzone.com/articles/automate-to-save-mental-energy-not-time-1) Automation doesn't necessarily save time, but it does save mental energy, and there's something to be said for that.
- [zdnet.com: DevOps: Still a big difference between expectation and reality 🌟🌟](http://www.zdnet.com/article/devops-still-a-big-difference-between-expectation-and-reality/) While most IT managers believe that DevOps and agility are important, only around a third believe they have the right infrastructure to implement it, according to a survey.
- [Linkedin: The DevOps Coding Dilemma](https://www.linkedin.com/pulse/devops-coding-dilemma-jason-dumars) Developers don't like being tech support for automation, even if they have 'Ops' as part of their title. 
- [medium.com: DevOps: Shift Left or Be Left](https://medium.com/@drew.firment/devops-shift-left-or-be-left-out-6b2755bd7ee9) The mainstream adoption of cloud computing is accelerating the shift of operations into the hands of developers.
- [Culture over technology: The key to DevOps success 🌟](http://www.cloudcomputing-news.net/news/2016/jan/21/culture-over-technology-key-devops-success/)
- [techbeacon.com: Hiring for DevOps: Look beyond the gurus and ninjas 🌟🌟🌟🌟](http://techbeacon.com/devops-experts-hiring) Defining the term "DevOps expert".  
	- What kind of DevOps? 

	>TK Keanini, CTO of Lancope (recently acquired by Cisco), told me it's not that easy. He compared the search for a DevOps expert to the search for a guitarist to join your band. Lots of people know how to play a guitar, but there are a variety of styles of music that can be played on a guitar, and there's also the element of how well the individual guitarist meshes with the rest of the band. In Keanini's opinion, that is what is most important when it comes to filling a DevOps role.

	>Keanini says, "It is like asking an IT guy if they play DevOps. They should be able to describe to you their role, how they play, and what the music of the band sounds like. The trick here is that there are so many manifestations of successful DevOps teams that you really need to understand it in the context of the business they support, because ultimately that is how DevOps creates value. The customer base expects a certain tempo, and DevOps is the only way to deliver at that tempo."

	>While they can all play a guitar, there is a big difference between a classical guitarist, a heavy metal guitarist, a folk music guitarist, and a pop guitarist. Hiring a classical guitar "expert" to join a heavy metal band won't work, no matter how adept the guitarist is with the instrument. The same thing is true about filling DevOps-oriented roles.

- [YOU: DevOps' people problem. People think they're doing ContinuousDelivery, but they probably aren't. Chucking a copy of The Phoenix Project at the team ain't the answer](http://www.theregister.co.uk/2016/01/15/devops_people_problem/) 
	- [Puppet Labs 2015 State of DevOps Report](https://puppetlabs.com/2015-devops-report)
	- [A CIO's Guide to DevOps. Gartner’s September 2015 survey](http://www.gartner.com/webinar/3165618/)
	- [The Phoenix Projec](http://itrevolution.com/books/phoenix-project-devops-book/)
- [DevOps Without Ops? Is It Possible?](https://dzone.com/articles/devops-without-ops-is-it-possible)
- [Creating a DevOps Culture: Identifying a “Single Person of Failure”](http://www.10thmagnitude.com/tech-blog/creating-a-devops-culture-identifying-a-single-person-of-failure) It’s natural for IT organizations to drift into the single person of failure problem because of these factors. But humans are not highly available—unlike technology, they have limited uptime, have to deal with regular interruptions and can’t be replicated. So IT organizations have to guard against falling into the single person of failure problem and take steps to fix it when it arises.
- [How to get DevOps right](http://www.networkworld.com/article/3029638/application-development/how-to-get-devops-right.html) The Dos and Don’ts of enterprise DevOps
- [Implementing a DevOps Strategy across multiple locations & product teams](http://tech.ticketmaster.com/2016/02/01/implementing-a-devops-strategy-across-multiple-locations-product-teams/)
- [opensource.com - The best ideas win: Community reflections on The Open Organization 🌟](https://opensource.com/open-organization/15/12/introducing-open-organization-field-guide) free e-book
- [accenture.com: DevOps Leadership Culture—Staying Cool When it is Getting Tough](https://www.accenture.com/us-en/blogs/blogs-devops-leadership-culture-staying-cool-when-getting-tough)

<div class="container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/_I94-tJlovg?rel=0" frameborder="0" allowfullscreen class="video"></iframe>
</div>
<br/>

<div class="container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/cus7WYHdQic?rel=0" frameborder="0" allowfullscreen class="video"></iframe>
</div>
<br/>

[![automation](images/automation.png)](https://dzone.com/articles/automate-to-save-mental-energy-not-time-1)

[![Puppet Labs 2015 State of DevOps Report](images/puppetlabs_state_of_devops_report_2015.jpg)](https://puppetlabs.com/2015-devops-report)

[![DevOps for Dummies 2nd ed](images/DevOps_For_Dummies_2nd_ed_cover.jpg)](http://www.ibm.com/ibm/devops/us/en/resources/dummiesbooks/)

<div class="container">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/tOdsxSB4MfwWj" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/CAinc/busting-the-five-biggest-devops-myths" title="Busting the Five Biggest DevOps Myths" target="_blank">Busting the Five Biggest DevOps Myths</a> </strong> from <strong><a href="//www.slideshare.net/CAinc" target="_blank">CA Technologies</a></strong> </div>
</div>
<br/>

## Cultura DevOps
- [8 cosas de la cultura startup que aprenden las empresas](https://www.linkedin.com/pulse/8-cosas-de-la-cultura-startup-que-aprenden-las-empresas-cobian) Cómo la cultura startup está influenciando a las grandes empresas. Corporaciones, tomen nota: apliquen o desaparezcan.

[![cultura startup](images/cultura_startup_devops.png)](https://www.linkedin.com/pulse/8-cosas-de-la-cultura-startup-que-aprenden-las-empresas-cobian)

[![cultura sobre la tecnología: la clave del éxito de DevOps](images/devops_cultura_exito.png)](http://www.cloudcomputing-news.net/news/2016/jan/21/culture-over-technology-key-devops-success/)

## Collaborative tools
- [etherpad.org 🌟](http://etherpad.org)
- [ethercalc.org 🌟](https://ethercalc.org)

## DevOps Tools 2016
- [Top 10 DevOps Tools to look out for in 2016](https://www.linkedin.com/pulse/top-10-devops-tools-look-out-2016-matthew-smith)
	1. [Packaging - FPM](https://github.com/jordansissel/fpm)
	2. [Pipeline - GoCD](https://www.go.cd/)
	3. [Logging - GrayLog](https://www.graylog.org/)
	4. [Container Orchestration - Kubernetes](http://kubernetes.io/)
	5. [Monitoring - Dataloop.IO](https://www.dataloop.io/)
	6. [Alerting - PagerDuty](https://www.pagerduty.com/)
	7. [Deployment - Atlas](https://atlas.hashicorp.com/)
	8. [Cost Control - CloudHealth](https://www.cloudhealthtech.com/)
	9. [PaaS - Drie.co](http://www.drie.co/)
	10. [Configuration management - Ansible](http://www.ansible.com/)
- [devops.com: DevOps in 2016, the year of implementation](http://devops.com/2015/12/22/devops-2016-year-implementation/)
- [dzone.com: Five Software Delivery Industry Predictions for 2016](https://dzone.com/articles/five-software-delivery-industry-predictions-for-20-1)
- [Periodic Table of DevOps Tools 🌟](https://xebialabs.com/periodic-table-of-devops-tools/)
- [oraclejavamagazine-digital.com: 7 Open Source tools for java deployment:Jenkins, Chef, Vagrant, Packer, Docker, Flyway, Rundeck, Go 🌟🌟](http://www.oraclejavamagazine-digital.com/javamagazine_twitter/20140506?pg=6#pg6)
- [oraclejavamagazine-digital.com: Using Docker in Java Applications](http://www.oraclejavamagazine-digital.com/javamagazine_twitter/20151112?pg=52#pg52)
- [How We Use AWS, Ansible, and Packer to Make Deployment Awesome 🌟](https://blog.branch.io/how-we-use-aws-ansible-and-packer-to-make-deployment-awesome)
- [Fabric8 is an integrated open source DevOps and Integration Platform](http://fabric8.io/)
- [DevOps Debates: The Benefits of Tool Standardization 🌟](http://devops.com/2016/01/20/devops-debates-benefits-tool-standardization/)

[![agile to market themselves](images/agile_to_market_themselves.png)](https://kenschwaber.wordpress.com/2014/07/30/agile/)

![always that way](images/always_that_way.jpg)

### Server Provisioning and Automation: Red Hat Satellite, Katello, Foreman, Cobbler and others 
- [nixCraft: Top 5 Open Source Linux Server Provisioning Software](http://www.cyberciti.biz/tips/server-provisioning-software.html)
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
- [Puppetlabs' Razor is next generation provisioning software that handles bare metal hardware and virtual server provisioning](https://github.com/puppetlabs/razor-server)
- [Provisioning the Entire Stack](http://devops.sys-con.com/node/3692599)
	- [stackiq.com](http://www.stackiq.com)
	- [stacki.com](http://www.stacki.com) Stacki 3 is Here. The World's Fastest Linux Provisioning Tool.
> When speccing out a datacenter automation or DevOps automation project, look for a server provisioning tool that can hand off to the application provisioning tool of choice, has some subset of application provisioning for complex systems (unless your application provisioning tool is already taking care of that of course), and can be fully automated.
> There are several very good application provisioning tools on the market – Puppet, Chef, Saltstack, Ansible to name a few. A server provisioning tool, as the first step that runs in server-up datacenter automation, should be able to work reliably with all of these.
>  It is easy enough to poke at products and determine if they suit the needs of your level of automation. A good example is that only about half of the products on the market make any attempt at RAID configuration as part of server provisioning. But if operators have to sit and configure RAID before an automated installation, then it’s not really fully automated, is it?
> And of course I recommend that you consider automation. Partially because my employer plays in the space, but moreso because there are far more impactful things operations could be doing than sitting and watching an OS install, or typing in IP addresses, masks, and gateways.

<div class="tumblr-post" data-href="https://embed.tumblr.com/embed/post/Y6ORssbcHF5P4Puns-jRoA/134927085230" data-did="bb1e1b59231f5382026568844e915c19da08f253"><a href="http://securityreactions.tumblr.com/post/134927085230/when-client-confidently-references-sneakernet">http://securityreactions.tumblr.com/post/134927085230/when-client-confidently-references-sneakernet</a></div><script async src="https://secure.assets.tumblr.com/post.js"></script>

## Agile planning: Scrum, Kanban, Lean
- [Manifesto for Agile Software Development 🌟🌟🌟🌟🌟](http://agilemanifesto.org)
- [Scrumguides.org: Scrum’s creators seek definitive place for Scrum knowledge 🌟](http://www.scrumguides.org/)
- [Why estimates never work 🌟🌟🌟](http://www.brandonsavage.net/why-estimates-never-work/)
- [In Support of DevOps: Kanban vs. Scrum](http://devops.com/2014/07/29/kanban-vs-scrum/)
- [You will not become agile by implementing scrum 🌟](https://www.linkedin.com/pulse/you-become-agile-implementing-scrum-jurriaan-kamer)
- [Kanban board is one of the most effective and popular tools for boosting productivity. Here is a collection of Kanban board's examples including plane simple and complicated Kanban board's style](http://tracks.roojoom.com/r/340)
- [Lean vs Agile Programming](http://www.mytechlogy.com/IT-blogs/9408/tech-blogs-lean-vs-agile-programming/)
- [Think Scrum is Only for Developers? Think Again](https://www.linkedin.com/pulse/20140917144235-128811924-think-scrum-is-only-for-developers-think-again)
- [dzone.com: 5 Issues with Agile and What’s Next](https://dzone.com/articles/5-issues-with-agile-and-whats-next) Agile is increasingly popular, but it isn't perfect. Check out these 5 issues with Agile, and learn how the space will further evolve. Problems include lack of software architecture focus, and unclear definition of self-organization.
- [enterprisersproject.com: A conversation with Gene Kim on DevOps, waterfall development, and containers](https://enterprisersproject.com/article/2015/4/conversation-gene-kim-devops-waterfall-development-and-containers)
- [opensource.com - Scrum is dead: breaking down the new open development method](https://opensource.com/business/15/11/open-development-method)

[![agile manifesto](images/agile_manifesto.png)](http://www.agilemanifesto.org/)

### Javier Garzas 
- [slideshare: 233 grados de TI 🌟🌟🌟](http://www.slideshare.net/233gradosdeTI)
- [Javier Garzás: Agilidad 🌟🌟🌟🌟🌟](https://www.youtube.com/watch?v=oShXAC26rcs)
- [¿Qué es un líder técnico? Y los cambios que están sufriendo los roles típicos en un proyecto tecnológico 🌟🌟🌟](http://www.javiergarzas.com/2014/12/que-es-un-lider-tecnico.html)
- [Aléjate del concepto “Proyecto” si quieres usar bien Scrum: confundir “versión a entregar” al cliente con final de sprint](http://www.javiergarzas.com/2015/11/alejate-del-concepto-proyecto-si-quieres-usar-bien-scrum-12-confundir-version-a-entregar-al-cliente-con-final-de-sprint.html)
- [El Product Owner del lado oscuro y otros anti-patrones](http://www.javiergarzas.com/2016/01/el-product-owner-del-lado-oscuro-y-otros-anti-patrones.html)
- [Un video imprescindible sobre la buena gestión de equipos software 🌟🌟🌟](http://www.javiergarzas.com/2014/09/un-video-sobre-la-buena-gestion-de-equipos-software.html)
- [¿Es bueno tener equipos estables? (vamos, que no rote constantemente la gente)](http://www.javiergarzas.com/2015/09/es-bueno-tener-equipos-estables-vamos-que-no-rote-constantemente-la-gente.html)
- [Agilidad y DevOps… ¿Son lo mismo? y ¿Qué es DevOps?](http://www.javiergarzas.com/2015/12/agilidad-y-devops-son-lo-mismo-y-que-es-devops.html)
- [¿Las disputas y discusiones son una constante en tu equipo – entorno de trabajo? No te preocupes, no estás solo 🌟](http://www.javiergarzas.com/2015/04/las-disputas-y-discusiones-son-una-constante-en-tu-equipo-entorno-de-trabajo-no-te-preocupes-no-estas-solo.html)
- [Escalar agilidad: Liderazgo tribal (1/3). ¿Qué cultura tiene la tribu en la que trabajas?](http://www.javiergarzas.com/2015/12/escalar-agilidad-liderazgo-tribal-1.html)
- [¿Tiene futuro que en tu empresa tengas un CPD? ¿Y que te dediques profesionalmente a mantenerlo? 🌟](http://www.javiergarzas.com/2015/11/tiene-futuro-que-en-tu-empresa-tengas-un-cpds-un-centro-de-proceso-de-datos-y-que-te-dediques-profesionalmente-a-ello.html)
- [Si pasamos de externalizar el Testing a integrarlo en los equipos… ¿Qué va a pasar con las testing factories?](http://www.javiergarzas.com/2015/10/si-pasamos-de-externalizar-el-testing-a-integrarlo-en-los-equipos-que-va-a-pasar-con-las-testing-factories.html)
- [Cómo y quién recuperó uno de los mayores desastres del desarrollo software: la web healthcare... 🌟🌟](http://www.javiergarzas.com/2014/12/como-y-quien-recupero-healthcare-gov.html)
- [Next time you're stressing out about code bug, just be glad it's not one that causes a $440M loss in only 45 mins](https://en.wikipedia.org/wiki/Knight_Capital_Group#2012_stock_trading_disruption)
- [Web del senado, costó 448.819€, pero la del Ayuntamiento de Madrid 100.000€ ¿Nuevo caso de populismo tecnológico?](http://www.javiergarzas.com/2015/10/web-del-senado-costo-448-819e-pero-la-del-ayuntamiento-de-madrid-100-000e-nuevo-caso-de-populismo-tecnologico.html)
- [Los decoradores no saben crear equipos de trabajo potentes 🌟](http://www.javiergarzas.com/2016/01/los-decoradores-no-saben-crear-equipos-de-trabajo-potentes.html)

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="es" dir="ltr">Maneras de usar un Gantt para matar un proyecto <a href="https://t.co/dUkacExFmr">https://t.co/dUkacExFmr</a> vía <a href="https://twitter.com/jgarzas">@jgarzas</a></p>&mdash; Johnny Bravo (@jbravot) <a href="https://twitter.com/jbravot/status/706515419348213761">6 de marzo de 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<div class="container">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/oShXAC26rcs?rel=0" frameborder="0" allowfullscreen class="video"></iframe>
</div>
<br>

<div class="container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/o90o6Oassec?rel=0" frameborder="0" allowfullscreen class="video"></iframe>
</div>
<br>

### Project Management
- [cio.com: Why less is more with project management](http://www.cio.com/article/3031636/leadership-management/why-less-is-more-with-project-management.html)

#### Product Owner
- [medium.com: Product Owner Responsibilities in Agile (Scrum Methodologies) 🌟🌟](https://medium.com/agile-project-management-scrum-lean-kanban/product-owner-responsibilities-in-agile-scrum-methodologies-dc7aeeb5ff71)
- [blog.scrum.org: What Product Ownership might entangle](http://blog.scrum.org/what-product-ownership-might-entangle/)
- [20 Product Owners anti patterns in scrum](http://lmsgoncalves.com/2014/09/29/product-owner-anti-patterns/)
- [¿Cuantos Product Owner puede tener un equipo? 🌟](http://www.javiergarzas.com/2015/10/cuantos-product-owner-puede-tener-un-equipo.html)
- [The Product Owner Role When Scaling Scrum](https://appdevelopermagazine.com/3666/2016/2/23/The-Product-Owner-Role-When-Scaling-Scrum)

<div class="tumblr-post" data-href="https://embed.tumblr.com/embed/post/xrf0i_XPmm5oWp5icmI4JA/131683232219" data-did="1bd906eabfc838fb9ba4388bc874a3ed11cc2e63"><a href="http://uxreactions.com/post/131683232219/working-with-a-product-owner-whos-new-to-agile">http://uxreactions.com/post/131683232219/working-with-a-product-owner-whos-new-to-agile</a></div><script async src="https://secure.assets.tumblr.com/post.js"></script>

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="es" dir="ltr">Estimates <a href="https://t.co/w1XL7sM1P3">https://t.co/w1XL7sM1P3</a> <a href="https://twitter.com/hashtag/ProjectManagement?src=hash">#ProjectManagement</a> <a href="https://twitter.com/hashtag/webcomic?src=hash">#webcomic</a> <a href="https://twitter.com/hashtag/TimeEstimates?src=hash">#TimeEstimates</a> <a href="https://t.co/1vSpPvgN0R">pic.twitter.com/1vSpPvgN0R</a></p>&mdash; Don&#39;t Hit Save (@donthitsave) <a href="https://twitter.com/donthitsave/status/705854945103364097">4 de marzo de 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

#### Scrum Master. Scrum Cheat Sheet
- [DZone/Agile Zone. Hiring: 38 Scrum Master Interview Questions To Avoid Imposters](https://dzone.com/articles/hiring-38-scrum-master-interview-questions-to-avoi) A free pdf from DZone user Stefan Wolpers for those looking to hire Scrum Masters or agile professionals.
- [The shortest and greatest SCRUM cheat sheet that I've seen so far 🌟🌟🌟](https://www.protechtraining.com/pdf/ScrumCheatSheet.pdf)
- [What Is the Relationship Between Story Points and Task Effort in Hours?](https://www.scrumalliance.org/community/articles/2016/january/what-is-the-relationship-between-story-points-and)
- [Agile adoption by numbers – and some problems](http://www.javacodegeeks.com/2016/01/agile-adoption-numbers-problems.html)
- [Daily Scrum – Tips & Tactics](http://www.barryovereem.com/daily-scrum-tips-tactics/)
- [Ponga un Scrum Master en su vida](https://www.beeva.com/beeva-view/metodologiasagiles/ponga-un-scrum-master-en-su-vida/)
- [blog.trello.com: Tips For Managing A Remote Team](http://blog.trello.com/tips-for-managing-a-remote-team/)
- [Meetings are not just about status updates! Never forget the "why" at the Daily](https://hbr.org/2016/02/the-perils-of-overmonitoring-your-behavior-and-goals)

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">How to build a visual, shared editorial calendar &amp; content management system <a href="https://t.co/LgmtS0WOtO">https://t.co/LgmtS0WOtO</a> <a href="https://t.co/aYYKruFA7q">pic.twitter.com/aYYKruFA7q</a></p>&mdash; Trello (@trello) <a href="https://twitter.com/trello/status/699367622857531392">febrero 15, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">Warning: Things are about to get dangerously productive with this board of <a href="https://twitter.com/hashtag/TrelloTips?src=hash">#TrelloTips</a> <a href="https://t.co/ZhwopBgAhj">https://t.co/ZhwopBgAhj</a> <a href="https://t.co/irysVm5Qh7">pic.twitter.com/irysVm5Qh7</a></p>&mdash; Trello (@trello) <a href="https://twitter.com/trello/status/700417017937985537">febrero 18, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">At over 50% remote, here are some tools &amp; tips that help us manage our teams - <a href="https://t.co/epV8CRF7qU">https://t.co/epV8CRF7qU</a> <a href="https://t.co/N8i3h0VODy">pic.twitter.com/N8i3h0VODy</a></p>&mdash; Trello (@trello) <a href="https://twitter.com/trello/status/700749202591092737">febrero 19, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">Meetings are not just about status updates! Never forget the &quot;why&quot; at the Daily <a href="https://twitter.com/hashtag/Scrum?src=hash">#Scrum</a>, <a href="https://twitter.com/hashtag/Sprint?src=hash">#Sprint</a> <a href="https://twitter.com/hashtag/Retrospective?src=hash">#Retrospective</a> etc. <a href="https://t.co/1asZMoxiIo">https://t.co/1asZMoxiIo</a></p>&mdash; Scrum.org (@Scrumdotorg) <a href="https://twitter.com/Scrumdotorg/status/702899793748738048">25 de febrero de 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet tw-align-center" data-partner="tweetdeck"><p lang="en" dir="ltr">Default to 30 minute meetings and remember why you&#39;re there <a href="https://twitter.com/opensourceway">@opensourceway</a> <a href="https://t.co/VvsyqstgEE">https://t.co/VvsyqstgEE</a> <a href="https://t.co/JDRdm0KpQQ">pic.twitter.com/JDRdm0KpQQ</a></p>&mdash; Jim Whitehurst (@JWhitehurst) <a href="https://twitter.com/JWhitehurst/status/707014321218461698">March 8, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

[![scrum cheat sheet](images/scrum_cheat_sheet.png)](https://www.protechtraining.com/pdf/ScrumCheatSheet.pdf)

<div class="container">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/sivZnLLIue3AZO" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/infoDiagram/how-to-start-scrum-from-traditional-project-management" title="How to Start Scrum from Traditional Project Management" target="_blank">How to Start Scrum from Traditional Project Management</a> </strong> from <strong><a href="//www.slideshare.net/infoDiagram" target="_blank">Peter Zvirinsky</a></strong> </div>
</div>
<br/>

<div class="container">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/bZjjK2TIilBKfB" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/fabokzs/what-scrum-kanban-lean-ever-done-for-us" title="What Scrum Kanban Lean Ever Done for Us" target="_blank">What Scrum Kanban Lean Ever Done for Us</a> </strong> from <strong><a href="//www.slideshare.net/fabokzs" target="_blank">Zsolt Fabok</a></strong> </div>
</div>
<br/>

<div class="container">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/pdvmXZM6Alb34F" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/blossom_io/the-definitive-guide-to-agile-kanban" title="A Guide to Agile Kanban" target="_blank">A Guide to Agile Kanban</a> </strong> from <strong><a href="//www.slideshare.net/blossom_io" target="_blank">Blossom</a></strong> </div>
</div>
<br/>

<div class="tumblr-post" data-href="https://embed.tumblr.com/embed/post/7Nb42z8Qyb7M_uh_S2AImA/131735580276" data-did="da39a3ee5e6b4b0d3255bfef95601890afd80709"><a href="http://my-twisted-code.tumblr.com/post/131735580276">http://my-twisted-code.tumblr.com/post/131735580276</a></div><script async src="https://secure.assets.tumblr.com/post.js"></script>

<div class="container">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/5734B86up4wKLs" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/projectcareer/top-14-project-management-interview-questions-and-answers-33073123" title="175 project management interview questions and answers pdf" target="_blank">175 project management interview questions and answers pdf</a> </strong> from <strong><a target="_blank" href="//www.slideshare.net/projectcareer">projectcareer</a></strong> </div>
</div>
<br/>

#### Open Project
- [openproject.org 🌟](https://www.openproject.org)
- [OpenProject: An open source project management solution](https://opensource.com/business/16/2/openproject-open-source-project-management-solution)

### Continuous Integration and Delivery
- [Martin Fowler. Continuous Delivery 🌟🌟🌟🌟](https://www.youtube.com/watch?v=aoMfbgF2D_4)
	- [A Brief Guide to Success with Agile, Martin Fowler](http://martinfowler.com/articles/agileFluency.html)
- [continuousdelivery.com](http://continuousdelivery.com/)
	- [Visualizations of Continuous Delivery](http://continuousdelivery.com/2014/02/visualizations-of-continuous-delivery/)
- [Learn about how to apply Continuous Delivery principles to SOA, when test services aren't adequate, and the mechanics of service virtualization](https://dzone.com/articles/continuously-delivering-soa)
- [Continuously Delivering SOA. Learn about how to apply Continuous Delivery principles to SOA, when test services aren't adequate, and the mechanics of service virtualization](https://dzone.com/articles/continuously-delivering-soa)
- [28 DevOps and Continuous Delivery Reference Architectures](https://medium.com/@weekstweets/28-devops-and-continuous-delivery-reference-architectures-6a6ec82c4182#.1ju1glurv)
	- [DevOps and Continuous Delivery Reference Architectures (including Nexus and other popular tools)](http://www.slideshare.net/SonatypeCorp/nexus-and-continuous-delivery)
	- [DevOps and Continuous Delivery Reference Architectures - Volume 2](http://www.slideshare.net/SonatypeCorp/devops-and-continuous-delivery-reference-architectures)
	- [Experts Share DevOps/CD Reference Architectures](https://youtu.be/deQ_EcMXh7o)
- [DZone: Continuous Delivery: The Atlassian Way 🌟](https://dzone.com/articles/continuous-delivery-the-atlassian-way) Sonatype's Mark Miller catches up with Ian Buchanan at Atlassian to discuss DevOps leadership, ChatOps, and usage of tools in the continuous delivery pipeline.

[![visualizations continuous delivery](images/visualizations_continuous_delivery.png)](http://continuousdelivery.com/2014/02/visualizations-of-continuous-delivery/)

<div class="container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/aoMfbgF2D_4" frameborder="0" allowfullscreen class="video"></iframe>
</div>
<br/>


#### Continuous Integration Tools
- [Continuous Integration Tools](jenkins-git.md)

## Metrics
- [Metrics](metrics.md)

# ITIL
## Is DevOps replacing ITIL?
- [slideshare.net: Is DevOps replacing ITIL? Busting the Five Biggest DevOps Myths 🌟](http://www.slideshare.net/CAinc/busting-the-five-biggest-devops-myths)
- [Is DevOps Killing Some Types of Jobs? 🌟🌟🌟](https://developer.ibm.com/urbancode/2014/10/28/devops-killing-types-jobs/)
- [IT managers: we're hurting for more cloud and DevOps skills. Despite years of cloud and DevOps adoption, IT departments are still mired in backlogs of user demands, survey shows](http://www.zdnet.com/article/it-managers-were-hurting-for-more-cloud-and-devops-skills/)
- [Why everyone hates DevOps 🌟](http://www.networkworld.com/article/2915893/software/why-everyone-hates-devops.html)
	- [8 Reasons IT Pros Hate The Cloud](http://www.informationweek.com/cloud/8-reasons-it-pros-hate-the-cloud/d/d-id/1320531)
	- [The IT Culture War: The Struggle to Adopt DevOps | WIRED](http://www.wired.com/2015/03/culture-war-struggle-adopt-devops/)
- [DevOps does not negate ITIL or ITSM; they can be leveraged for greater agility](http://www.itworldcanada.com/article/devops-does-not-negate-itil-or-itsm-they-can-be-leveraged-for-greater-agility)
- [Operations is Dead, but Please Don’t Replace it with DevOps](http://diversity.net.nz/operations-is-dead-but-please-dont-replace-it-with-devops/2013/05/15/)
- [ITSM vs. DevOps – Agility vs. Control – is this really battle royale?](http://www.vigilantguy.com/itsm-vs-devops-agility-vs-control-is-this-really-battle-royale/)
- [ABCs of ITIL®](http://www.globalknowledge.com/training/whitepaperdetail.asp?pageid=502&wpid=1428)

[![vandalismo car2go](images/car2go.jpg)](http://www.elmundo.es/madrid/2016/01/09/569179e6268e3e25218b462a.html)

## ITIL Tools
- [ITIL v3 (Information Technology Infrastructure Library)](https://en.wikibooks.org/wiki/ITIL_v3_%28Information_Technology_Infrastructure_Library%29)
- [itop - ITSM & CMDB OpenSource. A simple, web based IT Service Management tool 🌟](http://sourceforge.net/projects/itop/)
- [RackTables.org - a datacenter asset management system 🌟](http://racktables.org/)

[![is your company ready for devops](images/is_your_company_ready_for_devops.jpg)](http://www.commitstrip.com/en/2015/02/02/is-your-company-ready-for-devops/)

<div class="tumblr-post" data-href="https://embed.tumblr.com/embed/post/_3Ic5v_IdVriNnkhHt35DA/121071300360" data-did="5265549b6f8c7e29b38dd1ec0ae5bbfa09577eea"><a href="http://devopstips.tumblr.com/post/121071300360/programming-isnt-manual-labor-but-it-still-sucks">http://devopstips.tumblr.com/post/121071300360/programming-isnt-manual-labor-but-it-still-sucks</a></div><script async src="https://secure.assets.tumblr.com/post.js"></script>

<div class="tumblr-post" data-href="https://embed.tumblr.com/embed/post/xDkuiVdNEGDOxRYqLpY3lA/136666346908" data-did="c39122a2d7c639452367c5efd23db417645d9da8"><a href="http://devops-testing.tumblr.com/post/136666346908/software-testing-the-devops-strategy">http://devops-testing.tumblr.com/post/136666346908/software-testing-the-devops-strategy</a></div><script async src="https://secure.assets.tumblr.com/post.js"></script>