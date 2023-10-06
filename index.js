function drawChart(data) {
var chart = document.getElementById("chart");

// Очищаем график перед рисованием новых столбцов
chart.innerHTML = "";

// Создаем столбец для каждого значения в данных
for (var i = 0; i < data.length; i++) {
var value = data[i];
var bar = document.createElement("div");
bar.className = "bar";
bar.style.height = value + "px";
chart.appendChild(bar);
}
}

// Пример данных для графика
var data = [100, 150, 120, 200, 80];

// Отрисовываем график при загрузке страницы
drawChart(data);