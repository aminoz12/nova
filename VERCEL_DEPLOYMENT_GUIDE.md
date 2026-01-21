# Guide de Déploiement sur Vercel

Ce guide vous explique comment déployer votre application Next.js sur Vercel avec toutes les configurations nécessaires.

---

## 📋 Prérequis

1. Un compte Vercel (gratuit) : [vercel.com](https://vercel.com)
2. Votre code sur GitHub (déjà fait ✅)
3. Toutes les variables d'environnement prêtes

---

## 🚀 Étapes de Déploiement

### Étape 1 : Connecter votre Projet GitHub à Vercel

1. **Allez sur [vercel.com](https://vercel.com)** et connectez-vous
2. **Cliquez sur "Add New..." → "Project"**
3. **Importez votre dépôt GitHub** :
   - Sélectionnez votre dépôt `nova` (ou le nom de votre repo)
   - Vercel détectera automatiquement que c'est un projet Next.js

### Étape 2 : Configuration du Projet

Vercel détectera automatiquement :
- **Framework Preset** : Next.js
- **Root Directory** : `./` (racine)
- **Build Command** : `npm run build` (automatique)
- **Output Directory** : `.next` (automatique)
- **Install Command** : `npm install` (automatique)

**Vous n'avez rien à changer ici**, laissez les valeurs par défaut.

### Étape 3 : Ajouter les Variables d'Environnement

⚠️ **C'est l'étape la plus importante !**

Avant de déployer, ajoutez **TOUTES** les variables d'environnement suivantes dans Vercel :

#### 3.1 Variables SMTP (Email)

Cliquez sur "Environment Variables" et ajoutez :

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=contact@nova-ssi.fr
SMTP_PASSWORD=cira bjfs mzmk jjej
SMTP_FROM=contact@nova-ssi.fr
```

#### 3.2 Variables Google Sheets

```
GOOGLE_SERVICE_ACCOUNT_EMAIL=nova-devis@mindful-marking-484515-e5.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC/y2n/PXZ74Bho\n1eHNKl69m5K+luOY6yV3uslYV/9kO7ooX/dk4upui9vR53bo1jv4ZNKJG+VWZvlO\n6EHpuX1fO09W8VHFb4kBu3yPllThGUFUxavdMben0f9eF+R70nCEAqhn0XuHPw5y\nivG2XvqomPyqS7doanHL+tZcoXRvrAKSz0TiLO+HWuWD07xizGTJXPoiBnfzqlkc\n6UgjLW5INWjCMEI0VymVPbQqoqJt7o5OfnAKaYGlibBtrY1OZ8AiLzZBGXx11Q2V\nZTXyEdQ7pKVCiQZbD8uFrz2en7agltiKkotGXEzYpcfAvRVqG5hTrJuIaPTrmCNz\nz4KwGpxZAgMBAAECggEAAxjDiommru5Z2+DO3LNZRJd39u1/GZomXeNdWo36g4Gh\nX63Y/pSECNU87zaHtCUNYn/XlGYnvaLmVfCoa8qBFzdhGxFvarrXy/gyf9ZYuCpi\nZH4tPbeOnxOOxilS7kWMvTJBH4KsNhf9tuS+bV2QOjD/gg0R64otxzIyzDEWgl0N\n+mJd/AW8aVmqmwRa4K5xhOwkuBa8AxC87ZwAFHqUqRo27GvKtBi8Dl4ampF8sBX3\n3rxaM4+uW3gmAcdcUt4Pnmcqab4kU3mu6fEGD01+n/96BJvJjvl4PLCVzuYukGJA\ngjr9XUKA0L0xSs3wVP3S/v22tuBhfnvXZNLYCb8FeQKBgQDfLzBxXWvogAvBcI9H\nM/cF7GluWRxVGxrmRH7sdWSCrPxo33dawzGbZqRKGwK0XA14NVqB2vc/MSS7DmX2\nYwrpN7a5dvODhC9swO8OqKJT69DaXeZ+cIlHmG2yw7NA1rhBoRPEtSGIDvJvCJJt\nNvnbhfpcIyl4IUMjTNmbEuiENQKBgQDb/rF8iCsWpwDEWTGxiP6xEgPh2t5rJnDi\n+bz4kvj9bKQ1KFhs5GZlOy5ePtv8sFg0xhCht3qBPSccgGAKLuNvdcrojOMQD1yN\ncg1l/Pkipa/nGPA64R+vZRf4vAo55UB5rvL1cOI0datGVWd4CFp4/Mf4sL8tEUwJ\n3rpX4xk0FQKBgQDDONXY8+zl7Mtbo4fQsqXLKqZ2fcAIubLn5NZZI76Nh58qZP5U\nCBWmZzwiDkppVXP6yECpAc3wGp6UeN27jZsHsVJGHMSZL9EEAieZ3OxRGB8SQ7zQ\nsMOEOtMJ4aE0gB2gWrOeBwqTpu9tLERZABPCcAk0+xTVHdNKV3io6vs0WQKBgQCm\nwz+phdMb3caAEJjR2mYutdhJic7WbJJgDC3KRCcIfCVRwl6dVNml3SG+AWpi9w42\nGvoajGoJs+CFA29J6Ncw85q3g6zPzMU813r+l7AHKo/X35ijGWoaW8i7HVenIXgp\nhYvYsBRY7eXCcBT58WMbmYrAosKYmCcKyFJ7MsQ1LQKBgDeLQyFgVP6/MhAaIaHo\n+E+RbYbEsukMoacL4DAl3lOLMO8eXMQUeou2J32gbOTDwA+RW5QqCdScB1d00FkG\nW1jJKfTYhtnBeg8mZo/3/UmGPBNQprXnpjJ6RHTaIJ3e0dk9Wi7jP5jsrtv63YLj\ndIcdCAmXpIOHYCo6aXjqHqW/\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=1Ei83zfiMqjGTZ1YMWtKmVwfv-Y80vwX4w3I1BLdbArY
GOOGLE_SHEET_NAME=Feuille 1
```

**⚠️ Important pour GOOGLE_PRIVATE_KEY :**
- Copiez la clé complète depuis votre `.env.local`
- Assurez-vous que les `\n` sont présents (ils représentent les sauts de ligne)
- Gardez les guillemets autour de la clé

#### 3.3 Sélectionner les Environnements

Pour chaque variable, sélectionnez les environnements où elle sera disponible :
- ✅ **Production** (obligatoire)
- ✅ **Preview** (recommandé pour tester)
- ✅ **Development** (optionnel)

### Étape 4 : Déployer

1. **Cliquez sur "Deploy"**
2. Vercel va :
   - Installer les dépendances (`npm install`)
   - Builder le projet (`npm run build`)
   - Déployer l'application

3. **Attendez la fin du déploiement** (2-5 minutes)

---

## ✅ Après le Déploiement

### Vérification

1. **Votre site sera disponible à** : `https://votre-projet.vercel.app`
2. **Testez les fonctionnalités** :
   - Formulaire de contact : `/contact`
   - Formulaire de devis : `/devis`
   - Vérifiez que les emails sont envoyés
   - Vérifiez que les données sont insérées dans Google Sheets

### Configuration du Domaine Personnalisé (Optionnel)

Si vous avez un domaine personnalisé :

1. Allez dans **Settings → Domains**
2. Ajoutez votre domaine (ex: `nova-ssi.fr`)
3. Suivez les instructions pour configurer les DNS

---

## 🔧 Configuration Avancée

### Variables d'Environnement par Environnement

Vous pouvez avoir des variables différentes pour Production et Preview :

- **Production** : Variables de production (emails réels, Google Sheets réels)
- **Preview** : Variables de test (emails de test, Google Sheets de test)

### Redéploiement Automatique

Vercel redéploie automatiquement à chaque push sur :
- **Production** : Branche `master` ou `main`
- **Preview** : Toutes les autres branches et pull requests

### Logs et Monitoring

- **Logs** : Disponibles dans l'onglet "Logs" de chaque déploiement
- **Analytics** : Disponible dans l'onglet "Analytics" (nécessite un plan payant)

---

## 🐛 Dépannage

### Erreur : "Environment variables not found"

**Solution :** Vérifiez que toutes les variables sont bien ajoutées dans Vercel et que les environnements sont correctement sélectionnés.

### Erreur : "Build failed"

**Solution :** 
1. Vérifiez les logs de build dans Vercel
2. Assurez-vous que toutes les dépendances sont dans `package.json`
3. Vérifiez que le code compile localement (`npm run build`)

### Emails ne sont pas envoyés

**Solution :**
1. Vérifiez que `SMTP_HOST`, `SMTP_USER`, `SMTP_PASSWORD` sont corrects
2. Vérifiez les logs Vercel pour voir les erreurs SMTP
3. Pour Gmail, assurez-vous d'utiliser un mot de passe d'application

### Google Sheets ne fonctionne pas

**Solution :**
1. Vérifiez que `GOOGLE_SHEET_ID` et `GOOGLE_SHEET_NAME` sont corrects
2. Vérifiez que la Google Sheet est partagée avec le compte de service
3. Vérifiez les logs Vercel pour voir les erreurs Google Sheets

### Variables d'environnement ne se chargent pas

**Solution :**
1. Après avoir ajouté/modifié des variables, **redéployez** le projet
2. Les variables sont chargées au moment du build, pas au runtime
3. Allez dans **Deployments** → Cliquez sur les 3 points → **Redeploy**

---

## 📝 Checklist de Déploiement

- [ ] Projet connecté à GitHub sur Vercel
- [ ] Toutes les variables SMTP ajoutées
- [ ] Toutes les variables Google Sheets ajoutées
- [ ] Environnements sélectionnés (Production, Preview)
- [ ] Déploiement réussi
- [ ] Site accessible
- [ ] Formulaire de contact testé
- [ ] Formulaire de devis testé
- [ ] Emails reçus
- [ ] Données dans Google Sheets

---

## 🔒 Sécurité

- ✅ Les variables d'environnement sont **cryptées** dans Vercel
- ✅ Elles ne sont **jamais** exposées dans le code client
- ✅ Seules les variables préfixées par `NEXT_PUBLIC_` sont accessibles côté client
- ⚠️ Ne partagez **jamais** vos variables d'environnement publiquement

---

## 📚 Ressources

- [Documentation Vercel](https://vercel.com/docs)
- [Variables d'environnement Vercel](https://vercel.com/docs/environment-variables)
- [Déploiement Next.js sur Vercel](https://vercel.com/docs/frameworks/nextjs)

---

**C'est tout ! Votre application est maintenant déployée sur Vercel.** 🎉




