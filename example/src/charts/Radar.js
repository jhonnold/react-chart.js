import React from 'react';
import { RadarChart } from '@jhonnold/react-chart.js';

const data = {
    labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
    datasets: [
        {
            label: '# of Votes',
            data: [2, 9, 3, 5, 2, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        },
    ],
};

const options = {
    scale: {
        ticks: { beginAtZero: true },
    },
};

const Radar = () => (
    <>
        <div className="header">
            <h1 className="title">Radar Chart</h1>
            <div className="links">
                <a
                    class="btn btn-gh"
                    href="https://github.com/jhonnold/react-chart.js/blob/master/example/src/charts/Radar.js"
                >
                    Github Source
                </a>
            </div>
        </div>
        <RadarChart data={data} options={options} />
    </>
);

export default Radar;
