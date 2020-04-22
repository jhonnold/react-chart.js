import * as React from 'react';

import Chart from 'chart.js';
import merge from 'lodash/merge';
import assign from 'lodash/assign';
import find from 'lodash/find';

interface DataFn {
    (canvas: HTMLCanvasElement | null): Chart.ChartData;
}

interface Props {
    height: number;
    width: number;
    redraw: boolean;
    type: Chart.ChartType;
    data: Chart.ChartData | DataFn;
    options: Chart.ChartOptions;
    plugins: Chart.PluginServiceRegistrationOptions[];
}

const ChartComponent = React.forwardRef((props: Props, ref) => {
    const {
        data,
        height = 150,
        width = 300,
        type = 'doughnut',
        options = {},
        plugins = [],
        redraw = false,
    } = props;

    const canvas = React.useRef<HTMLCanvasElement>(null);
    const [chart, setChart] = React.useState<Chart | null>(null);

    React.useImperativeHandle(ref, (): Chart | null => chart, [chart]);

    const computedData = React.useMemo<Chart.ChartData>(
        (): Chart.ChartData =>
            typeof data === 'function' ? data(canvas.current) : merge({}, data),
        [data]
    );

    const renderChart = (): void => {
        if (canvas.current === null) return;

        setChart(
            new Chart(canvas.current, {
                type,
                data: computedData,
                options,
                plugins,
            })
        );
    };

    const updateChart = (): void => {
        if (!chart) return;

        if (options) {
            chart.options = Chart.helpers.configMerge(chart.options, options);
        }

        if (!chart.config.data) {
            chart.config.data = computedData;
            chart.update();
            return;
        }

        const { datasets: newDataSets = [], ...newChartData } = computedData;
        const { datasets: currentDataSets = [] } = chart.config.data;

        // copy values
        assign(chart.config.data, newChartData);
        chart.config.data.datasets = newDataSets.map(
            (newDataSet: Chart.ChartDataSets): Chart.ChartDataSets => {
                // given the new set, find it's current match
                const currentDataSet = find(
                    currentDataSets,
                    (d: Chart.ChartDataSets): boolean =>
                        d.label === newDataSet.label &&
                        d.type === newDataSet.type
                );

                // There is no original to update, so simply add new one
                if (!currentDataSet || !newDataSet.data) return newDataSet;

                if (!currentDataSet.data) {
                    currentDataSet.data = [];
                } else {
                    currentDataSet.data.splice(newDataSet.data.length);
                }

                // copy in values
                assign(currentDataSet.data, newDataSet.data);

                // apply dataset changes, but keep copied data
                return {
                    ...currentDataSet,
                    ...newDataSet,
                    data: currentDataSet.data,
                };
            }
        );

        chart.update();
    };

    const destroyChart = (): void => {
        if (chart) chart.destroy();
    };

    React.useEffect((): (() => void) => {
        renderChart();

        return () => destroyChart();
    }, []);

    React.useEffect((): void => {
        if (redraw) {
            destroyChart();
            renderChart();
        } else {
            updateChart();
        }
    }, [props]);

    return <canvas height={height} width={width} ref={canvas} />;
});

export default ChartComponent;
