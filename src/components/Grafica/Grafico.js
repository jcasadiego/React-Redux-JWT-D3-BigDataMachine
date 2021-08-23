//Packages
import React, { useEffect, useRef, useState } from 'react';

//D3
import * as d3 from 'd3';

//Style
import './style.css';

export default function Grafico() {

    const d3Chart = useRef();

    let CountsByDate = [];

    useEffect(() => {

        fetch('https://gorest.co.in/public/v1/todos')
            .then(response => response.json())
            .then(registro => {

                //console.log(registro);

                const permits = registro.data.filter(event => {
                    return event.status == 'pending' && event.due_on != null;
                });

                console.log(permits);

                const dates = permits.map((each) => {
                    return each.due_on.slice(5, 10);
                });

                dates.map(time => {
                    let date = time;
                    let count = 0;

                    dates.map(each => {
                        let timestamp = each;
                        if (timestamp === date) {
                            count += 1;
                        }
                    });

                    const counts = {
                        dates: date,
                        count: count
                    };

                    CountsByDate.push(counts);
                });

                console.log(CountsByDate);

                const margin = { top: 50, right: 30, bottom: 30, left: 60 }

                const chartwidth = parseInt(d3.select('#d3demo').style('width')) - margin.left - margin.right
                const chartheight = parseInt(d3.select('#d3demo').style('height')) - margin.top - margin.bottom

                const svg = d3.select(d3Chart.current)
                    .attr('width', chartwidth + margin.left + margin.right)
                    .attr('height', chartheight + margin.top + margin.bottom)

                const x = d3.scaleBand()
                    .domain(d3.range(CountsByDate.length))
                    .range([margin.left, chartwidth - margin.right])
                    .padding(0.3)

                svg.append('g')
                    .attr('transform', 'translate(0,' + chartheight + ')')
                    .call(d3.axisBottom(x).tickFormat(i => CountsByDate[i].dates).tickSizeOuter(0))

                const max = d3.max(CountsByDate, function (d) { return d.count })

                const y = d3.scaleLinear()
                    .domain([0, max])
                    .range([chartheight, margin.top])

                svg.append('g')
                    .attr('transform', 'translate(' + margin.left + ',0)')
                    .call(d3.axisLeft(y))

                // Draw bars
                svg.append('g')
                    .attr('fill', '#65f0eb')
                    .selectAll('rect')
                    .data(CountsByDate)
                    .join('rect')
                    .attr('x', (d, i) => x(i))
                    .attr('y', d => y(d.count))
                    .attr('height', d => y(0) - y(d.count))
                    .attr('width', x.bandwidth())
            });
    });



    return (
        <div id='d3demo'>
            <svg ref={d3Chart}></svg>
        </div>
    );
};