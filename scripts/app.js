function renderStandings() {
    var container = document.getElementById('standingsContent');
    
    // ===== ДАННЫЕ ЧЕМПИОНАТА ПОСЛЕ 3-Х ЭТАПОВ =====
    var standingsData = [
        {pos:1, name:"Charles Leclerc", flag:"🇲🇨", team:"McLaren", pts:68 + 25},
        {pos:2, name:"Max Verstappen", flag:"🇳🇱", team:"Red Bull", pts:61 + 18},
        {pos:3, name:"Lewis Hamilton", flag:"🇬🇧", team:"Ferrari", pts:58 + 12},
        {pos:4, name:"Oscar Piastri", flag:"🇦🇺", team:"Williams", pts:14 + 15},
        {pos:5, name:"Lando Norris", flag:"🇬🇧", team:"McLaren", pts:40},
        {pos:6, name:"Carlos Sainz", flag:"🇪🇸", team:"Red Bull", pts:14 + 10},
        {pos:7, name:"George Russell", flag:"🇬🇧", team:"Ferrari", pts:28},
        {pos:8, name:"Kimi Antonelli", flag:"🇮🇹", team:"Mercedes", pts:14 + 2},
        {pos:9, name:"Fernando Alonso", flag:"🇪🇸", team:"Aston Martin", pts:12 + 1},
        {pos:10, name:"Alex Albon", flag:"🇹🇭", team:"Mercedes", pts:3 + 4},
        {pos:11, name:"Gabriel Bortoleto", flag:"🇧🇷", team:"McLaren", pts:8},
        {pos:12, name:"Gabriele Mini", flag:"🇮🇹", team:"Ferrari", pts:6},
        {pos:13, name:"Isack Hadjar", flag:"🇫🇷", team:"Williams", pts:2},
        {pos:14, name:"Pierre Gasly", flag:"🇫🇷", team:"Alpine", pts:0},
        {pos:15, name:"Jack Doohan", flag:"🇦🇺", team:"Alpine", pts:0},
        {pos:16, name:"Kevin Magnussen", flag:"🇩🇰", team:"Cadillac", pts:0},
        {pos:17, name:"Zhou Guanyu", flag:"🇨🇳", team:"Cadillac", pts:0},
        {pos:18, name:"Nico Hülkenberg", flag:"🇩🇪", team:"Audi", pts:0},
        {pos:19, name:"Theo Pourchaire", flag:"🇩🇪", team:"Audi", pts:0},
        {pos:20, name:"Arvid Lindblad", flag:"🇸🇪", team:"Racing Bulls", pts:0},
        {pos:21, name:"Leonardo Fornaroli", flag:"🇮🇹", team:"Racing Bulls", pts:0},
        {pos:22, name:"Lance Stroll", flag:"🇨🇦", team:"Aston Martin", pts:0}
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
