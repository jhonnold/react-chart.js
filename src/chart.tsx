import * as React from 'react';

import Chart from 'chart.js';
import merge from 'lodash/merge';

interface DataFn {
    (canvas: HTMLCanvasElement | null): Chart.ChartData;
}

interface Props {
    height?: number;
    width?: number;
    type: string;
    data: Chart.ChartData | DataFn | null;
    options: Chart.ChartOptions;
}

const ChartComponent = React.forwardRef((props: Props, ref) => {
    const { height, width, type, data, options } = props;

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
            })
        );
    };

    React.useEffect((): any => {
        renderChart();

        return chart?.destroy;
    }, []);

    React.useEffect((): void => {
        chart?.destroy();
        renderChart();
    }, [props]);

    return <canvas height={height} width={width} ref={canvas} />;
});

export default ChartComponent;
