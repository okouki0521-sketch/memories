document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.getElementById('main-order-form');
    const formSuccess = document.getElementById('form-success');
    const fileInput = document.getElementById('file-input');
    const fileList = document.getElementById('file-list');

    // Language Switching Data
    const i18n = {
        en: {
            hero_h1: 'Turn Your Japan Trip Photos Into a <span class="highlight">Cute Memory Video</span>',
            hero_sub: 'Send us your favorite photos and videos from Japan. We’ll create a 30–60 second memory movie within 24 hours.',
            hero_secondary: 'Don\'t let your memories fade away. Turn them into a movie.',
            cta_send: 'Order Your Movie Now',
            video_caption: 'Sample: Japan Trip 🌸',
            how_title: 'How it Works',
            step1_t: 'Fill out the order form',
            step1_p: 'Tell us about your trip and choose your plan.',
            step2_t: 'Complete Payment',
            step2_p: 'Secure checkout via Square.',
            step3_t: 'Upload Photos',
            step3_p: 'Upload your photos/videos easily through our secure link.',
            step4_t: 'Receive Your Movie',
            step4_p: 'We deliver your cute memory movie within 24 hours!',
            pricing_title: 'Simple Pricing',
            pricing_subtitle: 'The Perfect Japan Memory Movie',
            most_popular: 'Most Popular',
            basic_title: 'Basic',
            basic_price: 'Free',
            basic_feat1: 'Short sample memory video',
            basic_feat2: 'Great for trying the service',
            basic_feat3: 'Up to 7 photos/videos',
            basic_feat4: 'Simple edit',
            order_basic: 'Try for Free',
            standard_title: 'Standard',
            standard_price: '¥980',
            standard_feat1: 'Approx. 30 seconds video',
            standard_feat2: 'Up to 15 photos/videos',
            standard_feat3: 'BGM included',
            standard_feat4: 'Date and location text',
            standard_feat5: '1 free revision',
            standard_feat6: 'Delivery within 24 hours',
            order_standard: 'Order Standard',
            premium_title: 'Premium',
            premium_price: '¥2,980',
            premium_feat1: '30–60 second memory movie',
            premium_feat2: 'Up to 30 photos/videos',
            premium_feat3: 'More customized style',
            premium_feat4: 'Date, location, and story text',
            premium_feat5: 'Priority editing',
            premium_feat6: '1 free revision',
            order_premium: 'Order Premium',
            safety_title: 'Your Privacy Matters',
            safety1: 'We only use your photos/videos for your order.',
            safety2: 'No public posting without your permission.',
            safety3: 'One free revision included.',
            safety4: 'Delivered within 24 hours.',
            form_title: 'Order Your Movie',
            form_name: 'Your Name',
            form_ig: 'Instagram ID',
            form_email: 'Email (Optional)',
            form_plan: 'Select Plan',
            form_vibe: 'Preferred Video Vibe',
            form_vibe_ph: 'Select a vibe...',
            vibe_calm: 'Relaxing / Calm',
            vibe_fun: 'Fun / Energetic',
            vibe_stylish: 'Stylish / Aesthetic',
            vibe_cool: 'Cool / Cinematic',
            vibe_romantic: 'Romantic / Sweet',
            vibe_emotional: 'Emotional / Nostalgic',
            vibe_any: 'Creator\'s Choice (Leave it to us!)',
            form_photos: 'Photo & Video Delivery',
            form_photos_p: 'After payment, please upload your photos/videos using the link provided.',
            form_error_required: 'Please fill in all required fields.',
            form_places: 'Main Places Visited',
            form_places_ph: 'e.g. Kyoto, Tokyo Disney, Osaka Castle',
            form_captions: 'Preferred Text/Captions',
            form_captions_ph: 'e.g. "Our First Trip Together", "Sakura 2024"',
            form_privacy: 'I agree that my photos/videos will be used only to create my ordered video.',
            form_submit: 'Send Order Request',
            success_title: 'Order Received!',
            success_guide: 'The payment screen has opened in a new tab.<br>After completing your payment, please return to this screen and tap the button below.',
            success_step2_desc: 'Send your photos/videos to us.',
            success_btn_upload: 'Upload Photos & Videos',
            success_fallback: 'If the payment screen didn\'t open automatically, ',
            success_btn_pay: 'click here to pay',
            confirm_upload: 'Is this information correct?',
            footer_text: '© 2024 SakuraMemories - Made with ❤️ in Japan',
            btn_send_dm: 'Open Instagram & Send Photos',
            problem_title: 'Don\'t let your memories fade away',
            problem_1: 'You took many photos in Japan but never edited them.',
            problem_2: 'Your memories are stuck in your camera roll.',
            problem_3: 'Editing videos takes too much time.',
            problem_4: 'You want to post your Japan trip beautifully on social media.',
            solution_title: 'The Perfect Japan Memory Movie',
            solution_1: 'Send up to 30 photos and videos.',
            solution_2: 'Choose your preferred video style.',
            solution_3: 'We add BGM, date, location, and text.',
            solution_4: 'Receive your finished movie within 24 hours.',
            solution_5: 'One free revision included.',
            faq_title: 'FAQ',
            faq_q1: 'How many photos/videos can I send?',
            faq_a1: 'You can send up to 30 photos and videos in total.',
            faq_q2: 'How long is the final video?',
            faq_a2: 'Depending on your plan, the final video is around 30 to 60 seconds.',
            faq_q3: 'How fast can I receive it?',
            faq_a3: 'We usually deliver within 24 hours after receiving all your media.',
            faq_q4: 'Can I request changes?',
            faq_a4: 'Yes. One free revision is included with every order.',
            faq_q5: 'Can I post the video on Instagram or TikTok?',
            faq_a5: 'Yes! The video is formatted specifically for social media (9:16 ratio).',
            faq_q6: 'Will you post my photos without permission?',
            faq_a6: 'No. We respect your privacy and will never post your content without explicit consent.',
            faq_q7: 'How do I send my photos?',
            faq_a7: 'After submitting the order form, please upload your photos/videos using the secure Dropbox link provided on the success page.',
            final_cta_title: 'Ready to turn your Japan trip into a memory movie?',
            final_cta_note: 'Fill out the form and upload your photos/videos through the secure link provided.'
        },
        ja: {
            hero_h1: '日本旅行の思い出を、<span class="highlight">可愛い動画</span>にしませんか？',
            hero_sub: 'お気に入りの写真や動画を送るだけ。24時間以内に30〜60秒の素敵なムービーを作成します。',
            hero_secondary: '思い出を色褪せさせない。一生もののムービーに。',
            cta_send: '動画作成を申し込む',
            video_caption: 'サンプル：日本旅行 🌸',
            how_title: 'ご利用の流れ',
            step1_t: 'フォーム入力',
            step1_p: '旅行の思い出やご希望のプランを入力してください。',
            step2_t: 'お支払い',
            step2_p: 'Square決済で安全にお支払いいただけます。',
            step3_t: '素材のアップロード',
            step3_p: '専用のアップロード画面から写真・動画をお送りください。',
            step4_t: '動画のお受け取り',
            step4_p: '24時間以内に、あなただけの特別なムービーをお届けします！',
            pricing_title: 'シンプルな料金プラン',
            pricing_subtitle: 'あなただけの、完璧な日本旅行の思い出ムービー',
            most_popular: '一番人気',
            basic_title: 'ベーシック',
            basic_price: '無料',
            basic_feat1: 'サンプル動画の作成',
            basic_feat2: 'まずはお試ししたい方に',
            basic_feat3: '写真・動画7枚まで',
            basic_feat4: 'シンプル編集',
            order_basic: '無料でお試し',
            standard_title: 'スタンダード',
            standard_price: '¥980',
            standard_feat1: '約30秒のショート動画',
            standard_feat2: '写真・動画15枚まで',
            standard_feat3: 'BGM付き',
            standard_feat4: '日付・場所のテキスト',
            standard_feat5: '修正1回無料',
            standard_feat6: '24時間以内に納品',
            order_standard: 'スタンダードを申し込む',
            premium_title: 'プレミアム',
            premium_price: '¥2,980',
            premium_feat1: '30〜60秒の思い出ムービー',
            premium_feat2: '写真・動画30枚まで',
            premium_feat3: 'より凝った編集スタイル',
            premium_feat4: '日付・場所・ストーリー文',
            premium_feat5: '優先的に編集',
            premium_feat6: '修正1回無料',
            order_premium: 'プレミアムを申し込む',
            safety_title: 'プライバシーの保護',
            safety1: '素材は動画制作以外には使用しません。',
            safety2: '許可なくSNSに公開することはありません。',
            safety3: '無料での再編集（1回）を含みます。',
            safety4: '24時間以内にスピード納品します。',
            form_title: 'オーダーフォーム',
            form_name: 'お名前',
            form_ig: 'Instagram ID',
            form_email: 'メールアドレス（任意）',
            form_plan: 'プランの選択',
            form_vibe: '動画の希望する雰囲気',
            form_vibe_ph: '雰囲気を選択してください...',
            vibe_calm: '落ち着いた・リラックス',
            vibe_fun: '楽しい・元気な感じ',
            vibe_stylish: 'おしゃれ・Vlog風',
            vibe_cool: 'かっこいい・シネマティック',
            vibe_romantic: 'ロマンチック・カップル向け',
            vibe_emotional: 'エモい・感動的',
            vibe_any: 'おまかせ（クリエイターにお任せ！）',
            form_photos: '写真・動画の送付について',
            form_photos_p: 'お支払い完了後、表示される専用リンクから写真・動画をアップロードしてください。',
            form_error_required: '必須項目が未入力です。赤枠の項目をご記入ください。',
            form_places: '主な訪問先',
            form_places_ph: '例：京都、東京ディズニー、大阪城',
            form_captions: '動画に入れたい文字',
            form_captions_ph: '例：「初めての日本旅行」「桜 2024」など',
            form_privacy: '送付した素材は動画制作のみに使用されることに同意します。',
            form_submit: '申し込む',
            success_title: 'お申し込み完了！',
            success_guide: '決済画面が新しいタブで開きました。<br>お支払いが完了したら、この画面に戻って下のボタンを押してください。',
            success_step2_desc: '使用する写真や動画を送信します。',
            success_btn_upload: '動画・写真をアップロード',
            success_fallback: '※もし決済画面が自動で開かなかった場合は、',
            success_btn_pay: 'こちらをクリックしてお支払いください',
            confirm_upload: 'この内容で間違いないですか？',
            footer_text: '© 2024 SakuraMemories - 日本より愛を込めて ❤️',
            btn_send_dm: '動画・写真をアップロード',
            problem_title: '思い出を色褪せさせないで',
            problem_1: '日本でたくさん写真を撮ったのに、そのままになっていませんか？',
            problem_2: '大切な思い出がスマホの中に眠ったまま。',
            problem_3: '動画編集は時間がかかって面倒。',
            problem_4: '日本旅行の思い出を綺麗にSNSにアップしたい。',
            solution_title: 'あなただけの完璧な思い出ムービー',
            solution_1: '最大30枚の写真・動画をお送りください。',
            solution_2: 'お好みの動画スタイルを選べます。',
            solution_3: 'BGM、日付、場所、テキストをいい感じに追加します。',
            solution_4: '24時間以内に完成した動画をお届けします。',
            solution_5: '1回まで修正が無料です。',
            faq_title: 'よくある質問',
            faq_q1: '写真や動画はいくつ送れますか？',
            faq_a1: '合計で最大30個までお送りいただけます。',
            faq_q2: '完成する動画の長さはどのくらいですか？',
            faq_a2: 'プランにもよりますが、おおよそ30〜60秒の動画になります。',
            faq_q3: 'どのくらいで完成しますか？',
            faq_a3: 'すべての素材を受け取ってから、通常24時間以内に納品いたします。',
            faq_q4: '修正はお願いできますか？',
            faq_a4: 'はい。すべてのオーダーで1回まで無料で修正を承ります。',
            faq_q5: '完成した動画はSNSにアップしてもいいですか？',
            faq_a5: 'もちろんです！InstagramやTikTokに最適な縦長（9:16）サイズで作成します。',
            faq_q6: '勝手にSNSに公開されたりしませんか？',
            faq_a6: 'ご安心ください。お客様の許可なく動画や素材を公開することは絶対にありません。',
            faq_q7: '写真はどうやって送ればいいですか？',
            faq_a7: 'オーダーフォーム送信後、表示される安全なDropboxリンクから写真・動画をアップロードしてください。',
            final_cta_title: '日本旅行を最高の思い出ムービーにしませんか？',
            final_cta_note: 'フォームを入力後、専用リンクから写真・動画をアップロードしてください。'
        },
        it: {
            hero_h1: 'Trasforma le tue foto del viaggio in Giappone in un <span class="highlight">video ricordo speciale</span>',
            hero_sub: 'Inviaci le tue foto e i tuoi video preferiti. Creeremo un filmato di 30-60 secondi entro 24 ore.',
            hero_secondary: 'Non lasciare che i tuoi ricordi svaniscano. Trasformali in un film.',
            cta_send: 'Ordina il tuo video ora',
            video_caption: 'Esempio: Viaggio in Giappone 🌸',
            how_title: 'Come funziona',
            step1_t: 'Compila il modulo',
            step1_p: 'Parlaci del tuo viaggio e scegli il tuo piano.',
            step2_t: 'Completa il pagamento',
            step2_p: 'Pagamento sicuro tramite Square.',
            step3_t: 'Invia foto via DM',
            step3_p: 'Carica facilmente le tue foto/video tramite il nostro link sicuro.',
            step4_t: 'Ricevi il tuo video',
            step4_p: 'Consegniamo il tuo video ricordo entro 24 ore!',
            pricing_title: 'Prezzi Semplici',
            pricing_subtitle: 'Il video ricordo perfetto del tuo viaggio in Giappone',
            most_popular: 'Più Popolare',
            basic_title: 'Base',
            basic_price: 'Gratis',
            basic_feat1: 'Breve video ricordo di esempio',
            basic_feat2: 'Ottimo per provare il servizio',
            basic_feat3: 'Fino a 7 foto/video',
            basic_feat4: 'Modifica semplice',
            order_basic: 'Prova gratis',
            standard_title: 'Standard',
            standard_price: '¥980',
            standard_feat1: 'Video di circa 30 secondi',
            standard_feat2: 'Fino a 15 foto/video',
            standard_feat3: 'BGM inclusa',
            standard_feat4: 'Testo data e luogo',
            standard_feat5: '1 revisione gratuita',
            standard_feat6: 'Consegna entro 24 ore',
            order_standard: 'Ordina Standard',
            premium_title: 'Premium',
            premium_price: '¥2,980',
            premium_feat1: 'Video ricordo di 30-60 secondi',
            premium_feat2: 'Fino a 30 foto/video',
            premium_feat3: 'Stile più personalizzato',
            premium_feat4: 'Data, luogo e testo della storia',
            premium_feat5: 'Montaggio prioritario',
            premium_feat6: '1 revisione gratuita',
            order_premium: 'Ordina Premium',
            safety_title: 'La tua privacy è importante',
            safety1: 'Usiamo le tue foto/video solo per il tuo ordine.',
            safety2: 'Nessuna pubblicazione senza il tuo permesso.',
            safety3: 'Una revisione gratuita inclusa.',
            safety4: 'Consegnato entro 24 ore.',
            form_title: 'Modulo d\'ordine',
            form_name: 'Nome',
            form_ig: 'ID Instagram',
            form_email: 'Email (Opzionale)',
            form_plan: 'Seleziona piano',
            form_vibe: 'Stile del video preferito',
            form_vibe_ph: 'Seleziona uno stile...',
            vibe_calm: 'Rilassante / Calmo',
            vibe_fun: 'Divertente / Energico',
            vibe_stylish: 'Elegante / Estetico',
            vibe_cool: 'Fantastico / Cinematografico',
            vibe_romantic: 'Romantico / Dolce',
            vibe_emotional: 'Emozionante / Nostalgico',
            vibe_any: 'Scelta del creatore (Lascia fare a noi!)',
            form_photos: 'Consegna di foto e video',
            form_photos_p: 'Dopo il pagamento, carica le tue foto e i tuoi video utilizzando il link fornito.',
            form_error_required: 'Si prega di compilare tutti i campi obbligatori.',
            form_places: 'Luoghi principali visitati',
            form_places_ph: 'es. Kyoto, Tokyo Disney, Castello di Osaka',
            form_captions: 'Testo/Sottotitoli preferiti',
            form_captions_ph: 'es. "Il nostro primo viaggio insieme", "Sakura 2024"',
            form_privacy: 'Acconsento all\'uso delle mie foto/video solo per la creazione del video ordinato.',
            form_submit: 'Invia ordine',
            success_title: 'Ordine ricevuto!',
            success_guide: 'La schermata di pagamento si è aperta in una nuova scheda.<br>Dopo aver completato il pagamento, torna a questa schermata e tocca il pulsante qui sotto.',
            success_step2_desc: 'Inviaci le tue foto/video.',
            success_btn_upload: 'Carica Foto e Video',
            success_fallback: 'Se la schermata di pagamento non si è aperta automaticamente, ',
            success_btn_pay: 'clicca qui per pagare',
            confirm_upload: 'Queste informazioni sono corrette?',
            footer_text: '© 2024 SakuraMemories - Fatto con ❤️ in Giappone',
            btn_send_dm: 'Carica Foto e Video',
            problem_title: 'Non lasciare che i tuoi ricordi svaniscano',
            problem_1: 'Hai scattato molte foto in Giappone ma non le hai mai modificate.',
            problem_2: 'I tuoi ricordi sono bloccati nel tuo telefono.',
            problem_3: 'Montare video richiede troppo tempo.',
            problem_4: 'Vuoi pubblicare il tuo viaggio in Giappone magnificamente sui social media.',
            solution_title: 'Il video ricordo perfetto del Giappone',
            solution_1: 'Invia fino a 30 foto e video.',
            solution_2: 'Scegli il tuo stile video preferito.',
            solution_3: 'Aggiungiamo BGM, data, luogo e testo.',
            solution_4: 'Ricevi il tuo video finito entro 24 ore.',
            solution_5: 'Una revisione gratuita inclusa.',
            faq_title: 'Domande Frequenti (FAQ)',
            faq_q1: 'Quante foto/video posso inviare?',
            faq_a1: 'Puoi inviare fino a 30 foto e video in totale.',
            faq_q2: 'Quanto dura il video finale?',
            faq_a2: 'A seconda del piano, il video finale dura dai 30 ai 60 secondi.',
            faq_q3: 'Quanto velocemente posso riceverlo?',
            faq_a3: 'Di solito consegniamo entro 24 ore dalla ricezione di tutti i tuoi media.',
            faq_q4: 'Posso richiedere modifiche?',
            faq_a4: 'Sì. Una revisione gratuita è inclusa in ogni ordine.',
            faq_q5: 'Posso pubblicare il video su Instagram o TikTok?',
            faq_a5: 'Sì! Il video è formattato appositamente per i social media (formato 9:16).',
            faq_q6: 'Pubblicherete le mie foto senza permesso?',
            faq_a6: 'No. Rispettiamo la tua privacy e non pubblicheremo mai i tuoi contenuti senza consenso.',
            faq_q7: 'Come invio le mie foto?',
            faq_a7: 'Dopo aver inviato il modulo d\'ordine, carica le tue foto/video utilizzando il link sicuro fornito nella pagina di conferma.',
            final_cta_title: 'Pronto a trasformare il tuo viaggio in Giappone in un video?',
            final_cta_note: 'Compila il modulo e carica le tue foto/video tramite il link sicuro fornito.'
        },
        fr: {
            hero_h1: 'Transformez vos photos du Japon en une <span class="highlight">vidéo souvenir mignonne</span>',
            hero_sub: 'Envoyez-nous vos photos et vidéos préférées. Nous créerons un film souvenir de 30 à 60 secondes en moins de 24h.',
            hero_secondary: 'Ne laissez pas vos souvenirs s\'effacer. Transformez-les en film.',
            cta_send: 'Commandez votre vidéo',
            video_caption: 'Exemple : Voyage au Japon 🌸',
            how_title: 'Comment ça marche',
            step1_t: 'Remplissez le formulaire',
            step1_p: 'Parlez-nous de votre voyage et choisissez votre forfait.',
            step2_t: 'Effectuez le paiement',
            step2_p: 'Paiement sécurisé via Square.',
            step3_t: 'Envoyez vos médias par DM',
            step3_p: 'Téléchargez facilement vos photos/vidéos via notre lien sécurisé.',
            step4_t: 'Recevez votre vidéo',
            step4_p: 'Nous livrons votre vidéo souvenir en moins de 24 heures !',
            pricing_title: 'Tarifs Simples',
            pricing_subtitle: 'Le film souvenir parfait de votre voyage au Japon',
            most_popular: 'Le Plus Populaire',
            basic_title: 'Basique',
            basic_price: 'Gratuit',
            basic_feat1: 'Courte vidéo souvenir d\'exemple',
            basic_feat2: 'Idéal pour essayer le service',
            basic_feat3: 'Jusqu\'à 7 photos/vidéos',
            basic_feat4: 'Montage simple',
            order_basic: 'Essayer gratuitement',
            standard_title: 'Standard',
            standard_price: '¥980',
            standard_feat1: 'Vidéo d\'environ 30 secondes',
            standard_feat2: 'Jusqu\'à 15 photos/vidéos',
            standard_feat3: 'Musique incluse',
            standard_feat4: 'Texte date et lieu',
            standard_feat5: '1 révision gratuite',
            standard_feat6: 'Livraison en 24h',
            order_standard: 'Commander Standard',
            premium_title: 'Premium',
            premium_price: '¥2,980',
            premium_feat1: 'Vidéo souvenir de 30-60 secondes',
            premium_feat2: 'Jusqu\'à 30 photos/vidéos',
            premium_feat3: 'Style plus personnalisé',
            premium_feat4: 'Date, lieu et texte de l\'histoire',
            premium_feat5: 'Montage prioritaire',
            premium_feat6: '1 révision gratuite',
            order_premium: 'Commander Premium',
            safety_title: 'Votre vie privée compte',
            safety1: 'Photos/vidéos utilisées uniquement pour votre commande.',
            safety2: 'Pas de publication sans votre accord.',
            safety3: 'Une révision gratuite incluse.',
            safety4: 'Livré en moins de 24 heures.',
            form_title: 'Formulaire de commande',
            form_name: 'Votre nom',
            form_ig: 'Identifiant Instagram',
            form_email: 'Email (Optionnel)',
            form_plan: 'Choisir un forfait',
            form_photos: 'Envoi des photos et vidéos',
            form_photos_p: 'Après le paiement, veuillez télécharger vos photos et vidéos en utilisant le lien fourni.',
            form_error_required: 'Veuillez remplir tous les champs obligatoires.',
            form_places: 'Principaux lieux visités',
            form_places_ph: 'ex: Kyoto, Tokyo Disney, Château d\'Osaka',
            form_captions: 'Textes/Légendes souhaités',
            form_captions_ph: 'ex: "Notre premier voyage ensemble", "Sakura 2024"',
            form_privacy: 'J\'accepte que mes photos/vidéos soient utilisées uniquement pour créer ma vidéo.',
            form_submit: 'Envoyer la commande',
            success_title: 'Commande reçue !',
            success_guide: 'L\'écran de paiement s\'est ouvert dans un nouvel onglet.<br>Après avoir effectué votre paiement, veuillez revenir sur cet écran et appuyer sur le bouton ci-dessous.',
            success_step2_desc: 'Envoyez-nous vos photos/vidéos.',
            success_btn_upload: 'Télécharger des photos et des vidéos',
            success_fallback: 'Si l\'écran de paiement ne s\'est pas ouvert automatiquement, ',
            success_btn_pay: 'cliquez ici pour payer',
            confirm_upload: 'Ces informations sont-elles correctes ?',
            footer_text: '© 2024 SakuraMemories - Fait avec ❤️ au Japon',
            btn_send_dm: 'Télécharger des photos et des vidéos',
            problem_title: 'Ne laissez pas vos souvenirs s\'effacer',
            problem_1: 'Vous avez pris beaucoup de photos au Japon mais ne les avez jamais montées.',
            problem_2: 'Vos souvenirs sont bloqués dans votre téléphone.',
            problem_3: 'Le montage vidéo prend trop de temps.',
            problem_4: 'Vous voulez publier votre voyage au Japon sur les réseaux sociaux.',
            solution_title: 'Le film souvenir parfait du Japon',
            solution_1: 'Envoyez jusqu\'à 30 photos et vidéos.',
            solution_2: 'Choisissez votre style vidéo préféré.',
            solution_3: 'Nous ajoutons la musique, la date, le lieu et le texte.',
            solution_4: 'Recevez votre film terminé en moins de 24 heures.',
            solution_5: 'Une révision gratuite incluse.',
            faq_title: 'Questions Fréquemment Posées (FAQ)',
            faq_q1: 'Combien de photos/vidéos puis-je envoyer ?',
            faq_a1: 'Vous pouvez envoyer jusqu\'à 30 photos et vidéos au total.',
            faq_q2: 'Quelle est la durée de la vidéo finale ?',
            faq_a2: 'Selon votre forfait, la vidéo finale dure environ 30 à 60 secondes.',
            faq_q3: 'À quelle vitesse puis-je la recevoir ?',
            faq_a3: 'Nous livrons généralement dans les 24 heures après réception de tous vos médias.',
            faq_q4: 'Puis-je demander des modifications ?',
            faq_a4: 'Oui. Une révision gratuite est incluse avec chaque commande.',
            faq_q5: 'Puis-je publier la vidéo sur Instagram ou TikTok ?',
            faq_a5: 'Oui ! La vidéo est formatée pour les réseaux sociaux (ratio 9:16).',
            faq_q6: 'Publierez-vous mes photos sans ma permission ?',
            faq_a6: 'Non. Nous respectons votre vie privée et ne publierons jamais votre contenu sans accord.',
            faq_q7: 'Comment envoyer mes photos ?',
            faq_a7: 'Après avoir soumis le formulaire de commande, veuillez télécharger vos photos/vidéos en utilisant le lien sécurisé fourni sur la page de confirmation.',
            final_cta_title: 'Prêt à transformer votre voyage en un film souvenir ?',
            final_cta_note: 'Remplissez le formulaire et téléchargez vos photos/vidéos via le lien sécurisé fourni.'
        },
        es: {
            hero_h1: 'Convierte tus fotos de Japón en un <span class="highlight">video de recuerdo lindo</span>',
            hero_sub: 'Envíanos tus fotos y videos favoritos. Crearemos una película de recuerdo de 30 a 60 segundos en 24 horas.',
            hero_secondary: 'No dejes que tus recuerdos se desvanezcan. Conviértelos en una película.',
            cta_send: 'Pide tu video ahora',
            video_caption: 'Ejemplo: Viaje a Japón 🌸',
            how_title: 'Cómo funciona',
            step1_t: 'Rellena el formulario',
            step1_p: 'Cuéntanos sobre tu viaje y elige tu plan.',
            step2_t: 'Completa el pago',
            step2_p: 'Pago seguro a través de Square.',
            step3_t: 'Envía fotos por DM',
            step3_p: 'Sube fácilmente tus fotos/videos a través de nuestro enlace seguro.',
            step4_t: 'Recibe tu video',
            step4_p: '¡Entregamos tu video de recuerdo en menos de 24 horas!',
            pricing_title: 'Precios Sencillos',
            pricing_subtitle: 'La película de recuerdo perfecta de tu viaje a Japón',
            most_popular: 'Más Popular',
            basic_title: 'Básico',
            basic_price: 'Gratis',
            basic_feat1: 'Video de recuerdo de ejemplo corto',
            basic_feat2: 'Ideal para probar el servicio',
            basic_feat3: 'Hasta 7 fotos/videos',
            basic_feat4: 'Edición simple',
            order_basic: 'Probar gratis',
            standard_title: 'Estándar',
            standard_price: '¥980',
            standard_feat1: 'Video de unos 30 segundos',
            standard_feat2: 'Hasta 15 fotos/videos',
            standard_feat3: 'Música incluida',
            standard_feat4: 'Texto de fecha y lugar',
            standard_feat5: '1 revisión gratuita',
            standard_feat6: 'Entrega en 24 horas',
            order_standard: 'Pedir Estándar',
            premium_title: 'Premium',
            premium_price: '¥2,980',
            premium_feat1: 'Video de recuerdo de 30-60 segundos',
            premium_feat2: 'Hasta 30 photos/videos',
            premium_feat3: 'Estilo más personalizado',
            premium_feat4: 'Fecha, lugar y texto de la historia',
            premium_feat5: 'Edición prioritaria',
            premium_feat6: '1 revisión gratuita',
            order_premium: 'Pedir Premium',
            safety_title: 'Tu privacidad es importante',
            safety1: 'Solo usamos tus fotos/videos para tu pedido.',
            safety2: 'Sin publicaciones públicas sin tu permiso.',
            safety3: 'Una revisión gratuita incluida.',
            safety4: 'Entregado en menos de 24 horas.',
            form_title: 'Formulario de pedido',
            form_name: 'Nombre',
            form_ig: 'ID de Instagram',
            form_email: 'Email (Opcional)',
            form_plan: 'Seleccionar plan',
            form_vibe: 'Estilo de video preferido',
            form_vibe_ph: 'Selecciona un estilo...',
            vibe_calm: 'Relajante / Tranquilo',
            vibe_fun: 'Divertido / Enérgico',
            vibe_stylish: 'Elegante / Estético',
            vibe_cool: 'Genial / Cinematográfico',
            vibe_romantic: 'Romántico / Dulce',
            vibe_emotional: 'Emocional / Nostálgico',
            vibe_any: 'Elección del creador (¡Déjalo en nuestras manos!)',
            form_photos: 'Entrega de fotos y videos',
            form_photos_p: 'Después del pago, sube tus fotos y videos utilizando el enlace proporcionado.',
            form_error_required: 'Por favor, complete todos los campos obligatorios.',
            form_places: 'Principales lugares visitados',
            form_places_ph: 'ej. Kioto, Tokyo Disney, Castillo de Osaka',
            form_captions: 'Texto/Subtítulos preferidos',
            form_captions_ph: 'ej. "Nuestro primer viaje juntos", "Sakura 2024"',
            form_privacy: 'Acepto que mis fotos/videos se usen solo per crear mi video solicitado.',
            form_submit: 'Enviar pedido',
            success_title: '¡Pedido recibido!',
            success_guide: 'La pantalla de pago se ha abierto en una nueva pestaña.<br>Después de completar tu pago, vuelve a esta pantalla y toca el botón de abajo.',
            success_step2_desc: 'Envíanos tus fotos/videos.',
            success_btn_upload: 'Subir fotos y videos',
            success_fallback: 'Si la pantalla de pago no se abrió automáticamente, ',
            success_btn_pay: 'haz clic aquí para pagar',
            confirm_upload: '¿Es correcta esta información?',
            footer_text: '© 2024 SakuraMemories - Hecho con ❤️ en Japón',
            btn_send_dm: 'Subir fotos y videos',
            problem_title: 'No dejes que tus recuerdos se desvanezcan',
            problem_1: 'Tomaste muchas fotos in Japón pero nunca las editaste.',
            problem_2: 'Tus recuerdos están atrapados en tu teléfono.',
            problem_3: 'Editar videos toma demasiado tiempo.',
            problem_4: 'Quieres publicar tu viaje a Japón bellamente en las redes sociales.',
            solution_title: 'La película de recuerdo perfecta de Japón',
            solution_1: 'Envía hasta 30 fotos y videos.',
            solution_2: 'Elige tu estilo de video preferido.',
            solution_3: 'Añadimos BGM, fecha, ubicación y texto.',
            solution_4: 'Recibe tu película terminada en 24 horas.',
            solution_5: 'Una revisión gratuita incluida.',
            faq_title: 'Preguntas Frecuentes (FAQ)',
            faq_q1: '¿Cuántas fotos/videos puedo enviar?',
            faq_a1: 'Puedes enviar hasta 30 fotos y videos en total.',
            faq_q2: '¿Cuánto dura el video final?',
            faq_a2: 'Dependiendo de tu plan, el video final dura entre 30 y 60 segundos.',
            faq_q3: '¿Qué tan rápido puedo recibirlo?',
            faq_a3: 'Generalmente entregamos en 24 horas después de recibir todos tus medios.',
            faq_q4: '¿Puedo solicitar cambios?',
            faq_a4: 'Sí. Una revisión gratuita está incluida en cada pedido.',
            faq_q5: '¿Puedo publicar el video en Instagram o TikTok?',
            faq_a5: '¡Sí! El video está formateado para redes sociales (proporción 9:16).',
            faq_q6: '¿Publicarán mis fotos sin permiso?',
            faq_a6: 'No. Respetamos tu privacidad y nunca publicaremos tu contenido sin consentimiento.',
            faq_q7: '¿Cómo envío mis fotos?',
            faq_a7: 'Después de enviar el formulario de pedido, sube tus fotos/videos utilizando el enlace seguro proporcionado en la página de éxito.',
            final_cta_title: '¿Listo para convertir tu viaje a Japón en una película?',
            final_cta_note: 'Completa el formulario y sube tus fotos/videos a través del enlace seguro proporcionado.'
        }
    };

    // Language Toggle Logic
    const langBtns = document.querySelectorAll('.lang-btn');

    function setLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (i18n[lang][key]) {
                el.innerHTML = i18n[lang][key];
            }
        });
        
        // Update placeholders
        const placesInput = document.querySelector('textarea[name="places"]');
        const captionsInput = document.querySelector('textarea[name="captions"]');
        if (placesInput) placesInput.placeholder = i18n[lang].form_places_ph;
        if (captionsInput) captionsInput.placeholder = i18n[lang].form_captions_ph;

        // Update active button state
        langBtns.forEach(btn => {
            btn.classList.toggle('active', btn.id === `lang-${lang}`);
        });
        
        // Save preference
        localStorage.setItem('preferred_lang', lang);
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.id.replace('lang-', '');
            setLanguage(lang);
        });
    });

    // Use saved language or default to English
    const savedLang = localStorage.getItem('preferred_lang') || 'en';
    setLanguage(savedLang);

    // File Input Preview
    fileInput?.addEventListener('change', (e) => {
        fileList.innerHTML = '';
        const files = Array.from(e.target.files);
        files.slice(0, 30).forEach(file => {
            const item = document.createElement('div');
            item.className = 'file-item';
            item.innerHTML = `<span>${file.name}</span> <small>${(file.size / 1024 / 1024).toFixed(1)}MB</small>`;
            fileList.appendChild(item);
        });
    });

    // Form Submission Logic
    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const currentLang = localStorage.getItem('preferred_lang') || 'en';

            // Custom Validation
            let isValid = true;
            let firstInvalidInput = null;
            
            // Clear previous errors
            orderForm.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
            const errorMsgEl = document.getElementById('form-error-msg');
            if (errorMsgEl) errorMsgEl.style.display = 'none';

            orderForm.querySelectorAll('[required]').forEach(input => {
                if (input.type === 'checkbox') {
                    if (!input.checked) {
                        isValid = false;
                        input.classList.add('input-error');
                        if (!firstInvalidInput) firstInvalidInput = input;
                    }
                } else if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('input-error');
                    if (!firstInvalidInput) firstInvalidInput = input;
                }
            });

            if (!isValid) {
                if (errorMsgEl) {
                    errorMsgEl.innerText = i18n[currentLang].form_error_required || 'Please fill in all required fields.';
                    errorMsgEl.style.display = 'block';
                }
                if (firstInvalidInput) {
                    firstInvalidInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    firstInvalidInput.focus();
                }
                return; // Stop submission
            }

            // Confirmation check
            if (!confirm(i18n[currentLang].confirm_upload)) {
                return;
            }
            
            // 1. Prepare payment link
            const plan = orderForm.querySelector('select[name="plan"]').value;
            const paymentLinks = {
                standard: 'https://checkout.square.site/merchant/MLQDP3M3366WZ/checkout/AYMHLMNJTJUCDKGXMV4KPYM7?src=sheet',
                premium: 'https://checkout.square.site/merchant/MLQDP3M3366WZ/checkout/26QAQXUZA7NBDKEYOV6YS64Y?src=sheet',
                basic: '#'
            };
            
            // Open payment link in new tab immediately
            if (plan !== 'basic') {
                window.open(paymentLinks[plan], '_blank');
            }
            
            // Update fallback link just in case
            const fallbackBtn = document.getElementById('fallback-pay-btn');
            if (fallbackBtn && plan !== 'basic') {
                fallbackBtn.href = paymentLinks[plan];
            } else if (fallbackBtn) {
                fallbackBtn.parentElement.style.display = 'none';
            }

            // 2. Setup robust Fetch submission to GAS (Bypasses Safari iframe block)
            const GAS_URL = 'https://script.google.com/macros/s/AKfycbxAl6oxi1Cx2PLPL44uN9Ak2Qh1Gg47C4h9wer6vH44zfpNYHzb1JNtM5Sbb2gXBAlpZQ/exec'; 
            
            const submitBtn = orderForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = 'Processing...';
            submitBtn.disabled = true;

            const formData = new FormData(orderForm);

            // Show Success UI function
            const showSuccessUI = () => {
                orderForm.classList.add('hidden');
                if (formSuccess) {
                    formSuccess.classList.remove('hidden');
                    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    lucide.createIcons();
                }
            };

            // 3. Submit data asynchronously
            fetch(GAS_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: formData
            }).then(() => {
                // Success
                showSuccessUI();
            }).catch((err) => {
                console.error('Submission error:', err);
                // In no-cors, errors are often false positives, so we still show success.
                // If it truly fails (no internet), they at least go to the payment link.
                showSuccessUI();
            });
        });
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Scroll reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('reveal-on-scroll');
        observer.observe(section);
    });
});
