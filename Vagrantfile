# -*- mode: ruby -*-
# vi: set ft=ruby :

#
# Vagrantfile --- Basic Ubuntu Web Server
# Apache on /vagrant/webroot
#

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"
  config.vm.network "forwarded_port", guest: 80, host: 8080
  config.vm.provision "shell", inline: $shell
end

$shell = <<-'CONTENTS'
  apt-get update
  apt-get install -y apache2

  if ! [ -L /var/www/html ]; then
    rm -rf /var/www/html
    ln -fs /vagrant/webroot /var/www/html
  fi
CONTENTS

# 2018.02.04-DEA
