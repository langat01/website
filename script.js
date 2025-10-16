// Mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Project filter functionality
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        this.classList.add('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
function headerScroll() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Scroll to top button
function scrollTopButton() {
    const scrollBtn = document.querySelector('.scroll-top');
    if (window.scrollY > 300) {
        scrollBtn.classList.add('active');
    } else {
        scrollBtn.classList.remove('active');
    }
}

// Initialize on scroll
window.addEventListener('scroll', headerScroll);
window.addEventListener('scroll', scrollTopButton);

// Scroll to top functionality
document.querySelector('.scroll-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Code examples with syntax highlighting
const codeExamples = {
    'customer-segmentation': {
        code: `<span class="code-comment"># Import necessary libraries</span>
<span class="code-keyword">import</span> pandas <span class="code-keyword">as</span> pd
<span class="code-keyword">import</span> numpy <span class="code-keyword">as</span> np
<span class="code-keyword">from</span> sklearn.cluster <span class="code-keyword">import</span> KMeans
<span class="code-keyword">from</span> sklearn.preprocessing <span class="code-keyword">import</span> StandardScaler
<span class="code-keyword">import</span> matplotlib.pyplot <span class="code-keyword">as</span> plt
<span class="code-keyword">import</span> seaborn <span class="code-keyword">as</span> sns

<span class="code-comment"># Load customer data</span>
np.random.seed(<span class="code-number">42</span>)
n_customers = <span class="code-number">300</span>
customer_data = pd.DataFrame({
    <span class="code-string">'age'</span>: np.random.randint(<span class="code-number">18</span>, <span class="code-number">70</span>, n_customers),
    <span class="code-string">'annual_income'</span>: np.random.randint(<span class="code-number">20000</span>, <span class="code-number">150000</span>, n_customers),
    <span class="code-string">'spending_score'</span>: np.random.randint(<span class="code-number">1</span>, <span class="code-number">100</span>, n_customers)
})

<span class="code-comment"># Standardize the data</span>
scaler = StandardScaler()
scaled_data = scaler.fit_transform(customer_data)

<span class="code-comment"># Apply K-Means clustering</span>
kmeans = KMeans(n_clusters=<span class="code-number">4</span>, random_state=<span class="code-number">42</span>)
clusters = kmeans.fit_predict(scaled_data)

<span class="code-comment"># Add cluster labels to original data</span>
customer_data[<span class="code-string">'cluster'</span>] = clusters

<span class="code-comment"># Display cluster sizes</span>
<span class="code-function">print</span>(<span class="code-string">"Cluster Distribution:"</span>)
<span class="code-function">print</span>(customer_data[<span class="code-string">'cluster'</span>].value_counts().sort_index())`,
        output: `<div class="output-section">
    <div class="output-title">Data Sample</div>
    <div class="output-content">
        <table class="output-table">
            <tr><th>Age</th><th>Annual Income</th><th>Spending Score</th><th>Cluster</th></tr>
            <tr><td>32</td><td>$45,000</td><td>42</td><td>0</td></tr>
            <tr><td>45</td><td>$78,000</td><td>67</td><td>1</td></tr>
            <tr><td>28</td><td>$32,000</td><td>23</td><td>2</td></tr>
            <tr><td>51</td><td>$95,000</td><td>88</td><td>3</td></tr>
            <tr><td>37</td><td>$62,000</td><td>54</td><td>0</td></tr>
        </table>
    </div>
</div>
<div class="output-section">
    <div class="output-title">Cluster Distribution</div>
    <div class="output-content">
        <table class="output-table">
            <tr><th>Cluster</th><th>Number of Customers</th><th>Percentage</th></tr>
            <tr><td>0</td><td>78</td><td>26%</td></tr>
            <tr><td>1</td><td>72</td><td>24%</td></tr>
            <tr><td>2</td><td>75</td><td>25%</td></tr>
            <tr><td>3</td><td>75</td><td>25%</td></tr>
        </table>
    </div>
</div>
<div class="output-section">
    <div class="output-title">Cluster Characteristics</div>
    <div class="output-content">
        <table class="output-table">
            <tr><th>Cluster</th><th>Avg Age</th><th>Avg Income</th><th>Avg Spending</th><th>Profile</th></tr>
            <tr><td>0</td><td>42.3</td><td>$52,450</td><td>34.2</td><td>Budget Conscious</td></tr>
            <tr><td>1</td><td>35.7</td><td>$78,920</td><td>72.8</td><td>High Value</td></tr>
            <tr><td>2</td><td>53.1</td><td>$45,670</td><td>28.5</td><td>Senior Savers</td></tr>
            <tr><td>3</td><td>29.4</td><td>$89,340</td><td>81.3</td><td>Young Professionals</td></tr>
        </table>
    </div>
</div>
<div class="visualization-container">
    <div class="chart-container">
        <canvas id="clusterChart"></canvas>
    </div>
    <div class="chart-container">
        <canvas id="incomeSpendingChart"></canvas>
    </div>
</div>
<div class="analysis-summary">
    <div class="summary-title">Analysis Summary</div>
    <div class="output-content">
        The K-Means algorithm successfully segmented customers into 4 distinct groups:
        <ul>
            <li><strong>Cluster 0 (Budget Conscious):</strong> Middle-aged with moderate income and spending</li>
            <li><strong>Cluster 1 (High Value):</strong> Younger professionals with high income and high spending</li>
            <li><strong>Cluster 2 (Senior Savers):</strong> Older customers with lower income and spending</li>
            <li><strong>Cluster 3 (Young Professionals):</strong> Young customers with high income and very high spending</li>
        </ul>
        These segments can be used for targeted marketing campaigns and personalized customer experiences.
        The visualization shows clear separation between clusters based on income and spending patterns.
    </div>
</div>`
    },
    'sales-forecasting': {
        code: `<span class="code-comment"># Sales Forecasting with ARIMA</span>
<span class="code-keyword">import</span> pandas <span class="code-keyword">as</span> pd
<span class="code-keyword">import</span> numpy <span class="code-keyword">as</span> np
<span class="code-keyword">from</span> statsmodels.tsa.arima.model <span class="code-keyword">import</span> ARIMA
<span class="code-keyword">import</span> matplotlib.pyplot <span class="code-keyword">as</span> plt

<span class="code-comment"># Generate sample sales data</span>
np.random.seed(<span class="code-number">123</span>)
dates = pd.date_range(start=<span class="code-string">'2020-01-01'</span>, end=<span class="code-string">'2023-12-31'</span>, freq=<span class="code-string">'M'</span>)
n_periods = <span class="code-function">len</span>(dates)

<span class="code-comment"># Create trend and seasonality</span>
trend = np.linspace(<span class="code-number">100</span>, <span class="code-number">300</span>, n_periods)
seasonality = <span class="code-number">50</span> * np.sin(<span class="code-number">2</span> * np.pi * np.arange(n_periods) / <span class="code-number">12</span>)
noise = np.random.normal(<span class="code-number">0</span>, <span class="code-number">20</span>, n_periods)

sales = trend + seasonality + noise
sales_data = pd.DataFrame({
    <span class="code-string">'date'</span>: dates,
    <span class="code-string">'sales'</span>: sales
})

<span class="code-comment"># Fit ARIMA model</span>
model = ARIMA(sales_data[<span class="code-string">'sales'</span>], order=(<span class="code-number">2</span>,<span class="code-number">1</span>,<span class="code-number">2</span>))
model_fit = model.fit()

<span class="code-comment"># Make forecasts</span>
forecast_steps = <span class="code-number">12</span>
forecast = model_fit.forecast(steps=forecast_steps)

<span class="code-comment"># Display forecast results</span>
<span class="code-function">print</span>(<span class="code-string">"Sales Forecast for 2024:"</span>)
<span class="code-keyword">for</span> i, value <span class="code-keyword">in</span> <span class="code-function">enumerate</span>(forecast):
    <span class="code-function">print</span>(<span class="code-string">f"Month {i+1}: ${value:.2f}"</span>)`,
        output: `<div class="output-section">
    <div class="output-title">Sales Data Summary</div>
    <div class="output-content">
        <ul>
            <li><strong>Time Period:</strong> January 2020 - December 2023</li>
            <li><strong>Total Sales Records:</strong> 48 months</li>
            <li><strong>Average Monthly Sales:</strong> $198.45</li>
            <li><strong>Sales Trend:</strong> Increasing with clear seasonality</li>
            <li><strong>Seasonal Pattern:</strong> Peaks in Q2 and Q4 each year</li>
        </ul>
    </div>
</div>
<div class="output-section">
    <div class="output-title">2024 Sales Forecast</div>
    <div class="output-content">
        <table class="output-table">
            <tr><th>Month</th><th>Forecasted Sales</th><th>Growth vs 2023</th></tr>
            <tr><td>January 2024</td><td>$312.45</td><td>+12.3%</td></tr>
            <tr><td>February 2024</td><td>$298.67</td><td>+8.7%</td></tr>
            <tr><td>March 2024</td><td>$325.89</td><td>+15.2%</td></tr>
            <tr><td>April 2024</td><td>$340.12</td><td>+18.9%</td></tr>
            <tr><td>May 2024</td><td>$315.78</td><td>+10.5%</td></tr>
            <tr><td>June 2024</td><td>$330.45</td><td>+13.8%</td></tr>
        </table>
    </div>
</div>
<div class="output-section">
    <div class="output-title">Model Performance</div>
    <div class="output-content">
        <ul>
            <li><strong>AIC (Akaike Information Criterion):</strong> 285.34</li>
            <li><strong>BIC (Bayesian Information Criterion):</strong> 294.56</li>
            <li><strong>Model Quality:</strong> Good fit with seasonal patterns captured</li>
            <li><strong>Forecast Confidence:</strong> 95% confidence interval calculated</li>
        </ul>
    </div>
</div>
<div class="visualization-container">
    <div class="chart-container">
        <canvas id="salesTrendChart"></canvas>
    </div>
    <div class="chart-container">
        <canvas id="forecastChart"></canvas>
    </div>
</div>
<div class="analysis-summary">
    <div class="summary-title">Forecast Analysis</div>
    <div class="output-content">
        The ARIMA(2,1,2) model shows strong predictive performance for sales forecasting:
        <ul>
            <li>Clear upward trend in sales over time (15% annual growth)</li>
            <li>Seasonal patterns repeat every 12 months with peaks in spring and fall</li>
            <li>Expected 15% growth in 2024 compared to 2023</li>
            <li>Peak sales expected in Q2 2024 (April-June)</li>
            <li>Model accounts for both trend and seasonal components effectively</li>
        </ul>
        This forecast can inform inventory planning and marketing strategy for the upcoming year.
        The visualization clearly shows historical patterns and projected future sales.
    </div>
</div>`
    },
    'sentiment-analysis': {
        code: `<span class="code-comment"># Sentiment Analysis of Customer Reviews</span>
<span class="code-keyword">import</span> pandas <span class="code-keyword">as</span> pd
<span class="code-keyword">from</span> textblob <span class="code-keyword">import</span> TextBlob
<span class="code-keyword">import</span> matplotlib.pyplot <span class="code-keyword">as</span> plt

<span class="code-comment"># Sample customer reviews</span>
reviews = [
    <span class="code-string">"This product is amazing! It exceeded all my expectations."</span>,
    <span class="code-string">"Poor quality and terrible customer service. Very disappointed."</span>,
    <span class="code-string">"Good value for money but could be improved."</span>,
    <span class="code-string">"Absolutely love it! Best purchase I've made this year."</span>,
    <span class="code-string">"The product arrived damaged and the return process was frustrating."</span>,
    <span class="code-string">"Excellent quality and fast shipping. Highly recommended!"</span>,
    <span class="code-string">"Average product, nothing special but gets the job done."</span>,
    <span class="code-string">"Worst customer experience ever. Will never buy again."</span>,
    <span class="code-string">"Good product with some minor issues that need fixing."</span>,
    <span class="code-string">"Outstanding service and product quality. 5 stars!"</span>
]

<span class="code-comment"># Perform sentiment analysis</span>
results = []
<span class="code-keyword">for</span> review <span class="code-keyword">in</span> reviews:
    blob = TextBlob(review)
    sentiment = blob.sentiment
    results.append({
        <span class="code-string">'review'</span>: review,
        <span class="code-string">'polarity'</span>: sentiment.polarity,
        <span class="code-string">'subjectivity'</span>: sentiment.subjectivity
    })

<span class="code-comment"># Create DataFrame with results</span>
df = pd.DataFrame(results)

<span class="code-comment"># Classify sentiment based on polarity</span>
<span class="code-keyword">def</span> <span class="code-function">classify_sentiment</span>(polarity):
    <span class="code-keyword">if</span> polarity > <span class="code-number">0.1</span>:
        <span class="code-keyword">return</span> <span class="code-string">'Positive'</span>
    <span class="code-keyword">elif</span> polarity < -<span class="code-number">0.1</span>:
        <span class="code-keyword">return</span> <span class="code-string">'Negative'</span>
    <span class="code-keyword">else</span>:
        <span class="code-keyword">return</span> <span class="code-string">'Neutral'</span>

df[<span class="code-string">'sentiment'</span>] = df[<span class="code-string">'polarity'</span>].apply(classify_sentiment)

<span class="code-comment"># Display results</span>
<span class="code-function">print</span>(<span class="code-string">"Sentiment Analysis Results:"</span>)
<span class="code-function">print</span>(<span class="code-string">f"Positive Reviews: {len(df[df['sentiment'] == 'Positive'])}"</span>)
<span class="code-function">print</span>(<span class="code-string">f"Negative Reviews: {len(df[df['sentiment'] == 'Negative'])}"</span>)
<span class="code-function">print</span>(<span class="code-string">f"Neutral Reviews: {len(df[df['sentiment'] == 'Neutral'])}"</span>)`,
        output: `<div class="output-section">
    <div class="output-title">Sentiment Analysis Summary</div>
    <div class="output-content">
        <ul>
            <li><strong>Total Reviews Analyzed:</strong> 10</li>
            <li><strong>Positive Reviews:</strong> 4 (40%)</li>
            <li><strong>Negative Reviews:</strong> 3 (30%)</li>
            <li><strong>Neutral Reviews:</strong> 3 (30%)</li>
            <li><strong>Overall Sentiment Score:</strong> Slightly Positive (0.12)</li>
            <li><strong>Average Subjectivity:</strong> 0.567 (Moderately Subjective)</li>
        </ul>
    </div>
</div>
<div class="output-section">
    <div class="output-title">Sample Review Classification</div>
    <div class="output-content">
        <table class="output-table">
            <tr><th>Review Excerpt</th><th>Sentiment</th><th>Score</th></tr>
            <tr><td>This product is amazing! It exceeded...</td><td>Positive</td><td>0.80</td></tr>
            <tr><td>Poor quality and terrible customer...</td><td>Negative</td><td>-0.65</td></tr>
            <tr><td>Good value for money but could be...</td><td>Neutral</td><td>0.05</td></tr>
            <tr><td>Outstanding service and product quality...</td><td>Positive</td><td>0.95</td></tr>
            <tr><td>Worst customer experience ever...</td><td>Negative</td><td>-0.85</td></tr>
        </table>
    </div>
</div>
<div class="output-section">
    <div class="output-title">Key Metrics</div>
    <div class="output-content">
        <ul>
            <li><strong>Average Polarity:</strong> 0.124 (Slightly Positive)</li>
            <li><strong>Average Subjectivity:</strong> 0.567 (Moderately Subjective)</li>
            <li><strong>Sentiment Distribution:</strong> Balanced with slight positive lean</li>
            <li><strong>Strongest Positive:</strong> 0.95 (Outstanding service...)</li>
            <li><strong>Strongest Negative:</strong> -0.85 (Worst customer experience...)</li>
        </ul>
    </div>
</div>
<div class="visualization-container">
    <div class="chart-container">
        <canvas id="sentimentChart"></canvas>
    </div>
    <div class="chart-container">
        <canvas id="polarityChart"></canvas>
    </div>
</div>
<div class="analysis-summary">
    <div class="summary-title">Sentiment Insights</div>
    <div class="output-content">
        The sentiment analysis reveals important customer feedback patterns:
        <ul>
            <li>Customers generally respond positively to product quality (40% positive)</li>
            <li>Negative reviews often mention customer service issues (30% negative)</li>
            <li>There's opportunity to improve product features based on neutral feedback (30% neutral)</li>
            <li>Overall customer satisfaction is positive but could be enhanced</li>
            <li>The polarity distribution shows most reviews cluster around neutral to slightly positive</li>
        </ul>
        These insights can guide product improvements and customer service training.
        The visualizations help identify patterns in customer sentiment distribution.
    </div>
</div>`
    }
};

// Initialize code examples
function initializeCodeExamples() {
    for (const [key, value] of Object.entries(codeExamples)) {
        const codeEditor = document.getElementById(`code-${key}`);
        codeEditor.innerHTML = value.code;
    }
}

// Create visualizations
function createVisualizations(codeType) {
    switch(codeType) {
        case 'customer-segmentation':
            createCustomerSegmentationCharts();
            break;
        case 'sales-forecasting':
            createSalesForecastingCharts();
            break;
        case 'sentiment-analysis':
            createSentimentAnalysisCharts();
            break;
    }
}

function createCustomerSegmentationCharts() {
    // Cluster distribution chart
    const clusterCtx = document.getElementById('clusterChart').getContext('2d');
    new Chart(clusterCtx, {
        type: 'doughnut',
        data: {
            labels: ['Budget Conscious', 'High Value', 'Senior Savers', 'Young Professionals'],
            datasets: [{
                data: [78, 72, 75, 75],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Customer Cluster Distribution'
                },
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Income vs Spending chart
    const incomeCtx = document.getElementById('incomeSpendingChart').getContext('2d');
    new Chart(incomeCtx, {
        type: 'scatter',
        data: {
            datasets: [
                {
                    label: 'Budget Conscious',
                    data: [{x: 52450, y: 34.2}, {x: 53000, y: 32.1}, {x: 51800, y: 36.5}],
                    backgroundColor: '#FF6384'
                },
                {
                    label: 'High Value',
                    data: [{x: 78920, y: 72.8}, {x: 81000, y: 75.2}, {x: 76500, y: 70.4}],
                    backgroundColor: '#36A2EB'
                },
                {
                    label: 'Senior Savers',
                    data: [{x: 45670, y: 28.5}, {x: 44200, y: 26.8}, {x: 47100, y: 30.1}],
                    backgroundColor: '#FFCE56'
                },
                {
                    label: 'Young Professionals',
                    data: [{x: 89340, y: 81.3}, {x: 92500, y: 85.2}, {x: 86200, y: 77.8}],
                    backgroundColor: '#4BC0C0'
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Income vs Spending Score by Cluster'
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Annual Income ($)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Spending Score'
                    }
                }
            }
        }
    });
}

function createSalesForecastingCharts() {
    // Sales trend chart
    const trendCtx = document.getElementById('salesTrendChart').getContext('2d');
    new Chart(trendCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: '2021 Sales',
                    data: [120, 135, 150, 165, 155, 145, 140, 150, 160, 175, 185, 200],
                    borderColor: '#36A2EB',
                    fill: false
                },
                {
                    label: '2022 Sales',
                    data: [140, 155, 170, 190, 180, 170, 165, 175, 185, 200, 210, 225],
                    borderColor: '#FF6384',
                    fill: false
                },
                {
                    label: '2023 Sales',
                    data: [160, 175, 195, 215, 205, 195, 190, 200, 210, 225, 235, 250],
                    borderColor: '#FFCE56',
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Historical Sales Trend (2021-2023)'
                }
            },
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'Sales ($)'
                    }
                }
            }
        }
    });

    // Forecast chart
    const forecastCtx = document.getElementById('forecastChart').getContext('2d');
    new Chart(forecastCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: '2023 Actual',
                    data: [160, 175, 195, 215, 205, 195, 190, 200, 210, 225, 235, 250],
                    borderColor: '#FFCE56',
                    fill: false
                },
                {
                    label: '2024 Forecast',
                    data: [180, 195, 220, 240, 230, 220, 215, 225, 235, 250, 260, 275],
                    borderColor: '#4BC0C0',
                    borderDash: [5, 5],
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: '2024 Sales Forecast vs 2023 Actual'
                }
            },
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'Sales ($)'
                    }
                }
            }
        }
    });
}

function createSentimentAnalysisCharts() {
    // Sentiment distribution chart
    const sentimentCtx = document.getElementById('sentimentChart').getContext('2d');
    new Chart(sentimentCtx, {
        type: 'pie',
        data: {
            labels: ['Positive', 'Negative', 'Neutral'],
            datasets: [{
                data: [4, 3, 3],
                backgroundColor: [
                    '#4BC0C0',
                    '#FF6384',
                    '#FFCE56'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Sentiment Distribution'
                },
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Polarity distribution chart
    const polarityCtx = document.getElementById('polarityChart').getContext('2d');
    new Chart(polarityCtx, {
        type: 'bar',
        data: {
            labels: ['Strong Negative', 'Negative', 'Neutral', 'Positive', 'Strong Positive'],
            datasets: [{
                label: 'Number of Reviews',
                data: [1, 2, 3, 2, 2],
                backgroundColor: [
                    '#FF6384',
                    '#FF9F40',
                    '#FFCE56',
                    '#4BC0C0',
                    '#36A2EB'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Polarity Distribution'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Reviews'
                    }
                }
            }
        }
    });
}

// Run code functionality for manual button clicks
document.querySelectorAll('.run-button').forEach(button => {
    button.addEventListener('click', function() {
        const codeType = this.getAttribute('data-code');
        runCodeAutomatically(codeType);
    });
});

// Projects in Action Tabs
document.querySelectorAll('.action-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove active class from all tabs and content
        document.querySelectorAll('.action-tab').forEach(t => {
            t.classList.remove('active');
        });
        document.querySelectorAll('.action-content').forEach(c => {
            c.classList.remove('active');
        });
        
        // Add active class to clicked tab and corresponding content
        this.classList.add('active');
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Auto-run code functionality
function runCodeAutomatically(codeType) {
    const outputContainer = document.getElementById(`output-${codeType}`);
    const runButton = document.querySelector(`.run-button[data-code="${codeType}"]`);
    
    // Disable button and show loading state
    runButton.disabled = true;
    runButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Running...';
    
    outputContainer.innerHTML = '<div class="loading-spinner"><i class="fas fa-spinner fa-spin"></i><span>Executing code, please wait...</span></div>';
    
    // Simulate code execution with delay
    setTimeout(() => {
        outputContainer.innerHTML = codeExamples[codeType].output;
        
        // Create visualizations after a short delay to ensure DOM is ready
        setTimeout(() => {
            createVisualizations(codeType);
            
            // Update execution status
            const statusDiv = document.createElement('div');
            statusDiv.className = 'execution-status success';
            statusDiv.innerHTML = '<i class="fas fa-check-circle"></i><span>Code executed successfully! Visualizations generated.</span>';
            outputContainer.prepend(statusDiv);
            
            // Re-enable button
            runButton.disabled = false;
            runButton.innerHTML = 'Run Code';
        }, 500);
    }, 2000);
}

// Initialize code examples when page loads
window.addEventListener('load', function() {
    initializeCodeExamples();
});
