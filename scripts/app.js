(function(){
    console.log('APP.JS ЗАПУЩЕН');

    // ДАННЫЕ (простая версия)
    var data = {
        teams: [
            {id:"mclaren",name:"McLaren",country:"🇬🇧",budget:280,color:"#ff8700",
             pilots:[
                 {name:"Ландо Норрис",number:4,flag:"🇬🇧",age:25},
                 {name:"Шарль Леклер",number:16,flag:"🇲🇨",age:27}
             ],
             reserve:[{name:"Габриэль Бортолето",flag:"🇧🇷",age:20}]},
            {id:"ferrari",name:"Ferrari",country:"🇮🇹",budget:150,color:"#dc0000",
             pilots:[
                 {name:"Льюис Хэмилтон",number:44,flag:"🇬🇧",age:40},
                 {name:"Джордж Рассел",number:63,flag:"🇬🇧",age:27}
             ],
             reserve:[
                 {name:"Пьер Гасли",flag:"🇫🇷",age:29},
                 {name:"Колтон Херта",flag:"🇺🇸",age:24},
                 {name:"Габриеле Мини",flag:"🇮🇹",age:19},
                 {name:"Лиам Лоусон",flag:"🇳🇿",age:23}
             ]},
            {id:"mercedes",name:"Mercedes",country:"🇩🇪",budget:460,color:"#00d2be",
             pilots:[
                 {name:"Исак Хаджар",number:37,flag:"🇫🇷",age:20},
                 {name:"Кими Антонелли",number:12,flag:"🇮🇹",age:19}
             ],
             reserve:[
                 {name:"Алекс Албон",flag:"🇹🇭",age:28},
                 {name:"Ноэль Леон",flag:"🇲🇽",age:18}
             ]},
            {id:"redbull",name:"Red Bull",country:"🇦🇹",budget:502,color:"#1e41b0",
             pilots:[
                 {name:"Макс Ферстаппен",number:1,flag:"🇳🇱",age:27},
                 {name:"Дино Беганович",number:81,flag:"🇲🇪",age:21}
             ],
             reserve:[
                 {name:"Юки Цунода",flag:"🇯🇵",age:24},
                 {name:"Никола Цолов",flag:"🇧🇬",age:18}
             ]},
            {id:"williams",name:"Williams",country:"🇬🇧",budget:327,color:"#00a3e0",
             pilots:[
                 {name:"Оскар Пиастри",number:81,flag:"🇦🇺",age:23},
                 {name:"Карлос Сайнц",number:55,flag:"🇪🇸",age:30}
             ],
             reserve:[
                 {name:"Джек Денн",flag:"🇦🇺",age:19},
                 {name:"Бастиан Монтойя",flag:"🇨🇴",age:19}
             ]},
            {id:"racing-bulls",name:"Racing Bulls",country:"🇮🇹",budget:359,color:"#4d7aff",
             pilots:[
                 {name:"Арвид Линдблад",number:4,flag:"🇸🇪",age:18},
                 {name:"Леонардо Форнаролли",number:30,flag:"🇮🇹",age:19}
             ],
             reserve:[
                 {name:"Рафаэль Камара",flag:"🇧🇷",age:19}
             ]},
            {id:"haas",name:"Haas",country:"🇺🇸",budget:230,color:"#b6babd",pilots:[],reserve:[]},
            {id:"cadillac",name:"Cadillac",country:"🇺🇸",budget:320,color:"#c8102e",
             pilots:[
                 {name:"Кевин Магнуссен",number:20,flag:"🇩🇰",age:32},
                 {name:"Чжоу Гуаньюй",number:24,flag:"🇨🇳",age:25}
             ],
             reserve:[
                 {name:"Патрисио О’Уорд",flag:"🇺🇸",age:26}
             ]},
            {id:"aston",name:"Aston Martin",country:"🇬🇧",budget:382,color:"#006f62",
             pilots:[
                 {name:"Лэнс Стролл",number:18,flag:"🇨🇦",age:26}
             ],
             reserve:[
                 {name:"Джек Кроуфорд",flag:"🇺🇸",age:20}
             ]},
            {id:"audi",name:"Audi",country:"🇩🇪",budget:340,color:"#bb0a21",
             pilots:[
                 {name:"Нико Хюлькенберг",number:27,flag:"🇩🇪",age:37},
                 {name:"Тео Босхунг",number:5,flag:"🇩🇪",age:22}
             ],
             reserve:[
                 {name:"Даниэле Джанни",flag:"🇮🇹",age:21}
             ]},
            {id:"alpine",name:"Alpine",country:"🇫🇷",budget:440,color:"#ff6b9d",
             pilots:[
                 {name:"Джек Дуэн",number:7,flag:"🇦🇺",age:22}
             ],
             reserve:[
                 {name:"Виктор Мартинс",flag:"🇫🇷",age:23}
             ]}
        ],
        calendar: [
            {round:1,name:"Гран-при Бахрейна",country:"🇧🇭",date:"1–3 марта",pole:"🇲🇨 Шарль Леклер (McLaren)",winner:"🇮🇹 Габриэле Мини (Ferrari)"},
            {round:2,name:"Гран-при Саудовской Аравии",country:"🇸🇦",date:"8–10 марта",pole:"—",winner:"—"},
            {round:3,name:"Гран-при Австралии",country:"🇦🇺",date:"22–24 марта",pole:"—",winner:"—"},
            {round:4,name:"Гран-при Японии",country:"🇯🇵",date:"5–7 апреля",pole:"—",winner:"—"},
            {round:5,name:"Гран-при Китая",country:"🇨🇳",date:"19–21 апреля",pole:"—",winner:"—"},
            {round:6,name:"Гран-при Майами",country:"🇺🇸",date:"3–5 мая",pole:"—",winner:"—"},
            {round:7,name:"Гран-при Эмилии-Романьи",country:"🇮🇹",date:"17–19 мая",pole:"—",winner:"—"},
            {round:8,name:"Гран-при Монако",country:"🇲🇨",date:"31 мая – 2 июня",pole:"—",winner:"—"},
            {round:9,name:"Гран-при Испании",country:"🇪🇸",date:"7–9 июня",pole:"—",winner:"—"},
            {round:10,name:"Гран-при Канады",country:"🇨🇦",date:"14–16 июня",pole:"—",winner:"—"},
            {round:11,name:"Гран-при Австрии",country:"🇦🇹",date:"28–30 июня",pole:"—",winner:"—"},
            {round:12,name:"Гран-при Великобритании",country:"🇬🇧",date:"5–7 июля",pole:"—",winner:"—"},
            {round:13,name:"Гран-при Бельгии",country:"🇧🇪",date:"19–21 июля",pole:"—",winner:"—"},
            {round:14,name:"Гран-при Венгрии",country:"🇭🇺",date:"26–28 июля",pole:"—",winner:"—"},
            {round:15,name:"Гран-при Нидерландов",country:"🇳🇱",date:"23–25 августа",pole:"—",winner:"—"},
            {round:16,name:"Гран-при Италии",country:"🇮🇹",date:"6–8 сентября",pole:"—",winner:"—"},
            {round:17,name:"Гран-при Азербайджана",country:"🇦🇿",date:"13–15 сентября",pole:"—",winner:"—"},
            {round:18,name:"Гран-при Сингапура",country:"🇸🇬",date:"27–29 сентября",pole:"—",winner:"—"},
            {round:19,name:"Гран-при США (Остин)",country:"🇺🇸",date:"11–13 октября",pole:"—",winner:"—"},
            {round:20,name:"Гран-при Мексики",country:"🇲🇽",date:"18–20 октября",pole:"—",winner:"—"},
            {round:21,name:"Гран-при Бразилии Сан-Паулу",country:"🇧🇷",date:"1–3 ноября",pole:"—",winner:"—"},
            {round:22,name:"Гран-при Лас-Вегаса",country:"🇺🇸",date:"15–17 ноября",pole:"—",winner:"—"},
            {round:23,name:"Гран-при Катара",country:"🇶🇦",date:"29 ноября – 1 декабря",pole:"—",winner:"—"},
            {round:24,name:"Гран-при Абу-Даби",country:"🇦🇪",date:"6–8 декабря",pole:"—",winner:"—"}
        ],
        transfers: [
            {pilot:"Фернандо Алонсо",from:"Aston Martin",to:"Williams",price:62,date:"Январь 2028"},
            {pilot:"Ноэль Леон",from:"—",to:"Mercedes",price:0,date:"Январь 2028"},
            {pilot:"Бастиан Монтойя",from:"—",to:"Williams",price:0,date:"Январь 2028"},
            {pilot:"Исак Хаджар",from:"Williams",to:"Mercedes",price:170,date:"Январь 2028"},
            {pilot:"Лиам Лоусон",from:"Racing Bulls",to:"Ferrari",price:70,date:"Февраль 2028"},
            {pilot:"Колтон Херта",from:"—",to:"Ferrari",price:0,date:"Февраль 2028"},
            {pilot:"Пьер Гасли",from:"Alpine",to:"Ferrari",price:120,date:"Февраль 2028"},
            {pilot:"Стоффель Вандорн",from:"Aston Martin",to:"—",price:62,date:"Февраль 2028"},
            {pilot:"Карлос Сайнц",from:"Red Bull",to:"Williams",price:78,date:"Март 2028"},
            {pilot:"Дино Беганович",from:"Williams",to:"Red Bull",price:6,date:"Март 2028"}
        ]
    };

    // ===== РЕНДЕР КОМАНД =====
    function renderTeams() {
        var grid = document.getElementById('teamGrid');
        if (!grid) { console.error('teamGrid не найден'); return; }
        grid.innerHTML = '';
        console.log('Рендерим команды:', data.teams.length);
        
        data.teams.forEach(function(team) {
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
                    pilotsHTML += '<div class="pilot-item">' +
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
                '<div class="card-top"></div>' +
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
        
        // Обновляем счётчики
        var totalPilots = 0;
        var totalReserves = 0;
        data.teams.forEach(function(t) {
            totalPilots += t.pilots.length;
            totalReserves += t.reserve.length;
        });
        document.getElementById('teamCount').textContent = data.teams.length;
        document.getElementById('pilotCount').textContent = totalPilots;
        document.getElementById('reserveCount').textContent = totalReserves;
    }

    // ===== КАЛЕНДАРЬ =====
    function renderCalendar() {
        var list = document.getElementById('calendarList');
        if (!list) return;
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
        if (!container) return;
        
        var standingsData = [
            {pos:1, name:"Габриэле Мини", flag:"🇮🇹", team:"Ferrari", pts:25},
            {pos:2, name:"Шарль Леклер", flag:"🇲🇨", team:"McLaren", pts:18},
            {pos:3, name:"—", flag:"—", team:"—", pts:0}
        ];

        var html = '<div class="podium">';
        var medals = ['🥇','🥈','🥉'];
        var colors = ['gold','silver','bronze'];
        standingsData.forEach(function(p, i) {
            html += '<div class="podium-item">' +
                '<div class="podium-pos ' + colors[i] + '">' + medals[i] + '</div>' +
                '<div class="podium-name">' + p.flag + ' ' + p.name + '</div>' +
                '<div class="podium-base ' + colors[i] + '">' + p.pts + ' очков</div>' +
            '</div>';
        });
        html += '</div>';

        html += '<table class="standings-table"><thead><tr><th>#</th><th>Пилот</th><th>Команда</th><th style="text-align:right">Очки</th></tr></thead><tbody>';
        standingsData.forEach(function(p, i) {
            var cls = '';
            if (i === 0) cls = ' pos-1';
            else if (i === 1) cls = ' pos-2';
            else if (i === 2) cls = ' pos-3';
            var barWidth = p.pts > 0 ? Math.round((p.pts / 25) * 100) : 0;
            html += '<tr><td class="pos' + cls + '">' + (i+1) + '</td><td><span class="flag">' + p.flag + '</span><span class="driver">' + p.name + '</span></td><td class="team-name">' + p.team + '</td><td class="pts">' + p.pts + '<div class="progress-bar"><div class="fill" style="width:' + barWidth + '%"></div></div></td></tr>';
        });
        html += '</tbody></table>';
        
        container.innerHTML = html;
    }

    // ===== ТРАНСФЕРЫ =====
    function renderTransfers() {
        var container = document.getElementById('transfersList');
        if (!container) return;
        if (data.transfers.length === 0) {
            container.innerHTML = '<div class="transfer-empty">Трансферов пока нет</div>';
            return;
        }
        var html = '';
        data.transfers.forEach(function(t) {
            html += '<div class="transfer-item">' +
                '<div class="transfer-info">' +
                    '<span class="transfer-pilot">' + t.pilot + '</span>' +
                    '<span class="transfer-from">' + (t.from || '—') + '</span>' +
                    '<span>➜</span>' +
                    '<span class="transfer-to">' + t.to + '</span>' +
                '</div>' +
                '<div>' +
                    '<span class="transfer-price">' + (t.price > 0 ? '💰 ' + t.price + ' млн' : '🔄 Свободный агент') + '</span>' +
                    '<span class="transfer-date">' + t.date + '</span>' +
                '</div>' +
            '</div>';
        });
        container.innerHTML = html;
    }

    // ===== ВКЛАДКИ =====
    function initTabs() {
        var tabs = document.querySelectorAll('.tab');
        tabs.forEach(function(tab) {
            tab.addEventListener('click', function() {
                tabs.forEach(function(t) { t.classList.remove('active'); });
                this.classList.add('active');
                document.querySelectorAll('.content').forEach(function(c) { c.classList.remove('active'); });
                document.getElementById(this.dataset.tab).classList.add('active');
            });
        });
    }

    // ===== ОБРАТНЫЙ ОТСЧЁТ =====
    function updateCountdown() {
        var target = new Date(2028, 2, 1, 0, 0, 0);
        var now = new Date();
        var diff = target - now;
        if (diff <= 0) {
            document.getElementById('days').textContent = '0';
            document.getElementById('hours').textContent = '0';
            document.getElementById('minutes').textContent = '0';
            document.getElementById('seconds').textContent = '0';
            return;
        }
        document.getElementById('days').textContent = Math.floor(diff / (1000*60*60*24));
        document.getElementById('hours').textContent = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
        document.getElementById('minutes').textContent = Math.floor((diff % (1000*60*60)) / (1000*60));
        document.getElementById('seconds').textContent = Math.floor((diff % (1000*60)) / 1000);
    }

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

    // ===== ЗАПУСК =====
    console.log('Запуск функций...');
    renderTeams();
    renderCalendar();
    renderStandings();
    renderTransfers();
    initTabs();
    updateCountdown();
    setInterval(updateCountdown, 1000);
    console.log('Готово!');
})();
