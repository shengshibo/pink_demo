## Linux 常用命令总结
-- 嗯...今天突然想写以下 Linux 常用的命令，用于日常工作学习使用
### 删除文件夹
	使用rm -rf 目录名字 命令即可

	-r 就是向下递归，不管有多少级目录，一并删除
	-f 就是直接强行删除，不作任何提示的意思

	删除文件夹实例：rm -rf /var/log/httpd/access
	将会删除/var/log/httpd/access目录以及其下所有文件、文件夹

	删除文件使用实例：rm -f /var/log/httpd/access.log
	将会强制删除/var/log/httpd/access.log这个文件
### 从本地复制到远程
#### 复制文件命令格式
	指定了用户名，命令执行后需要再输入密码，第1个仅指定了远程的目录，文件名字不变，第2个指定了文件名；
		scp local_file remote_username@remote_ip:remote_folder
		或者
		scp local_file remote_username@remote_ip:remote_file
	没有指定用户名，命令执行后需要输入用户名和密码，第3个仅指定了远程的目录，文件名字不变，第4个指定了文件名；
		scp local_file remote_ip:remote_folder
		或者
		scp local_file remote_ip:remote_file
	实例：
		scp /home/space/music/1.mp3 root@www.runoob.com:/home/root/others/music
		scp /home/space/music/1.mp3 root@www.runoob.com:/home/root/others/music/001.mp3
		scp /home/space/music/1.mp3 www.runoob.com:/home/root/others/music
		scp /home/space/music/1.mp3 www.runoob.com:/home/root/others/music/001.mp3
#### 复制目录命令格式
	指定了用户名，命令执行后需要再输入密码；
		scp -r local_folder remote_username@remote_ip:remote_folder
	没有指定用户名，命令执行后需要输入用户名和密码；
		scp -r local_folder remote_ip:remote_folder
	实例：
		scp -r /home/space/music/ root@www.runoob.com:/home/root/others/
		scp -r /home/space/music/ www.runoob.com:/home/root/others/
### 从远程复制到本地
#### 复制文件命令格式
#### 复制目录命令格式
	换下位置即可，这个 scp 第一个是要操作的文件，第二个是复制到的位置
	加 -r 表示要操作的是文件夹
##### 注意：
	1. 如果远程服务器防火墙有为scp命令设置了指定的端口，我们需要使用 -P 参数来设置命令的端口号，命令格式如下：
		- #scp 命令使用端口号 4588
		- scp -P 4588 remote@www.runoob.com:/usr/local/sin.sh /home/administrator
	2. 使用scp命令要确保使用的用户具有可读取远程服务器相应文件的权限，否则scp命令是无法起作用的。