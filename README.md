# Projet : Développement du Front-end pour Orinoco

## Description
Orinoco est une entreprise de commerce en ligne cherchant à se démarquer des géants comme Amazon en créant des applications thématiques spécialisées. Ce projet consiste à développer un MVP (Minimum Viable Product) pour présenter une de ces applications à des investisseurs. En tant que développeur front-end, vous êtes chargé de l'interface utilisateur tandis que Jeanne s'occupe du back-end.

## Équipe projet
- **Paul** : Fondateur de Orinoco, initiateur du projet.
- **Jeanne** : Développeuse back-end, responsable de l'intégration des API.
- **Moi** : Développeur front-end, en charge du développement de l'interface utilisateur et des interactions.

## Fonctionnalités Principales
- **Page produit** : Présentation des produits avec utilisation des paramètres de requête de l'URL pour afficher les détails.
- **Panier d’achat** : Gestion du panier à l'aide de `localStorage` pour sauvegarder les articles sélectionnés.
- **Interface responsive** : Conception d'une interface fluide et adaptée à toutes les tailles d'écran.
- **Plan de tests** : Mise en place d'un plan de tests pour garantir le bon fonctionnement des différentes fonctionnalités du site.

## Contraintes Techniques
- **LocalStorage** : Utilisation de `localStorage` pour conserver les articles ajoutés au panier entre les sessions.
- **Paramètres de requête URL** : Gestion des paramètres de l'URL pour afficher les informations sur la page produit.

## Recommandations de Développement
- **Éditeur recommandé** : Visual Studio Code avec extensions comme Live Server et Prettier pour faciliter le développement.
- **Technologies utilisées** : JavaScript pour la gestion du panier et l’affichage des produits, HTML/CSS pour la structure et le style.
- **Plan de tests** : Un plan de tests complet sera fourni pour s'assurer que les fonctionnalités principales fonctionnent correctement.
- **Versionnage** : Utilisation de Git pour le suivi des versions avec un dépôt GitHub pour une meilleure collaboration.

## Ressources supplémentaires
- [MDN - localStorage](https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage)

# Guide d'installation et de démarrage

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants sur votre machine :

- Node.js (v14 ou plus récent)
- npm (généralement inclus avec Node.js)

## Installation du projet

1. **Clonez le dépôt GitHub** :

   Ouvrez un terminal et exécutez la commande suivante pour cloner le projet sur votre machine locale :

   git clone https://github.com/nom-utilisateur/nom-repo.git

   Remplacez nom-utilisateur et nom-repo par les noms corrects de votre dépôt.

2. **Accédez au répertoire du projet** :

   Déplacez-vous dans le dossier du projet cloné avec la commande :

   cd nom-repo

3. **Installez les dépendances** :

   Une fois dans le répertoire du projet, exécutez la commande suivante pour installer toutes les dépendances nécessaires :

   npm install

   Cela installera toutes les bibliothèques et modules listés dans le fichier package.json.

Démarrage du serveur

1. **Lancez le serveur** :

   Après l'installation des dépendances, lancez le serveur avec la commande suivante :

   npm start

2. **Accédez à l'application** :

   Une fois le serveur démarré, ouvrez votre navigateur et rendez-vous à l'adresse suivante pour voir l'application :

   http://localhost:3000/index.html

   Vous devriez voir la page d'accueil de l'application Orinoco.
