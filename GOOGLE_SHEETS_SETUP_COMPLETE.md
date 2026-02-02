# Configuration Google Sheets - Guide Complet

Votre compte de service Google Cloud a été configuré avec succès ! 🎉

## ✅ Ce qui a été configuré

Les variables suivantes ont été mises à jour dans votre fichier `.env.local` :

- ✅ `GOOGLE_SERVICE_ACCOUNT_EMAIL` = `nova-devis@mindful-marking-484515-e5.iam.gserviceaccount.com`
- ✅ `GOOGLE_PRIVATE_KEY` = (votre clé privée)
- ⚠️ `GOOGLE_SHEET_ID` = **À configurer** (voir ci-dessous)
- ✅ `GOOGLE_SHEET_NAME` = `Sheet1` (par défaut)

---

## 📋 Étapes pour finaliser la configuration

### Étape 1 : Créer une Google Sheet

1. Allez sur [Google Sheets](https://sheets.google.com)
2. Cliquez sur **"Blank"** (Nouveau tableur)
3. Donnez un nom à votre feuille (ex: "Nova SSI - Demandes de Devis")

### Étape 2 : Configurer les en-têtes de colonnes

Dans la première ligne (ligne 1), ajoutez ces en-têtes dans les colonnes A à H :

| Colonne A | Colonne B | Colonne C | Colonne D | Colonne E | Colonne F | Colonne G | Colonne H |
|-----------|-----------|-----------|-----------|-----------|-----------|-----------|-----------|
| **Nom** | **Entreprise** | **Adresse** | **Email** | **Téléphone** | **Service** | **Description** | **Urgence** |

**Exemple visuel :**
```
A1: Nom          B1: Entreprise    C1: Adresse    D1: Email    E1: Téléphone    F1: Service    G1: Description    H1: Urgence
```

### Étape 3 : Obtenir l'ID de la feuille

L'ID de la feuille se trouve dans l'URL de votre Google Sheet.

**Exemple d'URL :**
```
https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
```

**L'ID est la partie entre `/d/` et `/edit` :**
```
1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
```

### Étape 4 : Partager la feuille avec le compte de service

⚠️ **C'est l'étape la plus importante !** Sans cela, le compte de service ne pourra pas écrire dans votre feuille.

1. Dans votre Google Sheet, cliquez sur le bouton **"Share"** (Partager) en haut à droite
2. Dans le champ "Add people and groups", entrez l'email du compte de service :
   ```
   nova-devis@mindful-marking-484515-e5.iam.gserviceaccount.com
   ```
3. Assurez-vous que les permissions sont définies sur **"Editor"** (Éditeur)
4. **Décochez** "Notify people" (pas besoin d'envoyer une notification)
5. Cliquez sur **"Share"**

### Étape 5 : Mettre à jour `.env.local`

Ouvrez votre fichier `.env.local` et remplacez :

```env
GOOGLE_SHEET_ID=your-google-sheet-id-here
```

Par :

```env
GOOGLE_SHEET_ID=votre-id-de-feuille-ici
```

**Exemple :**
```env
GOOGLE_SHEET_ID=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
```

### Étape 6 : (Optionnel) Changer le nom de la feuille

Si vous avez créé une feuille avec un nom différent de "Sheet1", mettez à jour :

```env
GOOGLE_SHEET_NAME=VotreNomDeFeuille
```

Par défaut, c'est `Sheet1`.

---

## 🧪 Tester la configuration

1. **Redémarrez votre serveur de développement** :
   ```bash
   npm run dev
   ```

2. **Testez le formulaire de devis** :
   - Allez sur `http://localhost:3000/devis`
   - Remplissez le formulaire
   - Soumettez-le

3. **Vérifiez votre Google Sheet** :
   - Ouvrez votre Google Sheet
   - Vous devriez voir une nouvelle ligne avec les données du devis

---

## 📊 Structure des données

Chaque fois qu'un utilisateur soumet un formulaire de devis, une nouvelle ligne sera ajoutée avec :

| Colonne | Contenu |
|---------|---------|
| **A - Nom** | Prénom + Nom (ou Nom seul) |
| **B - Entreprise** | Nom de l'entreprise |
| **C - Adresse** | Adresse complète |
| **D - Email** | Adresse email |
| **E - Téléphone** | Numéro de téléphone |
| **F - Service** | Service demandé (ex: "BAES (Éclairage de Secours)") |
| **G - Description** | Description du projet ou message |
| **H - Urgence** | Niveau d'urgence |

---

## 🔒 Sécurité

- ✅ Le fichier `.env.local` est dans `.gitignore` et ne sera jamais commité
- ✅ La clé privée est stockée de manière sécurisée
- ✅ Le compte de service a uniquement accès à la feuille que vous partagez

---

## 🐛 Dépannage

### Erreur : "The caller does not have permission"

**Solution :** Vérifiez que vous avez bien partagé la Google Sheet avec le compte de service :
- Email : `nova-devis@mindful-marking-484515-e5.iam.gserviceaccount.com`
- Permissions : **Editor** (Éditeur)

### Erreur : "Unable to parse range"

**Solution :** Vérifiez que :
- `GOOGLE_SHEET_NAME` correspond exactement au nom de votre feuille (sensible à la casse)
- Par défaut, utilisez `Sheet1`

### Erreur : "Requested entity was not found"

**Solution :** Vérifiez que :
- `GOOGLE_SHEET_ID` est correct (copié depuis l'URL)
- La feuille existe toujours
- La feuille est bien partagée avec le compte de service

### Les données n'apparaissent pas

**Vérifications :**
1. Vérifiez les logs du serveur pour voir s'il y a des erreurs
2. Vérifiez que le formulaire a bien été soumis (message de succès affiché)
3. Actualisez votre Google Sheet
4. Vérifiez que vous regardez la bonne feuille (onglet en bas)

---

## 📝 Résumé des variables d'environnement

Votre fichier `.env.local` devrait contenir :

```env
# Google Sheets Configuration
GOOGLE_SERVICE_ACCOUNT_EMAIL=nova-devis@mindful-marking-484515-e5.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=votre-id-de-feuille-ici
GOOGLE_SHEET_NAME=Sheet1
```

---

## ✅ Checklist de configuration

- [x] Compte de service Google Cloud créé
- [x] Clé privée configurée dans `.env.local`
- [ ] Google Sheet créée
- [ ] En-têtes de colonnes configurés (A1-H1)
- [ ] Feuille partagée avec le compte de service
- [ ] `GOOGLE_SHEET_ID` mis à jour dans `.env.local`
- [ ] Test du formulaire de devis effectué
- [ ] Données visibles dans la Google Sheet

---

**Une fois toutes ces étapes terminées, votre intégration Google Sheets sera complète !** 🎉






