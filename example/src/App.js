import React, { useEffect, useState } from 'react';
import ChartComponent from 'react-chart-js/chart';

const randomInt = () => Math.floor(Math.random() * (10 - 1 + 1)) + 1;

const chartConfig = {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    },
    options: {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    },
};

const App = () => {
    const [data, setData] = useState(chartConfig.data);

    useEffect(() => {
        const interval = setInterval(() => {
            setData(data => ({
                ...data,
                datasets: [
                    {
                        ...data.datasets[0],
                        data: [
                            randomInt(),
                            randomInt(),
                            randomInt(),
                            randomInt(),
                            randomInt(),
                            randomInt(),
                        ],
                    },
                ],
            }));
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <ChartComponent type="bar" options={chartConfig.options} data={data} />
    );
};

export default App;
