Responsive Addon
============

Responsive Add-on allows your side that based on eXo Platform 4.0.x display well with almost of small screen devicess 

<img src="https://github.com/exo-addons/responsive-addon/blob/master/screenshots/reponsive-addon-1.png" />

Prerequisites
---------------
The Add-on requires Platform 4.1.x. I’ve already tested it on Platform 4.1-M1 and 4.1-M2.


Deployment on eXo Platform
---------------

* Build a project using: mvn clean install

* Copy the responsive-extension.war file to the ${PLF_TOMCAT}/webapps directory.
* Copy the responsive-config-1.0.x.jar file to the ${PLF_TOMCAT}/lib directory.
* Start your tomcat using: ./start_eXo.sh

* Note: three files above are also available in responsive-addon/bundle/target/responsive.zip

