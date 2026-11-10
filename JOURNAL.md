# Journal de bord

Nom et prénom : Blachère Dart Ludovic
Dépôt : https://github.com/Ludow9/jeu-ia
Outil utilisé (Copilot, modèle affiché) : Copilot

Règle : tu colles ici le texte exact de tes prompts (copier-coller, pas de capture). Une entrée par défi. Ce que tu n'as pas gardé compte autant que ce que tu as gardé.

## Défi 1 - Complétion

- Commentaire ou début de code que j'ai écrit :

```
// compte les cristaux attrapés dans la variable cristaux
```

- Ce que Copilot a proposé : if (objet.type === CRISTAL) {
    cristaux += 1;
  }
- Ce que j'ai accepté, modifié ou refusé, et pourquoi : if (objet.type === CRISTAL) {
    cristaux += 1;
  }
  en ajoutant la variable "cristaux"
- Comment j'ai vérifié que ça marche : En testant : le jeu a arrêté de crash

## Défi 2 - Ask

- Ma question (prompt exact) :

```
comment le combo est-il remis
à zéro ?
```

- Une affirmation de la réponse que j'ai vérifiée : Quand le joueur perd une vie : la fonction perdreVie() exécute directement combo = 0
- Comment je l'ai vérifiée (un changement dans le code, un test dans le jeu) : un test dans le jeu
- Résultat : exacte, fausse ou incomplète : exacte

## Défi 3 - Plan

- Mon prompt en mode Plan :

```
Je veux ajouter un cristal de glace, plus rare que le doré. Quand on l'attrape, tous les
objets ralentissent pendant 4 secondes, puis reprennent leur vitesse. Respecte les règles de
.github/copilot-instructions.md. Propose un plan sans modifier le code.
```

- Le plan est dans le fichier `PLAN.md`.
- Ce que j'ai changé dans le plan avant de le valider (étape retirée, ajoutée, contrainte) et pourquoi : j'ai supprimé l'étape 3 : "Ajouter un chronomètre de ralentissement réinitialisé au début de chaque partie." pour directement appliquer un ralentissement aux objets et non pas à tout le jeu.

## Défi 4 - Agent

- Mon prompt en mode Agent :

```
Applique PLAN.md.
```

- Fichiers que l'agent a modifiés : config.js, jeu.js, dessin.js, audio.js
- Ce que j'ai relu dans les changements avant d'accepter : J'ai vérifié qu'il ait bien suivi le plan (comme par exemple appliquer un ralentissement lorsque l'on récupère un cristal de glace)
- Ce que j'ai refusé, corrigé ou fait refaire : j'ai fait refaire le graphique du cristal de glace car il avait le même skin que les cristaux de base.
- Mon jeu après l'agent (une phrase) : mon jeu a maintenant un nouveau type de cristal, plus rare que les dorés.

- Mon deuxième prompt en mode Agent : 

```
ajoute un bouclier à mon jeu afin que lorsque le joueur en récupère un, il absorbe la bombe et en est protégé (ne perd pas de vie). mon jeu est actuellement un jeu où le joueur est une plateforme et où l'on doit récupérer des cristaux. Conserve tout ce qui est fait dans les fichiers en rajoutant un type de cristal bouclier qui ne fait que donner un bouclier au joueur. créé celà dans les fichier .js présents dans le projet.
```
- Fichiers que l'agent a modifiés : config.js, jeu.js, dessin.js, audio.js
- Ce que j'ai refusé, corrigé ou fait refaire : J'ai d'abord fait corriger le sens du bouclier (qui était trouné vers le bas) afin qu'il protège réellement le joueur, puis j'ai modifié les dessins des éléments (le panier devient un chat, les cristaux des croquettes, les cristaux de glace des glaçons, le bouclier un colier et les bombes un chien) 

## Défi 5 - Pull request et revue

- Lien de ma pull request :
- Commentaire de la revue Copilot que j'ai traité (le texte) :
- Ma décision (corrigé ou refusé) et pourquoi :
- Lien de mon jeu publié :

## Bilan (3 lignes maximum)

- Ce que l'assistant a fait mieux ou plus vite que moi :
- Ce qu'il a mal fait ou ce que j'ai dû corriger :
- Ce que je ne lui laisserais pas faire :
