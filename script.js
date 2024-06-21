// U08282838

// Chart Dimensions
const width = 500;
const barHeight = 20;
const margin = 1;
const height = (barHeight + margin) * dataset.length;

// Create SVG chart
const svg = d3.select("#chart")
    .attr("width", width)
    .attr("height", height);