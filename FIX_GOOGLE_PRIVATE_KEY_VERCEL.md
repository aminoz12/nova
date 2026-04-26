# Fix: Erreur GOOGLE_PRIVATE_KEY sur Vercel

Si vous voyez l'erreur `ERR_OSSL_UNSUPPORTED` ou `error:1E08010C:DECODER routines::unsupported`, c'est que la clé privée n'est pas correctement formatée sur Vercel.

---

## 🔧 Solution : Reformater GOOGLE_PRIVATE_KEY sur Vercel

### Option 1 : Format Multi-ligne (Recommandé pour Vercel)

Sur Vercel, au lieu d'utiliser `\n`, vous pouvez coller la clé avec de **vrais sauts de ligne** :

1. **Allez sur Vercel** → **Settings** → **Environment Variables**
2. **Supprimez** la variable `GOOGLE_PRIVATE_KEY` existante
3. **Créez une nouvelle variable** `GOOGLE_PRIVATE_KEY`
4. **Dans le champ "Value"**, collez la clé **SANS guillemets**, avec de vrais sauts de ligne :

```
-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC/y2n/PXZ74Bho
1eHNKl69m5K+luOY6yV3uslYV/9kO7ooX/dk4upui9vR53bo1jv4ZNKJG+VWZvlO
6EHpuX1fO09W8VHFb4kBu3yPllThGUFUxavdMben0f9eF+R70nCEAqhn0XuHPw5y
ivG2XvqomPyqS7doanHL+tZcoXRvrAKSz0TiLO+HWuWD07xizGTJXPoiBnfzqlkc
6UgjLW5INWjCMEI0VymVPbQqoqJt7o5OfnAKaYGlibBtrY1OZ8AiLzZBGXx11Q2V
ZTXyEdQ7pKVCiQZbD8uFrz2en7agltiKkotGXEzYpcfAvRVqG5hTrJuIaPTrmCNz
z4KwGpxZAgMBAAECggEAAxjDiommru5Z2+DO3LNZRJd39u1/GZomXeNdWo36g4Gh
X63Y/pSECNU87zaHtCUNYn/XlGYnvaLmVfCoa8qBFzdhGxFvarrXy/gyf9ZYuCpi
ZH4tPbeOnxOOxilS7kWMvTJBH4KsNhf9tuS+bV2QOjD/gg0R64otxzIyzDEWgl0N
+mJd/AW8aVmqmwRa4K5xhOwkuBa8AxC87ZwAFHqUqRo27GvKtBi8Dl4ampF8sBX3
3rxaM4+uW3gmAcdcUt4Pnmcqab4kU3mu6fEGD01+n/96BJvJjvl4PLCVzuYukGJA
gjr9XUKA0L0xSs3wVP3S/v22tuBhfnvXZNLYCb8FeQKBgQDfLzBxXWvogAvBcI9H
M/cF7GluWRxVGxrmRH7sdWSCrPxo33dawzGbZqRKGwK0XA14NVqB2vc/MSS7DmX2
YwrpN7a5dvODhC9swO8OqKJT69DaXeZ+cIlHmG2yw7NA1rhBoRPEtSGIDvJvCJJt
NvnbhfpcIyl4IUMjTNmbEuiENQKBgQDb/rF8iCsWpwDEWTGxiP6xEgPh2t5rJnDi
+bz4kvj9bKQ1KFhs5GZlOy5ePtv8sFg0xhCht3qBPSccgGAKLuNvdcrojOMQD1yN
cg1l/Pkipa/nGPA64R+vZRf4vAo55UB5rvL1cOI0datGVWd4CFp4/Mf4sL8tEUwJ
3rpX4xk0FQKBgQDDONXY8+zl7Mtbo4fQsqXLKqZ2fcAIubLn5NZZI76Nh58qZP5U
CBWmZzwiDkppVXP6yECpAc3wGp6UeN27jZsHsVJGHMSZL9EEAieZ3OxRGB8SQ7zQ
sMOEOtMJ4aE0gB2gWrOeBwqTpu9tLERZABPCcAk0+xTVHdNKV3io6vs0WQKBgQCm
wz+phdMb3caAEJjR2mYutdhJic7WbJJgDC3KRCcIfCVRwl6dVNml3SG+AWpi9w42
GvoajGoJs+CFA29J6Ncw85q3g6zPzMU813r+l7AHKo/X35ijGWoaW8i7HVenIXgp
hYvYsBRY7eXCcBT58WMbmYrAosKYmCcKyFJ7MsQ1LQKBgDeLQyFgVP6/MhAaIaHo
+E+RbYbEsukMoacL4DAl3lOLMO8eXMQUeou2J32gbOTDwA+RW5QqCdScB1d00FkG
W1jJKfTYhtnBeg8mZo/3/UmGPBNQprXnpjJ6RHTaIJ3e0dk9Wi7jP5jsrtv63YLj
dIcdCAmXpIOHYCo6aXjqHqW/
-----END PRIVATE KEY-----
```

**⚠️ Important :**
- ❌ **Ne mettez PAS de guillemets** autour de la clé
- ✅ Utilisez de **vrais sauts de ligne** (appuyez sur Entrée après chaque ligne)
- ✅ Commencez par `-----BEGIN PRIVATE KEY-----`
- ✅ Terminez par `-----END PRIVATE KEY-----`

### Option 2 : Format avec \n (Alternative)

Si l'option 1 ne fonctionne pas, essayez avec `\n` mais **sans guillemets** :

1. **Supprimez** la variable existante
2. **Créez une nouvelle variable** `GOOGLE_PRIVATE_KEY`
3. **Dans le champ "Value"**, collez avec `\n` mais **SANS guillemets** :

```
-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC/y2n/PXZ74Bho\n1eHNKl69m5K+luOY6yV3uslYV/9kO7ooX/dk4upui9vR53bo1jv4ZNKJG+VWZvlO\n6EHpuX1fO09W8VHFb4kBu3yPllThGUFUxavdMben0f9eF+R70nCEAqhn0XuHPw5y\nivG2XvqomPyqS7doanHL+tZcoXRvrAKSz0TiLO+HWuWD07xizGTJXPoiBnfzqlkc\n6UgjLW5INWjCMEI0VymVPbQqoqJt7o5OfnAKaYGlibBtrY1OZ8AiLzZBGXx11Q2V\nZTXyEdQ7pKVCiQZbD8uFrz2en7agltiKkotGXEzYpcfAvRVqG5hTrJuIaPTrmCNz\nz4KwGpxZAgMBAAECggEAAxjDiommru5Z2+DO3LNZRJd39u1/GZomXeNdWo36g4Gh\nX63Y/pSECNU87zaHtCUNYn/XlGYnvaLmVfCoa8qBFzdhGxFvarrXy/gyf9ZYuCpi\nZH4tPbeOnxOOxilS7kWMvTJBH4KsNhf9tuS+bV2QOjD/gg0R64otxzIyzDEWgl0N\n+mJd/AW8aVmqmwRa4K5xhOwkuBa8AxC87ZwAFHqUqRo27GvKtBi8Dl4ampF8sBX3\n3rxaM4+uW3gmAcdcUt4Pnmcqab4kU3mu6fEGD01+n/96BJvJjvl4PLCVzuYukGJA\ngjr9XUKA0L0xSs3wVP3S/v22tuBhfnvXZNLYCb8FeQKBgQDfLzBxXWvogAvBcI9H\nM/cF7GluWRxVGxrmRH7sdWSCrPxo33dawzGbZqRKGwK0XA14NVqB2vc/MSS7DmX2\nYwrpN7a5dvODhC9swO8OqKJT69DaXeZ+cIlHmG2yw7NA1rhBoRPEtSGIDvJvCJJt\nNvnbhfpcIyl4IUMjTNmbEuiENQKBgQDb/rF8iCsWpwDEWTGxiP6xEgPh2t5rJnDi\n+bz4kvj9bKQ1KFhs5GZlOy5ePtv8sFg0xhCht3qBPSccgGAKLuNvdcrojOMQD1yN\ncg1l/Pkipa/nGPA64R+vZRf4vAo55UB5rvL1cOI0datGVWd4CFp4/Mf4sL8tEUwJ\n3rpX4xk0FQKBgQDDONXY8+zl7Mtbo4fQsqXLKqZ2fcAIubLn5NZZI76Nh58qZP5U\nCBWmZzwiDkppVXP6yECpAc3wGp6UeN27jZsHsVJGHMSZL9EEAieZ3OxRGB8SQ7zQ\nsMOEOtMJ4aE0gB2gWrOeBwqTpu9tLERZABPCcAk0+xTVHdNKV3io6vs0WQKBgQCm\nwz+phdMb3caAEJjR2mYutdhJic7WbJJgDC3KRCcIfCVRwl6dVNml3SG+AWpi9w42\nGvoajGoJs+CFA29J6Ncw85q3g6zPzMU813r+l7AHKo/X35ijGWoaW8i7HVenIXgp\nhYvYsBRY7eXCcBT58WMbmYrAosKYmCcKyFJ7MsQ1LQKBgDeLQyFgVP6/MhAaIaHo\n+E+RbYbEsukMoacL4DAl3lOLMO8eXMQUeou2J32gbOTDwA+RW5QqCdScB1d00FkG\nW1jJKfTYhtnBeg8mZo/3/UmGPBNQprXnpjJ6RHTaIJ3e0dk9Wi7jP5jsrtv63YLj\ndIcdCAmXpIOHYCo6aXjqHqW/\n-----END PRIVATE KEY-----
```

**⚠️ Important :**
- ❌ **Ne mettez PAS de guillemets**
- ✅ Gardez les `\n` (ne les remplacez pas)

---

## 📝 Étapes Complètes

1. **Allez sur Vercel** → Votre projet → **Settings** → **Environment Variables**

2. **Trouvez** `GOOGLE_PRIVATE_KEY` et **supprimez-la**

3. **Cliquez sur "Add New"**

4. **Name:** `GOOGLE_PRIVATE_KEY`

5. **Value:** Collez la clé selon l'**Option 1** (avec vrais sauts de ligne, sans guillemets)

6. **Environments:** Cochez ✅ **Production** et ✅ **Preview**

7. **Cliquez sur "Save"**

8. **Redéployez** le projet :
   - Allez dans **Deployments**
   - Cliquez sur les 3 points (⋯) du dernier déploiement
   - Sélectionnez **"Redeploy"**

9. **Vérifiez les logs** après le redéploiement :
   - Vous devriez voir `✅ Successfully inserted to Google Sheet` au lieu de l'erreur

---

## 🔍 Comment Vérifier que ça Fonctionne

Après le redéploiement, testez le formulaire de devis. Dans les logs Vercel, vous devriez voir :

```
✅ Using Service Account authentication: nova-devis@...
🔑 Private key format: { length: XXX, hasNewlines: true, lineCount: XX }
✅ Successfully inserted to Google Sheet
```

Au lieu de :
```
❌ Error: error:1E08010C:DECODER routines::unsupported
```

---

## 💡 Astuce

Si vous avez le fichier JSON du compte de service :

1. Ouvrez le fichier `.json`
2. Copiez la valeur de `private_key` (sans les guillemets du JSON)
3. Dans Vercel, collez-la avec de vrais sauts de ligne :
   - Ajoutez `-----BEGIN PRIVATE KEY-----` au début
   - Ajoutez `-----END PRIVATE KEY-----` à la fin
   - Assurez-vous qu'il y a un saut de ligne après BEGIN et avant END

---

**Une fois reformatée et redéployée, l'erreur devrait disparaître !** 🎉






