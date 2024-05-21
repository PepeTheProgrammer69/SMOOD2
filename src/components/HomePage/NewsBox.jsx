import React, { useState, useEffect } from 'react';
import '../../../public/styles.css';

const headlines = [
  "'I'm weary of repeating myself': How do I deal with rich friends who take $22,000 cruises and book $800 hotel rooms? Prices are crazy enough already.",
  "Stock Indexes Book Records After Inflation Eases",
  "Warren Buffett's Berkshire Hathaway reveals insurer Chubb as confidential stock it's been buying",
  "Investors aren't waiting for a Fed pivot to dive into these stocks and bonds",
  "Cisco's stock rises as demand stabilizes and revenue outlook impresses",
  "CNN and ABC Snag the Presidential Debates",
  "Acorns puts the responsible tools of wealth making into everyone's hands: CEO Noah Kerner",
  "S&P 500 jumps 1% to post record close, ending session above 5,300 for the first time",
  "Stocks set new records as inflation cools",
  "Stock Market News, May 15, 2024: Indexes Rise to Record Highs After April Inflation Data",
  "Citadel Securities Revenue Reaches $2.3 Billion in First Quarter",
  "GameStop, AMC drove $5 billion in trades on Robinhood in a single day",
  "Treasury yields end at lowest levels in more than a month after April CPI data",
  "Here's what Nvidia earnings need to show to be 'good enough' for Wall Street",
  "Watch 'corporate body language' for earnings clues: Christine Short",
  "Renaissance Technologies bought shares of GameStop, AMC before this month's meme-stock trading frenzy",
  "Biden's banking rules will fuel inflation, lawmakers say",
  "S&P 500 Tops 5,300 in Record-Breaking Stock Rally: Markets Wrap",
  "Stock market will continue to climb even without a Fed pivot: Adam Kobeissi",
  "Oil settles higher on decline in U.S. supplies as traders weigh demand outlook",
  "Democrats Batter Bank Regulator Over F.D.I.C.'s 'Toxic' Workplace Culture",
  "Retail traders are beating big firms in guessing where U.S. interest rates will go next",
  "Wall Street hates REITs like it's 2009",
  "Stocks eye record highs after inflation cools",
  "Inflation rises at slowest pace in 3 months",
  "GameStop tanks as meme rally fades on day 3",
  "GameStop's Window to Cash In on the Meme Stock Rally Is Closing",
  "US consumer inflation resumes downward trend as domestic demand cools",
  "How it started... How it's going: Home, energy, car bills way up thanks to inflation",
  "Summer 2024: Uber launches shuttle service for airports, concerts, games",
  "Meat Producer JBS in Talks With Potential Partner on Biogas",
  "Goldman Sachs predicting 3 rate cuts by 2025 is 'completely illogical': Kenny Polcari",
  "Fed's Kashkari: rates should stay on hold 'for a while longer'",
  "Inflation Moderated Slightly in April, Offering Some Relief for Consumers",
  "New inflation reading offers new hope for Fed rate cuts",
  "S&P Pushes Past Its Previous Record",
  "Nothing 'feels better' to the consumer, Brian Brenberg says",
  "GameStop Options Bets Seek 300% Rally in Days Despite Share Dip",
  "Inflation Tracker:At 3.4%, See the Items Keeping Prices High",
  "America's pendulum is 'finally swinging back' in favor of law enforcement: Marty Kotis",
  "Wall Street just gave its highest forecast yet for the S&P",
  "BMO Sees Stock Rally Raging On, Lifting S&P 500 Target to 5,600",
  "S&P 500, Nasdaq at record highs as lukewarm inflation fuels rate-cut bets",
  "Dry Heat Worsening Air Quality in India's Capital, Ministry Says",
  "Tesla's Chinese rival Nio launches a new brand and car that undercuts the Model Y by $4,000",
  "Trump became country's 'first crypto president' during first year in office, former CFTC regulator says",
  "Frank McCourt Starts Effort to Buy TikTok",
  "In About-Face, Wall Street's Big Donors Warm to Trump",
  "Trump Media Stock Rally Pushes Value of Trump's Stake to $6 Billion",
  "If Fed doesn't cut that means the economy is running on all four cylinders: Ryan Payne",
  "Why It Pays to Be a Double Major in College",
  "Goldman Is Tapping High-Grade Market for Third Time Since March",
  "Tyson Says Adoption of Some Chicken Antibiotics Is Paying Off",
  "Stocks jump after softer inflation print",
  "Walmart Q1 earnings preview: Wall Street expects positive momentum as consumers seek value",
  "Fed will cut rates no matter what inflation does: Shah Gilani",
  "Royal Mail owner poised to accept £3.5bn takeover bid",
  "Easing US inflation stokes interest rate cut debate",
  "Egypt Gets $14 Billion Boost From UAE as Landmark Deal Pays Out",
  "New survey sheds light on how small business owners are staying resilient amid uncertainty",
  "Trafigura Says Aluminum Rally Is 'Over Done' as Supply Returns",
  "Sullivan & Cromwell Taps Silicon Valley Dealmakers",
  "Retirees Drain Savings Faster to Cope With Inflation",
  "Stock market today: US futures jump as inflation shows signs of easing",
  "Yen Surges Versus Dollar as CPI Shows Easing Inflation Pressures",
  "Commerzbank Says Russia Legal Cases May Cause 'Significant' Hit",
  "Brazil's central bank fully committed to 3% inflation target, governor says",
  "Sub-postmasters are self-indulgent, said PO exec",
  "Treasuries Soar as Traders See Easing Inflation Aiding Fed Cuts",
  "NYCB shares rise as $5 bln loan sale to JPMorgan bolsters liquidity",
  "Vale Indonesia Gets Special Mining Permit Extension Until 2035",
  "Canada March factory sales down 2.1% on petroleum, autos",
  "Inflation increases 3.4% in April as prices remain elevated",
  "Retail sales flat in April, falling short of Wall Street's expectations",
  "Brazil activity posts first-quarter growth despite March contraction",
  "US Core CPI Cools for First Time in Six Months in Relief for Fed",
  "Brazil Assets Drop as Firing of Petrobras CEO Roils Markets",
  "KKR Readies EU Remedies for €22 Billion Telecom Italia Deal",
  "The Fed is 'holding back too much': Wolfgang Koester",
  "Here comes the CPI report...",
  "Saudi's New Mining Vehicle Picks Industry Veteran as First CEO",
  "Inside Musk's mass firings of Tesla's Supercharger staff",
  "Direxion Opens Leveraged, Inverse ETFs for AI Stocks",
  "US Ex-Im Bank Audit Finds Lack of Growth Strategy in Africa",
  "Period trackers 'coercing' women into sharing risky information",
  "Morgan Stanley to Buy Property Debt From Blackstone Venture, Sources Say",
  "Iceland Will Get Its First Power Market After Nord Pool Deal",
  "Bridgewater Sees 40% of Bets Go Awry as Geopolitics Impact Markets",
  "Bridgewater CEO Warns of Complacency on Shifting Geopolitics",
  "Stock market today: US futures hold steady as inflation test looms",
  "Breaking news: React app builds itself!",
  "World peace declared: Everyone gets free ice cream!",
  "Aliens land on Earth: They just want to dance!"
];

const NewsBox = () => {
  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [maxWidth, setMaxWidth] = useState(0);

  useEffect(() => {
    // Calculate the maximum width based on the longest headline
    const longestHeadlineWidth = Math.max(...headlines.map(headline => {
      const tempDiv = document.createElement('div');
      tempDiv.style.position = 'absolute';
      tempDiv.style.visibility = 'hidden';
      tempDiv.style.whiteSpace = 'nowrap';
      tempDiv.innerHTML = headline;
      document.body.appendChild(tempDiv);
      const width = tempDiv.offsetWidth;
      document.body.removeChild(tempDiv);
      return width;
    }));
    setMaxWidth(longestHeadlineWidth);

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentHeadlineIndex(prevIndex => (prevIndex + 1) % headlines.length);
        setIsAnimating(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="news-container">
      <div className={`news-box ${isAnimating ? 'animating' : ''}`}>
        <div className="trending-label">Trending</div>
        <div className="headline-text">
         <p className="headline">{headlines[currentHeadlineIndex]}</p>
      </div></div>
    </div>
  );
};

export default NewsBox;
