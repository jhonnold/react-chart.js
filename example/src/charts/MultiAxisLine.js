import React from 'react';
import { LineChart } from '@jhonnold/react-chart.js';

const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
            yAxisID: 'y-axis-1',
        },
        {
            label: '# of No Votes',
            data: [1, 2, 1, 1, 2, 2],
            fill: false,
            backgroundColor: 'rgb(54, 162, 235)',
            borderColor: 'rgba(54, 162, 235, 0.2)',
            yAxisID: 'y-axis-2',
        },
    ],
};

const options = {
    scales: {
        yAxes: [
            {
                type: 'linear',
                display: true,
                position: 'left',
                id: 'y-axis-1',
            },
            {
                type: 'linear',
                display: true,
                position: 'right',
                id: 'y-axis-2',
                gridLines: {
                    drawOnChartArea: false,
                },
            },
        ],
    },
};

const MultiAxisLine = () => (
    <>
        <div className="header">
            <h1 className="title">Multi Axis Line Chart</h1>
            <div className="links">
                <a
                    class="btn btn-gh"
                    href="https://github.com/jhonnold/react-chart.js/blob/master/example/src/charts/MultiAxisLine.js"
                >
                    Github Source
                </a>
            </div>
        </div>
        <LineChart data={data} options={options} />
    </>
);

export default MultiAxisLine;
