<!-- MarkdownTOC -->

- [SQL](#sql)
	- [Awesome Lists](#awesome-lists)
	- [SQL Blogs and Forums](#sql-blogs-and-forums)
	- [SQL and Big Data on Twitter](#sql-and-big-data-on-twitter)
	- [SQL and Database Docs](#sql-and-database-docs)
	- [Database Performance](#database-performance)
	- [Database Security](#database-security)
	- [EssentialSQL. SQL Server](#essentialsql-sql-server)
	- [Use The Index, Luke](#use-the-index-luke)
	- [Database Version Control](#database-version-control)
	- [SQL replication](#sql-replication)
	- [MySQL](#mysql)
		- [MySQL on Twitter](#mysql-on-twitter)
		- [MySQL Blogs](#mysql-blogs)
		- [MySQL Tutorials](#mysql-tutorials)
		- [MySQL Books](#mysql-books)
		- [MySQL Cluster. MySQL Replication](#mysql-cluster-mysql-replication)
		- [MySQL metrics](#mysql-metrics)
		- [MySQL Best Practices](#mysql-best-practices)
		- [MySQL/MariaDB Performance Tuning and Optimization Tips](#mysqlmariadb-performance-tuning-and-optimization-tips)
	- [MariaDB](#mariadb)
		- [MariaDB Replication](#mariadb-replication)
	- [PostgreSQL](#postgresql)
		- [PostgreSQL on Twitter](#postgresql-on-twitter)
		- [PostgreSQL refs](#postgresql-refs)
		- [PostgreSQL Metrics](#postgresql-metrics)
		- [UPSERT on Postgres 9.5](#upsert-on-postgres-95)
	- [SQLite](#sqlite)
	- [TinyDB](#tinydb)
	- [Oracle](#oracle)
		- [Oracle installation](#oracle-installation)
		- [Oracle ASM](#oracle-asm)
		- [LVM2 vs Oracle ASM](#lvm2-vs-oracle-asm)
		- [Oracle ASM Disaster Recovery](#oracle-asm-disaster-recovery)
		- [ASM Cluster File System](#asm-cluster-file-system)
		- [Oracle ADVM](#oracle-advm)
		- [Upstart and Oracle](#upstart-and-oracle)
		- [Oracle Grid ASM](#oracle-grid-asm)
		- [Oracle ASMCMD](#oracle-asmcmd)
		- [Oracle ASMCA](#oracle-asmca)
- [NoSQL and NewSQL](#nosql-and-newsql)

<!-- /MarkdownTOC -->

[![bi_oracle_threatened_by_microsoft_amazon](images/bi_oracle_threatened_by_microsoft_amazon.png)](http://www.businessinsider.com/larry-ellison-on-microsoft-amazon-offers-2016-3)

# SQL
- [Reinventing Yourself as a Next Generation DBA](http://www.cumulogic.com/next-gen-dba/)

## Awesome Lists
- [Awesome sql](https://github.com/danhuss/awesome-sql)
- [Awesome database](https://github.com/numetriclabz/awesome-db)

## SQL Blogs and Forums
- [New subreddit about SQL](https://www.reddit.com/r/sqlporn)
- [essentialsql.com](http://www.essentialsql.com)
- [Sans SQL](http://www.sanssql.com)
- [SQL Indexing and Tuning e-Book](http://use-the-index-luke.com/)
- [craigkerstiens.com](http://www.craigkerstiens.com/)
- [DZone Database Zone](https://dzone.com/database-sql-nosql-tutorials-tools-news)
- [InsideMySQL.com](http://insidemysql.com)
- [MSSQLTips.com](https://www.mssqltips.com/)
- [T-SQL Tidy: Online T-SQL Statement Parser and Formatter](http://tsqltidy.com/)
- [Instant SQL Formatter](http://www.dpriver.com/pp/sqlformat.htm)
- [SQLFormat: Online SQL formatting service](http://sqlformat.org)
- [SQL Joins Visualizer. SQL Joins Visualizer help to you build SQL JOIN between two tables by using of Venn diagrams](http://sql-joins.leopard.in.ua/)
- [blog.jooq.org: Java, SQL and jOOQ](http://blog.jooq.org/)
- [The Database Programmer. All things related to database applications, both desktop and web](http://database-programmer.blogspot.co.at/)
- [stackoverflow.com](http://stackoverflow.com/)
- [dba.stackexchange.com](http://dba.stackexchange.com/)
- [seniordba.wordpress.com](https://seniordba.wordpress.com/)
- [sqlperformance.com](http://sqlperformance.com)
- [blog.jooq.org](http://blog.jooq.org/) Java, SQL and jOOQ. Best Practices and Lessons Learned from Writing Awesome Java and SQL Code. Get some hands-on insight on what's behind developing jOOQ.
- [iLearnSQL](http://www.ilearnsql.com)
- [awesomesql.wordpress.com](https://awesomesql.wordpress.com)
- [mundosql.es](http://www.mundosql.es)

## SQL and Big Data on Twitter
- [essentialsql.com's twitter](https://twitter.com/sqlkris)
- [twitter.com/SQLPerfTips](https://twitter.com/SQLPerfTips)
- [twitter.com/BigDataBlogs](https://twitter.com/BigDataBlogs)
- [InformationWeek Top Data Science, Analytics, and BI experts on Twitter](http://www.kdnuggets.com/2016/01/informationweek-top-data-science-analytics-bi-experts-twitter.html)
	1. [twitter.com/mrogati](https://twitter.com/mrogati)
	2. [twitter.com/scientistBob](https://twitter.com/scientistBob)
	3. [twitter.com/schmarzo](https://twitter.com/schmarzo)
	4. [twitter.com/mdraugelis](https://twitter.com/mdraugelis)
	5. [twitter.com/hmason](https://twitter.com/hmason)
	6. [twitter.com/Kart_Lisa](https://twitter.com/Kart_Lisa)
	7. [twitter.com/merv](https://twitter.com/merv)
	8. [twitter.com/kdnuggets](https://twitter.com/kdnuggets)
	9. [twitter.com/data_nerd](https://twitter.com/data_nerd)
	10. [twitter.com/jenbelissent](https://twitter.com/jenbelissent)
	11. [twitter.com/bethnoveck](https://twitter.com/bethnoveck)

## SQL and Database Docs
- [18 Best Online Resources For Learning SQL and Database Concepts](http://www.vertabelo.com/blog/notes-from-the-lab/18-best-online-resources-for-learning-sql-and-database)
- [SQL in ten minutes](http://www.codeproject.com/Articles/2059/SQL-in-ten-minutes)
- [10 sql tips to speed up your database](http://www.catswhocode.com/blog/10-sql-tips-to-speed-up-your-database)
- [dzone.com: SQL GROUP BY and Functional Dependencies: a Very Useful Feature](https://dzone.com/articles/sql-group-by-and-functional-dependencies-a-very-us)
- [How do you handle the ORM problem? When do you say YES or NO to using ORM?](http://www.vertabelo.com/blog/technical-articles/orms-under-the-hood)
- [SQL Query to find all table names on database in MySQL and SQL Server Examples](http://javarevisited.blogspot.com.es/2012/10/sql-query-to-find-all-table-on-database-mysql-sqlserver.html)
- [Curso SQL. Referencias cruzadas. Vídeo 15](https://www.youtube.com/watch?v=_kIWDzZUdA8)
- [Difference between Primary and Foreign key in table](http://java67.blogspot.com.es/2015/12/difference-between-primary-and-foreign.html)
- [Naming Conventions in Database Modeling](http://www.vertabelo.com/blog/technical-articles/naming-conventions-in-database-modeling)
- [Database design: Did You Know You Could Index SUM() and COUNT()? SQL Server Indexed Views, Part 3](http://explainextended.com/2013/08/26/did-you-know-you-could-index-sum-and-count-sql-server-indexed-views-part-3/)
- [Datazenit Web-based database administration tool for MySQL and PostgreSQL](https://datazenit.com)
- [javacodegeeks.com: The 10 Most Popular DB Engines (SQL and NoSQL)](http://www.javacodegeeks.com/2013/10/the-10-most-popular-db-engines-sql-and-nosql.html)
- [seniordba.wordpress.com: 15 SQL Server DBA Interview Questions](https://seniordba.wordpress.com/2014/06/25/11-sql-server-dba-interview-questions/)
- [18GB of JSON? How long do you think python would take to consume this file and insert to mysql?](https://www.reddit.com/r/Python/comments/40o2si/18gb_of_json/)
- [quora.com: What are some interesting things to know about SQL which most people don't know/might not use?](https://www.quora.com/What-are-some-interesting-things-to-know-about-SQL-which-most-people-dont-know-might-not-use/answer/Lukas-Eder)
- [boomphisto.blogspot.co.at: The Black Art Of Spatial Index Tuning In SQL Server](http://boomphisto.blogspot.co.at/2011/04/black-art-of-spatial-index-tuning-in.html)
- [SQL Server Management Studio: “Include Client Statistics” Button](http://www.brentozar.com/archive/2012/12/sql-server-management-studio-include-client-statistics-button/)
- [craigkerstiens.com: Writing More Legible SQL](http://www.craigkerstiens.com/2016/01/08/writing-better-sql/)
- [Are SQL Databases Dead?](http://www.iheavy.com/2013/12/30/sql-databases-dead/)
- [Transactions: What commands aren’t allowed?](http://www.sqlservercentral.com/blogs/sqlstudies/2014/02/05/transactions-what-commands-arent-allowed/)
- [ilearnsql.com: How Do You Join Tables Using SQL Outer Join?](http://www.ilearnsql.com/joining-tables-outer-join/)

[![SQL Joins Visualizer](images/sql_joins_visualizer.png)](http://sql-joins.leopard.in.ua/)

## Database Performance
- [database-programmer.blogspot.co.at: Database Performance: Pay Me Now or Pay Me Later](http://database-programmer.blogspot.co.at/2008/07/database-performance-pay-me-now-or-pay.html)
- [DZone/Database Zone: Top 6 Database Performance Metrics to Monitor in Enterprise Applications](https://dzone.com/articles/top-6-database-performance-metrics-to-monitor-in-e) This article reviews six of the top performance metrics to assess the health of your database in your enterprise application
- [sqlperformance.com: Sneaky behaviours and isolation guarantees in the SNAPSHOT isolation level](http://sqlperformance.com/2014/06/sql-performance/the-snapshot-isolation-level)
	- [sqlperformance.com: Tuning : A Good Place to Start](http://sqlperformance.com/2016/01/io-subsystem/tuning-a-good-place-to-start) Tim Radney of SQLskills gives an overview of his approach to SQL Server performance tuning, from system configuration, to I/O latency, to high cost queries.
- [Faster SQL Paging with jOOQ Using the Seek Method](http://blog.jooq.org/2013/10/26/faster-sql-paging-with-jooq-using-the-seek-method/)

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">MySQL—MariaDB—PostgreSQL Benchamarks<a href="https://t.co/ahTMtGf3JV">https://t.co/ahTMtGf3JV</a><br><br>MySQL/MariaDB are slightly faster at writing<br>PostgreSQL is faster at reading</p>&mdash; SQL Performance Tips (@SQLPerfTips) <a href="https://twitter.com/SQLPerfTips/status/699133157463998464">febrero 15, 2016</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">MySQL 5.7 – HTTP Plugin for MySQL<br>It is official: MySQL listens to HTTP and speaks JSON.<a href="https://t.co/T6ra14kQw4">https://t.co/T6ra14kQw4</a></p>&mdash; SQL Performance Tips (@SQLPerfTips) <a href="https://twitter.com/SQLPerfTips/status/692882185099935744">enero 29, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">Performance since PostgreSQL 7.4 (TPC-DS benchmark)<a href="https://t.co/sfD8GuSvEN">https://t.co/sfD8GuSvEN</a><br><br>It&#39;s almost 5 times faster now.</p>&mdash; SQL Performance Tips (@SQLPerfTips) <a href="https://twitter.com/SQLPerfTips/status/711549355556208640">20 de marzo de 2016</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

## Database Security
- [SQL Server Security Checklist](https://www.mssqltips.com/sqlservertip/3159/sql-server-security-checklist/)

## EssentialSQL. SQL Server
- [Do you have a desire to learn SQL?](http://www.sanssql.com/2014/05/do-you-have-desire-to-learn-sql.html)
- [essentialsql.com's twitter](https://twitter.com/sqlkris)
- [Get Ready to Learn SQL: 1 Simple SELECT Queries with SQLite](http://www.essentialsql.com/get-ready-to-learn-sql-simple-select-queries)
- [Get Ready to Learn SQL: 8. Database Normalization Explained in Simple English](http://www.essentialsql.com/get-ready-to-learn-sql-database-normalization-explained-in-simple-english/)
	- [Get Ready to Learn SQL: 9. Database First Normal Form Explained in Simple English](http://www.essentialsql.com/get-ready-to-learn-sql-8-database-first-normal-form-explained-in-simple-english/)
	- [Get Ready to Learn SQL: 10. Database Second Normal Form Explained in Simple English](http://www.essentialsql.com/get-ready-to-learn-sql-10-database-second-normal-form-explained-in-simple-english/)
    - [Get Ready to Learn SQL: 11. Database Third Normal Form Explained in Simple English](http://www.essentialsql.com/get-ready-to-learn-sql-11-database-third-normal-form-explained-in-simple-english/)
- [What are the Major Parts of a Database?](http://www.essentialsql.com/what-are-the-major-parts-of-a-database)
- [What is a Database Table?](http://www.essentialsql.com/what-is-a-database-table)
- [What is the Difference Between Cast and Convert?](http://www.essentialsql.com/get-ready-to-learn-sql-database-normalization-explained-in-simple-english/)
- [How to Write Queries – Introduction to Three Simple Steps to Writing SQL](http://www.essentialsql.com/how-to-write-queries-introduction-to-three-simple-steps-to-writing-sql)
- [Get Ready to Learn SQL Server 21: Using Subqueries in the WHERE Clause](http://www.essentialsql.com/get-ready-to-learn-sql-server-21-using-subqueries-in-the-where-clause/)
- [How Do I combine results from more than one table?](http://www.essentialsql.com/how-do-i-combine-results-from-more-than-one-table)
- [Using Conditional Logic in SQL with CASE Expression](http://www.essentialsql.com/using-conditional-logic-in-sql-with-case-expression)
- [How Do I combine results from more than one table?](http://www.essentialsql.com/how-do-i-combine-results-from-more-than-one-table/)
- [Get Ready to Learn SQL Server 21: Using Subqueries in the WHERE Clause](http://www.essentialsql.com/get-ready-to-learn-sql-server-21-using-subqueries-in-the-where-clause/)
- [Get Ready to Learn SQL Server 23: Using Subqueries in the HAVING Clause](http://www.essentialsql.com/get-ready-to-learn-sql-server-23-using-subqueries-in-the-having-clause)
- [What are Ten Things a Junior DBA should know?](http://www.essentialsql.com/what-are-ten-things-a-junior-dba-should-know/)
- [What is the Difference between a Join and Subquery?](http://www.essentialsql.com/what-is-the-difference-between-a-join-and-subquery/)
- [What is the Difference between Inner and Outer Joins?](http://www.essentialsql.com/what-is-the-difference-between-an-inner-and-outer-join)
- [What is a Data Dictionary?](http://www.essentialsql.com/what-is-a-data-dictionary)
- [How can I find Duplicate Values in SQL Server?](http://www.essentialsql.com/how-can-i-find-duplicate-values-in-sql-server/)
- [Commonly used SQL Server Data Types](http://www.essentialsql.com/commonly-used-sql-server-data-types/)
- [Using Conditional Logic in SQL with CASE Expression](http://www.essentialsql.com/using-conditional-logic-in-sql-with-case-expression/)
- [Get Ready to Learn SQL: 2. How to Sort Your Query Results with SQLite](http://www.essentialsql.com/get-ready-to-learn-sql-how-to-sort-your-query-results/)
- [ACID is the foundation of a database. Why so?](http://www.essentialsql.com/what-is-meant-by-acid/)
- [Built-In Functions (SQL Server)](http://www.essentialsql.com/introduction-to-sql-servers-built-in-functions)
- [What is a Database Index](http://www.essentialsql.com/what-is-a-database-index)
- [What is the difference between WHERE and HAVING clauses?](http://www.essentialsql.com/what-is-the-difference-between-where-and-having-clauses)
- [BI For Beginners – a Business Intelligence Interview with Brian Larson](http://www.essentialsql.com/bi-for-beginners-a-business-intelligence-interview-with-brian-larson)
- [Ozar’s Hierarchy of Database Needs: a 6-Month DBA Training Plan 🌟](https://www.brentozar.com/archive/2011/06/ozar-hierarchy-database-needs/)

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">Today, Microsoft announces that SQL Server is coming to Linux!&#13;&#13;<a href="https://t.co/HukIWadiqB">https://t.co/HukIWadiqB</a></p>&mdash; Gijs de Jong (@gijsdej) <a href="https://twitter.com/gijsdej/status/706960105519108099">7 de marzo de 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">Lose your SQL manual?  Do worry, start here!  <a href="https://t.co/NnNDYLukrG">https://t.co/NnNDYLukrG</a></p>&mdash; Kris Wenzel (@sqlkris) <a href="https://twitter.com/sqlkris/status/692407774370779136">enero 27, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">Troubleshoot SQL by writing it on many lines, use comments to turn on and off pieces as you debug.</p>&mdash; Kris Wenzel (@sqlkris) <a href="https://twitter.com/sqlkris/status/694915287083257856">febrero 3, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">Top 20 MySQL best practices  <a href="https://t.co/z28dx6gNHh">https://t.co/z28dx6gNHh</a></p>&mdash; Kris Wenzel (@sqlkris) <a href="https://twitter.com/sqlkris/status/692364513392353280">enero 27, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">R U an Accidentail DBA?  Freaked out?  Check out this free series.  <a href="https://t.co/5yrVx2PKaa">https://t.co/5yrVx2PKaa</a></p>&mdash; Kris Wenzel (@sqlkris) <a href="https://twitter.com/sqlkris/status/709348633406210048">14 de marzo de 2016</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

[![dba-training-needs](images/dba-training-needs.png)](https://www.brentozar.com/archive/2011/06/ozar-hierarchy-database-needs/)

[![sql-join-clauses](images/sql-join-clauses.png)](http://www.essentialsql.com)

## Use The Index, Luke
- [Partial Indexes: Indexing Selected Rows](http://use-the-index-luke.com/sql/where-clause/partial-and-filtered-indexes)
- [A visual explanation why LIKE filters are slow](http://use-the-index-luke.com/sql/where-clause/searching-for-ranges/like-performance-tuning)
- [Performance Impacts of System Load](http://use-the-index-luke.com/sql/testing-scalability/system-load)
- [NULL in the Oracle Database](http://use-the-index-luke.com/sql/where-clause/null)   
- [Finding All the Red M&Ms: A sweet explanation how database optimization works](http://use-the-index-luke.com/blog/2014-07/finding-all-the-red-mms)
- [Clustered Indexes have major drawbacks you might not be aware of](http://use-the-index-luke.com/sql/clustering/index-organized-clustered-index)
- [Primary Keys. Reading the execution plan of a primary key lookup](http://use-the-index-luke.com/sql/where-clause/the-equals-operator/primary-keys)
- [SQL Server Distinguishing Access and Filter-Predicates](http://use-the-index-luke.com/sql/explain-plan/sql-server/filter-predicates)
- [Pagination done the PostgreSQL Way. Works also in other DBs, but not that simple](http://use-the-index-luke.com/blog/2013-07/pagination-done-the-postgresql-way)
- [What’s left of NoSQL?](http://use-the-index-luke.com/blog/2013-04/whats-left-of-nosql)
- [Bind parameters and execution plan caching](http://use-the-index-luke.com/blog/2011-07-16/planning-for-reuse)
- [Bind parameters are the #1 defense against SQL injection attacks. But they also affect performance—mostly positive!](http://use-the-index-luke.com/sql/where-clause/bind-parameters)
- [How sorting and grouping works SQL databases and how to improve performance](http://use-the-index-luke.com/sql/sorting-grouping)
- [Concatenation: If you have DATE and TIME in separate columns, what's the best way to select all rows since yesterday 2:05pm?](http://use-the-index-luke.com/sql/where-clause/obfuscation/concatenation)

[![use the index luke](images/use_the_index_luke.png)](http://use-the-index-luke.com/)

## Database Version Control
- [dzone.com: The Definitive Guide to Database Version Control — Part 6](https://dzone.com/articles/the-definitive-guide-to-database-version-control-p-7)

## SQL replication
- [Traditional database replication drawbacks](http://www.nuodb.com/blog/replication-is-it-easy)
- [Amazon RDS](https://serversforhackers.com/amazon-rds)
- [Tungsten Replicator is an open source replication engine supporting a variety of different extractor and applier modules](https://github.com/vmware/tungsten-replicator)
- [Multi-source replication in MySQL 5.7 vs Tungsten Replicator](https://www.percona.com/blog/2015/07/29/multi-source-replication-in-mysql-5-7-vs-tungsten-replicator/)
- [MySQL Multi-Source Replication](https://dev.mysql.com/doc/refman/5.7/en/replication-multi-source.html)
- [MySQL 5.7 Multi-Source Replication – Automatically Combining Data From Multiple Databases Into One](http://mysqlhighavailability.com/mysql-5-7-multi-source-replication-automatically-combining-data-from-multiple-databases-into-one/)
- [MySQL Replication Defaults After 5.7](http://mysqlhighavailability.com/mysql-replication-defaults-after-5-7/)
- [MariaDB Galera Cluster 10.0.21 and 5.5.45 now available](https://blog.mariadb.org/mariadb-galera-cluster-10-0-21-and-5-5-45-now-available/)
- [What is MariaDB Galera Cluster?](https://mariadb.com/kb/en/mariadb/what-is-mariadb-galera-cluster/)
- [Replication Manager for PostgreSQL Clusters](http://repmgr.org/)

## MySQL
### MySQL on Twitter
- [twitter.com/MySQL](https://twitter.com/MySQL)
- [twitter.com/ScriptingMySQL](https://twitter.com/ScriptingMySQL)

### MySQL Blogs
- [MySQL Server Team 🌟](http://mysqlserverteam.com/)
- [InsideMySQL.com](http://insidemysql.com)
- [mysqlblog.fivefarmers.com](http://mysqlblog.fivefarmers.com)

### MySQL Tutorials
- [Syadmincasts: Crash Course on MySQL](https://sysadmincasts.com/episodes/38-crash-course-on-mysql)
- [Tutorialspoint.com - MySQL Tutorial](http://www.tutorialspoint.com/mysql/index.htm)

### MySQL Books
- [highperfmysql.com - High Performance MySQL. Learn to Build Fast, Reliable, Scalable Systems with MySQL](http://www.highperfmysql.com/)
- [High Performance MySQL, 3rd Edition](http://it-ebooks.info/book/676/)

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">LOL. Sql server on Linux. <a href="https://twitter.com/hashtag/Linux?src=hash">#Linux</a> <a href="https://twitter.com/hashtag/Sysadmin?src=hash">#Sysadmin</a> <a href="https://twitter.com/hashtag/Kernel?src=hash">#Kernel</a> <a href="https://twitter.com/hashtag/Humor?src=hash">#Humor</a> Via <a href="https://t.co/Yac4YcWurx">https://t.co/Yac4YcWurx</a> <a href="https://t.co/jR7C2eqnvp">pic.twitter.com/jR7C2eqnvp</a></p>&mdash; nixCraft (@nixcraft) <a href="https://twitter.com/nixcraft/status/707842565865754624">marzo 10, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

### MySQL Cluster. MySQL Replication
- [mysqlhighavailability.com](http://mysqlhighavailability.com)
- [Download MySQL Cluster](http://dev.mysql.com/downloads/cluster/)
- [MySQL Cluster 7.4 Release Notes](http://dev.mysql.com/doc/relnotes/mysql-cluster/7.4/en/preface.html)
- [MySQL Cluster 7.4.9 has been released](https://ossnews.net/s/ixbtfi/mysql_cluster_7_4_9_has_been_released)
- [dba.stackexchange.com: Configuring MySQL Cluster](http://dba.stackexchange.com/questions/126576/configuring-mysql-cluster)
- [Running an optimized MariaDB (MySQL) cluster on Azure (November 2014)](http://sabbour.me/running-a-mariadb-cluster-on-azure/)
- [maquinasvirtuales.eu: Mysql Cluster Configuration](http://www.maquinasvirtuales.eu/mysql-cluster-configuration/)
- [tecmint.com: How to Setup MySQL (Master-Slave) Replication in RHEL, CentOS, Fedora](http://www.tecmint.com/how-to-setup-mysql-master-slave-replication-in-rhel-centos-fedora/)
- [10 Tips for Deciding Between Amazon RDS and MySQL (2012)](https://dzone.com/articles/10-tops-deciding-between)

[![MySQL Cluster](images/MySQL_Cluster.png)](https://en.wikipedia.org/wiki/MySQL_Cluster)

<div class="container">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/6FPvhRhZSnmra9" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/andrewjamesmorgan/whats-new-in-my-sql-cluster-74-webinar" title="What&#x27;s new in MySQL Cluster 7.4 webinar charts" target="_blank">What&#x27;s new in MySQL Cluster 7.4 webinar charts</a> </strong> from <strong><a href="//www.slideshare.net/andrewjamesmorgan" target="_blank">Andrew Morgan</a></strong> </div>
</div> 
<br/>

<div class="container">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/G2T6Xkz9nLsJ2f" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/kerneltraining/mysql-cluster-47869001" title="|MySQL DBA Cluster| Introduction to MySQL DBA Cluster|" target="_blank">|MySQL DBA Cluster| Introduction to MySQL DBA Cluster|</a> </strong> from <strong><a href="//www.slideshare.net/kerneltraining" target="_blank">Kernel Training</a></strong> </div>
</div> 
<br/>

### MySQL metrics
- [Box Anemometer](https://github.com/box/Anemometer)

### MySQL Best Practices
- [Top 20+ MySQL Best Practices](http://code.tutsplus.com/tutorials/top-20-mysql-best-practices--net-7855)
- [What Every Data Scientist Needs to Know about SQL](http://joshualande.com/data-science-sql/)
- [MySQL very high CPU usage (and other processes)](http://www.corrspt.com/blog/2015/07/01/mysql-very-high-cpu-usage/)
- [It’s the Hardware, idiot! Increasing MySQL Performance](http://www.monitis.com/blog/2012/09/04/hardware-solutions-for-increasing-mysql-performance/)
- [MySQL 5.7: Improved Performance of Queries with Derived Tables](http://mysqlserverteam.com/mysql-5-7-improved-performance-of-queries-with-derived-tables/)
- [Anemometer: MySQL Slow Query Monitor](http://olindata.com/blog/2014/07/anemometer-mysql-slow-query-monitor)
- [Find and remove duplicate indexes](https://www.percona.com/blog/2012/06/20/find-and-remove-duplicate-indexes/)
- [generatedata.com via percona.com: Generating test data for MySQL tables](https://www.percona.com/blog/2014/02/10/generating-test-data-mysql-tables/)
- [MySQL Indexing Explained](https://blog.viaduct.io/mysql-indexes-primer/)
- [Use MySQL’s Strict Mode on all new Projects! get a better, more modern SQL experience](http://blog.jooq.org/2014/11/20/use-mysqls-strict-mode-on-all-new-projects/)
- [Terrible choices: MySQL (for Django)](https://www.reddit.com/r/Python/comments/2qm448/terrible_choices_mysql_for_django)
- [MySQL for Excel 1.3.5](http://insidemysql.com/mysql-for-excel-1-3-5-has-been-released/)
	- [MySQL for Visual Studio 1.2.6 has been released](http://insidemysql.com/mysql-for-visual-studio-1-2-6-has-been-released/)
- [Python Mysql Connector](http://jasonralph.org/?p=291)
- [Migrating from PostgreSQL to MySQL](http://www.tocker.ca/2013/09/05/migrating-from-postgresql-to-mysql.html)

### MySQL/MariaDB Performance Tuning and Optimization Tips
- [15 Useful MySQL/MariaDB Performance Tuning and Optimization Tips](http://www.tecmint.com/mysql-mariadb-performance-tuning-and-optimization)

[![generatedata.com](images/generatedata.jpg)](https://www.percona.com/blog/2014/02/10/generating-test-data-mysql-tables/)

## MariaDB
### MariaDB Replication
- [tecmint.com: Setup MariaDB (Master-Slave) Replication in CentOS/RHEL 7 and Debian 8](http://www.tecmint.com/mariadb-master-slave-replication-on-centos-rhel-debian/)
- [Enabling GTIDs for server replication in MariaDB 10.0](https://mariadb.com/blog/enabling-gtids-server-replication-mariadb-100)
- [MariaDB 10 GTID Explained](https://mariadb.com/blog/mariadb-10-gtid-explained)

<div class="container">
<iframe src="//es.slideshare.net/slideshow/embed_code/key/baUs72FfkzmI7n" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//es.slideshare.net/MariaDB/the-mysql-mariadb-story" title="The MySQL - MariaDB story" target="_blank">The MySQL - MariaDB story</a> </strong> from <strong><a href="//es.slideshare.net/MariaDB" target="_blank">MariaDB</a></strong> </div>
</div> 
<br/>

<div class="container">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/2MeB8NuwZS2Ult" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/bytebot/the-complete-mariadb-server-tutorial-percona-live-2015" title="The Complete MariaDB Server Tutorial - Percona Live 2015" target="_blank">The Complete MariaDB Server Tutorial - Percona Live 2015</a> </strong> from <strong><a href="//www.slideshare.net/bytebot" target="_blank">Colin Charles</a></strong> </div>
</div> 
<br/>

<div class="container">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/hQ0DFrgzBrFeOX" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/AmazonWebServices/dat209-new-launch-introducing-mariadb-on-amazon-rds" title="(DAT209) NEW LAUNCH! Introducing MariaDB on Amazon RDS" target="_blank">(DAT209) NEW LAUNCH! Introducing MariaDB on Amazon RDS</a> </strong> from <strong><a href="//www.slideshare.net/AmazonWebServices" target="_blank">Amazon Web Services</a></strong> </div>
</div> 
<br/>

<div class="container">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/qvliLATuLU81dv" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/Severalnines/webinar-slides-replication-topology-changes-for-mysql-and-mariadb" title="Webinar slides: Replication Topology Changes for MySQL and MariaDB" target="_blank">Webinar slides: Replication Topology Changes for MySQL and MariaDB</a> </strong> from <strong><a href="//www.slideshare.net/Severalnines" target="_blank">Severalnines AB</a></strong> </div>
</div> 
<br/>

<div class="container">
<iframe src="//es.slideshare.net/slideshow/embed_code/key/201xYQfKi6hy7E" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//es.slideshare.net/MariaDB/mariadb-replication-state-of-the-art" title="MariaDB/MySQL Replication - State of the art" target="_blank">MariaDB/MySQL Replication - State of the art</a> </strong> from <strong><a href="//es.slideshare.net/MariaDB" target="_blank">MariaDB</a></strong> </div>
</div>
<br/>

<div class="container">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/3wcJIEV1AcU3G" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/Severalnines/deep-dive-into-how-to-monitor-mysql-or-mariadb-galera-cluster-percona-xtradb-cluster" title="Deep Dive Into How To Monitor MySQL or MariaDB Galera Cluster / Percona XtraDB Cluster" target="_blank">Deep Dive Into How To Monitor MySQL or MariaDB Galera Cluster / Percona XtraDB Cluster</a> </strong> from <strong><a href="//www.slideshare.net/Severalnines" target="_blank">Severalnines AB</a></strong> </div>
</div>
<br/>

<div class="container">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/k3rtYIDmDD2C80" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/MariaDB/roadshow-einfhrung-dezember-2015" title="Roadshow Einführung - Dezember 2015 " target="_blank">Roadshow Einführung - Dezember 2015 </a> </strong> from <strong><a href="//www.slideshare.net/MariaDB" target="_blank">MariaDB</a></strong> </div>
</div> 
<br/>

<div class="container">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/of0AgvxAReq7yv" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/MariaDB/optimale-hochverfugbarkeitsverfahren-dezember-2015" title="Optimale Hochverfügbarkeitsverfahren - Dezember 2015" target="_blank">Optimale Hochverfügbarkeitsverfahren - Dezember 2015</a> </strong> from <strong><a href="//www.slideshare.net/MariaDB" target="_blank">MariaDB</a></strong> </div>
</div>
<br/>

## PostgreSQL
### PostgreSQL on Twitter
- [twitter.com/postgresql](https://twitter.com/postgresql)

### PostgreSQL refs
- [gettopical.com: PostgreSQL latest news](http://gettopical.com/postgresql)
- [PostgreSQL docs](http://www.postgresql.org/docs/)
- [SQL Monitoring in PostgreSQL. Identify long running queries](http://blog.dbi-services.com/sql-monitoring-in-postgresql-1-the-logging-system/)
- [PGCon](http://www.pgcon.org)
- [PGCon 2014: PostgreSQL and SQLite](http://www.pgcon.org/2014/schedule/attachments/319_PGCon2014OpeningKeynote.pdf)
- [NoSQL vs. Postgres](https://jaxenter.com/nosql-vs-postgres-121967.html)
- [talks: NoSQL as Not Only SQL](https://github.com/sjstoelting/talks/blob/master/no-sql-as-not-only-sql/NoSQL-as-Not-Only-SQL.pdf)
- [SQL Tabs: Rich SQL console for Postgresql](http://www.sqltabs.com/)
- [Minicurso de PostgreSQL - Parte 4 - tuning](https://blog.infranetworking.com/tuning-de-postgresql/)
- [CrudGen 1.0 un generador de CRUD para Postgresql](http://skatox.com/blog/2014/12/25/crudgen-1-0-generador-de-crud-para-postgresql/)
- Command to start PostgreSQL 9.4 database cluster manually

		sudo pg_ctlcluster 9.4 main start

- [dba.stackexchange.com: Restore PostgreSQL database (or db names) to new version, from files?](http://dba.stackexchange.com/questions/124093/restore-postgresql-database-or-db-names-to-new-version-from-files)
- [Node, Postgres, MassiveJS - a Better Database Experience](http://www.craigkerstiens.com/2015/11/30/massive-node-postgres-an-overview-and-intro/)
- [Postgres full-text search](http://blog.garage-coding.com/2015/12/18/postgres-fulltext-search.html)
- [dba.stackexchange.com: Postgresql join removal](http://dba.stackexchange.com/questions/123896/postgresql-join-removal)
- [Using Repository pattern to migrate Rails app from MongoDB to PostgreSQL](https://www.amberbit.com/blog/2015/11/30/using-repository-pattern-to-migrate-rails-app-from-mongodb-to-postgresql/)
- [MongoDB 3.2: Now Powered by PostgreSQL](https://www.linkedin.com/pulse/mongodb-32-now-powered-postgresql-john-de-goes)
- [PostgreSQL Studio, web based postgresql development](http://www.postgresqlstudio.org/)
- [Introduction to PostgreSQL physical storage](http://rachbelaid.com/introduction-to-postgres-physical-storage/)
- [Differences between PostgreSQL & MySQL Server](http://www.articlesbase.com/databases-articles/differences-between-postgresql-mysql-server-7377764.html)

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">Good read for anyone storing jsonb data in postgresql <a href="https://t.co/uPu1R3MuH3">https://t.co/uPu1R3MuH3</a></p>&mdash; MΛHDI (@myusuf3) <a href="https://twitter.com/myusuf3/status/699354734042296324">febrero 15, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

### PostgreSQL Metrics
- [Powa: PostgreSQL Workload Analyzer](http://dalibo.github.io/powa/)
- [Spotify PostgreSQL Metrics](https://github.com/spotify/postgresql-metrics)
- [server side part of `heroku pg:diagnose`](https://github.com/heroku/pgdiagnose)
- [Pome: a Postgres Metrics Dashboard](https://github.com/rach/pome)
- [Bucardo](https://bucardo.org/wiki/Check_postgres)

### UPSERT on Postgres 9.5
- [postgresql.org: PostgreSQL 9.5: UPSERT, Row Level Security, and Big Data](http://www.postgresql.org/about/news/1636/)
- [UPSERT on Postgres 9.5](http://blog.andrebarbosa.co/upsert-on-postgres-9-5/)
- [wiki.postgresql.org: UPSERT on Postgres 9.5](https://wiki.postgresql.org/wiki/What's_new_in_PostgreSQL_9.5#INSERT_..._ON_CONFLICT_DO_NOTHING.2FUPDATE_.28.22UPSERT.22.29)
- [PostgreSQL 9.5: UPSERT, Row Level Security, and Big Data](http://www.prnewswire.com/news-releases/postgresql-95-upsert-row-level-security-and-big-data-300200819.html)
- [Postgres 9.5 - the Feature Rundown: row level security policies, grouping sets and upsert](http://www.craigkerstiens.com/2015/12/27/postgres-9-5-feature-rundown/)

[![mixing indexes](images/mixing_indexes.jpg)](http://www.commitstrip.com)

<div class="container">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/nBAfrakRBpOJpF" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/EnterpriseDB/overview-of-postgres-95" title="Overview of Postgres 9.5 " target="_blank">Overview of Postgres 9.5 </a> </strong> from <strong><a href="//www.slideshare.net/EnterpriseDB" target="_blank">EnterpriseDB</a></strong> </div>
</div>
<br/>

<div class="container">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/l9V806fi6YhWhj" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/fuzzycz/performance-improvements-in-postgresql-95-and-beyond" title="Performance improvements in PostgreSQL 9.5 and beyond" target="_blank">Performance improvements in PostgreSQL 9.5 and beyond</a> </strong> from <strong><a href="//www.slideshare.net/fuzzycz" target="_blank">Tomas Vondra</a></strong> </div>
</div>
<br/>

<div class="container">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/nsgdgjJxhXf3kJ" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/StefanieJanineStltin/json-by-example" title="JSON By Example" target="_blank">JSON By Example</a> </strong> from <strong><a href="//www.slideshare.net/StefanieJanineStltin" target="_blank">Stefanie Janine Stölting</a></strong> </div>
</div> 
<br/>

<div class="container">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/wFiyvd4MGMp91P" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen class="video"> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/alexeylesovsky/postgresql-streaming-replication-cheatsheet" title="PostgreSQL Streaming Replication Cheatsheet" target="_blank">PostgreSQL Streaming Replication Cheatsheet</a> </strong> from <strong><a href="//www.slideshare.net/alexeylesovsky" target="_blank">Алексей Лесовский</a></strong> </div>
</div>
<br/>

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">Postgres Query Plan Visualization • <a href="https://twitter.com/AlexTatiyants">@AlexTatiyants</a><a href="https://t.co/Iuowk0u3rh">https://t.co/Iuowk0u3rh</a><br><br>Looks very promising! <a href="https://t.co/OeEhqQjS47">pic.twitter.com/OeEhqQjS47</a></p>&mdash; SQL Performance Tips (@SQLPerfTips) <a href="https://twitter.com/SQLPerfTips/status/691217946224541696">enero 24, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

## SQLite
- [Five reasons you should use SQLite in 2016](http://charlesleifer.com/blog/five-reasons-you-should-use-sqlite-in-2016/)
- [SQL As Understood By SQLite](https://www.sqlite.org/lang.html)
- [Books About SQLite](http://www.sqlite.org/books.html)

## TinyDB
- [TinyDB:](http://tinydb.readthedocs.org) a pure Python document (i.e., JSON) database for simple local storage

## Oracle
- [allthingsoracle.com 🌟](http://allthingsoracle.com)
- [Oracle’s OPT_ESTIMATE hint: Usage Guide](http://www.pythian.com/blog/oracles-opt_estimate-hint-usage-guide/)

### Oracle installation
- [slideshare.net: Oracle11g on fedora14](http://www.slideshare.net/KhalidMatarAlbuflasah/oracle11g-on-fedora14-6564836)

### Oracle ASM
- [orasite.com: Instalar y configurar ASMLib en Red Hat - Oracle RAC - Orasite.com](http://www.orasite.com/oracle-rac/instalar-y-configurar-asmlib-en-red-hat)
- [Oracle ASM - yet another LVM (system configuration)](http://it.toolbox.com/blogs/unix-swing/oracle-asm-yet-another-lvm-system-configuration-37846)
- [How to create a Oracle Database on LVM | Oracle-Hands-On](https://oraclehandson.wordpress.com/2010/08/25/how-to-create-a-oracle-database-on-lvm/)
- [docs.oracle.com: Preparing Storage for ASM](http://docs.oracle.com/cd/B28359_01/server.111/b31107/asmprepare.htm)
- [Overview of Oracle Database Installation](https://docs.oracle.com/database/121/NTDBI/intro.htm#NTDBI2637)
- [What is Oracle Automatic Storage Management | Nikolay Manchev](http://manchev.org/2011/08/what-is-oracle-automatic-storage-management/)
- [ORACLE-BASE - Oracle ASM Cluster File Systems (ACFS) in Oracle Database 11g Release 2](https://oracle-base.com/articles/11g/acfs-11gr2)
- [Oracle ASM Configuration Assistant](https://docs.oracle.com/cd/E18786_01/doc/server.112/e16102/asmca.htm)
- [Oracle ACFS Command-Line Tools](https://docs.oracle.com/cd/E11882_01/server.112/e18951/asmfs_util.htm)
- [orafaq.com: Automatic Storage Management](http://www.orafaq.com/wiki/Automatic_Storage_Management)

### LVM2 vs Oracle ASM
- [Introduction to Logical Volume Manager with Oracle Linux | Nikolay Manchev](http://manchev.org/2011/11/introduction-to-logical-volume-manager/)
- [Tuning Oracle Database 10g on Linux Using ASM](http://www.rampant-books.com/art_scalzo_tuning_oracle_database_10g_on_linux_using_asm.htm)

### Oracle ASM Disaster Recovery
- [Oracle ASM « Ronny Egner's Blog](https://ronnyegner.wordpress.com/category/oracle-asm/)
- [Flash Recovery Area - Wikipedia, the free encyclopedia](https://en.wikipedia.org/wiki/Oracle_Flashback#Flash_Recovery_Area)

### ASM Cluster File System
- [DBA Tips Archive for Oracle](http://www.idevelopment.info/data/Oracle/DBA_tips/Automatic_Storage_Management/ASM_50.shtml#Oracle%20ASM%20Dynamic%20Volume%20Manager%20%28ADVM%29)

### Oracle ADVM
- [DBA Tips Archive for Oracle](https://oracle-base.com/articles/10g/oracle-db-10gr2-rac-installation-on-centos-4-using-vmware#create_shared_disks)
- [ORACLE-BASE - Oracle 10g RAC On Linux Using VMware Server](https://oracle-base.com/articles/10g/oracle-db-10gr2-rac-installation-on-centos-4-using-vmware#create_shared_disks)

### Upstart and Oracle
- [Oracle GI 11.2.0.3 + Upstart on Oracle Linux 6](http://it.toolbox.com/blogs/surachart/oracle-gi-11203-upstart-on-oracle-linux-6-48576)

### Oracle Grid ASM
- [Oracle Grid Infrastructure](https://docs.oracle.com/cd/E56676_01/html/E56737/gjcwv.html)
- [Preparing Storage for ASM](http://docs.oracle.com/cd/B28359_01/server.111/b31107/asmprepare.htm)

### Oracle ASMCMD
- [ASMCMD examples « Oracle DBA – Tips and Techniques](http://gavinsoorma.com/2009/09/asmcmd-examples/)
- [ASMCMD.pdf (objeto application/pdf)](http://www.oracleyyo.com/media/blogs/oracleyyo/ArchivosBlog/Pdf/ASMCMD.pdf)

### Oracle ASMCA
- [Oracle ASM Configuration Assistant](https://docs.oracle.com/cd/E18786_01/doc/server.112/e16102/asmca.htm)
- [oracle-base.com: ORACLE-BASE - Oracle ASM Cluster File Systems (ACFS) in Oracle Database 11g Release 2](https://oracle-base.com/articles/11g/acfs-11gr2)

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">[<a href="https://twitter.com/hashtag/e?src=hash">#e</a>-Book] Why businesses are moving their <a href="https://twitter.com/hashtag/databases?src=hash">#databases</a> to the <a href="https://twitter.com/hashtag/cloud?src=hash">#cloud</a>: <a href="https://t.co/I93Xqluu3g">https://t.co/I93Xqluu3g</a> <a href="https://twitter.com/hashtag/DBaaS?src=hash">#DBaaS</a> <a href="https://twitter.com/hashtag/OracleCloud?src=hash">#OracleCloud</a> <a href="https://t.co/ImCB0mDmlQ">pic.twitter.com/ImCB0mDmlQ</a></p>&mdash; Oracle (@Oracle) <a href="https://twitter.com/Oracle/status/698281196946460672">febrero 12, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">Listen in as <a href="https://twitter.com/chrisrsaxon">@chrisrsaxon</a> explains why storing dates as strings can cause unexpected errors. <a href="https://t.co/JQxiKc1t60">https://t.co/JQxiKc1t60</a></p>&mdash; Oracle Database (@OracleDatabase) <a href="https://twitter.com/OracleDatabase/status/699662091108507648">febrero 16, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">Have you checked out this <a href="https://twitter.com/hashtag/DB12c?src=hash">#DB12c</a> <a href="https://twitter.com/hashtag/multitenant?src=hash">#multitenant</a> [<a href="https://twitter.com/hashtag/video?src=hash">#video</a>] series? <a href="https://t.co/8XsSgM85hE">https://t.co/8XsSgM85hE</a> <a href="https://t.co/HIauTRAq4J">pic.twitter.com/HIauTRAq4J</a></p>&mdash; Oracle Database (@OracleDatabase) <a href="https://twitter.com/OracleDatabase/status/697511639084453888">febrero 10, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">Learn &amp; share <a href="https://twitter.com/hashtag/SQL?src=hash">#SQL</a> on <a href="https://twitter.com/hashtag/DB12c?src=hash">#DB12c</a>. Straight from your browser. For Free. <a href="https://t.co/4sB9Q3CltL">https://t.co/4sB9Q3CltL</a> <a href="https://t.co/LNplLTjo8a">pic.twitter.com/LNplLTjo8a</a></p>&mdash; Oracle Database (@OracleDatabase) <a href="https://twitter.com/OracleDatabase/status/696801941821599744">febrero 8, 2016</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet tw-align-center" data-lang="es"><p lang="en" dir="ltr">Oracle Execution Plans: Part 1 Finding plans<a href="https://t.co/uf0jJPEYH8">https://t.co/uf0jJPEYH8</a><br><br>First out of twelve parts on how to work with… <a href="https://t.co/4QQS1y8NFh">pic.twitter.com/4QQS1y8NFh</a></p>&mdash; SQL Performance Tips (@SQLPerfTips) <a href="https://twitter.com/SQLPerfTips/status/712305655382724609">22 de marzo de 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

# NoSQL and NewSQL 
- [NoSQL and NewSQL](nosql.md)

[![Visual_SQL_JOINS](images/Visual_SQL_JOINS_orig.jpg)](http://www.codeproject.com/Articles/33052/Visual-Representation-of-SQL-Joins)
