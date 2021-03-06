import React from 'react';
import { ScatterChart } from '@jhonnold/react-chart.js';

const rand = () => Math.round(Math.random() * 20 - 10);

const data = {
    datasets: [
        {
            label: 'A dataset',
            data: [
                { x: rand(), y: rand() },
                { x: rand(), y: rand() },
                { x: rand(), y: rand() },
                { x: rand(), y: rand() },
                { x: rand(), y: rand() },
                { x: rand(), y: rand() },
                { x: rand(), y: rand() },
                { x: rand(), y: rand() },
                { x: rand(), y: rand() },
                { x: rand(), y: rand() },
                { x: rand(), y: rand() },
                { x: rand(), y: rand() },
                { x: rand(), y: rand() },
                { x: rand(), y: rand() },
            ],
            backgroundColor: 'rgba(255, 99, 132, 1)',
        },
    ],
};

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

const Scatter = () => (
    <>
        <div className="header">
            <h1 className="title">Scatter Chart</h1>
            <div className="links">
                <a
                    class="btn btn-gh"
                    href="https://github.com/jhonnold/react-chart.js/blob/master/example/src/charts/Scatter.js"
                >
                    Github Source
                </a>
            </div>
        </div>
        <ScatterChart data={data} options={options} />
    </>
);

export default Scatter;
