# Flesh and Blood
[![d6oVzrv.png](https://iili.io/d6oVzrv.png)](https://freeimage.host/fr)

#### À propos :

Projet demandé pendant une formation sur le thème du jeu de cartes Flesh and Blood, réalisé uniquement avec du JavaScript, HTML et CSS, en utilisant des fichiers JSON comme données.

# Maquettage :

Les couleurs utilisées :

    Couleur de fond pour la barre de navigation et le pied de page : #a7733f.
    Couleur du texte : #ecbe6e.

# Page 1 : Présentation

## Fetch du fichier JSON :

[![d6oxmp2.png](https://iili.io/d6oxmp2.png)](https://freeimage.host/fr)

On pousse les données recherchées dans la variable data, qui est initialement un tableau vide. On peut voir que l'URL de l'image se trouve dans un second index appelé "printings".

## Menu de navigation :

[![d6oagFS.png](https://iili.io/d6oagFS.png)](https://freeimage.host/fr)

La barre de navigation est importée via Flowbite et modifiée selon mes besoins.

## L'index :

Le site comporte un unique index où se trouvent le plateau de jeu et la main des deux joueurs, qui est générée aléatoirement (5 cartes chacun).

[![d6ov0Dx.png](https://iili.io/d6ov0Dx.png)](https://freeimage.host/fr)

La boucle for permet de parcourir les données 5 fois pour générer les deux mains aléatoires. On utilise le même code pour la main du joueur adverse.

[![d6xB8hX.png](https://iili.io/d6xB8hX.png)](https://freeimage.host/fr)
[![d6xqD0v.png](https://iili.io/d6xqD0v.png)](https://freeimage.host/fr)

Pour mieux voir les informations des cartes, on utilise une fonction CSS hover qui modifie l'échelle (scale) lorsque la souris passe sur l'objet en question.

## Construit avec

### Langages :

    JavaScript : https://developer.mozilla.org/fr/docs/Web/JavaScript
    HTML : https://developer.mozilla.org/fr/docs/Web/HTML
    CSS : https://developer.mozilla.org/fr/docs/Web/CSS#:~:text=CSS%20(pour%20Cascading%20Style%20Sheets,%2C%20MathML%2C%20ou%20XHTML).

### Frameworks :

    Tailwind : https://tailwindcss.com/
    Symfony : https://symfony.com/

### Logiciel :

    Visual Studio Code : https://code.visualstudio-com.translate.goog/?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=fr&_x_tr_pto=sc
