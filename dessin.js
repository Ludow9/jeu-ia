// Dessin du décor, du panier et des objets. Tout est tracé au canvas.

const etoiles = [];
for (let i = 0; i < 64; i++) {
  etoiles.push({ x: Math.random() * LARGEUR, y: Math.random() * HAUTEUR * 0.6, taille: Math.random() + 0.5, phase: Math.random() * 6.28 });
}
function dessinerFond(ctx, temps) {
  const degrade = ctx.createLinearGradient(0, 0, 0, HAUTEUR);
  degrade.addColorStop(0, "#58445a");
  degrade.addColorStop(0.52, COULEURS.fond);
  degrade.addColorStop(1, "#17131b");
  ctx.fillStyle = degrade;
  ctx.fillRect(0, 0, LARGEUR, HAUTEUR);

  const horizon = HAUTEUR * 0.58;
  const halo = ctx.createRadialGradient(LARGEUR / 2, horizon, 4, LARGEUR / 2, horizon, LARGEUR * 0.8);
  halo.addColorStop(0, "rgba(244, 208, 111, 0.2)");
  halo.addColorStop(0.5, "rgba(217, 138, 95, 0.08)");
  halo.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = halo;
  ctx.fillRect(0, 0, LARGEUR, HAUTEUR);

  for (const etoile of etoiles) {
    const lueur = 0.2 + 0.4 * Math.abs(Math.sin(temps + etoile.phase));
    ctx.fillStyle = "rgba(245, 247, 255, " + lueur + ")";
    ctx.fillRect(etoile.x, etoile.y, etoile.taille, etoile.taille);
  }

  ctx.strokeStyle = COULEURS.grille;
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let i = -9; i <= 9; i++) {
    ctx.moveTo(LARGEUR / 2, horizon);
    ctx.lineTo(LARGEUR / 2 + i * 78, HAUTEUR);
  }
  ctx.stroke();
  for (let i = 0; i < 14; i++) {
    const avancee = (i + (temps * 0.3) % 1) / 14;
    const y = horizon + Math.pow(avancee, 2.3) * (HAUTEUR - horizon);
    ctx.globalAlpha = 0.12 + avancee * 0.5;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(LARGEUR, y);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;

  ctx.save();
  ctx.shadowColor = COULEURS.or;
  ctx.shadowBlur = 16;
  ctx.strokeStyle = "rgba(244, 208, 111, 0.5)";
  ctx.beginPath();
  ctx.moveTo(0, horizon);
  ctx.lineTo(LARGEUR, horizon);
  ctx.stroke();
  ctx.restore();
}
function dessinerPanier(ctx, panier, temps) {
  const inclinaison = Math.max(-0.2, Math.min(0.2, panier.vitesse * 0.00025));
  ctx.save();
  ctx.translate(panier.x + panier.largeur / 2, panier.y + panier.hauteur / 2 + 8);
  ctx.rotate(inclinaison);
  ctx.shadowColor = "#8b6044";
  ctx.shadowBlur = 18;
  ctx.fillStyle = "#c99b73";
  ctx.beginPath();
  ctx.ellipse(0, 12, 38, 27, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#d9b08c";
  ctx.beginPath();
  ctx.ellipse(0, -25, 34, 31, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(-29, -43);
  ctx.lineTo(-27, -75);
  ctx.lineTo(-7, -55);
  ctx.moveTo(29, -43);
  ctx.lineTo(27, -75);
  ctx.lineTo(7, -55);
  ctx.fill();
  ctx.fillStyle = "#2a2028";
  ctx.beginPath();
  ctx.ellipse(-12, -28, 4, 7, 0, 0, Math.PI * 2);
  ctx.ellipse(12, -28, 4, 7, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#f4a6b8";
  ctx.beginPath();
  ctx.arc(0, -14, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#6b4a3b";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(-7, -10);
  ctx.lineTo(0, -7);
  ctx.lineTo(7, -10);
  ctx.stroke();
  ctx.strokeStyle = "#f5d6b3";
  ctx.beginPath();
  ctx.moveTo(-27, -13);
  ctx.lineTo(-48, -17);
  ctx.moveTo(-27, -8);
  ctx.lineTo(-49, -8);
  ctx.moveTo(27, -13);
  ctx.lineTo(48, -17);
  ctx.moveTo(27, -8);
  ctx.lineTo(49, -8);
  ctx.stroke();
  if (panier.bouclier) {
    ctx.shadowColor = COULEURS.bouclier;
    ctx.shadowBlur = 16;
    ctx.strokeStyle = COULEURS.bouclier;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(0, -2, 31, 0.15, Math.PI - 0.15);
    ctx.stroke();
    ctx.strokeStyle = "#f4d06f";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(0, -2, 29, 0.15, Math.PI - 0.15);
    ctx.stroke();
    ctx.fillStyle = "#f4d06f";
    ctx.beginPath();
    ctx.arc(0, 28, 5, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function dessinerCroquette(ctx, objet) {
  const largeur = objet.rayon * 1.55;
  const hauteur = objet.rayon * 0.9;
  ctx.rotate(objet.rotation);
  ctx.shadowColor = COULEURS.or;
  ctx.shadowBlur = 14;
  ctx.fillStyle = "#b96f32";
  ctx.beginPath();
  ctx.ellipse(0, 0, largeur, hauteur, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#7b421f";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = "#e7a84b";
  ctx.beginPath();
  ctx.arc(-5, -2, 2, 0, Math.PI * 2);
  ctx.arc(4, 3, 2, 0, Math.PI * 2);
  ctx.fill();
}
function dessinerGlacon(ctx, objet) {
  const r = objet.rayon;
  ctx.rotate(objet.rotation);
  ctx.shadowColor = COULEURS.glace;
  ctx.shadowBlur = 16;
  ctx.fillStyle = "rgba(155, 231, 255, 0.72)";
  ctx.beginPath();
  ctx.roundRect(-r, -r, r * 2, r * 2, 4);
  ctx.fill();
  ctx.strokeStyle = COULEURS.blanc;
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.strokeStyle = "rgba(255, 255, 255, 0.7)";
  ctx.beginPath();
  ctx.moveTo(-r * 0.55, -r * 0.35);
  ctx.lineTo(r * 0.45, r * 0.45);
  ctx.moveTo(r * 0.25, -r * 0.7);
  ctx.lineTo(-r * 0.25, r * 0.7);
  ctx.stroke();
}
function dessinerBriqueLait(ctx, objet) {
  const r = objet.rayon;
  ctx.rotate(objet.rotation * 0.35);
  ctx.shadowColor = COULEURS.or;
  ctx.shadowBlur = 18;
  ctx.fillStyle = "#fff8e8";
  ctx.fillRect(-r * 0.78, -r, r * 1.56, r * 2);
  ctx.fillStyle = "#d95763";
  ctx.fillRect(-r * 0.78, -r, r * 1.56, r * 0.4);
  ctx.fillStyle = "#6b4a3b";
  ctx.font = "700 " + Math.round(r * 0.7) + "px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("LAIT", 0, r * 0.45);
  ctx.strokeStyle = "#6b4a3b";
  ctx.lineWidth = 2;
  ctx.strokeRect(-r * 0.78, -r, r * 1.56, r * 2);
}
function dessinerCollier(ctx, objet) {
  const r = objet.rayon;
  ctx.rotate(objet.rotation * 0.25);
  ctx.shadowColor = COULEURS.bouclier;
  ctx.shadowBlur = 18;
  ctx.strokeStyle = COULEURS.bouclier;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(0, -r * 0.1, r * 0.82, 0.15, Math.PI - 0.15);
  ctx.stroke();
  ctx.fillStyle = "#f4d06f";
  ctx.strokeStyle = "#8b5a2b";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(0, r * 0.55, r * 0.3, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = COULEURS.bouclier;
  ctx.beginPath();
  ctx.arc(0, r * 0.55, r * 0.1, 0, Math.PI * 2);
  ctx.fill();
}
function dessinerChien(ctx, objet, temps) {
  const r = objet.rayon * (1 + 0.06 * Math.sin(temps * 8 + objet.pulsation));
  ctx.shadowColor = COULEURS.rouge;
  ctx.shadowBlur = 20;
  ctx.fillStyle = "#a8754f";
  ctx.beginPath();
  ctx.ellipse(0, 2, r, r * 0.86, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(-r * 0.65, -r * 0.45);
  ctx.quadraticCurveTo(-r * 1.35, -r * 1.15, -r * 0.85, r * 0.35);
  ctx.moveTo(r * 0.65, -r * 0.45);
  ctx.quadraticCurveTo(r * 1.35, -r * 1.15, r * 0.85, r * 0.35);
  ctx.fill();
  ctx.fillStyle = "#2a2028";
  ctx.beginPath();
  ctx.ellipse(-r * 0.3, -r * 0.12, r * 0.12, r * 0.18, 0, 0, Math.PI * 2);
  ctx.ellipse(r * 0.3, -r * 0.12, r * 0.12, r * 0.18, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#3b241d";
  ctx.beginPath();
  ctx.ellipse(0, r * 0.3, r * 0.25, r * 0.18, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#f4a6b8";
  ctx.beginPath();
  ctx.arc(0, r * 0.35, r * 0.1, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = COULEURS.rouge;
  ctx.lineWidth = 2;
  ctx.stroke();
}
function dessinerCristal(ctx, objet, temps) {
  const r = objet.rayon;
  const dore = objet.type === DORE;
  const glace = objet.type === GLACE;
  const bouclier = objet.type === BOUCLIER;
  const couleur = dore ? COULEURS.or : glace ? COULEURS.glace : bouclier ? COULEURS.bouclier : COULEURS.cyan;
  const battement = 1 + 0.06 * Math.sin(temps * 5 + objet.pulsation);
  ctx.rotate(objet.rotation);
  ctx.scale(battement, battement);
  ctx.shadowColor = couleur;
  ctx.shadowBlur = 20;
  ctx.beginPath();
  ctx.moveTo(0, -r);
  ctx.lineTo(r * 0.62, 0);
  ctx.lineTo(0, r);
  ctx.lineTo(-r * 0.62, 0);
  ctx.closePath();
  ctx.fillStyle = dore ? "rgba(255, 209, 102, 0.22)" : glace ? "rgba(155, 231, 255, 0.28)" : bouclier ? "rgba(184, 107, 255, 0.28)" : "rgba(40, 240, 255, 0.2)";
  ctx.fill();
  ctx.strokeStyle = couleur;
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = COULEURS.blanc;
  ctx.beginPath();
  ctx.arc(0, 0, r * 0.28, 0, Math.PI * 2);
  ctx.fill();
  if (glace) {
    ctx.strokeStyle = COULEURS.blanc;
    ctx.lineWidth = 1.5;
    for (let i = 0; i < 3; i++) {
      const angle = i * Math.PI / 3;
      ctx.beginPath();
      ctx.moveTo(Math.cos(angle) * r * 0.72, Math.sin(angle) * r * 0.72);
      ctx.lineTo(-Math.cos(angle) * r * 0.72, -Math.sin(angle) * r * 0.72);
      ctx.stroke();
    }
  }
  if (bouclier) {
    ctx.strokeStyle = COULEURS.blanc;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-r * 0.48, 0);
    ctx.lineTo(r * 0.48, 0);
    ctx.moveTo(0, -r * 0.48);
    ctx.lineTo(0, r * 0.48);
    ctx.stroke();
  }
}
function dessinerBombe(ctx, objet, temps) {
  const r = objet.rayon * (1 + 0.09 * Math.sin(temps * 9 + objet.pulsation));
  ctx.rotate(objet.rotation * 0.4);
  ctx.shadowColor = COULEURS.rouge;
  ctx.shadowBlur = 22;
  ctx.strokeStyle = COULEURS.rouge;
  ctx.lineWidth = 3;
  ctx.beginPath();
  for (let i = 0; i < 8; i++) {
    const angle = i * Math.PI / 4;
    ctx.moveTo(Math.cos(angle) * r, Math.sin(angle) * r);
    ctx.lineTo(Math.cos(angle) * (r + 7), Math.sin(angle) * (r + 7));
  }
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fillStyle = "#1a0614";
  ctx.fill();
  ctx.strokeStyle = COULEURS.magenta;
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = COULEURS.rouge;
  ctx.beginPath();
  ctx.arc(0, 0, r * 0.34, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = COULEURS.blanc;
  ctx.beginPath();
  ctx.arc(-r * 0.12, -r * 0.12, r * 0.1, 0, Math.PI * 2);
  ctx.fill();
}
function dessinerObjet(ctx, objet, temps) {
  ctx.save();
  ctx.translate(objet.x, objet.y);
  if (objet.type === BOMBE) dessinerChien(ctx, objet, temps);
  else if (objet.type === CRISTAL) dessinerCroquette(ctx, objet);
  else if (objet.type === GLACE) dessinerGlacon(ctx, objet);
  else if (objet.type === DORE) dessinerBriqueLait(ctx, objet);
  else if (objet.type === BOUCLIER) dessinerCollier(ctx, objet);
  else dessinerCristal(ctx, objet, temps);
  ctx.restore();
}
