Dans config.js, ajouter le type GLACE, sa couleur et ses réglages : rareté 0,02, ralentissement à 50 %, durée de 4 secondes.
Dans jeu.js, faire apparaître le cristal de glace dans creerObjet(), en le rendant plus rare que le doré.
Dans mettreAJour(), appliquer le ralentissement uniquement à la vitesse de chute de tous les objets pendant 4 secondes.
Dans toucherObjet(), activer l’effet lorsque le cristal de glace est attrapé, sans perdre de vie.
Dans dessin.js, dessiner le cristal de glace avec une couleur distincte.
Ajouter éventuellement un son dédié dans audio.js, puis vérifier les fichiers JavaScript avec node --check.