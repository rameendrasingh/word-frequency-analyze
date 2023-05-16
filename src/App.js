import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import './App.css';
import { saveAs } from 'file-saver';
import { Chart, CategoryScale, LinearScale, BarController, BarElement, Tooltip } from 'chart.js';
import 'chartjs-adapter-date-fns';

Chart.register(CategoryScale, LinearScale, BarController, BarElement, Tooltip);

const App = () => {
const [showForm, setShowForm] = useState(false);
const [textData, setTextData] = useState('');
const [wordFrequency, setWordFrequency] = useState({});
const [chartData, setChartData] = useState({});
const chartRef = useRef(null);

useEffect(() => {
if (chartRef.current) {
chartRef.current.destroy();
}
}, []);

const fetchData = async () => {
try {
const response = await axios.get(
'https://www.terriblytinytales.com/test.txt'
);
setTextData(response.data);
} catch (error) {
console.log('Error fetching data:', error);
}
};

const handleInputChange = (event) => {
setTextData(event.target.value);
};

const handleSubmit = () => {
const words = textData.split(/\s+/);
const frequency = {};
words.forEach((word) => {
if (word in frequency) {
frequency[word]++;
} else {
frequency[word] = 1;
}
});
setWordFrequency(frequency);

const sortedWords = Object.keys(frequency).sort(
(a, b) => frequency[b] - frequency[a]
);
const topWords = sortedWords.slice(0, 20);
const chartLabels = topWords.map((word) => word);
const chartData = topWords.map((word) => frequency[word]);

setChartData({
labels: chartLabels,
datasets: [
{
label: 'Word Frequency',
data: chartData,
backgroundColor: 'rgba(75,192,192,0.6)',
},
],
});
};

const exportData = () => {
const csvContent = Object.entries(wordFrequency)
.map(([word, frequency]) => `${word},${frequency}`)
.join('\n');
const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
saveAs(blob, 'word_frequency.csv');
};

useEffect(() => {
if (chartRef.current) {
const ctx = chartRef.current.getContext('2d');
const newChart = new Chart(ctx, {
type: 'bar',
data: chartData,
options: {
responsive: true,
scales: {
y: {
beginAtZero: true,
ticks: {
precision: 0,
},
},
},
plugins: {
tooltip: {
callbacks: {
label: function (context) {
const label = context.dataset.label || '';
if (label) {
return label + ': ' + context.formattedValue;
}
return context.formattedValue;
},
},
},
},
},
});

return () => {
newChart.destroy();
};
}
}, [chartData]);

return (
<div>
{!showForm ? (
<button onClick={() => setShowForm(true)}>Submit</button>
) : (
<>
<button onClick={fetchData}>Fetch Data from existing link</button>
<textarea
value={textData}
onChange={handleInputChange}
placeholder="Enter text manually"
rows={10}
cols={50}
/>
<button onClick={handleSubmit}>Process Text</button>
</>
)}

{Object.keys(wordFrequency).length > 0 && (
<>
<table>
<thead>
<tr>
<th>Word</th>
<th>Frequency</th>
</tr>
</thead>
<tbody>
{Object.entries(wordFrequency).map(([word, frequency]) => (
<tr key={word}>
<td>{word}</td>
<td>{frequency}</td>
</tr>
))}
</tbody>
</table>

<div style={{ marginTop: '20px' }}>
<Bar ref={chartRef} data={chartData} />
</div>

<button onClick={exportData}>Export in .CSV</button>
</>
)}
</div>
);
};

export default App;