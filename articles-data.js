/* =========================================================
   KabaddiOne — Articles Database
   Add a new object here to publish a new article everywhere
   ========================================================= */

window.CATEGORY_INFO = {
    'featured':            { label: 'Featured',          icon: 'fa-star',            gradient: 'linear-gradient(135deg, #FF5E3A 0%, #FF3D10 100%)' },
    'live-score':          { label: 'Live Score',        icon: 'fa-bolt',            gradient: 'linear-gradient(135deg, #00FFFF 0%, #0080FF 100%)' },
    'news':                { label: 'News',              icon: 'fa-newspaper',       gradient: 'linear-gradient(135deg, #6C3CE0 0%, #4A0E4E 100%)' },
    'pro-kabaddi':         { label: 'Pro Kabaddi',       icon: 'fa-trophy',          gradient: 'linear-gradient(135deg, #39FF14 0%, #00C853 100%)' },
    'kabaddi-tournament':  { label: 'Tournament',        icon: 'fa-medal',           gradient: 'linear-gradient(135deg, #F0C040 0%, #FF9800 100%)' },
    'blog':                { label: 'Blog',              icon: 'fa-pen-nib',         gradient: 'linear-gradient(135deg, #FF3D70 0%, #FF5E3A 100%)' },
    'tutorial':            { label: 'Tutorial',          icon: 'fa-graduation-cap',  gradient: 'linear-gradient(135deg, #6C3CE0 0%, #00BCD4 100%)' }
};

window.ARTICLES = [
    /* ---------- FEATURED ---------- */
    {
        id: 'pkl-season-12-preview',
        title: 'Pro Kabaddi League Season 12: Complete Preview & Predictions',
        excerpt: 'The biggest kabaddi season yet kicks off next month. We break down every team\'s strengths, key signings, and our bold predictions for the final.',
        category: 'featured',
        tags: ['Pro Kabaddi', 'Featured', 'Preview'],
        date: '2026-01-15',
        author: 'KabaddiOne Editorial',
        readTime: '8 min',
        featured: true,
        content: `
            <p>Pro Kabaddi League Season 12 promises to be the most competitive edition yet, with all 12 franchises loading up on talent during the off-season auctions. From record-breaking bids to fresh coaching appointments, the build-up has been nothing short of electric.</p>
            <h2>Teams to Watch</h2>
            <p><strong>Patna Pirates</strong> enter the season as defending champions but will face stiff challenges from a rebuilt Bengaluru Bulls squad and a dangerous Jaipur Pink Panthers side. Meanwhile, the new-look Telugu Titans are the dark horses everyone should be watching.</p>
            <h2>Key Transfers & Signings</h2>
            <ul>
                <li>Star raider Pardeep Narwal moves to U Mumba in a blockbuster trade</li>
                <li>Defensive stalwart Fazel Atrachali joins Puneri Paltan</li>
                <li>Young sensation Ashu Malik promoted to captain at Dabang Delhi</li>
            </ul>
            <h2>Our Predictions</h2>
            <p>We expect the final to be a rematch of last year, but with the outcome flipped. Watch for the emergence of three breakout young players — and one retirement announcement that will shock fans.</p>
            <p>The season opens on February 3rd. Stay tuned to KabaddiOne for live scores, expert analysis, and match-day coverage.</p>
        `
    },
    {
        id: 'obs-overlay-setup-guide',
        title: 'How to Set Up Your OBS Overlay in Under 2 Minutes',
        excerpt: 'New to streaming kabaddi? This step-by-step guide will get your professional broadcast overlay running on OBS, Streamlabs, or XSplit in no time.',
        category: 'featured',
        tags: ['Tutorial', 'Featured', 'OBS'],
        date: '2026-01-12',
        author: 'KabaddiOne Team',
        readTime: '4 min',
        featured: true,
        content: `
            <p>Getting a professional broadcast overlay running is easier than most streamers think. In fact, if you follow these steps, you can be on-air in under 2 minutes.</p>
            <h2>Step 1: Create Your Match</h2>
            <p>Open the KabaddiOne app, tap "Create Match," and enter the team names. Tap "Start Broadcast" to generate your unique overlay URL.</p>
            <h2>Step 2: Add a Browser Source in OBS</h2>
            <ul>
                <li>Open OBS Studio</li>
                <li>Click the <strong>+</strong> button under "Sources"</li>
                <li>Select <strong>Browser</strong></li>
                <li>Paste the URL from the app</li>
                <li>Set width to 1920 and height to 1080</li>
                <li>Click OK</li>
            </ul>
            <h2>Step 3: Go Live!</h2>
            <p>That's it! Your overlay is now live. Scores, timers, and animations will update automatically as you score the match in the app.</p>
            <p>Pro tip: Check "Control audio via OBS" in the Browser Source properties to hear the raid and tackle sound effects.</p>
        `
    },
    {
        id: 'top-raid-techniques',
        title: 'Top 10 Raid Techniques Every Kabaddi Player Should Master',
        excerpt: 'From the toe touch to the back kick, we break down the most effective raids in modern kabaddi, complete with video examples and practice drills.',
        category: 'featured',
        tags: ['Tutorial', 'Featured', 'Skills'],
        date: '2026-01-10',
        author: 'Coach Vikram Singh',
        readTime: '10 min',
        featured: true,
        content: `
            <p>Raiding is an art form. The best raiders in the world don't just rely on speed — they combine footwork, timing, and tactical awareness to consistently score points.</p>
            <h2>1. The Toe Touch</h2>
            <p>The simplest and most effective raid. A quick tap of your toe against the defender's foot before retreating.</p>
            <h2>2. The Back Kick</h2>
            <p>When surrounded, a well-timed back kick to the nearest defender creates an escape route.</p>
            <h2>3. The Hand Touch</h2>
            <p>A classic technique where the raider lunges forward to touch the defender's hand or arm.</p>
            <h2>4. The Dubki</h2>
            <p>Duck under the defender's grasp and emerge behind them to score an easy point.</p>
            <h2>5. The Running Hand Touch</h2>
            <p>A continuous running hand touch that's difficult to counter.</p>
            <p><em>Continue reading in the full article for all 10 techniques, each with practice drills and video breakdowns.</em></p>
        `
    },

    /* ---------- LIVE SCORE ---------- */
    {
        id: 'patna-vs-bengal-live',
        title: 'Patna Pirates vs Bengal Warriors: Live Match Updates',
        excerpt: 'Follow live coverage of tonight\'s blockbuster clash as the defending champions face a resurgent Bengal Warriors side.',
        category: 'live-score',
        tags: ['Live Score', 'Match Day'],
        date: '2026-01-15',
        author: 'KabaddiOne Live Desk',
        readTime: 'Live',
        content: `
            <p><strong>LIVE:</strong> Patna Pirates 42 - 38 Bengal Warriors (2nd Half, 18 seconds remaining)</p>
            <h2>Match Summary</h2>
            <p>What a match we have on our hands! The Patna Pirates lead by 4 points with just 18 seconds left on the clock, but Bengal Warriors have the momentum after a brilliant super tackle in the previous raid.</p>
            <h2>Key Moments</h2>
            <ul>
                <li>Pardeep Narwal hit a brilliant 3-point raid in the 12th minute</li>
                <li>Bengal's defense executed two super tackles in a row</li>
                <li>All-out achieved by Patna in the 22nd minute</li>
            </ul>
            <p>Stay tuned — the final raid could determine the outcome!</p>
        `
    },
    {
        id: 'pkl-2026-points-table',
        title: 'PKL 2026 Points Table — Latest Standings & Playoff Race',
        excerpt: 'Updated Pro Kabaddi League standings with all the latest results and the race for the top six playoff spots.',
        category: 'live-score',
        tags: ['Live Score', 'Standings'],
        date: '2026-01-14',
        author: 'KabaddiOne Stats Desk',
        readTime: '3 min',
        content: `
            <p>The Pro Kabaddi League playoff race is heating up with just six weeks left in the regular season. Here's the latest standings.</p>
            <h2>Top 6 (Playoff Qualification)</h2>
            <ol>
                <li>Patna Pirates — 42 pts</li>
                <li>Jaipur Pink Panthers — 38 pts</li>
                <li>Puneri Paltan — 36 pts</li>
                <li>Bengaluru Bulls — 34 pts</li>
                <li>U Mumba — 32 pts</li>
                <li>Bengal Warriors — 30 pts</li>
            </ol>
            <h2>Bottom 6 (Eliminated)</h2>
            <p>Dabang Delhi, Telugu Titans, Gujarat Giants, Haryana Steelers, U.P. Yoddhas, and Tamil Thalaivas are mathematically eliminated.</p>
            <p>Full standings and head-to-head stats updated daily on KabaddiOne.</p>
        `
    },
    {
        id: 'kabaddi-world-cup-2026',
        title: 'Kabaddi World Cup 2026: Full Schedule & Group Draw',
        excerpt: 'The group stage draw for the Kabaddi World Cup 2026 has been announced. Here\'s everything you need to know about India\'s path to the final.',
        category: 'live-score',
        tags: ['Live Score', 'World Cup'],
        date: '2026-01-13',
        author: 'KabaddiOne News Desk',
        readTime: '6 min',
        content: `
            <p>The Kabaddi World Cup 2026 will feature a record 16 nations competing across four groups in this expanded format.</p>
            <h2>Group A (India's Group)</h2>
            <ul>
                <li>India</li>
                <li>South Korea</li>
                <li>England</li>
                <li>Kenya</li>
            </ul>
            <h2>India's Match Schedule</h2>
            <ul>
                <li>March 3: India vs Kenya</li>
                <li>March 5: India vs England</li>
                <li>March 7: India vs South Korea</li>
            </ul>
            <p>The knockout stage begins March 10 with the final on March 15.</p>
        `
    },

    /* ---------- NEWS ---------- */
    {
        id: 'kabaddi-olympics-2032',
        title: 'Kabaddi Included in 2032 Olympics? IOC to Review in Next Session',
        excerpt: 'The International Olympic Committee has confirmed it will review kabaddi as a potential demonstration sport for the 2032 Brisbane Games.',
        category: 'news',
        tags: ['Olympics', 'Governance'],
        date: '2026-01-14',
        author: 'KabaddiOne News Desk',
        readTime: '5 min',
        content: `
            <p>In a major development for the sport, the International Olympic Committee (IOC) has confirmed it will formally review kabaddi's inclusion as a demonstration sport at the 2032 Brisbane Olympics.</p>
            <h2>What This Means</h2>
            <p>If approved, kabaddi would join a growing list of sports seeking to expand their global footprint. The review will consider viewership data, player participation numbers, and broadcast appeal.</p>
            <h2>Reaction from the Kabaddi Community</h2>
            <p>"This is a historic moment for our sport," said the International Kabaddi Federation president. "We have been working towards this goal for over a decade."</p>
            <p>A final decision is expected by late 2026.</p>
        `
    },
    {
        id: 'kabaddione-v3-update',
        title: 'KabaddiOne App Update v3.0: What\'s New in This Major Release',
        excerpt: 'The biggest update in KabaddiOne history brings new overlay animations, player profiles, team management, and a redesigned broadcast control panel.',
        category: 'news',
        tags: ['Product', 'Update'],
        date: '2026-01-12',
        author: 'KabaddiOne Product Team',
        readTime: '4 min',
        content: `
            <p>We're thrilled to announce the release of KabaddiOne v3.0 — our biggest update yet.</p>
            <h2>What's New</h2>
            <ul>
                <li><strong>10 New Overlay Animations</strong> — Super Raid, Super Tackle, All Out, and more</li>
                <li><strong>Player Profiles</strong> — Detailed stats tracking for every player on your roster</li>
                <li><strong>Team Management</strong> — Create and manage team rosters, colors, and logos</li>
                <li><strong>Redesigned Control Panel</strong> — Faster scoring, bigger buttons, one-handed operation</li>
                <li><strong>Broadcast History</strong> — Replay or re-stream past matches</li>
            </ul>
            <h2>How to Update</h2>
            <p>The update is rolling out to all users this week. Update from the Google Play Store or Apple App Store.</p>
        `
    },
    {
        id: 'kabaddione-100k-milestone',
        title: 'KabaddiOne Hits 100,000 Streamers Milestone',
        excerpt: 'A huge thank you to the entire KabaddiOne community — we\'ve officially crossed 100,000 registered streamers across 40+ countries.',
        category: 'news',
        tags: ['Milestone', 'Community'],
        date: '2026-01-08',
        author: 'KabaddiOne Team',
        readTime: '2 min',
        content: `
            <p>When we started KabaddiOne in 2023, we never imagined we'd be here so soon. Today, we're proud to announce that over <strong>100,000 streamers</strong> have used KabaddiOne to broadcast their matches.</p>
            <h2>By the Numbers</h2>
            <ul>
                <li>100,000+ registered streamers</li>
                <li>40+ countries</li>
                <li>500,000+ matches broadcast</li>
                <li>12 million+ viewers reached</li>
            </ul>
            <p>Thank you for being part of this journey. Here's to the next 100,000!</p>
        `
    },

    /* ---------- PRO KABADDI ---------- */
    {
        id: 'pardeep-narwal-top-raids',
        title: 'Pardeep Narwal\'s Top 5 Raids of All Time',
        excerpt: 'The "Dubki King" has produced some of the most unforgettable moments in kabaddi history. We rank his five greatest raids ever.',
        category: 'pro-kabaddi',
        tags: ['Pro Kabaddi', 'Pardeep Narwal'],
        date: '2026-01-11',
        author: 'KabaddiOne Editorial',
        readTime: '6 min',
        content: `
            <p>Pardeep Narwal is the most prolific raider in Pro Kabaddi League history. Here are his five greatest raids.</p>
            <h2>5. The 3-Point Raid vs U Mumba (Season 5)</h2>
            <p>With his team down to two men, Pardeep single-handedly kept them alive with a brilliant 3-point raid.</p>
            <h2>4. The Toe Touch Masterclass (Season 6 Final)</h2>
            <p>In the season final, Pardeep delivered a clinical toe touch that broke the opposition's spirit.</p>
            <h2>3. The 5-Point Super Raid (Season 7)</h2>
            <p>A super raid that included a dubki, a hand touch, and a back kick in a single raid.</p>
            <h2>2. The Last-Second Escape (Season 8)</h2>
            <p>With the match tied and time expiring, Pardeep scored the winning point.</p>
            <h2>1. The Legendary 6-Point Raid (Season 4)</h2>
            <p>This was the raid that made everyone believe Pardeep was the greatest raider of his generation.</p>
        `
    },
    {
        id: 'pkl-player-stats-analysis',
        title: 'How to Analyze Pro Kabaddi Player Stats Like a Pro',
        excerpt: 'Strike rate, raid success, tackle points, and more. A complete breakdown of the metrics that matter most in modern kabaddi analytics.',
        category: 'pro-kabaddi',
        tags: ['Pro Kabaddi', 'Analytics'],
        date: '2026-01-09',
        author: 'KabaddiOne Stats Desk',
        readTime: '7 min',
        content: `
            <p>Modern kabaddi analytics goes far beyond simply counting raid points and tackle points. Here are the key metrics every serious fan should understand.</p>
            <h2>Raid Success Rate</h2>
            <p>The percentage of successful raids out of total raid attempts. A good raider has a 40%+ success rate.</p>
            <h2>Strike Rate</h2>
            <p>Raid points scored per raid attempt, converted to a percentage.</p>
            <h2>Tackle Success Rate</h2>
            <p>The percentage of successful tackles out of total tackle attempts.</p>
            <h2>Total Points Contribution</h2>
            <p>A player's total points (raid + tackle + bonus) divided by matches played.</p>
            <h2>Do-or-Die Raid Percentage</h2>
            <p>The percentage of do-or-die raids that result in points. This is the most important stat for pressure players.</p>
        `
    },
    {
        id: 'pkl-s12-auction-recap',
        title: 'PKL Season 12 Auction Recap: Biggest Buys & Biggest Steals',
        excerpt: 'From record-breaking bids to undervalued steals, we review the biggest moves from the 2026 Pro Kabaddi League auction.',
        category: 'pro-kabaddi',
        tags: ['Pro Kabaddi', 'Auction'],
        date: '2026-01-07',
        author: 'KabaddiOne Editorial',
        readTime: '5 min',
        content: `
            <p>The 2026 PKL auction was one for the history books. Here are the biggest moves.</p>
            <h2>Biggest Buys</h2>
            <ul>
                <li>Pardeep Narwal — ₹3.2 Cr (U Mumba)</li>
                <li>Fazel Atrachali — ₹2.8 Cr (Puneri Paltan)</li>
                <li>Naveen Kumar — ₹2.5 Cr (Dabang Delhi)</li>
            </ul>
            <h2>Biggest Steals</h2>
            <ul>
                <li>Ashu Malik — ₹45 Lakh (Dabang Delhi)</li>
                <li>Mohit Goyat — ₹32 Lakh (U Mumba)</li>
                <li>Nitin Tomar — ₹28 Lakh (Tamil Thalaivas)</li>
            </ul>
            <p>The season kicks off February 3rd. Stay tuned for full coverage.</p>
        `
    },

    /* ---------- KABADDI TOURNAMENT ---------- */
    {
        id: 'asian-games-2026-squad',
        title: 'Asian Games 2026: India\'s Kabaddi Squad Announced',
        excerpt: 'The Amateur Kabaddi Federation of India has named a 12-member squad for the 2026 Asian Games, featuring a mix of veterans and exciting young talent.',
        category: 'kabaddi-tournament',
        tags: ['Tournament', 'Asian Games'],
        date: '2026-01-13',
        author: 'KabaddiOne News Desk',
        readTime: '4 min',
        content: `
            <p>The Amateur Kabaddi Federation of India has announced a 12-member squad for the 2026 Asian Games, with the team mixing experienced campaigners and exciting newcomers.</p>
            <h2>The Squad</h2>
            <ul>
                <li>Pardeep Narwal (Raider)</li>
                <li>Naveen Kumar (Raider)</li>
                <li>Sachin Tanwar (Raider)</li>
                <li>Ashu Malik (Raider)</li>
                <li>Fazel Atrachali (Defender)</li>
                <li>Nitesh Kumar (Defender)</li>
                <li>Rinku Hooda (Defender)</li>
                <li>Mohit Goyat (Defender)</li>
                <li>Karamjeet Singh (All-rounder)</li>
                <li>Prashanth Kumar (All-rounder)</li>
                <li>Sachin Kumar (All-rounder)</li>
                <li>Ajay Thakur (Captain)</li>
            </ul>
            <p>The Asian Games kabaddi event begins October 2nd.</p>
        `
    },
    {
        id: 'kabaddi-world-cup-groups',
        title: 'Kabaddi World Cup 2026: Group Stage Draw Results',
        excerpt: 'The draw for the expanded 16-team Kabaddi World Cup is complete. Here are all four groups and the road to the final.',
        category: 'kabaddi-tournament',
        tags: ['Tournament', 'World Cup'],
        date: '2026-01-10',
        author: 'KabaddiOne News Desk',
        readTime: '5 min',
        content: `
            <p>The Kabaddi World Cup 2026 will feature a record 16 nations across four groups. Here's how the groups look.</p>
            <h2>Group A</h2>
            <ul><li>India</li><li>South Korea</li><li>England</li><li>Kenya</li></ul>
            <h2>Group B</h2>
            <ul><li>Iran</li><li>Thailand</li><li>Japan</li><li>USA</li></ul>
            <h2>Group C</h2>
            <ul><li>Bangladesh</li><li>Poland</li><li>Denmark</li><li>Argentina</li></ul>
            <h2>Group D</h2>
            <ul><li>Pakistan</li><li>Canada</li><li>Australia</li><li>Nepal</li></ul>
            <p>The top two from each group advance to the quarterfinals.</p>
        `
    },
    {
        id: 'women-kabaddi-league-2026',
        title: 'Women\'s Kabaddi League 2026: A New Era Begins',
        excerpt: 'The Women\'s Kabaddi League returns for its third season with expanded teams, increased prize money, and a new broadcast deal.',
        category: 'kabaddi-tournament',
        tags: ['Tournament', 'Women'],
        date: '2026-01-06',
        author: 'KabaddiOne Editorial',
        readTime: '5 min',
        content: `
            <p>The Women's Kabaddi League is back and bigger than ever. Season 3 will feature eight teams (up from six), a ₹5 crore prize pool, and a landmark broadcast deal with a major sports network.</p>
            <h2>Expansion Teams</h2>
            <p>Two new franchises join the league this season: the Hyderabad Hawks and the Kerala Storm.</p>
            <h2>Prize Money</h2>
            <p>The champion team will walk away with ₹2 crore, while the runner-up takes home ₹1 crore.</p>
            <h2>Schedule</h2>
            <p>The season begins March 20 and runs for five weeks, with matches broadcast in five languages.</p>
        `
    },

    /* ---------- BLOG ---------- */
    {
        id: 'rise-of-kabaddi-streaming',
        title: 'The Rise of Kabaddi Streaming: A New Era for the Sport',
        excerpt: 'Kabaddi viewership is exploding online. We explore how independent streamers are reshaping the way fans consume the sport.',
        category: 'blog',
        tags: ['Blog', 'Streaming'],
        date: '2026-01-08',
        author: 'Arjun Mehta',
        readTime: '6 min',
        content: `
            <p>Five years ago, if you wanted to watch a local kabaddi match, you'd have to be there in person. Today, thousands of matches are streamed live every week on YouTube, Twitch, and Facebook — and the numbers are only growing.</p>
            <h2>The Democratization of Broadcast</h2>
            <p>Broadcast equipment used to cost tens of thousands of dollars. Now, with just a smartphone, an OBS overlay, and a data connection, anyone can broadcast a professional-looking match.</p>
            <h2>Why It Matters</h2>
            <p>Kabaddi is one of the fastest-growing sports in the world, particularly in South Asia and the Middle East. Streaming is bringing the sport to audiences that mainstream broadcasters have long ignored.</p>
            <h2>What's Next?</h2>
            <p>We expect to see professional streamers begin signing exclusive deals with leagues, much like how the early YouTubers of the 2000s became mainstream media figures.</p>
        `
    },
    {
        id: 'why-streamers-need-overlay',
        title: 'Why Every Kabaddi Streamer Needs a Professional Broadcast Overlay',
        excerpt: 'A good overlay isn\'t just about looking professional. It changes how viewers engage with your stream, improves retention, and can help you grow faster.',
        category: 'blog',
        tags: ['Blog', 'Streaming'],
        date: '2026-01-05',
        author: 'Arjun Mehta',
        readTime: '5 min',
        content: `
            <p>If you're streaming kabaddi without an overlay, you're missing out on one of the most powerful tools for growing your channel.</p>
            <h2>Retention: The Key Metric</h2>
            <p>Studies show that streams with professional overlays retain viewers 40% longer than streams without. The visual interest keeps people watching.</p>
            <h2>Trust & Authority</h2>
            <p>An overlay signals to viewers that you take your stream seriously. That builds trust — and trust builds followers.</p>
            <h2>Attracting Sponsors</h2>
            <p>Sponsors want their logos on professional-looking streams. A good overlay can help you attract your first brand deal.</p>
            <h2>How to Get Started</h2>
            <p>KabaddiOne offers a free overlay that works with OBS, Streamlabs, and XSplit. It's the simplest way to upgrade your stream today.</p>
        `
    },

    /* ---------- TUTORIAL ---------- */
    {
        id: 'reading-kabaddi-scoreboard',
        title: 'Beginner\'s Guide to Reading a Kabaddi Scoreboard',
        excerpt: 'New to kabaddi? Here\'s everything you need to know about reading a scoreboard, from raid timers to bonus points to all-out markers.',
        category: 'tutorial',
        tags: ['Tutorial', 'Basics'],
        date: '2026-01-11',
        author: 'Coach Vikram Singh',
        readTime: '4 min',
        content: `
            <p>Kabaddi's scoreboard can look confusing at first glance. Here's a quick breakdown of the key elements.</p>
            <h2>Score</h2>
            <p>The most important element — the total points each team has scored.</p>
            <h2>Raid Timer</h2>
            <p>Each raid has a 30-second timer. If the raider doesn't score within 30 seconds, the raid is deemed unsuccessful.</p>
            <h2>Timeouts Remaining</h2>
            <p>Each team gets 2 timeouts per half, each lasting 30 seconds.</p>
            <h2>Player Tracker</h2>
            <p>Shows which players are currently on the mat for each team. Players who have been tackled or raided out are "out" until the next all-out.</p>
            <h2>Bonus Points</h2>
            <p>Bonus points are awarded to raiders who touch a specific bonus line in the opponent's half.</p>
        `
    },
    {
        id: 'using-bonus-alert-system',
        title: 'How to Use the Bonus Point Alert System',
        excerpt: 'Get the most out of KabaddiOne\'s automatic bonus point alerts. Here\'s a quick walkthrough for streamers.',
        category: 'tutorial',
        tags: ['Tutorial', 'Product'],
        date: '2026-01-04',
        author: 'KabaddiOne Support',
        readTime: '3 min',
        content: `
            <p>KabaddiOne's Bonus Point Alert system automatically displays a high-energy graphic whenever a bonus point is scored.</p>
            <h2>How to Enable It</h2>
            <ol>
                <li>Open the KabaddiOne app and start your match</li>
                <li>Tap the "Overlay Settings" icon (top right)</li>
                <li>Toggle "Bonus Point Alerts" to ON</li>
                <li>Go to your OBS overlay — it will update automatically</li>
            </ol>
            <h2>Customizing the Animation</h2>
            <p>You can choose from 4 different bonus point animations in the settings. Choose the one that best fits your broadcast style.</p>
            <h2>When It Triggers</h2>
            <p>The animation triggers automatically when you tap the "Bonus Point" button in the app during a raid.</p>
        `
    }
];
