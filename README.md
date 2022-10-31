#SpyFamily: Operation Coopcurrence

The project simulates 2 Networks with few Webapplications where these networks attacking eachother with diffrent methods while defending themself with firewalls security configurations. 


Web applications:

- 2x Web shop (Using nginx, mariadb)
- 1x ipv4 calculator as web application 
- 2x Grafana monitoring tool 
- 2x Web testing sides (apache/nginx)

Used devices and operating systems in this project:

- 4x Raspberri pi4 B (1x FreeBSD 1x Debian 1x OpenWrt 1x Ubuntu)
- 2x Raspberri pi3 B (1x FreeBSD 1x Debian)

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





