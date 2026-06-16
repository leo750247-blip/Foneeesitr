(function(){
    // ===== ДАННЫЕ =====
    var data = {
        teams: [
            {id:"mclaren",name:"McLaren",country:"🇬🇧",budget:130,color:"#ff8700",
             pilots:[{name:"Ландо Норрис",number:4,flag:"🇬🇧",age:25,races:113,wins:0,wiki:"Ландо_Норрис",initials:"LN"},
                     {name:"Шарль Леклер",number:16,flag:"🇲🇨",age:27,races:127,wins:5,wiki:"Шарль_Леклер",initials:"CL"}],
             reserve:[{name:"Габриэль Бортолето",flag:"🇧🇷",age:20}]},
            {id:"ferrari",name:"Ferrari",country:"🇮🇹",budget:190,color:"#dc0000",
             pilots:[{name:"Льюис Хэмилтон",number:44,flag:"🇬🇧",age:40,races:356,wins:105,wiki:"Льюис_Хэмилтон",initials:"LH"},
                     {name:"Джордж Рассел",number:63,flag:"🇬🇧",age:27,races:120,wins:2,wiki:"Джордж_Рассел",initials:"GR"}],
             reserve:[{name:"Габриеле Мини",flag:"🇮🇹",age:19}]},
            {id:"mercedes",name:"Mercedes",country:"🇩🇪",budget:310,color:"#00d2be",
             pilots:[{name:"Кими Антонелли",number:12,flag:"🇮🇹",age:19,races:0,wins:0,wiki:"Кими_Антонелли",initials:"KA"},
                     {name:"Алекс Албон",number:23,flag:"🇹🇭",age:28,races:87,wins:0,wiki:"Алекс_Албон",initials:"AA"}],
             reserve:[{name:"Фредерик Вести",flag:"🇩🇰",age:22}]},
            {id:"redbull",name:"Red Bull",country:"🇦🇹",budget:280,color:"#1e41b0",
             pilots:[{name:"Макс Ферстаппен",number:1,flag:"🇳🇱",age:27,races:209,wins:63,wiki:"Макс_Ферстаппен",initials:"MV"},
                     {name:"Карлос Сайнц",number:55,flag:"🇪🇸",age:30,races:196,wins:2,wiki:"Карлос_Сайнц-младший",initials:"CS"}],
             reserve:[{name:"Юки Цунода",flag:"🇯🇵",age:24},{name:"Никола Цолов",flag:"🇧🇬",age:18}]},
            {id:"williams",name:"Williams",country:"🇬🇧",budget:136,color:"#00a3e0",
             pilots:[{name:"Оскар Пиастри",number:81,flag:"🇦🇺",age:23,races:46,wins:0,wiki:"Оскар_Пиастри",initials:"OP"},
                     {name:"Исак Хаджар",number:37,flag:"🇫🇷",age:20,races:0,wins:0,wiki:"Исак_Хаджар",initials:"IH"}],
             reserve:[{name:"Дино Беганович",flag:"🇲🇪",age:21},{name:"Джек Денн",flag:"🇦🇺",age:19}]},
            {id:"racing-bulls",name:"Racing Bulls",country:"🇮🇹",budget:139,color:"#4d7aff",
             pilots:[{name:"Арвид Линдблад",number:4,flag:"🇸🇪",age:18,races:0,wins:0,wiki:"Арвид_Линдблад",initials:"AL"},
                     {name:"Леонардо Форнаролли",number:30,flag:"🇮🇹",age:19,races:0,wins:0,wiki:"Леонардо_Форнаролли",initials:"LF"}],
             reserve:[{name:"Рафаэль Камара",flag:"🇧🇷",age:19},{name:"Лиам Лоусон",flag:"🇳🇿",age:23}]},
            {id:"haas",name:"Haas",country:"🇺🇸",budget:80,color:"#b6babd",pilots:[],reserve:[]},
            {id:"cadillac",name:"Cadillac",country:"🇺🇸",budget:120,color:"#c8102e",pilots:[],reserve:[]},
            {id:"aston",name:"Aston Martin",country:"🇬🇧",budget:170,color:"#006f62",
             pilots:[{name:"Фернандо Алонсо",number:14,flag:"🇪🇸",age:43,races:401,wins:32,wiki:"Фернандо_Алонсо",initials:"FA"},
                     {name:"Лэнс Стролл",number:18,flag:"🇨🇦",age:26,races:165,wins:0,wiki:"Лэнс_Стролл",initials:"LS"}],
             reserve:[{name:"Стоффель Вандорн",flag:"🇧🇪",age:33},{name:"Джек Кроуфорд",flag:"🇺🇸",age:20}]},
            {id:"audi",name:"Audi",country:"🇩🇪",budget:190,color:"#bb0a21",
             pilots:[{name:"Нико Хюлькенберг",number:27,flag:"🇩🇪",age:37,races:227,wins:0,wiki:"Нико_Хюлькенберг",initials:"NH"},
                     {name:"Тео Босхунг",number:5,flag:"🇩🇪",age:22,races:0,wins:0,wiki:"Тео_Босхунг",initials:"TB"}],
             reserve:[{name:"Даниэле Джанни",flag:"🇮🇹",age:21}]},
            {id:"alpine",name:"Alpine",country:"🇫🇷",budget:110,color:"#ff6b9d",pilots:[],reserve:[]}
        ],
        calendar: [
            {round:1,name:"Гран-при Бахрейна",country:"🇧🇭",date:"1–3 марта"},
            {round:2,name:"Гран-при Саудовской Аравии",country:"🇸🇦",date:"8–10 марта"},
            {round:3,name:"Гран-при Австралии",country:"🇦🇺",date:"22–24 марта"},
            {round:4,name:"Гран-при Японии",country:"🇯🇵",date:"5–7 апреля"},
            {round:5,name:"Гран-при Китая",country:"🇨🇳",date:"19–21 апреля"},
            {round:6,name:"Гран-при Майами",country:"🇺🇸",date:"3–5 мая"},
            {round:7,name:"Гран-при Эмилии-Романьи",country:"🇮🇹",date:"17–19 мая"},
            {round:8,name:"Гран-при Монако",country:"🇲🇨",date:"31 мая – 2 июня"},
            {round:9,name:"Гран-при Испании",country:"🇪🇸",date:"7–9 июня"},
            {round:10,name:"Гран-при Канады",country:"🇨🇦",date:"14–16 июня"},
            {round:11,name:"Гран-при Австрии",country:"🇦🇹",date:"28–30 июня"},
            {round:12,name:"Гран-при Великобритании",country:"🇬🇧",date:"5–7 июля"},
            {round:13,name:"Гран-при Бельгии",country:"🇧🇪",date:"19–21 июля"},
            {round:14,name:"Гран-при Венгрии",country:"🇭🇺",date:"26–28 июля"},
            {round:15,name:"Гран-при Нидерландов",country:"🇳🇱",date:"23–25 августа"},
            {round:16,name:"Гран-при Италии",country:"🇮🇹",date:"6–8 сентября"},
            {round:17,name:"Гран-при Азербайджана",country:"🇦🇿",date:"13–15 сентября"},
            {round:18,name:"Гран-при Сингапура",country:"🇸🇬",date:"27–29 сентября"},
            {round:19,name:"Гран-при США (Остин)",country:"🇺🇸",date:"11–13 октября"},
            {round:20,name:"Гран-при Мексики",country:"🇲🇽",date:"18–20 октября"},
            {round:21,name:"Гран-при Сан-Паулу",country:"🇧🇷",date:"1–3 ноября"},
            {round:22,name:"Гран-при Лас-Вегаса",country:"🇺🇸",date:"15–17 ноября"},
            {round:23,name:"Гран-при Катара",country:"🇶🇦",date:"29 ноября – 1 декабря"},
            {round:24,name:"Гран-при Абу-Даби",country:"🇦🇪",date:"6–8 декабря"}
        ]
    };

    // ===== ОТРИСОВКА КОМАНД =====
    function renderTeams() {
        var grid = document.getElementById('teamGrid');
        grid.innerHTML = '';
        data.teams.forEach(function(team) {
            var card = document.createElement('div');
            card.className = 'card';
            card.setAttribute('data-team', team.id);
            card.style.setProperty('--team-color', team.color);

            var pilotsHTML = '';
            if (team.pilots.length === 0) {
                pilotsHTML = '<li class="pilot"><div class="row"><span class="initials" style="opacity:.2">—</span><span class="num">—</span><span class="name vacant">Свободно</span></div></li>';
                pilotsHTML += '<li class="pilot"><div class="row"><span class="initials" style="opacity:.2">—</span><span class="num">—</span><span class="name vacant">Свободно</span></div></li>';
            } else {
                team.pilots.forEach(function(p) {
                    var stats = '🎂' + p.age + ' лет';
                    if (p.races > 0) stats += ' · ' + p.races + ' Гран-при';
                    else stats += ' · Дебют 2026';
                    if (p.wins > 0) stats += ' · ' + p.wins + ' побед';
                    pilotsHTML += '<li class="pilot" data-name="' + p.name + '" data-team="' + team.name + '" data-flag="' + p.flag + '" data-age="' + p.age + ' лет" data-num="' + p.number + '" data-budget="' + team.budget + ' млн" data-teamkey="' + team.id + '" data-races="' + p.races + '" data-wins="' + p.wins + '" data-wiki="' + p.wiki + '">' +
                        '<div class="row"><span class="initials">' + p.initials + '</span><span class="num">' + p.number + '</span><span class="name"><span class="flag">' + p.flag + '</span>' + p.name + '</span></div>' +
                        '<div class="stats">' + stats + '</div></li>';
                });
            }

            var reserveHTML = '';
            if (team.reserve.length > 0) {
                team.reserve.forEach(function(r) {
                    reserveHTML += '<li class="pilot"><div class="row"><span class="initials" style="opacity:.3">R</span><span class="num">R</span><span class="name"><span class="flag">' + r.flag + '</span>' + r.name + '</span></div><div class="stats">🎂' + r.age + ' лет</div></li>';
                });
            } else {
                reserveHTML = '<li class="pilot"><div class="row"><span class="initials" style="opacity:.2">—</span><span class="num">R</span><span class="name vacant">Не объявлен</span></div></li>';
            }

            card.innerHTML = 
                '<div class="flag-bg">' + team.country + '</div>' +
                '<div class="car-shadow"></div>' +
                '<div class="team"><span class="badge"></span>' + team.name + ' <span class="country-flag">' + team.country + '</span></div>' +
                '<div class="budget">💰' + team.budget + ' млн <span>· бюджет</span></div>' +
                '<div class="label">Гоночные пилоты</div>' +
                '<ul class="pilots">' + pilotsHTML + '</ul>' +
                '<div class="label">Резерв</div>' +
                '<ul class="pilots reserve">' + reserveHTML + '</ul>';

            grid.appendChild(card);
        });
    }

    // ===== КАЛЕНДАРЬ =====
    function renderCalendar() {
        var grid = document.getElementById('calendarGrid');
        grid.innerHTML = '';
        data.calendar.forEach(function(race) {
            var div = document.createElement('div');
            div.className = 'race-card';
            div.innerHTML = 
                '<div class="round">Этап ' + race.round + '</div>' +
                '<div class="race-name">' + race.name + '</div>' +
                '<div class="race-country">' + race.country + ' ' + race.country + '</div>' +
                '<div class="race-date">📅 ' + race.date + '</div>';
            grid.appendChild(div);
        });
    }

    // ===== ТАБЛИЦА ЧЕМПИОНАТА =====
    function renderStandings() {
        var container = document.getElementById('standingsContent');
        var allPilots = [];
        data.teams.forEach(function(team) {
            team.pilots.forEach(function(p) {
                allPilots.push({
                    name: p.name,
                    flag: p.flag,
                    team: team.name,
                    pts: 0
                });
            });
        });

        var html = '<h3 style="font-family:\'Barlow Condensed\',sans-serif;font-size:.8rem;font-weight:600;color:var(--muted);margin:10px 0 4px">🏎️ Личный зачёт</h3>';
        html += '<table class="standings"><thead><tr><th>#</th><th>Пилот</th><th>Команда</th><th style="text-align:right">Очки</th></tr></thead><tbody>';
        allPilots.forEach(function(p, i) {
            html += '<tr><td class="pos">' + (i+1) + '</td><td><span class="flag">' + p.flag + '</span><span class="driver">' + p.name + '</span></td><td class="team-name">' + p.team + '</td><td class="pts">0</td></tr>';
        });
        html += '</tbody></table>';

        html += '<h3 style="font-family:\'Barlow Condensed\',sans-serif;font-size:.8rem;font-weight:600;color:var(--muted);margin:14px 0 4px">🏢 Командный зачёт</h3>';
        html += '<table class="standings"><thead><tr><th>#</th><th>Команда</th><th style="text-align:right">Очки</th></tr></thead><tbody>';
        data.teams.forEach(function(team, i) {
            html += '<tr><td class="pos">' + (i+1) + '</td><td class="driver">' + team.name + '</td><td class="pts">0</td></tr>';
        });
        html += '</tbody></table>';

        container.innerHTML = html;
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

    // ===== МОДАЛКА =====
    function initModal() {
        var modal = document.getElementById('modal');
        var close = document.getElementById('modalClose');

        document.addEventListener('click', function(e) {
            var pilot = e.target.closest('.pilot[data-name]');
            if (pilot) {
                var name = pilot.dataset.name;
                var team = pilot.dataset.team;
                var flag = pilot.dataset.flag;
                var age = pilot.dataset.age;
                var num = pilot.dataset.num;
                var budget = pilot.dataset.budget;
                var teamkey = pilot.dataset.teamkey;
                var races = pilot.dataset.races;
                var wins = pilot.dataset.wins;
                var wiki = pilot.dataset.wiki;

                var colorMap = {
                    mclaren:'#ff8700',ferrari:'#dc0000',mercedes:'#00d2be',
                    redbull:'#1e41b0',williams:'#00a3e0','racing-bulls':'#4d7aff',
                    aston:'#006f62',audi:'#bb0a21'
                };
                var color = colorMap[teamkey] || '#e10600';
                var initials = name.split(' ').map(function(w){ return w[0]; }).join('').slice(0,2);

                document.getElementById('modalInit').textContent = initials;
                document.getElementById('modalInit').style.background = color;
                document.getElementById('modalName').textContent = name;
                document.getElementById('modalTeam').textContent = team;
                document.getElementById('modalTeam').style.color = color;
                document.getElementById('modalCountry').textContent = flag + ' ' + (countryMap[flag] || '');
                document.getElementById('modalAge').textContent = age;
                document.getElementById('modalNum').textContent = num;
                document.getElementById('modalTeamName').textContent = team;
                document.getElementById('modalBudget').textContent = budget;
                document.getElementById('modalRaces').textContent = races;
                document.getElementById('modalWins').textContent = wins;
                document.getElementById('modalLink').href = 'https://ru.wikipedia.org/wiki/' + wiki;

                modal.classList.add('show');
                document.body.style.overflow = 'hidden';
            }
        });

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

    var countryMap = {
        '🇬🇧':'Великобритания','🇲🇨':'Монако','🇮🇹':'Италия',
        '🇩🇪':'Германия','🇦🇹':'Австрия','🇳🇱':'Нидерланды',
        '🇪🇸':'Испания','🇦🇺':'Австралия','🇫🇷':'Франция',
        '🇸🇪':'Швеция','🇺🇸':'США','🇨🇦':'Канада',
        '🇹🇭':'Таиланд','🇯🇵':'Япония','🇧🇬':'Болгария',
        '🇧🇷':'Бразилия','🇧🇪':'Бельгия','🇳🇿':'Новая Зеландия',
        '🇩🇰':'Дания','🇲🇪':'Черногория','🇶🇦':'Катар','🇦🇪':'ОАЭ'
    };

    // ===== ЗАПУСК =====
    renderTeams();
    renderCalendar();
    renderStandings();
    initTabs();
    initModal();
})();
