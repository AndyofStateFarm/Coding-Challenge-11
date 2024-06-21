// U08282838

// Chart Dimensions
const Width = 500;
const BarHeight = 20;
const Margin = 1;
const Height = (BarHeight + Margin) * dataset.length;

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

// Add rectangles to the bars
bars.append("rect")
    .attr("width", 0) // Start with zero width for transition
    .attr("height", BarHeight)
    .style("fill", "green")
    .transition()
    .duration(500)
    .attr("width", d => xScale(d));

// Add text to the bars
bars.append("text")
    .attr("x", d => xScale(d) + 5) // Add 5 pixels padding after the bar
    .attr("y", barHeight / 2) // Vertically center the text
    .attr("dy", "0.35em")
    .text(d => d);