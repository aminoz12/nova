# Configuration des Variables d'Environnement sur Vercel

Ce guide vous explique comment configurer correctement les variables d'environnement sur Vercel, en particulier `GOOGLE_PRIVATE_KEY` qui peut être problématique.

---

## 🔧 Étapes pour Ajouter les Variables sur Vercel

### 1. Accéder aux Variables d'Environnement

1. Allez sur [vercel.com](https://vercel.com)
2. Sélectionnez votre projet
3. Allez dans **Settings** → **Environment Variables**

### 2. Ajouter les Variables SMTP

Pour chaque variable, cliquez sur **"Add New"** :

| Variable | Valeur | Environnements |
|----------|--------|----------------|
| `SMTP_HOST` | `smtp.gmail.com` | ✅ Production, Preview |
| `SMTP_PORT` | `587` | ✅ Production, Preview |
| `SMTP_SECURE` | `false` | ✅ Production, Preview |
| `SMTP_USER` | `contact@nova-ssi.fr` | ✅ Production, Preview |
| `SMTP_PASSWORD` | `cira bjfs mzmk jjej` | ✅ Production, Preview |
| `SMTP_FROM` | `contact@nova-ssi.fr` | ✅ Production, Preview |

### 3. Ajouter les Variables Google Sheets

#### 3.1 GOOGLE_SERVICE_ACCOUNT_EMAIL

- **Name:** `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- **Value:** `nova-devis@mindful-marking-484515-e5.iam.gserviceaccount.com`
- **Environments:** ✅ Production, Preview

#### 3.2 GOOGLE_PRIVATE_KEY (⚠️ IMPORTANT)

**⚠️ C'est la variable la plus délicate à configurer !**

**Option 1 : Copier depuis .env.local (Recommandé)**

1. Ouvrez votre fichier `.env.local` localement
2. Copiez la valeur complète de `GOOGLE_PRIVATE_KEY` (avec les guillemets)
3. Dans Vercel :
   - **Name:** `GOOGLE_PRIVATE_KEY`
   - **Value:** Collez la valeur complète (avec les guillemets et les `\n`)
   - **Environments:** ✅ Production, Preview

**Exemple de valeur correcte :**
```
"-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC/y2n/PXZ74Bho\n1eHNKl69m5K+luOY6yV3uslYV/9kO7ooX/dk4upui9vR53bo1jv4ZNKJG+VWZvlO\n6EHpuX1fO09W8VHFb4kBu3yPllThGUFUxavdMben0f9eF+R70nCEAqhn0XuHPw5y\nivG2XvqomPyqS7doanHL+tZcoXRvrAKSz0TiLO+HWuWD07xizGTJXPoiBnfzqlkc\n6UgjLW5INWjCMEI0VymVPbQqoqJt7o5OfnAKaYGlibBtrY1OZ8AiLzZBGXx11Q2V\nZTXyEdQ7pKVCiQZbD8uFrz2en7agltiKkotGXEzYpcfAvRVqG5hTrJuIaPTrmCNz\nz4KwGpxZAgMBAAECggEAAxjDiommru5Z2+DO3LNZRJd39u1/GZomXeNdWo36g4Gh\nX63Y/pSECNU87zaHtCUNYn/XlGYnvaLmVfCoa8qBFzdhGxFvarrXy/gyf9ZYuCpi\nZH4tPbeOnxOOxilS7kWMvTJBH4KsNhf9tuS+bV2QOjD/gg0R64otxzIyzDEWgl0N\n+mJd/AW8aVmqmwRa4K5xhOwkuBa8AxC87ZwAFHqUqRo27GvKtBi8Dl4ampF8sBX3\n3rxaM4+uW3gmAcdcUt4Pnmcqab4kU3mu6fEGD01+n/96BJvJjvl4PLCVzuYukGJA\ngjr9XUKA0L0xSs3wVP3S/v22tuBhfnvXZNLYCb8FeQKBgQDfLzBxXWvogAvBcI9H\nM/cF7GluWRxVGxrmRH7sdWSCrPxo33dawzGbZqRKGwK0XA14NVqB2vc/MSS7DmX2\nYwrpN7a5dvODhC9swO8OqKJT69DaXeZ+cIlHmG2yw7NA1rhBoRPEtSGIDvJvCJJt\nNvnbhfpcIyl4IUMjTNmbEuiENQKBgQDb/rF8iCsWpwDEWTGxiP6xEgPh2t5rJnDi\n+bz4kvj9bKQ1KFhs5GZlOy5ePtv8sFg0xhCht3qBPSccgGAKLuNvdcrojOMQD1yN\ncg1l/Pkipa/nGPA64R+vZRf4vAo55UB5rvL1cOI0datGVWd4CFp4/Mf4sL8tEUwJ\n3rpX4xk0FQKBgQDDONXY8+zl7Mtbo4fQsqXLKqZ2fcAIubLn5NZZI76Nh58qZP5U\nCBWmZzwiDkppVXP6yECpAc3wGp6UeN27jZsHsVJGHMSZL9EEAieZ3OxRGB8SQ7zQ\nsMOEOtMJ4aE0gB2gWrOeBwqTpu9tLERZABPCcAk0+xTVHdNKV3io6vs0WQKBgQCm\nwz+phdMb3caAEJjR2mYutdhJic7WbJJgDC3KRCcIfCVRwl6dVNml3SG+AWpi9w42\nGvoajGoJs+CFA29J6Ncw85q3g6zPzMU813r+l7AHKo/X35ijGWoaW8i7HVenIXgp\nhYvYsBRY7eXCcBT58WMbmYrAosKYmCcKyFJ7MsQ1LQKBgDeLQyFgVP6/MhAaIaHo\n+E+RbYbEsukMoacL4DAl3lOLMO8eXMQUeou2J32gbOTDwA+RW5QqCdScB1d00FkG\nW1jJKfTYhtnBeg8mZo/3/UmGPBNQprXnpjJ6RHTaIJ3e0dk9Wi7jP5jsrtv63YLj\ndIcdCAmXpIOHYCo6aXjqHqW/\n-----END PRIVATE KEY-----\n"
```

**⚠️ Points importants :**
- ✅ Gardez les **guillemets** autour de la clé
- ✅ Gardez les **`\n`** (ne les remplacez pas par de vrais sauts de ligne)
- ✅ Copiez la clé **complète** de BEGIN à END

**Option 2 : Si vous avez le fichier JSON du compte de service**

Si vous avez le fichier `.json` du compte de service :

1. Ouvrez le fichier JSON
2. Copiez la valeur de `private_key` (sans les guillemets du JSON)
3. Dans Vercel, ajoutez les guillemets et les `\n` :
   ```
   "-----BEGIN PRIVATE KEY-----\n[VOTRE_CLE_ICI]\n-----END PRIVATE KEY-----\n"
   ```
4. Remplacez tous les vrais sauts de ligne par `\n`

#### 3.3 GOOGLE_SHEET_ID

- **Name:** `GOOGLE_SHEET_ID`
- **Value:** `1Ei83zfiMqjGTZ1YMWtKmVwfv-Y80vwX4w3I1BLdbArY`
- **Environments:** ✅ Production, Preview

#### 3.4 GOOGLE_SHEET_NAME

- **Name:** `GOOGLE_SHEET_NAME`
- **Value:** `Feuille 1`
- **Environments:** ✅ Production, Preview

---

## ✅ Vérification

Après avoir ajouté toutes les variables :

1. **Redéployez votre projet** :
   - Allez dans **Deployments**
   - Cliquez sur les 3 points (⋯) du dernier déploiement
   - Sélectionnez **"Redeploy"**
   - ⚠️ **Important :** Les variables sont chargées au moment du build, donc un redéploiement est nécessaire

2. **Vérifiez les logs** :
   - Allez dans **Deployments** → Cliquez sur le dernier déploiement
   - Ouvrez l'onglet **"Logs"**
   - Cherchez les messages de débogage :
     - `🔍 Checking Google Sheets authentication...`
     - `GOOGLE_SERVICE_ACCOUNT_EMAIL: ✅ Set`
     - `GOOGLE_PRIVATE_KEY: ✅ Set (XXX chars)`

3. **Testez le formulaire** :
   - Allez sur votre site déployé
   - Soumettez un formulaire de devis
   - Vérifiez que les données apparaissent dans Google Sheets

---

## 🐛 Dépannage

### Erreur : "Google Sheets authentication not configured"

**Causes possibles :**
1. Les variables ne sont pas ajoutées sur Vercel
2. Les environnements ne sont pas sélectionnés (Production/Preview)
3. Le projet n'a pas été redéployé après l'ajout des variables

**Solution :**
1. Vérifiez que toutes les variables sont bien présentes dans **Settings → Environment Variables**
2. Vérifiez que **Production** et **Preview** sont cochés pour chaque variable
3. **Redéployez** le projet (voir section Vérification ci-dessus)

### Erreur : "Invalid GOOGLE_PRIVATE_KEY format"

**Causes possibles :**
1. Les `\n` ont été remplacés par de vrais sauts de ligne
2. Les guillemets sont manquants
3. La clé est incomplète

**Solution :**
1. Supprimez la variable `GOOGLE_PRIVATE_KEY` sur Vercel
2. Recréez-la en copiant exactement depuis votre `.env.local`
3. Assurez-vous que les `\n` sont présents (pas de vrais sauts de ligne)
4. Redéployez

### Les variables sont ajoutées mais ne fonctionnent pas

**Solution :**
1. **Redéployez** le projet (obligatoire après modification des variables)
2. Vérifiez les logs pour voir si les variables sont détectées
3. Si le problème persiste, supprimez et recréez les variables

---

## 📝 Checklist

- [ ] `SMTP_HOST` ajouté
- [ ] `SMTP_PORT` ajouté
- [ ] `SMTP_SECURE` ajouté
- [ ] `SMTP_USER` ajouté
- [ ] `SMTP_PASSWORD` ajouté
- [ ] `SMTP_FROM` ajouté
- [ ] `GOOGLE_SERVICE_ACCOUNT_EMAIL` ajouté
- [ ] `GOOGLE_PRIVATE_KEY` ajouté (avec guillemets et `\n`)
- [ ] `GOOGLE_SHEET_ID` ajouté
- [ ] `GOOGLE_SHEET_NAME` ajouté
- [ ] Toutes les variables ont **Production** et **Preview** cochés
- [ ] Projet redéployé après ajout des variables
- [ ] Logs vérifiés
- [ ] Formulaire testé

---

## 💡 Astuce

Pour copier facilement `GOOGLE_PRIVATE_KEY` depuis `.env.local` :

1. Ouvrez `.env.local` dans un éditeur de texte
2. Trouvez la ligne `GOOGLE_PRIVATE_KEY=...`
3. Sélectionnez toute la valeur (y compris les guillemets)
4. Copiez (Ctrl+C)
5. Dans Vercel, collez dans le champ "Value"

**Ne modifiez rien**, collez tel quel !

---

**Une fois toutes les variables ajoutées et le projet redéployé, tout devrait fonctionner !** 🎉



