let migrafico = document.getElementById('migrafico').getContext('2d');
let grafico = new Chart(migrafico, {
    type: 'bar',
    data: {
        labels: ['Solteros', 'Casados', 'Viudos', 'Divorciados', 'Convivientes'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 50],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 199, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

let migraficolineal=document.getElementById("migraficolineal")
var myLineChart = new Chart(migraficolineal, {
    type: 'horizontalBar',
    data: {
        labels: ['Solteros', 'Casados', 'Viudos', 'Divorciados', 'Convivientes'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 50],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 199, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    } 
});


let migraficocirculo=document.getElementById("migraficocirculo")
var mixedChart = new Chart(migraficocirculo, {
    type: 'doughnut',
    data: {
        labels: ['Solteros', 'Casados', 'Viudos', 'Divorciados', 'Convivientes'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 50],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 199, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 5
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    } 
});

let r=()=>{
    return Math.round(Math.random()*(50-0)+0);
}
// SIMULAR CAMBIO DE DATOS EN TIEMPO REAL
setInterval(()=>{

    grafico.data.datasets[0].data=[ r() , r(), r(), r(), r()],
    grafico.update()
},1000)
