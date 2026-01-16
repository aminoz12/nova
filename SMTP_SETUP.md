# Configuration SMTP pour l'envoi d'emails

## 📧 Configuration requise

Pour activer l'envoi d'emails via SMTP, vous devez configurer les variables d'environnement suivantes dans un fichier `.env.local` à la racine du projet.

## 🔧 Étapes de configuration

### 1. Créer le fichier `.env.local`

Créez un fichier `.env.local` à la racine du projet avec le contenu suivant :

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=votre-email@gmail.com
SMTP_PASSWORD=votre-mot-de-passe-application
SMTP_FROM=contact@nova-ssi.fr
```

### 2. Configurer Gmail (Exemple)

Si vous utilisez Gmail :

1. **Activer la validation en 2 étapes** sur votre compte Google
2. **Générer un mot de passe d'application** :
   - Allez sur https://myaccount.google.com/apppasswords
   - Sélectionnez "Mail" et "Autre (nom personnalisé)"
   - Entrez "Nova SSI Website"
   - Copiez le mot de passe généré (16 caractères)
3. Utilisez ce mot de passe d'application dans `SMTP_PASSWORD`

**Configuration Gmail :**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=votre-email@gmail.com
SMTP_PASSWORD=votre-mot-de-passe-application-16-caracteres
SMTP_FROM=contact@nova-ssi.fr
```

### 3. Configurer Outlook/Hotmail

**Configuration Outlook :**
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=votre-email@outlook.com
SMTP_PASSWORD=votre-mot-de-passe
SMTP_FROM=contact@nova-ssi.fr
```

### 4. Configurer un serveur SMTP personnalisé

Si vous avez votre propre serveur SMTP :

```env
SMTP_HOST=smtp.votre-domaine.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=contact@votre-domaine.com
SMTP_PASSWORD=votre-mot-de-passe
SMTP_FROM=contact@nova-ssi.fr
```

### 5. Utiliser un service d'email professionnel

#### SendGrid :
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASSWORD=votre-api-key-sendgrid
SMTP_FROM=contact@nova-ssi.fr
```

#### Mailgun :
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=postmaster@mg.votre-domaine.com
SMTP_PASSWORD=votre-api-key-mailgun
SMTP_FROM=contact@nova-ssi.fr
```

## 📦 Installation de nodemailer

L'API utilise `nodemailer` pour envoyer les emails. Installez-le avec :

```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

## ✅ Vérification

Après configuration, tous les formulaires de contact enverront des emails à **contact@nova-ssi.fr** via SMTP.

Les formulaires concernés :
- Formulaire de contact (page principale)
- Formulaire de contact (page /contact)
- Formulaire de devis (page /devis)
- Formulaires de contact sur les pages de services

## 🔒 Sécurité

- ⚠️ **NE COMMITEZ JAMAIS** le fichier `.env.local` sur Git
- Le fichier `.env.local` est déjà dans `.gitignore`
- Utilisez des mots de passe d'application pour Gmail, pas votre mot de passe principal
- Pour la production, configurez ces variables dans votre plateforme d'hébergement (Vercel, Netlify, etc.)

## 🐛 Dépannage

**Erreur : "Invalid login"**
- Vérifiez que SMTP_USER et SMTP_PASSWORD sont corrects
- Pour Gmail, utilisez un mot de passe d'application

**Erreur : "Connection timeout"**
- Vérifiez SMTP_HOST et SMTP_PORT
- Assurez-vous que le port n'est pas bloqué par un firewall

**Emails non reçus**
- Vérifiez le dossier spam
- Vérifiez que SMTP_FROM est configuré correctement
- Vérifiez les logs du serveur pour les erreurs

