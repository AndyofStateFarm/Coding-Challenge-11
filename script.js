// U08282838

// Dataset
const dataset = [100, 420, 230, 850, 560, 925];

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

// Add rectangles with transitions to the bars
bars.append("rect")
    .attr("width", 0) 
    .attr("height", BarHeight)
    .style("fill", "teal")
    .transition()
    .duration(2500)
    .attr("width", d => xScale(d));

// Add text to the bars
bars.append("text")
    .attr("x", d => xScale(d) / 2) 
    .attr("y", BarHeight / 2) 
    .attr("dy", "0.35em")
    .text(d => d);

// Hover effect
bars.on("mouseover", function() 
{
        d3.select(this).select("rect").style("fill", "yellow");
})
    .on("mouseout", function() 
{
        d3.select(this).select("rect").style("fill", "teal");
});
