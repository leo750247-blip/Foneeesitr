     (function(){
    var data = {
        teams: [
            {id:"mclaren",name:"McLaren",country:"🇬🇧",budget:130,color:"#ff8700",
             pilots:[
                 {name:"Ландо Норрис",number:4,flag:"🇬🇧",age:25,photo:"https://media.formula1.com/content/dam/fom-website/drivers/L/LANDO_NORRIS_01.jpg"},
                 {name:"Шарль Леклер",number:16,flag:"🇲🇨",age:27,photo:"https://media.formula1.com/content/dam/fom-website/drivers/C/CHARLES_LECLERC_01.jpg"}
             ],
             reserve:[{name:"Габриэль Бортолето",flag:"🇧🇷",age:20}]},
            {id:"ferrari",name:"Ferrari",country:"🇮🇹",budget:190,color:"#dc0000",
             pilots:[
                 {name:"Льюис Хэмилтон",number:44,flag:"🇬🇧",age:40,photo:"https://media.formula1.com/content/dam/fom-website/drivers/L/LEWIS_HAMILTON_01.jpg"},
                 {name:"Джордж Рассел",number:63,flag:"🇬🇧",age:27,photo:"https://media.formula1.com/content/dam/fom-website/drivers/G/GEORGE_RUSSELL_01.jpg"}
             ],
             reserve:[{name:"Габриеле Мини",flag:"🇮🇹",age:19}]},
            {id:"mercedes",name:"Mercedes",country:"🇩🇪",budget:310,color:"#00d2be",
             pilots:[
                 {name:"Кими Антонелли",number:12,flag:"🇮🇹",age:19,photo:"https://media.formula1.com/content/dam/fom-website/drivers/K/KIMI_ANTONELLI_01.jpg"},
                 {name:"Алекс Албон",number:23,flag:"🇹🇭",age:28,photo:"https://media.formula1.com/content/dam/fom-website/drivers/A/ALEX_ALBON_01.jpg"}
             ],
             reserve:[{name:"Фредерик Вести",flag:"🇩🇰",age:22}]},
            {id:"redbull",name:"Red Bull",country:"🇦🇹",budget:280,color:"#1e41b0",
             pilots:[
                 {name:"Макс Ферстаппен",number:1,flag:"🇳🇱",age:27,photo:"https://media.formula1.com/content/dam/fom-website/drivers/M/MAX_VERSTAPPEN_01.jpg"},
                 {name:"Карлос Сайнц",number:55,flag:"🇪🇸",age:30,photo:"https://media.formula1.com/content/dam/fom-website/drivers/C/CARLOS_SAINZ_01.jpg"}
             ],
             reserve:[{name:"Юки Цунода",flag:"🇯🇵",age:24},{name:"Никола Цолов",flag:"🇧🇬",age:18}]},
            {id:"williams",name:"Williams",country:"🇬🇧",budget:136,color:"#00a3e0",
             pilots:[
                 {name:"Оскар Пиастри",number:81,flag:"🇦🇺",age:23,photo:"https://media.formula1.com/content/dam/fom-website/drivers/O/OSCAR_PIASTRI_01.jpg"},
                 {name:"Исак Хаджар",number:37,flag:"🇫🇷",age:20,photo:"https://media.formula1.com/content/dam/fom-website/drivers/I/ISACK_HADJAR_01.jpg"}
             ],
             reserve:[{name:"Дино Беганович",flag:"🇲🇪",age:21},{name:"Джек Денн",flag:"🇦🇺",age:19}]},
            {id:"racing-bulls",name:"Racing Bulls",country:"🇮🇹",budget:139,color:"#4d7aff",
             pilots:[
                 {name:"Арвид Линдблад",number:4,flag:"🇸🇪",age:18,photo:"https://media.formula1.com/content/dam/fom-website/drivers/A/ARVID_LINDBLAD_01.jpg"},
                 {name:"Леонардо Форнаролли",number:30,flag:"🇮🇹",age:19,photo:"https://media.formula1.com/content/dam/fom-website/drivers/L/LEONARDO_FORNAROLI_01.jpg"}
             ],
             reserve:[{name:"Рафаэль Камара",flag:"🇧🇷",age:19},{name:"Лиам Лоусон",flag:"🇳🇿",age:23}]},
            {id:"haas",name:"Haas",country:"🇺🇸",budget:80,color:"#b6babd",
             pilots:[],
             reserve:[]},
            {id:"cadillac",name:"Cadillac",country:"🇺🇸",budget:170,color:"#c8102e",
             pilots:[
                 {name:"Кевин Магнуссен",number:20,flag:"🇩🇰",age:32,photo:"https://media.formula1.com/content/dam/fom-website/drivers/K/KEVIN_MAGNUSSEN_01.jpg"},
                 {name:"Чжоу Гуаньюй",number:24,flag:"🇨🇳",age:25,photo:"https://media.formula1.com/content/dam/fom-website/drivers/Z/ZHOU_GUANYU_01.jpg"}
             ],
             reserve:[{name:"Патрисио О’Уорд",flag:"🇺🇸",age:26}]},
            {id:"aston",name:"Aston Martin",country:"🇬🇧",budget:170,color:"#006f62",
             pilots:[
                 {name:"Фернандо Алонсо",number:14,flag:"🇪🇸",age:43,photo:"https://media.formula1.com/content/dam/fom-website/drivers/F/FERNANDO_ALONSO_01.jpg"},
                 {name:"Лэнс Стролл",number:18,flag:"🇨🇦",age:26,photo:"https://media.formula1.com/content/dam/fom-website/drivers/L/LANCE_STROLL_01.jpg"}
             ],
             reserve:[{name:"Стоффель Вандорн",flag:"🇧🇪",age:33},{name:"Джек Кроуфорд",flag:"🇺🇸",age:20}]},
            {id:"audi",name:"Audi",country:"🇩🇪",budget:190,color:"#bb0a21",
             pilots:[
                 {name:"Нико Хюлькенберг",number:27,flag:"🇩🇪",age:37,photo:"https://media.formula1.com/content/dam/fom-website/drivers/N/NICO_HULKENBERG_01.jpg"},
                 {name:"Тео Босхунг",number:5,flag:"🇩🇪",age:22,photo:"https://media.formula1.com/content/dam/fom-website/drivers/T/THEO_BOSCHUNG_01.jpg"}
             ],
             reserve:[{name:"Даниэле Джанни",flag:"🇮🇹",age:21}]},
            {id:"alpine",name:"Alpine",country:"🇫🇷",budget:170,color:"#ff6b9d",
             pilots:[
                 {name:"Пьер Гасли",number:10,flag:"🇫🇷",age:29,photo:"https://media.formula1.com/content/dam/fom-website/drivers/P/PIERRE_GASLY_01.jpg"},
                 {name:"Джек Дуэн",number:7,flag:"🇦🇺",age:22,photo:"https://media.formula1.com/content/dam/fom-website/drivers/J/JACK_DOOHAN_01.jpg"}
             ],
             reserve:[{name:"Виктор Мартинс",flag:"🇫🇷",age:23}]}
        ],
        calendar: [
            {
                round: 1,
                name: "Гран-при Бахрейна",
                country: "🇧🇭",
                date: "1–3 марта",
                pole: "🇳🇱 Макс Ферстаппен (Red Bull)",
                qualifying: "🥇 1. 🇳🇱 Max Verstappen (Red Bull)\n🥈 2. 🇬🇧 Lewis Hamilton (Ferrari) +0.8s\n🥉 3. 🇲🇨 Charles Leclerc (McLaren)\n4. 🇬🇧 Lando Norris (McLaren)\n5. 🇬🇧 George Russell (Ferrari)\n6. 🇪🇸 Carlos Sainz (Red Bull)\n7. 🇪🇸 Fernando Alonso (Aston Martin)\n8. 🇦🇺 Oscar Piastri (Williams)\n9. 🇮🇹 Kimi Antonelli (Mercedes)\n10. 🇹🇭 Alex Albon (Mercedes)",
                winner: "🇬🇧 Льюис Хэмилтон (Ferrari)"
            },
            {
                round: 2,
                name: "Гран-при Саудовской Аравии",
                country: "🇸🇦",
                date: "8–10 марта",
                pole: "🇲🇨 Шарль Леклер (McLaren)",
                qualifying: "🥇 1. 🇲🇨 Charles Leclerc (McLaren)\n🥈 2. 🇳🇱 Max Verstappen (Red Bull)\n🥉 3. 🇬🇧 Lewis Hamilton (Ferrari)\n4. 🇬🇧 Lando Norris (McLaren)\n5. 🇬🇧 George Russell (Ferrari)\n6. 🇦🇺 Oscar Piastri (Williams)\n7. 🇪🇸 Carlos Sainz (Red Bull)\n8. 🇹🇭 Alex Albon (Mercedes)\n9. 🇪🇸 Fernando Alonso (Aston Martin)\n10. 🇮🇹 Kimi Antonelli (Mercedes)\n11. 🇫🇷 Pierre Gasly (Alpine)\n12. 🇦🇺 Jack Doohan (Alpine)\n13. 🇩🇰 Kevin Magnussen (Cadillac)\n14. 🇨🇳 Zhou Guanyu (Cadillac)\n15. 🇩🇪 Nico Hülkenberg (Audi)\n16. 🇩🇪 Theo Pourchaire (Audi)\n17. 🇸🇪 Arvid Lindblad (Racing Bulls)\n18. 🇮🇹 Leonardo Fornaroli (Racing Bulls)\n19. 🇨🇦 Lance Stroll (Aston Martin)",
                winner: "🇲🇨 Шарль Леклер (McLaren)"
            },
            {
                round: 3,
                name: "Гран-при Австралии",
                country: "🇦🇺",
                date: "22–24 марта",
                pole: "🇳🇱 Макс Ферстаппен (Red Bull)",
                qualifying: "🥇 1. 🇲🇨 Charles Leclerc (McLaren)\n🥈 2. 🇳🇱 Max Verstappen (Red Bull) +1.6s\n🥉 3. 🇦🇺 Oscar Piastri (Williams)\n4. 🇬🇧 Lewis Hamilton (Ferrari)\n5. 🇪🇸 Carlos Sainz (Red Bull)\n6. 🇧🇷 Gabriel Bortoleto (McLaren) 🆕\n7. 🇮🇹 Gabriele Mini (Ferrari) 🆕\n8. 🇹🇭 Alex Albon (Mercedes)\n9. 🇮🇹 Kimi Antonelli (Mercedes)\n10. 🇪🇸 Fernando Alonso (Aston Martin)\n11. 🇫🇷 Pierre Gasly (Alpine)\n12. 🇦🇺 Jack Doohan (Alpine)\n13. 🇩🇰 Kevin Magnussen (Cadillac)\n14. 🇨🇳 Zhou Guanyu (Cadillac)\n15. 🇩🇪 Nico Hülkenberg (Audi)\n16. 🇫🇷 Isack Hadjar (Williams)\n17. 🇩🇪 Theo Pourchaire (Audi)\n18. 🇸🇪 Arvid Lindblad (Racing Bulls)\n19. 🇮🇹 Leonardo Fornaroli (Racing Bulls)\n20. 🇨🇦 Lance Stroll (Aston Martin)",
                winner: "🇲🇨 Шарль Леклер (McLaren)"
            },
            {
                round: 4,
                name: "Гран-при Японии",
                country: "🇯🇵",
                date: "5–7 апреля",
                pole: "🇮🇹 Кими Антонелли (Mercedes)",
                qualifying: "🥇 1. 🇮🇹 Kimi Antonelli (Mercedes)\n🥈 2. ...\n🥉 3. ...",
                winner: "🇫🇷 Исак Хаджар (Williams)"
            },
            {round:5,name:"Гран-при Китая",country:"🇨🇳",date:"19–21 апреля",pole:"—",qualifying:"—",winner:"—"},
            {round:6,name:"Гран-при Майами",country:"🇺🇸",date:"3–5 мая",pole:"—",qualifying:"—",winner:"—"},
            {round:7,name:"Гран-при Эмилии-Романьи",country:"🇮🇹",date:"17–19 мая",pole:"—",qualifying:"—",winner:"—"},
            {round:8,name:"Гран-при Монако",country:"🇲🇨",date:"31 мая – 2 июня",pole:"—",qualifying:"—",winner:"—"},
            {round:9,name:"Гран-при Испании",country:"🇪🇸",date:"7–9 июня",pole:"—",qualifying:"—",winner:"—"},
            {round:10,name:"Гран-при Канады",country:"🇨🇦",date:"14–16 июня",pole:"—",qualifying:"—",winner:"—"},
            {round:11,name:"Гран-при Австрии",country:"🇦🇹",date:"28–30 июня",pole:"—",qualifying:"—",winner:"—"},
            {round:12,name:"Гран-при Великобритании",country:"🇬🇧",date:"5–7 июля",pole:"—",qualifying:"—",winner:"—"},
            {round:13,name:"Гран-при Бельгии",country:"🇧🇪",date:"19–21 июля",pole:"—",qualifying:"—",winner:"—"},
            {round:14,name:"Гран-при Венгрии",country:"🇭🇺",date:"26–28 июля",pole:"—",qualifying:"—",winner:"—"},
            {round:15,name:"Гран-при Нидерландов",country:"🇳🇱",date:"23–25 августа",pole:"—",qualifying:"—",winner:"—"},
            {round:16,name:"Гран-при Италии",country:"🇮🇹",date:"6–8 сентября",pole:"—",qualifying:"—",winner:"—"},
            {round:17,name:"Гран-при Азербайджана",country:"🇦🇿",date:"13–15 сентября",pole:"—",qualifying:"—",winner:"—"},
            {round:18,name:"Гран-при Сингапура",country:"🇸🇬",date:"27–29 сентября",pole:"—",qualifying:"—",winner:"—"},
            {round:19,name:"Гран-при США (Остин)",country:"🇺🇸",date:"11–13 октября",pole:"—",qualifying:"—",winner:"—"},
            {round:20,name:"Гран-при Мексики",country:"🇲🇽",date:"18–20 октября",pole:"—",qualifying:"—",winner:"—"},
            {round:21,name:"Гран-при Бразилии Сан-Паулу",country:"🇧🇷",date:"1–3 ноября",pole:"—",qualifying:"—",winner:"—"},
            {round:22,name:"Гран-при Лас-Вегаса",country:"🇺🇸",date:"15–17 ноября",pole:"—",qualifying:"—",winner:"—"},
            {round:23,name:"Гран-при Катара",country:"🇶🇦",date:"29 ноября – 1 декабря",pole:"—",qualifying:"—",winner:"—"},
            {round:24,name:"Гран-при Абу-Даби",country:"🇦🇪",date:"6–8 декабря",pole:"—",qualifying:"—",winner:"—"}
        ]
    };

    var countryMap = {
        '🇬🇧':'Великобритания','🇲🇨':'Монако','🇮🇹':'Италия',
        '🇩🇪':'Германия','🇦🇹':'Австрия','🇳🇱':'Нидерланды',
        '🇪🇸':'Испания','🇦🇺':'Австралия','🇫🇷':'Франция',
        '🇸🇪':'Швеция','🇺🇸':'США','🇨🇦':'Канада',
        '🇹🇭':'Таиланд','🇯🇵':'Япония','🇧🇬':'Болгария',
        '🇧🇷':'Бразилия','🇧🇪':'Бельгия','🇳🇿':'Новая Зеландия',
        '🇩🇰':'Дания','🇲🇪':'Черногория','🇶🇦':'Катар','🇦🇪':'ОАЭ',
        '🇨🇳':'Китай'
    };

    var colorMap = {
        mclaren:'#ff8700',ferrari:'#dc0000',mercedes:'#00d2be',
        redbull:'#1e41b0',williams:'#00a3e0','racing-bulls':'#4d7aff',
        aston:'#006f62',audi:'#bb0a21',cadillac:'#c8102e',alpine:'#ff6b9d'
    };

    // ===== МУЗЫКА =====
    var isPlaying = false;
    var audio = new Audio('https://ia600204.us.archive.org/22/items/friday-dopamine-re-edit/Friday%20%28dopamine-Re-edit%29.mp3');
    audio.loop = true;

    window.toggleMusic = function() {
        var btn = document.getElementById('musicBtn');
        if (isPlaying) {
            audio.pause();
            btn.textContent = '🎵 Включить музыку';
            btn.classList.remove('playing');
        } else {
            audio.play().catch(function(e) {});
            btn.textContent = '🔇 Выключить музыку';
            btn.classList.add('playing');
        }
        isPlaying = !isPlaying;
    };

    // ===== РЕНДЕР КОМАНД =====
    function renderTeams(filter) {
        var grid = document.getElementById('teamGrid');
        grid.innerHTML = '';
        var filtered = filter && filter !== 'all' 
            ? data.teams.filter(function(t){ return t.id === filter; })
            : data.teams;
        
        filtered.forEach(function(team) {
            var card = document.createElement('div');
            card.className = 'card';
            card.setAttribute('data-team', team.id);
            card.style.setProperty('--team-color', team.color);

            var pilotsHTML = '';
            if (team.pilots.length === 0) {
                pilotsHTML = '<div class="pilot-item"><span class="vacant">— Свободно —</span></div>';
                pilotsHTML += '<div class="pilot-item"><span class="vacant">— Свободно —</span></div>';
            } else {
                team.pilots.forEach(function(p) {
                    pilotsHTML += '<div class="pilot-item" data-name="' + p.name + '" data-team="' + team.name + '" data-flag="' + p.flag + '" data-age="' + p.age + '" data-number="' + p.number + '" data-budget="' + team.budget + '" data-teamkey="' + team.id + '" data-photo="' + p.photo + '" data-wiki="' + p.name.replace(/ /g,'_') + '">' +
                        '<img class="pilot-photo" src="' + p.photo + '" alt="' + p.name + '" loading="lazy" onerror="this.src=\'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Crect fill=%22%23e0e0e0%22 width=%22100%22 height=%22100%22/%3E%3Ctext x=%2250%22 y=%2255%22 text-anchor=%22middle%22 font-family=%22Barlow Condensed%22 font-size=%2230%22 fill=%22%23888%22%3E' + p.name.split(' ').map(function(w){return w[0]}).join('') + '%3C/text%3E%3C/svg%3E\'">' +
                        '<span class="pilot-number">' + p.number + '</span>' +
                        '<span class="pilot-name"><span class="flag">' + p.flag + '</span>' + p.name + '</span>' +
                        '<span class="pilot-age">🎂' + p.age + ' лет</span>' +
                    '</div>';
                });
            }

            var reserveHTML = '';
            if (team.reserve.length > 0) {
                team.reserve.forEach(function(r) {
                    reserveHTML += '<div class="pilot-item reserve"><span class="pilot-number">R</span><span class="pilot-name"><span class="flag">' + r.flag + '</span>' + r.name + '</span><span class="pilot-age">🎂' + r.age + ' лет</span></div>';
                });
            } else {
                reserveHTML = '<div class="pilot-item reserve"><span class="vacant">— Не объявлен —</span></div>';
            }

            card.innerHTML = 
                '<div class="card-top" style="background:' + team.color + '"></div>' +
                '<div class="card-body">' +
                    '<div class="card-team">' + team.name + ' <span class="country">' + team.country + '</span></div>' +
                    '<div class="card-budget">💰' + team.budget + ' млн <span>· бюджет</span></div>' +
                    '<div class="card-label">Гоночные пилоты</div>' +
                    '<div class="pilots-list">' + pilotsHTML + '</div>' +
                    '<div class="card-label" style="margin-top:10px">Резерв</div>' +
                    '<div class="pilots-list reserve">' + reserveHTML + '</div>' +
                '</div>';

            grid.appendChild(card);
        });
    }

    // ===== КАЛЕНДАРЬ =====
    function renderCalendar() {
        var list = document.getElementById('calendarList');
        list.innerHTML = '';
        data.calendar.forEach(function(race) {
            var div = document.createElement('div');
            div.className = 'calendar-item';
            div.innerHTML =
                '<div class="calendar-header-row" onclick="this.parentElement.querySelector(\'.calendar-details\').classList.toggle(\'open\'); this.querySelector(\'.toggle-icon\').classList.toggle(\'open\')">' +
                    '<span class="round">Этап ' + race.round + '</span>' +
                    '<span class="race-name">' + race.name + '</span>' +
                    '<span class="race-country">' + race.country + '</span>' +
                    '<span class="race-date">📅 ' + race.date + '</span>' +
                    '<span class="toggle-icon">▼</span>' +
                '</div>' +
                '<div class="calendar-details">' +
                    '<div class="detail-row">' +
                        '<span>Поул: <span class="value">' + race.pole + '</span></span>' +
                        '<span>Победитель: <span class="value">' + race.winner + '</span></span>' +
                    '</div>' +
                '</div>';
            list.appendChild(div);
        });
    }

    // ===== ЧЕМПИОНАТ =====
    function renderStandings() {
        var container = document.getElementById('standingsContent');
        
        // ===== ДАННЫЕ ЧЕМПИОНАТА ПОСЛЕ 4-Х ЭТАПОВ =====
        var standingsData = [
            {pos:1, name:"Charles Leclerc", flag:"🇲🇨", team:"McLaren", pts:99},
            {pos:2, name:"Max Verstappen", flag:"🇳🇱", team:"Red Bull", pts:93},
            {pos:3, name:"Lewis Hamilton", flag:"🇬🇧", team:"Ferrari", pts:86},
            {pos:4, name:"Kimi Antonelli", flag:"🇮🇹", team:"Mercedes", pts:43},
            {pos:5, name:"Oscar Piastri", flag:"🇦🇺", team:"Williams", pts:38},
            {pos:6, name:"Carlos Sainz", flag:"🇪🇸", team:"Red Bull", pts:32},
            {pos:7, name:"Isack Hadjar", flag:"🇫🇷", team:"Williams", pts:31},
            {pos:8, name:"Lando Norris", flag:"🇬🇧", team:"McLaren", pts:28},
            {pos:9, name:"Fernando Alonso", flag:"🇪🇸", team:"Aston Martin", pts:18},
            {pos:10, name:"Gabriel Bortoleto", flag:"🇧🇷", team:"McLaren", pts:14},
            {pos:11, name:"Gabriele Mini", flag:"🇮🇹", team:"Ferrari", pts:12},
            {pos:12, name:"Alex Albon", flag:"🇹🇭", team:"Mercedes", pts:10},
            {pos:13, name:"Pierre Gasly", flag:"🇫🇷", team:"Alpine", pts:0},
            {pos:14, name:"Jack Doohan", flag:"🇦🇺", team:"Alpine", pts:0},
            {pos:15, name:"Kevin Magnussen", flag:"🇩🇰", team:"Cadillac", pts:0},
            {pos:16, name:"Zhou Guanyu", flag:"🇨🇳", team:"Cadillac", pts:0},
            {pos:17, name:"Nico Hülkenberg", flag:"🇩🇪", team:"Audi", pts:0},
            {pos:18, name:"Theo Pourchaire", flag:"🇩🇪", team:"Audi", pts:0},
            {pos:19, name:"Arvid Lindblad", flag:"🇸🇪", team:"Racing Bulls", pts:0},
            {pos:20, name:"Leonardo Fornaroli", flag:"🇮🇹", team:"Racing Bulls", pts:0},
            {pos:21, name:"Lance Stroll", flag:"🇨🇦", team:"Aston Martin", pts:0}
        ];

        // ПОДИУМ (топ-3)
        var podiumHTML = '<div class="podium">';
        var medals = ['gold','silver','bronze'];
        var names = ['🥇','🥈','🥉'];
        var top3 = standingsData.slice(0,3);
        while (top3.length < 3) {
            top3.push({name:'—',flag:'',team:'',pts:0});
        }
        top3.forEach(function(p, i) {
            podiumHTML += '<div class="podium-item">' +
                '<div class="podium-pos ' + medals[i] + '">' + names[i] + '</div>' +
                '<div class="podium-name">' + p.flag + ' ' + p.name + '</div>' +
                '<div class="podium-base ' + medals[i] + '">' + p.pts + ' очков</div>' +
            '</div>';
        });
        podiumHTML += '</div>';
        container.innerHTML = podiumHTML;

        // ТАБЛИЦА
        var maxPts = standingsData[0] ? standingsData[0].pts : 1;
        if (maxPts === 0) maxPts = 1;

        var html = '<table class="standings-table"><thead><tr><th>#</th><th>Пилот</th><th>Команда</th><th style="text-align:right">Очки</th></tr></thead><tbody>';
        standingsData.forEach(function(p, i) {
            var cls = '';
            if (i === 0) cls = ' pos-1';
            else if (i === 1) cls = ' pos-2';
            else if (i === 2) cls = ' pos-3';
            var barWidth = Math.round((p.pts / maxPts) * 100);
            html += '<tr><td class="pos' + cls + '">' + (i+1) + '</td><td><span class="flag">' + p.flag + '</span><span class="driver">' + p.name + '</span></td><td class="team-name">' + p.team + '</td><td class="pts">' + p.pts + '<div class="progress-bar"><div class="fill" style="width:' + barWidth + '%"></div></div></td></tr>';
        });
        html += '</tbody></table>';

        // КОМАНДНЫЙ ЗАЧЁТ
        var constructorPts = {};
        standingsData.forEach(function(p) {
            if (!constructorPts[p.team]) constructorPts[p.team] = 0;
            constructorPts[p.team] += p.pts;
        });
        var constructorArray = Object.keys(constructorPts).map(function(key) {
            return {name: key, pts: constructorPts[key]};
        }).sort(function(a, b) { return b.pts - a.pts; });

        html += '<h3 style="font-family:\'Barlow Condensed\',sans-serif;font-size:.8rem;font-weight:600;color:var(--muted);margin:20px 0 8px">КОМАНДНЫЙ ЗАЧЁТ</h3>';
        html += '<table class="standings-table"><thead><tr><th>#</th><th>Команда</th><th style="text-align:right">Очки</th></tr></thead><tbody>';
        var maxConstrPts = constructorArray[0] ? constructorArray[0].pts : 1;
        if (maxConstrPts === 0) maxConstrPts = 1;
        constructorArray.forEach(function(team, i) {
            var cls = '';
            if (i === 0) cls = ' pos-1';
            else if (i === 1) cls = ' pos-2';
            else if (i === 2) cls = ' pos-3';
            var barWidth = Math.round((team.pts / maxConstrPts) * 100);
            html += '<tr><td class="pos' + cls + '">' + (i+1) + '</td><td class="driver">' + team.name + '</td><td class="pts">' + team.pts + '<div class="progress-bar"><div class="fill" style="width:' + barWidth + '%"></div></div></td></tr>';
        });
        html += '</tbody></table>';
        container.innerHTML += html;
    }

    // ===== ВКЛАДКИ =====
    function initTabs() {
        var tabs = document.querySelectorAll('.tab');
        var contents = document.querySelectorAll('.content');
        tabs.forEach(function(tab) {
            tab.addEventListener('click', function() {
                tabs.forEach(function(t) { t.classList.remove('active'); });
                this.classList.add('active');
                contents.forEach(function(c) { c.classList.remove('active'); });
                document.getElementById(this.dataset.tab).classList.add('active');
            });
        });
    }

    // ===== ФИЛЬТР =====
    function initFilters() {
        var filters = document.querySelectorAll('.filter-btn');
        filters.forEach(function(btn) {
            btn.addEventListener('click', function() {
                filters.forEach(function(b) { b.classList.remove('active'); });
                this.classList.add('active');
                renderTeams(this.dataset.filter);
                initPilotClicks();
            });
        });
    }

    // ===== МОДАЛКА =====
    function initPilotClicks() {
        var modal = document.getElementById('modal');
        var close = document.getElementById('modalClose');

        document.querySelectorAll('.pilot-item[data-name]').forEach(function(item) {
            item.removeEventListener('click', pilotClickHandler);
            item.addEventListener('click', pilotClickHandler);
        });

        function pilotClickHandler(e) {
            var item = this;
            var name = item.dataset.name;
            var team = item.dataset.team;
            var flag = item.dataset.flag;
            var age = item.dataset.age;
            var number = item.dataset.number;
            var budget = item.dataset.budget;
            var teamkey = item.dataset.teamkey;
            var photo = item.dataset.photo;
            var wiki = item.dataset.wiki;

            var color = colorMap[teamkey] || '#e10600';
            var countryName = countryMap[flag] || '';

            document.getElementById('modalNumber').textContent = number;
            document.getElementById('modalNumber').style.color = color;
            document.getElementById('modalName').textContent = name;
            document.getElementById('modalTeam').textContent = team;
            document.getElementById('modalTeam').style.color = color;
            document.getElementById('modalCountry').textContent = flag + ' ' + countryName;
            document.getElementById('modalAge').textContent = age;
            document.getElementById('modalTeamName').textContent = team;
            document.getElementById('modalBudget').textContent = budget + ' млн';

            var photoEl = document.getElementById('modalPhoto');
            photoEl.src = photo;
            photoEl.onerror = function() {
                this.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22%3E%3Crect fill=%22%23e0e0e0%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%22100%22 y=%22110%22 text-anchor=%22middle%22 font-family=%22Barlow Condensed%22 font-size=%2270%22 fill=%22%23888%22%3E' + name.split(' ').map(function(w){return w[0]}).join('') + '%3C/text%3E%3C/svg%3E';
            };

            document.getElementById('modalLink').href = 'https://ru.wikipedia.org/wiki/' + wiki;

            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }

        close.addEventListener('click', function() {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        });

        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('show');
                document.body.style.overflow = '';
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                modal.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    }

    // ===== СЧЁТЧИКИ =====
    function updateCounters() {
        var teams = data.teams.length;
        var pilots = 0;
        var reserves = 0;
        data.teams.forEach(function(t) {
            pilots += t.pilots.length;
            reserves += t.reserve.length;
        });
        document.getElementById('teamCount').textContent = teams;
        document.getElementById('pilotCount').textContent = pilots;
        document.getElementById('reserveCount').textContent = reserves;
    }

    // ===== ОБРАТНЫЙ ОТСЧЁТ =====
    function updateCountdown() {
        var target = new Date(2026, 2, 1, 0, 0, 0);
        var now = new Date();
        var diff = target - now;
        if (diff <= 0) {
            document.getElementById('days').textContent = '0';
            document.getElementById('hours').textContent = '0';
            document.getElementById('minutes').textContent = '0';
            document.getElementById('seconds').textContent = '0';
            return;
        }
        var days = Math.floor(diff / (1000 * 60 * 60 * 24));
        var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((diff % (1000 * 60)) / 1000);
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }

    // ===== ДОБАВЛЕНИЕ ФИЛЬТРОВ =====
    function addFilterButtons() {
        var filterBar = document.querySelector('.filter-bar');
        var newButtons = [
            {id:'cadillac',name:'Cadillac'},
            {id:'alpine',name:'Alpine'}
        ];
        newButtons.forEach(function(btn) {
            var button = document.createElement('button');
            button.className = 'filter-btn';
            button.dataset.filter = btn.id;
            button.textContent = btn.name;
            filterBar.appendChild(button);
        });
    }

    // ===== ЗАПУСК =====
    renderTeams('all');
    renderCalendar();
    renderStandings();
    initTabs();
    initFilters();
    addFilterButtons();
    updateCounters();
    updateCountdown();
    setInterval(updateCountdown, 1000);
    initPilotClicks();
})();
