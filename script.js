const products = [
    // ПОДУШКИ
    {
        id: 1,
        name: "Подушка — детская",
        price: 10900,
        category: "Подушки",
        description: 'Подушка — детская. Премиальное качество класса люкс. Полностью гипоаллергенные гигиеничные материалы. <a href="https://l.kaspi.kz/shop/7RfqX6VHM7v6xRA?sessionId=6aba73f8-a447-413b-a9b3-a20f88ecc1591795772632" target="_blank">Kaspi</a>',
        size: "50×70×10см",
        color: "белый",
        icon: "fas fa-pillow",
        image: "images/подушкад.jfif"
    },
    {
        id: 2,
        name: "Подушка — шелкопряд",
        price: 14900,
        category: "Подушки",
        description: 'Подушка — шелкопряд, 1300 г. Премиальное качество класса люкс. Обладает естественной гипоаллергенностью. <a href="https://kaspi.kz/shop/p/podushka-zami-home-mozhno-k-podushke-dobrat-navolochku-shelk-shelkoprjada-50x70-sm-187046788/?m=30310525&ms=true" target="_blank">Kaspi</a>',
        size: "50x70x10см",
        color: "белый",
        icon: "fas fa-pillow",
        image: "images/подушкаш.jpg"
    },
    {
        id: 3,
        name: "Подушка — ортопедическая Memory",
        price: 16500,
        category: "Подушки",
        description: 'Премиальное качество класса люкс. Материалы гипоаллергенны, препятствуют скоплению пыли. соответствует строгому международному стандарту безопасности текстиля GB18401-2010 Class A. <a href="https://l.kaspi.kz/shop/9VEiS6diZRuWPeg?sessionId=6aba73f8-a447-413b-a9b3-a20f88ecc1591795772632" target="_blank">Kaspi</a>',
        size: "50x70х10см",
        color: "белый",
        icon: "fas fa-pillow",
        image: "images/подушкам.jpg",
        images: [
            "images/подушкам.jpg",
            "images/подушкам2.jpg",
        ]
    },
    {
        id: 4,
        name: "Подушка — с полимерными массажными шариками",
        price: 12750,
        category: "Подушки",
        description: '100% хлопок. <a href="https://l.kaspi.kz/shop/9bx6c7wTUrvQkDF?sessionId=6aba73f8-a447-413b-a9b3-a20f88ecc1591795775025" target="_blank">Kaspi</a>',
        size: "50x70х10см",
        color: "белый",
        icon: "fas fa-pillow",
        image: "images/подушкаша.jpg",
        images: [
            "images/подушкаша.jpg",
            "images/подушкаша2.jpg",
        ]
    },
    {
        id: 5,
        name: "Подушка — с гречневой шелухой и лавандой",
        price: 13500,
        category: "Подушки",
        description: 'Подушка — с гречневой шелухой и лавандой. Премиальное качество класса люкс. Натуральные гипоаллергенные компоненты для здорового сна. <a href="" target="_blank">Kaspi</a>',
        size: "50x70х15см",
        color: "фиолетовый и белый",
        icon: "fas fa-pillow",
        image: "images/подушкаг.png",
        images: [
            "images/подушкаг.jpg",
            "images/подушкаг2.jpg",
        ]
    },
    {
        id: 6,
        name: "Подушка — с гречневой шелухой",
        price: 12500,
        category: "Подушки",
        description: 'Подушка — с гречневой шелухой. Премиальное качество класса люкс. Натуральные гипоаллергенные компоненты для здорового сна. <a href="https://l.kaspi.kz/shop/AU8JhE1N9uppt8N?sessionId=6aba73f8-a447-413b-a9b3-a20f88ecc1591795772632" target="_blank">Kaspi</a>',
        size: "50x70см",
        color: "белый",
        icon: "fas fa-pillow",
        image: "images/pillow-massage.jpg",
        images: [
            "images/подушкагр.jpg",
            "images/подушкагр2.jpg",
            "images/подушкагр3.jpg"
        ]
    },
    {
        id: 7,
        name: "Подушка — ортопедическая из вискозы",
        price: 11500,
        category: "Подушки",
        description: 'Подушка — ортопедическая из вискозы. Премиальное качество класса люкс, полностью гипоаллергенный эко-состав. <a href="https://l.kaspi.kz/shop/zBzNMe4upQzUYme?sessionId=6aba73f8-a447-413b-a9b3-a20f88ecc1591795772632" target="_blank">Kaspi</a>',
        size: "50x70см",
        color: "серый, белый",
        icon: "fas fa-pillow",
        image: "images/подушкав.jpg",
        images: [
            "images/подушкав1.jfif",
            "images/подушкав.jfif",
        ]
    },
    {
        id: 8,
        name: "Подушка — зонтик",
        price: 11500,
        category: "Подушки",
        description: 'Подушка — уникальная стёжка «Зонтик» с объёмными геометрическими складками. <a href="https://l.kaspi.kz/shop/ErfLEh4b4n4wiCR?sessionId=6aba73f8-a447-413b-a9b3-a20f88ecc1591795772632" target="_blank">Kaspi</a>',
        size: "50x70см",
        color: "белый",
        icon: "fas fa-pillow",
        image: "images/подушказ.jpg",
        images: [
            "images/подушказ.jpg",
        ]
    },
    {
        id: 9,
        name: "Подушка — Пингвин",
        price: 13500,
        category: "Подушки",
        description: 'комфортная анатомическая подушка с чехлом из вискозы. Мягкая и приятная на ощупь ткань обеспечивает комфорт во время сна. <a href="https://l.kaspi.kz/shop/6QmFiHCPtchY3io?sessionId=6aba73f8-a447-413b-a9b3-a20f88ecc1591795772632" target="_blank">Kaspi</a>',
        size: "50×70см",
        color: "фиолетовый и серый",
        icon: "fas fa-pillow",
        image: "images/подушкап.jfif",
        images: [
            "images/подушкап.jfif",
            "images/подушкап1.jfif",
        ]
    },
    {
        id: 10,
        name: "Ортопедическая подушка Снежинка",
        price: 11850,
        category: "Подушки",
        description: ':«Снежинка» жастығы, 50 × 70 см Күнделікті ұйқы мен демалысқа арналған ақ жастық. Тысы қолға жағымды, ұсақ бедерлі жұмсақ вискоза матадан тігілген. Бір бұрышына «Снежинка» өрнегі кестеленген, ал жиектері көмкерілген.. <a href="https://l.kaspi.kz/shop/mQnEB2HupKiHAtQ?sessionId=6aba73f8-a447-413b-a9b3-a20f88ecc1591795772632" target="_blank">Kaspi</a>',
        size: "50×70см",
        color: "белый",
        icon: "fas fa-pillow",
        image: "images/подушкас.jpg",
        images: [
            "images/подушкас.jpg",
        ]
    },
    {
        id: 11,
        name: "Наволочка-350 нитей",
        price: 1,
        category: "Подушки",
        description: ':Стильные и практичные наволочки, которые подарят комфорт и уют вашей спальне. Изготовлены из приятного на ощупь материала, обеспечивают комфорт во время сна и защищают подушки от загрязнений. Легко сочетаются с постельным бельём и помогают создать аккуратный и красивый интерьер. <a href="" target="_blank">Kaspi</a>',
        size: "50×70см",
        color: "фиолетовый и серый",
        icon: "fas fa-pillow",
        image: "images/нав.png",
        images: [
            "images/нав.jpg",
            "images/нав2.jpg",
        ]
    },

    // ПОЛОТЕНЦА
    {
        id: 12,
        name: "Полотенеце банное",
        price: 8900,
        category: "Полотенца",
        description: 'Премиальное качество класса люкс. Ткань полностью гипоаллергенна, приятная и мягкая к телу, отлично пропускает воздух и моментально впитывает влагу. Быстро высыхает. Не линяет. <a href="https://l.kaspi.kz/shop/BaEnay2f1NSKX1r?sessionId=6aba73f8-a447-413b-a9b3-a20f88ecc1591795772632" target="_blank">Kaspi</a>',
        size: "90×155см",
        color: "белый с коричневой коймой,сиреневое, синее, чёрное, серое",
        icon: "fas fa-bath",
        image: "images/полотенцоб.jpg",
        images: [
            "images/полотенцоб.jpg",
            "images/полотенцоб2.jpg",
            "images/полотенцоб3.jpg",
            "images/полотенцоб4.jpg",
            "images/полотенцоб5.jpg",
            "images/полотенцоб6.jpg",
        ]
    },
    {
        id: 13,
        name: "Полотенеце лицевое",
        price: 2100,
        category: "Полотенца",
        description: 'Премиальное качество класса люкс. Ткань полностью гипоаллергенна, приятная и мягкая к телу, отлично пропускает воздух и моментально впитывает влагу. Быстро высыхает. Не линяет. <a href="https://l.kaspi.kz/shop/4fCYwTRq3rnYPga?sessionId=6aba73f8-a447-413b-a9b3-a20f88ecc1591795772632" target="_blank">Kaspi</a>',
        size: "45×85см",
        color: "синий, черный, фиолетовый, белое, серое",
        icon: "fas fa-bath",
        image: "images/полотенцоли.jpg",
        images: [
            "images/полотенцоли.jpg",
            "images/полотенцоли2.jpg",
            "images/полотенцоли3.jpg",
            "images/полотенцоли4.jpg",
            "images/полотенцоли5.jpg",
            "images/полотенцоли6.jpg",
        ]
    },
    {
        id: 14,
        name: "Полотенце Гигиеническое",
        price: 1100,
        category: "Полотенца",
        description: '100% хлопок, белый с коричневой коймой.  <a href="https://l.kaspi.kz/shop/E6b4kWwv32tm5Qt?sessionId=6aba73f8-a447-413b-a9b3-a20f88ecc1591795772632" target="_blank">Kaspi</a>',
        size: "30×30 см",
        color: "белый с коричневой коймой",
        icon: "fas fa-bath",
        image: "images/полотенцогг.jpg"
    },
    {
        id: 15,
        name: "Цветные комплекты полотенец",
        price: 11900,
        category: "Полотенца",
        description: 'Премиальный комплект полотенец класса люкс, изготовленный из 100% натурального хлопка. Ткань мягкая и приятная к телу, хорошо пропускает воздух и быстро впитывает влагу. <a href="https://l.kaspi.kz/shop/4BEfGiGkKnpLQMY?sessionId=6aba73f8-a447-413b-a9b3-a20f88ecc1591795772632" target="_blank">Kaspi</a>',
        size: "90×155, 45×85, 30×30см",
        color: "белый с коричневой коймой",
        icon: "fas fa-bath",
        image: "images/полотенцок.jpg",
        images: [
            "images/полотенцок.jpg",
            "images/полотенцок2.jpg",
            "images/полотенцок3.jpg",
            "images/полотенцок4.jpg"
        ]
    },
    {
        id: 16,
        name: "Полотенеце для ног",
        price: 2850,
        category: "Полотенца",
        description: 'Премиальное качество класса люкс. Ткань полностью гипоаллергенна, приятная и мягкая к телу, отлично пропускает воздух и моментально впитывает влагу. Быстро высыхает. Не линяет. <a href="https://l.kaspi.kz/shop/2FWet5TGh1RZyVy?sessionId=6aba73f8-a447-413b-a9b3-a20f88ecc1591795772632" target="_blank">Kaspi</a>',
        size: "76×54, 80×53см ",
        color: "белый, серый",
        icon: "fas fa-bath",
        image: "images/ног.jpg",
        images: [
            "images/ног2.jpg",
            "images/ног3.jpg",
            "images/ног3.jpg",
        ]
    },

    // ХАЛАТЫ
    {
        id: 17,
        name: "Халат вафельный(Взрослые)",
        price: 15000,
        category: "Халаты",
        description: 'Вафельный с крупной вафлей, 100% хлопка.  <a href="https://l.kaspi.kz/shop/79c2LRnMD3h66Q5?sessionId=6aba73f8-a447-413b-a9b3-a20f88ecc1591795775025" target="_blank">Kaspi</a>',
        size: "М-5XL",
        color: "белый, персиковый, голубой, серый",
        icon: "fas fa-tshirt",
        image: "images/халаты1.jpg",
        images: [
            "images/халаты.jpg",
            "images/халаты2.jpg",
            "images/халаты3.jpg"
        ]
    },
    {
        id: 18,
        name: "Чалма банная вафельная из 100% хлопка",
        price: 1590,
        category: "Халаты",
        description: 'Удобно фиксируется на голове с помощью пуговицы.  <a href="https://l.kaspi.kz/shop/Fyn2hWRT3N3BVw6?sessionId=6aba73f8-a447-413b-a9b3-a20f88ecc1591795775025" target="_blank">Kaspi</a>',
        size: "L, XL",
        color: "белый, персиковая, голубая, серая",
        icon: "fas fa-tshirt",
        images: [
            "images/шапка2.jpg",
            "images/шапка3.jpg"
        ]
    },
    {
        id: 19,
        name: "Халат детский («Панда»)",
        price: 12500,
        category: "Халаты",
        description: 'Махровый детский халат с пандой на капюшоне. Премиальное качество класса люкс. <a href="https://l.kaspi.kz/shop/F6P1b4CCcTGdbF9?sessionId=6aba73f8-a447-413b-a9b3-a20f88ecc1591795775025" target="_blank">Kaspi</a>',
        size: "S, M",
        color: "белый, персиковая, голубая, серая",
        icon: "fas fa-tshirt",
        image: "images/халатд.jpg",
        images: [
            "images/халатд.jpg",
            "images/халатд2.jpg"
        ]
    },
    // КОВРИКИ
    {
        id: 39,
        name: "Коврик для ванной махровый",
        price: 9000,
        category: "Коврики",
        description: 'Коврик для ванной белый, махровый"<a href="https://l.kaspi.kz/shop/GgwKdQ7EmWG7HkU?sessionId=6aba73f8-a447-413b-a9b3-a20f88ecc1591795775025" target="_blank">Kaspi</a>',
        size: "60×90 см",
        color: "белый",
        icon: "fas fa-rug",
        image: "images/ков.jpg",
         images: [
            "images/ков.jpg",
            "images/ков1.jpg",
            "images/ков3.jpg",
            "images/ков4.jpg"
        ]
    },
    {
        id: 40,
        name: "Коврик для ванной махровый",
        price: 9000,
        category: "Коврики",
        description: 'Коврик для ванны хорошо впитывает влагу,быстро сохнет."<a href="https://kaspi.kz/shop/p/zami-home-kovrik-123zb26-85x55-sm-viskoza-voilok-154335271/?c=710000000" target="_blank">Kaspi</a>',
        size: "85×55 см",
        color: "белый",
        icon: "fas fa-rug",
        image: "images/ковв.jpg",
         images: [
            "images/ковв.jpg",
            
        ]
    },
    // ПОКРЫВАЛА-ОДЕЯЛА
    {
        id: 20,
        name: "Одеяло пуховое, гусиный пух 98%",
        price: 35600,
        category: "Одеяла",
        description: 'Одеяло пуховое, гусиный пух 98%. Премиальное качество класса люкс, полностью гипоаллергенно благодаря глубокой очистке сырья. <a href="https://l.kaspi.kz/shop/GgwKdQ7EmWG7HkU?sessionId=6aba73f8-a447-413b-a9b3-a20f88ecc1591795775025" target="_blank">Kaspi</a>',
        size: "150×200, 180×220, 220×230см",
        color: "белый",
        icon: "fas fa-blanket",
        image: "images/покрывалог.jpg",
        images: [
            "images/покрывалог.jpg",
            "images/покрывалог2.jpg",
            "images/покрывалог3.jpg"
        ]
    },
    {
        id: 21,
        name: "Одеяло из холлофайбера",
        price: 18500,
        category: "Одеяла",
        description: 'Одеяло из холлофайбера. Премиальное качество класса люкс, полностью гипоаллергенный наполнитель.  <a href="https://l.kaspi.kz/shop/GJKocxMUnUDbX7i?sessionId=6aba73f8-a447-413b-a9b3-a20f88ecc1591795772632" target="_blank">Kaspi</a>',
        size: "50х200, 180х200, 210х200см ",
        color: "белый",
        icon: "fas fa-blanket",
        image: "images/холо.jpg",
        images: [
            "images/холо.jpg",
            "images/холо2.jpg",
            "images/холо3.jpg"
        ]
    },
    {
        id: 22,
        name: "Покрывало-одеяло стёганое, цветное",
        price: 16900,
        category: "Одеяла",
        description: 'Покрывало-одеяло стёганое, цветное. Наполнение — натуральный материал шелкопряда. <a href="https://l.kaspi.kz/shop/CEjyxfwZF3WA854?sessionId=6aba73f8-a447-413b-a9b3-a20f88ecc1591795772632" target="_blank">Kaspi</a>',
        size: "150×210, 180×210см",
        color: "розовый",
        icon: "fas fa-blanket",
        image: "images/blanket-pink.jpg",
        images: [
            "images/одеялос3.jpg",
            "images/одеялос2.jpg",
            "images/одеялос.jpg",
            "images/одеялос4.jpg",
        ]
    },
    {
        id: 23,
        name: "Муслиновое покрывало-одеяло ",
        price: 16900,
        category: "Одеяла",
        description: 'Муслиновое покрывало-одеяло из 100% сжатого хлопка. Наполнение шелкопряд. <a href="https://l.kaspi.kz/shop/6ngzNopwvECCsQQ?sessionId=6aba73f8-a447-413b-a9b3-a20f88ecc1591795772632" target="_blank">Kaspi</a>',
        size: "230×250см",
        color: "белый, серый",
        icon: "fas fa-blanket",
        image: "images/покро2.jpg",
        images: [
            "images/покро.jpg",
            "images/покро2.jpg",
        ]
    },
    {
        id: 24,
        name: "Одеяло облегчённое, кремовое",
        price: 19200,
        category: "Одеяла",
        description: 'Ткань из 100% хлопка. Наполнение: 80% хлопок / 20% холлофайбер. <a href="" target="_blank">Kaspi</a>',
        size: "150×200, 180×220 , 220×230см",
        color: "Кремовое",
        icon: "fas fa-blanket",
        image: "images/одеялоб.jpg",
        images: [
            "images/одеялоб.jpg",
            "images/одеялоб2.jpg",
        ]
    },
    {
        id: 25,
        name: "Покрывало-одеяло стёганое",
        price: 19200,
        category: "Одеяла",
        description: 'Муслиновое покрывало-одеяло из 100% сжатого хлопка. Наполнение шелкопряд. <a href="" target="_blank">Kaspi</a>',
        size: "150×200, 180×220 , 220×230см",
        color: "Кремовое",
        icon: "fas fa-blanket",
        image: "images/покро4.jpg",
        images: [
            "images/покро4.jpg",
        ]
    },
    {
        id: 26,
        name: "Покрывала с кружевами в американском дизайне",
        price: 19200,
        category: "Одеяла",
        description: 'Ткань и наполнение из 100% хлопка. <a href="https://l.kaspi.kz/shop/ACY7q3cSxia2QrE?sessionId=6aba73f8-a447-413b-a9b3-a20f88ecc1591795772632" target="_blank">Kaspi</a>',
        size: "230×250см",
        color: "серый",
        icon: "fas fa-blanket",
        image: "images/покро3.jpg",
        images: [
            "images/покро3.jpg",
        ]
    },
    {
        id: 27,
        name: "Простыня нарезинке  из распушённого  100% хлопка ",
        price: 10300,
        category: "Простыни",
        description: 'Простыня без резинки, распушенный 100% хлопок. <a href="https://l.kaspi.kz/shop/GWVaVMyqgLds8ft?sessionId=6aba73f8-a447-413b-a9b3-a20f88ecc1591795772632" target="_blank">Kaspi</a>',
        size: "80×205+30,90×205+30,150×210+35,160×210+35 ,180×220+35 ,200×220+35 ,220×220+35 ,220×240+35см ",
        color: "Мята",
        icon: "fas fa-blanket",
        image: "images/простр.jpg",
        images: [
            "images/простр.jpg",
            "images/простр1.jpg",
            "images/простр3.jpg",
            "images/простр4.jpg",
            "images/простр5.jpg",
            "images/простр6.jpg",
            "images/простр7.jpg",
        ]
    },
    {
        id: 28,
        name: "Простыня без резинке  из распушённого  100% хлопка, цвет мяты",
        price: 13500,
        category: "Простыни",
        description: 'Простыня из распушённого хлопка, цвет мяты. Премиальное качество класса люкс, полностью гипоаллергенна.  <a href="" target="_blank">Kaspi</a>',
        size: "160×265, 170х265, 230х280, 240х280см",
        color: "Мята",
        icon: "fas fa-blanket",
        image: "images/простд.jpg",
        images: [
            "images/простд.jpg",
            "images/простд1.jpg",
            "images/простд3.jpg",
            "images/простд4.jpg",
        ]
    },
    {
        id: 29,
        name: "Простыня, Комплект-конструктор из страйп-сатина",
        price: 12000,
        category: "Простыни",
        description: 'Цветное покрывало-одеяло, состав 100% хлопок, наполнение шелкопряд. <a href="https://l.kaspi.kz/shop/HTeTSEZuCAt3K5R?sessionId=6aba73f8-a447-413b-a9b3-a20f88ecc1591795772632" target="_blank">Kaspi</a>',
        size: "180x210 см",
        color: "желтые лепестки",
        icon: "fas fa-blanket",
        image: "images/простх.jpg",
        images: [
            "images/простх.jpg",
            "images/простх1.jpg",
            "images/простх3.jpg",
            "images/простх4.jpg",
            "images/простх5.jpg",
            "images/простх6.jpg",
        ]
    },
    {
        id: 30,
        name: "Комплект конструктор из страйп сатина с джакардовым",
        price: 12000,
        category: "Покрывала-одеяла",
        description: 'Цветное покрывало-одеяло, состав 100% хлопок, наполнение шелкопряд.  <a href="https://l.kaspi.kz/shop/2n89hUDj1uVyeDp?sessionId=6aba73f8-a447-413b-a9b3-a20f88ecc1591795772632" target="_blank">Kaspi</a>',
        size: "150x210 см",
        color: "розовые с зеленью",
        icon: "fas fa-blanket",
        image: "images/простдт.jpg",
        images: [
            "images/простдт.jpg",
            "images/простдт2.jpg",
            "images/простдт3.jpg",
            "images/простдт4.jpg",
            "images/простдт5.jpg",
            "images/простдт6.jpg",
            "images/простдт7.jpg",
            "images/простдт8.jpg",
            "images/простдт9.jpg",
        ]
    },
    // КОВРИКИ
    {
        id: 31,
        name: "Наматрасники серии Organic Cleansing Bacteria",
        price: 8900,
        category: "Наматрасники",
        description: 'это сочетание роскоши и практичности: Белоснежный верх из 100% хлопка — мягкий и дышащий. Наполнение из элитного шелкопрядного волокна класса А. <a href="https://l.kaspi.kz/shop/8AoTkiaMmgUxK7Z?sessionId=6aba73f8-a447-413b-a9b3-a20f88ecc1591795772632" target="_blank">Kaspi</a>',
        size: "80×205; 90×205; 150×20; 160×205; 180×205; 200×205; 220×210 cм",
        color: "Белый",
        icon: "fas fa-blanket",
        image: "images/нам.jpg",
        images: [
            "images/нам.jpg",
            "images/нам2.jpg",
            "images/нам3.jpg",
            "images/нам4.jpg",
            "images/нам5.jpg",
            "images/нам6.jpg",
            "images/нам7.jpg",
        ]
    },
    // ПОДОДЕЯЛЬНИКИ
    {
        id: 32,
        name: "Пододеяльник двуспальный",
        price: 16900,
        category: "Пододеяльник",
        description: 'Пододеяльник двуспальный ткань — распушенный 100% хлопок,пл. 350 нитей,цвет «Мята». 225x230 белый<a href="https://l.kaspi.kz/shop/CtrrhyUaUCG9H1o?sessionId=6aba73f8-a447-413b-a9b3-a20f88ecc1591795781199" target="_blank">Kaspi</a>',
        size: "150x220, 150x205, 160x220, 150x220, 200x220, 250x235, 200x225см",
        color: "Белый",
        icon: "fas fa-bed",
        image: "images/под.jfif",
        images: [
            "images/под2.jfif",
            "images/под.jfif",
            "images/под3.jfif",
            "images/под6.jfif",
            "images/под4.jfif",
            "images/под5.jfif",
        ]
    },
    {
        id: 33,
        name: "Пододеяльник из хлопка",
        price: 18900,
        category: "Пододеяльник",
        description: 'Перед стиркой выверните пододеяльник наизнанку. Стирайте в стиральной машине при 30 °C на деликатном режиме со светлым бельём. Используйте мягкое средство для стирки без отбеливателя. После стирки расправьте изделие и высушите. При необходимости гладьте с изнаночной стороны.<a href="https://l.kaspi.kz/shop/ByqvrkYJDyNZHrd?sessionId=6aba73f8-a447-413b-a9b3-a20f88ecc1591795781199" target="_blank">Kaspi</a>',
        size: "180x210, 220x225 ,160x210, 200x210, 160x220, 230x225, 150x220см",
        color: "Мятный",
        icon: "fas fa-bed",
        image: "images/подод.jfif",
        images: [
            "images/подод7.jfif",
            "images/подод3.jfif",
            "images/подод.jfif",
            "images/подод4.jfif",
            "images/подод2.jfif",
            "images/подод6.jfif",
        ]
    },
];

let cart = [];
let cartCount = 0;
let cartTotal = 0;
let currentFilter = 'all';

// Запоминаем выбранную фотографию каждого товара
const productImageIndexes = {};

document.addEventListener('DOMContentLoaded', function () {
    displayProducts();
    initMap();
    updateCartCount();

    window.addEventListener('click', function (event) {
        const modal = document.getElementById('cartModal');

        if (event.target === modal) {
            closeCart();
        }
    });
});


// ОТОБРАЖЕНИЕ ТОВАРОВ
function displayProducts(filteredProducts = products) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-light);">
                <i class="fas fa-box-open" style="font-size: 60px; margin-bottom: 20px; color: var(--gold-light);"></i>
                <h3 style="margin-bottom: 15px; color: var(--text-dark);">${currentFilter === "Наматрасники" ? "Раздел наматрасников пока пуст" : "В этой категории пока нет товаров"}</h3>
                <p>${currentFilter === "Наматрасники" ? "Добавьте товары в категорию «Наматрасники», чтобы они появились здесь." : "Выберите другую категорию, чтобы посмотреть товары."}</p>
                <button onclick="resetFilters()" class="btn-primary" style="margin-top: 20px;">
                    <i class="fas fa-redo"></i> Сбросить фильтры
                </button>
            </div>
        `;
        return;
    }

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        const productImages = product.images || (product.image ? [product.image] : []);
        const currentImageIndex = productImageIndexes[product.id] || 0;

        const imageContent = productImages.length > 0
            ? `
                <div class="product-gallery">
                    <img
                        id="product-image-${product.id}"
                        src="${productImages[currentImageIndex]}"
                        alt="${product.name}"
                        class="product-main-image"
                    >

                    ${productImages.length > 1 ? `
                        <button class="gallery-arrow gallery-prev"
                            type="button"
                            aria-label="Предыдущее фото"
                            onclick="changeProductImage(${product.id}, -1)">
                            &#10094;
                        </button>

                        <button class="gallery-arrow gallery-next"
                            type="button"
                            aria-label="Следующее фото"
                            onclick="changeProductImage(${product.id}, 1)">
                            &#10095;
                        </button>

                        <div class="gallery-counter" id="gallery-counter-${product.id}">
                            ${currentImageIndex + 1} / ${productImages.length}
                        </div>
                    ` : ''}
                </div>
            `
            : `<i class="${product.icon}"></i>`;

        productCard.innerHTML = `
            <div class="product-img">
                ${imageContent}
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            </div>

            <div class="product-info">
                <div class="product-category">${product.category}</div>

                <h3 class="product-title">${product.name}</h3>

                <p class="product-description">${product.description}</p>

                <div class="product-details">
                    <span>
                        <i class="fas fa-ruler-combined"></i>
                        ${product.size}
                    </span>

                    <span>
                        <i class="fas fa-palette"></i>
                        ${product.color}
                    </span>
                </div>

                <div class="product-price">
                    ${product.price.toLocaleString()} ₸
                </div>

                <div class="product-actions">
                    <button class="btn-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-bag"></i> В корзину
                    </button>
                </div>
            </div>
        `;

        productsGrid.appendChild(productCard);
    });
}


// ПЕРЕКЛЮЧЕНИЕ ФОТОГРАФИЙ
function changeProductImage(productId, direction) {
    const product = products.find(item => item.id === productId);

    if (!product) return;

    const images = product.images || (product.image ? [product.image] : []);

    if (images.length <= 1) return;

    let index = productImageIndexes[productId] || 0;

    index = (index + direction + images.length) % images.length;

    productImageIndexes[productId] = index;

    const imageElement = document.getElementById(`product-image-${productId}`);
    const counterElement = document.getElementById(`gallery-counter-${productId}`);

    if (imageElement) {
        imageElement.src = images[index];
    }

    if (counterElement) {
        counterElement.textContent = `${index + 1} / ${images.length}`;
    }
}


// СБРОС ФИЛЬТРОВ
function resetFilters() {
    currentFilter = 'all';

    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach((btn, index) => {
        btn.classList.toggle('active', index === 0);
    });

    displayProducts(products);
}


// ФИЛЬТРАЦИЯ ТОВАРОВ ПО КАТЕГОРИЯМ
function filterProducts(category, buttonElement) {
    currentFilter = category;

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn === buttonElement);
    });

    const filteredProducts = category === 'all'
        ? products
        : products.filter(product => product.category === category);

    displayProducts(filteredProducts);
}


// КАРТА
function initMap() {
    DG.then(function () {
        const map = DG.map('map2gis', {
            center: [51.1282, 71.4305],
            zoom: 16
        });

        DG.marker([51.141330, 71.492404]).addTo(map)
            .bindPopup(`
                <b>Zami Home Factory</b><br>
                🫶🏻 Традиции и стиль в каждом изделии<br>
                🍃 100% эко-материалы<br><br>
                <b>Адрес:</b> г. Астана, ул. Борили, 42<br>
                <b>Телефон:</b> +7 (777) 123-45-67<br>
                <b>Время работы:</b> 10:00 - 20:00
            `)
            .openPopup();

    }).catch(function (error) {
        console.log('Ошибка загрузки карты:', error);

        document.getElementById('map2gis').innerHTML = `
            <div style="height: 400px; display: flex; align-items: center; justify-content: center; background-color: var(--gray-light); color: var(--text-light); border-radius: 12px;">
                <div style="text-align: center;">
                    <i class="fas fa-map-marker-alt" style="font-size: 50px; margin-bottom: 15px; color: var(--gold-light);"></i>
                    <h3>Наш адрес:</h3>
                    <p><strong>г. Астана, ул. Борили, 42</strong></p>
                    <p>Для просмотра карты требуется интернет-соединение</p>
                </div>
            </div>
        `;
    });
}


// ДОБАВЛЕНИЕ В КОРЗИНУ
function addToCart(productId) {
    const product = products.find(p => p.id === productId);

    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    cartCount++;
    cartTotal += product.price;

    updateCartCount();

    showNotification(`"${product.name}" добавлен в корзину!`);
}


// ОБНОВЛЕНИЕ КОРЗИНЫ
function updateCartCount() {
    document.getElementById('cartCount').textContent = cartCount;
    document.getElementById('cartTotal').textContent = cartTotal.toLocaleString();
}


// ОТКРЫТИЕ КОРЗИНЫ
function openCart() {
    const modal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div style="text-align: center; padding: 40px 20px; color: var(--text-light);">
                <i class="fas fa-shopping-bag" style="font-size: 60px; margin-bottom: 20px; color: var(--gold-light);"></i>
                <h3 style="margin-bottom: 15px; color: var(--text-dark);">Корзина пуста</h3>
                <p>Добавьте товары из каталога</p>
                <button onclick="closeCart()" class="btn-primary" style="margin-top: 20px;">
                    <i class="fas fa-shopping-bag"></i> Перейти к покупкам
                </button>
            </div>
        `;
    } else {
        cartItems.innerHTML = '';

        cart.forEach(item => {
            const cartItem = document.createElement('div');

            cartItem.className = 'cart-item';

            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.description}</p>

                    <div class="cart-item-details">
                        <span><i class="fas fa-ruler-combined"></i> ${item.size}</span> |
                        <span><i class="fas fa-palette"></i> ${item.color}</span>
                    </div>
                </div>

                <div class="cart-item-price">
                    <div class="price">${(item.price * item.quantity).toLocaleString()} ₸</div>
                    <div class="quantity">${item.price.toLocaleString()} ₸ × ${item.quantity} шт.</div>
                </div>

                <button class="remove-item" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-times"></i>
                </button>
            `;

            cartItems.appendChild(cartItem);
        });
    }

    modal.style.display = 'block';
}


// ЗАКРЫТИЕ КОРЗИНЫ
function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}


// УДАЛЕНИЕ ИЗ КОРЗИНЫ
function removeFromCart(productId) {
    const itemIndex = cart.findIndex(item => item.id === productId);

    if (itemIndex !== -1) {
        const item = cart[itemIndex];

        cartCount -= item.quantity;
        cartTotal -= item.price * item.quantity;

        cart.splice(itemIndex, 1);

        updateCartCount();

        openCart();
    }
}


// ОФОРМЛЕНИЕ ЗАКАЗА
function checkout() {
    if (cart.length === 0) {
        showNotification('Корзина пуста! Добавьте товары перед оформлением заказа.', 'warning');
        return;
    }

    let message = `*ЗАКАЗ С САЙТА ZAMI HOME FACTORY*%0A%0A`;

    message += `🫶🏻 *Традиции и стиль в каждом изделии*%0A`;
    message += `🍃 *100% эко-материалы*%0A`;
    message += `✨ *Zami home - подарки, которые греют душу* 🎁%0A%0A`;

    message += `*СОСТАВ ЗАКАЗА:*%0A`;
    message += `=========================%0A`;

    cart.forEach((item, index) => {
        message += `*${index + 1}. ${item.name}*%0A`;
        message += `   ${item.description}%0A`;
        message += `   Размер: ${item.size} | Цвет: ${item.color}%0A`;
        message += `   ${item.price.toLocaleString()} ₸ × ${item.quantity} шт. = ${(item.price * item.quantity).toLocaleString()} ₸%0A%0A`;
    });

    message += `=========================%0A`;
    message += `*ИТОГО: ${cartTotal.toLocaleString()} ₸*%0A%0A`;

    message += `*КОНТАКТНЫЕ ДАННЫЕ:*%0A`;
    message += `Имя: ________%0A`;
    message += `Телефон: ________%0A`;
    message += `Адрес доставки: ________%0A%0A`;

    message += `*СПОСОБ ДОСТАВКИ:*%0A`;
    message += `□ Самовывоз (ул. Борили, 42, Астана)%0A`;
    message += `□ Доставка по городу (500 ₸)%0A`;
    message += `□ Доставка по Казахстану%0A%0A`;

    message += `*СПОСОБ ОПЛАТЫ:*%0A`;
    message += `□ Наличные при получении%0A`;
    message += `□ Перевод на карту%0A%0A`;

    message += `Подписывайтесь на нас в Instagram: @zami_home_factory%0A`;
    message += `Сайт: zamihome.kz`;

    const phoneNumber = '77000962266';

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');

    showNotification('Заказ отправлен в WhatsApp! Заполните ваши контактные данные.', 'success');
}


// УВЕДОМЛЕНИЯ
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');

    notification.textContent = message;
    notification.className = 'notification';

    let bgColor = 'var(--gold-primary)';

    if (type === 'warning') bgColor = '#ff9800';
    if (type === 'info') bgColor = '#2196f3';
    if (type === 'success') bgColor = '#4CAF50';

    notification.style.backgroundColor = bgColor;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';

        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);

    }, 4000);
}
