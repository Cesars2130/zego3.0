"use client";
import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto'; // Importa la biblioteca Chart.js

function Graficas() {
    const chartRef = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);

    useEffect(() => {
        if (chartInstance) {
            chartInstance.destroy();
        }
        
        const ctx = chartRef.current.getContext('2d');
        const newChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        setChartInstance(newChartInstance);

        return () => {
            if (newChartInstance) {
                newChartInstance.destroy();
            }
        };
    }, []);

    return (
        <div style={{ width: '80%', margin: 'auto', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '20px' }}>Gráfica</h2>
            <div style={{ position: 'relative', height: '500px' }}>
                <canvas ref={chartRef} style={{ width: '370px', height: '400px' }} />
            </div>
        </div>
    );
}

export default Graficas;




//NO TOCAR ESTO ES LA GRAFICA PARA LA API PARA PODER METER LOS DATOS DEL FECHT PARA PODER GRAFICAR CON BASE A LOS DATOS DE LA API XD 
// import React, { useEffect, useState } from 'react';
// import Graficas from './Graficas';

// function App() {
//     const [chartData, setChartData] = useState({
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     });

//     const [chartOptions, setChartOptions] = useState({
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     });

//     useEffect(() => {
//         // Aquí podrías hacer la llamada a tu API para obtener los datos y luego actualizar el estado chartData
//     }, []);

//     return (
//         <div>
//             <Graficas data={chartData} options={chartOptions} />
//         </div>
//     );
// }

// export default App;
