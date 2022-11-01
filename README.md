# SpyFamily: Operation Coopcurrence

The project simulates 2 Networks which are using Raspberry Pis as it base.c attacking eachother with diffrent methods while defending themself with firewalls security configurations while carring web servers where the users can visit outside these Networks via Wifi. In addition there are also clients where one client of eachsite is the attacker trying to interude the other network. We hope you will have fun trying to rebuild this game for yourself when we are fineshed.

Web applications:

- 2x Web shop (Using nginx, mariadb)
- 2x ipv4 calculator as web application 
- 2x Grafana monitoring tool 


Used devices and operating systems in this project:

- 4x Raspberry pi4 B (1x FreeBSD 1x Debian 1x OpenWrt 1x Ubuntu)
- 2x Raspberry pi3 B (1x FreeBSD 1x Debian)
- 1x Raspberry pi2 b (1x OpenBSD)




Applcations used for attack:
- wireshark
- nmap
- sqlninja
- sqlmap
- zaproxy

Applications and functions for defense:
- firewall (pf on freebsd and ipsec on Gnu/Linux based)
- jail (freebsd)
- Systemd file hiding (GNU/Linux + Systemd)
- honeypot (both sides if there enaugh time)





