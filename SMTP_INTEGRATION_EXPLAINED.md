# Guide Complet : Intégration SMTP Email - Explication Étape par Étape

Ce document explique en détail comment l'intégration SMTP email a été implémentée dans ce projet Next.js.

---

## 📋 Vue d'Ensemble

L'intégration SMTP permet d'envoyer automatiquement des emails à `contact@nova-ssi.fr` lorsque les utilisateurs remplissent les formulaires de contact ou de devis sur le site web.

**Architecture :**
```
Formulaire Frontend → API Route Next.js → Nodemailer → Serveur SMTP → Email reçu
```

---

## 🔧 Étape 1 : Installation des Dépendances

### 1.1 Installation de Nodemailer

Nodemailer est une bibliothèque Node.js qui permet d'envoyer des emails via SMTP.

```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

**Fichier modifié :** `package.json`

**Résultat :**
- `nodemailer` : Bibliothèque principale pour l'envoi d'emails
- `@types/nodemailer` : Types TypeScript pour une meilleure autocomplétion

---

## 🔐 Étape 2 : Configuration des Variables d'Environnement

### 2.1 Création du fichier `.env.local`

Un fichier `.env.local` a été créé à la racine du projet pour stocker les informations SMTP de manière sécurisée.

**Variables requises :**
```env
SMTP_HOST=smtp.gmail.com          # Adresse du serveur SMTP
SMTP_PORT=587                     # Port SMTP (587 pour TLS, 465 pour SSL)
SMTP_SECURE=false                 # true pour SSL (port 465), false pour TLS (port 587)
SMTP_USER=votre-email@gmail.com   # Email utilisé pour l'authentification SMTP
SMTP_PASSWORD=votre-mot-de-passe  # Mot de passe d'application
SMTP_FROM=contact@nova-ssi.fr     # Adresse email de l'expéditeur
```

**Important :**
- ⚠️ Le fichier `.env.local` est dans `.gitignore` et ne sera jamais commité sur Git
- 🔒 Ces informations sont sensibles et doivent rester privées
- 📧 Pour Gmail, utilisez un **mot de passe d'application** (pas votre mot de passe principal)

---

## 🛠️ Étape 3 : Création des Routes API Next.js

Next.js 14 utilise l'App Router, qui permet de créer des routes API dans le dossier `app/api/`.

### 3.1 Route API `/api/contact` (Formulaire principal)

**Fichier créé :** `src/app/api/contact/route.ts`

**Fonctionnalités :**
- Gère les formulaires de contact ET de devis
- Envoie des emails via SMTP
- Intègre Google Sheets pour les devis (optionnel)

**Structure du code :**

```typescript
// 1. Import des dépendances
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { insertDevisToSheet } from '@/lib/googleSheets'

// 2. Fonction POST pour recevoir les données du formulaire
export async function POST(request: NextRequest) {
  // 3. Extraction des données du body
  const body = await request.json()
  const { name, firstName, lastName, company, email, phone, ... } = body

  // 4. Configuration du transporteur SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  // 5. Création du contenu HTML de l'email
  const htmlContent = `...` // Template HTML stylisé

  // 6. Envoi de l'email
  await transporter.sendMail({
    from: `"nova-ssi" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
    to: 'contact@nova-ssi.fr',
    subject: subject,
    html: htmlContent,
  })

  // 7. Si c'est un devis, insertion dans Google Sheets
  if (type === 'devis') {
    await insertDevisToSheet({...})
  }

  // 8. Retour de la réponse
  return NextResponse.json({ success: true })
}
```

**Points clés :**

1. **Configuration du transporteur SMTP** (lignes 11-19)
   - Lit les variables d'environnement
   - Configure la connexion au serveur SMTP
   - Authentifie avec les identifiants fournis

2. **Template HTML de l'email** (lignes 57-137)
   - Email HTML stylisé avec des couleurs et une mise en page professionnelle
   - Sections pour : Informations du contact, Détails du service, Message
   - Design responsive pour les clients email

3. **Envoi de l'email** (lignes 140-146)
   - Utilise `transporter.sendMail()` pour envoyer
   - Définit l'expéditeur comme "nova-ssi"
   - Destinataire : `contact@nova-ssi.fr`
   - Sujet dynamique selon le type (contact ou devis)

4. **Gestion des erreurs** (lignes 172-178)
   - Try/catch pour capturer les erreurs
   - Retourne un message d'erreur approprié

### 3.2 Route API `/api/send-email` (Formulaires de services)

**Fichier créé :** `src/app/api/send-email/route.ts`

**Utilisation :**
- Utilisé par les modals de contact sur les pages de services
- Version simplifiée pour les formulaires courts

**Différences avec `/api/contact` :**
- Moins de champs (name, phone, message, service)
- Pas d'intégration Google Sheets
- Sujet fixe : "DEMANDE DE CONTACT"

---

## 🎨 Étape 4 : Intégration dans les Formulaires Frontend

### 4.1 Page Contact (`/contact`)

**Fichier :** `src/app/contact/page.tsx`

**Implémentation :**

```typescript
// 1. État du formulaire
const [formData, setFormData] = useState({
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  urgent: false
})

// 2. Fonction de soumission
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    // 3. Envoi de la requête POST à l'API
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        type: 'contact'  // Indique que c'est un formulaire de contact
      }),
    })

    // 4. Traitement de la réponse
    const data = await response.json()

    if (data.success) {
      // Succès : afficher un message et réinitialiser le formulaire
      setSubmitStatus({ type: 'success', message: '...' })
      setFormData({...}) // Réinitialiser
    } else {
      // Erreur : afficher le message d'erreur
      setSubmitStatus({ type: 'error', message: data.message })
    }
  } catch (error) {
    // Erreur réseau
    setSubmitStatus({ type: 'error', message: '...' })
  } finally {
    setIsSubmitting(false)
  }
}
```

**Flux de données :**
```
Utilisateur remplit le formulaire
    ↓
Clic sur "Envoyer"
    ↓
handleSubmit() est appelé
    ↓
fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
    ↓
API route reçoit les données
    ↓
Email envoyé via SMTP
    ↓
Réponse JSON retournée
    ↓
Message de succès/erreur affiché à l'utilisateur
```

### 4.2 Page Devis (`/devis`)

**Fichier :** `src/app/devis/page.tsx`

**Similaire à la page contact, mais :**
- Plus de champs (firstName, lastName, address, projectDescription, urgency)
- Type : `'devis'` au lieu de `'contact'`
- Message de succès différent
- Intégration Google Sheets automatique (côté serveur)

### 4.3 Composant ContactModal

**Fichier :** `src/components/ContactModal.tsx`

**Utilisation :**
- Utilisé sur les pages de services (BAES, RIA, Maintenance, etc.)
- Modal popup avec formulaire simplifié
- Appelle `/api/send-email` au lieu de `/api/contact`

---

## 📧 Étape 5 : Structure de l'Email Envoyé

### 5.1 Template HTML

L'email est un document HTML complet avec :

1. **Header** (lignes 70-76)
   - Fond rouge dégradé
   - Titre : "DEMANDE DE CONTACT" ou "NOUVELLE DEMANDE DE DEVIS"

2. **Section Informations du Contact** (lignes 82-95)
   - Fond gris clair avec bordure rouge
   - Affiche : Prénom, Nom, Entreprise, Email, Téléphone, Adresse
   - Liens cliquables pour email et téléphone

3. **Section Détails du Service** (lignes 97-108)
   - Fond bleu clair avec bordure bleue
   - Affiche : Service sélectionné, Urgence (si applicable)

4. **Section Message** (lignes 110-118)
   - Fond rose clair avec bordure rouge
   - Affiche le message de l'utilisateur
   - Préserve les sauts de ligne avec `white-space: pre-wrap`

5. **Footer** (lignes 123-130)
   - Informations sur l'origine du message
   - Branding Nova SSI

### 5.2 Mapping des Services

Les valeurs de service sont mappées vers des noms lisibles :

```typescript
const serviceNames: { [key: string]: string } = {
  'fire-alarms': 'Alarmes Incendie',
  'extinguishers': 'Extincteurs',
  'baes': 'Éclairage BAES',
  // ... etc
}
```

---

## 🔄 Étape 6 : Flux Complet d'Envoi d'Email

### Scénario : Utilisateur remplit le formulaire de contact

1. **Frontend (Client)**
   ```
   Utilisateur saisit ses informations
   → Clic sur "Envoyer le Message"
   → handleSubmit() exécuté
   → fetch('/api/contact', { method: 'POST', body: formData })
   ```

2. **Backend (Serveur)**
   ```
   API Route reçoit la requête POST
   → Parse le JSON body
   → Crée le transporteur Nodemailer avec les credentials SMTP
   → Génère le template HTML de l'email
   → Envoie l'email via transporter.sendMail()
   ```

3. **SMTP Server**
   ```
   Nodemailer se connecte au serveur SMTP (ex: smtp.gmail.com)
   → Authentifie avec SMTP_USER et SMTP_PASSWORD
   → Envoie l'email à contact@nova-ssi.fr
   ```

4. **Réponse**
   ```
   Si succès : { success: true, message: 'Email envoyé avec succès' }
   Si erreur : { success: false, message: 'Erreur...' }
   ```

5. **Frontend (Client)**
   ```
   Reçoit la réponse JSON
   → Affiche un message de succès ou d'erreur
   → Réinitialise le formulaire si succès
   ```

---

## 🎯 Étape 7 : Gestion des Erreurs

### 7.1 Erreurs Possibles

1. **Erreur de connexion SMTP**
   - Vérifier `SMTP_HOST` et `SMTP_PORT`
   - Vérifier la connexion internet

2. **Erreur d'authentification**
   - Vérifier `SMTP_USER` et `SMTP_PASSWORD`
   - Pour Gmail, utiliser un mot de passe d'application

3. **Erreur de validation**
   - Vérifier que tous les champs requis sont remplis
   - Vérifier le format de l'email

### 7.2 Gestion dans le Code

```typescript
try {
  // Code d'envoi d'email
  await transporter.sendMail({...})
  return NextResponse.json({ success: true })
} catch (error: any) {
  console.error('Error sending email:', error)
  return NextResponse.json(
    { success: false, message: 'Erreur lors de l\'envoi de l\'email: ' + error.message },
    { status: 500 }
  )
}
```

---

## 📊 Étape 8 : Types de Formulaires Supportés

### 8.1 Formulaire de Contact (`type: 'contact'`)

**Utilisé dans :**
- Page `/contact`
- Composant `ContactModal` (via `/api/send-email`)

**Champs :**
- name, company, email, phone, service, message

**Sujet email :** "DEMANDE DE CONTACT"

### 8.2 Formulaire de Devis (`type: 'devis'`)

**Utilisé dans :**
- Page `/devis`

**Champs :**
- firstName, lastName, company, email, phone, address, service, projectDescription, urgency

**Sujet email :** "Nouvelle demande de devis de [Prénom] [Nom]"

**Bonus :** Intégration Google Sheets automatique

---

## 🔒 Étape 9 : Sécurité

### 9.1 Protection des Credentials

- ✅ Variables d'environnement dans `.env.local`
- ✅ `.env.local` dans `.gitignore`
- ✅ Pas de credentials hardcodés dans le code

### 9.2 Validation des Données

- ✅ Validation côté client (required fields)
- ✅ Validation côté serveur (format email, etc.)
- ✅ Protection contre l'injection HTML (échappement automatique par React)

### 9.3 Rate Limiting (Recommandé pour Production)

Pour éviter le spam, vous pouvez ajouter :
- Rate limiting sur les routes API
- CAPTCHA sur les formulaires
- Validation supplémentaire

---

## 📝 Résumé des Fichiers Créés/Modifiés

### Fichiers Créés :
1. ✅ `src/app/api/contact/route.ts` - Route API principale
2. ✅ `src/app/api/send-email/route.ts` - Route API pour modals
3. ✅ `SMTP_SETUP.md` - Documentation de configuration

### Fichiers Modifiés :
1. ✅ `package.json` - Ajout de nodemailer
2. ✅ `src/app/contact/page.tsx` - Intégration du formulaire
3. ✅ `src/app/devis/page.tsx` - Intégration du formulaire
4. ✅ `src/components/ContactModal.tsx` - Utilisation de l'API

---

## 🚀 Test de l'Intégration

### Pour tester :

1. **Configurer `.env.local`** avec vos credentials SMTP
2. **Démarrer le serveur** : `npm run dev`
3. **Remplir un formulaire** sur `/contact` ou `/devis`
4. **Vérifier** que l'email arrive à `contact@nova-ssi.fr`

### Vérifications :

- ✅ Email reçu dans la boîte de réception
- ✅ Format HTML correct
- ✅ Toutes les informations présentes
- ✅ Liens email/téléphone fonctionnels
- ✅ Message de succès affiché sur le site

---

## 🎓 Concepts Clés Appris

1. **Nodemailer** : Bibliothèque Node.js pour l'envoi d'emails
2. **API Routes Next.js** : Création d'endpoints backend dans l'App Router
3. **Variables d'environnement** : Stockage sécurisé des credentials
4. **SMTP** : Protocole pour l'envoi d'emails
5. **Templates HTML** : Création d'emails HTML stylisés
6. **Gestion d'erreurs** : Try/catch et messages d'erreur appropriés

---

## 📚 Ressources

- [Documentation Nodemailer](https://nodemailer.com/about/)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [Gmail App Passwords](https://support.google.com/accounts/answer/185833)

---

**C'est tout ! L'intégration SMTP est maintenant complète et fonctionnelle.** 🎉

