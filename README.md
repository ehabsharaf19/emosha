<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>إيموشا - حرب المناطق</title>
    <style>
        body { background: #121212; color: white; font-family: sans-serif; text-align: center; }
        .map { display: grid; grid-template-columns: repeat(3, 100px); gap: 10px; justify-content: center; margin-top: 20px; }
        .zone { width: 100px; height: 100px; background: #333; border: 2px solid #555; display: flex; align-items: center; justify-content: center; cursor: pointer; border-radius: 8px; }
        .red-team { background: #ff4d4d !important; }
        .blue-team { background: #4d94ff !important; }
        .controls { margin-top: 30px; padding: 20px; background: #222; }
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
