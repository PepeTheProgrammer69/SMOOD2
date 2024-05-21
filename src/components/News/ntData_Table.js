const ntColumns = [
  {
    name: "Ticker",
    selector: row => row.ticker,
    sortable: true,
  },
  {
    name: "Timeline",
    cell: row => (
      <div>
        {row.timeline.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    ),
  },
  {
    name: "Sentiment(OVA)",
    selector: row => row.sentiment,
  }
];

const ntData = [
  {
    id: 1,
    ticker: "MSFT",
    timeline: ["Daily", "Weekly", "Monthly"],
    sentiment: "Good"
  },
  {
    id: 2,
    ticker: "AAPL",
    timeline: ["Daily", "Weekly", "Monthly"],
    sentiment: "Good"
  },
  {
    id: 3,
    ticker: "NVDA",
    timeline: ["Daily", "Weekly", "Monthly"],
    sentiment: "Neutral"
  },
  {
    id: 4,
    ticker: "AMZN",
    timeline: ["Daily", "Weekly", "Monthly"],
    sentiment: "Positive"
  },
  {
    id: 5,
    ticker: "META",
    timeline: ["Daily", "Weekly", "Monthly"],
    sentiment: "Good"
  },
  {
    id: 6,
    ticker: "GOOG",
    timeline: ["Daily", "Weekly", "Monthly"],
    sentiment: "Neutral"
  },
  {
    id: 7,
    ticker: "GOOG",
    timeline: ["Daily", "Weekly", "Monthly"],
    sentiment: "Negative"
  },
  {
    id: 8,
    ticker: "BRK.B",
    timeline: ["Daily", "Weekly", "Monthly"],
    sentiment: "Positive"
  },
  {
    id: 9,
    ticker: "LLY",
    timeline: ["Daily", "Weekly", "Monthly"],
    sentiment: "Good"
  },
  {
    id: 10,
    ticker: "JPM",
    timeline: ["Daily", "Weekly", "Monthly"],
    sentiment: "Neutral"
  },
  {
    id: 11,
    ticker: "AVGO",
    timeline: ["Daily", "Weekly", "Monthly"],
    sentiment: "Negative"
  },
  {
    id: 12,
    ticker: "XOM",
    timeline: ["Daily", "Weekly", "Monthly"],
    sentiment: "Good"
  },
  {
    id: 13,
    ticker: "UNH",
    timeline: ["Daily", "Weekly", "Monthly"],
    sentiment: "Neutral"
  },
  {
    id: 14,
    ticker: "TSLA",
    timeline: ["Daily", "Weekly", "Monthly"],
    sentiment: "Positive"
  },
  {
    id: 15,
    ticker: "V",
    timeline: ["Daily", "Weekly", "Monthly"],
    sentiment: "Good"
  },
  {
    id: 16,
    ticker: "PG",
    timeline: ["Daily", "Weekly", "Monthly"],
    sentiment: "Neutral"
  },
  {
    id: 17,
    ticker: "MA",
    timeline: ["Daily", "Weekly", "Monthly"],
    sentiment: "Negative"
  },
  {
    id: 18,
    ticker: "JNJ",
    timeline: ["Daily", "Weekly", "Monthly"],
    sentiment: "Good"
  },
  {
    id: 19,
    ticker: "HD",
    timeline: ["Daily", "Weekly", "Monthly"],
    sentiment: "Neutral"
  },
  {
    id: 20,
    ticker: "MRK",
    timeline: ["Daily", "Weekly", "Monthly"],
    sentiment: "Negative"
  }
  // Add more data objects as needed
];
