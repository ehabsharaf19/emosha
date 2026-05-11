# Emosha Game 🎮

### Description | الوصف
Emosha is a combat and survival game where groups fight for territory control.
لعبة "إيموشا" هي لعبة قتالية تعتمد على المجموعات والسيطرة على المناطق في الخريطة من أجل البقاء.

### Goals | الأهداف
- Teamwork and Strategy.
- Map Control.
- Survival of the fittest.
        button { padding: 10px 20px; margin: 5px; cursor: pointer; font-weight: bold; }
    </style>
</head>
<body>
    <h1>لعبة إيموشا: صراع الفرق ⚔️</h1>
    
    <div class="controls">
        <p>اختر فريقك وابدأ السيطرة:</p>
        <button onclick="setTeam('red')" style="color:red">فريق الصقور (أحمر)</button>
        <button onclick="setTeam('blue')" style="color:blue">فريق الذئاب (أزرق)</button>
    </div>

    <div class="map">
        <div class="zone" onclick="capture(this)">منطقة 1</div>
        <div class="zone" onclick="capture(this)">منطقة 2</div>
        <div class="zone" onclick="capture(this)">منطقة 3</div>
        <div class="zone" onclick="capture(this)">منطقة 4</div>
        <div class="zone" onclick="capture(this)">منطقة 5</div>
        <div class="zone" onclick="capture(this)">منطقة 6</div>
    </div>

    <script>
        let currentTeam = '';
        function setTeam(team) {
            currentTeam = team;
            alert("أنت الآن تقاتل مع " + (team === 'red' ? 'الصقور' : 'الذئاب'));
        }
        function capture(element) {
            if (!currentTeam) {
                alert("يجب اختيار فريق أولاً!");
                return;
            }
            element.className = 'zone ' + (currentTeam === 'red' ? 'red-team' : 'blue-team');
        }
    </script>
</body>
</html>
        button { padding: 10px 20px; margin: 5px; cursor: pointer; font-weight: bold; }
    </style>
</head>
<body>
    <h1>لعبة إيموشا: صراع الفرق ⚔️</h1>
    
    <div class="controls">
        <p>اختر فريقك وابدأ السيطرة:</p>
        <button onclick="setTeam('red')" style="color:red">فريق الصقور (أحمر)</button>
        <button onclick="setTeam('blue')" style="color:blue">فريق الذئاب (أزرق)</button>
    </div>

    <div class="map">
        <div class="zone" onclick="capture(this)">منطقة 1</div>
        <div class="zone" onclick="capture(this)">منطقة 2</div>
        <div class="zone" onclick="capture(this)">منطقة 3</div>
        <div class="zone" onclick="capture(this)">منطقة 4</div>
        <div class="zone" onclick="capture(this)">منطقة 5</div>
        <div class="zone" onclick="capture(this)">منطقة 6</div>
    </div>

    <script>
        let currentTeam = '';
        function setTeam(team) {
            currentTeam = team;
            alert("أنت الآن تقاتل مع " + (team === 'red' ? 'الصقور' : 'الذئاب'));
        }
        function capture(element) {
            if (!currentTeam) {
                alert("يجب اختيار فريق أولاً!");
                return;
            }
            element.className = 'zone ' + (currentTeam === 'red' ? 'red-team' : 'blue-team');
        }
    </script>
</body>
</html>
