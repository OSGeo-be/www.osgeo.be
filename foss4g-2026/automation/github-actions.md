# Automatisation — GitHub Actions

Ce dossier décrit comment automatiser les rappels de communication via GitHub Actions.

---

## Stratégie recommandée

```
GitHub Actions (cron)
    │
    ├─► Crée une Issue GitHub avec le texte à publier
    │       └── L'équipe comms reçoit une notification email
    │           → publie manuellement sur les canaux
    │           → ferme l'Issue quand c'est fait
    │
    ├─► POST direct → API Mastodon (fosstodon.org)
    │
    └─► POST direct → Matrix webhook
```

---

## Exemple : workflow de rappel automatique

Fichier à créer : `.github/workflows/comms-reminders.yml`

```yaml
name: Comms Reminders — FOSS4G 2026

on:
  schedule:
    # Rappel CfP ouverture — 7 juillet 2026 08:00 UTC
    - cron: '0 8 7 7 2026'
    # Rappel CfP J-7 — 3 août 2026 08:00 UTC
    - cron: '0 8 3 8 2026'
    # Rappel programme publié — 1 sept 2026
    - cron: '0 8 1 9 2026'
    # Rappel J-7 événement — 8 oct 2026
    - cron: '0 8 8 10 2026'
    # Rappel J-1 — 14 oct 2026
    - cron: '0 8 14 10 2026'
  workflow_dispatch:   # permet de déclencher manuellement

jobs:
  create-reminder-issue:
    runs-on: ubuntu-latest
    steps:
      - name: Créer une Issue de rappel
        uses: actions/github-script@v7
        with:
          script: |
            const today = new Date().toISOString().slice(0,10);
            await github.rest.issues.create({
              owner: context.repo.owner,
              repo: context.repo.repo,
              title: `[COMMS] Rappel communication — ${today}`,
              body: `## Action requise\n\nConsulter le calendrier : [communication/calendar.md](../foss4g-2026/communication/calendar.md)\n\nPublier le message prévu pour cette date sur tous les canaux, puis cocher dans le calendrier et fermer cette Issue.`,
              labels: ['comms', 'foss4g-2026'],
              assignees: []  // ajouter le·la responsable comms ici
            });
```

> ⚠️ Les expressions `cron` GitHub Actions ne supportent pas les années — adapter si besoin.  
> Alternative : `workflow_dispatch` + calendar externe (Google Calendar → webhook).

---

## Post automatique sur Mastodon

```yaml
- name: Toot sur Mastodon
  env:
    MASTODON_TOKEN: ${{ secrets.MASTODON_TOKEN }}
  run: |
    curl -X POST \
      -H "Authorization: Bearer $MASTODON_TOKEN" \
      -F "status=📣 FOSS4G Belgium 2026 — [message à personnaliser] #FOSS4G #OSGeo #OpenSource" \
      https://fosstodon.org/api/v1/statuses
```

**Setup :** dans les paramètres de l'org GitHub → Secrets → `MASTODON_TOKEN` (token généré sur fosstodon.org).

---

## Post automatique sur Matrix

```yaml
- name: Message Matrix
  env:
    MATRIX_TOKEN: ${{ secrets.MATRIX_TOKEN }}
    MATRIX_ROOM: '!roomid:matrix.org'   # remplacer par l'ID de #osgeo-be:matrix.org
  run: |
    curl -X POST \
      -H "Authorization: Bearer $MATRIX_TOKEN" \
      -H "Content-Type: application/json" \
      -d '{"msgtype":"m.text","body":"📣 FOSS4G Belgium 2026 — message automatique"}' \
      "https://matrix.org/_matrix/client/v3/rooms/$MATRIX_ROOM/send/m.room.message"
```

---

## Outils alternatifs

| Outil | Usage | Complexité |
|-------|-------|-----------|
| [n8n](https://n8n.io) | Workflow visuel, connecteurs sociaux | ⭐⭐ |
| [Zapier](https://zapier.com) | Simple, payant après seuil | ⭐ |
| [Buffer](https://buffer.com) | Planification multi-réseaux | ⭐ |
| [Pretalx](https://pretalx.com) | CfP + programme (self-hosted) | ⭐⭐ |
| [Pretix](https://pretix.eu) | Inscriptions open source | ⭐⭐ |
