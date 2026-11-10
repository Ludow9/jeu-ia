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
(colle-le ici)
```

- Fichiers que l'agent a modifiés :
- Ce que j'ai relu dans les changements avant d'accepter :
- Ce que j'ai refusé, corrigé ou fait refaire :
- Mon jeu après l'agent (une phrase) :

## Défi 5 - Pull request et revue

- Lien de ma pull request :
- Commentaire de la revue Copilot que j'ai traité (le texte) :
- Ma décision (corrigé ou refusé) et pourquoi :
- Lien de mon jeu publié :

## Bilan (3 lignes maximum)

- Ce que l'assistant a fait mieux ou plus vite que moi :
- Ce qu'il a mal fait ou ce que j'ai dû corriger :
- Ce que je ne lui laisserais pas faire :
