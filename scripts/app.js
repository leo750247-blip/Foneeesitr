<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Ф1 2028</title>
    <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800;900&family=Barlow:wght@400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles/main.css">
</head>
<body>

    <div class="flag-bg">
        <div class="checkered"></div>
    </div>

    <header class="header">
        <div class="header-left">
            <div class="logo">Ф1 <span>2028</span></div>
            <div class="header-stats">
                <span id="teamCount">11</span> Команд ·
                <span id="pilotCount">22</span> Пилота ·
                <span id="reserveCount">14</span> Резерв
            </div>
        </div>
        <div class="header-right">
            <button class="music-btn" id="musicBtn" onclick="toggleMusic()">🎵 Включить музыку</button>
            <div class="countdown" id="countdown">
                ⏱️ <span id="days">0</span>д <span id="hours">0</span>ч <span id="minutes">0</span>м <span id="seconds">0</span>с
            </div>
            <nav class="header-nav">
                <button class="tab active" data-tab="pilots">Пилоты</button>
                <button class="tab" data-tab="standings">Чемпионат</button>
                <button class="tab" data-tab="calendar">Календарь</button>
                <button class="tab" data-tab="history">🏆 История</button>
            </nav>
        </div>
    </header>

    <main>
        <!-- Пилоты -->
        <section class="content active" id="pilots">
            <div class="filter-bar">
                <button class="filter-btn active" data-filter="all">Все команды</button>
                <button class="filter-btn" data-filter="mclaren">McLaren</button>
                <button class="filter-btn" data-filter="ferrari">Ferrari</button>
                <button class="filter-btn" data-filter="mercedes">Mercedes</button>
                <button class="filter-btn" data-filter="redbull">Red Bull</button>
                <button class="filter-btn" data-filter="aston">Aston Martin</button>
                <button class="filter-btn" data-filter="audi">Audi</button>
                <button class="filter-btn" data-filter="williams">Williams</button>
                <button class="filter-btn" data-filter="racing-bulls">Racing Bulls</button>
                <button class="filter-btn" data-filter="cadillac">Cadillac</button>
                <button class="filter-btn" data-filter="alpine">Alpine</button>
            </div>
            <div class="grid" id="teamGrid"></div>
        </section>

        <!-- Чемпионат -->
        <section class="content" id="standings">
            <div class="standings-header">
                <h2>ЧЕМПИОНАТ 2028</h2>
                <p class="muted">🏆 Сезон завершён</p>
            </div>

            <div class="podium-3d">
                <div class="podium-3d-wrapper">
                    <div class="podium-tier">
                        <div class="tier tier-bronze">
                            <span class="tier-pos">🥉</span>
                            <span class="tier-name">—</span>
                            <span class="tier-pts">0 pts</span>
                        </div>
                        <div class="tier tier-gold">
                            <span class="tier-pos">🥇</span>
                            <span class="tier-name">—</span>
                            <span class="tier-pts">0 pts</span>
                        </div>
                        <div class="tier tier-silver">
                            <span class="tier-pos">🥈</span>
                            <span class="tier-name">—</span>
                            <span class="tier-pts">0 pts</span>
                        </div>
                    </div>
                </div>
            </div>

            <div id="standingsContent"></div>
        </section>

        <!-- Календарь -->
        <section class="content" id="calendar">
            <div class="calendar-header">
                <h2>КАЛЕНДАРЬ 2028</h2>
                <p class="muted">24 этапа</p>
            </div>
            <div class="calendar-list" id="calendarList"></div>
        </section>

        <!-- История -->
        <section class="content" id="history">
            <div class="history-header">
                <h2>🏆 ИСТОРИЯ ПОБЕДИТЕЛЕЙ</h2>
                <p class="muted">Кубок конструкторов и чемпион мира</p>
            </div>
            <div class="history-grid">
                <div class="history-card">
                    <div class="history-year">2027</div>
                    <div class="history-winners">
                        <div class="history-item">
                            <span class="history-label">🏆 Кубок конструкторов</span>
                            <span class="history-value">Ferrari</span>
                        </div>
                        <div class="history-item">
                            <span class="history-label">👑 Чемпион мира</span>
                            <span class="history-value">🇲🇨 Charles Leclerc</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Модалка -->
    <div class="modal" id="modal">
        <div class="modal-box">
            <button class="modal-close" id="modalClose">×</button>
            <div class="modal-content">
                <img class="modal-photo" id="modalPhoto" src="" alt="">
                <div class="modal-info">
                    <div class="modal-number" id="modalNumber">4</div>
                    <div class="modal-name" id="modalName">Ландо Норрис</div>
                    <div class="modal-team" id="modalTeam">McLaren</div>
                    <div class="modal-stats">
                        <div><span class="stat-label">Страна</span><span class="stat-value" id="modalCountry">🇬🇧 Великобритания</span></div>
                        <div><span class="stat-label">Возраст</span><span class="stat-value" id="modalAge">25</span></div>
                        <div><span class="stat-label">Команда</span><span class="stat-value" id="modalTeamName">McLaren</span></div>
                        <div><span class="stat-label">Бюджет</span><span class="stat-value" id="modalBudget">280 млн</span></div>
                    </div>
                    <a class="modal-link" id="modalLink" href="#" target="_blank">📖 Википедия →</a>
                </div>
            </div>
        </div>
    </div>

    <script src="scripts/app.js"></script>
</body>
</html>
