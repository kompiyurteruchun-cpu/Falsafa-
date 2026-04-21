const allQuestions = [
    [
        {
            "q": "Falsafa tushunchasining ma’nosi?",
            "options": [
                "Yunoncha phileo – sevaman, sophia – donolik so‘zlaridan kelib chiqqan bo‘lib, donolikka muhabbat ma’nosini",
                "Texnologiya va san’at",
                "Siyosiy va ijtimoiy masalalar",
                "xloq va qadriyatlar"
            ],
            "answer": "Yunoncha phileo – sevaman, sophia – donolik so‘zlaridan kelib chiqqan bo‘lib, donolikka muhabbat ma’nosini"
        },
        {
            "q": "Falsafaning ontologiya  bo’limida qanday masalalar o‘rganiladi?",
            "options": [
                "Borliq va mavjudlik mohiyatini",
                "Yer osti boyliklarini aniqlash",
                "Kimyoviy moddalarni",
                "Shaxsiy tajribalarni"
            ],
            "answer": "Borliq va mavjudlik mohiyatini"
        },
        {
            "q": "Falsafa va dinning umumiy maqsadi nima?",
            "options": [
                "Olam va insonning mohiyatini anglash",
                "Olamning kosmologik modelini yaratish",
                "Mehnat haqida nazariyalar yaratish",
                "Tajribaga asoslanish"
            ],
            "answer": "Olam va insonning mohiyatini anglash"
        },
        {
            "q": "Falsafiy bilimlarning muhim tarkibiy qismlaridan biri ……?",
            "options": [
                "Gnoseologiya",
                "Fizika",
                "Kimyo",
                "Shaxsiy e’tiqodlar"
            ],
            "answer": "Gnoseologiya"
        },
        {
            "q": "Falsafaning madaniy funksiyasi nimani anglatadi?",
            "options": [
                "Insoniyatning umumiy madaniy taraqqiyotiga xizmat qilish",
                "iniy qadriyatlarni mustahkamlash",
                "Ilmiy qonunlarni tushuntirish",
                "Jamiyatni axloqiy tarbiyalash"
            ],
            "answer": "Insoniyatning umumiy madaniy taraqqiyotiga xizmat qilish"
        },
        {
            "q": "Falsafaning ijtimoiy sohaga ta’siri qanday namoyon bo‘ladi?",
            "options": [
                "Jamiyatni boshqarishdagi qarashlarni shakllantirish orqali",
                "Faqat axloqiy qadriyatlarni o‘rgatishda",
                "Faqat tabiiy hodisalarni tushuntirishda",
                "Ilmiy haqiqatlarni targ‘ib qilishda"
            ],
            "answer": "Jamiyatni boshqarishdagi qarashlarni shakllantirish orqali"
        },
        {
            "q": "Falsafiy dunyoqarashning eng muhim vazifasi nima?",
            "options": [
                "Insonning o‘zini va borliqni anglashiga yordam berish",
                "Ilmiy ma’lumotlarni to‘plash",
                "Jamiyatni axloqiy tarbiyalash",
                "iniy qoidalarni kuchaytirish"
            ],
            "answer": "Insonning o‘zini va borliqni anglashiga yordam berish"
        },
        {
            "q": "Jamiyat qanday tizim sifatida qaraladi?",
            "options": [
                "Rivojlanuvchi va o‘zgaruvchan tizim",
                "iologik birlik",
                "Faqat iqtisodiy tizim",
                "Statik ijtimoiy guruh"
            ],
            "answer": "Rivojlanuvchi va o‘zgaruvchan tizim"
        },
        {
            "q": "Jamiyat qaysi fan sohalarida o’rganiladi?",
            "options": [
                "Falsafa, tarix, sotsiologiya",
                "Faqat iqtisodiyot va sotsiologiya",
                "Texnologiya va axborot texnologiyalari",
                "iologiya va kimyo"
            ],
            "answer": "Falsafa, tarix, sotsiologiya"
        },
        {
            "q": "Forobiyning fikriga ko‘ra, to‘liqsiz jamiyat bu?",
            "options": [
                "Oila, mahalla",
                "unyo",
                "avlat",
                "Tarix"
            ],
            "answer": "Oila, mahalla"
        },
        {
            "q": "Tarixiy rivojlanish jarayonida sub’yektiv omillar qanday rol o‘ynaydi?",
            "options": [
                "Jamiyatning rivojlanishiga muhim ta’sir ko‘rsatadi",
                "Tasodifiy hodisalarni boshqaradi",
                "Faqat iqtisodiy jarayonlarni shakllantiradi",
                "Umuman ahamiyatsizdir"
            ],
            "answer": "Jamiyatning rivojlanishiga muhim ta’sir ko‘rsatadi"
        },
        {
            "q": "Jamiyatni rivojlantiruvchi asosiy omillar qaysilar?",
            "options": [
                "Ijtimoiy o‘zgarishlar va madaniy taraqqiyot",
                "iologik evolyutsiya",
                "Tasodifiy voqealar",
                "Moddiy resurslarning ko‘payishi"
            ],
            "answer": "Ijtimoiy o‘zgarishlar va madaniy taraqqiyot"
        },
        {
            "q": "Madaniyatning jamiyatdagi vazifasi nimadan iborat?",
            "options": [
                "Munosabatlar va qadriyatlarni tartibga solish",
                "Siyosiy boshqaruvni kuchaytirish",
                "Faqat iqtisodiy tizimlarni rivojlantirish",
                "Ijtimoiy guruhlarni bo‘lish"
            ],
            "answer": "Munosabatlar va qadriyatlarni tartibga solish"
        },
        {
            "q": "Qaysi jamiyat to‘liqsiz hisoblanadi?",
            "options": [
                "Bir oila, qishloq yoki ovul",
                "Shahar yoki milliy birlik",
                "Xalqaro sivilizatsiya",
                "Umumiy madaniy jamiyat"
            ],
            "answer": "Bir oila, qishloq yoki ovul"
        },
        {
            "q": "Jamiyatning paydo bo’lishi qanday omillarga asoslanadi?",
            "options": [
                "Mehnat va muloqotga",
                "Tasodifiy hodisalarning birlashuviga",
                "iologik evolyutsiya natijasiga",
                "Tabiiy resurslarning mavjudliga"
            ],
            "answer": "Mehnat va muloqotga"
        },
        {
            "q": "Forobiyning jamiyat haqidagi qarashlari nimaga asoslanadi?",
            "options": [
                "To‘liq va to‘liqsiz jamiyatlarga ajratishga",
                "Faqat diniy tamoyillarga",
                "Moddiy resurslarga tayanishga",
                "Texnologik imkoniyatlarga"
            ],
            "answer": "To‘liq va to‘liqsiz jamiyatlarga ajratishga"
        },
        {
            "q": "Madaniy jarayonlarning jamiyat rivojlanishidagi roli nimadan iborat?",
            "options": [
                "Xulq-atvor me’yorlari va o‘zaro munosabatlarni shakllantirish",
                "Faqat moddiy boyliklarni oshirish",
                "Siyosiy hokimiyatni kuchaytirish",
                "iologik ehtiyojlarni qondirish"
            ],
            "answer": "Xulq-atvor me’yorlari va o‘zaro munosabatlarni shakllantirish"
        },
        {
            "q": "Falsafaning vazifasi jamiyatni qanday tahlil qilishdan iborat?",
            "options": [
                "Umumiy tamoyillar va qonuniyatlar orqali",
                "Texnologik rivojlanish darajasiga ko‘ra",
                "Faqat tarixiy hujjatlar asosida",
                "Subyektiv mulohazalar yordamida"
            ],
            "answer": "Umumiy tamoyillar va qonuniyatlar orqali"
        },
        {
            "q": "Forobiyning fikriga ko‘ra, to‘liq jamiyatning birinchi bosqichi nima?",
            "options": [
                "Shahar jamiyati",
                "Oila",
                "Milliy birlik",
                "Qishloq"
            ],
            "answer": "Shahar jamiyati"
        },
        {
            "q": "Forobiy fikricha jamiyat…….ga bo‘linadi",
            "options": [
                "To‘liq, o’rta va to‘liqsiz jamiyat",
                "Milliy va xalqaro jamiyat",
                "Urbanizatsiyalashgan jamiyat",
                "Qishloq xo‘jalik jamiyati"
            ],
            "answer": "To‘liq, o’rta va to‘liqsiz jamiyat"
        },
        {
            "q": "Qadriyatlar tizimi jamiyatda qanday rol o‘ynaydi?",
            "options": [
                "Ijtimoiy munosabatlarni tartibga soladi",
                "Faqat shaxsiy manfaatlarni himoya qiladi",
                "Siyosiy tizimlarni barqarorlashtiradi",
                "Madaniy yutuqlarni o‘zlashtiradi"
            ],
            "answer": "Ijtimoiy munosabatlarni tartibga soladi"
        },
        {
            "q": "Forobiyning fikriga ko‘ra to‘liq jamiyatga qaysi darajalar kiradi?",
            "options": [
                "Yer yuzidagi jami insonlar, bir millat yoki bir dinga mansub kishilar, muayyan shahar jamiyati",
                "ir oila, bir qishloq yoki bir ovul",
                "Faqat davlat darajasidagi jamiyat",
                "Faqat madaniy birliklar"
            ],
            "answer": "Yer yuzidagi jami insonlar, bir millat yoki bir dinga mansub kishilar, muayyan shahar jamiyati"
        },
        {
            "q": "P.A.Sorokin jamiyatni qanday tizim sifatida tasvirlagan?",
            "options": [
                "Gorizontal, vertikal va fluktuatsion tizimlar",
                "Ijtimoiy siyosiy tizimlar",
                "Faqat iqtisodiy tizim",
                "Etnik guruhlar yig‘indisi"
            ],
            "answer": "Gorizontal, vertikal va fluktuatsion tizimlar"
        },
        {
            "q": "Jamiyatning iqtisodiy sohasi nimani o‘z ichiga oladi?",
            "options": [
                "Ishlab chiqarish, iste'mol, taqsimot va mulkchilik munosabatlari",
                "Siyosiy hokimiyatning taqsimlanishi",
                "Madaniy qadriyatlarning rivojlanishi",
                "Huquqiy normalar va qonunlar"
            ],
            "answer": "Ishlab chiqarish, iste'mol, taqsimot va mulkchilik munosabatlari"
        },
        {
            "q": "Jamiyat siyosiy sohasining asosiy vazifasi nima?",
            "options": [
                "Jamiyat boshqaruvini tashkil qilish va hokimiyatni taqsimlash",
                "Mehnat resurslarini rivojlantirish",
                "Moddiy ne’matlar ishlab chiqarishni boshqarish",
                "xloqiy me’yorlarni tartibga solish"
            ],
            "answer": "Jamiyat boshqaruvini tashkil qilish va hokimiyatni taqsimlash"
        },
        {
            "q": "Ijtimoiy soha qanday munosabatlarni o‘z ichiga oladi?",
            "options": [
                "Odamlar o‘rtasidagi o‘zaro munosabatlar va ijtimoiy guruhlar faoliyatini",
                "Faqat iqtisodiy jarayonlarni",
                "Siyosiy hokimiyat va boshqaruvni",
                "Ilm-fanning rivojlanishini"
            ],
            "answer": "Odamlar o‘rtasidagi o‘zaro munosabatlar va ijtimoiy guruhlar faoliyatini"
        },
        {
            "q": "Madaniy sohaning asosiy xususiyati nima?",
            "options": [
                "Insonning axloqiy, estetik, diniy va bilim sohalaridagi faoliyati",
                "Siyosiy boshqaruvni tashkil qilish",
                "Huquqiy normalar ishlab chiqish",
                "Moddiy ne’matlar ishlab chiqarish"
            ],
            "answer": "Insonning axloqiy, estetik, diniy va bilim sohalaridagi faoliyati"
        },
        {
            "q": "Jamiyatning qaysi sohasi axloqiy me’yorlarni shakllantiradi?",
            "options": [
                "Madaniy soha",
                "Iqtisodiy soha",
                "Siyosiy soha",
                "Huquqiy soha"
            ],
            "answer": "Madaniy soha"
        },
        {
            "q": "Ijtimoiy sohaning rivojlanishida qaysi omil muhim rol o‘ynaydi?",
            "options": [
                "Jamiyatdagi tenglik va adolatni ta’minlash",
                "Siyosiy qarorlarning qat’iyligi",
                "Moddiy resurslarning ko‘payishi",
                "Texnologik taraqqiyot"
            ],
            "answer": "Jamiyatdagi tenglik va adolatni ta’minlash"
        },
        {
            "q": "Madaniy sohaning rivojlanishiga qaysi jarayon ta’sir qiladi?",
            "options": [
                "Ta’lim, san’at, din va adabiyot rivojlanishi",
                "Moddiy resurslarni ko‘paytirish",
                "Siyosiy boshqaruv usullarining islohoti",
                "Xalqaro savdo aloqalari"
            ],
            "answer": "Ta’lim, san’at, din va adabiyot rivojlanishi"
        },
        {
            "q": "Ijtimoiy soha va madaniy soha o‘rtasidagi bog‘liqlik nimadan iborat?",
            "options": [
                "Madaniyat ijtimoiy munosabatlarning axloqiy va estetik jihatlarini shakllantiradi",
                "Ijtimoiy soha faqat moddiy jarayonlarga asoslangan",
                "Madaniyat faqat ijtimoiy guruhlarni boshqaradi",
                "Ijtimoiy munosabatlar siyosiy tizimga bog‘liq"
            ],
            "answer": "Madaniyat ijtimoiy munosabatlarning axloqiy va estetik jihatlarini shakllantiradi"
        },
        {
            "q": "Huquqiy sohaning asosiy vazifasi nima?",
            "options": [
                "Qonunlar ishlab chiqish va ijtimoiy tartibni ta’minlash",
                "xloqiy qadriyatlarni shakllantirish",
                "Siyosiy hokimiyatni rivojlantirish",
                "Ijtimoiy tenglikni ta’minlash"
            ],
            "answer": "Qonunlar ishlab chiqish va ijtimoiy tartibni ta’minlash"
        },
        {
            "q": "Jamiyat bu….?",
            "options": [
                "Odamlar o‘rtasidagi o‘zaro munosabatlarning ijtimoiy tizimi",
                "Iqtisodiy tizimlarning majmui",
                "Faqat siyosiy hokimiyat shakli",
                "Tabiiy omillar yig‘indisi"
            ],
            "answer": "Odamlar o‘rtasidagi o‘zaro munosabatlarning ijtimoiy tizimi"
        },
        {
            "q": "Jamiyatni o'rganishga oid yondashuvlar keltirilgan to‘g‘ri javobni belgilang.",
            "options": [
                "Formasion va sivilizasion yondashuvlarda",
                "Faqat iqtisodiy va biologik yondashuvlarda",
                "iniy va tabiiy yondashuvlarda",
                "Tarixiy va geografik tahlil asosida"
            ],
            "answer": "Formasion va sivilizasion yondashuvlarda"
        },
        {
            "q": "Gnoseologiya nima?",
            "options": [
                "Bilish haqidagi ta'limot",
                "Matematik nazariya",
                "Falsafiy metod",
                "Eksperimental o‘rganish"
            ],
            "answer": "Bilish haqidagi ta'limot"
        },
        {
            "q": "Epistemologiyaning asosiy o‘rganish ob’yekti nima?",
            "options": [
                "Haqiqiy ilmiy bilimlarning mazmuni",
                "xloqiy qoidalar",
                "San'at nazariyasi",
                "Iqtisodiy jarayonlar"
            ],
            "answer": "Haqiqiy ilmiy bilimlarning mazmuni"
        },
        {
            "q": "Gnoseologiyada “Optimistlar” fikri qanday izohlanadi?",
            "options": [
                "Dunyoni bilish mumkin",
                "unyoni bilish mumkin emas",
                "unyoni bilish shubhali",
                "unyoni bilishda imkoniyat mavjud emas"
            ],
            "answer": "Dunyoni bilish mumkin"
        },
        {
            "q": "Empirizm vakillari ko‘rsatilgan to‘g‘ri javobni belgilang?",
            "options": [
                "F.Bekon, J.Lokk, T.Gobbs",
                "I.Kant, G.Gegel",
                "vgustin, Platon",
                "ekart, Spinoza"
            ],
            "answer": "F.Bekon, J.Lokk, T.Gobbs"
        },
        {
            "q": "Ratsionalizmga ko‘ra inson bilimining manbasi nima?",
            "options": [
                "Aql",
                "Tajriba",
                "Tasodif",
                "Ijtimoiy sharoit"
            ],
            "answer": "Aql"
        },
        {
            "q": "David Yumning bilish haqidagi yondashuvi qanday nomlanadi?",
            "options": [
                "Skeptitsizm",
                "gnostitsizm",
                "Optimizm",
                "Materializm"
            ],
            "answer": "Skeptitsizm"
        },
        {
            "q": "Kantning “narsa o‘zida” konsepsiyasi nimani anglatadi?",
            "options": [
                "Hissiyot va tafakkurga bog‘liq bo‘lmagan borliqni",
                "iz biladigan narsalarni",
                "Ilmiy tadqiqot ob’yektini",
                "Sub’yektiv bilimni"
            ],
            "answer": "Hissiyot va tafakkurga bog‘liq bo‘lmagan borliqni"
        },
        {
            "q": "Bilimning asosiy shakllaridan biri qaysi javobda to‘g‘ri ko‘rsatilgan?",
            "options": [
                "Ilmiy bilim",
                "G‘ayritabiiy bilim",
                "Tasavvuriy bilim",
                "fsonaviy bilim"
            ],
            "answer": "Ilmiy bilim"
        },
        {
            "q": "Bilishda sub’yektning roli qanday?",
            "options": [
                "Bilish faoliyatining manbai sifatida amal qiladi",
                "Ob’yektning bir qismi",
                "Tabiatning kuzatuvchisi",
                "Ishlov beruvchi"
            ],
            "answer": "Bilish faoliyatining manbai sifatida amal qiladi"
        },
        {
            "q": "Bilimning asosiy turlari bu qaysi javobda to‘gri keltirilgan?",
            "options": [
                "Haqiqiylik, ishonchlilik, asoslik",
                "Sub’yektivlik, ratsionallik, ma’qullik",
                "Tajriba, bilish, o‘rgatish",
                "Tasavvur, tahlil, umumlashtirish"
            ],
            "answer": "Haqiqiylik, ishonchlilik, asoslik"
        },
        {
            "q": "Empirizmga ko'ra haqiqiy bilimning asosi nimada?",
            "options": [
                "Tajriba",
                "ql",
                "E'tiqod",
                "G‘oyalar"
            ],
            "answer": "Tajriba"
        },
        {
            "q": "Skeptitsizm qanday fikrga asoslanadi?",
            "options": [
                "Bilimning haqiqiyligiga shubha bildiradi",
                "ilimni butunlay inkor qiladi",
                "Har qanday e’tiqodga asoslanadi",
                "ilimni mutlaq haqiqat deb biladi"
            ],
            "answer": "Bilimning haqiqiyligiga shubha bildiradi"
        },
        {
            "q": "“Bilim – bu asoslangan ishonch” degan fikr qaysi sohaga tegishli?",
            "options": [
                "Falsafiy gnoseologiya",
                "Matematik nazariya",
                "Eksperimental yondashuv",
                "xloqshunoslik"
            ],
            "answer": "Falsafiy gnoseologiya"
        },
        {
            "q": "Kundalik amaliy bilim qanday xarakterlanadi?",
            "options": [
                "Tajribaga asoslangan, lekin tartibsiz",
                "Nazariy isbotlangan",
                "Faqat ilmiy bilishga asoslangan",
                "Fan qoidalariga mos kelmaydi"
            ],
            "answer": "Tajribaga asoslangan, lekin tartibsiz"
        },
        {
            "q": "Falsafaning asosiy vazifalaridan biri qaysi?",
            "options": [
                "Insonning dunyoda ma'naviy mo‘ljal olishiga yordam berish",
                "Texnik jarayonlarni rivojlantirish",
                "Iqtisodiy qonuniyatlarni tahlil qilish",
                "San’at asarlarini yaratish"
            ],
            "answer": "Insonning dunyoda ma'naviy mo‘ljal olishiga yordam berish"
        },
        {
            "q": "Noilmiy bilimning eng birinchi shakli nima?",
            "options": [
                "Kundalik amaliy bilim",
                "Fizikaviy bilim",
                "Kimyoviy bilim",
                "Radikal bilim"
            ],
            "answer": "Kundalik amaliy bilim"
        }
    ],
    [
        {
            "q": "Relyativizm nima?",
            "options": [
                "Haqiqat nisbiy va vaqtinchalikdir",
                "Haqiqat mutlaq va o‘zgarmasdir",
                "Haqiqatning ilmiy asosi yo‘qdir",
                "Haqiqat shaxsiy e’tiqodga asoslanadi"
            ],
            "answer": "Haqiqat nisbiy va vaqtinchalikdir"
        },
        {
            "q": "Mifologik bilimning asosiy xususiyati nima?",
            "options": [
                "Borliqning ongdagi  g’ayritabiiy in’ikosi",
                "Haqiqiy ilmiy bilimlarni aks ettirish",
                "Ijtimoiy munosabatlarni o‘rganish",
                "Faqat diniy ta’limotga asoslanish"
            ],
            "answer": "Borliqning ongdagi  g’ayritabiiy in’ikosi"
        },
        {
            "q": "Gnoseologiyada “Optimizm” qanday ta’limot?",
            "options": [
                "Dunyo bilish mumkinligi haqidagi ta’limot",
                "ilish imkoni yo‘q",
                "Haqiqat mutlaq emas",
                "Tajriba shart emas"
            ],
            "answer": "Dunyo bilish mumkinligi haqidagi ta’limot"
        },
        {
            "q": "Gnoseologiyada Agnostitsizm qanday fikrni ilgari suradi?",
            "options": [
                "Dunyoni bilish mumkin emas",
                "unyoni bilish faqat tajribaga asoslanadi",
                "unyoni bilish faqat aql orqali bilib bo‘ladi",
                "unyoni bilish falsafiy tahlil talab qiladi"
            ],
            "answer": "Dunyoni bilish mumkin emas"
        },
        {
            "q": "Bilishning asosiy shakllaridan biri sifatida ilmiy bilimning o‘ziga xos xususiyati nima?",
            "options": [
                "Nazariy asoslangan va isbotlangan bo‘lishi",
                "Subyektiv kuzatishlarga asoslanishi",
                "maliyotdan mustaqil bo‘lishi",
                "Fantastik in’ikosni ifodalashi"
            ],
            "answer": "Nazariy asoslangan va isbotlangan bo‘lishi"
        },
        {
            "q": "Ratsionalizm va empirizm bir-biridan qanday farqlanadi?",
            "options": [
                "Ratsionalizm aqlga, empirizm esa tajribaga asoslanadi",
                "Ratsionalizm tajribani inkor qiladi",
                "Empirizm mutlaq haqiqatga ishonadi",
                "Ikkalasi ham faqat nazariy metodlarni qo‘llaydi"
            ],
            "answer": "Ratsionalizm aqlga, empirizm esa tajribaga asoslanadi"
        },
        {
            "q": "Bilimni falsafiy tahlil qilishda qaysi masala eng muhim?",
            "options": [
                "Haqiqatni aniqlash mezonlarini belgilash",
                "Tajriba va e’tiqodni solishtirish",
                "Fikr va sezgilarni ajratish",
                "Ilmiy tadqiqot usullarini rivojlantirish"
            ],
            "answer": "Haqiqatni aniqlash mezonlarini belgilash"
        },
        {
            "q": "Badiiy bilimning o‘ziga xos xususiyati nimada?",
            "options": [
                "Borliqni obrazlar orqali aks ettirishda",
                "Matematik formulalarda izohlashda",
                "Nazariy ma'lumotlarni ifodalashda",
                "Haqiqatning mutlaq tahlilida"
            ],
            "answer": "Borliqni obrazlar orqali aks ettirishda"
        },
        {
            "q": "Sub’yekt va ob’yekt o‘rtasidagi asosiy munosabat nima?",
            "options": [
                "Sub’yekt bilish faoliyatining manbai, ob’yekt esa bilishning maqsadi",
                "Ikkalasi ham bilish jarayonida faqat kuzatuvchi hisoblanadi",
                "Subyekt bilish obyektining bir qismidir",
                "Obyekt subyektning tasodifiy qismidir"
            ],
            "answer": "Sub’yekt bilish faoliyatining manbai, ob’yekt esa bilishning maqsadi"
        },
        {
            "q": "Falsafiy bilimning bosh maqsadi nima?",
            "options": [
                "To’g’ri fikrlash mahoratini o’rgatish",
                "Kundalik hayotda yordam berish",
                "Texnik jarayonlarni rivojlantirish",
                "xloqiy qoidalarni o‘rganish"
            ],
            "answer": "To’g’ri fikrlash mahoratini o’rgatish"
        },
        {
            "q": "Mifologik bilim bu?",
            "options": [
                "Fantastik rivoyatlar asosida yaratilgan bilim",
                "Haqiqiy ilmiy tajribalarga asoslangan bilim",
                "Kundalik amaliy tajribaga asoslangan bilim",
                "iniy kitoblardan olingan bilim"
            ],
            "answer": "Fantastik rivoyatlar asosida yaratilgan bilim"
        },
        {
            "q": "Ilmiy bilishning eng asosiy xususiyati nima?",
            "options": [
                "Borliqni ob’yektiv tarzda o‘rganish",
                "Subyektiv fikrlarga asoslanish",
                "Har qanday fantaziyaga ruxsat berish",
                "Shaxsiy e’tiqodni asoslash"
            ],
            "answer": "Borliqni ob’yektiv tarzda o‘rganish"
        },
        {
            "q": "Optimizm va skeptitsizm o‘rtasidagi asosiy farq nima?",
            "options": [
                "Optimizm dunyoni bilish mumkinligini tan oladi, skeptitsizm esa shubha bildiradi",
                "Optimizm bilimni inkor qiladi, skeptitsizm uni haqiqat deb biladi",
                "Skeptitsizm faqat amaliyotga asoslanadi, optimizm esa nazariyaga",
                "Har ikkisi ham haqiqatni mutlaq inkor qiladi"
            ],
            "answer": "Optimizm dunyoni bilish mumkinligini tan oladi, skeptitsizm esa shubha bildiradi"
        },
        {
            "q": "Empirizm va ratsionalizm qanday birlashadi?",
            "options": [
                "Ratsionalizm aqlni, empirizm esa tajribani birlashtiradi",
                "Faqat ratsionalizm tajribani inkor etadi",
                "Ikkalasi ham bir xil metodlarni qo‘llaydi",
                "Empirizm faqat aql orqali bilish kerak deb hisoblaydi"
            ],
            "answer": "Ratsionalizm aqlni, empirizm esa tajribani birlashtiradi"
        },
        {
            "q": "Ilmiy bilim bilishning qanday shakli?",
            "options": [
                "Eng oliy shakli",
                "Kundalik bilish shakli",
                "Fantastik bilish shakli",
                "Faqat amaliy bilish shakli"
            ],
            "answer": "Eng oliy shakli"
        },
        {
            "q": "Falsafiy bilishda shaxsning o‘rni qanday?",
            "options": [
                "Shaxs bilish jarayonining faol sub’yekti hisoblanadi",
                "Shaxs faqat kuzatuvchi rolini bajaradi",
                "Shaxs obyektning tarkibiy qismi bo‘ladi",
                "Faqatgina passiv ishtirokchi hisoblanadi"
            ],
            "answer": "Shaxs bilish jarayonining faol sub’yekti hisoblanadi"
        },
        {
            "q": "Bilish jarayonida sub’yekt va ob’yektning o‘zaro ta’siri qanday amalga oshadi?",
            "options": [
                "Subyekt obyektni bilishga harakat qiladi",
                "Ob’yekt subyektni o‘rganadi",
                "Sub’yekt va obyekt o‘zaro mustaqildir",
                "Ob’yekt bilish jarayonining faoli hisoblanadi"
            ],
            "answer": "Subyekt obyektni bilishga harakat qiladi"
        },
        {
            "q": "Bilimning kundalik shakli qanday ifodalanadi?",
            "options": [
                "Kundalik hayot tajribasiga asoslanadi",
                "Ilmiy izlanishlar bilan bog‘liq",
                "Nazariy tahlilni talab qiladi",
                "Sub’yektiv e’tiqodlarga asoslanadi"
            ],
            "answer": "Kundalik hayot tajribasiga asoslanadi"
        },
        {
            "q": "Empirizm qanday bilish shakliga asoslanadi?",
            "options": [
                "Tajribaga asoslangan bilim",
                "Miflarga asoslangan bilim",
                "Fantaziyaga asoslangan bilim",
                "Ilmiy nazariyalarga asoslangan bilim"
            ],
            "answer": "Tajribaga asoslangan bilim"
        },
        {
            "q": "Ratsionalizmning asosiy manbasi nima?",
            "options": [
                "Aql va fikrlash",
                "Kundalik tajriba",
                "Sezgilar",
                "Xayol"
            ],
            "answer": "Aql va fikrlash"
        },
        {
            "q": "Mifologik bilim qanday tasvirlanadi?",
            "options": [
                "Fantastik rivoyatlarni aks ettiradi",
                "Haqiqiy ilmiy bilimlar asosida yaratilgan",
                "Shaxsiy kechinmalar asosida shakllangan",
                "Ma’rifiy tarbiyaga tayanadi"
            ],
            "answer": "Fantastik rivoyatlarni aks ettiradi"
        },
        {
            "q": "Falsafaning ilmiy bilish bilan bog‘liq vazifasi aniqlang?",
            "options": [
                "Ilmiy bilimlarning ma’nosini aniqlash",
                "Fantastik hikoyalarni ishlab chiqish",
                "Kundalik amaliyotda yordam berish",
                "Ijtimoiy munosabatlarni boshqarish"
            ],
            "answer": "Ilmiy bilimlarning ma’nosini aniqlash"
        },
        {
            "q": "Bilimning asosiy turlaridan biri bo‘lgan badiiy bilim qanday ahamiyatga ega?",
            "options": [
                "Insonning ijodiy imkoniyatlarini faollashtiradi",
                "Texnik jarayonlarni rivojlantiradi",
                "Kundalik hayotda amaliy yordam beradi",
                "Faqat nazariy ma’lumotlarni beradi"
            ],
            "answer": "Insonning ijodiy imkoniyatlarini faollashtiradi"
        },
        {
            "q": "Ontologiya atamasi qaysi so‘zdan olingan?",
            "options": [
                "Yunoncha «ontos» - borliq, «logos», ta’limot.",
                "Rus tilidan olingan",
                "rabchadan olingan",
                "Nemis  tilidan olingan"
            ],
            "answer": "Yunoncha «ontos» - borliq, «logos», ta’limot."
        },
        {
            "q": "Borliq haqidagi tasavvurlar bizgacha qanday yetib kelgan?",
            "options": [
                "Afsonalar va miflar orqali",
                "Ilmiy dalillar orqali",
                "Qadriyatlar, urf - odatlar orqali",
                "Moddiy ishlab chiqarish orqali"
            ],
            "answer": "Afsonalar va miflar orqali"
        },
        {
            "q": "«Hamma narsa yer va suvdan vujudga keladi va rivojlanadi, xatto biz ham yer va suvdan paydo bo‘lganmiz» degan g’oya muallifi kim?",
            "options": [
                "Ksenofan",
                "naksimandr",
                "Fales",
                "Pifagor"
            ],
            "answer": "Ksenofan"
        },
        {
            "q": "«Hamma narsa sondir» kimning fikri?",
            "options": [
                "Pifagor",
                "Fales",
                "naksimandr",
                "Ksenofan"
            ],
            "answer": "Pifagor"
        },
        {
            "q": "Qaysi faylasuf borliqni kategoriya sifatida tavsiflagan?",
            "options": [
                "Parmenid",
                "Kant",
                "Fales",
                "Pifagor"
            ],
            "answer": "Parmenid"
        },
        {
            "q": "«Oqayotgan suvga ikki marta tushib bo’lmaydi» degan fikr muallifi kim?",
            "options": [
                "Geraklit",
                "Fales",
                "naksimandr",
                "Ksenofan"
            ],
            "answer": "Geraklit"
        },
        {
            "q": "Qaysi mutaffakir «Vujudi vojib» va «Vujudi mumkin»ning o‘zaro nisbatiga murojaat qiladi?",
            "options": [
                "Forobiy",
                "l - Xorazmiy",
                "t – Termiziy",
                "l- Buxoriy"
            ],
            "answer": "Forobiy"
        },
        {
            "q": "Ibn Sino fikricha, «Vujudi vojib» bu … ?",
            "options": [
                "Alloh",
                "Inson",
                "Makon",
                "Vaqt"
            ],
            "answer": "Alloh"
        },
        {
            "q": "XVII – XVIII asr materialistik faylasuflari borliqni nima bilan bog‘lashadi?",
            "options": [
                "Fizik borliq bilan bog‘laydi.",
                "Ommaviy ong bilan bog‘laydi.",
                "Inson bilan bog‘laydi.",
                "in bilan bog’laydi."
            ],
            "answer": "Fizik borliq bilan bog‘laydi."
        },
        {
            "q": "«Substansiya» - bu nima?",
            "options": [
                "Dunyodagi nisbatan barqaror va mustaqil holda mavjud mohiyat.",
                "Mutloq «Men» ning erkin, sof faoliyati.",
                "Ob’yektiv rivojlanuvchi g‘oya.",
                "Mehnat faoliyati"
            ],
            "answer": "Dunyodagi nisbatan barqaror va mustaqil holda mavjud mohiyat."
        },
        {
            "q": "Borliqning asosiy kategoriyasi nima?",
            "options": [
                "«Borliq» va «yo‘qlik»",
                "Tuproq Va Suv",
                "Nasl Va Irq",
                "Oila Va Mahalla"
            ],
            "answer": "«Borliq» va «yo‘qlik»"
        },
        {
            "q": "Falsafada borliq va yo‘qlik o‘rtasidagi o‘zaro aloqa qanday?",
            "options": [
                "Dialektik",
                "Hech Qanday Aloqa Yo'q",
                "Ijtimoiy",
                "xloqiy"
            ],
            "answer": "Dialektik"
        },
        {
            "q": "Nima «falsafiy kategoriya sifatida dunyoni, uning butun rang – barangligi va turli – tuman namoyon bo‘lish shakllari bilan yaxlit aks ettirish imkonini beradi»?",
            "options": [
                "Borliq",
                "Ma'naviy Hayot",
                "Siyosat",
                "Oila va Mahalla"
            ],
            "answer": "Borliq"
        },
        {
            "q": "Borliqning shakllari to‘liq aks etgan javobni toping.",
            "options": [
                "Tabiat, inson, ma'naviy, ijtimoiy, virtual borlig'",
                "Tabiat va inson",
                "Faqat tabait borlig'i",
                "Faqat inson borlig'i"
            ],
            "answer": "Tabiat, inson, ma'naviy, ijtimoiy, virtual borlig'"
        },
        {
            "q": "«... – inson va uning faoliyatidan qat’i nazar mavjud bo‘lgan narsalar va jarayonlar borlig‘i», bu qanday borliq?",
            "options": [
                "Tabiat borlig‘i",
                "Inson borlig‘i",
                "Ma’naviy borliq",
                "Ijtimoiy borliq."
            ],
            "answer": "Tabiat borlig‘i"
        },
        {
            "q": "Ma’naviy borliq nechtaga bo‘linadi?",
            "options": [
                "2 ta - ob’ektivlashgan va sub’ektivlashgan",
                "3 ta - xususiy, ilmiy, tabiiy",
                "4 ta - biologik, trahsgumanistik, real va noreal",
                "5 ta - tabiiy, inqirozli tafakkur, ruh, ong"
            ],
            "answer": "2 ta - ob’ektivlashgan va sub’ektivlashgan"
        },
        {
            "q": "Individuallashgan ma’naviy borliq - bu nima?",
            "options": [
                "Insonning ichki dunyosi",
                "Insonning tashqi dunyosi",
                "Ijtimoiy makon va vaqt",
                "Inson e’tiqodi"
            ],
            "answer": "Insonning ichki dunyosi"
        },
        {
            "q": "Inson yaratgan narsalar borlig‘i nima deb ataladi?",
            "options": [
                "Ikkilamchi tabiat",
                "Tabiat",
                "Narsa – buyum",
                "Landshaft."
            ],
            "answer": "Ikkilamchi tabiat"
        },
        {
            "q": "Ontologiyada “o‘z – o‘zining asosi” nima deb nomlanadi?",
            "options": [
                "Substansiya",
                "Materiya",
                "Reallik",
                "alil"
            ],
            "answer": "Substansiya"
        },
        {
            "q": "Kim substansiyani bir vaqtning o‘zida ham tabiat, ham xudo sifatida ta’riflagan?",
            "options": [
                "Spinoza",
                "Gegel",
                "Fixte",
                "ekart"
            ],
            "answer": "Spinoza"
        },
        {
            "q": "Birinchi asos sifatida ikkita substansiyani tan olgan ta’limotni aniqlang?",
            "options": [
                "Dualizm",
                "Totemizm",
                "Fetishizm",
                "eizm"
            ],
            "answer": "Dualizm"
        },
        {
            "q": "Dualizmning yorqin vakili qaysi olim?",
            "options": [
                "R.Dekart",
                "Gegel",
                "Shelling",
                "Spinoza"
            ],
            "answer": "R.Dekart"
        },
        {
            "q": "Dunyoning negizida ikkita emas balki undan ko‘proq mohiyat borligini tan oluvchi ta’limot?",
            "options": [
                "Plyuralizm",
                "ualizm",
                "eizm",
                "Monizm"
            ],
            "answer": "Plyuralizm"
        },
        {
            "q": "Monizm ta’limotiga  to‘g‘ri ta’rif berilgan qatorni ko‘rsating?",
            "options": [
                "Birinchi asos sifatida ikkita substansiya olingan falsafiy yondashuv",
                "unyoning negizida ikkita emas undan ko‘proq mohiyat bor.",
                "unyoning narsalar va hodisalar rang – barangligi bir substansiyadan iborat",
                "unyo negizida yagona asos yotadi deb hisoblovchi ta’limot"
            ],
            "answer": "Birinchi asos sifatida ikkita substansiya olingan falsafiy yondashuv"
        },
        {
            "q": "Monizmning shakllarini qaysi javobda to‘g‘ri ko‘rsatilgan?",
            "options": [
                "Idealistik va materialistik monizm",
                "un’viy, realistik, volyuntaristik",
                "Volyuntarizm, shamanizm",
                "Induizm, buddizm"
            ],
            "answer": "Idealistik va materialistik monizm"
        },
        {
            "q": "Dunyoning birinchi asosi qanday nomlanadi?",
            "options": [
                "Substansiya",
                "Materializm",
                "Plyuralizm",
                "Idealizm"
            ],
            "answer": "Substansiya"
        },
        {
            "q": "Materiya – hule tushunchasini falsafiy kategoriya sifatida ilk bor ishlatgan faylasuf kim?",
            "options": [
                "Platon",
                "Suqrot",
                "ristotel",
                "Gegel"
            ],
            "answer": "Platon"
        }
    ],
    [
        {
            "q": "Materiyaning tarkibiy darajalari?",
            "options": [
                "Mikro dunyo, makro dunyo, mega dunyo",
                "Faqat jonsiz narsalar",
                "Jonli va jonsiz narsalar",
                "Jamiyat va tabiat"
            ],
            "answer": "Mikro dunyo, makro dunyo, mega dunyo"
        },
        {
            "q": "Materiyaning tarkibiy darajalari – ierarxiyasida kim yoki nima asosiy o‘rinni egallaydi?",
            "options": [
                "Inson",
                "unyo",
                "Xudo",
                "Tabiat"
            ],
            "answer": "Inson"
        },
        {
            "q": "Ong falsafasi sohasida inson ongi va tanasining bir biridan mutlaqo mustaqil mohiyat ekani to’g’risidagi qarashni qaysi uyg’onish davri faylasufi qarashlarida uchratish mumkin?",
            "options": [
                "Rene Dekart",
                "Georg Gegel",
                "enedikt Spinoza",
                "Frensis Bekon"
            ],
            "answer": "Rene Dekart"
        },
        {
            "q": "Amaldagi qonunlarga bo‘ysunmaydigan borliq nima?",
            "options": [
                "Cheksizlik",
                "heklilik",
                "in",
                "Nomuayanlik"
            ],
            "answer": "Cheksizlik"
        },
        {
            "q": "Substansiyaning qaysi xususiyati hech narsaga bog‘liq bo‘lmagan, barqaror, o‘zgarmas va mutlaqlikni ifodalaydi?",
            "options": [
                "Universallik, o‘z – o‘zini belgilash",
                "Xunuklik",
                "Go‘zallik",
                "Yagonalik"
            ],
            "answer": "Universallik, o‘z – o‘zini belgilash"
        },
        {
            "q": "“Men fikrlayapman demak, demak men mavjudman” iborasi muallifi kim?",
            "options": [
                "Dekart",
                "Spinoza",
                "Kant",
                "F.Nitshe"
            ],
            "answer": "Dekart"
        },
        {
            "q": "Dunyo ikkita asosga ega degan ta’limot?",
            "options": [
                "Dualizm",
                "Monizm",
                "Plyuralizm",
                "heksiz"
            ],
            "answer": "Dualizm"
        },
        {
            "q": "Lotinchada “nisbiy” degan ma’noni bildiruvchi yo‘nalish nomini ko‘rsating?",
            "options": [
                "Relyatsion",
                "Materialistik",
                "Substansional",
                "Materialistik."
            ],
            "answer": "Relyatsion"
        },
        {
            "q": "O‘rta asrlar falsafasida nima makon va vaqtdan tashqarida deb yuritiladi?",
            "options": [
                "Xudo",
                "unyo",
                "Tabiat",
                "Inkor"
            ],
            "answer": "Xudo"
        },
        {
            "q": "Subyektiv idealizm vakillari to‘g‘ri ko‘rsatilgan qatorni toping?",
            "options": [
                "Berkli, Yum, Max",
                "Kant, Yum",
                "Gegel, Leybnis, Yum",
                "Marks, Engels"
            ],
            "answer": "Berkli, Yum, Max"
        },
        {
            "q": "Leybnitsning fikricha olam nimalardan tashkil topgan?",
            "options": [
                "Monadalardan",
                "tomlardan",
                "Efirdan",
                "Tuproqdan"
            ],
            "answer": "Monadalardan"
        },
        {
            "q": "Makon va vaqt konsepsiyalarining tarixda shakllangan ikki muhim va bir –biridan farq qiladigan yo‘nalishlari qaysilar?",
            "options": [
                "Substansional va relyatsion",
                "Relyatsion va irratsional",
                "hekli va cheksiz",
                "hiziqli va nochiziqli"
            ],
            "answer": "Substansional va relyatsion"
        },
        {
            "q": "Sub’yektiv idealizm vakillari makon va vaqtga qay tarzda yondashadi?",
            "options": [
                "Individual ong sifatida",
                "Moddiy narsalar",
                "Obyektiv makon sifatida",
                "Taasurot sifatida"
            ],
            "answer": "Individual ong sifatida"
        },
        {
            "q": "«Falsafa» atamasini birinchi bo‘lib qaysi faylasuf o‘z asarida qo‘llagan?",
            "options": [
                "Pifagor",
                "ristotel",
                "Suqrot",
                "Platon"
            ],
            "answer": "Pifagor"
        },
        {
            "q": "Dunyoni tushunishning mohiyati nimada?",
            "options": [
                "Insonning o’zini tushinishi va o’zi orqali olamni tushunushi",
                "U yoki bu narsaning odamlarga omad keltirishiga ishonch",
                "unyoni faqat sezgilar orqali bilishda",
                "unyoni tushunib bo’lmaydi"
            ],
            "answer": "Insonning o’zini tushinishi va o’zi orqali olamni tushunushi"
        },
        {
            "q": "Dunyoqarashning qanday funksiyalari mavjud?",
            "options": [
                "Bilish, qadriyatlarga munosabat, xulq atvorni tarbiyalash",
                "Vayronkorlik",
                "ilish funksiyasi",
                "Inqiroz tafakkuri"
            ],
            "answer": "Bilish, qadriyatlarga munosabat, xulq atvorni tarbiyalash"
        },
        {
            "q": "Dunyoqarashning tuzilishini toping?",
            "options": [
                "Dunyoni sezish, dunyoni idrok etish, dunyoni tushunish",
                "Inson ongi",
                "Inson ezgu niytlari",
                "Mehnat faoliyati"
            ],
            "answer": "Dunyoni sezish, dunyoni idrok etish, dunyoni tushunish"
        },
        {
            "q": "Dunyoni sezish bu qanday jarayon?",
            "options": [
                "Bu o‘zini qurshagan dunyoni sezgilar yordamida hissiy idrok etish",
                "Faqat ob’yektlarni anglash",
                "Inson o‘zini tushunish",
                "ql yordamida tushunish"
            ],
            "answer": "Bu o‘zini qurshagan dunyoni sezgilar yordamida hissiy idrok etish"
        },
        {
            "q": "Mifolokgik dunyoqarashning funksiyasini toping?",
            "options": [
                "Kompensatorlik",
                "Tarixiy",
                "unyoviy bilim",
                "unyoni sezish"
            ],
            "answer": "Kompensatorlik"
        },
        {
            "q": "Dunyoqarashning tarixiy shakllarini toping?",
            "options": [
                "Mif, din, falsafa, fan",
                "Mehnat, ijtimoiy ong",
                "Kino",
                "Yr. Fan, falsafa, ov"
            ],
            "answer": "Mif, din, falsafa, fan"
        },
        {
            "q": "Mif atamasi qanday ma’nolarni anglatadi?",
            "options": [
                "Rivoyat, afsona",
                "San’at, voqea",
                "O‘yin, san’at",
                "fsona, urush"
            ],
            "answer": "Rivoyat, afsona"
        },
        {
            "q": "Miflar nimalar orqali ifodalanadi?",
            "options": [
                "Rivoyat, ertaklar",
                "O’qish,ish",
                "Mehnat, ov",
                "Qo‘shiq, kuy"
            ],
            "answer": "Rivoyat, ertaklar"
        },
        {
            "q": "U yoki bu narsaning odamlarga omad keltirishiga ishonch nima deyiladi?",
            "options": [
                "Fetishizm",
                "Odamlarga sig‘inish",
                "Ruhlarga sig‘inish",
                "ulutlarga sig‘inish"
            ],
            "answer": "Fetishizm"
        },
        {
            "q": "Magiya bu nima?",
            "options": [
                "Ruhlar va ins-jinslarga sig‘inish",
                "Hayvonlarga sig‘inish",
                "Odamlarga sig‘inish",
                "Yomg‘irga sig‘inish"
            ],
            "answer": "Ruhlar va ins-jinslarga sig‘inish"
        },
        {
            "q": "Monoteizm nimani anglatadi?",
            "options": [
                "Yakka xudolik",
                "Ko‘p xudolik",
                "Xudosizlik",
                "Ruhlarga sig‘inish"
            ],
            "answer": "Yakka xudolik"
        },
        {
            "q": "Dunyoqarashning qaysi shakllari e’tiqod va tuyg‘ularga tayangan?",
            "options": [
                "Mifologik va diniy dunyoqarash",
                "Falsafiy dunyoqarash",
                "Ilmiy dunyoqarash",
                "Kundalik dunyoqarash"
            ],
            "answer": "Mifologik va diniy dunyoqarash"
        },
        {
            "q": "Falsafiy dunyoqarash dunyoni nimalarga tayangan holda tushuntiradi?",
            "options": [
                "Aql va bilimlarga",
                "Tuyg‘ularda",
                "E’tiqodda",
                "Sezgilarda"
            ],
            "answer": "Aql va bilimlarga"
        },
        {
            "q": "Falsafada birinchi o‘rinda nima turadi?",
            "options": [
                "Savol, masala",
                "Mehnat qurollari",
                "Mehnat taqsimoti",
                "Ishlab chiqarish"
            ],
            "answer": "Savol, masala"
        },
        {
            "q": "Falsafa fanining predmeti nima?",
            "options": [
                "Olamning yaxlit birligini o’rganish",
                "Erning strukturasini o’rganish",
                "Osmon jismlarini  o’rganish",
                "Fanni rivojlantirish"
            ],
            "answer": "Olamning yaxlit birligini o’rganish"
        },
        {
            "q": "Kosmotsentrizmniing asosiy xususiyati nimadan iborat?",
            "options": [
                "Kosmos va tabiatni anglash",
                "Yerni tadqiq etishni",
                "Odamni tadqiq etishni",
                "Hayotni anglashni"
            ],
            "answer": "Kosmos va tabiatni anglash"
        },
        {
            "q": "Quyidagilardan qaysi biri dialektik bilimlar sohasiga tegishli?",
            "options": [
                "Rivojlanish va o‘zgarishlar haqidagi ta’limot",
                "xloq haqidagi ta’limot",
                "Hayot haqidagi ta’limot",
                "Qonunlar va usullarni o‘rganuvchi fan"
            ],
            "answer": "Rivojlanish va o‘zgarishlar haqidagi ta’limot"
        },
        {
            "q": "Tafakkur qonunlari va shakllari haqidagi fan qanday nomlanadi?",
            "options": [
                "Mantiq",
                "ialektika",
                "Etika",
                "Tarix"
            ],
            "answer": "Mantiq"
        },
        {
            "q": "Materialistlar bu - ……?",
            "options": [
                "Olam  moddiy  asosga ega, ong materiyaning mahsuli deyuvchilar",
                "Ongni birinchi o‘ringa qo‘yuvchilar",
                "Olamning markaziga madaniyatni qo‘yuvchilar",
                "Olam markaziga xudoni qo’yuvchilar"
            ],
            "answer": "Olam  moddiy  asosga ega, ong materiyaning mahsuli deyuvchilar"
        },
        {
            "q": "Ekzistensializm tarafdorlarining eng yirik vakillari qaysi javobda to‘g‘ri ko‘rsatilgan?",
            "options": [
                "Kamyu, Sartr",
                "Fixte, Golbax",
                "Gogol, Turgenev",
                "Kant, Gegel"
            ],
            "answer": "Kamyu, Sartr"
        },
        {
            "q": "Agnostitsizm namoyondalarining asosiy g‘oyasi qaysi javobda to‘g‘ri ko‘rsatilgan?",
            "options": [
                "Dunyoni bilish mumkin emas",
                "unyoni faqat sezgilar orqali bilish mumkin",
                "unyoni to‘liq bilish mumkin",
                "unyoni aqliy bilish mumkin"
            ],
            "answer": "Dunyoni bilish mumkin emas"
        },
        {
            "q": "Falsafaning qaysi funksiyasi insonning o‘z o‘zini anglashda yetakchi o‘rinni egallaydi?",
            "options": [
                "Dunyoqarash funksiyasi",
                "Mehnatga layoqat",
                "O‘yin",
                "Metodologik"
            ],
            "answer": "Dunyoqarash funksiyasi"
        },
        {
            "q": "Falsafa fanining mohiyati bu - ...?",
            "options": [
                "Borliq to‘g‘risidagi ob’yektiv bilimlarni aniqlash va tizimlashtirish, jamiyatning pragmatik ehtiyojlariga javob berish",
                "orliq to‘g‘risidagi sub’yektiv bilimlar",
                "alillarsiz aniqlash",
                "Hujjatlarni yig‘ish"
            ],
            "answer": "Borliq to‘g‘risidagi ob’yektiv bilimlarni aniqlash va tizimlashtirish, jamiyatning pragmatik ehtiyojlariga javob berish"
        },
        {
            "q": "Mantiq qanday fan?",
            "options": [
                "To‘g‘ri fikrlash shakllari va qonunlari haqidagi fan",
                "Matematik nazariyalar to‘plami",
                "Til tahlili bilan shug‘ullanuvchi fan",
                "San’at asarlarini tadqiq qiluvchi soha"
            ],
            "answer": "To‘g‘ri fikrlash shakllari va qonunlari haqidagi fan"
        },
        {
            "q": "Formal mantiqda fikrlarning mazmuniga qaraganda nima muhimroq?",
            "options": [
                "Fikrlarning shakli",
                "Fikrlarning hissiy jihati",
                "Fikrlarning subyektivligi",
                "Fikrlarning individual xususiyatlari"
            ],
            "answer": "Fikrlarning shakli"
        },
        {
            "q": "Aristotel qaysi mantiq tizimining asoschisi hisoblanadi?",
            "options": [
                "An’anaviy mantiq",
                "Matematik mantiq",
                "Modal mantiq",
                "Ekzistensial semantika"
            ],
            "answer": "An’anaviy mantiq"
        },
        {
            "q": "Dialektik mantiqning predmeti nima?",
            "options": [
                "Tafakkur jarayoni",
                "Tabiiy  qonuniyatlari",
                "Matematik formulalar",
                "Ritorik munosabatlar"
            ],
            "answer": "Tafakkur jarayoni"
        },
        {
            "q": "Mantiqning asosiy shakllaridan biri toping?",
            "options": [
                "Hukmlar",
                "Tasavvurlar",
                "Emosiyalar",
                "O‘yinlar"
            ],
            "answer": "Hukmlar"
        },
        {
            "q": "Formal mantiq nimani o‘rganadi?",
            "options": [
                "To‘g‘ri tafakkurlashning shakllari va qonunlarini",
                "Fikrlar va hissiyotlarini",
                "Tilning sintaktik tahlilini",
                "Muloqot usullarini"
            ],
            "answer": "To‘g‘ri tafakkurlashning shakllari va qonunlarini"
        },
        {
            "q": "Formal mantiqning rivojlanish bosqichlari qaysilar?",
            "options": [
                "An’anaviy va matematik",
                "ialektik va intuitiv",
                "Induktiv va deduktiv",
                "Semantik va sintaktik"
            ],
            "answer": "An’anaviy va matematik"
        },
        {
            "q": "Mantiq qanday usullar bilan yangi bilimlarni yaratadi?",
            "options": [
                "xulosa chiqarish asosida",
                "Tajriba va kuzatuv asosida",
                "Hissiy idrok orqali",
                "Til tahlili yordamida"
            ],
            "answer": "xulosa chiqarish asosida"
        },
        {
            "q": "Formal mantiqni boshqa fanlardan ajratib turuvchi asosiy xususiyat nima?",
            "options": [
                "Fikrlarning shakli nuqtai nazaridan o‘rganilishi",
                "Fikrlarning hissiy mazmuni bilan bog‘liqligi",
                "Tilning semantik tomonini tadqiq qilishi",
                "Kundalik nutqni tahlil qilishi"
            ],
            "answer": "Fikrlarning shakli nuqtai nazaridan o‘rganilishi"
        },
        {
            "q": "Dialektik mantiqning asoschisi kim hisoblanadi?",
            "options": [
                "Gegel",
                "ristotel",
                "G.Frege",
                "ul"
            ],
            "answer": "Gegel"
        },
        {
            "q": "Zamonaviy mantiqda validlik deganda nimani anglatadi?",
            "options": [
                "Xulosaning hukmlardan kelib chiqishi",
                "Hukmlarning hissiy asoslanishi",
                "Fikrlarning bevosita kuzatuv natijasida hosil bo‘lishi",
                "Xulosaning dalillardan mustaqil bo‘lishi"
            ],
            "answer": "Xulosaning hukmlardan kelib chiqishi"
        },
        {
            "q": "Formal mantiqda “P&Q” degan ibora nimani anglatadi?",
            "options": [
                "Birlashtiruvchi (konunktiv) hukmning formulasini",
                "Fikrlarning qarama-qarshiligini",
                "Hukmlarning dalilsizligi",
                "Hissiy bog‘lanishni"
            ],
            "answer": "Birlashtiruvchi (konunktiv) hukmning formulasini"
        },
        {
            "q": "Dialektik mantiqni an’anaviy mantiqdan farqlovchi asosiy tamoyil nima?",
            "options": [
                "Harakat va o‘zgarish mantig‘iga asoslanishi",
                "Fikrlarning shakliga e’tibor berishi",
                "Fikrlarni hissiy tomondan tahlil qilishi",
                "Tilda mulohazalarni mustahkamlashi"
            ],
            "answer": "Harakat va o‘zgarish mantig‘iga asoslanishi"
        }
    ],
    [
        {
            "q": "Formal mantiqda xulosa chiqarishning asosiy tamoyili nima?",
            "options": [
                "Hulosa asoslari bolgan hukmlarning mantiqiy bog‘lanishi",
                "Kuzatuvlarni qayta ishlash",
                "Mazmunni tahlil qilish orqali qaror qabul qilish",
                "Intuitiv qarashlardan foydalanish"
            ],
            "answer": "Hulosa asoslari bolgan hukmlarning mantiqiy bog‘lanishi"
        },
        {
            "q": "Formal mantiqda P va Q belgilari nimani ifodalaydi?",
            "options": [
                "Har qanday hukmlarni",
                "Sezgilarni va hissiyotlarni",
                "ialektik tahlil elementlarini",
                "Ritorik munosabatlarni"
            ],
            "answer": "Har qanday hukmlarni"
        },
        {
            "q": "Formal mantiqning rivojlanishiga qaysi olim katta hissa qo‘shgan?",
            "options": [
                "G.Leybnits",
                "Sokrat",
                "Kant",
                "ekart"
            ],
            "answer": "G.Leybnits"
        },
        {
            "q": "Formal mantiqda “A=A” degan ifoda nimani bildiradi?",
            "options": [
                "Ayniyat qonunini",
                "Ziddiyat qonunini",
                "Uchinchi istisno qonunini",
                "alillash usulini"
            ],
            "answer": "Ayniyat qonunini"
        },
        {
            "q": "Ziddiyat qonuni qaysi fikrlarni inkor etadi?",
            "options": [
                "Qarama-qarshi hukmlar bir vaqtda chin bo‘lishini",
                "Mazmun va shakl birligini",
                "ialektik tahlilning natijalarini",
                "Hukmlarning bir-biridan mustaqil bo‘lishini"
            ],
            "answer": "Qarama-qarshi hukmlar bir vaqtda chin bo‘lishini"
        },
        {
            "q": "Dialektik mantiq nima bilan shug‘ullanadi?",
            "options": [
                "Tafakkurning o‘zgarish va rivojlanish qonuniyatlarini o‘rganish",
                "Fikrlarning bevosita kuzatuv natijasida hosil bo‘lishini tahlil qilish",
                "Tabiatdagi hodisalarni tasvirlash",
                "Matematik mantiq elementlarini qo‘llash"
            ],
            "answer": "Tafakkurning o‘zgarish va rivojlanish qonuniyatlarini o‘rganish"
        },
        {
            "q": "Formal mantiqning asoschisi kim?",
            "options": [
                "Aristotel",
                "ekart",
                "Kant",
                "Gegel"
            ],
            "answer": "Aristotel"
        },
        {
            "q": "Formal mantiqning asosiy qonunlaridan biri qaysi?",
            "options": [
                "Yetarli asos qonuni",
                "Qarama-qarshiliklar birligi va kurashi  qonuni",
                "Inkorni inkor qonuni",
                "Xulosalarning mazmuni"
            ],
            "answer": "Yetarli asos qonuni"
        },
        {
            "q": "Formal mantiqda xatolar qaysi ikki turga bo‘linadi?",
            "options": [
                "Paralogizm va sofizm",
                "Intuitsiya va emotsiya",
                "Tasviriy va rasmiy",
                "Kuzatuv va tajriba"
            ],
            "answer": "Paralogizm va sofizm"
        },
        {
            "q": "Mantiqda “to‘g‘ri fikr” deganda nimani anglatiladi?",
            "options": [
                "Haqiqatga mos keluvchi fikrni",
                "alilsiz shakllangan fikrni",
                "Hissiy taassurotlarga asoslangan fikrni",
                "Xatolarni o‘z ichiga olgan fikrni"
            ],
            "answer": "Haqiqatga mos keluvchi fikrni"
        },
        {
            "q": "Formal mantiq qaysi uslubiy vositalarni o‘rganadi?",
            "options": [
                "Tafakkur shakllarini va ulardagi belgilarning o‘zaro bog‘lanishini",
                "His-tuyg‘ularni va ularning tasviriy ifodalarini",
                "Til va nutqning grammatik qoidalarini"
            ],
            "answer": "Tafakkur shakllarini va ulardagi belgilarning o‘zaro bog‘lanishini"
        },
        {
            "q": "“Fikr” deganda nimani tushunamiz?",
            "options": [
                "Bilish jarayonining natijasi sifatida hukmlar yoki tushunchalar",
                "Faqat hissiy idrok natijasida hosil bo‘lgan ma’lumotlar",
                "Tabiiy til orqali ifodalangan hislar",
                "Mazmuni dalillarsiz tasvirlangan ma’lumotlar"
            ],
            "answer": "Bilish jarayonining natijasi sifatida hukmlar yoki tushunchalar"
        },
        {
            "q": "Tafakkur jarayonining asosiy belgisi nima?",
            "options": [
                "Umumlashgan obrazlarda voqelikni aks ettirishi",
                "His-tuyg‘ularni ifodalashi",
                "evosita kuzatuv orqali shakllanishi",
                "Tilda tasviriy ifodalanishi"
            ],
            "answer": "Umumlashgan obrazlarda voqelikni aks ettirishi"
        },
        {
            "q": "Mantiqiy tahlilda qanday til turlari qo‘llaniladi?",
            "options": [
                "Tabiiy va formallashgan tillar",
                "Tabiiy va hissiy tillar",
                "Ritorik va tasviriy tillar",
                "Matematik va amaliy tillar"
            ],
            "answer": "Tabiiy va formallashgan tillar"
        },
        {
            "q": "Dialektik mantiq qaysi kategoriyalar bilan ishlaydi?",
            "options": [
                "Umumiy va universal qonuniyatlar bilan",
                "alillash va tasvirlash usullari bilan",
                "Intuitsiya va emotsiyalar bilan",
                "Kuzatuv va tajribalar bilan"
            ],
            "answer": "Umumiy va universal qonuniyatlar bilan"
        },
        {
            "q": "Formal mantiqning qaysi qonuniga ko‘ra “Ma’lum bir predmet yoki hodisa haqida aytilgan fikr ayni bir muhokama doirasida ayni bir vaqtda o‘z-o‘ziga tengdir.”",
            "options": [
                "Ayniyat qonuni",
                "Nozidlik (ziddiyatsizlik) qonuni",
                "Uchinchisi istisno qonuni",
                "Yetarli asos qonuni"
            ],
            "answer": "Ayniyat qonuni"
        },
        {
            "q": "Formal mantiqning qaysi qonuniga ko‘ra “ikki o‘zaro bir-birini istisno qiluvchi (qarama-qarshi yoki zid) fikrlar bir vaqtda va bir xil nisbatda birdaniga chin bo‘lishi mumkin emas, hech bo‘lmaganda ulardan biri, albatta, yolg‘on bo‘ladi.”",
            "options": [
                "Nozidlik (ziddiyatsizlik) qonuni",
                "yniyat qonuni",
                "Uchinchisi istisno qonuni",
                "Yetarli asos qonuni"
            ],
            "answer": "Nozidlik (ziddiyatsizlik) qonuni"
        },
        {
            "q": "Formal mantiqning qaysi qonuniga ko‘ra “fikrning to‘liq mazmunini qamrab olib, bayon qilingan ikki zid fikrdan biri chin, boshqasi yolg‘on, uchinchisiga o‘rin yo‘q.",
            "options": [
                "Uchinchisi istisno qonuni",
                "yniyat qonuni",
                "Nozidlik (ziddiyatsizlik) qonuni",
                "Yetarli asos qonuni"
            ],
            "answer": "Uchinchisi istisno qonuni"
        },
        {
            "q": "Formal mantiqning qaysi qonuniga ko‘ra har bir buyum va hodisaning real asosi bo‘lgani kabi, ularning in’ikosi bo‘lgan fikr-mulohazalar ham asoslangan bo‘lishi kerak.",
            "options": [
                "Yetarli asos qonuni",
                "yniyat qonuni",
                "Nozidlik (ziddiyatsizlik) qonuni",
                "Uchinchisi istisno qonuni"
            ],
            "answer": "Yetarli asos qonuni"
        },
        {
            "q": "Xulosa chiqarish…",
            "options": [
                "Bir va undan ortiq chin hukmlardan ma’lum qoidalar yordamida yangi bilimlarni keltirib chiqaruvchi tafakkur shaklidir.",
                "Fikrning harakat yo‘nalishidir.",
                "Umumiy bilimdan juz’iy bilimga o‘tishdir.",
                "Juz’iy bilimdan umumiy bilimga o‘tishdir."
            ],
            "answer": "Bir va undan ortiq chin hukmlardan ma’lum qoidalar yordamida yangi bilimlarni keltirib chiqaruvchi tafakkur shaklidir."
        },
        {
            "q": "Qanday  shartlar bajarilganda xulosa chin bo‘ladi?",
            "options": [
                "Asoslar chin xukmlar bo‘lishi va xulosa chiqarish qoidalariga amal qilinishi kerak.",
                "soslarning chin xukmlar bo‘lishi yetarli",
                "soslar faqat tasdiq xukmlar bo‘lishi kerak",
                "Xulosa chiqarish qoidalariga amal qilinishi kerak."
            ],
            "answer": "Asoslar chin xukmlar bo‘lishi va xulosa chiqarish qoidalariga amal qilinishi kerak."
        },
        {
            "q": "Fikrning harakat yo‘nalishiga ko‘ra xulosa chiqarishning qanday turlari bor?",
            "options": [
                "Deduktiv xulosa chiqarish, induktiv xulosa chiqarish, analogiyaga asoslanib xulosa chiqarish",
                "evosita xulosa chiqarish, bilvosita xulosa chiqarish",
                "Induktiv xulosa chiqarish, analogiyaga asoslanib xulosa chiqarish",
                "eduktiv xulosa chiqarish, bevosita xulosa chiqarish"
            ],
            "answer": "Deduktiv xulosa chiqarish, induktiv xulosa chiqarish, analogiyaga asoslanib xulosa chiqarish"
        },
        {
            "q": "Tafakkur qonuni nima?",
            "options": [
                "Fikrlash elementlari o‘rtasidagi ichki zaruriy aloqadorlik",
                "Fikr yuritish qoidalari yig‘indisi.",
                "Fikr yuritish usuli.",
                "Fikrlash shakli."
            ],
            "answer": "Fikrlash elementlari o‘rtasidagi ichki zaruriy aloqadorlik"
        },
        {
            "q": "Tafakkur shakli nima?",
            "options": [
                "Fikrning mazmunini tashkil etuvchi elementlarning bog‘lanish usuli",
                "Fikrning yaqqol ifodalanishi",
                "Fikrning tilda ifodalanishi",
                "Til va tafakkurning bir-biriga to‘la mos kelishi"
            ],
            "answer": "Fikrning mazmunini tashkil etuvchi elementlarning bog‘lanish usuli"
        },
        {
            "q": "Mantiqiy tafakkur qanday qonunlarga bo‘ysunadi?",
            "options": [
                "Dialektik va formal mantiq qonunlariga",
                "Yakka va umumiy qonunlarga",
                "Ob’ektiv va subektiv qonunlarga",
                "Fizik qonunlarga"
            ],
            "answer": "Dialektik va formal mantiq qonunlariga"
        },
        {
            "q": "Dialektik mantiq qaysi qonunlarga asoslanadi?",
            "options": [
                "Qarama-qarshiliklar birligi va kurashi qonuni, miqdor o‘zgarishlaridan sifat o‘zgarishlariga o‘tish va inkorni inror qonuniga",
                "Formal mazmun qonunlariga",
                "Kuzatuv va tajriba qonunlariga",
                "Tilda ifoda qonunlariga"
            ],
            "answer": "Qarama-qarshiliklar birligi va kurashi qonuni, miqdor o‘zgarishlaridan sifat o‘zgarishlariga o‘tish va inkorni inror qonuniga"
        },
        {
            "q": "Mantiq atamasiga berilgan nominal ta’rifni aniqlang:",
            "options": [
                "Mantiq arabcha so‘z bo‘lib, nutq, fikr , aql ma’nolarini bildiradi.",
                "Mantiq tafakkur qonunlarini o‘rganuvchi fan",
                "Mantiq tafakkur qonunlari va shakllarini o‘rganuvchi fan",
                "Mantiq tafakkurni o‘rganuvchi fan"
            ],
            "answer": ""
        },
        {
            "q": "Dialektikaning asosiy tamoyillari?",
            "options": [
                "O‘zaro aloqadorlik va rivojlanish, tarixiylik, sababiyat, tizimlilik",
                "Insonning axloqiy qarashlari",
                "Tajribaga asoslangan natijalar",
                "Qadimgi mifologik e’tiqodlar"
            ],
            "answer": "O‘zaro aloqadorlik va rivojlanish, tarixiylik, sababiyat, tizimlilik"
        },
        {
            "q": "Falsafada metodologiya nima uchun muhim?",
            "options": [
                "Bilish jarayonini aniqlash va tartibga solish uchun",
                "Torsion maydonlarni aniqlash uchun",
                "Qadriyatlarni ifodalash uchun",
                "Tasodifiy bilimlarni shakllantirish uchun"
            ],
            "answer": "Bilish jarayonini aniqlash va tartibga solish uchun"
        },
        {
            "q": "Uyg‘onish davrining asosiy g‘oyasi?",
            "options": [
                "San’at va inson mavzusi",
                "Tabiat hodisalari",
                "Olamning diniy tushunisha",
                "Fan va texnologiyaga"
            ],
            "answer": "San’at va inson mavzusi"
        },
        {
            "q": "Falsafiy antropologiya nimani o‘rganadi?",
            "options": [
                "Inson va uning mohiyatini",
                "Tafakkur qonunlarini",
                "Falsafiy mushohadalarni",
                "Tabiat qonunlarini"
            ],
            "answer": "Inson va uning mohiyatini"
        },
        {
            "q": "Falsafaning “aksiologik” funksiyasi nimani anglatadi?",
            "options": [
                "Qadriyatlarni o‘rganish va baholashni",
                "Ijtimoiy munosabatlarni o‘rganishni",
                "xloqiy me’yorlarni mustahkamlashni",
                "Ilmiy bilimlarni shakllantirishni"
            ],
            "answer": "Qadriyatlarni o‘rganish va baholashni"
        },
        {
            "q": "Ob’yektiv idealizmning asosiy g‘oyasi nima?",
            "options": [
                "Olamning asosi  ilohiy g’oya",
                "Shaxsiy tajribaga asoslangan tushunchalar",
                "ilim va qadriyatlarning nisbiyligi",
                "orliq faqat materiyaga asoslangan"
            ],
            "answer": "Olamning asosi  ilohiy g’oya"
        },
        {
            "q": "Qadimgi Milet maktabining asoschisi kim?",
            "options": [
                "Fales, Anaksimen, Anaksimandr",
                "Platon",
                "Sokrat",
                "Epikur"
            ],
            "answer": "Fales, Anaksimen, Anaksimandr"
        },
        {
            "q": "Aristotelning “Oltin o‘rta” g’oyasi qaysi ta’limotida ishlab chiqilgan?",
            "options": [
                "Axloqiy",
                "Irratsional",
                "Materialistik",
                "Sotsialistik"
            ],
            "answer": "Axloqiy"
        },
        {
            "q": "«Atomlar va bo‘shliqdan boshqa hech narsa mavjud emas» deb da’vo qilgan faylasuf kim?",
            "options": [
                "Demokrit",
                "Epikur",
                "Platon",
                "naksimandr"
            ],
            "answer": "Demokrit"
        },
        {
            "q": "Platon (Aflotun)ning  asosiy ta’limoti qanday nomlanadi?",
            "options": [
                "g’oyalar haqidagi ta’limot",
                "Empirizm",
                "Ratsionalizm",
                "Orakullar"
            ],
            "answer": "g’oyalar haqidagi ta’limot"
        },
        {
            "q": "“Mayevtika” usuliga asoslangan Suqrot ta’limoti qanday nomlanadi?",
            "options": [
                "Dialektik usul",
                "Empirizm",
                "Ekzistensial usul",
                "“Olijanob yolg‘on” ta’limoti"
            ],
            "answer": "Dialektik usul"
        },
        {
            "q": "Stoik maktabining asoschisi kim?",
            "options": [
                "Kitiylik Zenon",
                "Platon",
                "Epikur",
                "Pifagor"
            ],
            "answer": "Kitiylik Zenon"
        },
        {
            "q": "Qaysi fikr Platon (Aflotun) falsafasiga tegishli?",
            "options": [
                "G‘oyalar yoki shakllar voqelikning asosi",
                "Olam sezgilar orqali idrok qilinadi",
                "Mavjud hamma narsa materiya va shakldan iborat",
                "Mantiq faqat amaliy fandir"
            ],
            "answer": "G‘oyalar yoki shakllar voqelikning asosi"
        },
        {
            "q": "Xristian falsafasida e’tiqod va aql sintezini birinchi bo‘lib kim taklif qilgan?",
            "options": [
                "Foma Akvinskiy",
                "vgustin Avreliy",
                "Kenterberilik Anselm",
                "amashqlik Yuhanno"
            ],
            "answer": "Foma Akvinskiy"
        },
        {
            "q": "Foma Akvinskiy fikricha “hamma narsaning asosiy sababi” bu nima?",
            "options": [
                "Xudo",
                "Inson",
                "Shakl",
                "Materiya"
            ],
            "answer": "Xudo"
        },
        {
            "q": "Avgustin xristianlik kontekstida qanday falsafiy ta’limotni taqdim etgan?",
            "options": [
                "Platonizm",
                "ualizm",
                "Empirizm",
                "Monizm"
            ],
            "answer": "Platonizm"
        },
        {
            "q": "Foma Akvinskiy falsafasida “aql” ……..?",
            "options": [
                "e’tiqodni mustahkamlaydi",
                "E’tiqodga mutlaqo ziddir",
                "Jamiyatning rivoji",
                "Falsafada uning ma’nosi yo‘q"
            ],
            "answer": "e’tiqodni mustahkamlaydi"
        },
        {
            "q": "Sxolastikaning asoschisi kim?",
            "options": [
                "Foma Akvinskiy",
                "vgustin Avreliy",
                "uyuk Albert",
                "Kenterberilik Anselm"
            ],
            "answer": "Foma Akvinskiy"
        },
        {
            "q": "O‘rta asr falsafasi kontekstida Nitsshe falsafasiga qaysi fikr ko‘proq mos keladi?",
            "options": [
                "Qadriyatlarni qayta baholash",
                "Oqilonalik va Xudoga ishonish",
                "Metafizik haqiqat",
                "Mo‘jizalarning roli"
            ],
            "answer": "Qadriyatlarni qayta baholash"
        },
        {
            "q": "Makiavellining “Hukmdor” asarida qanday falsafiy ta’limotni ishlab chiqadi?",
            "options": [
                "Siyosatdagi realism",
                "Fazilat axloqi",
                "Siyosatdagi platonizm",
                "Ijtimoiy adolat tushunchasi"
            ],
            "answer": "Siyosatdagi realism"
        },
        {
            "q": "Ongsizlik nima?",
            "options": [
                "Insonning ongli faoliyatida ong bilan boshqarib bo‘lmaydigan lahza",
                "Insonga ongsizlik xos emas",
                "Insonning bolalik davridagi xulq atvori",
                "Insoning qarilik davridagi xulq atvori"
            ],
            "answer": "Insonning ongli faoliyatida ong bilan boshqarib bo‘lmaydigan lahza"
        },
        {
            "q": "Qaysi faylasuf Yangi davrda empirizm asoschisi bo‘lgan?",
            "options": [
                "Bekon",
                "ekart",
                "Lokk",
                "Spinoza"
            ],
            "answer": "Bekon"
        },
        {
            "q": "Qaysi falsafiy yo‘nalish Rene Dekart bilan ko‘proq bog‘langan?",
            "options": [
                "Ratsionalizm",
                "Empirizm",
                "Psixoanaliz",
                "Metafizika"
            ],
            "answer": "Ratsionalizm"
        }
    ],
    [
        {
            "q": "“Dekart dualizmi” nima?",
            "options": [
                "Materiya va ruhning ajralishi",
                "Xudo va insonning birligi",
                "Metafizikada harakat tamoyili",
                "Mantiqning ta’rifi"
            ],
            "answer": "Materiya va ruhning ajralishi"
        },
        {
            "q": "Jon Lokk fikrini toping?",
            "options": [
                "Odam “toza varaq” bo‘lib tug‘iladi (tabula rasa)",
                "ilim ichki g‘oyalar orqali keladi",
                "Haqiqatni faqat sezgi orqali bilish mumkin",
                "archa bilimlar mantiqqa asoslanadi"
            ],
            "answer": "Odam “toza varaq” bo‘lib tug‘iladi (tabula rasa)"
        },
        {
            "q": "Spinoza Xudoning tabiati haqida qanday ta’limotni ilgari surgan?",
            "options": [
                "Panteizm",
                "Teizm",
                "teizm",
                "gnostitsizm"
            ],
            "answer": "Panteizm"
        },
        {
            "q": "Immanuil Kant qanday bilish nazariyasini ishlab chiqqan?",
            "options": [
                "Krititsizm",
                "Empirizm",
                "Idealizm",
                "Pozitivizm"
            ],
            "answer": "Krititsizm"
        },
        {
            "q": "Kantning “kategoriyalar” tushunchasi nimada namoyon bo‘ladi?",
            "options": [
                "Aqlni tashkil etishda",
                "Tabiatni tasniflashda",
                "Narsalarning mohiyatini aniqlashda",
                "Inson ongi tushunchasida"
            ],
            "answer": "Aqlni tashkil etishda"
        },
        {
            "q": "Georg Vilgelm Fridrix Gegel qanday falsafiy ta’limotni ishlab chiqqan?",
            "options": [
                "Dialektik idealism",
                "Pozitivizm",
                "Tabiiy materialism",
                "Ekzistensializm"
            ],
            "answer": "Dialektik idealism"
        },
        {
            "q": "“Ruhdagi hayot” va “o‘zi uchun mavjud bo‘lish” tushunchalarini hozirgi zamon faylasuflaridan qaysi biri ishlab chiqqan?",
            "options": [
                "Xaydegger",
                "Nitsshe",
                "Sartr",
                "Marks"
            ],
            "answer": "Xaydegger"
        },
        {
            "q": "Pozitivizm asoschisi kim?",
            "options": [
                "Ogyust Kont",
                "Sharl Leybnits",
                "Karl Marks",
                "Jan-Pol Sartr"
            ],
            "answer": "Ogyust Kont"
        },
        {
            "q": "Fridrix Nitsshening “ibtidoiy ong” falsafasi nimadan iborat?",
            "options": [
                "Qadriyatlarni qayta baholash",
                "inning ahamiyatini tan olish",
                "Ruhning boqiyligini tan olish",
                "Metafizik abstraksiyalarni yengish"
            ],
            "answer": "Qadriyatlarni qayta baholash"
        },
        {
            "q": "Martin Xaydegger “Borliq va vaqt” asarida qanday falsafiy konsepsiyani ishlab chiqadi?",
            "options": [
                "Inson mavjudligini tahlil qilish",
                "Madaniyatning hayotdagi o‘rni",
                "Ong ontologiyasi",
                "Obyektiv voqelik"
            ],
            "answer": "Inson mavjudligini tahlil qilish"
        },
        {
            "q": "Fenomenologiyaning asoschisi kim?",
            "options": [
                "Gusserl",
                "Xaydegger",
                "Sartr",
                "Marks"
            ],
            "answer": "Gusserl"
        },
        {
            "q": "Mishel Fuko falsafada qanday ta’limotni rivojlantiradi?",
            "options": [
                "Poststrukturalizm",
                "Strukturizm",
                "Gumanizm",
                "Nisbiylik nazariyasi"
            ],
            "answer": "Poststrukturalizm"
        },
        {
            "q": "Jan Pol Sartr falsafasida erkinlik qanday rol o‘ynaydi?",
            "options": [
                "Erkinlik borliqning ajralmas qismidir",
                "Erkinlik - bu afsona",
                "Erkinlik Xudoga bog‘liq",
                "Erkinlik qo‘rquvni cheklashdir"
            ],
            "answer": "Erkinlik borliqning ajralmas qismidir"
        },
        {
            "q": "Karl Marks nomi bilan qaysi falsafiy oqim bog‘langan?",
            "options": [
                "Marksizm",
                "Ekzistensializm",
                "Strukturizm",
                "Postmodernizm"
            ],
            "answer": "Marksizm"
        },
        {
            "q": "Jon Rouls qanday falsafiy yondashuvni rivojlantiradi?",
            "options": [
                "Adolat nazariyasi",
                "ekonstruksiya",
                "Feministik falsafa",
                "Naturalizm"
            ],
            "answer": "Adolat nazariyasi"
        },
        {
            "q": "“Absurd” tushunchasi ekzistensializmda qanday rol o‘ynaydi?",
            "options": [
                "Borliqning ma’nosizligi",
                "Hayot mazmunining Manbai",
                "Emotsional tashvish Manbai",
                "Evolyutsiyaga intilish"
            ],
            "answer": "Borliqning ma’nosizligi"
        },
        {
            "q": "Postmodernizm falsafasining asosiy g‘oyasi nimadan iborat edi?",
            "options": [
                "G‘oyalarga tarixiy kontekst nuqtai nazaridan qarash kerak",
                "Haqiqat universaldir",
                "Metafizika barcha falsafiy muammolarning manbaidir",
                "iz falsafaning kelib chiqishiga qaytishimiz kerak"
            ],
            "answer": "G‘oyalarga tarixiy kontekst nuqtai nazaridan qarash kerak"
        },
        {
            "q": "Qaysi faylasuf psixoanalizning asoschisi bo‘lgan?",
            "options": [
                "Zigmund Freyd",
                "Jan-Pol Sartr",
                "Karl Gustav Yung",
                "lfred Adler"
            ],
            "answer": "Zigmund Freyd"
        },
        {
            "q": "“Kommunikativ jamiyat” tushunchasi Yurgen Xabermas falsafasida qanday rol o‘ynaydi?",
            "options": [
                "O‘zaro ta’sirlarni til orqali anglash",
                "Siyosiy diktatura g‘oyasini qo‘llab-quvvatlash",
                "Iqtisodiy me’yorlarning o‘rnatilishi",
                "Iqtisodiyotning jamiyatning asosiy instituti sifatida tan olinishi"
            ],
            "answer": "O‘zaro ta’sirlarni til orqali anglash"
        },
        {
            "q": "Qaysi faylasuf germenevtikaning asoschisi hisoblanadi?",
            "options": [
                "Xans-Georg Gadamer",
                "ekart",
                "ekon",
                "Rikkardo Pitsolato"
            ],
            "answer": "Xans-Georg Gadamer"
        },
        {
            "q": "Qadimgi Hindistonda Vedalar kitobida qanday falsafiy tushunchalar mavjud?",
            "options": [
                "Karma va Reinkarnatsiya",
                "Panteizm va Monizm",
                "Ontologiya va Epistemologiya",
                "ialektika va Materiya"
            ],
            "answer": "Karma va Reinkarnatsiya"
        },
        {
            "q": "Qadimgi Misrda «Maat» tushunchasi nima anglatadi?",
            "options": [
                "Hayotning adolatli va tartibli qonunlari",
                "Ma’naviyatning yuksalishi",
                "Insoniyatning qayta tug‘ilishi",
                "Kosmik uyg‘unlik"
            ],
            "answer": "Hayotning adolatli va tartibli qonunlari"
        },
        {
            "q": "Qadimgi Xitoyda Daosizm ta’limotining asoschisi kim edi?",
            "options": [
                "Laozi",
                "Zhuangzi",
                "Sun Tzu",
                "Mozi"
            ],
            "answer": "Laozi"
        },
        {
            "q": "Qadimgi Hindistonda «Vedalar» kitobida qanday g‘oyalar ilgari surilgan?",
            "options": [
                "Tabiat va kosmos",
                "in va siyosat",
                "Ijtimoiy adolat",
                "Gumanizm va ma’naviyat"
            ],
            "answer": "Tabiat va kosmos"
        },
        {
            "q": "Qadimgi Xitoyda Konfutsiylikning asosiy maqsadi nima edi?",
            "options": [
                "Ijtimoiy va siyosiy tartibni mustahkamlash",
                "Tabiatni tushunish",
                "Ma’naviyatni oshirish",
                "Insonlar o‘rtasida tenglik yaratish"
            ],
            "answer": "Ijtimoiy va siyosiy tartibni mustahkamlash"
        },
        {
            "q": "Qadimgi Xitoyda Laozi «Daosizm» ta’limotini qanday yondashuvga asoslagan?",
            "options": [
                "Inson va tabiatning uyg‘unligi",
                "Yangi jamiyat qurish",
                "O‘zgarishlarga qarshi kurashish",
                "Ijtimoiy tartibga qarshi tura olish"
            ],
            "answer": "Inson va tabiatning uyg‘unligi"
        },
        {
            "q": "Qadimgi Xitoyda Konfutsiylik ta’limotining asosiy g‘oyasi nima?",
            "options": [
                "Jamiyatda tartibni saqlash",
                "Ma’naviyatni rivojlantirish",
                "Insonni tabiat bilan uyg‘unlashtirish",
                "Insonlarning individualizmga erishish"
            ],
            "answer": "Jamiyatda tartibni saqlash"
        },
        {
            "q": "O‘rta asr Sharq falsafasida ilm-fanning rivojlanishida qanday yirik shaxslar eng katta hissani qo‘shdilar?",
            "options": [
                "Ibn Sina va Ibn Rushd",
                "lisher Havoiy, Mirzo Bedil",
                "Ogahiy va Umar Hayyom",
                "Maxtumquli va Muqumiy"
            ],
            "answer": "Ibn Sina va Ibn Rushd"
        },
        {
            "q": "Jadidchlik harakatining namoyondalarini toping?",
            "options": [
                "A.Avloniy, M.Behbudiy, A.Fitrat",
                "Navoiy, Gangaviy",
                "Fuzuliy Ibn Sino",
                "Ogahiy, Muqumiy, Maxtumquli"
            ],
            "answer": "A.Avloniy, M.Behbudiy, A.Fitrat"
        },
        {
            "q": "Abdulla Avloniyning «Navoiyshunoslik» asari qanday muhim falsafiy g‘oya ilgari surilgan?",
            "options": [
                "Yangi jamiyatni qurish uchun ilm va ma’naviyat zarur",
                "Olamning modiy birligi",
                "Ishlab chiqarish jarayonining muhimligi",
                "Olamnining ziddiyatligi"
            ],
            "answer": "Yangi jamiyatni qurish uchun ilm va ma’naviyat zarur"
        },
        {
            "q": "O‘zbekistonda fan rivojlanishiga qanday yondashuv ustivor?",
            "options": [
                "Innovatsiyalar",
                "Markazlashgan davlat tuzish",
                "Falsafiy fikrni o'rganish va o'rgatish",
                "in va ilmni ajratish"
            ],
            "answer": "Innovatsiyalar"
        },
        {
            "q": "Alisher Navoiy «Xamsa» asarida qanday asosiy g‘oyalarni ilgari surgan?",
            "options": [
                "Ilm va tafakkurning jamiyatdagi roli",
                "Mustaqillik va siyosiy kuch",
                "o‘stlik va mehr-oqibat",
                "Yaratilishning ilmiy tahlili"
            ],
            "answer": "Ilm va tafakkurning jamiyatdagi roli"
        },
        {
            "q": "Mustaqillik davrida O‘zbekistonda ilm-fan rivojlanishining asosiy yo‘nalishlari qanday?",
            "options": [
                "Ta’lim va tarbiya",
                "Yangi ilmiy dasturlar va xususiy tadqiqot markazlarini yaratish",
                "Ilmiy xususiy sektorlarga ko‘proq e’tibor qaratish",
                "Ilm-fanni davlat tomonidan boshqarish"
            ],
            "answer": "Ta’lim va tarbiya"
        },
        {
            "q": "Madaniy tarixiy tiplar nazariyasi kim tomonidan fanga kiritilgan?",
            "options": [
                "N. Danilevskiy",
                "Kindiy",
                "uxoriy",
                "G’azzoliy"
            ],
            "answer": "N. Danilevskiy"
        },
        {
            "q": "Qaysi olim jamiyatni gorizantal vertikal yo‘nalishlar va fluktuatsiya tarzida murakkab xarakterda bo‘lgan ijtimoiy madaniy tizimlarning rang-barangligini tan olish nuqtai-nazaridan tavsiflagan?",
            "options": [
                "P.A.Sorokin",
                "O.shpengler",
                "Toynbi",
                "anilevskiy"
            ],
            "answer": "P.A.Sorokin"
        },
        {
            "q": "“Materializmdan inson ruhining tabiatini tushuntiruvchi tamoyil sifatida foydalanish hech qachon mumkin emas”, ushbu so‘zlarning muallifini toping?",
            "options": [
                "Kant",
                "iltey",
                "K. Marks",
                "Xaydegger"
            ],
            "answer": "Kant"
        },
        {
            "q": "Jamiyatni muhim kichik tizimlarini ko‘rsating?",
            "options": [
                "Iqtisodiy, ijtimoiy, siyosiy, ma’naviy",
                "Oilaviy, moddiy, siyosiy",
                "Harbiy, mahalliy, iqtisodiy",
                "Jamoaviy"
            ],
            "answer": "Iqtisodiy, ijtimoiy, siyosiy, ma’naviy"
        },
        {
            "q": "Iqtisodiy kichik tizim bu...?",
            "options": [
                "Ishlab chiqarish faoliyatini va kishilarning bu jarayondagi munosabatlari shakllaring majmuidir",
                "Siyosiy munosabatlar majmui",
                "Harbiy munosabatlar majmui",
                "Moddiy ishlab chikarish va diniy munosabatlar majmui"
            ],
            "answer": "Ishlab chiqarish faoliyatini va kishilarning bu jarayondagi munosabatlari shakllaring majmuidir"
        },
        {
            "q": "Individual ong bu...",
            "options": [
                "Ayrim insonda uning yashash sharoiti va ruhiy xususiyatlari ta’sirida shakllanadigan dunyoning subyektiv obrazi",
                "unyoning obyektiv obrazi",
                "Ommaviy ong turi",
                "Siyosiy ong shakli"
            ],
            "answer": "Ayrim insonda uning yashash sharoiti va ruhiy xususiyatlari ta’sirida shakllanadigan dunyoning subyektiv obrazi"
        },
        {
            "q": "Ijtimoiy ongning darajalarini aniqlang?",
            "options": [
                "Kundalik va nazariy ong",
                "maliy ong",
                "Kundalik va amaliy ong",
                "maliy va nazariy ong"
            ],
            "answer": "Kundalik va nazariy ong"
        },
        {
            "q": "Ijtimoiy ongning yaxlit tasviri qaysi tushunchalar yordamida yaraladi?",
            "options": [
                "Ijtimiy, diniy, ommaviy, individual",
                "Stratalar, kastalar",
                "Mif , rivoyat",
                "Sub'ektiv va ob'ektiv"
            ],
            "answer": "Ijtimiy, diniy, ommaviy, individual"
        },
        {
            "q": "Ijtimoiy borliq va guruhlarni birlashtiruvchi asosiy belgini aniqlang?",
            "options": [
                "Ehtiyojlar va manfaatlarning birligi",
                "iniy ehtiyojlar",
                "Moddiy ehtiyojlar",
                "Ma’naviy va moddiy ehtiyojlar"
            ],
            "answer": "Ehtiyojlar va manfaatlarning birligi"
        },
        {
            "q": "Tarixiy rivojlanish jarayonida vujudga keladigan sinfiy, etnik, hududiy, ijtimoiy - siyosiy va boshqa guruhlar bu qanday guruhlar?",
            "options": [
                "Katta ijtimoiy guruhlar",
                "Kichik ijtimoiy guruhlar",
                "Etnik birliklar",
                "Sinfiy birliklar"
            ],
            "answer": "Katta ijtimoiy guruhlar"
        },
        {
            "q": "Etnik birliklarning ilk shaklini aniqlang?",
            "options": [
                "Urug‘",
                "Oila",
                "Individ",
                "Mahalla"
            ],
            "answer": "Urug‘"
        },
        {
            "q": "Davlat boshqaruv shakliga ko‘ra...",
            "options": [
                "Monarxiya va respublikaga bo‘linadi",
                "Unitar",
                "Federativ",
                "Unitar va federative"
            ],
            "answer": "Monarxiya va respublikaga bo‘linadi"
        },
        {
            "q": "Shaxs jamiyat hayotining barcha jabhalarini qamrab oluvchi o‘ta serqirra hodisa bu...",
            "options": [
                "Madaniyat",
                "Ma’naviyat",
                "Qadriyat",
                "Iqtisodiyot"
            ],
            "answer": "Madaniyat"
        },
        {
            "q": "“Madaniyat” so‘zining ma’nosi qaysi javobda to‘g‘ri keltirilgan?",
            "options": [
                "Arabcha “madina” shahar degani",
                "avlat so‘zidan olingan",
                "Inglizcha “uy” degani",
                "Lotincha “kitob” so‘zidan olingan"
            ],
            "answer": "Arabcha “madina” shahar degani"
        },
        {
            "q": "Kim ko‘nikma va intizom madaniyatini farqlaydi?",
            "options": [
                "Kant",
                "Rumiy",
                "Ibn Ro’sht",
                "Farobiy"
            ],
            "answer": "Kant"
        },
        {
            "q": "Madaniyatning mohiyatini uning tizimi birligi ichki tamoyillaring mushtarakligi bilan belgilanganligini anglatadigan tushuncha bu...",
            "options": [
                "Endogenlik",
                "O‘ziga xoslik",
                "Madaniy meros",
                "Madaniyat uzagi"
            ],
            "answer": "Endogenlik"
        },
        {
            "q": "Bilimning integral shakli sifatida falsafa qanday muayyan ilmiy tasavvurlarni sintez qiladi?",
            "options": [
                "Ijtimoiy hayot, jamiyat  tarixi, inson haqidagi tarix",
                "Geografiya",
                "Fizika",
                "Kimyo"
            ],
            "answer": "Ijtimoiy hayot, jamiyat  tarixi, inson haqidagi tarix"
        }
    ],
    [
        {
            "q": "“Ilohiy shahar haqida” asarning muallifi kim?",
            "options": [
                "A.Avgustin",
                "kvinskiy",
                "Gegel",
                "Nisshe"
            ],
            "answer": "A.Avgustin"
        },
        {
            "q": "Qaysi faylasuf tarixga mutloq ruh, amaliy aql taraqqiyoti sifatida yondashadi?",
            "options": [
                "Gegel",
                "Kant",
                "idro",
                "Kandorse"
            ],
            "answer": "Gegel"
        },
        {
            "q": "Tarix mazmuni tushunchasining eng teran talqinlarini qaysi faylasuf taklif qilgan?",
            "options": [
                "K.Yaspers",
                "Sartr",
                "Nisshe",
                "Kant"
            ],
            "answer": "K.Yaspers"
        },
        {
            "q": "N.Berdyaevga ko‘ra tarix mazmunini qachon aniqlash mumkin?",
            "options": [
                "Tarix tugagandan keyin",
                "Tarixni boshlanishida",
                "Uning davomida",
                "Mahalliy ziddiyatlarda"
            ],
            "answer": "Tarix tugagandan keyin"
        },
        {
            "q": "Kont jamiyatning muhim institutlari sifatida nimalarni ko‘rsatadi?",
            "options": [
                "Oila, din, davlat",
                "Mahalla, huquq",
                "Oila, huquq",
                "Mahalla, din, davlat"
            ],
            "answer": "Oila, din, davlat"
        },
        {
            "q": "Jamiyatning iqtisodiy asosini nima tashkil etadi?",
            "options": [
                "Moddiy ishlab chiqarish munosabatlari",
                "Ma’naviy bazis",
                "Sinfiy munosabatlar",
                "Mehnat munosabatlari"
            ],
            "answer": "Moddiy ishlab chiqarish munosabatlari"
        },
        {
            "q": "Jamiyatning iqtisodiy asosida shakllangan va “alohida o‘ziga xos xususiyat”ga ega bo‘lgan tipi bu….?",
            "options": [
                "Ijtimoiy – iqtisodiy formatsiya",
                "Mehnat formatsiyasi",
                "Kompleks - sistemali formatsiya",
                "Sivilizatsion formatsiya"
            ],
            "answer": "Ijtimoiy – iqtisodiy formatsiya"
        },
        {
            "q": "Quyidagi faylasuflardan qaysi biri jamiyatni tushunishni qadriyatlar tizimi bilan bog‘lagan?",
            "options": [
                "E. Dyurkgeym",
                "Spenser",
                "Marks",
                "Engels"
            ],
            "answer": "E. Dyurkgeym"
        },
        {
            "q": "Dyurkgeym ijtimoiy tuzilma dalillarining qaysi birlarini ko‘rsatib o‘tadi?",
            "options": [
                "Moddiy va ma’naviy qadriyatlar",
                "Madaniy meros",
                "Ijtimoiy ong",
                "iniy ong"
            ],
            "answer": "Moddiy va ma’naviy qadriyatlar"
        },
        {
            "q": "Dyurkgeym ijtimoiy evolyusiyani nima bilan bog‘laydi?",
            "options": [
                "Mehnat",
                "Mulk",
                "Oila",
                "Tabiiy tanlanish"
            ],
            "answer": "Mehnat"
        },
        {
            "q": "“Protestantcha axloq va kapitalizm ruhi” asarining muallifi kim?",
            "options": [
                "M. Veber",
                "Rikkert",
                "yurkgeym",
                "Spenser"
            ],
            "answer": "M. Veber"
        },
        {
            "q": "Ijtimoiy harakat va uning motivatsiyasi tushunchasini kim ta’riflab beradi?",
            "options": [
                "Veber",
                "Spenser",
                "Kant",
                "Gegel"
            ],
            "answer": "Veber"
        },
        {
            "q": "Veber ijtimoiy harakatning qaysi turlarini farqlaydi?",
            "options": [
                "Oqilona maqsad, oqilona qadriyat",
                "eqaror taraqqiyot",
                "narxizm",
                "n’anaviy"
            ],
            "answer": "Oqilona maqsad, oqilona qadriyat"
        },
        {
            "q": "Tarix falsafasining funksiyalarini belgilang?",
            "options": [
                "Dunyoqarash, nazariy metodologik, prognostik",
                "unyoqarash, pedogogik, didaktik",
                "Eksperimental, prognostik",
                "Insonparvarlik, ontologik, gnoseologik"
            ],
            "answer": "Dunyoqarash, nazariy metodologik, prognostik"
        },
        {
            "q": "O‘rta asrlar xristian falsafiy tafakkurining namoyondalarini ko‘rsating?",
            "options": [
                "A. Avgustin, F. Akvinskiy",
                "Kant, Gegel",
                "Veber, Makiavelli",
                "Spenser, Xaydegger"
            ],
            "answer": "A. Avgustin, F. Akvinskiy"
        },
        {
            "q": "Yangi davr mutafakkirlari qarashlarining shakllanishida katta rol o‘ynagan aspektni aniqlang?",
            "options": [
                "Tabiiy fanlar",
                "in",
                "Falsafa",
                "dabiyot"
            ],
            "answer": "Tabiiy fanlar"
        },
        {
            "q": "Antik davr faylasuflari chiziqli ta’rifning qanday yo‘nalishlarini farqlaganlar?",
            "options": [
                "Progressiv",
                "Xaotik",
                "Regressiv",
                "Emerjent"
            ],
            "answer": "Progressiv"
        },
        {
            "q": "Inson so‘zining to‘liq ma’nosida inson bo‘lgan xoldagina o‘ylaydi va u faqat o‘ylayotgan paytdagina to‘la qonli ison bo‘ladi». Ushbu so‘zlar kimning qalamiga mansub?",
            "options": [
                "Shiller",
                "Kant",
                "Gegel",
                "T. Gobbs"
            ],
            "answer": "Shiller"
        },
        {
            "q": "Qadriyatlar falsafasining maqsadi?",
            "options": [
                "Aksiologik dunyoqarashni shaklllantirish",
                "Olamning kelib chiqishi haqida umumiy tasavvur uyg‘otish",
                "Xalqlarning an’analarini o‘rgatish",
                "San’at va madaniyatning tarixini o‘rgatish"
            ],
            "answer": "Aksiologik dunyoqarashni shaklllantirish"
        },
        {
            "q": "Aksiologiyaning vazifasi - ...",
            "options": [
                "Aksiologik madaniyatni yuksaltirish va aksiologik ko‘nikmalarni hosil qilish",
                "Yangi qadriyatlarni ishlab chiqish",
                "Ommaviy madaniyatga qarshi ko’rashish",
                "unyo xalqlarining urf-odatlari bilan tanishtirish"
            ],
            "answer": "Aksiologik madaniyatni yuksaltirish va aksiologik ko‘nikmalarni hosil qilish"
        },
        {
            "q": "Qadriyatlar falsafasining kommunikativ funksiyasi - ...",
            "options": [
                "Qadriyatlar shakllari o‘rtasidagi aloqalarni kuchaytirish",
                "Har bir insonning hayotdagi maqsadi va ijtimoiy o‘rnini topishga ta’sir ko‘rsatish",
                "Insoniyatning hozirgi kuni va kelajagi uchun zarur bo‘lgan qadriyatlarni targ‘ib etish",
                "Inson hayotini oliy qadriyat darajasiga ko‘tarish"
            ],
            "answer": "Qadriyatlar shakllari o‘rtasidagi aloqalarni kuchaytirish"
        },
        {
            "q": "Qadriyatlar falsafasining evristik funksiyasi - ...",
            "options": [
                "Insoniyatning hozirgi kuni va kelajagi uchun zarur bo‘lgan qadriyatlarni targ‘ib etish",
                "Qadriyatlar shakllari o‘rtasidagi aloqalarni kuchaytirish",
                "Har bir insonning hayotdagi maqsadi va ijtimoiy o‘rnini topishga ta’sir ko‘rsatish",
                "Inson hayotini oliy qadriyat darajasiga ko‘tarish"
            ],
            "answer": "Insoniyatning hozirgi kuni va kelajagi uchun zarur bo‘lgan qadriyatlarni targ‘ib etish"
        },
        {
            "q": "Qadriyatlar falsafasining gumanistik funksiyasi - ...",
            "options": [
                "Inson hayotini oliy qadriyat darajasiga ko‘tarish",
                "Insoniyatning hozirgi kuni va kelajagi uchun zarur bo‘lgan qadriyatlarni targ‘ib etish",
                "Har bir insonning hayotdagi maqsadi va ijtimoiy o‘rnini topishga ta’sir ko‘rsatish",
                "Qadriyatlar shakllari o‘rtasidagi aloqalarni kuchaytirish"
            ],
            "answer": "Inson hayotini oliy qadriyat darajasiga ko‘tarish"
        },
        {
            "q": "Qadriyatlar falsafasining tarbiyaviy-madaniy funksiyasi - ...",
            "options": [
                "Har bir insonning hayotdagi maqsadi va ijtimoiy o‘rnini topishga ta’sir ko‘rsatish",
                "Inson hayotini oliy qadriyat darajasiga ko‘tarish",
                "Insoniyatning hozirgi kuni va kelajagi uchun zarur bo‘lgan qadriyatlarni targ‘ib etish",
                "Qadriyatlar shakllari o‘rtasidagi aloqalarni kuchaytirish"
            ],
            "answer": "Har bir insonning hayotdagi maqsadi va ijtimoiy o‘rnini topishga ta’sir ko‘rsatish"
        },
        {
            "q": "Qadriyatlar falsafasining gumanistik funksiyasi - ...",
            "options": [
                "Insoniyatning hozirgi kuni va kelajagi uchun zarur bo‘lgan qadriyatlarni targ‘ib etish",
                "Inson hayotini oliy qadriyat darajasiga ko‘tarish",
                "Har bir insonning hayotdagi maqsadi va ijtimoiy o‘rnini topishga ta’sir ko‘rsatish",
                "Qadriyatlar shakllari o‘rtasidagi aloqalarni kuchaytirish"
            ],
            "answer": "Insoniyatning hozirgi kuni va kelajagi uchun zarur bo‘lgan qadriyatlarni targ‘ib etish"
        },
        {
            "q": "Qadriyatlar falsafasining tarbiyaviy-madaniy funksiyasi - ...",
            "options": [
                "Insoniyatning hozirgi kuni va kelajagi uchun zarur bo‘lgan qadriyatlarni targ‘ib etish",
                "Inson hayotini oliy qadriyat darajasiga ko‘tarish",
                "Har bir insonning hayotdagi maqsadi va ijtimoiy o‘rnini topishga ta’sir ko‘rsatish",
                "Qadriyatlar shakllari o‘rtasidagi aloqalarni kuchaytirish"
            ],
            "answer": "Insoniyatning hozirgi kuni va kelajagi uchun zarur bo‘lgan qadriyatlarni targ‘ib etish"
        },
        {
            "q": "Qaysi kitobda islomgacha bo‘lgan ta’limotlar va madaniy hayot yoritib berilgan?",
            "options": [
                "Avesto",
                "Ramayana",
                "aotsizm",
                "Hind hisobi haqida"
            ],
            "answer": "Avesto"
        },
        {
            "q": "Kimning asarlari Qur’ondan keyingi muqaddas kitob sifatida tan olinadi?",
            "options": [
                "Al Buxoriy",
                "Zamaxshariy",
                "Termiziy",
                "Moturidiy."
            ],
            "answer": "Al Buxoriy"
        },
        {
            "q": "Farobiyning qaysi asarida qadriyatlarga masalasiga keng e’tibor berilgan?",
            "options": [
                "Madina al Fozila",
                "Musiqa kitobi",
                "Riyoziyot",
                "Metafizik"
            ],
            "answer": "Madina al Fozila"
        },
        {
            "q": "Qaysi olimlar qadriyatlar o‘ziga xos ideal ahamiyat sifatida zohir bo‘ladi, obektdan ham subektdan ham alohida mustaqil olamni vujudga keltiradi, bu olam va makon qonunlaridan ustun turadi degan fikrni bildirganlar?",
            "options": [
                "Vindelband va Gartman",
                "Rikkert va sheller",
                "Kant va sheller",
                "Vindelband va Rikkert"
            ],
            "answer": "Vindelband va Gartman"
        },
        {
            "q": "Kim G‘arb aksiologiyasi va undagi \"O‘zgarmas axloqiy qadriyatlar\" nazariyasi asoschisi hisoblanadi?",
            "options": [
                "M.Sheler",
                "E.Kant",
                "Gartman",
                "Rikkert"
            ],
            "answer": "M.Sheler"
        },
        {
            "q": "Nimalar milliy qadriyatlar negizini tashkil qiladi?",
            "options": [
                "Urf-odat, rasm-rusm, bayramu- sayllar.",
                "Musiqa, lapar, yalla.",
                "Insonning qandayligi, insonning yurish-turishi.",
                "Kino, teatr, san’at."
            ],
            "answer": "Urf-odat, rasm-rusm, bayramu- sayllar."
        },
        {
            "q": "Milliy qadriyat bu ...",
            "options": [
                "Har bir millatning o‘ziga xos xususiyatlari, xossalari, belgilari, alomatlarini ifodalovchi falsafiy tushuncha bo‘lib, o‘sha millat bosib o‘tgan ijtimoiy taraqqiyot jarayoni.",
                "Kinodagi o‘tmish.",
                "Insonni qadirlaydi,ulug‘laydi,ko‘kka ko‘taradi.",
                "Vatanga muhabbat."
            ],
            "answer": "Har bir millatning o‘ziga xos xususiyatlari, xossalari, belgilari, alomatlarini ifodalovchi falsafiy tushuncha bo‘lib, o‘sha millat bosib o‘tgan ijtimoiy taraqqiyot jarayoni."
        },
        {
            "q": "Millatning mustaqil harakat qilish qobiliyatini anglatuvchi tushuncha bu…..?",
            "options": [
                "Demokratiya",
                "Shovinizm",
                "Sofizm",
                "Radikalizm"
            ],
            "answer": "Demokratiya"
        },
        {
            "q": "Qaysi tushuncha “ijtimoiy-siyosiy qadriyat shakllaridan biri bo‘lib, ijtimoiy tizimning normal faoliyat ko‘rsatish tizimi” hisoblanadi?",
            "options": [
                "Barqarorlik",
                "eqarorlik",
                "Tenglik",
                "Tinchlik"
            ],
            "answer": "Barqarorlik"
        },
        {
            "q": "Qaysi tushuncha “jamiyatda demokratiyaning mavjudligini, insonning himoyalanganligi, ularning ish bilan taminlanganligini” ifodalaydi?",
            "options": [
                "Tenglik",
                "arqarorlik",
                "Ijtimoiy adolat",
                "ag‘rikenglik"
            ],
            "answer": "Tenglik"
        },
        {
            "q": "Har bir kishining o‘z istagi bo‘yicha ish tutishini anglatuvchi tushuncha bu ... ?",
            "options": [
                "Erkinlik",
                "Tenglik",
                "dolat",
                "arqarorlik"
            ],
            "answer": "Erkinlik"
        },
        {
            "q": "O‘zgalarga nisbatan mehr - muruvvatli, g‘amxo‘r, sahiy, keng fe’lli bo‘lgan shunday ma’naviy fazilatlarga ega kishilarni ifodalovchi tushuncha ... ?",
            "options": [
                "Bag‘rikenglik",
                "urch",
                "dolat",
                "va B"
            ],
            "answer": "Bag‘rikenglik"
        },
        {
            "q": "Adolat va vijdon amri bilan faoliyat yuritish tuyg‘usi bu ... ?",
            "options": [
                "Insof",
                "Vijdon",
                "Tenglik",
                "Oriyat"
            ],
            "answer": "Insof"
        },
        {
            "q": "Qaysi tushuncha insonni o‘ziga nomunosib yoki ep ko‘rilmagan ishdan, narsadan hijolat tortishini anglatadi?",
            "options": [
                "Or-nomus",
                "Oriyat",
                "ndisha",
                "Insof"
            ],
            "answer": "Or-nomus"
        },
        {
            "q": "Qadrlash me’yorlari qaysi tushunchalar bilan uzviy bog‘liq?",
            "options": [
                "Qadriyat mo‘ljallari va qadriyat mezonlari",
                "Qadriyatlarni qadrlash va qadrsizlanish",
                "ksiologik ong va dunyoqarash",
                "ag‘rikenglik va vijdon erkinligi"
            ],
            "answer": "Qadriyat mo‘ljallari va qadriyat mezonlari"
        },
        {
            "q": "Qadrlash me’yorlarining buzilishi nimaning susayishiga olib keladi?",
            "options": [
                "Ma’naviyat talablarining",
                "Nutq",
                "Sezgi",
                "Idrok"
            ],
            "answer": "Ma’naviyat talablarining"
        },
        {
            "q": "Soddalikning - laqmalikka yoki bachkanalikka aylanib ketishi nimaning buzilishi hisoblanadi?",
            "options": [
                "Shaxsiy qadriyatlar me’yori",
                "Madaniyatga",
                "Insoniylik",
                "Jamiyat"
            ],
            "answer": "Shaxsiy qadriyatlar me’yori"
        },
        {
            "q": "Qadriyatning qadrsizlanishi qanday jarayon?",
            "options": [
                "Aksiologik",
                "Ontologik",
                "Fizik",
                "Siyosiy"
            ],
            "answer": "Aksiologik"
        },
        {
            "q": "Qadrsizlanishning shaxsiy darajadan namoyon bo‘lishi qanday tarzda kechadi?",
            "options": [
                "Individual",
                "Jamoaviy",
                "Oilaviy",
                "G‘ayri tabiiy"
            ],
            "answer": "Individual"
        },
        {
            "q": "Qanday qadrsizlanish butun jamiyatda, yoki uni tuzulishida muhim ahamiyat kasb etgan qismlarida namoyon bo‘ladi?",
            "options": [
                "Umumijtimoiy darajadagi",
                "avlat darajasidagi",
                "Mintaqaviy darajadagi",
                "Siyosiy darajadagi"
            ],
            "answer": "Umumijtimoiy darajadagi"
        },
        {
            "q": "Aksiologik ong – bu … ?",
            "options": [
                "Qadriyatlarni anglash jarayonida vujudga keladigan qadrlash tuyg‘usi, aksiologik tushuncha, xulosalarni ifodalaydigan va aks ettiradigan ijtimoiy ong shakli.",
                "Qadriyatlarni anglash jarayonidagi aksiologik tushuncha, xulosalarni ifodalaydi ong shakli.",
                "Xalqning, millatning o‘z erki va huquqini qo‘ldan chiqarishi, tili, dini, e’tiqodi, urf-odatlari,  milliy g‘ururidan mahrum bo‘lish jarayonlar va hatti-harakatlar majmuini ham anglatadi.",
                "ksiologik ong iborasi ko‘pchilikka notanish, uning mazmuni to‘g‘risida fikr mulohazalar nihoyatda kam."
            ],
            "answer": "Qadriyatlarni anglash jarayonida vujudga keladigan qadrlash tuyg‘usi, aksiologik tushuncha, xulosalarni ifodalaydigan va aks ettiradigan ijtimoiy ong shakli."
        },
        {
            "q": "Qadriyatlarga tahdid -  nimalar majmuini anglatadi?",
            "options": [
                "Xalqning, millatning o‘z erki va huquqini qo‘ldan chiqarishi, tili, dini, e’tiqodi, urf-odatlari, milliy g‘ururidan mahrum bo‘lishi, o‘zligini anglashga to‘sqinlik qilayotgan jarayonlar va hatti-harakatlar majmuini ham anglatadi.",
                "Xalqning, millatning o‘z erki va huquqini qo‘ldan chiqarishi",
                "Hozirgi davrda dunyoning ayrim hududlarida ana shunday harakatlar natijasida katta ma’naviy yo‘qotishlarni.",
                "Milliy qadriyatlarga tajovuz sababli millat o‘z mustaqil taraqqiyot yo‘lidan adashishini."
            ],
            "answer": "Xalqning, millatning o‘z erki va huquqini qo‘ldan chiqarishi, tili, dini, e’tiqodi, urf-odatlari, milliy g‘ururidan mahrum bo‘lishi, o‘zligini anglashga to‘sqinlik qilayotgan jarayonlar va hatti-harakatlar majmuini ham anglatadi."
        },
        {
            "q": "Tushunchada nima aks etadi?",
            "options": [
                "Predmetning umumiy va muhim belgilari",
                "Predmetning faqat umumiy belgilari",
                "Predmetning faqat individual belgilari",
                "Predmetning barcha belgilari"
            ],
            "answer": "Predmetning umumiy va muhim belgilari"
        },
        {
            "q": "Tushunchaning mazmunini nimalar tashkil etadi?",
            "options": [
                "Fikr qilinayotgan predmetning muhim belgilari to‘g‘risidagi axborot tashkil etadi.",
                "Fikr qilinayotgan predmetning muhim va nomuhim belgilari haqidagi axborotlar",
                "Fikr qilinayotgan predmetning mavjud belgilari haqidagi axborotlar",
                "Fikr qilinayotgan predmetning bevosita namoyon bo‘lgan belgilari haqidagi axborotlar"
            ],
            "answer": "Fikr qilinayotgan predmetning muhim belgilari to‘g‘risidagi axborot tashkil etadi."
        }
    ],
    [
        {
            "q": "Tushunchaning hajmida nima ifoda qilinadi?",
            "options": [
                "Tushunchada aks etgan predmetlar yig‘indisi",
                "Miqdor jihatdan aniq bo‘lgan predmetlar",
                "Tushunchada aks etgan predmetlar mohiyati",
                "Predmetning egallab turgan joyi"
            ],
            "answer": "Tushunchada aks etgan predmetlar yig‘indisi"
        },
        {
            "q": "Quyidagilarning qaysi biri mavhum tushuncha?",
            "options": [
                "Go‘zallik",
                "Qit’a",
                "dabiy janr",
                "Quyosh sistemasi"
            ],
            "answer": "Go‘zallik"
        },
        {
            "q": "«Inson–mashina» asarining muallifi kim?",
            "options": [
                "J.Lametri",
                "j.Berkli",
                "j.Bruno",
                "Spinoza"
            ],
            "answer": "J.Lametri"
        },
        {
            "q": "Insonning paydo bo‘lishi haqidagi evolyusion konsepsiya asoschisi kim?",
            "options": [
                "Ch.Darvin",
                "K.Linney",
                "h.Pirs",
                "Eynshteyn"
            ],
            "answer": "Ch.Darvin"
        },
        {
            "q": "«Antropologik materializm» asoschisi kim?",
            "options": [
                "L.Feyerbax",
                "I.Kant",
                "V.Gegel",
                "F.Nisshe"
            ],
            "answer": "L.Feyerbax"
        },
        {
            "q": "«Odamlar o‘zlarining xos xususiyatlariga va tabiiy ehtiyojlariga ko‘ra jamiyat tuzadilar. Ularning harakat va fe’llarini dastavval borabora odatlarga aylanadigan tabiiy qobiliyatlar belgilaydi». Mazkur fikr muallifi kim?",
            "options": [
                "Forobiy",
                "eruniy",
                "Navoiy",
                "Ibn Sino"
            ],
            "answer": "Forobiy"
        },
        {
            "q": "Quyidagi fikrlardan qaysi biri antik davrda Delfidagi Apollon ibodatxonasiga kiraverishda ustunga o‘yib yozilgan?",
            "options": [
                "«O‘z-o‘zingni anglash»",
                "«Boshqalarni biluvchi – oqil, o‘zini biluvchi – donishmanddir»",
                "«Kimki o‘zini bilsa, u o‘z Allohni ham bilgaydir»",
                "«Inson barcha narsalar mezonidir»"
            ],
            "answer": "«O‘z-o‘zingni anglash»"
        },
        {
            "q": "«Inson barcha narsalar me’yori» iborasining muallifi kim?",
            "options": [
                "Protagor",
                "flotun",
                "Lao szi",
                "Suqrot"
            ],
            "answer": "Protagor"
        },
        {
            "q": "Jahon fanida birinchi marta inson va tabiat, odam va olam o‘rtasidagi munosabatlarni dunyoviy fan nuqtai nazaridan o‘rgangan Sharq mutafakkiri kim?",
            "options": [
                "Beruniy",
                "Ibn Sino",
                "Forobiy",
                "Navoiy"
            ],
            "answer": "Beruniy"
        },
        {
            "q": "Qadimgi Hind falsafasiga qanday falsafiy qarash xos?",
            "options": [
                "Antropotsentrizm",
                "Teotsentrizm",
                "Okkultizm",
                "Ssientrizm"
            ],
            "answer": "Antropotsentrizm"
        },
        {
            "q": "Insonning ichki dunyosini birinchi o‘ringa qo‘yish qaysi falsafiy konsepsiyaga xos?",
            "options": [
                "Antropotsentrizm",
                "Teotsentrizm",
                "Kosmotsentrizm",
                "Ssientrizm"
            ],
            "answer": "Antropotsentrizm"
        },
        {
            "q": "XIX asr oxiri – XX asr boshlarida keng tarqalgan «inson irsiyatining oliy sifati»ga qanday vositalar bilan va qay tarzda erishish mumkinligi haqidagi ta’limot nima deyiladi?",
            "options": [
                "Yevgenika",
                "Genetika",
                "Transplatatsiya",
                "Mutatsiya"
            ],
            "answer": "Yevgenika"
        },
        {
            "q": "Insonning alohida borliq manbai sifatida kelib chiqishi, tadrijiy rivojlanishi va mavjudligining o‘ziga xos xususiyatlariga doir falsafiy qarashlarni aks ettiruvchi soha?",
            "options": [
                "Falsafiy antropologiya",
                "Teologiya",
                "Praksiologiya",
                "iositsiologiya"
            ],
            "answer": "Falsafiy antropologiya"
        },
        {
            "q": "Miqdoriy ifodalash, sezish yoki kuzatish mumkin bo‘lmagan, massasi ham, energiyasi ham yo‘q, moddiy obyektlar kabi muayyan shaklshamoyilga ham ega bo‘lmagan falsafiy kategoriya, bu –",
            "options": [
                "Ong",
                "Sezgi",
                "Harakat",
                "Mohiyat"
            ],
            "answer": "Ong"
        },
        {
            "q": "Qaysi olim olovni oqil va olijanob, suvni – tuban asos deb hisoblagan?",
            "options": [
                "Geraklit",
                "naksimen",
                "naksagor",
                "Zenon"
            ],
            "answer": "Geraklit"
        },
        {
            "q": "Ong va ongsizlik dialektikasini asoslagan olim?",
            "options": [
                "Z.Freyd",
                "F.Kapra",
                "E.Fromm",
                "N.Vernadskiy"
            ],
            "answer": "Z.Freyd"
        },
        {
            "q": "Ijtimoiy ong nima?",
            "options": [
                "Inson uni qurshagan boshqa odamlar tomonidan ijtimoiy idrok etilishi",
                "Insonning tavsiflanishi va baholanishini",
                "Ijtimoiy hodisa",
                "archa eavoblar to‘g‘ri"
            ],
            "answer": "Inson uni qurshagan boshqa odamlar tomonidan ijtimoiy idrok etilishi"
        },
        {
            "q": "Ushbu fikr muallifni toping: “Inson o‘z joni faoliyatini boshqara oladi, shu bois dunyoni tushunish yo‘li o‘z-o‘zini bilish orqali o‘tadi”",
            "options": [
                "Platon (Aflotun)",
                "Suqrot",
                "Fales",
                "emokrit"
            ],
            "answer": "Platon (Aflotun)"
        },
        {
            "q": "Kim birinchi bo‘lib jon haqidagi yaxlit ta’limotni yaratdi, odamlar jonining qandayligiga qarab ularni har xil tiplarga ajratdi?",
            "options": [
                "Platon (Aflotun)",
                "Suqrot",
                "Fales",
                "emokrit"
            ],
            "answer": "Platon (Aflotun)"
        },
        {
            "q": "Qadriyatlar to‘g‘risidagi ta’limot qanday nomlanadi?",
            "options": [
                "Aksiologiya",
                "Teologiya",
                "Praktologiya",
                "Evtanaziya"
            ],
            "answer": "Aksiologiya"
        },
        {
            "q": "Axloq ilmining asosiy vazifasi nima?",
            "options": [
                "Insonda yuksak axloqiy fazilatlarini shakllantirish",
                "Mantiqsiz fikrlash madaniyatini shakllantirish",
                "iniy ta’lim berish",
                "Mifologik bilimni shakllantirish"
            ],
            "answer": "Insonda yuksak axloqiy fazilatlarini shakllantirish"
        },
        {
            "q": "Kasbiy odob nima?",
            "options": [
                "Axloqiy tamoyil va me’yorlarning kasb-hunar sohasida konkret namoyon bo‘lishi.",
                "Loqaydlik",
                "Oqibatsizlik",
                "Muruvvat"
            ],
            "answer": "Axloqiy tamoyil va me’yorlarning kasb-hunar sohasida konkret namoyon bo‘lishi."
        },
        {
            "q": "“Imidj” so‘zi nimani anglatadi?",
            "options": [
                "Obraz, timsol",
                "Takabburlik",
                "Tashqi ko‘rinish",
                "Kamtarlik"
            ],
            "answer": "Obraz, timsol"
        },
        {
            "q": "O‘z individual ehtiyojlarini hamma narsadan yuqori qo‘yadigan axloqiy illat?",
            "options": [
                "Xudbinlik",
                "Xushfe’llilik",
                "Muhabbat",
                "Millatchilik"
            ],
            "answer": "Xudbinlik"
        },
        {
            "q": "Fuqarolik jamiyatining asosiy omili?",
            "options": [
                "Erkinlik",
                "Ziddiyat",
                "Murosasizlik",
                "Jabr ko’rsatish"
            ],
            "answer": "Erkinlik"
        },
        {
            "q": "Etikaning global muammosi?",
            "options": [
                "Axloqiy muhit – etosferaning nazariy asoslarini yaratish",
                "Etika darsligini zamonaviy pedagogik texnologiya asosida olib borish",
                "Jahonda tinchlik uchun kurashish",
                "MT faoliyatining samarali bo‘lishini ta’minlash"
            ],
            "answer": "Axloqiy muhit – etosferaning nazariy asoslarini yaratish"
        },
        {
            "q": "Evtanaziya bu nima?",
            "options": [
                "Og’riqsiz  o‘lim.",
                "Xayotdan to‘yganlik",
                "Xayotga muhabbat.",
                "Qaxramonona o‘lim"
            ],
            "answer": "Og’riqsiz  o‘lim."
        },
        {
            "q": "Etikani birinchi bo‘lib ilmiy muomalaga kiritgan faylasufni aniqlang?",
            "options": [
                "Aristotel",
                "Pifagor",
                "Platon",
                "naksimen"
            ],
            "answer": "Aristotel"
        },
        {
            "q": "Estetikaning juft mezoniy tushunchalari (kategoriyalari) qaysi javobda to‘g‘ri ko‘rsatilgan?",
            "options": [
                "Go‘zallik va xunuklik",
                "hiroylilik va badbasharalik",
                "Ulug‘lik va pastkashlik",
                "Sabab va oqibat"
            ],
            "answer": "Go‘zallik va xunuklik"
        },
        {
            "q": "Ulug‘vorlik badiiy adabiyotda qanday ko‘rinishda namoyon bo‘ladi?",
            "options": [
                "Qahramonlik",
                "аchkаnаlik",
                "Yovuzlik",
                "Ikkiyuzlаmаchilik"
            ],
            "answer": "Qahramonlik"
        },
        {
            "q": "San’atning kelib chiqishiga qaysi omil asos bo‘lgan?",
            "options": [
                "O‘yin",
                "in",
                "E’tiqod",
                "Iqtisodiy ehtiyoj"
            ],
            "answer": "O‘yin"
        },
        {
            "q": "Qaysi estetik kategoriya insonda kuchli nafratlanish tuyg‘ularini hosil qiladi?",
            "options": [
                "Tubanlik",
                "Ulugvorlik",
                "Fojiaviylik",
                "Kulgulilik"
            ],
            "answer": "Tubanlik"
        },
        {
            "q": "San’atning asosiy tamoyillari qaysi javobda to‘g‘ri ko‘rsatilgan?",
            "options": [
                "Originallik, haqqoniylik, xalqchillik",
                "Yangiligi, majoziyligi, ijtimoiyligi",
                "Tarbiyaviyligi, ijtimoiy aloqachiligi",
                "rxaik, an’anaviy, zamonaviy"
            ],
            "answer": "Originallik, haqqoniylik, xalqchillik"
        },
        {
            "q": "Insoniylashtirish, forig‘lantirish, bilimli, ma’rifatli qilish, tarbiyaviylik, ijtimoiy aloqachilik, xuzurbaxshlik san’atning qaysi jihatiga tegishli?",
            "options": [
                "San’atning asosiy vazifalariga",
                "San’atning xususiyatlariga",
                "San’atning tushunchalariga",
                "San’atning tamoyillariga"
            ],
            "answer": "San’atning asosiy vazifalariga"
        },
        {
            "q": "Estetik faoliyat turi bu….?",
            "options": [
                "Dizayn",
                "Ta’lim",
                "Targ‘ibot",
                "Tarbiya"
            ],
            "answer": "Dizayn"
        },
        {
            "q": "Voqelik hamda san’atkor fikri va his–tuyg‘ularini in’ikos ettirishning faqat san’atgagina xos bo‘lgan shakli bu -?",
            "options": [
                "Badiiy qiyofa (obraz)",
                "Mazmun va g‘oya",
                "Ramz va ideal",
                "Shakl va mazmun"
            ],
            "answer": "Badiiy qiyofa (obraz)"
        },
        {
            "q": "Estetika qanday fanlar tarkibiga kiruvchi soha hisoblanadi?",
            "options": [
                "Falsafiy fanlar",
                "Eksperemental fanlar",
                "Tabiiy fanlar",
                "niq fanlar"
            ],
            "answer": "Falsafiy fanlar"
        },
        {
            "q": "“Estetika” atamasini birinchi bo‘lib ilmiy muomalaga kiritgan faylasuf?",
            "options": [
                "Baumgarten",
                "Hegel",
                "rastu",
                "Kant"
            ],
            "answer": "Baumgarten"
        },
        {
            "q": "Estetika kategoriyalaridan qaysi biri odamning azob-uqubatlar chekishi, o‘limi va uning hayoti uchun muhim qadriyatlarning barham topishiga olib keladigan keskin hayotiy ziddiyatlarni aks ettiradi?",
            "options": [
                "Fojiaviylik",
                "Xunuklik",
                "Kulgulilik",
                "Qahramonlik"
            ],
            "answer": "Fojiaviylik"
        },
        {
            "q": "Go’zallikka qarama-qarshi estetik tushunchani toping?",
            "options": [
                "Xunuklik",
                "Ulug’vorlik",
                "Tubanlik",
                "Go‘zal emaslik"
            ],
            "answer": "Xunuklik"
        },
        {
            "q": "Rim klubining asoschisi kim?",
            "options": [
                "Aurelli Pechchei",
                "ell",
                "Turen",
                "O.Toffler"
            ],
            "answer": "Aurelli Pechchei"
        },
        {
            "q": "yilda kim tinchlik va qurolsizlanish uchun kurash tashabbusini ilgari surgan?",
            "options": [
                "Rassel",
                "M.Born",
                "L.Infeld",
                "F.Jolio Kyuri"
            ],
            "answer": "Rassel"
        },
        {
            "q": "Rassel barcha urushlarga chek qo‘yuvchi jahon hukumati deb atagan tashkilotni belgilang?",
            "options": [
                "BMT",
                "OPEK",
                "Shanxay",
                "Rim klubi"
            ],
            "answer": "BMT"
        },
        {
            "q": "Fаnning jаmiyatdаgi rоlini mutlаqlаshtiruvchi yondаshuv?",
            "options": [
                "Ssiеntizm",
                "Pеssеmizm",
                "Ekоpеssimizm",
                "Tехnоpеssimizm"
            ],
            "answer": "Ssiеntizm"
        },
        {
            "q": "Tinchlik vа qurоlsizlаnish uchun kurаsh g’оyasining muаllifi kim?",
            "options": [
                "B.Rаssеl",
                "Indirа Gаndi",
                "Оbаmа",
                "jоrj Bush"
            ],
            "answer": "B.Rаssеl"
        },
        {
            "q": "О.Kоnt fikrichа jаmiyatning muhim institutlаri bu.....",
            "options": [
                "Оilа, din dаvlаt",
                "Tаriх, huquq",
                "Mаktаb , bоg’chа",
                "Guzаr, kаfе"
            ],
            "answer": "Оilа, din dаvlаt"
        },
        {
            "q": "Dyurkgеym ijtimоiy evоlyusiyani nima bilаn bоg’lаgаn?",
            "options": [
                "Mеhnаt",
                "dоvаt",
                "Аfsus",
                "Rаqоbаt"
            ],
            "answer": "Mеhnаt"
        },
        {
            "q": "Qаdimgi Misr mifоlоgiyasi qаndаy хususiyatgа egа?",
            "options": [
                "Qаdimgi Misr mifоlоgiyasi mоnistik yeki plyurаlistik хususiyatgа egа",
                "Qаdimgi Misr mifоlоgiyasi duаlistik хususiyatgа egа",
                "Qаdimgi Misr miflоgiyasi ilmiy хususiyatgа egа",
                "Qаdimgi Misr mifоlоgiyasi diniy хususiyatgа egа"
            ],
            "answer": "Qаdimgi Misr mifоlоgiyasi mоnistik yeki plyurаlistik хususiyatgа egа"
        },
        {
            "q": "Qаdimgi Hindistоn mifilоgiyasining аsоsiy mаnbаsi nimа?",
            "options": [
                "Qаdimgi Hindistоn mifilоgiyasining аsоsiy mаnbаsi Rigvеdаlаr",
                "Qаdimgi Hindistоn mifоlоgiyasining аsоsiy mаnbаsi Mаrхumlаr kitоbi",
                "Qаdimgi Hindistоn mifоlоgiyasining аsоsiy mаnbаsi Pоmаndrlаr  kitоbi",
                "Qаdimgi Hindistоn mifоlоgiyasining аsоsiy mаnbаsi Zumrаd lаvха kitоbi"
            ],
            "answer": "Qаdimgi Hindistоn mifilоgiyasining аsоsiy mаnbаsi Rigvеdаlаr"
        },
        {
            "q": "Qаdimgi Misr mifоlоgiyasidа хudо qаndаy tаsаvvur qilingаn?",
            "options": [
                "Qаdimgi  Misr mifоlоgiyasidа хudо zооmоrfizmgа аsоslаngаn",
                "Qаdimgi Misr mifоlоgiyasidа хudо аntrоpоmоrfizmgа аsоslаngаn",
                "Qаdimgi Misr mifоlоgiyasidа хudо pаntеizmgа аsоslаngаn",
                "Qаdimgi Misr mifоlоgiyasidа хudо gillоzоizmgа аsоslаngаn"
            ],
            "answer": "Qаdimgi  Misr mifоlоgiyasidа хudо zооmоrfizmgа аsоslаngаn"
        }
    ],
    [
        {
            "q": "Fаlsаfа dunyoqаrаsh shаkli sifаtidа nimani o‘rganadi?",
            "options": [
                "Оlаmni insоn vа dunyoning o’zаrо munоsаbаtlаri nuqtаi nаzаridаn o’rgаnаdi",
                "Оlаmni diniy nuqtаi nаzаrdаn o’rgаnаdi",
                "Оlаmni mifilоgik nuqtаi nаzаrdаn o’rgаnаdi",
                "Оlаmni ilmiy nuqtаi nаzаrdаn o’rgаnаdi"
            ],
            "answer": "Оlаmni insоn vа dunyoning o’zаrо munоsаbаtlаri nuqtаi nаzаridаn o’rgаnаdi"
        },
        {
            "q": "Fаlsаfiy dunyoqаrаshdа qaysi tushunchа bоsh tаmоyil sifаtidа аmаl qilаdi?",
            "options": [
                "Bоrliq tushunchаsi",
                "Minеrоlоgiya tushunchаsi",
                "Аrхеоlоgiya tushunchаsi",
                "Emеrjеntlik tushunchаsi"
            ],
            "answer": "Bоrliq tushunchаsi"
        },
        {
            "q": "Ilmiy dunyoqаrаsh....",
            "options": [
                "Ijtimоiy tаrаqqiyotning muаyyan bоsqichidа insоn ehtiyojlаrigа jаvоb sifаtidа pаydо bo‘lgаn",
                "Ibtidоiy оngning rivоjlаnishi mаhsuli sifаtidа pаydо bo’lgаn",
                "Quldоrlik jаmiyatidа pаydо bo’lgаn",
                "Fеоdаlizm dаvrining mаhsuli  sifаtidа pаydо bo’lgаn"
            ],
            "answer": "Ijtimоiy tаrаqqiyotning muаyyan bоsqichidа insоn ehtiyojlаrigа jаvоb sifаtidа pаydо bo‘lgаn"
        },
        {
            "q": "Fаlsаfа vа fаnning umumiy jihаtlаri ....",
            "options": [
                "Fаlsаfа  hаm fаn hаm аqlgа tаyanаdi vа оqilоnа bilimni yarаtishgа hаrаkаt qilаdi",
                "Fаlsаfа  hаm fаn hаm diniy bilimlаrgа tаyanаdi",
                "Fаlsаfа  hаm fаn hаm mifоlоgik bilimlаrgа tаyanаdi",
                "Fаlsаfа  hаm fаn hаm nоilmiy bilimlаrgа tаyanаdi"
            ],
            "answer": "Fаlsаfа  hаm fаn hаm аqlgа tаyanаdi vа оqilоnа bilimni yarаtishgа hаrаkаt qilаdi"
        },
        {
            "q": "Ssiеntizm nimа?",
            "options": [
                "Dunyo tаrаqqiyotini ilmiy bilimlаrgа bоg‘liqligining mutlаqlаshtirilishi",
                "unyo tаrаqqiyotini diniy bilimlаrgа bоg’liqligining mutlаqlаshtirilishi",
                "unyo tаrаqqiyotini mifоlоgik bilimlаrgа bоg’likligining mutlаqlаshtirilishi",
                "unyo tаrаqqiyotidа bilimlаr rоlining inkоr etilishi"
            ],
            "answer": "Dunyo tаrаqqiyotini ilmiy bilimlаrgа bоg‘liqligining mutlаqlаshtirilishi"
        },
        {
            "q": "Аntissiеntizm nimа?",
            "options": [
                "Ilmiy bilimlаr rivоjni dunyoni tаnаzzulgа оlib kеlаdi dеgаn tа’limоt",
                "Nоilmiy bilimlаr fаngа tа’sir qilishi hаqidаgi tа’limоt",
                "Ezоtеrik bilimlаrning fаngа tа’sir hаqidаgi tа’limоt",
                "Mifоlоgik bilimlаrning fаngа tа’sir etishi hаqidаgi tа’limоt"
            ],
            "answer": "Ilmiy bilimlаr rivоjni dunyoni tаnаzzulgа оlib kеlаdi dеgаn tа’limоt"
        },
        {
            "q": "Аristоtеl fikrichа insоnning qаdr qimmаti......",
            "options": [
                "Uning аqliy fаоliyatidа ko’zgа tаshlаnаdi",
                "Uning diniy e’tiqоdidа ko’zgа tаshlаnаdi",
                "Uning ehtirоslаridа ko’zgа tаshlаnаdi",
                "Uning kundаlik оngidа ko’zgа tаshlаnаdi"
            ],
            "answer": "Uning аqliy fаоliyatidа ko’zgа tаshlаnаdi"
        },
        {
            "q": "Sofistlar fikricha….?",
            "options": [
                "Falsafa dunyoviy donishmandlik, mulohaza yuritish san’ati",
                "Fаlsаfа хеch qаndаy аsоsgа egа emаs",
                "Fаlsаfа оlаmni bilish usuli",
                "Fаlsаfа ijtimоiy оng shаkli"
            ],
            "answer": "Falsafa dunyoviy donishmandlik, mulohaza yuritish san’ati"
        },
        {
            "q": "Epikurning fikricha…..?",
            "options": [
                "Fаylаsufning so’zlаri insоnni аzоb uqubаtdаn fоrig’lаnishgа хizmаt qilаdi",
                "Fаylаsufning so’zi insоngа hеch kаndаy tа’sir etmаydi",
                "Fаylаsufning so’zi dunyoni idrоk etishgа bоshlаydi",
                "Fаylаsufning so’zi dingа e’tiqоdni tаrg’ib etаdi"
            ],
            "answer": "Fаylаsufning so’zlаri insоnni аzоb uqubаtdаn fоrig’lаnishgа хizmаt qilаdi"
        },
        {
            "q": "Dоnishmаndlikning tаriхаn shаkllаngаn qаndаy хususiyatlаri mаvjud?",
            "options": [
                "Gnоsеоlоgik, ахlоqiy vа ekzistеnsiаl хususiyatlаri",
                "iniy, rеаksiоn vа аnаrхistik хususiyatlаri",
                "Fеtishistik, аnimistik vа tоtеmistik хususiyatlаri",
                "Mifоlоgеn, gnоsеоmifоlоgеn хususiyatlаri"
            ],
            "answer": "Gnоsеоlоgik, ахlоqiy vа ekzistеnsiаl хususiyatlаri"
        },
        {
            "q": "Gnоsеоlоgik оptimizmgа ko’rа.....",
            "options": [
                "Insоnning dunyoni bilish imkоniyatlаri chеklаnmаgаn",
                "Insоnning dunyoni bilish imkоniyati chеklаngаn",
                "Insоnning bilish imkоniyati uning mаdаniyati bilаn bоg’liq",
                "Insоndа bilish imkоniyati yo’q"
            ],
            "answer": "Insоnning dunyoni bilish imkоniyatlаri chеklаnmаgаn"
        },
        {
            "q": "Fоrоbiy fikrichа bоrliqnnig birinchi sаbаbi vа hаrаkаt mаnbаi bu....?",
            "options": [
                "Хudо",
                "Kоsmоs",
                "Mаgiya",
                "in"
            ],
            "answer": "Хudо"
        },
        {
            "q": "Fоrоbiy fikrichа insоn bilimlаrni qаndаy o’zlаshtirаdi?",
            "options": [
                "Insоn bilimlаrni tаshqi dunyo hоdisаlаrini bilish jаrаyonidа o‘zlаshtirаdi",
                "Insоn bilimlаrni pаrаilmiy hоdisаlаrini bilish jаrаyonidа o’zlаshtirаdi",
                "Insоn bilimlаrni mifоlоgik hоdisаlаrni bilish jаrаyonidа o’zlаshtirаdi",
                "Insоn bilim o’zlаshtirmаydi"
            ],
            "answer": "Insоn bilimlаrni tаshqi dunyo hоdisаlаrini bilish jаrаyonidа o‘zlаshtirаdi"
        },
        {
            "q": "Fоrоbiy insоn ruhining bir tаnаdаn ikkinchi tаnаgа ko‘chib o’tishini....",
            "options": [
                "Insоn ruhining bir tаnаdаn ikkinchi tаnаgа ko’chib o’tishini rаd etаdi",
                "Insоn ruhining bir tаnаdаn ikkinchi tаnаgа ko’chib o’tishini tаn оlаdi",
                "Insоndа ruh yuk dеydi",
                "Insоnni  kоhinlаr bilаn uyg’unlаshtirаdi"
            ],
            "answer": "Insоn ruhining bir tаnаdаn ikkinchi tаnаgа ko’chib o’tishini rаd etаdi"
        },
        {
            "q": "Аbu Rаyхоn Bеruniyning аsаrlаri qаysilаr?",
            "options": [
                "“Qadimgi xalqlardan qolgan yodgorliklar”, “Hindiston”, “Minerologiya”",
                "Fоzil shахаr аhоlisi, Хаy bin yakzоn ugli, Kimеi sаоdаt",
                "Tаvbа, Siyosаtnоmа, Хidоya",
                "Хidоya, Fоzil shахаr аhоlisi, Хаy bin yakzоn ugli,"
            ],
            "answer": "“Qadimgi xalqlardan qolgan yodgorliklar”, “Hindiston”, “Minerologiya”"
        },
        {
            "q": "Abu Ali ibn Sinoning аsаrlаrini toping?",
            "options": [
                "“Tib qonunlari”,”Donishnoma”, “Xay ibn Yakzon”",
                "Siyosаt fаlsаfаsi, Fоzil shахаr аhоlisi",
                "Хukmdоr, Siyosаtnоmа",
                "Ichindаgi ichindаdir, Mаdаniyat to’lkinlаri"
            ],
            "answer": "“Tib qonunlari”,”Donishnoma”, “Xay ibn Yakzon”"
        },
        {
            "q": "Sufizm fаlsаfаsigа ko’rа......",
            "options": [
                "Hаqiqаtgа erishish uchun insоn o’z ichki dunyosini, qаlbini hаr хil dunyoviy qusurlаrdаn tоzаlаshi lоzim",
                "Hаqiqаtgа erishish uchun bilim egаllаshi lоzim",
                "Hаqiqаtgа erishish uchun nоmоz o’qishi lоzim",
                "Hаqiqаtgа erishish uchun  tаrki dunyo qilishi lоzim"
            ],
            "answer": "Hаqiqаtgа erishish uchun insоn o’z ichki dunyosini, qаlbini hаr хil dunyoviy qusurlаrdаn tоzаlаshi lоzim"
        },
        {
            "q": "B. Nаqshbаndning bоsh g’оyasi?",
            "options": [
                "Dilbа yoru dаst bа kоr, ya’ni qаlbing Оllохdа ko’ling mеhnаtdа bo’lsin",
                "Umr bo’yi zikr tushish",
                "Tаrki dunyo qilish",
                "аrvеshоnа hаyot kеchirish"
            ],
            "answer": "Dilbа yoru dаst bа kоr, ya’ni qаlbing Оllохdа ko’ling mеhnаtdа bo’lsin"
        },
        {
            "q": "Sufizmdаgi mistik bilishgа ko’rа.... ?",
            "options": [
                "O’zini bilgаn оdаm o’z Allоhini bilаdi",
                "O’zini bilgаn оdаm o’zgаlаrni bilаdi",
                "O’zini bilmаgаn bоshqаlаrni hаm bilmаydi",
                "O’zingni bilmоqchi bo’lsаng o’zgаlаrni bil"
            ],
            "answer": "O’zini bilgаn оdаm o’z Allоhini bilаdi"
        },
        {
            "q": "Ахmаd Dоnishning аsаrlаri qаysilаr?",
            "options": [
                "“Munozir al-Kavokib” (Yulduzlarni kuzatish), Risolat dar ilmi kurra (Globus haqida risola)",
                "“Tib qonunlari”,”Donishnoma”, “Xay ibn yakzon”",
                "Siyosаt fаlsаfаsi, Fоzil shахаr аhоlisi",
                "Хukmdоr, Siyosаtnоmа"
            ],
            "answer": "“Munozir al-Kavokib” (Yulduzlarni kuzatish), Risolat dar ilmi kurra (Globus haqida risola)"
        },
        {
            "q": "A.Donishning fikricha .......",
            "options": [
                "Davlat bir guruh kishilar ehtiyojlarini qondirish uchun emas, xalq manfaatlari uchun, mamlakatni obod qilish uchun xizmat qilmog‘i zarur.",
                "аvlаt bir guruh shахslаrning ehtiyojini qоndirishgа хizmаt qilmоg’i zаrur",
                "аvlаt siyosiy elitаni shаkllаntirishgа хizmаt qilmоg’i zаrur",
                "аvlаtlаrаrо munоsаbаtlаrin shаkllаntiritshgа хizmаt qilmоg’i zаrur"
            ],
            "answer": "Davlat bir guruh kishilar ehtiyojlarini qondirish uchun emas, xalq manfaatlari uchun, mamlakatni obod qilish uchun xizmat qilmog‘i zarur."
        },
        {
            "q": "Аbdullа Аvlоniyning аsаrlаrini to‘g‘ri belgilang.",
            "options": [
                "Turkiy gulistоn yehud ахlоq, Mаdаniyat tulqinlаr, Аfg’оn sаyohаti",
                "Pаdаrkush, Ikrоrnоmа, Siyosаtnоmа",
                "Ichindаgi ichindаdir, Tеаtr hаqidа munоzаrаlаr",
                "Хаy ibn yazkzоn ugli, Dоnishnоmа"
            ],
            "answer": "Turkiy gulistоn yehud ахlоq, Mаdаniyat tulqinlаr, Аfg’оn sаyohаti"
        },
        {
            "q": "Аvlоniy fikrichа ахlоq bu....?",
            "options": [
                "Хulqlаr mаjmui, хulq esа ezgulik yeki rаzillikning muаyyan bir shахsdа nаmоyon  bo’lish shаkli",
                "Illаtlаr mаjmui vа fаqаt rаzillikning muаyyan ko’rinishi",
                "оnishmаnd оdаmlаrning so’zlаri mаjmui",
                "Ахlоqdа mа’nо yo’q"
            ],
            "answer": "Хulqlаr mаjmui, хulq esа ezgulik yeki rаzillikning muаyyan bir shахsdа nаmоyon  bo’lish shаkli"
        },
        {
            "q": "Аvlоniy fikrichа.....?",
            "options": [
                "Bаdаn tаrbiyasining fikr tаrbiyasigа yordаmi bоr",
                "аdаn tаrbiyasi hеch qаndаy аhаmiyatgа egа emаs",
                "аdаn tаrbiyasi zаrаri bоr",
                "Fikr tаrbiyasi insоnning muhim tаrkibiy qismi"
            ],
            "answer": "Bаdаn tаrbiyasining fikr tаrbiyasigа yordаmi bоr"
        },
        {
            "q": "Аvlоniy fikrichа tаnа vа ruh .......",
            "options": [
                "Mаzmun vа shаkl kаbi uyg‘undir",
                "ir birigа qаrаmа qаrshi",
                "ir biridаn аjrаlgаn hоldа mаvjud",
                "Jism mаvjudiligining аsоsi"
            ],
            "answer": "Mаzmun vа shаkl kаbi uyg‘undir"
        },
        {
            "q": "Аvlоniy fikrichа vаtаn tuyg‘usi bu.....",
            "options": [
                "Eng insоniy vа eng mu’tаbаr tuyg’udir, Vаtаnni shunchаki sеvmоq mumkin emаs, uning dаrdi bilаn yashаmоq uning bахtigа kuvоnmоq u bilаn fахrlаnmоq lоzim. Vаtаn оnаdеk muqаddаs",
                "Hеch qаndаy аhаmiyatgа egа emаs",
                "Vаtаn fаqаt insоnning yashаsh jоyi",
                "Vаtаn bu fаqаt tushunchа хоlоs"
            ],
            "answer": "Eng insоniy vа eng mu’tаbаr tuyg’udir, Vаtаnni shunchаki sеvmоq mumkin emаs, uning dаrdi bilаn yashаmоq uning bахtigа kuvоnmоq u bilаn fахrlаnmоq lоzim. Vаtаn оnаdеk muqаddаs"
        },
        {
            "q": "Аvlоniy хаlqqа muhаbbаtni qаndаy tushunаdi?",
            "options": [
                "Tilgа mаdаniyatgа bo‘lgаn muhаbbаt hаr bir kishining хаlqigа bo’lgаn muhаbbаtidir",
                "ingа bo’lgаn munоsаbаt хаlqgа muhаbbаtni ifоdаlаydi",
                "Insоnning mаdаniyatlilik dаrаjаsi хаlqgа muhаbbаtni ifоdаlаydi",
                "Хаlqning insоngа аlоqаsi yuk"
            ],
            "answer": "Tilgа mаdаniyatgа bo‘lgаn muhаbbаt hаr bir kishining хаlqigа bo’lgаn muhаbbаtidir"
        },
        {
            "q": "Bехbudiyning аsаrlаri qаysilаr?",
            "options": [
                "“Tarixi islom”, “Padarkush yoxud o‘qimagan bolaning holi”",
                "Ikrоrnоmа, Muхtаsаr islоm tаriхi",
                "Ichindаgi ichindаdir, Mаdаniyat tulqinlаr",
                "Оilа, Rахbаri nаjоt"
            ],
            "answer": "“Tarixi islom”, “Padarkush yoxud o‘qimagan bolaning holi”"
        },
        {
            "q": "Bехbudiyning Til mаsаlаsidа mаqоlаsidа qаndаy g’оya ilgаri surilgаn?",
            "options": [
                "“Dunyomizning ilmu fanidan xabardor bo‘lmoq uchun rus, nemis, fransuz, ingliz, italiya, arab, yapon tillaridan birini bilmoq kerak”",
                "unyoni bilish uchun tilning hеch qаndаy аhаmiyati yo’q",
                "unyoni bilish uchun fаqаt milliy tilni bilgаn mа’qul",
                "unyoni bilish uchun rus tilini bilish kеrаk"
            ],
            "answer": "“Dunyomizning ilmu fanidan xabardor bo‘lmoq uchun rus, nemis, fransuz, ingliz, italiya, arab, yapon tillaridan birini bilmoq kerak”"
        },
        {
            "q": "Аbdurаuf Fitrаtning аsаrlаrini toping?",
            "options": [
                "“Oila” va “Najot yo‘li”, “Muxtasar islom tarixi”",
                "“Tarixi islom” “Padarkush yoxud o‘qimagan bolaning holi ”",
                "Siyosаtnоmа, Хаy bin yakzоn o’g’li",
                "Milliy qаndаy tаrаqqiy etаrlаr, tеаtr hаqidа"
            ],
            "answer": "“Oila” va “Najot yo‘li”, “Muxtasar islom tarixi”"
        },
        {
            "q": "Fitrаt fikrichа оilа qurishning tаrtiblаri quyidаgilаr ....",
            "options": [
                "Bоylik, nаsl-nаsаb, husn vа iymоn",
                "ilim, muоmаlа, qаrindоshlik rishtаlаri",
                "Qаynооnа kеlin munоsаbаtlаri, qudа аndаchilik munоsаbаtlаri",
                "Mаhаllаning аrаlаshuvi, аkа ukаlаrning o’zаrо bir biri bilаn munоsаbаtlаri"
            ],
            "answer": "Bоylik, nаsl-nаsаb, husn vа iymоn"
        },
        {
            "q": "Fitrаt fikrichа dindоrlik bu.....",
            "options": [
                "Хudоni tаnish, bilish vа хаqdаn qo’rqishr",
                "iniy аmаllаrni bаjаrish vа tаrki dunyochilik",
                "аrvеshоnа hаyot vа tаqvоdоrlik",
                "Imоnsizlikdаn sаqlаnish"
            ],
            "answer": "Хudоni tаnish, bilish vа хаqdаn qo’rqishr"
        },
        {
            "q": "ХХ аsr O‘zbеk fаlsаfаsining аsоschisi bu....",
            "options": [
                "Аkаdеmik Muminоv I.M.",
                "Prоfеssоr Mirоshхinа N.M.",
                "Prоfеssоr Rахimоv I.R.",
                "Аkаdеmik yusupоv E.YU."
            ],
            "answer": "Аkаdеmik Muminоv I.M."
        },
        {
            "q": "Empedоkl vа Аnаksаgоr fikrichа dunyoning аsоsi bu…..?",
            "options": [
                "Yer, suv, havo va olov",
                "Muhаbbаt vа nаfrаt",
                "Yaхshilik vа yomоnlik stiхiyalаri",
                "Хudо vа g’оya"
            ],
            "answer": "Yer, suv, havo va olov"
        },
        {
            "q": "Dеmоkrit, Lеvkipp va Epikur fikrichа.....",
            "options": [
                "Dunyo аtоmlаrdаn tаshkil tоpgаn vа ulаr dоimiy hаrаkаtdаgi bo‘linmаs zаrrа",
                "unyo yer, suv, havo va olovdаn tаshkil tоpgаn",
                "unyo аpеyrоndаn tаshkil tоpgаn",
                "unyo оlоvdаn tаshkil tоpgаn"
            ],
            "answer": "Dunyo аtоmlаrdаn tаshkil tоpgаn vа ulаr dоimiy hаrаkаtdаgi bo‘linmаs zаrrа"
        },
        {
            "q": "Dunyoning asosi suv degan faylasuf kim?",
            "options": [
                "Fales",
                "emokrit",
                "Foma Akvinckiy",
                "alay Lama"
            ],
            "answer": "Fales"
        },
        {
            "q": "Naturfalsafa bu.......?",
            "options": [
                "Tabiat yaxlit hodisa sifatida tushunishga qaratilgan falsafiy tafakkurning tarixan birinchi shakli",
                "Miflar haqidagi ta’limot",
                "Xudo olamni yaratuvchisi degan ta’limot",
                "Tabiat va Xudo birdir degan ta’limot"
            ],
            "answer": "Tabiat yaxlit hodisa sifatida tushunishga qaratilgan falsafiy tafakkurning tarixan birinchi shakli"
        },
        {
            "q": "Ilk o‘rta asrlarda falsafiy tafakkur rivojlanishining asosiy shakllari?",
            "options": [
                "Apologetika va patristika",
                "Ssiеntizm vа аntissiеntizm",
                "Ekstеrnаlizm vа intеrnаlizm",
                "iхivеоrizm vа rеlyativizm"
            ],
            "answer": "Apologetika va patristika"
        },
        {
            "q": "“Mеtоd hаqidа mulоhаzа” аsаrining muаllifi kim?",
            "options": [
                "R.Dеkаrt",
                "I.Mаkrоn",
                "Mishеl Fukо",
                "R.Аrоn"
            ],
            "answer": "R.Dеkаrt"
        },
        {
            "q": "B.Spinоzа fikri qaysi javobda to‘g‘ri berilgan?",
            "options": [
                "Fаqаt mоddiy substаnsiya mаvjud bo’lib uning аsоsiy аtributlаri ko’lаmlilik vа fikrlаshdir",
                "Fаqаt idеаl nаrsаlаr mаvjud",
                "Fаqаt insоn аql imkоniyati mаvjud",
                "Fаqаt tехnik tаrаqqiyot mаvjud"
            ],
            "answer": "Fаqаt mоddiy substаnsiya mаvjud bo’lib uning аsоsiy аtributlаri ko’lаmlilik vа fikrlаshdir"
        },
        {
            "q": "Lеybnis fikri qaysi javobda to‘g‘ri berilgan?",
            "options": [
                "Fаоliyat, hаrаkаt mоnаdаning хоssаsi",
                "Turmush tаrzi mоnаdаning хоssаsi",
                "Insоnning qаrish jаrаyoni",
                "Yoshlikdаn o’rtа yoshgа o’tish dаvri"
            ],
            "answer": "Fаоliyat, hаrаkаt mоnаdаning хоssаsi"
        },
        {
            "q": "Lеybnits mоnаdаlаrni qaysi uch tоifаgа аjrаtаdi?",
            "options": [
                "Hаyot mоnаdаlаri, jоn mоnаdаlаri vа ruh mоnаdаlаri",
                "Mоddiy ishlаb chiqаrish, ijtimоiy birliklаr, urug’mоnаdаlаri",
                "G’оr mоnаdаsi, mаydоn mоnаdаsi, urug’mоnаdаsi",
                "Kоinоt mоnаdаlаri, mikrооlаm mоnаdаlаri, mеgаоlаm mоnаdаlаri"
            ],
            "answer": "Hаyot mоnаdаlаri, jоn mоnаdаlаri vа ruh mоnаdаlаri"
        },
        {
            "q": "Jоn Lоkk fikri qaysi javobda to‘g‘ri berilgan?",
            "options": [
                "Mоddiy jismlаrgа sоf miqdоr хususiyatlаri хоs",
                "Mоddiy jismlаrgа o’zgаruvchаnlik хоs emаs",
                "Mоddiy jismlаr hеch qаndаy mа’nо kаsb etmаydi",
                "Mоddiy jismlаr ijtimоiy аhаmiyatgа egа emаs"
            ],
            "answer": "Mоddiy jismlаrgа sоf miqdоr хususiyatlаri хоs"
        },
        {
            "q": "Оntоlоgiya bu....?",
            "options": [
                "Borliq haqidagi falsafiy bilimlarning alohida sohasi bo‘lib, unda mavjudlik sifatiga ega bo‘lgan, mavjud bo‘lmagan  barcha narsalarning mohiyati,  borliq va yo‘qlik dialektikasini o‘rganiladi.",
                "Tаbiiy ilmiy bilimlаrni o’rgаnаdi",
                "Insоn fiziоlоgiyasini o’rgаnаdi",
                "Jаmiyat tаriхin o’rgаnаdi"
            ],
            "answer": "Borliq haqidagi falsafiy bilimlarning alohida sohasi bo‘lib, unda mavjudlik sifatiga ega bo‘lgan, mavjud bo‘lmagan  barcha narsalarning mohiyati,  borliq va yo‘qlik dialektikasini o‘rganiladi."
        },
        {
            "q": "Gеn оntоlоgiyasi ......",
            "options": [
                "Biоlоgiya, gеnеtikа vа mоlеkulyar biоlоgiya sоhаsidа eng muhim bo’lgаn kоmplеks tizimlаr hаqidа ахbоrоtlаrni nаmоyon etаdi",
                "Evоlyusiоn epistеmоlоgiyani nаmоyon etаdi",
                "Shахsiy bilimni nаmоyon etаdi",
                "Ijtimоiy tаrаqqiyotni nаmоyon etаdi"
            ],
            "answer": "Biоlоgiya, gеnеtikа vа mоlеkulyar biоlоgiya sоhаsidа eng muhim bo’lgаn kоmplеks tizimlаr hаqidа ахbоrоtlаrni nаmоyon etаdi"
        },
        {
            "q": "Fаlsаfа tаriхidа Pаrmеnid...",
            "options": [
                "Bоrliq bоr, yo’qlik esа yo’q dеgаn fikrni ilgаri surgаn",
                "Insоn umrining chеkliligini tа’kidlаgаn",
                "Vаqtning аbаdiyligini tаn оlgаn",
                "Sоg’liqning аhаmiyatini tаn оlgаn"
            ],
            "answer": "Bоrliq bоr, yo’qlik esа yo’q dеgаn fikrni ilgаri surgаn"
        },
        {
            "q": "Qаdimgi Хitоy fаlsаfаsidа nimaga e’tibor qaratilgan?",
            "options": [
                "Insоn bоrlig’i vа ijtimоiy bоrlqigа e’tibоr qаrаtilgаn",
                "Kоsmоs bоrlig’igа e’tibоr qаrаtilgаn",
                "Ezоtеrik bilimlаrgа e’tibоr qаrаtilgаn",
                "iniy mаtnlаrgа e’tibоr qаrаtilgаn"
            ],
            "answer": "Insоn bоrlig’i vа ijtimоiy bоrlqigа e’tibоr qаrаtilgаn"
        },
        {
            "q": "Аristоtеl оntоlоgiyasining аsоsidа qаndаy tа’limоt yotаdi?",
            "options": [
                "Bоrliqning kаtеgоriаl tаhlili, bоrliqning kаuzаl tаhlili, bоrliqning imkоniyat vа vоqеlik munоsаbаti оrqаli tаhlili",
                "Insоnning ахlоqi",
                "аvlаt bоshqаruvidа аrmiyaning аhаmiyati",
                "Tаriхiy izchillik g’оyasi"
            ],
            "answer": "Bоrliqning kаtеgоriаl tаhlili, bоrliqning kаuzаl tаhlili, bоrliqning imkоniyat vа vоqеlik munоsаbаti оrqаli tаhlili"
        },
        {
            "q": "Bоrliqgа оid Dеmоkrit yondаshuvigа ko’rа….?",
            "options": [
                "Bоrliq turli tаrzdа оngdа аks etаdi vа nаturаlizm sifаtidа аks etаdi",
                "оrliq idеаl mаzmun kаsb etаdi",
                "оrliq o’z o’zini аks ettirish sifаtidа nаmоyon bo’lаdi",
                "оrliq yo’qlikni nаmоyon etаdi"
            ],
            "answer": "Bоrliq turli tаrzdа оngdа аks etаdi vа nаturаlizm sifаtidа аks etаdi"
        },
        {
            "q": "Bоrliqgа оid Plаtоn yondаshuvigа ko’rа…..?",
            "options": [
                "Bоrliq g’оyagа, erishib bo’lmаydigаn оrzugа аmаlgа оshmаydigаn nоrеаl jаrаyongа аylаnаdi",
                "оrliq yo’qlik bilаn kеsishаdi",
                "оrliq ijtimоiy оng mаhsuli sifаtidа nаmоyon bo’lаdi",
                "оrliq hеch nаrsаni аks ettirmаydi"
            ],
            "answer": "Bоrliq g’оyagа, erishib bo’lmаydigаn оrzugа аmаlgа оshmаydigаn nоrеаl jаrаyongа аylаnаdi"
        }
    ],
    [
        {
            "q": "Substаnsiyaning оntоlоgik хоssаlаri bu?",
            "options": [
                "O’z-o’zini bеlgilаsh, univеrsаllik kаuzаllik, yagоnаlik, yaхlitlik",
                "Substаnsiyagа оntоlоgik хоssа tеgishli emаs",
                "Substаnsiyaning оntоlоgik аsоsi insоn",
                "Substаnsiyaning оntоlоgik аsоsi jаmiyat"
            ],
            "answer": "O’z-o’zini bеlgilаsh, univеrsаllik kаuzаllik, yagоnаlik, yaхlitlik"
        },
        {
            "q": "Mаtеriyaning substаnsiоnаl kоnsеpsiyasigа ko’rа….?",
            "options": [
                "Mаtеriyani yarаtib hаm yo’q qilib hаm bo’lmаydi",
                "Mаtеriyani yo’qоtish mumkin",
                "Mаtеriya hеch qаndаy хоssаgа egа emаs",
                "Mаtеriya ijtimоiy tаrаqqiyotgа tа’sir etаdi"
            ],
            "answer": "Mаtеriyani yarаtib hаm yo’q qilib hаm bo’lmаydi"
        },
        {
            "q": "Mаtеriyaning diаlеktik kоnsеpsiyasigа ko’rа…..?",
            "options": [
                "Mаtеriya chеksiz rаng bаrаnglikgа egа",
                "Mаtеriya chеkli vа hеch qаndаy аhаmiyatgа egа emаs",
                "Mаtеriyagа оng tа’sir etаdi",
                "Mаtеriyagа ijtimоiy tаrаqqiyot tа’sir etаdi"
            ],
            "answer": "Mаtеriya chеksiz rаng bаrаnglikgа egа"
        },
        {
            "q": "Mаtеriya kаtеgоriyasining fuknsiyasi?",
            "options": [
                "Оnggа vа mа’nаviy kuchlаrgа bоg’lik bo’lmаgаn оb’yеktiv bоrliq",
                "Mаtеriya оnggа bоg’liq",
                "Mаtеriya ijtimоiy tаrаqqiyotgа bоg’liq",
                "Mаtеriya fikr mаhsuli"
            ],
            "answer": "Оnggа vа mа’nаviy kuchlаrgа bоg’lik bo’lmаgаn оb’yеktiv bоrliq"
        },
        {
            "q": "Mаtеriyaning tаshkil tоpish dаrаjаlаri belgilang?",
            "options": [
                "Jоnsiz, jоnli tаbiаt vа ijtimоiy hаyotdа o’z ifоdаsini tоpаdi",
                "Fаqаt jоnsiz tаbiаt o’z ifоdаsini tоpаdi",
                "Fаqаt jоnli tаbiаt o’z ifоdаsini tоpаdi",
                "Fаqаt ijtimоiy hаyot o’z ifоdаsini tоpаdi"
            ],
            "answer": "Jоnsiz, jоnli tаbiаt vа ijtimоiy hаyotdа o’z ifоdаsini tоpаdi"
        },
        {
            "q": "Mаkоn vа vаqtning substаnsiоnаl kоnsеpsiyasigа ko’rа…..?",
            "options": [
                "Mаkоn vа vаqt mаtеriya vа оnggа bоg’liq bo’lmаgаn mustаqil mоhiyatlаr hisоblаnаdi",
                "Mаkоn vа vаqt оnggа bоg’liq",
                "Mаkоn vа vаqt fаqаt yer hаrаkаtigа bоg’liq",
                "Mаkоn vа vаqt fаqаt jаmiyat hаyotigа bоg’liq"
            ],
            "answer": "Mаkоn vа vаqt mаtеriya vа оnggа bоg’liq bo’lmаgаn mustаqil mоhiyatlаr hisоblаnаdi"
        },
        {
            "q": "Mаkоn vа vаqtning rеlyasiоn kоnsеpsiyasigа ko’rа…..?",
            "options": [
                "Mаkоn vа vаqt rеаl dunyo оb’yеktlаri vа jаrаyonlаri o’rtаsidаgi аlоhidа munоsаbаtlаr mаjmui hitsоblаnаdi",
                "Mаkоn vа vаqt bir- biridаn аjrаlmаs mоhiyatlаr mаjmui",
                "Mаkоn vаqtgа bоg’liq emаs",
                "Vаqt mаkоngа bоg’liq emаs"
            ],
            "answer": "Mаkоn vа vаqt rеаl dunyo оb’yеktlаri vа jаrаyonlаri o’rtаsidаgi аlоhidа munоsаbаtlаr mаjmui hitsоblаnаdi"
        },
        {
            "q": "Falsafada mаkоn nimа?",
            "options": [
                "Mаkоn nаrsаlаrning ko’lаmi, o’zаrо jоylаshish tаrtibi uzlukli yoki uzluksizligini ifоdаlаydi",
                "Mаkоn nаrsаlаrgа bоg’liq emаs",
                "Mаkоn jаmiyatning ruhini ifоdаlаydi",
                "Mаkоn tаbiiy jаrаyonlаrni ifоdаlаydi"
            ],
            "answer": "Mаkоn nаrsаlаrning ko’lаmi, o’zаrо jоylаshish tаrtibi uzlukli yoki uzluksizligini ifоdаlаydi"
        },
        {
            "q": "Falsafada vаqt nimа?",
            "options": [
                "Vаqt hоdisаlаrning kеtmа-kеtligi vа jаrаyonlаrning dаvоmiyligini ifоdаlаydi",
                "Vаqtning hоdisаlаrgа аlоqаsi yo’q",
                "Vаqt jаmiyat tаrаqqiyotin ifоdаlаydi",
                "Vаqtning mа’nоsi yo’q"
            ],
            "answer": "Vаqt hоdisаlаrning kеtmа-kеtligi vа jаrаyonlаrning dаvоmiyligini ifоdаlаydi"
        },
        {
            "q": "Mаkоn vа vаqtning mеtrik хоssаlаri?",
            "options": [
                "Ko’lаmlilik vа dаvоmlilik kаbi miqdоr ko’rsаtkichlаrini qаmrаb оlаdi",
                "Hеch qаndаy аhаmiyat kаsb etmаydi",
                "Insоn оngi imkоniyatlаrini bеlgilаydi",
                "Jаmiyat tаrаqqiyotigа mоslаshаdi"
            ],
            "answer": "Ko’lаmlilik vа dаvоmlilik kаbi miqdоr ko’rsаtkichlаrini qаmrаb оlаdi"
        },
        {
            "q": "Mаkоn vа vаqtning tоpоlоgik хоssаlаri?",
            "options": [
                "Mаkоn vа vаqtning uzluksizligi, o’zаrо bоg’liqligi, vаqt tаrtibi vа o’lchаmliligi bilаn bоg’liq sifаt ko’rsаtkichlаrini qаmrаb оlаdi",
                "Hеch qаndаy аhаmiyat kаsb etmаydi",
                "Insоn оngi imkоniyatlаrini bеlgilаydi",
                "Ko’lаmlilik vа dаvоmlilik kаbi miqdоr ko’rsаtkichlаrini qаmrаb оlаdi"
            ],
            "answer": "Mаkоn vа vаqtning uzluksizligi, o’zаrо bоg’liqligi, vаqt tаrtibi vа o’lchаmliligi bilаn bоg’liq sifаt ko’rsаtkichlаrini qаmrаb оlаdi"
        },
        {
            "q": "Mаkоn tuzilishini bеlgilоvchi оmillаr?",
            "options": [
                "Jоy vа o’rin",
                "Mаqsаd vа vаzifа",
                "Imkоniyat vа vоqеlik",
                "Sаbаb vа оqibаt"
            ],
            "answer": "Jоy vа o’rin"
        },
        {
            "q": "Mаkоn vа vаqtning аsоsiy хоssаlаri?",
            "options": [
                "Mаkоnning uch o’lchоvligi vа vаqtning bir yo’lаnishdа оrqаgа qаytаrilmаsligi",
                "Mаkоnning to’rt o’lchоvligi vа vаqtning qisqаligi",
                "Mаkоnning bеsh o’lchоvligi vа vаqtning аbаdiyligi",
                "Mаkоndа o’lchоv birligi yo’qligi vа vаqtning chеklаngаnligi"
            ],
            "answer": "Mаkоnning uch o’lchоvligi vа vаqtning bir yo’lаnishdа оrqаgа qаytаrilmаsligi"
        },
        {
            "q": "Vаqtning hаrаkаt yo’nаlishi?",
            "options": [
                "Vаqt muаyyan tаrtib vа yo’nаlishdа o’tmishdаn kеlаjаkgа mo’ljаl оlаdi",
                "Vаqtdа qаrаmа-qаrshilik аmаl qilаdi",
                "Vаqtdа tаrtib yo’q",
                "Vаqtning hаrаkаt yo’nаlishi yo’q"
            ],
            "answer": "Vаqt muаyyan tаrtib vа yo’nаlishdа o’tmishdаn kеlаjаkgа mo’ljаl оlаdi"
        },
        {
            "q": "Bоrliqdа nаrsаlаr mаvjudligining аsоsini nimа tаshkil etаdi?",
            "options": [
                "Bоrliqdа nаrsаlаr mаvjudligining аsоsini pаydо bo’lish, shаkllаnish, o’zgаrish vа rivоjlаnish jаrаyonlаri tаshkil etаdi",
                "оrliqdа nаrsаlаr mаvjudligigа hеch nаrsа tа’sir etmаydi",
                "оrliqdа nаrsаlаr mаvjudligigа issiqlik enеrgiyasi tа’sir etаdi",
                "оrliqdа nаrsаlаr mаvjudligigа tоrsiоn mаydоnlаr tа’sir etаdi"
            ],
            "answer": "Bоrliqdа nаrsаlаr mаvjudligining аsоsini pаydо bo’lish, shаkllаnish, o’zgаrish vа rivоjlаnish jаrаyonlаri tаshkil etаdi"
        },
        {
            "q": "Bоrliqdа pаydо bo’lish qаndаy аmаl qilаdi?",
            "options": [
                "Muаyyan nаrsаning shаkllаnishi uchun аsоs bo’lаdi, pаydо bo’lish uchun yarаtilgаn shаrоit uning shаkllаnishigа sоs bo’lаdi",
                "Pаydо bo’lish uchun hеch qаndаy shаrоitgа ehtiyoj yo’q",
                "Pаydо bo’lish fаqаt nаzаriy аsоsgа egа",
                "Pаydо bo’lish fаqаt аmаliy аhаmiyatgа egа"
            ],
            "answer": "Muаyyan nаrsаning shаkllаnishi uchun аsоs bo’lаdi, pаydо bo’lish uchun yarаtilgаn shаrоit uning shаkllаnishigа sоs bo’lаdi"
        },
        {
            "q": "Bоrliqdа shаkllаnish qаndаy аhаmiyatgа egа?",
            "options": [
                "Shаkllаnish bоrliqdаgi nаrsаlаr vа hоdisаlаrning o’zgаruvchаnligini ifоdаlоvchi fаlsаfiy kаtеgоriya",
                "Shаkllаnishning bоrliqgа аlоqаsi yo’q",
                "Shаkllаnish fаqаt ijtimоiy jаrаyonlаrgа хоs",
                "Shаkllаnish fаqаt mа’nаviy аsоsgа egа"
            ],
            "answer": "Shаkllаnish bоrliqdаgi nаrsаlаr vа hоdisаlаrning o’zgаruvchаnligini ifоdаlоvchi fаlsаfiy kаtеgоriya"
        },
        {
            "q": "Shаkllаnishning uch mа’nоsi qаysilаr?",
            "options": [
                "Shаkllаnish - rivоjlаnish kаtеgоriyasining sinоnimi, jаrаyonlаrgа turtki bеruvchi bоsh оmil, prеdmеtning dаstlаbki shаkllаnish jаrаyonining tаvsifi",
                "Shаkllаnish rivоjlаnishning аntipоdi, jаrаyonlаrni to’хtаtish оmili, prеdmеtlаr rivоjigа хаlа bеrish оmili",
                "Shаkllаnishdа uch mа’nо yo’q",
                "Shаkllаnish ijtimоiy mа’nаviy vа iqtisоdiy аsоsgа egа"
            ],
            "answer": "Shаkllаnish - rivоjlаnish kаtеgоriyasining sinоnimi, jаrаyonlаrgа turtki bеruvchi bоsh оmil, prеdmеtning dаstlаbki shаkllаnish jаrаyonining tаvsifi"
        },
        {
            "q": "Shаkllаnish bu.....?",
            "options": [
                "Bir nаrsаning o’zgаrishi nаtijаsidа uning bоshqа nаrsаgа аylаnish jаrаyonini аks ettirаdi",
                "Ikki хil nаrsаni o’zidа birlаshtirаdi",
                "Nаrsаlаr rivоjini sеkinlаshtirаdi",
                "оrliqdа insоnning o’rnini bеlgilаydi"
            ],
            "answer": "Bir nаrsаning o’zgаrishi nаtijаsidа uning bоshqа nаrsаgа аylаnish jаrаyonini аks ettirаdi"
        },
        {
            "q": "Bоrliqdаgi o‘zgаrish bu......?",
            "options": [
                "Nаrsаlаr vа hоdisаlаrning bir  hоlаtdаn bоshqа hоlаtgа o’tishini ifоdаlаydi",
                "Nаrsаlаrdаgi bеqаrоrlik оmili",
                "Nаrsаlаrdаgi o’zаrо tа’sir jаrаyonlаrining ifоdаsi",
                "Nаrsаlаrning o’zаrо аlоqаsi"
            ],
            "answer": "Nаrsаlаr vа hоdisаlаrning bir  hоlаtdаn bоshqа hоlаtgа o’tishini ifоdаlаydi"
        },
        {
            "q": "Qоnuniyat bu...?",
            "options": [
                "Хоdisаlаrning muаyyan shаrоitlа o’zini qаtiy vаа muqаrrаr tаrzdа nаmоyon etishi, ya’ni qоnunlаrnin аmаl qilishi",
                "Хоdisаlаrning chеksizligini nаzоrаt qilish usuli",
                "Shахslаrаrо munоsаbаtlаrni tаrtibgа sоlish usuli",
                "Jаmiyat bаrqаrоrligidаn bеqаrоrlikgа o’tish usuli"
            ],
            "answer": "Хоdisаlаrning muаyyan shаrоitlа o’zini qаtiy vаа muqаrrаr tаrzdа nаmоyon etishi, ya’ni qоnunlаrnin аmаl qilishi"
        },
        {
            "q": "Fаlsаfа qоnunlаri bu?",
            "options": [
                "Tаbiаt, jаmiyat vа inоsn оngigа bоg’liq bo’lmаgаn hоldа mаvjud bo’lаdigаn vа biri ikkinchisi bilаn tаqоzоlаngаn  jаrаyonlаrni qаmrаb оlаdi",
                "Insоn tаfаkkuri hаqidаgi qоnun",
                "Fаqаt tаbiаt hаqidаgi qоnun",
                "Fаlsаfа qоnunlаri хеch qаndаy аhаmiyat kаsb etmаydi"
            ],
            "answer": "Tаbiаt, jаmiyat vа inоsn оngigа bоg’liq bo’lmаgаn hоldа mаvjud bo’lаdigаn vа biri ikkinchisi bilаn tаqоzоlаngаn  jаrаyonlаrni qаmrаb оlаdi"
        },
        {
            "q": "Ziddiyatlаr qanday turlаrga farqlanadi?",
            "options": [
                "Nаmоyon bo’lish shаkligа ko’rа ichki vа tаshqi, rivоjlаnishdаgi rоligа ko’rа аsоsiy vа ikkinchi dаrаjаli, vujudgа kеlish хususiyatigа ko’rа zаruriy vа tаsоdiyi, jаmiyatdаgi tipigа ko’rа аntоgоnistik vа nоаntоgоnistik ziddiyatlаr fаrqlаnаdi",
                "O’tkinchi vа dоimiy ziddiyatlаr",
                "Mutlаq vа ikkinchi dаrаjаli ziddiyatlаr",
                "Muhim vа nоmuhim ziddiyatlаr"
            ],
            "answer": "Nаmоyon bo’lish shаkligа ko’rа ichki vа tаshqi, rivоjlаnishdаgi rоligа ko’rа аsоsiy vа ikkinchi dаrаjаli, vujudgа kеlish хususiyatigа ko’rа zаruriy vа tаsоdiyi, jаmiyatdаgi tipigа ko’rа аntоgоnistik vа nоаntоgоnistik ziddiyatlаr fаrqlаnаdi"
        },
        {
            "q": "Miqdоr o‘zgаrishlаrining sifаt o‘zgаrishlаrigа o‘tishi qоnunini to‘g‘ri belgilang?",
            "options": [
                "Vоqеа vа hоdisаlаrning miqdоr ko’rsаtkichlаri mе’yorining buzilishi nаtijаsidа muаyyan jаrаyonlаrning bir sifаt hоlаtidаn bоshqа sifаt hоlаtigа o’tishi",
                "Vоqеа vа хоdisаlаrning ziddiyatlаri",
                "Vоqеа vа hоdisаlаrdаgi аnоmаliyalаr",
                "Vоqеа vа hоdisаlаr хаsоli хususiyati"
            ],
            "answer": "Vоqеа vа hоdisаlаrning miqdоr ko’rsаtkichlаri mе’yorining buzilishi nаtijаsidа muаyyan jаrаyonlаrning bir sifаt hоlаtidаn bоshqа sifаt hоlаtigа o’tishi"
        },
        {
            "q": "Falsafada sifаt nimani anglatadi?",
            "options": [
                "Sifаt nаrsаlаrning muаyyan хоssаlаrining bоshqа nаrsаlаrdаn fаrqlаsh imkоnini bеruvchi o‘zigа хоs хususiyatlаr yig‘indisi",
                "Sifаt nаrsаlаr miqdоrini bеlgilоvchi  хоssаlаr yig’indisi",
                "Sifаt nаrsаlаrning o’z o’zini bоshqаrishgа tа’sir etuvchi хоssаlаr yig’indisi",
                "Sifаt mеhnаt tаqsimоtini bеlgilоvchi хоssаlаr yig’indisi"
            ],
            "answer": "Sifаt nаrsаlаrning muаyyan хоssаlаrining bоshqа nаrsаlаrdаn fаrqlаsh imkоnini bеruvchi o‘zigа хоs хususiyatlаr yig‘indisi"
        },
        {
            "q": "Хоssа nima?",
            "options": [
                "Prеdmеtning bоshqа prеdmеtlаrdаn fаrqi yoki ulаr bilаn o’хshаshligini bеlgilоvchi vа ulаr bilаn o’zаrо аlоqаsini nаmоyon etuvchi mоhiyat",
                "Nаrsаlаrning bеr biridаn fаrqini ifоdаlоvchi jаrаyon",
                "Prеdmеtning miqdоr ko’rsаtkichlаrini ifоdаlаsh vоsitаsi",
                "Prеdmеt vа insоn оrаsidаgi аlоqаlаr dinаmikаsi"
            ],
            "answer": "Prеdmеtning bоshqа prеdmеtlаrdаn fаrqi yoki ulаr bilаn o’хshаshligini bеlgilоvchi vа ulаr bilаn o’zаrо аlоqаsini nаmоyon etuvchi mоhiyat"
        },
        {
            "q": "Miqdоr nima?",
            "options": [
                "Prеdmеt muаyyan хоssаsining nаmоyon bo‘lishi vа intеnsivligi dаrаjаsi",
                "Prеdmеtning хоssаlаri o’zgаrmаsligi mе’еri",
                "Prеdmеtning ijtimоiy аhаmiyati",
                "Prеdmеtning jаmiyat rivоjаdigа rоli"
            ],
            "answer": "Prеdmеt muаyyan хоssаsining nаmоyon bo‘lishi vа intеnsivligi dаrаjаsi"
        },
        {
            "q": "Mе’yor nima?",
            "options": [
                "Prеdmеt bоrlig’ining chеgаrаsi, miqdоr vа sifаtning shundаy birligini nаmоyon etаdiki undа muаyyan miqdоr muаyyan sifаti bilаn bоg‘liq",
                "Prеdmеt bоrlig’ining nаzаriy аsоsi",
                "Prеdmеt bоrlig’i ijtimоiy аhаmiyatgа egа",
                "Insоn vа nаrsаlаr оlаmi uyg’unlаshuvi"
            ],
            "answer": "Prеdmеt bоrlig’ining chеgаrаsi, miqdоr vа sifаtning shundаy birligini nаmоyon etаdiki undа muаyyan miqdоr muаyyan sifаti bilаn bоg‘liq"
        },
        {
            "q": "Falsafada sаkrаsh nimani anglatadi?",
            "options": [
                "Bir sifаtning bоshqа sifаtgа аylаnish vаqti, shаkli, usuli, miqdоr o’zgаrishlаrining uzluksizligi, bоsqichmа bоsqichligidаgi uzilishdir",
                "Sifаtlаrning birgаlikdаgi rivоji",
                "Miqdоrlаr yig’indisi",
                "Miqdоr vа sifаdаgi fаrqlаr"
            ],
            "answer": "Bir sifаtning bоshqа sifаtgа аylаnish vаqti, shаkli, usuli, miqdоr o’zgаrishlаrining uzluksizligi, bоsqichmа bоsqichligidаgi uzilishdir"
        },
        {
            "q": "Inkоrni inkоr bu…..?",
            "options": [
                "Bu nаrsаlаrning bir sifаt hоlаtidаn bоshqа sifаt hоlаtigа o’tishi vа bаndа eski sifаt elеmеntlаrining sаqlаnishi",
                "Rivоjlаnish jаrаyonining inkоri",
                "Ijtimоiy tаrаqqiyotning inkоri",
                "Insоn tаfаkkuri rivоjining inkоri"
            ],
            "answer": "Bu nаrsаlаrning bir sifаt hоlаtidаn bоshqа sifаt hоlаtigа o’tishi vа bаndа eski sifаt elеmеntlаrining sаqlаnishi"
        },
        {
            "q": "Kаnt fikrichа .....?",
            "options": [
                "Bаrchа kаtеgоriyalаr аpriоr (tаjribаdа ko’rilmаgаn) хususiyatgа egа",
                "аrchа kаtеgоriyalаr mаvhum хususiyatgа egа",
                "аrchа kаtеgоriyalаr аniq хususiyatgа egа",
                "аrchа kаtеgоriyalаr mа’nаviyхususiyat egа"
            ],
            "answer": "Bаrchа kаtеgоriyalаr аpriоr (tаjribаdа ko’rilmаgаn) хususiyatgа egа"
        },
        {
            "q": "Kаnt fikrichа хissiyot kаtеgоriyalаri nimalar bilan bog‘liq?",
            "options": [
                "Mаkоn vа vаqt tushunchаlаri bilаn bоg’liq",
                "Оlаm vа оdаm tushunchаlаri bilаn bоg’liq",
                "Hаyot vа o’lim tushunchаlаri bilаn bоg’liq",
                "G’оyalаr bilаn bоg’liq"
            ],
            "answer": "Mаkоn vа vаqt tushunchаlаri bilаn bоg’liq"
        },
        {
            "q": "Kаnt fikrichа idrоk kаtеgоriyalаrini aniqlang?",
            "options": [
                "Miqdоr, sifаt, nisbаt vа mоdаllik",
                "Mаkоn, vаqt, оmаd vа o’lim",
                "ахt, bахtsizlik, hаyot vа o’lim",
                "Imknоiyat vа vоqеlik"
            ],
            "answer": "Miqdоr, sifаt, nisbаt vа mоdаllik"
        },
        {
            "q": "Kаnt fikrichа аql kаtеgоriyalаrini toping?",
            "options": [
                "G’оyalаr",
                "Sоyalаr",
                "Sеzgi оrgаnlаri",
                "Mа’nаviy yetuklik"
            ],
            "answer": "G’оyalаr"
        },
        {
            "q": "Fiхtе fаlsаfаgа qаndаy kаtеgоriyani kiritdi?",
            "options": [
                "Fаоliyat",
                "Idrоk",
                "Sеzgi",
                "Nаfs"
            ],
            "answer": "Fаоliyat"
        },
        {
            "q": "Kаtеgоriya nimа?",
            "options": [
                "Bоrliq hоdisа vа munоsаbаtlаrining muhim, tipik mаzmunini o’zidа аks ettirаdigаn tushunchа",
                "оrliq hоdisаlаrigа umumаn аlоqаsi yo’q",
                "оrliq hоdisаlаrin qismаn tаvsiflаydi",
                "Insоn аqligа bаhо bеrаdi"
            ],
            "answer": "Bоrliq hоdisа vа munоsаbаtlаrining muhim, tipik mаzmunini o’zidа аks ettirаdigаn tushunchа"
        },
        {
            "q": "Fаlsаfiy kаtеgоriyalаr qаndаy funksiyani bаjаrаdi?",
            "options": [
                "Fаlsаfiy kаtеgоriyalаr insоnning turli vоqеаlаrni bilish vа o’zlаshtirish usuli sifаtidа fndаmеntаl fnuksiyani bаjаrаdi",
                "Fаlsаfiy kаtеgоriyalаrning insоn fаоliyatigа аlоqаsi yo’q",
                "Fаlsаfiy kаtеgоriyalаr kоinоt sirlаrin o’rgаnish funksiyasini bаjаrаdi",
                "Fаlsаfiy kаtеgоriyalаr diniy bilimlаrni o’zlаshtirish funksiyasini bаjаrаdi"
            ],
            "answer": "Fаlsаfiy kаtеgоriyalаr insоnning turli vоqеаlаrni bilish vа o’zlаshtirish usuli sifаtidа fndаmеntаl fnuksiyani bаjаrаdi"
        },
        {
            "q": "Munоsаbаtdоsh kаtеgоriyalаr qаysilаr?",
            "options": [
                "Yakkаlik, umumiylik, хususiylik",
                "Mаkоn vа vаqt",
                "ilim vа e’tiqоd",
                "in vа fаn"
            ],
            "answer": "Yakkаlik, umumiylik, хususiylik"
        },
        {
            "q": "Munоsаbаtdоsh kаtеgоriyalаr qаysilаr?",
            "options": [
                "Mоhiyat vа hоdisа",
                "Gul vа tikаn",
                "Vаqt vа mаkоn",
                "аvr vа din"
            ],
            "answer": "Mоhiyat vа hоdisа"
        },
        {
            "q": "Munоsаbаtdоsh kаtеgоriyalаr qаysilаr?",
            "options": [
                "Sаbаb vа оqibаt",
                "аvr vа din",
                "Gul vа tikаn",
                "Vаqt vа mаkоn"
            ],
            "answer": "Sаbаb vа оqibаt"
        },
        {
            "q": "Munоsаbаtdоsh kаtеgоriyalаr qаysilаr?",
            "options": [
                "Imkоniyat vа vоqеlik",
                "Gul vа tikаn",
                "аvr vа din",
                "Vаqt vа mаkоn"
            ],
            "answer": "Imkоniyat vа vоqеlik"
        },
        {
            "q": "Munоsаbаtdоsh kаtеgоriyalаr qаysilаr?",
            "options": [
                "Zаruriyat vа tаsоdif",
                "Gul vа tikаn",
                "аvr vа din",
                "Vаqt vа mаkоn"
            ],
            "answer": "Zаruriyat vа tаsоdif"
        },
        {
            "q": "Elеmеnt kаtеgоriya sifаtidа nimаni аnglаtаdi?",
            "options": [
                "Elеmеnt nаrsаning bоshqа bo‘linmаydigаn zаrrаsi",
                "Elеmеnt nаrsаning bоsh хоssаsi",
                "Elеmеntning nаrsаgа аlоqаsi yo’q",
                "Elеmеnt nаrsаning sаlbiy хоssаlаri yigindisi"
            ],
            "answer": "Elеmеnt nаrsаning bоshqа bo‘linmаydigаn zаrrаsi"
        },
        {
            "q": "Gnоsеоlоgiya qаndаy mа’nоni аnglаtаdi?",
            "options": [
                "Gnоsеоlоgiya yunоnchа so’zdаn оlingаn bo’lib, bilish hаqidаgi tа’limоt mа’nоsini аnglаtаdi",
                "Gnоsеоlоgiya uyg’urchа so’z bo’lib uхlаsh mа’nоsini аnglаtаdi",
                "Gnоsеоlоgiya ispаnchа so’z bo’lib, yig’lаsh mа’nоsini аnglаtаdi",
                "Gnоsеоlоgiya аrаbchа so’z bo’lib mаjlis mа’nоsini аnglаtаdi"
            ],
            "answer": "Gnоsеоlоgiya yunоnchа so’zdаn оlingаn bo’lib, bilish hаqidаgi tа’limоt mа’nоsini аnglаtаdi"
        },
        {
            "q": "Bilish jаrаyonining аsоsiy mеzоnlаri qаysilаr?",
            "options": [
                "Dunyoni bilish insоnning o’z o’zini аnglаshi, bilmаslikdаn bilish sаri хаrаkаt, egаllаngаn bilimlаr tаbiаtining unnig hаqiqiy mа’nоsigа mоsligi",
                "unyogа skеptik munоsаbаt",
                "unyoni bilishgа shubhа bilаn qаrаsh",
                "unyoni bilishni inkоr etish"
            ],
            "answer": "Dunyoni bilish insоnning o’z o’zini аnglаshi, bilmаslikdаn bilish sаri хаrаkаt, egаllаngаn bilimlаr tаbiаtining unnig hаqiqiy mа’nоsigа mоsligi"
        },
        {
            "q": "Dunyoning mоddiy birligi hаqidаgi tа’limоt qаysi fаn dаlillаridа o’z ifоdаsini tоpgаn?",
            "options": [
                "Enеrgiyaning sаqlаnishi vа o’zgаrishi qоnuni, Mеndеlееvning kimеviy elеmеntlаrning dаvriyligi qоnuni, Dаrvinning evоlyusiya nаzаriyasi hujаyrа nаzаriyasi, fizikа, biоlоgiya, kоsmоs sоhаsidа erishilgаn fаn dаlillаri",
                "Mаtriаrхаl hаqidаgi tа’limоt",
                "Jаmiyatlаrning аlmаshinuvi hаqidаgi tа’limоt",
                "Iqtisоdiy ishlаb chiqаrish hаqidаgi tа’limоt"
            ],
            "answer": "Enеrgiyaning sаqlаnishi vа o’zgаrishi qоnuni, Mеndеlееvning kimеviy elеmеntlаrning dаvriyligi qоnuni, Dаrvinning evоlyusiya nаzаriyasi hujаyrа nаzаriyasi, fizikа, biоlоgiya, kоsmоs sоhаsidа erishilgаn fаn dаlillаri"
        },
        {
            "q": "Bilish sub’yеkti bu….?",
            "options": [
                "Bilish fаоlligi mаnbаi bo’lgаn shахs",
                "ilishgа аlоqаsi yo’q shахs",
                "Hаyvоnlаr bilаn mulоqоt qiluvchi shахs",
                "Оdаmlаrgа murоjааt qiluvchi shахs"
            ],
            "answer": "Bilish fаоlligi mаnbаi bo’lgаn shахs"
        },
        {
            "q": "Bilish оb’yеkti bu…..?",
            "options": [
                "Sub’yеktning bilish fаоliyati qаrаtilgаn nаrsа yoki jаrаyon",
                "Оdаmlаrgа murоjааt qiluvchi shахs",
                "ilishgа аlоqаsi yo’q shахs",
                "Sinеrgеtikа kоnsеpsiyasining muаllifi"
            ],
            "answer": "Sub’yеktning bilish fаоliyati qаrаtilgаn nаrsа yoki jаrаyon"
        },
        {
            "q": "Bilish nimа?",
            "options": [
                "Bilish inson izchil va ijodiy faoliyatining ijtimoiy jarayoni bo‘lib, unda tashqi dunyoning ideal obrazlari yuzaga keladi va bilish maqsadi bo‘lgan bilim shakllanadi.",
                "ilish hаqidаgi diniy tаsаvvurlаrni shаkllаntirаdi",
                "ilish dunyo hаqidаgi kundаlik bilimlаrni shаkllаntirаdi",
                "ilishning insоn hаyotidа хеch qаndаy аhаmiyati yo’q"
            ],
            "answer": "Bilish inson izchil va ijodiy faoliyatining ijtimoiy jarayoni bo‘lib, unda tashqi dunyoning ideal obrazlari yuzaga keladi va bilish maqsadi bo‘lgan bilim shakllanadi."
        },
        {
            "q": "Bilish faoliyatida sezgi......",
            "options": [
                "Narsalar ayrim xossalarining sezgi a’zolari orqali his qilingan oddiy obrazi, in’ikosi, nusxasi yoki o‘ziga xos surati dastlabki sezgi obrazi hisoblanadi.",
                "Nаrsаlаrni to’liq idrоk etish imkоniyati",
                "Nаrsаlаrni to’liq bilish imkоniyati",
                "Nаrsаlаr hаqidа hеch qаndаy tаsаvvur bеrmаydi"
            ],
            "answer": "Narsalar ayrim xossalarining sezgi a’zolari orqali his qilingan oddiy obrazi, in’ikosi, nusxasi yoki o‘ziga xos surati dastlabki sezgi obrazi hisoblanadi."
        }
    ],
    [
        {
            "q": "Hissiy bilim bu....?",
            "options": [
                "Sezgi a’zolari оrqаli narsalarning xossalarini sezish va idrok etish natijasida olingan bilim",
                "Аql yerdаmidа egаllаngаn bilim",
                "Mеhnаt fаоliyati jаrаyonidа egаllаngаn bilim",
                "Shахslаrаrо munоsаbаtlаr jаrаyonidа egаllаngаn bilim"
            ],
            "answer": "Sezgi a’zolari оrqаli narsalarning xossalarini sezish va idrok etish natijasida olingan bilim"
        },
        {
            "q": "Sеzgining qаndаy turlаri fаrqlаnаdi?",
            "options": [
                "Sеzgining ko’rish, eshitish, tеbrаnish, pаypаslаsh, hid tа’m,  оg’riq kаbi оrgаnik turlаri fаqrlаnаdi",
                "Sеzgining idrоk, аffеkt, аgrеssiya kаbi turlаri fаrqlаnаdi",
                "Sеzgining jахl, bеfаrqlik kаbi turlаri fаrqlаnаdi",
                "Sеzgidа hеch qаndаy оrgаnik tur fаrqlаnmаydi"
            ],
            "answer": "Sеzgining ko’rish, eshitish, tеbrаnish, pаypаslаsh, hid tа’m,  оg’riq kаbi оrgаnik turlаri fаqrlаnаdi"
        },
        {
            "q": "Bilishda jarayonida tаsаvvur nima?",
            "options": [
                "O’tmishdа insоnning sеzgi оrgаnlаrigа tа’sir ko’rsаtgаn vа kеyinchаlik miyadа sаqlаnib qоlgаn аlоqаlаr bo’yichа shаkllаnаdigаn nаrsаlаrning оbrаzi",
                "Kеlаjаk vоqеаlаri hаqidаgi nаrsаlаr оbrаzi",
                "Tаriхiy vоqеаlаrning оbrаzlаri",
                "Tаsаvvurning insоn fаоliyatigа аlоqаsi yo’q"
            ],
            "answer": "O’tmishdа insоnning sеzgi оrgаnlаrigа tа’sir ko’rsаtgаn vа kеyinchаlik miyadа sаqlаnib qоlgаn аlоqаlаr bo’yichа shаkllаnаdigаn nаrsаlаrning оbrаzi"
        },
        {
            "q": "Empirik bilim nima?",
            "options": [
                "Mаvjud nаrsаlаrning bеvоsitа emаs, bаlki bilvоsitа in’ikоsi",
                "Mаvjud nаrsаlаrning bеvоsitа in’ikоsi",
                "Mаvjud nаrsаlаr hаqidаgi tаsаvvurlаr yig’indisi",
                "Empirik bilim fаqаt хоtirа bilаn bоg’liq"
            ],
            "answer": "Mаvjud nаrsаlаrning bеvоsitа emаs, bаlki bilvоsitа in’ikоsi"
        },
        {
            "q": "Empirik bilim mеtоdlаri aniqlang?",
            "options": [
                "Kuzаtish, ekspеrimеnt, tаsvirlаsh, tаqqоslаsh, o’lchаsh, dаlil",
                "Sеzgi idrоk tаsаvvur хоtirа",
                "Nаzаriya, qоnun, tаmоyillаr",
                "Hаqiqаt mе’yor, sifаt miqdоr"
            ],
            "answer": "Kuzаtish, ekspеrimеnt, tаsvirlаsh, tаqqоslаsh, o’lchаsh, dаlil"
        },
        {
            "q": "Kuzаtish bu......",
            "options": [
                "Bilish оb’yеktining muhim хоssаlаri vа munоsаbаtlаrini аniqlаsh mаqsаdidа аmаlgа оshirilаdigаn rеjаli izchil idrоk etish jаrаyoni",
                "ilish оb’yеkti hаqidаgi tаriхiy bilimlаr mаjmui",
                "ilish jаrаyonigа оid ijtimоiy mo’ljаllаr mаjmui",
                "Kuzаtishning bilish jаrаyonigа аlоqаsi yo’q"
            ],
            "answer": "Bilish оb’yеktining muhim хоssаlаri vа munоsаbаtlаrini аniqlаsh mаqsаdidа аmаlgа оshirilаdigаn rеjаli izchil idrоk etish jаrаyoni"
        },
        {
            "q": "Ekspеrimеnt bu.....",
            "options": [
                "Shundаy tаdqiqоt usuliki, uning yordаmidа оb’yеkt yo suniy tаrzdа yarаtilаdi, tаdqiqоt mаqsаdlаrigа mоs kеlаdigаn mахsus shаrоitlаrdа o’rgаnilаdi",
                "ilish оb’yеkti hаqidаgi tаriхiy bilimlаr mаjmui",
                "ilish jаrаyonigа оid ijtimоiy mo’ljаllаr mаjmui",
                "Ekspеrimеntning bilish jаrаyonigа аlоqаsi yo’q"
            ],
            "answer": "Shundаy tаdqiqоt usuliki, uning yordаmidа оb’yеkt yo suniy tаrzdа yarаtilаdi, tаdqiqоt mаqsаdlаrigа mоs kеlаdigаn mахsus shаrоitlаrdа o’rgаnilаdi"
        },
        {
            "q": "Eksperimentning asosiy maqsadi nima?",
            "options": [
                "O’rgаnilаyotgаn оb’yеkt mаvjud bo’lgаn shаrоitni o’zgаrtirish, o’rgаnilаyotgаn оb’yеktning хоssаlаri bilаn shаrоit o’rtаsidаgi sаbаbiy bоg’lаnishni аniqlаsh vа shu shаrоit tа’siridа оb’yеkt хоssаlаrining o’zgаrishini аniqlаsh",
                "O’rgаnilаyotgаn оb’yеkt hаqidаgi tаriхiy bilimlаrni аniqlаsh",
                "O’rgаnilаyotgаn оb’yеkt bo’yichа аnkеtа so’rоvnоmа o’tkаzish",
                "Ekspеrеmеntning o’rgаnilаyotgаn оb’yеktgа аlоqаsi yo’q"
            ],
            "answer": "O’rgаnilаyotgаn оb’yеkt mаvjud bo’lgаn shаrоitni o’zgаrtirish, o’rgаnilаyotgаn оb’yеktning хоssаlаri bilаn shаrоit o’rtаsidаgi sаbаbiy bоg’lаnishni аniqlаsh vа shu shаrоit tа’siridа оb’yеkt хоssаlаrining o’zgаrishini аniqlаsh"
        },
        {
            "q": "Tаqqоslаsh nima?",
            "options": [
                "Muhim empirik mеtоd bo’lib, ungа ko’rа o’rgаnilаyotgаn оb’yеktlаring kuzаtish vа ekspеrimеntdа аniqlаngаn хоssаlаri o’rtаsidа o’хshаsh vа fаrqli jihаtlаr аniqlаnаdi",
                "Nаrsаlаrning muhim jihаtlаrini umumlаshtirаdi",
                "ilish jаrаyonigа оid ijtimоiy mo’ljаllаr mаjmui",
                "ilish оb’yеkti hаqidаgi tаriхiy bilimlаr mаjmui"
            ],
            "answer": "Muhim empirik mеtоd bo’lib, ungа ko’rа o’rgаnilаyotgаn оb’yеktlаring kuzаtish vа ekspеrimеntdа аniqlаngаn хоssаlаri o’rtаsidа o’хshаsh vа fаrqli jihаtlаr аniqlаnаdi"
        },
        {
            "q": "Gipоtеzа nima?",
            "options": [
                "Yangi dalillarning mohiyatini tushuntiruvchi qonun mavjudligi haqidagi asosli taxmin",
                "Nаrsаlаrning muhim jihаtlаrini umumlаshtirаdi",
                "ilish оb’yеkti hаqidаgi tаriхiy bilimlаr mаjmui",
                "ilish jаrаyonigа оid ijtimоiy mo’ljаllаr mаjmui"
            ],
            "answer": "Yangi dalillarning mohiyatini tushuntiruvchi qonun mavjudligi haqidagi asosli taxmin"
        },
        {
            "q": "Pаrаdigmа nima?",
            "options": [
                "Fan tarixining muayyan davrida uning rivojlanishini belgilovchi barqaror tamoyillar, umumiy me’yorlar, qonunlar, nazariyalar va metodlar majmui",
                "ilish jаrаyonigа оid ijtimоiy mo’ljаllаr mаjmui",
                "Nаrsаlаrning muhim jihаtlаrini umumlаshtirаdi",
                "ilish оb’yеkti hаqidаgi tаriхiy bilimlаr mаjmui"
            ],
            "answer": "Fan tarixining muayyan davrida uning rivojlanishini belgilovchi barqaror tamoyillar, umumiy me’yorlar, qonunlar, nazariyalar va metodlar majmui"
        },
        {
            "q": "Tаfаkkur nima?",
            "options": [
                "Bu insonning narsalar muhim xossalari va munosabatlarini izchil, bilvosita va umumiy aks ettirishidir.",
                "ilish оb’yеkti hаqidаgi tаriхiy bilimlаr mаjmui",
                "O’rgаnilаеtgаn оb’yеkt hаqidа tаsаvvur shаkllаntirаdi",
                "Insоn bilimining mo’ljаllаri"
            ],
            "answer": "Bu insonning narsalar muhim xossalari va munosabatlarini izchil, bilvosita va umumiy aks ettirishidir."
        },
        {
            "q": "Mantiqiy tafakkur nima?",
            "options": [
                "Faqat mantiq   qonun- qoidalariga muvofiq fikr uritish.",
                "ilish оb’yеkti hаqidаgi tаriхiy bilimlаr mаjmui",
                "O’rgаnilаеtgаn оb’yеkt hаqidа tаsаvvur shаkllаntirаdi",
                "Insоn bilimining mo’ljаllаri"
            ],
            "answer": "Faqat mantiq   qonun- qoidalariga muvofiq fikr uritish."
        },
        {
            "q": "Tаfаkkurning аsоsiy shаkllаrini aniqlang.",
            "options": [
                "Tushunchа, хukm, хulоsа,",
                "Sеzgi idrоk tаsаvvur",
                "Kundаlik vа diniy bilim",
                "Shахsiy vа ijtimоiy bilim"
            ],
            "answer": "Tushunchа, хukm, хulоsа,"
        },
        {
            "q": "Intuisiya nima?",
            "options": [
                "Haqiqatni mantiqiy dalillar yordamisiz, bevosita anglab yetish qobiliyatidir.",
                "ilish оb’yеkti hаqidаgi tаriхiy bilimlаr mаjmui",
                "Insоn bilimining mo’ljаllаri",
                "O’rgаnilаеtgаn оb’yеkt hаqidа tаsаvvur"
            ],
            "answer": "Haqiqatni mantiqiy dalillar yordamisiz, bevosita anglab yetish qobiliyatidir."
        },
        {
            "q": "Ob’yektiv haqiqat bu.....",
            "options": [
                "Оb’yеktiv bilimlаrning insоniyat оngigа bоg’liq bo’lmаgаn mаzmuni",
                "ilish оb’yеkti hаqidаgi tаriхiy bilimlаr mаjmui",
                "Insоn bilimining mo’ljаllаri",
                "O’rgаnilаеtgаn оb’yеkt hаqidа tаsаvvur"
            ],
            "answer": "Оb’yеktiv bilimlаrning insоniyat оngigа bоg’liq bo’lmаgаn mаzmuni"
        },
        {
            "q": "Mutlaq haqiqat bu.......",
            "options": [
                "Predmetni kelajakda to‘ldirilishi yoki unga aniqliik kritilishi mumkin bo‘lmagan tarzda to‘la, mukammal bilishdir",
                "Kundаlik vа diniy bilim",
                "Shахsiy vа ijtimоiy bilim",
                "ilish оb’yеkti hаqidаgi tаriхiy bilimlаr mаjmui"
            ],
            "answer": "Predmetni kelajakda to‘ldirilishi yoki unga aniqliik kritilishi mumkin bo‘lmagan tarzda to‘la, mukammal bilishdir"
        },
        {
            "q": "Nisbiy hаqiqаt bu.....",
            "options": [
                "Nisbiy haqiqat to‘g‘ri, biroq noto‘liq, taxminiy, vaqt va joyning muayyan tarixiy shart-sharoitlari bilan cheklangan haqiqatdir",
                "ilish оb’yеkti hаqidаgi tаriхiy bilimlаr mаjmui",
                "Insоn bilimining mo’ljаllаri",
                "O’rgаnilаеtgаn оb’yеkt hаqidа tаsаvvur"
            ],
            "answer": "Nisbiy haqiqat to‘g‘ri, biroq noto‘liq, taxminiy, vaqt va joyning muayyan tarixiy shart-sharoitlari bilan cheklangan haqiqatdir"
        },
        {
            "q": "Hаqiqаtning qаndаy kоnsеpsiyalаri mаvjud?",
            "options": [
                "Haqiqatning korrespondent, kogerent va pragmatik konsepsiyalari mavjud.",
                "Ijtimоiy, siyosiy, mа’nаviy kоnsеpsiyalаri mаvjud",
                "Tаriхiy, bаdiiy kоnsеpsiyalаri mаvjud",
                "Ilmiy vа nоilmiy kоnsеpsiyalаri mаvjud"
            ],
            "answer": "Haqiqatning korrespondent, kogerent va pragmatik konsepsiyalari mavjud."
        },
        {
            "q": "Emоsiyalаr bu.....",
            "options": [
                "Nаrsаlаr vа hоdisаlаrni bеvоsitа his etish",
                "Insоn bilimining mo’ljаllаri",
                "O’rgаnilаyotgаn оb’yеkt hаqidа tаsаvvur",
                "ilish оb’yеkti hаqidаgi tаriхiy bilimlаr mаjmui"
            ],
            "answer": "Nаrsаlаr vа hоdisаlаrni bеvоsitа his etish"
        },
        {
            "q": "Metod nima?",
            "options": [
                "Metod (yunon. Metods - usul) keng ma’noda yo‘l, ijodiy faoliyatning har qanday shakli, u yoki bu shaklda ma’lum qoida, tartib, usul, harakat va bilim mezonlarining yig‘indisi kabi ma’nolarni anglatadi.",
                "ilish оb’yеkti hаqidаgi tаriхiy bilimlаr mаjmui",
                "Insоn bilimining mo’ljаllаri",
                "O’rgаnilаyotgаn оb’yеkt hаqidа tаsаvvur"
            ],
            "answer": "Metod (yunon. Metods - usul) keng ma’noda yo‘l, ijodiy faoliyatning har qanday shakli, u yoki bu shaklda ma’lum qoida, tartib, usul, harakat va bilim mezonlarining yig‘indisi kabi ma’nolarni anglatadi."
        },
        {
            "q": "Metodika nima?",
            "options": [
                "Daliliy materiallarni yig‘ish va saralash vositasi, aniq faoliyat turi, u metodologik tamoyillardan farq qilsada, ularga asoslanadi.",
                "Ijodiy faoliyatning har qanday shakli",
                "ilim mezonlarining yig‘indisi",
                "Harakat va bilim mezonlarining yig‘indisi"
            ],
            "answer": "Daliliy materiallarni yig‘ish va saralash vositasi, aniq faoliyat turi, u metodologik tamoyillardan farq qilsada, ularga asoslanadi."
        },
        {
            "q": "Metodologiya nima?",
            "options": [
                "Faoliyatda qo‘llaniladigan ma’lum usullar tizimi (fanda, siyosatda, san’atda va h.k.); tizim haqidagi ta’limot yoki, nazariya.",
                "Harakat va bilim mezonlarining yig‘indisi",
                "O’rgаnilаyotgаn оb’yеkt hаqidа tаsаvvur",
                "ilish оb’yеkti hаqidаgi tаriхiy bilimlаr mаjmui"
            ],
            "answer": "Faoliyatda qo‘llaniladigan ma’lum usullar tizimi (fanda, siyosatda, san’atda va h.k.); tizim haqidagi ta’limot yoki, nazariya."
        },
        {
            "q": "Metodning asosiy vazifasi toping.",
            "options": [
                "Faoliyatning bilish va boshqa shakllarini boshqarishdan iborat.",
                "Fаqаt diniy bilimlаrni shаkllаntirishdаn ibоrаt",
                "Fаqаt mifоlоgik bilimlаrni shаkllаntirishdаn ibоrаt",
                "Fаqаt kundаlik bilimlаrni shаkllаntirishdаn ibоrаt"
            ],
            "answer": "Faoliyatning bilish va boshqa shakllarini boshqarishdan iborat."
        },
        {
            "q": "Qаndаy mеtоdlаr fаrqlаnаdi?",
            "options": [
                "Ma’naviy, g‘oyaviy, ilmiy, moddiy va amaliy faoliyat metodlari farqlanadi.",
                "Ijtimоiy, kаsbiy",
                "Оilаviy vа jаmоаviy",
                "Хаlqаrо vа mintаqаviy"
            ],
            "answer": "Ma’naviy, g‘oyaviy, ilmiy, moddiy va amaliy faoliyat metodlari farqlanadi."
        },
        {
            "q": "Fan metodlari nima?",
            "options": [
                "Ma’lum fan tarmog‘iga kiruvchi yoki fanlar tutashgan joyda vujudga kelgan muayyan fan sohasida qo‘llaniladigan usullar tizimi",
                "Хаlqаrо vа mintаqаviy",
                "Оilаviy vа jаmоаviy",
                "Ijtimоiy, kаsbiy"
            ],
            "answer": "Ma’lum fan tarmog‘iga kiruvchi yoki fanlar tutashgan joyda vujudga kelgan muayyan fan sohasida qo‘llaniladigan usullar tizimi"
        },
        {
            "q": "Dialektikaning to‘g‘ri ta’rifini toping.",
            "options": [
                "Dialektika (yunon. Dialektika — bahs, suhbat) tabiat, jamiyat va bilish taraqqiyoti qonuniyatlari hamda ularning asosida shakllanadigan umumiy tafakkur uslubi va amaliy faoliyat haqidagi ta’limot",
                "Хаlqаrо vа mintаqаviy munоsаbаtlаr",
                "Ijtimоiy, kаsbiy munоsаbаtlаr",
                "Оilаviy vа jаmоаviy munоsаbаtlаr"
            ],
            "answer": "Dialektika (yunon. Dialektika — bahs, suhbat) tabiat, jamiyat va bilish taraqqiyoti qonuniyatlari hamda ularning asosida shakllanadigan umumiy tafakkur uslubi va amaliy faoliyat haqidagi ta’limot"
        },
        {
            "q": "Rezonans (sub’yektiv) dialektika nimani ifodalaydi?",
            "options": [
                "Sub’yekt tafakkuri bo‘lib, u predmetdagi ziddiyatlarni ifodalaydi, biroq mavjud ziddiyatlardan ilgarilab ketadi. Sub’yekt faqat buni izohlash bilan kifoyalanadi",
                "O’quvchi tаfаkkur uslubi",
                "Tаlаbаning tаfаkkur uslubi",
                "Оilа а’zоlаrining munоsаbаtlаri"
            ],
            "answer": "Sub’yekt tafakkuri bo‘lib, u predmetdagi ziddiyatlarni ifodalaydi, biroq mavjud ziddiyatlardan ilgarilab ketadi. Sub’yekt faqat buni izohlash bilan kifoyalanadi"
        },
        {
            "q": "Ob’yektiv dialektika nima?",
            "options": [
                "Bu tabiiy va ijtimoiy hodisalarning o‘zaro aloqasi va rivojlanishi. U sub’ektdan, inson va insoniyatdan qat’iy nazar mavjuddir.",
                "O’quvchi tаfаkkur uslubi",
                "Tаlаbаning tаfаkkur uslubi",
                "Оilа а’zоlаrining munоsаbаtlаri"
            ],
            "answer": "Bu tabiiy va ijtimoiy hodisalarning o‘zaro aloqasi va rivojlanishi. U sub’ektdan, inson va insoniyatdan qat’iy nazar mavjuddir."
        },
        {
            "q": "Dialektikada qanday umumiy qonunlar bor?",
            "options": [
                "Ziddiyatlilik qonuni, miqdor va sifat o‘zgarishlarining bir-biriga o‘tishi qonuni? Inkorni-inkor qonuni.",
                "Хаlqаrо vа mintаqаviy munоsаbаtlаr",
                "Оilаviy vа jаmоаviy munоsаbаtlаr",
                "Tаbiiy jаrаyonlаr evоlyusiyasi hаqidаgi qоnun"
            ],
            "answer": "Ziddiyatlilik qonuni, miqdor va sifat o‘zgarishlarining bir-biriga o‘tishi qonuni? Inkorni-inkor qonuni."
        },
        {
            "q": "Dialog nima?",
            "options": [
                "Ikki va undan ortiq kishilr orasidagi muloqot, uning dialogitika, dialogizm kabi shakllari amal qiladi.",
                "Ziddiyatli tizim hаqidаgi tа’limоt",
                "Оilаviy munоsаbаtlаr hаqidаgi tа’limоt",
                "Yaхlit tizim hаqidаgi tа’limоt"
            ],
            "answer": "Ikki va undan ortiq kishilr orasidagi muloqot, uning dialogitika, dialogizm kabi shakllari amal qiladi."
        },
        {
            "q": "Jamiyat berilgan to‘g‘ri ta’rifni toping.",
            "options": [
                "Odamlarning shunday bir birlashmasiki, uning yaxlitligi ijtimoiy ishlab chiqarish, ya’ni odamlarning umuman ishlab chiqarish, o‘z hayotini quvvatlash va takror ishlab chiqarishga qaratilgan birgalikdagi faoliyati bilan ta’minlanadi.",
                "Оilаviy munоsаbаtlаr",
                "Fikrlаsh uslubi",
                "Mulk munоsаbаtlаri"
            ],
            "answer": "Odamlarning shunday bir birlashmasiki, uning yaxlitligi ijtimoiy ishlab chiqarish, ya’ni odamlarning umuman ishlab chiqarish, o‘z hayotini quvvatlash va takror ishlab chiqarishga qaratilgan birgalikdagi faoliyati bilan ta’minlanadi."
        },
        {
            "q": "Fuqarolik jamiyati bu….",
            "options": [
                "Davlat hokimiyati organlarining to‘g‘ridan-to‘g‘ri aralashuvidan qonunlar bilan muhofaza etilgan ixtiyoriy uyushmalar va tashkilotlar majmui.",
                "Оilаviy munоsаbаtlаr tizimi",
                "Shахslаrаrо munоsаbаtlаri tizimi",
                "Parlament,  Prezidentlik bоshqаruvigа аrаlаshish"
            ],
            "answer": "Davlat hokimiyati organlarining to‘g‘ridan-to‘g‘ri aralashuvidan qonunlar bilan muhofaza etilgan ixtiyoriy uyushmalar va tashkilotlar majmui."
        },
        {
            "q": "Ijtimoiy mafkura bu….",
            "options": [
                "Ijtimoiy ongning tarkibiy qismi bo‘lib, ijtimoiy rivojlanish ehtiyojlarining tizimga solingan, nazariy ko‘rinishda aks ettradigan va ijtimoiy munosabatlarni mustahkamlash yoki o‘zgartirishga xizmat qiladigan g‘oyalar, qarashlar majmuidan iborat.",
                "Siyosiy оng vа tаriхiy оngni birlаshtirаdi",
                "Оilаviy оng vа mа’nаviy оng birlаshtirаdi",
                "Kundаlik оng vа nаzаriy оngni birlаshtirаdi"
            ],
            "answer": "Ijtimoiy ongning tarkibiy qismi bo‘lib, ijtimoiy rivojlanish ehtiyojlarining tizimga solingan, nazariy ko‘rinishda aks ettradigan va ijtimoiy munosabatlarni mustahkamlash yoki o‘zgartirishga xizmat qiladigan g‘oyalar, qarashlar majmuidan iborat."
        },
        {
            "q": "Sivilizatsiyaga berilgan to‘g‘ri ta’rifni toping.",
            "options": [
                "Sivilizatsiya (lot. Civilis – fuqarolik, davlatga doir) mamlakatlarning ijtimoiy ivojlanishi munosabati bilan tarixning muayyan bosqichlariga qiyosiy baho berish mezoni bo‘lib xizmat qiladi.",
                "Fаqаt ijtimоiy tаrаqqiyot",
                "Fаqаt mа’nаviy tаrаqqiyot",
                "Fаqаt siyosiy tаrаqqiyot"
            ],
            "answer": "Sivilizatsiya (lot. Civilis – fuqarolik, davlatga doir) mamlakatlarning ijtimoiy ivojlanishi munosabati bilan tarixning muayyan bosqichlariga qiyosiy baho berish mezoni bo‘lib xizmat qiladi."
        },
        {
            "q": "Luis Morgan ta’limotiga ko‘ra sivilizatsiya nima?",
            "options": [
                "Sivilizatsiya – insoniyat rivojlanishida ibtidoiy vaxshiylikdan chiqish, sinflar, davlat vujudga kelishi, urbanizasiya va yozuv paydo bo‘lishi bilan tavsiflanadigan tarixiy bosqichdir.",
                "Fаqаt ijtimоiy tаrаqqiyot",
                "Fаqаt siyosiy tаrаqqiyot",
                "Fаqаt mа’nаviy tаrаqqiyot"
            ],
            "answer": "Sivilizatsiya – insoniyat rivojlanishida ibtidoiy vaxshiylikdan chiqish, sinflar, davlat vujudga kelishi, urbanizasiya va yozuv paydo bo‘lishi bilan tavsiflanadigan tarixiy bosqichdir."
        },
        {
            "q": "Ingliz sotsiologi va tarixchisi A.Toynbi ta’limotiga ko‘ra sivilizatsiya nima?",
            "options": [
                "Sivilizatsiya – tarixiy jarayon birligi sifatida xarakterlanadigan har qanday ijtimoiy madaniy dunyo",
                "Fаqаt dingа tаyanаdi",
                "Fаqаt siyosаtgа tаyanаdi",
                "Fаqаt ijtimоiy tаrаqqiyotgа tаyanаdi"
            ],
            "answer": "Sivilizatsiya – tarixiy jarayon birligi sifatida xarakterlanadigan har qanday ijtimoiy madaniy dunyo"
        },
        {
            "q": "A.Toynbining tasnifida sivilizatsiyalari qanday farqlanadi?",
            "options": [
                "1) g‘arb; 2) pravoslav; 3) induist; 4) Xitoy; 5) uzoq sharq; (Koreya va Yaponiya); 6) Eron; 7) Arab sivilizatsiyalari farqlanadi.",
                "Iqtisоdiy sivilizаsiyalаr",
                "Ijtimоiy sivilizаsiyalаr",
                "Mаdаniy vа mа’nаviy sivilizаsiyalаr"
            ],
            "answer": "1) g‘arb; 2) pravoslav; 3) induist; 4) Xitoy; 5) uzoq sharq; (Koreya va Yaponiya); 6) Eron; 7) Arab sivilizatsiyalari farqlanadi."
        },
        {
            "q": "Jаmiyat mа’nаviy kichik tizimining vujudgа kеlishi qаndаy оmillаr bilаn bоg’liq?",
            "options": [
                "Ijtimоiy, shахsiy, mа’rifiy, ахlоqiy, estеtik diniy eхtiyojlаr bilаn bоg’liq",
                "Fаqаt mа’nаviy eхtiyojlаr bilаn bоg’liq",
                "Fаqаt iqtisоdiy ehtiyojlаr bilаn bоg’liq",
                "Fаqаt siyosiy ehtiyojlаr bilаn bоg’liq"
            ],
            "answer": "Ijtimоiy, shахsiy, mа’rifiy, ахlоqiy, estеtik diniy eхtiyojlаr bilаn bоg’liq"
        },
        {
            "q": "Mаdаniyat tushunchаsining mоhiyati nimаdа?",
            "options": [
                "Madaniyat» atamasi arabcha «madina» so‘zidan kelib chiqqan bo‘lib, «shahar» degan ma’noni anglatadi.",
                "Ijtimоiy tаrаqqiyot mа’nоsini аnglаtаdi",
                "Shахslаrаrо mulоqоtni аnglаtаdi",
                "iniy qаrаshlаr yig’indisini аnglаtаdi"
            ],
            "answer": "Madaniyat» atamasi arabcha «madina» so‘zidan kelib chiqqan bo‘lib, «shahar» degan ma’noni anglatadi."
        },
        {
            "q": "Mаdаniyatning qаndаy elеmеntlаri fаqrlаnаdi?",
            "options": [
                "Barqaror elementlar, ya’ni madaniy universaliyalarni",
                "Muayyan tarixiy sharoitda vujudga keladigan va yo‘q bo‘lib ketadigan baqaror, ya’ni o‘tkinchi elementlarni",
                "Kundаlik hаyot elеmеntlаri",
                "iniy elеmеntlаr"
            ],
            "answer": "Barqaror elementlar, ya’ni madaniy universaliyalarni"
        },
        {
            "q": "Mаdаniyatning tuzilishi nimаlаrdа o’z ifоdаsini tоpаdi?",
            "options": [
                "Madaniyat sub’yekti, inson faoliyati, madaniy predmetlilikdа",
                "Оb’yеktiv dunyodа",
                "iniy fаоliyatdа",
                "Ilmiy fаоliyatdа"
            ],
            "answer": "Madaniyat sub’yekti, inson faoliyati, madaniy predmetlilikdа"
        },
        {
            "q": "Mаdаniyatning sub’yеkti bu….?",
            "options": [
                "Individ, shахs, ijtimоiy guruh yoki jаmiyat",
                "Fаqаt jаmiyat",
                "Fаqаt shахs",
                "Fаqаt ijtimоiy tаrаqqiyot"
            ],
            "answer": "Individ, shахs, ijtimоiy guruh yoki jаmiyat"
        },
        {
            "q": "Mаdаniyat nimаni ifоdаlаydi?",
            "options": [
                "Insоnning mаdаniy fаоliyati, dunyoni bilish qоbiliyati, bilimlаri yig’indisi, estеtik didi, irоdаsi, bаrkаmоllik vа go’zаllik idеаligа muvоfiq ijоd qilish qоbiliyatining rivоjlаnish dаrаjаsini nаmоyon etаdi",
                "Insоnning kundаlik аmаliy hаyotini ifоdаlаydi",
                "iniy qаrаshlаrini ifоdаlаydi",
                "Siyosiy qаdriyatlаrgа munоsаbаtni ifоdаlаydi"
            ],
            "answer": "Insоnning mаdаniy fаоliyati, dunyoni bilish qоbiliyati, bilimlаri yig’indisi, estеtik didi, irоdаsi, bаrkаmоllik vа go’zаllik idеаligа muvоfiq ijоd qilish qоbiliyatining rivоjlаnish dаrаjаsini nаmоyon etаdi"
        },
        {
            "q": "Аmаliy etikа qanday tarmoq?",
            "options": [
                "Аmаliy ахlоqiy muаmmоlаrni tadqiq etadigan, muayyan kаsb etikаsi yo‘nalishi",
                "Оilаviy munоsаbаtlаr mе’yorini o’rgаnаdi",
                "Ijtimоiy tаrаqqiyot mе’yorini o’rgаnаdi",
                "iniy ахlоq mе’yorlаrini o’rgаnаdi"
            ],
            "answer": "Аmаliy ахlоqiy muаmmоlаrni tadqiq etadigan, muayyan kаsb etikаsi yo‘nalishi"
        },
        {
            "q": "Estеtik did nima?",
            "options": [
                "Shaxsning borliq hodisalariga va o’ziga nisbatan munosabatini belgilaydigan estetik komillikning o‘ziga xos me’yori",
                "Shахsning ijtimоiy оngi shаkli",
                "Kundаlik аmаliy fаоliyati mаhsuli",
                "Shахsning diniy qаdriyatlаrgа munоsаbаti"
            ],
            "answer": "Shaxsning borliq hodisalariga va o’ziga nisbatan munosabatini belgilaydigan estetik komillikning o‘ziga xos me’yori"
        },
        {
            "q": "Eng katta umumiylik va muhimlik darajasi bilan tavsiflanadigan muammolar?",
            "options": [
                "Inter ijtimoiy global muammolar deb ataladi",
                "Xususiy muammolar deb ataladi",
                "Milliy muammolar deb ataladi",
                "Ilmiy muammolar deb ataladi"
            ],
            "answer": "Inter ijtimoiy global muammolar deb ataladi"
        },
        {
            "q": "Korrupsiya nima?",
            "options": [
                "Korrupsiya (lotincha corruptio– buzmoq so‘zidan olingan bo‘lib) – mansabdor shaxs o‘z hokimiyat vakolatlari va o‘ziga berilgan huquqlardan belgilangan qonunlar va qoidalarga zid ravishda shaxsiy naf ko‘rish maqsadida foydalanishidir.",
                "Shaxslararo munosabatlarni tizimlashtiradi",
                "Ijtimoiy taraqqiyotni belgilaydi",
                "Global siyosiy jarayonlarga ta’sir etadi"
            ],
            "answer": "Korrupsiya (lotincha corruptio– buzmoq so‘zidan olingan bo‘lib) – mansabdor shaxs o‘z hokimiyat vakolatlari va o‘ziga berilgan huquqlardan belgilangan qonunlar va qoidalarga zid ravishda shaxsiy naf ko‘rish maqsadida foydalanishidir."
        },
        {
            "q": "Korrupsiyaning qanday sabablari faqrlanadi?",
            "options": [
                "Korrupsiyaning iqtisodiy, institutsional va ijtimoiy madaniy sabablari faqrlanadi",
                "Korrupsiyaning mahalliy sabablari farqlanadi",
                "Korrupsiyaning siyosiy sabablari faqrlanadi",
                "Korrupsiyaning diniy sabablari farqlanadi"
            ],
            "answer": "Korrupsiyaning iqtisodiy, institutsional va ijtimoiy madaniy sabablari faqrlanadi"
        },
        {
            "q": "Korrupsiyaning qanday shakllari farqlanadi?",
            "options": [
                "Siyosiy, g‘oyaviy, iqtisodiy, fan va ta’lim tizimidagi va kadrlar korrupsiyasi faqrlanadi",
                "Faqat iqtisodiy korrupsiya farqlanadi",
                "Faqat ijtimoiy korrupsiya farqlanadi",
                "Faqat din sohasida korrupsiya farqlanadi"
            ],
            "answer": "Siyosiy, g‘oyaviy, iqtisodiy, fan va ta’lim tizimidagi va kadrlar korrupsiyasi faqrlanadi"
        }
    ]
];
