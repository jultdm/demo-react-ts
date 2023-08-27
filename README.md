# Projet React de démo (front d'un petit projet réel anonymisé)

## lancement :

Pour lancer la démo :

- installer les dépendances : npm install
- démarrer le backend : node fakeBackEnd/index.js
- démarrer le frontend : npm run dev

## fonctionalités

- choix du type de restauration : détermine les recettes et la vidéo présentées,
- voir les recettes : page de contenu,
- retour à la home par click sur le logo (carré noir centré en haut)
- vidéo recettes : popin vidéo youtube,
- participer : lancement du jeu (3 questions, si toutes bonnes -> saisie des coordonnées + contact BE pour déterminaison du lot + affichage du lot, sinon : message informant d'erreur + proposition d'essayer à nouveau). NOTE : les bonnes réponses sont 1, 1, 2.
- liens du footer : page mentions légales et page règlement

## notes :

Pour ce projet, j'avais décidé de me passer de librairie de state management et avais implémenté un simili redux avec useReducer + useContext.

De la même manière, la navigation n'utilise pas le classique react-router-dom mais est simplement contrôlée par l'état.

J'avais développé le backend de ce projet sur une stack PHP / CodeIgniter / Mysql. Un backend de substitution est livré ici, il simule simplement que l'opération est ouverte (participation au jeu disponible) et qu'un lot a été gagné. Il n'y a vraiment rien à observer ici donc...

Dans le back réel, des contôles sont fait selon la date courante pour l'ouverture ou non du jeu et des contrôles de saisie sont fait suite au renseignement des information personnelles + une recherche de lot selon un principe d'instants gagnants et enfin, un envoi de mail est schedulé puis effectivement fait en s'appuyant sur l'api sendinblue.

Je reste à votre disposition pour tout complément d'information.

Mes coordonnées :

Tél : 06 28 04 1397  
e-mail : julien.moirenc@gmail.com
