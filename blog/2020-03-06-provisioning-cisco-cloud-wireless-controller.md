---
slug: provisioning-cisco-cloud-wireless-controller
title: Provisioning Cisco Cloud Wireless Controller
authors: ecolazy
tags: [hola, docusaurus]
---

# Provisionnement du Contrôleur Cisco Cloud Wireless

Dans ce projet, notre objectif était de réussir l'installation et la configuration du contrôleur sans fil Cisco Catalyst c9800-CL à l'aide de la machine virtuelle basée sur le noyau (KVM - Kernel-based Virtual Machine). Le c9800-CL est un puissant contrôleur sans fil basé sur le cloud, capable de gérer à la fois les réseaux sans fil sur site et basés sur le cloud. Il appartient à la série Cisco Catalyst 9800 et offre une gamme de fonctionnalités avancées telles que la prévention des intrusions sans fil, les services de localisation et l'accès aux invités.

Pour commencer, nous avons installé un logiciel de virtualisation et activé le service libvirtd sur notre système. Cela nous a permis de créer et de gérer des machines virtuelles à l'aide de KVM. Ensuite, nous avons créé un pont réseau à l'aide de la commande brctl, ce qui a permis la communication entre la machine virtuelle et le système hôte.

Avec l'infrastructure nécessaire en place, nous avons utilisé la commande virt-install pour installer le c9800-CL sur une nouvelle machine virtuelle. Pendant le processus d'installation, nous avons spécifié plusieurs options telles que la connexion au serveur de virtualisation, la variante du système d'exploitation, l'architecture de la machine virtuelle et le type de processeur.

Une fois la machine virtuelle configurée et le c9800-CL installé, nous avons fourni un script pour configurer le contrôleur. Ce script contenait une série d'étapes nécessaires pour configurer correctement le c9800-CL. Ces étapes comprenaient la définition du nom d'hôte, la création d'un compte utilisateur, la configuration des interfaces Gigabit Ethernet, la création d'un VLAN, la configuration des routes statiques, l'arrêt et la réactivation des fréquences radio, et le réglage du code pays. Nous avons également configuré le contrôleur LAN sans fil virtuel (VWLC) et défini les serveurs DNS et NTP pour assurer une connectivité réseau et une synchronisation appropriées.

Enfin, nous avons montré comment accéder à l'interface graphique du c9800-CL à l'adresse IP spécifiée et avons expliqué les étapes de configuration initiale pour configurer un réseau sans fil. En suivant ces étapes, les utilisateurs peuvent facilement configurer le c9800-CL pour répondre aux besoins spécifiques de leur réseau sans fil.


#  Provisioning Cisco Cloud Wireless Controller

In this project, our aim was to successfully install and configure the Cisco Catalyst c9800-CL wireless controller using Kernel-based Virtual Machine (KVM). The c9800-CL is a powerful and flexible cloud-based wireless controller capable of managing both on-premises and cloud-based wireless networks. It belongs to the Cisco Catalyst 9800 series and offers a range of advanced features, such as wireless intrusion prevention, location services, and guest access.

To begin, we installed virtualization software and enabled the libvirtd service on our system. This allowed us to create and manage virtual machines using KVM. We then created a network bridge using the brctl command, enabling communication between the virtual machine and the host system.

With the necessary infrastructure in place, we used the virt-install command to install the c9800-CL on a new virtual machine. During the installation process, we specified several options, such as the connection to the virtualization server, the operating system variant, the architecture of the virtual machine, and the CPU type.

Once the virtual machine was set up and the c9800-CL was installed, we provided a script to configure the controller. This script contained a series of steps necessary to properly set up the c9800-CL. These steps included setting the hostname, creating a user account, configuring the Gigabit Ethernet interfaces, creating a VLAN, setting up static routes, shutting down and re-enabling the radio frequencies, and setting the country code. We also configured the virtual wireless LAN controller (VWLC) and set the DNS and NTP servers to ensure proper network connectivity and synchronization.

Finally, we demonstrated how to access the GUI of the c9800-CL at the specified IP address and walked through the zero-day configuration steps to set up a wireless network. By following these steps, users can easily configure the c9800-CL to meet the specific needs of their wireless network.








