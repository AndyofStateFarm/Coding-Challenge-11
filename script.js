// U08282838

// Chart Dimensions
const Width = 500;
const BarHeight = 20;
const Margin = 1;
const Height = (BarHeight + margin) * dataset.length;

// Create SVG chart
const svg = d3.select("#chart")
.attr("width", Width)
.attr("height", Height);

// Configure linear scale
const xScale = d3.scaleLinear()
.domain([0, d3.max(dataset)])
.range([50, Width]);

// Create groups for bars
const bars = svg.selectAll("g")
    .data(dataset)
    .enter()
    .append("g")
    .attr("transform", (d, i) => `translate(0, ${i * (BarHeight + Margin)})`);


bars.append("rect")
    .attr("width", 0) // Start with zero width for transition
    .attr("height", BarHeight)
    .style("fill", "green")
    .transition()
    .duration(500)
    .attr("width", d => xScale(d));