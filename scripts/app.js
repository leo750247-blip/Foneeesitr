(function(){
    // ===== ДАННЫЕ С ФОТО =====
    var data = {
        teams: [
            {id:"mclaren",name:"McLaren",country:"🇬🇧",budget:130,color:"#ff8700",
             pilots:[
                 {name:"Lando Norris",number:4,flag:"🇬🇧",age:25,races:113,wins:0,podiums:0,wiki:"Lando_Norris",photo:"https://www.formula1.com/content/dam/fom-website/drivers/L/LANDO_NORRIS_01.jpg"},
                 {name:"Charles Leclerc",number:16,flag:"🇲🇨",age:27,races:127,wins:5,podiums:0,wiki:"Charles_Leclerc",photo:"https://www.formula1.com/content/dam/fom-website/drivers/C/CHARLES_LECLERC_01.jpg"}
             ],
             reserve:[{name:"Gabriel Bortoleto",flag:"🇧🇷",age:20}]},
            {id:"ferrari",name:"Ferrari",country:"🇮🇹",budget:190,color:"#dc0000",
             pilots:[
                 {name:"Lewis Hamilton",number:44,flag:"🇬🇧",age:40,races:356,wins:105,podiums:0,wiki:"Lewis_Hamilton",photo:"https://www.formula1.com/content/dam/fom-website/drivers/L/LEWIS_HAMILTON_01.jpg"},
                 {name:"George Russell",number:63,flag:"🇬🇧",age:27,races:120,wins:2,podiums:0,wiki:"George_Russell",photo:"https://www.formula1.com/content/dam/fom-website/drivers/G/GEORGE_RUSSELL_01.jpg"}
             ],
             reserve:[{name:"Gabriele Mini",flag:"🇮🇹",age:19}]},
            {id:"mercedes",name:"Mercedes",country:"🇩🇪",budget:310,color:"#00d2be",
             pilots:[
                 {name:"Kimi Antonelli",number:12,flag:"🇮🇹",age:19,races:0,wins:0,podiums:0,wiki:"Kimi_Antonelli",photo:"https://www.formula1.com/content/dam/fom-website/drivers/K/KIMI_ANTONELLI_01.jpg"},
                 {name:"Alex Albon",number:23,flag:"🇹🇭",age:28,races:87,wins:0,podiums:0,wiki:"Alex_Albon",photo:"https://www.formula1.com/content/dam/fom-website/drivers/A/ALEX_ALBON_01.jpg"}
             ],
             reserve:[{name:"Frederik Vesti",flag:"🇩🇰",age:22}]},
            {id:"redbull",name:"Red Bull",country:"🇦🇹",budget:280,color:"#1e41b0",
             pilots:[
                 {name:"Max Verstappen",number:1,flag:"🇳🇱",age:27,races:209,wins:63,podiums:0,wiki:"Max_Verstappen",photo:"https://www.formula1.com/content/dam/fom-website/drivers/M/MAX_VERSTAPPEN_01.jpg"},
                 {name:"Carlos Sainz",number:55,flag:"🇪🇸",age:30,races:196,wins:2,podiums:0,wiki:"Carlos_Sainz_Jr.",photo:"https://www.formula1.com/content/dam/fom-website/drivers/C/CARLOS_SAINZ_01.jpg"}
             ],
             reserve:[{name:"Yuki Tsunoda",flag:"🇯🇵",age:24},{name:"Nikola Tsolov",flag:"🇧🇬",age:18}]},
            {id:"williams",name:"Williams",country:"🇬🇧",budget:136,color:"#00a3e0",
             pilots:[
                 {name:"Oscar Piastri",number:81,flag:"🇦🇺",age:23,races:46,wins:0,podiums:0,wiki:"Oscar_Piastri",photo:"https://www.formula1.com/content/dam/fom-website/drivers/O/OSCAR_PIASTRI_01.jpg"},
                 {name:"Isack Hadjar",number:37,flag:"🇫🇷",age:20,races:0,wins:0,podiums:0,wiki:"Isack_Hadjar",photo:"https://www.formula1.com/content/dam/fom-website/drivers/I/ISACK_HADJAR_01.jpg"}
             ],
             reserve:[{name:"Dino Beganovic",flag:"🇲🇪",age:21},{name:"Jack Dunn",flag:"🇦🇺",age:19}]},
            {id:"racing-bulls",name:"Racing Bulls",country:"🇮🇹",budget:139,color:"#4d7aff",
             pilots:[
                 {name:"Arvid Lindblad",number:4,flag:"🇸🇪",age:18,races:0,wins:0,podiums:0,wiki:"Arvid_Lindblad",photo:"https://www.formula1.com/content/dam/fom-website/drivers/A/ARVID_LINDBLAD_01.jpg"},
                 {name:"Leonardo Fornaroli",number:30,flag:"🇮🇹",age:19,races:0,wins:0,podiums:0,wiki:"Leonardo_Fornaroli",photo:"https://www.formula1.com/content/dam/fom-website/drivers/L/LEONARDO_FORNAROLI_01.jpg"}
             ],
             reserve:[{name:"Rafael Camara",flag:"🇧🇷",age:19},{name:"Liam Lawson",flag:"🇳🇿",age:23}]},
            {id:"haas",name:"Haas",country:"🇺🇸",budget:80,color:"#b6babd",pilots:[],reserve:[]},
            {id:"cadillac",name:"Cadillac",country:"🇺🇸",budget:120,color:"#c8102e",pilots:[],reserve:[]},
            {id:"aston",name:"Aston Martin",country:"🇬🇧",budget:170,color:"#006f62",
             pilots:[
                 {name:"Fernando Alonso",number:14,flag:"🇪🇸",age:43,races:401,wins:32,podiums:0,wiki:"Fernando_Alonso",photo:"https://www.formula1.com/content/dam/fom-website/drivers/F/FERNANDO_ALONSO_01.jpg"},
                 {name:"Lance Stroll",number:18,flag:"🇨🇦",age:26,races:165,wins:0,podiums:0,wiki:"Lance_Stroll",photo:"https://www.formula1.com/content/dam/fom-website/drivers/L/LANCE_STROLL_01.jpg"}
             ],
             reserve:[{name:"Stoffel Vandoorne",flag:"🇧🇪",age:33},{name:"Jack Crawford",flag:"🇺🇸",age:20}]},
            {id:"audi",name:"Audi",country:"🇩🇪",budget:190,color:"#bb0a21",
             pilots:[
                 {name:"Nico Hulkenberg",number:27,flag:"🇩🇪",age:37,races:227,wins:0,podiums:0,wiki:"Nico_Hulkenberg",photo:"https://www.formula1.com/content/dam/fom-website/drivers/N/NICO_HULKENBERG_01.jpg"},
                 {name:"Theo Boschung",number:5,flag:"🇩🇪",age:22,races:0,wins:0,podiums:0,wiki:"Theo_Boschung",photo:"https://www.formula1.com/content/dam/fom-website/drivers/T/THEO_BOSCHUNG_01.jpg"}
             ],
             reserve:[{name:"Daniele Gianni",flag:"🇮🇹",age:21}]},
            {id:"alpine",name:"Alpine",country:"🇫🇷",budget:110,color:"#ff6b9d",pilots:[],reserve:[]}
        ],
        calendar: [
            {round:1,name:"Bahrain Grand Prix",country:"🇧🇭",date:"1–3 March"},
            {round:2,name:"Saudi Arabian Grand Prix",country:"🇸🇦",date:"8–10 March"},
            {round:3,name:"Australian Grand Prix",country:"🇦🇺",date:"22–24 March"},
            {round:4,name:"Japanese Grand Prix",country:"🇯🇵",date:"5–7 April"},
            {round:5,name:"Chinese Grand Prix",country:"🇨🇳",date:"19–21 April"},
            {round:6,name:"Miami Grand Prix",country:"🇺🇸",date:"3–5 May"},
            {round:7,name:"Emilia Romagna Grand Prix",country:"🇮🇹",date:"17–19 May"},
            {round:8,name:"Monaco Grand Prix",country:"🇲🇨",date:"31 May – 2 June"},
            {round:9,name:"Spanish Grand Prix",country:"🇪🇸",date:"7–9 June"},
            {round:10,name:"Canadian Grand Prix",country:"🇨🇦",date:"14–16 June"},
            {round:11,name:"Austrian Grand Prix",country:"🇦🇹",date:"28–30 June"},
            {round:12,name:"British Grand Prix",country:"🇬🇧",date:"5–7 July"},
            {round:13,name:"Belgian Grand Prix",country:"🇧🇪",date:"19–21 July"},
            {round:14,name:"Hungarian Grand Prix",country:"🇭🇺",date:"26–28 July"},
            {round:15,name:"Dutch Grand Prix",country:"🇳🇱",date:"23–25 August"},
            {round:16,name:"Italian Grand Prix",country:"🇮🇹",date:"6–8 September"},
            {round:17,name:"Azerbaijan Grand Prix",country:"🇦🇿",date:"13–15 September"},
            {round:18,name:"Singapore Grand Prix",country:"🇸🇬",date:"27–29 September"},
            {round:19,name:"United States Grand Prix",country:"🇺🇸",date:"11–13 October"},
            {round:20,name:"Mexico City Grand Prix",country:"🇲🇽",date:"18–20 October"},
            {round:21,name:"Sao Paulo Grand Prix",country:"🇧🇷",date:"1–3 November"},
            {round:22,name:"Las Vegas Grand Prix",country:"🇺🇸",date:"15–17 November"},
            {round:23,name:"Qatar Grand Prix",country:"🇶🇦",date:"29 Nov – 1 Dec"},
            {round:24,name:"Abu Dhabi Grand Prix",country:"🇦🇪",date:"6–8 December"}
        ]
    };

    var countryMap = {
        '🇬🇧':'Great Britain','🇲🇨':'Monaco','🇮🇹':'Italy',
        '🇩🇪':'Germany','🇦🇹':'Austria','🇳🇱':'Netherlands',
        '🇪🇸':'Spain','🇦🇺':'Australia','🇫🇷':'France',
        '🇸🇪':'Sweden','🇺🇸':'USA','🇨🇦':'Canada',
        '🇹🇭':'Thailand','🇯🇵':'Japan','🇧🇬':'Bulgaria',
        '🇧🇷':'Brazil','🇧🇪':'Belgium','🇳🇿':'New Zealand',
        '🇩🇰':'Denmark','🇲🇪':'Montenegro','🇶🇦':'Qatar','🇦🇪':'UAE'
    };

    var colorMap = {
        mclaren:'#ff8700',ferrari:'#dc0000',mercedes:'#00d2be',
        redbull:'#1e41b0',williams:'#00a3e0','racing-bulls':'#4d7aff',
        aston:'#006f62',audi:'#bb0a21'
    };

    // ===== РЕНДЕР КОМАНД =====
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
                pilotsHTML = '<div class="pilot-item"><span class="vacant">— Vacant —</span></div>';
                pilotsHTML += '<div class="pilot-item"><span class="vacant">— Vacant —</span></div>';
            } else {
                team.pilots.forEach(function(p) {
                    var stats = p.age + ' yrs';
                    if (p.races > 0) stats += ' · ' + p.races + ' GP';
                    else stats += ' · Debut 2026';
                    if (p.wins > 0) stats += ' · ' + p.wins + ' W';
                    pilotsHTML += '<div class="pilot-item" data-name="' + p.name + '" data-team="' + team.name + '" data-flag="' + p.flag + '" data-age="' + p.age + '" data-number="' + p.number + '" data-budget="' + team.budget + '" data-teamkey="' + team.id + '" data-races="' + p.races + '" data-wins="' + p.wins + '" data-podiums="' + p.podiums + '" data-photo="' + p.photo + '" data-wiki="' + p.wiki + '">' +
                        '<img class="pilot-photo" src="' + p.photo + '" alt="' + p.name + '" loading="lazy" onerror="this.src=\'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Crect fill=%22%232a2a3e%22 width=%22100%22 height=%22100%22/%3E%3Ctext x=%2250%22 y=%2255%22 text-anchor=%22middle%22 font-family=%22Barlow Condensed%22 font-size=%2230%22 fill=%22%236f6f8a%22%3E' + p.initials + '%3C/text%3E%3C/svg%3E\'">' +
                        '<span class="pilot-number">' + p.number + '</span>' +
                        '<span class="pilot-name"><span class="flag">' + p.flag + '</span>' + p.name + '</span>' +
                        '<span class="pilot-stats">' + stats + '</span>' +
                    '</div>';
                });
            }

            var reserveHTML = '';
            if (team.reserve.length > 0) {
                team.reserve.forEach(function(r) {
                    reserveHTML += '<div class="pilot-item reserve"><span class="pilot-number">R</span><span class="pilot-name"><span class="flag">' + r.flag + '</span>' + r.name + '</span><span class="pilot-stats">' + r.age + ' yrs</span></div>';
                });
            } else {
                reserveHTML = '<div class="pilot-item reserve"><span class="vacant">— Not announced —</span></div>';
            }

            card.innerHTML = 
                '<div class="card-top" style="background:' + team.color + '"></div>' +
                '<div class="card-body">' +
                    '<div class="card-team">' + team.name + ' <span class="country">' + team.country + '</span></div>' +
                    '<div class="card-budget">$' + team.budget + 'M <span>· budget</span></div>' +
                    '<div class="card-label">Race drivers</div>' +
                    '<div class="pilots-list">' + pilotsHTML + '</div>' +
                    '<div class="card-label" style="margin-top:10px">Reserve</div>' +
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
                '<span class="round">Race ' + race.round + '</span>' +
                '<span class="race-name">' + race.name + '</span>' +
                '<span class="race-country">' + race.country + '</span>' +
                '<span class="race-date">' + race.date + '</span>';
            list.appendChild(div);
        });
    }

    // ===== ЧЕМПИОНАТ =====
    function renderStandings() {
        var container = document.getElementById('standingsContent');
        var allPilots = [];
        data.teams.forEach(function(team) {
            team.pilots.forEach(function(p) {
                allPilots.push({name:p.name,flag:p.flag,team:team.name,pts:0});
            });
        });

        var html = '<table class="standings-table"><thead><tr><th>#</th><th>Driver</th><th>Team</th><th style="text-align:right">Points</th></tr></thead><tbody>';
        allPilots.forEach(function(p, i) {
            var cls = '';
            if (i === 0) cls = ' pos-1';
            else if (i === 1) cls = ' pos-2';
            else if (i === 2) cls = ' pos-3';
            html += '<tr><td class="pos' + cls + '">' + (i+1) + '</td><td><span class="flag">' + p.flag + '</span><span class="driver">' + p.name + '</span></td><td class="team-name">' + p.team + '</td><td class="pts">0</td></tr>';
        });
        html += '</tbody></table>';

        html += '<h3 style="font-family:\'Barlow Condensed\',sans-serif;font-size:.8rem;font-weight:600;color:var(--muted);margin:20px 0 8px">CONSTRUCTORS</h3>';
        html += '<table class="standings-table"><thead><tr><th>#</th><th>Team</th><th style="text-align:right">Points</th></tr></thead><tbody>';
        data.teams.forEach(function(team, i) {
            var cls = '';
            if (i === 0) cls = ' pos-1';
            else if (i === 1) cls = ' pos-2';
            else if (i === 2) cls = ' pos-3';
            html += '<tr><td class="pos' + cls + '">' + (i+1) + '</td><td class="driver">' + team.name + '</td><td class="pts">0</td></tr>';
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
            var item = e.target.closest('.pilot-item[data-name]');
            if (!item) return;

            var name = item.dataset.name;
            var team = item.dataset.team;
            var flag = item.dataset.flag;
            var age = item.dataset.age;
            var number = item.dataset.number;
            var budget = item.dataset.budget;
            var teamkey = item.dataset.teamkey;
            var races = item.dataset.races;
            var wins = item.dataset.wins;
            var podiums = item.dataset.podiums;
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
            document.getElementById('modalRaces').textContent = races;
            document.getElementById('modalWins').textContent = wins;
            document.getElementById('modalPodiums').textContent = podiums || 0;
            document.getElementById('modalBudget').textContent = '$' + budget + 'M';
            document.getElementById('modalLink').href = 'https://ru.wikipedia.org/wiki/' + wiki;

            var photoEl = document.getElementById('modalPhoto');
            photoEl.src = photo;
            photoEl.onerror = function() {
                this.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22%3E%3Crect fill=%22%231a1a28%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%22100%22 y=%22110%22 text-anchor=%22middle%22 font-family=%22Barlow Condensed%22 font-size=%2270%22 fill=%22%236f6f8a%22%3E' + name.split(' ').map(function(w){return w[0]}).join('') + '%3C/text%3E%3C/svg%3E';
            };

            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
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

    // ===== ЗАПУСК =====
    renderTeams();
    renderCalendar();
    renderStandings();
    initTabs();
    initModal();
    updateCounters();
})();
