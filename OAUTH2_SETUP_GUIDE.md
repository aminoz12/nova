# Guide Complet : Créer OAuth 2.0 pour Google Sheets

Ce guide vous explique étape par étape comment créer des identifiants OAuth 2.0 pour intégrer Google Sheets.

## 📋 Prérequis

- Un compte Google (Gmail personnel ou Google Workspace)
- Accès à [Google Cloud Console](https://console.cloud.google.com/)

---

## Étape 1 : Créer ou Sélectionner un Projet Google Cloud

1. Allez sur [Google Cloud Console](https://console.cloud.google.com/)
2. En haut à gauche, cliquez sur le menu déroulant du projet
3. Cliquez sur **"Nouveau projet"** (ou sélectionnez un projet existant)
4. Donnez un nom au projet (ex: `nova-ssi-sheets`)
5. Cliquez sur **"Créer"**
6. Attendez quelques secondes que le projet soit créé
7. Sélectionnez le projet dans le menu déroulant

---

## Étape 2 : Activer l'API Google Sheets

1. Dans le menu de gauche, allez dans **"APIs et services"** > **"Bibliothèque"**
2. Dans la barre de recherche, tapez **"Google Sheets API"**
3. Cliquez sur **"Google Sheets API"**
4. Cliquez sur le bouton **"ACTIVER"**
5. Attendez quelques secondes que l'API soit activée

---

## Étape 3 : Configurer l'Écran de Consentement OAuth

1. Dans le menu de gauche, allez dans **"APIs et services"** > **"Écran de consentement OAuth"**
2. Sélectionnez le type d'utilisateur :
   - **"Externe"** (pour un compte Gmail personnel) ✅ Recommandé
   - **"Interne"** (uniquement pour Google Workspace)
3. Cliquez sur **"CRÉER"**

### Remplir les Informations de l'Application

4. **Nom de l'application** : `Nova SSI Sheets Integration` (ou un nom de votre choix)
5. **Adresse e-mail de l'utilisateur** : Votre adresse email
6. **Adresse e-mail du support développeur** : Votre adresse email
7. Cliquez sur **"ENREGISTRER ET CONTINUER"**

### Ajouter les Portées (Scopes)

8. **Où trouver "Portées"** :
   - Après avoir cliqué sur "ENREGISTRER ET CONTINUER" à l'étape précédente
   - Vous arrivez sur une page avec plusieurs onglets/sections
   - Cherchez la section **"Portées"** (ou "Scopes" en anglais)
   - Elle se trouve généralement après la section "Informations sur l'application"
   
9. Dans la section **"Portées"**, cliquez sur **"AJOUTER OU SUPPRIMER DES PORTÉES"** (ou "ADD OR REMOVE SCOPES")
10. Une nouvelle page s'ouvre avec une liste de portées
11. Dans la barre de recherche en haut, tapez : `spreadsheets`
12. Cochez la case **"https://www.googleapis.com/auth/spreadsheets"**
   - Vous pouvez aussi chercher "Google Sheets API" dans la liste
13. Cliquez sur **"Mettre à jour"** (ou "UPDATE") en bas de la page
14. Vous revenez à la page précédente - cliquez sur **"ENREGISTRER ET CONTINUER"**

**Note** : Si vous ne voyez pas la section "Portées", c'est peut-être parce que :
- Vous êtes encore sur la première page (Informations sur l'application)
- Dans ce cas, cliquez d'abord sur "ENREGISTRER ET CONTINUER" pour passer à l'étape suivante

### Ajouter des Utilisateurs de Test (Important !)

13. Dans **"Utilisateurs de test"**, cliquez sur **"+ AJOUTER DES UTILISATEURS"**
14. Ajoutez votre adresse email Google (celle que vous utiliserez pour autoriser l'application)
15. Cliquez sur **"AJOUTER"**
16. Cliquez sur **"ENREGISTRER ET CONTINUER"**

### Résumé

17. Vérifiez les informations
18. Cliquez sur **"RETOUR AU TABLEAU DE BORD"**

---

## Étape 4 : Créer les Identifiants OAuth 2.0

1. Dans le menu de gauche, allez dans **"APIs et services"** > **"Identifiants"**
2. En haut de la page, cliquez sur **"+ CRÉER DES IDENTIFIANTS"**
3. Sélectionnez **"ID client OAuth"**

### Configurer l'ID Client OAuth

4. **Type d'application** : Sélectionnez **"Application Web"**
5. **Nom** : `Nova SSI Web Client` (ou un nom de votre choix)
6. **URI de redirection autorisés** :
   - Cliquez sur **"+ AJOUTER UN URI"**
   - Ajoutez : `http://localhost:3000`
   - (Pour la production, ajoutez aussi : `https://votre-domaine.com`)
7. Cliquez sur **"CRÉER"**

### ⚠️ IMPORTANT : Copier les Identifiants

8. Une fenêtre popup s'affiche avec vos identifiants :
   - **ID client** : `xxxxxxxxxxxxx.apps.googleusercontent.com`
   - **Secret client** : `xxxxxxxxxxxxx`

9. **COPIEZ CES DEUX VALEURS IMMÉDIATEMENT** - vous ne pourrez plus voir le secret client après avoir fermé cette fenêtre !

10. Cliquez sur **"OK"**

---

## Étape 5 : Générer le Refresh Token

Maintenant que vous avez vos identifiants OAuth 2.0, vous devez générer un refresh token.

### Option A : Utiliser le Script Fourni (Recommandé)

1. Ouvrez le fichier `get-refresh-token.js` dans votre projet
2. Remplacez ces lignes :
   ```javascript
   const CLIENT_ID = 'YOUR_CLIENT_ID_HERE.apps.googleusercontent.com';
   const CLIENT_SECRET = 'YOUR_CLIENT_SECRET_HERE';
   ```
   Par vos vraies valeurs :
   ```javascript
   const CLIENT_ID = 'votre-id-client.apps.googleusercontent.com';
   const CLIENT_SECRET = 'votre-secret-client';
   ```

3. Dans votre terminal, exécutez :
   ```bash
   node get-refresh-token.js
   ```

4. Le script affichera une URL - copiez-la et ouvrez-la dans votre navigateur
5. Autorisez l'application avec votre compte Google
6. Vous serez redirigé vers une page - copiez le **code** de l'URL
7. Collez le code dans le terminal
8. Le script affichera votre **REFRESH_TOKEN** - copiez-le !

### Option B : Utiliser Google OAuth Playground (Alternative)

1. Allez sur [Google OAuth Playground](https://developers.google.com/oauthplayground/)
2. Cliquez sur l'icône ⚙️ (Settings) en haut à droite
3. Cochez **"Use your own OAuth credentials"**
4. Entrez votre **Client ID** et **Client Secret**
5. Dans la liste à gauche, trouvez et sélectionnez :
   - `https://www.googleapis.com/auth/spreadsheets`
6. Cliquez sur **"Authorize APIs"**
7. Autorisez l'application
8. Cliquez sur **"Exchange authorization code for tokens"**
9. Copiez le **Refresh token** affiché

---

## Étape 6 : Configurer les Variables d'Environnement

Ajoutez ces variables à votre fichier `.env.local` :

```env
# OAuth 2.0 Configuration
GOOGLE_CLIENT_ID=votre-id-client.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=votre-secret-client
GOOGLE_REFRESH_TOKEN=votre-refresh-token
GOOGLE_REDIRECT_URI=http://localhost:3000

# Google Sheets Configuration
GOOGLE_SHEET_ID=votre-google-sheet-id
GOOGLE_SHEET_NAME=Sheet1
```

**Exemple :**
```env
GOOGLE_CLIENT_ID=123456789-abcdefghijklmnop.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-abcdefghijklmnopqrstuvwxyz
GOOGLE_REFRESH_TOKEN=1//0abcdefghijklmnopqrstuvwxyz-abcdefghijklmnop
GOOGLE_REDIRECT_URI=http://localhost:3000
GOOGLE_SHEET_ID=1a2b3c4d5e6f7g8h9i0j
GOOGLE_SHEET_NAME=Sheet1
```

---

## Étape 7 : Partager votre Google Sheet

1. Ouvrez votre Google Sheet
2. Cliquez sur le bouton **"Partager"** en haut à droite
3. Ajoutez l'adresse email de votre compte Google (celui que vous avez utilisé pour autoriser l'application)
4. Donnez-lui les permissions **"Éditeur"**
5. Cliquez sur **"Envoyer"**

---

## Étape 8 : Tester la Configuration

1. Redémarrez votre serveur Next.js :
   ```bash
   npm run dev
   ```

2. Allez sur la page `/devis` de votre site
3. Remplissez et soumettez un formulaire de devis
4. Vérifiez votre Google Sheet - une nouvelle ligne devrait apparaître !

---

## 🔧 Dépannage

### Erreur : "invalid_grant"
- Le refresh token a expiré ou est invalide
- **Solution** : Régénérez un nouveau refresh token

### Erreur : "access_denied"
- L'application n'est pas autorisée
- **Solution** : Assurez-vous d'avoir ajouté votre email dans "Utilisateurs de test" dans l'écran de consentement OAuth

### Erreur : "redirect_uri_mismatch"
- L'URI de redirection ne correspond pas
- **Solution** : Vérifiez que `GOOGLE_REDIRECT_URI` dans `.env.local` correspond exactement à celui configuré dans Google Cloud Console

### Erreur : "insufficient permissions"
- Le Google Sheet n'est pas partagé avec le bon compte
- **Solution** : Partagez le Google Sheet avec l'adresse email du compte Google que vous avez utilisé pour autoriser l'application

### Les données n'apparaissent pas dans le sheet
- Vérifiez les logs du serveur pour les erreurs
- Assurez-vous que le nom de la feuille (`GOOGLE_SHEET_NAME`) correspond exactement
- Vérifiez que les colonnes sont dans le bon ordre (Nom, Entreprise, Adresse, Email, Téléphone, Service, Description, Urgence)

---

## 📝 Résumé des Identifiants Nécessaires

Vous devez avoir ces 3 valeurs :
1. ✅ **Client ID** : `xxxxx.apps.googleusercontent.com`
2. ✅ **Client Secret** : `GOCSPX-xxxxx`
3. ✅ **Refresh Token** : `1//0xxxxx`

Et ces 2 valeurs pour le Google Sheet :
4. ✅ **Sheet ID** : L'ID dans l'URL de votre Google Sheet
5. ✅ **Sheet Name** : Le nom de l'onglet (généralement "Sheet1")

---

## 🎉 C'est Terminé !

Une fois toutes ces étapes complétées, votre intégration Google Sheets devrait fonctionner avec OAuth 2.0 !

