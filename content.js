/* Общие данные для всех трёх направлений сайта «Дмитрий · Мотоподбор» */
window.MP = {
  brand: "Мотоподбор",
  expert: "Дмитрий",
  city: "Уфа",
  geo: "Уфа и города в радиусе 200 км",
  experience: "8–10 лет",
  rating: "5,0",
  reviewsCount: 126,
  deals: "100+",
  priceFrom: "1 500 ₽",
  tagline: "Проверю мотоцикл перед покупкой — честно и до винтика",
  subtagline: "Выездная диагностика и юридическая проверка мототехники. Вы покупаете уверенно, а не на удачу.",

  // Контакты — заглушки (клиент пришлёт позже)
  phone: "+7 (___) ___-__-__",
  phoneHref: "tel:+70000000000",
  whatsappHref: "#",
  telegramHref: "#",
  avitoHref: "#",

  stats: [
    { v: "5,0", l: "рейтинг на Авито" },
    { v: "126", l: "отзывов клиентов" },
    { v: "8–10", l: "лет в мототехнике" },
    { v: "200 км", l: "радиус выезда" }
  ],

  // Что проверяю
  checks: [
    { t: "Двигатель и трансмиссия", d: "Работа мотора, коробки передач и всего навесного оборудования под нагрузкой." },
    { t: "Эндоскопия и компрессия", d: "Эндоскопия цилиндров и замер компрессии — реальное состояние ДВС изнутри." },
    { t: "ЛКП, ДТП и скрытые дефекты", d: "Лакокрасочное покрытие, следы ударов и аварий, перекрасы и спрятанные косяки." },
    { t: "Юридическая чистота", d: "Штрафы, залоги, запреты, кредиты, ограничения — и всевозможное враньё продавца." },
    { t: "Документы и история", d: "Проверка ПТС/СТС, соответствие номеров, история и реальный пробег техники." },
    { t: "Сопровождение сделки", d: "От осмотра до покупки и получения СТС. Помогаю с торгом и доставкой." }
  ],

  // Как проходит работа
  steps: [
    { n: "01", t: "Заявка и консультация", d: "Бесплатно консультирую 24/7. Помогаю выбрать тип, марку и модель под вашу антропометрию, цели и бюджет." },
    { n: "02", t: "Выезд на осмотр", d: "Договариваюсь с продавцом и выезжаю к мотоциклу — по Уфе и в радиусе 200 км." },
    { n: "03", t: "Полная диагностика", d: "Техническая, визуальная и юридическая проверка. Эндоскопия, компрессия, проверка по базам." },
    { n: "04", t: "Фото- и видео-отчёт", d: "Присылаю подробный отчёт с фото, видео и честным заключением: брать или искать дальше." },
    { n: "05", t: "Торг и сопровождение", d: "Аргументированно торгуюсь вместо вас, помогаю с доставкой и оформлением до СТС." }
  ],

  // Специализация
  specs: ["Спортбайки", "Спорт-туристы", "Дорожники", "Круизеры", "Кастомы", "Эндуро"],

  // Тарифы
  pricing: [
    { t: "Консультация", p: "Бесплатно", d: "На связи 24 часа, 7 дней в неделю. Помогу определиться с моделью и бюджетом.", note: "" },
    { t: "Разовый осмотр", p: "от 1 500 ₽", d: "Полная диагностика + фото/видео-отчёт. Цена зависит от модели и локации.", note: "хит" },
    { t: "Сделка под ключ", p: "по договорённости", d: "Осмотр, торг, оформление и помощь с доставкой — от первого звонка до СТС.", note: "" }
  ],

  // Галерея работ: file -> подпись
  gallery: [
    { src: "assets/bike-01.jpg", cap: "Suzuki GSX-R · осмотр перед покупкой" },
    { src: "assets/bike-02.jpg", cap: "Honda CBR Repsol · проверка ЛКП и состояния" },
    { src: "assets/bike-03.jpg", cap: "Indian Scout · осмотр круизера на складе" },
    { src: "assets/bike-04.jpg", cap: "BMW S1000XR · полная диагностика" },
    { src: "assets/bike-05.jpg", cap: "Ducati · выездной осмотр в паркинге" },
    { src: "assets/bike-06.jpg", cap: "Спортбайк · проверка на складе продавца" },
    { src: "assets/bike-07.jpg", cap: "Ducati кастом · осмотр и проверка документов" },
    { src: "assets/bike-08.jpg", cap: "Организация доставки мотоцикла из другого региона" },
    { src: "assets/bike-09.jpg", cap: "Подготовка к отправке · сопровождение сделки" }
  ],

  // Скриншоты отзывов с Авито
  reviewShots: [
    "assets/reviews/review-01.jpg","assets/reviews/review-02.jpg","assets/reviews/review-03.jpg",
    "assets/reviews/review-04.jpg","assets/reviews/review-05.jpg","assets/reviews/review-06.jpg",
    "assets/reviews/review-07.jpg","assets/reviews/review-08.jpg","assets/reviews/review-09.jpg",
    "assets/reviews/review-10.jpg","assets/reviews/review-11.jpg","assets/reviews/review-12.jpg",
    "assets/reviews/review-13.jpg"
  ],

  // Текстовые цитаты (для версий, где скриншоты не к месту)
  quotes: [
    { n: "Станислав", txt: "Покупал мотоцикл из другого региона — сделал честный подробный отчёт. На его основе я аргументированно поторговался, и это сработало. Всем из регионов однозначно рекомендую!", tag: "Мотоподбор · осмотр" },
    { n: "Никита", txt: "Оперативно договорился с хозяином об осмотре, приехал, всё посмотрел, дал рекомендации. Даже поторговался с продавцом вместо меня )) Спасибо, Дмитрий!", tag: "Осмотр мотоцикла" },
    { n: "Вячеслав", txt: "Находился в другой области, возможности не было. Работа сделана на 120% — оценил, дал отзыв, рекомендации. Быстро, качественно, оперативно!", tag: "Мотоподбор" },
    { n: "Виктория", txt: "Приехал вовремя, всё внимательно осмотрел, показал на все недостатки, проверил документы. Подсказал, где лучше ставить на учёт. Большое спасибо!", tag: "Осмотр мототехники" }
  ],

  faq: [
    { q: "В каких городах работаете?", a: "Уфа и ближайшие города в радиусе примерно 200 км. По договорённости рассматриваю и более дальние выезды." },
    { q: "Сколько стоит осмотр?", a: "От 1 500 ₽ за разовый осмотр. Точная цена зависит от конкретной марки, модели и локации мотоцикла. Консультация — бесплатно." },
    { q: "Что я получу по итогу?", a: "Подробный фото- и видео-отчёт с честным заключением по технике, юридике и адекватности цены — стоит брать или искать дальше." },
    { q: "А если я в другом регионе?", a: "Это частый случай. Выезжаю, проверяю и присылаю отчёт. На его основе вы торгуетесь и принимаете решение, не выходя из дома." },
    { q: "Поможете с доставкой?", a: "Да. Подскажу проверенных перевозчиков и помогу организовать доставку мотоцикла в ваш город." }
  ],

  guarantees: ["Документы проверены", "Гарантия на работы", "Срочные заказы", "Выезд к клиенту", "Работаю 7 дней в неделю"],

  // Приём заявок через Web3Forms (заявки приходят на email).
  // Получите бесплатный ключ на https://web3forms.com — введите свою почту,
  // они пришлют access key, его и вставьте сюда вместо строки ниже.
  web3formsKey: "33331dea-6cb3-4776-8c1c-72505ab4abd2",

  // Дубль заявки в Telegram. Чтобы доходило И с VPN, И без, идём двумя путями:
  //   direct  — напрямую в Telegram (работает с VPN / вне РФ);
  //   relayUrl — через ретранслятор Google Apps Script (работает в РФ без VPN).
  // Сначала пробуем direct, и только если он не прошёл — relayUrl. Поэтому
  // сообщение приходит ровно одно в любом случае. Любое поле можно оставить
  // пустым — тогда соответствующий путь просто не используется.
  telegram: {
    token: "8652997435:AAGiUChaVqZ0L_qBQOo9ggHsKpQ2XQGj6JY",
    chatId: "-1003711932665",
    relayUrl: "https://script.google.com/macros/s/AKfycbxI7f8i60nuY53ZW52yADRpQ3zpbZBe1XZZvBuuZ1anfLhm-rXrsuSaAOpSb7aaGUo/exec"
  }
};

/* Дубль заявки в Telegram двумя путями, чтобы доходило и с VPN, и без.
   Сначала пробуем напрямую (api.telegram.org — открыт при VPN/вне РФ); если за
   ~4 сек не получилось — уходим на ретранслятор Google (открыт в РФ без VPN).
   Так приходит ровно одно сообщение в любом случае. Фоном, на успех формы не влияет. */
function sendTelegram(text) {
  const cfg = window.MP.telegram || {};

  const viaRelay = function () {
    if (!cfg.relayUrl) return;
    try {
      fetch(cfg.relayUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ text: text })
      }).catch(function () {});
    } catch (e) { /* запасной путь — молча игнорируем */ }
  };

  if (!cfg.token || !cfg.chatId) { viaRelay(); return; }

  const ctrl = ('AbortController' in window) ? new AbortController() : null;
  const timer = ctrl ? setTimeout(function () { ctrl.abort(); }, 4000) : null;
  fetch('https://api.telegram.org/bot' + cfg.token + '/sendMessage', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: cfg.chatId, text: text, disable_web_page_preview: true }),
    signal: ctrl ? ctrl.signal : undefined
  })
    .then(function (r) { if (timer) clearTimeout(timer); return r.json(); })
    .then(function (d) { if (!d || !d.ok) throw new Error('tg direct not ok'); })
    .catch(function () { if (timer) clearTimeout(timer); viaRelay(); });
}

/* Отправка заявки на email через Web3Forms (основной, подтверждаемый канал).
   Домен api.telegram.org в РФ заблокирован, поэтому письмо — надёжная база, а
   доставку в Telegram берёт на себя sendTelegram() (см. выше).
   Возвращает Promise<boolean> — true, если сервис реально принял заявку. */
window.sendLead = function () {
  const sheet = document.getElementById('sheet');
  const fields = sheet ? sheet.querySelectorAll('input, textarea') : [];
  const val = i => (fields[i] && fields[i].value ? fields[i].value.trim() : '');
  const name = val(0), phone = val(1), moto = val(2);
  const site = (document.title || '').trim();

  // Дубль в Telegram — фоном (с VPN и без), на успех формы не влияет.
  sendTelegram(
    '🏍 Новая заявка с сайта\n\n' +
    '👤 Имя: ' + (name || '—') + '\n' +
    '📞 Контакт: ' + (phone || '—') + '\n' +
    '🔧 Мотоцикл: ' + (moto || '—') + '\n\n' +
    '🌐 ' + site
  );

  const payload = {
    access_key: window.MP.web3formsKey,
    subject: '🏍 Новая заявка с сайта — Мотоподбор',
    from_name: 'Сайт «Дмитрий · Мотоподбор»',
    'Имя': name || '—',
    'Контакт': phone || '—',
    'Мотоцикл / ссылка': moto || '—',
    'Страница': site
  };

  return fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(payload)
  })
    .then(function (r) { return r.json().catch(function () { return { success: false }; }); })
    .then(function (data) {
      if (!data || !data.success) {
        console.error('Web3Forms error:', data);
        return false;
      }
      return true;
    })
    .catch(function (e) { console.error('Lead send error:', e); return false; });
};
