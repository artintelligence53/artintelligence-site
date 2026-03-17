export type Language = 'de' | 'en' | 'fr';

export const translations = {
  de: {
    nav: {
      home: 'Home',
      services: 'Leistungen',
      solutions: 'Lösungen',
      about: 'Über uns',
      contact: 'Kontakt',
      bookCall: 'Gespräch buchen',
    },
    hero: {
      title: 'Arbeitszeit zurückgewinnen.',
      titleHighlight: 'Antwortzeiten verkürzen.',
      titleEnd: 'Keine Anfrage verpassen.',
      subtitle: 'ARTintelligence hilft kleinen und mittelgrossen Unternehmen mit smarter KI, Routinearbeit zu automatisieren und täglich Stunden zu sparen.',
      cta: 'Kostenloses Erstgespräch',
      stats: {
        availability: '24/7 Verfügbar',
        solutions: '5+ KI-Lösungen',
        guarantee: '30 Tage Garantie',
      },
    },
    problem: {
      title: 'Die tägliche Realität vieler Unternehmen',
      items: [
        'Stundenlang E-Mails beantworten statt im Geschäft zu arbeiten',
        'Verpasste Anrufe bedeuten verlorene Kunden',
        'Anfragen versickern, weil niemand Zeit hat',
        'Manuelle Datenpflege frisst Arbeitszeit',
        'Langsame Reaktionszeiten kosten Aufträge',
      ],
    },
    solution: {
      title: 'Ihre Lösung: Intelligente Automatisierung',
      subtitle: 'Während Sie sich aufs Wesentliche konzentrieren, übernimmt unsere KI die Routinearbeit',
      benefits: [
        { title: 'Zeit sparen', desc: 'Bis zu 20 Stunden pro Woche zurückgewinnen' },
        { title: 'Schneller reagieren', desc: 'Antwortzeiten von Stunden auf Sekunden reduzieren' },
        { title: 'Leads erfassen', desc: 'Keine Anfrage mehr verpassen, 24/7' },
        { title: 'Kosten senken', desc: 'Administrative Kosten um bis zu 60% reduzieren' },
      ],
    },
    services: {
      title: 'Unsere KI-Lösungen',
      subtitle: 'Einzeln oder als komplettes Automatisierungs-Ökosystem',
      items: [
        {
          title: 'AI Office Assistent',
          description: 'Die KI übernimmt Routinearbeit, damit Sie täglich mehrere Stunden Verwaltungszeit zurückgewinnen.',
          features: [
            'Liest und beantwortet E-Mails automatisch',
            'Plant Termine direkt im Kalender',
            'Schreibt Angebote und Rechnungen nach Vorlage',
            'Erinnert an offene Aufgaben',
          ],
        },
        {
          title: 'Telefon-Assistent 24/7',
          description: 'Kein Anruf geht verloren. Nimmt Gespräche professionell entgegen, bucht Termine und qualifiziert Leads.',
          features: [
            'Nimmt alle Telefonanrufe rund um die Uhr entgegen',
            'Spricht natürlich (Deutsch/Englisch/Französisch)',
            'Bucht Termine direkt in den Kalender',
            'Informiert nur bei wichtigen Anrufen',
          ],
        },
        {
          title: 'AI Sales Chatbot',
          description: 'Begrüsst Besucher, beantwortet Fragen in Sekunden und führt Interessenten zur Anfrage.',
          features: [
            'Beantwortet Fragen sofort',
            'Empfiehlt passende Produkte oder Dienstleistungen',
            'Qualifiziert Anfragen strukturiert',
            'Mehrsprachig möglich',
          ],
        },
        {
          title: 'AI Data Cleanup & Quality',
          description: 'Automatisierte Datenpflege, damit CRM, Marketing und Administration verlässlich laufen.',
          features: [
            'Führt Daten zusammen, standardisiert Formate',
            'Erkennt und behebt Dubletten',
            'Stellt Sonderfälle in Review-Liste bereit',
            'Hält Datenqualität dauerhaft hoch',
          ],
        },
        {
          title: 'AI Dynamic Offer System',
          description: 'Automatisierte Angebotserstellung basierend auf Kundenanforderungen und Preislogik.',
          features: [
            'Erstellt massgeschneiderte Angebote automatisch',
            'Dynamische Preiskalkulation nach definierten Regeln',
            'Sofortige Zustellung an Kunden',
            'Integriert mit CRM und Buchhaltung',
          ],
        },
      ],
    },
    process: {
      title: 'So einfach starten Sie',
      steps: [
        { title: 'Kostenloses Erstgespräch', desc: 'Wir analysieren Ihre Prozesse und zeigen Einsparpotenziale' },
        { title: 'Massgeschneiderte Implementierung', desc: 'Wir richten die KI auf Ihre Bedürfnisse ein' },
        { title: 'Go-Live & Training', desc: 'Sie und Ihr Team werden eingearbeitet' },
        { title: 'Zahlung bei Zufriedenheit', desc: 'Nur wenn Sie zufrieden sind, bezahlen Sie' },
      ],
    },
    trust: {
      title: 'Sicherheit & Vertrauen',
      items: [
        { title: '30-Tage Geld-zurück-Garantie', desc: 'Nicht zufrieden? Volle Rückerstattung.' },
        { title: 'Datensicherheit', desc: 'Schweizer Hosting, DSGVO-konform, NDA möglich' },
        { title: 'Faire Preise', desc: 'Transparente Kosten, keine versteckten Gebühren' },
        { title: 'Persönlicher Support', desc: 'Direkter Draht zu den Gründern' },
      ],
    },
    chatbot: {
      title: 'Unser AI Chatbot in Aktion',
      subtitle: 'So fühlt sich moderne Kundenbetreuung an',
      messages: [
        { type: 'user', text: 'Welche Lösung passt zu meinem Unternehmen?' },
        { type: 'bot', text: 'Gerne helfe ich Ihnen! Wie viele E-Mails bearbeiten Sie täglich?' },
        { type: 'user', text: 'Etwa 30-40 E-Mails' },
        { type: 'bot', text: 'Verstehe. Unser AI Office Assistent könnte Ihnen täglich 2-3 Stunden sparen. Möchten Sie mehr erfahren?' },
      ],
    },
    roi: {
      title: 'Berechnen Sie Ihr Einsparpotenzial',
      subtitle: 'Wie viel Zeit und Geld können Sie mit KI-Automatisierung sparen?',
      inputs: {
        emails: 'E-Mails pro Tag',
        timePerEmail: 'Minuten pro E-Mail',
        calls: 'Anrufe pro Woche',
        missedLeads: 'Verpasste Anfragen pro Woche',
        hourlyCost: 'Stundenlohn (CHF)',
      },
      results: {
        title: 'Ihr Einsparpotenzial',
        hourlySaved: 'Stunden gespart pro Monat',
        costSaved: 'Kostenersparnis pro Monat',
        revenuePotential: 'Zusätzliches Umsatzpotenzial',
        cta: 'Jetzt kostenloses Gespräch buchen',
      },
      calculate: 'Berechnen',
    },
    contact: {
      title: 'Bereit, Zeit zurückzugewinnen?',
      subtitle: 'Buchen Sie jetzt Ihr kostenloses Erstgespräch mit Demo',
      noCommitment: 'Keine Verpflichtung. Kein Verkaufsdruck.',
      bookCall: 'Termin buchen (Calendly)',
      email: 'Per E-Mail kontaktieren',
      info: {
        contact: 'Kontakt',
        phone: 'Telefon',
        location: 'Standort',
        partners: 'Ihre Partner',
      },
      location: 'Interlaken, Schweiz',
      partners: 'Paul Breitenstein & Max Gureck',
    },
    footer: {
      rights: 'Alle Rechte vorbehalten.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      solutions: 'Solutions',
      about: 'About',
      contact: 'Contact',
      bookCall: 'Book a Call',
    },
    hero: {
      title: 'Reclaim Your Time.',
      titleHighlight: 'Reduce Response Times.',
      titleEnd: 'Never Miss a Lead.',
      subtitle: 'ARTintelligence helps small and medium-sized businesses automate routine work with smart AI and save hours every day.',
      cta: 'Free Consultation',
      stats: {
        availability: '24/7 Available',
        solutions: '5+ AI Solutions',
        guarantee: '30-Day Guarantee',
      },
    },
    problem: {
      title: 'The Daily Reality of Many Businesses',
      items: [
        'Hours spent answering emails instead of working on the business',
        'Missed calls mean lost customers',
        'Inquiries get lost because no one has time',
        'Manual data maintenance eats up work time',
        'Slow response times cost orders',
      ],
    },
    solution: {
      title: 'Your Solution: Intelligent Automation',
      subtitle: 'While you focus on what matters, our AI handles the routine work',
      benefits: [
        { title: 'Save Time', desc: 'Reclaim up to 20 hours per week' },
        { title: 'Respond Faster', desc: 'Reduce response times from hours to seconds' },
        { title: 'Capture Leads', desc: 'Never miss an inquiry, 24/7' },
        { title: 'Cut Costs', desc: 'Reduce administrative costs by up to 60%' },
      ],
    },
    services: {
      title: 'Our AI Solutions',
      subtitle: 'Individual services or complete automation ecosystem',
      items: [
        {
          title: 'AI Office Assistant',
          description: 'The AI takes over routine work so you can reclaim several hours of administrative time daily.',
          features: [
            'Reads and answers emails automatically',
            'Schedules appointments directly in calendar',
            'Writes quotes and invoices from templates',
            'Reminds about pending tasks',
          ],
        },
        {
          title: '24/7 Phone Assistant',
          description: 'No call goes unanswered. Takes calls professionally, books appointments and qualifies leads.',
          features: [
            'Takes all phone calls around the clock',
            'Speaks naturally (German/English/French)',
            'Books appointments directly in calendar',
            'Only notifies for important calls',
          ],
        },
        {
          title: 'AI Sales Chatbot',
          description: 'Greets visitors, answers questions in seconds and guides prospects to inquiry.',
          features: [
            'Answers questions instantly',
            'Recommends suitable products or services',
            'Qualifies inquiries systematically',
            'Multilingual possible',
          ],
        },
        {
          title: 'AI Data Cleanup & Quality',
          description: 'Automated data maintenance so CRM, marketing and administration run reliably.',
          features: [
            'Merges data, standardizes formats',
            'Detects and fixes duplicates',
            'Provides special cases in review list',
            'Maintains data quality permanently',
          ],
        },
        {
          title: 'AI Dynamic Offer System',
          description: 'Automated offer creation based on customer requirements and pricing logic.',
          features: [
            'Creates customized offers automatically',
            'Dynamic price calculation by defined rules',
            'Instant delivery to customers',
            'Integrated with CRM and accounting',
          ],
        },
      ],
    },
    process: {
      title: 'How to Get Started',
      steps: [
        { title: 'Free Consultation', desc: 'We analyze your processes and show savings potential' },
        { title: 'Custom Implementation', desc: 'We set up the AI for your needs' },
        { title: 'Go-Live & Training', desc: 'You and your team get trained' },
        { title: 'Pay When Satisfied', desc: 'Only pay when you are satisfied' },
      ],
    },
    trust: {
      title: 'Security & Trust',
      items: [
        { title: '30-Day Money-Back Guarantee', desc: 'Not satisfied? Full refund.' },
        { title: 'Data Security', desc: 'Swiss hosting, GDPR compliant, NDA available' },
        { title: 'Fair Pricing', desc: 'Transparent costs, no hidden fees' },
        { title: 'Personal Support', desc: 'Direct line to the founders' },
      ],
    },
    chatbot: {
      title: 'Our AI Chatbot in Action',
      subtitle: 'This is what modern customer service feels like',
      messages: [
        { type: 'user', text: 'Which solution fits my business?' },
        { type: 'bot', text: 'Happy to help! How many emails do you process daily?' },
        { type: 'user', text: 'About 30-40 emails' },
        { type: 'bot', text: 'I see. Our AI Office Assistant could save you 2-3 hours daily. Want to learn more?' },
      ],
    },
    roi: {
      title: 'Calculate Your Savings Potential',
      subtitle: 'How much time and money can you save with AI automation?',
      inputs: {
        emails: 'Emails per day',
        timePerEmail: 'Minutes per email',
        calls: 'Calls per week',
        missedLeads: 'Missed inquiries per week',
        hourlyCost: 'Hourly rate (CHF)',
      },
      results: {
        title: 'Your Savings Potential',
        hourlySaved: 'Hours saved per month',
        costSaved: 'Cost savings per month',
        revenuePotential: 'Additional revenue potential',
        cta: 'Book free consultation now',
      },
      calculate: 'Calculate',
    },
    contact: {
      title: 'Ready to Reclaim Your Time?',
      subtitle: 'Book your free consultation with demo now',
      noCommitment: 'No commitment. No sales pressure.',
      bookCall: 'Book Appointment (Calendly)',
      email: 'Contact via Email',
      info: {
        contact: 'Contact',
        phone: 'Phone',
        location: 'Location',
        partners: 'Your Partners',
      },
      location: 'Interlaken, Switzerland',
      partners: 'Paul Breitenstein & Max Gureck',
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      solutions: 'Solutions',
      about: 'À propos',
      contact: 'Contact',
      bookCall: 'Réserver un appel',
    },
    hero: {
      title: 'Récupérez votre temps.',
      titleHighlight: 'Réduisez les délais de réponse.',
      titleEnd: 'Ne manquez aucune demande.',
      subtitle: 'ARTintelligence aide les petites et moyennes entreprises à automatiser le travail routinier avec une IA intelligente et à économiser des heures chaque jour.',
      cta: 'Consultation gratuite',
      stats: {
        availability: 'Disponible 24/7',
        solutions: '5+ Solutions IA',
        guarantee: 'Garantie 30 jours',
      },
    },
    problem: {
      title: 'La réalité quotidienne de nombreuses entreprises',
      items: [
        'Des heures à répondre aux e-mails au lieu de travailler sur l\'entreprise',
        'Les appels manqués signifient des clients perdus',
        'Les demandes se perdent car personne n\'a le temps',
        'La maintenance manuelle des données dévore du temps de travail',
        'Les temps de réponse lents coûtent des commandes',
      ],
    },
    solution: {
      title: 'Votre solution : Automatisation intelligente',
      subtitle: 'Pendant que vous vous concentrez sur l\'essentiel, notre IA gère le travail routinier',
      benefits: [
        { title: 'Gagner du temps', desc: 'Récupérez jusqu\'à 20 heures par semaine' },
        { title: 'Répondre plus vite', desc: 'Réduisez les délais de réponse d\'heures à secondes' },
        { title: 'Capturer les leads', desc: 'Ne manquez aucune demande, 24/7' },
        { title: 'Réduire les coûts', desc: 'Réduisez les coûts administratifs jusqu\'à 60%' },
      ],
    },
    services: {
      title: 'Nos solutions IA',
      subtitle: 'Services individuels ou écosystème d\'automatisation complet',
      items: [
        {
          title: 'Assistant de Bureau IA',
          description: 'L\'IA prend en charge le travail routinier pour que vous puissiez récupérer plusieurs heures de temps administratif par jour.',
          features: [
            'Lit et répond aux e-mails automatiquement',
            'Planifie les rendez-vous directement dans le calendrier',
            'Rédige les devis et factures à partir de modèles',
            'Rappelle les tâches en attente',
          ],
        },
        {
          title: 'Assistant Téléphonique 24/7',
          description: 'Aucun appel sans réponse. Prend les appels professionnellement, réserve des rendez-vous et qualifie les leads.',
          features: [
            'Prend tous les appels téléphoniques 24h/24',
            'Parle naturellement (allemand/anglais/français)',
            'Réserve les rendez-vous directement dans le calendrier',
            'Ne notifie que pour les appels importants',
          ],
        },
        {
          title: 'Chatbot de Vente IA',
          description: 'Accueille les visiteurs, répond aux questions en quelques secondes et guide les prospects vers la demande.',
          features: [
            'Répond aux questions instantanément',
            'Recommande des produits ou services appropriés',
            'Qualifie les demandes de manière systématique',
            'Multilingue possible',
          ],
        },
        {
          title: 'Nettoyage de Données IA',
          description: 'Maintenance automatisée des données pour que CRM, marketing et administration fonctionnent de manière fiable.',
          features: [
            'Fusionne les données, standardise les formats',
            'Détecte et corrige les doublons',
            'Fournit les cas spéciaux dans la liste de révision',
            'Maintient la qualité des données en permanence',
          ],
        },
        {
          title: 'Système d\'Offre Dynamique IA',
          description: 'Création automatisée d\'offres basée sur les exigences du client et la logique de tarification.',
          features: [
            'Crée des offres personnalisées automatiquement',
            'Calcul dynamique des prix selon des règles définies',
            'Livraison instantanée aux clients',
            'Intégré avec CRM et comptabilité',
          ],
        },
      ],
    },
    process: {
      title: 'Comment démarrer',
      steps: [
        { title: 'Consultation gratuite', desc: 'Nous analysons vos processus et montrons le potentiel d\'économies' },
        { title: 'Implémentation personnalisée', desc: 'Nous configurons l\'IA selon vos besoins' },
        { title: 'Mise en service et formation', desc: 'Vous et votre équipe êtes formés' },
        { title: 'Payer si satisfait', desc: 'Ne payez que si vous êtes satisfait' },
      ],
    },
    trust: {
      title: 'Sécurité et confiance',
      items: [
        { title: 'Garantie de remboursement 30 jours', desc: 'Pas satisfait? Remboursement complet.' },
        { title: 'Sécurité des données', desc: 'Hébergement suisse, conforme RGPD, NDA disponible' },
        { title: 'Prix équitables', desc: 'Coûts transparents, pas de frais cachés' },
        { title: 'Support personnel', desc: 'Ligne directe avec les fondateurs' },
      ],
    },
    chatbot: {
      title: 'Notre Chatbot IA en action',
      subtitle: 'Voici à quoi ressemble un service client moderne',
      messages: [
        { type: 'user', text: 'Quelle solution convient à mon entreprise?' },
        { type: 'bot', text: 'Heureux de vous aider! Combien d\'e-mails traitez-vous quotidiennement?' },
        { type: 'user', text: 'Environ 30-40 e-mails' },
        { type: 'bot', text: 'Je vois. Notre Assistant de Bureau IA pourrait vous faire gagner 2-3 heures par jour. Voulez-vous en savoir plus?' },
      ],
    },
    roi: {
      title: 'Calculez votre potentiel d\'économies',
      subtitle: 'Combien de temps et d\'argent pouvez-vous économiser avec l\'automatisation IA?',
      inputs: {
        emails: 'E-mails par jour',
        timePerEmail: 'Minutes par e-mail',
        calls: 'Appels par semaine',
        missedLeads: 'Demandes manquées par semaine',
        hourlyCost: 'Tarif horaire (CHF)',
      },
      results: {
        title: 'Votre potentiel d\'économies',
        hourlySaved: 'Heures économisées par mois',
        costSaved: 'Économies de coûts par mois',
        revenuePotential: 'Potentiel de revenus supplémentaires',
        cta: 'Réserver une consultation gratuite maintenant',
      },
      calculate: 'Calculer',
    },
    contact: {
      title: 'Prêt à récupérer votre temps?',
      subtitle: 'Réservez maintenant votre consultation gratuite avec démo',
      noCommitment: 'Aucun engagement. Aucune pression de vente.',
      bookCall: 'Réserver un rendez-vous (Calendly)',
      email: 'Contacter par e-mail',
      info: {
        contact: 'Contact',
        phone: 'Téléphone',
        location: 'Emplacement',
        partners: 'Vos partenaires',
      },
      location: 'Interlaken, Suisse',
      partners: 'Paul Breitenstein & Max Gureck',
    },
    footer: {
      rights: 'Tous droits réservés.',
    },
  },
};

export function getTranslation(lang: Language) {
  return translations[lang] || translations.de;
}
