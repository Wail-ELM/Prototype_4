import React, { useEffect } from 'react';
import * as d3 from 'd3';

const D3BarChart = () => {
  useEffect(() => {
    const data = [20, 40, 60, 80, 100];

    const svg = d3
      .select('.bar-chart')
      .append('svg')
      .attr('width', 500)
      .attr('height', 300)
      .style('background', '#f7f7f7')
      .style('border-radius', '10px');

    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 80 + 20)
      .attr('y', 300)
      .attr('width', 50)
      .attr('height', 0)
      .attr('fill', '#4CAF50')
      .transition()
      .duration(1000)
      .ease(d3.easeBounceOut)
      .attr('height', (d) => d * 2)
      .attr('y', (d) => 300 - d * 2);
  }, []);

  return <div className="bar-chart"></div>;
};

export default D3BarChart;
