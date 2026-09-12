/**
 * Page copy for business utilities and education tools.
 * See lib/tool-copy-extended.ts for why these exist.
 */

export const LONG_DESCRIPTIONS: Record<string, string> = {
  // ── BUSINESS ──────────────────────────────────────────────
  'timezone-converter': `The Time Zone Converter translates a time in one city into the local time in others, accounting for each location's current daylight saving state.

Daylight saving is what makes this genuinely error-prone rather than simple arithmetic. The offset between two cities is not fixed — it changes several times a year, and the transition dates differ by country. The United States and Europe switch on different weekends, so for a couple of weeks each spring and autumn the gap between New York and London is four hours rather than the usual five. Most of Asia, including Pakistan and India, does not observe daylight saving at all, and the southern hemisphere runs the opposite way. Any meeting scheduled by remembering a fixed offset will eventually land an hour wrong.

The half-hour and quarter-hour zones catch people too: India and Sri Lanka run at 30-minute offsets, Nepal at 45 minutes, and parts of Australia at 30. Assuming whole-hour offsets produces meetings that start at :30 past for one participant.

For anyone scheduling across regions regularly, the reliable habit is to name the time zone explicitly when proposing a time, and to confirm against a converter around the switchover weeks rather than trusting the offset you remember.

Conversion uses your browser's own time zone database, so it reflects the current rules.`,

  'date-difference': `The Date Difference Calculator counts the days, weeks, months, and years between two dates, and can add or subtract a number of days from a date to find another.

Counting days between dates by hand goes wrong for predictable reasons: months of differing lengths, leap years, and the question of whether both endpoints are included. That last one matters more than it seems — the gap between the 1st and the 8th is seven days if you count the interval and eight if you count the days involved. Which is correct depends entirely on what you are measuring, which is why contracts and notice periods usually specify it explicitly.

Leap years are the other reliable source of error. The rule is not simply every four years: century years are skipped unless divisible by 400, which is why 1900 was not a leap year and 2000 was. It rarely matters, and then it does.

The practical uses are mostly deadline arithmetic: notice periods, contract terms, project timelines, payment terms of 30 or 60 days, visa durations, and the gap between a purchase date and the end of a warranty. Working days rather than calendar days is a different calculation again, since it depends on which public holidays apply where.

Calculation happens instantly in your browser.`,

  'random-number': `The Random Number Generator produces numbers within a range you specify, with options for how many to generate and whether duplicates are allowed.

The distinction worth understanding is between randomness that is unpredictable-enough and randomness that is cryptographically secure. Ordinary pseudorandom generators produce sequences that pass statistical tests but are deterministic — given the internal state, the next value is predictable. That is entirely fine for picking a raffle winner, rolling dice, or choosing a sample. It is not fine for anything an adversary has a reason to predict: tokens, keys, or passwords, which need a cryptographic source.

Allowing or excluding duplicates changes what you are actually modelling. Drawing with replacement — duplicates allowed — is like rolling a die repeatedly, where every roll is independent. Drawing without replacement is like dealing cards, where each pick reduces the pool. Picking five winners from a list needs the second; simulating five dice rolls needs the first.

A note on what randomness looks like, since it causes recurring suspicion that a generator is broken: genuinely random sequences contain clusters and repeats far more often than intuition expects. Three consecutive numbers in a small range, or the same value twice in a short run, is normal rather than evidence of a fault. Sequences that look evenly spread are usually the ones that have been tampered with.

Generation happens in your browser.`,

  'random-name-picker': `The Random Name Picker selects one or more names at random from a list you paste in, for draws, assignments, and any decision that should not be anyone's choice.

The reason to use a tool rather than picking yourself is fairness that can be demonstrated. A person choosing "at random" from a list is measurably biased — toward names they recognise, toward the top and bottom of a list, away from whoever was picked last time. For a prize draw, a classroom cold-call, or assigning an unpopular task, the value is as much in the transparency as in the randomness: nobody can argue with a mechanism that treats every entry identically.

The choice between picking with and without replacement matters when selecting multiple winners. Without replacement, each name can only be drawn once, which is what a multi-prize draw needs. With replacement, a name can come up twice, which is almost never what you want for people.

For anything with real stakes — a public giveaway with a prize of meaningful value — it is worth doing the draw where participants can see it happen, or recording it. Many jurisdictions also have specific rules about how prize draws must be conducted and advertised, which are worth checking before running one publicly.

Selection happens entirely in your browser, so the list of names is never uploaded.`,

  'pomodoro-timer': `The Pomodoro Timer runs 25-minute focus intervals separated by short breaks, with a longer break after every fourth interval.

The technique's insight is not really about the number 25. It is that a fixed, short, clearly-bounded commitment is much easier to start than an open-ended one — "work on this for 25 minutes" defeats the resistance that "work on this" produces. The timer also creates an external boundary that makes it easier to refuse an interruption, because there is a defined point at which you will be available.

The breaks are the part most people skip, and they are doing real work. Sustained attention degrades over time, and stepping away — genuinely away, not switching to another screen — is what allows the next interval to start fresh. A break spent scrolling provides very little recovery because it is the same kind of attention.

The rules are worth bending to fit the task. Twenty-five minutes suits work that fragments naturally: email, admin, study, tasks with clear stopping points. It actively interferes with work that requires deep context-loading, where a timer going off at the moment things finally clicked is a cost rather than a benefit — longer intervals of 50 or 90 minutes suit that better. The structure is a tool, not a rule.

The timer runs entirely in your browser.`,

  'stopwatch': `This page provides three related timing tools: a stopwatch that counts up with lap recording, a countdown timer that counts down to zero with an alert, and an interval timer that alternates between work and rest periods.

Lap timing on the stopwatch is the feature that distinguishes it from just watching a clock. Recording splits without stopping lets you compare segments against each other — which lap was slowest, whether pace held or drifted — which is the actual question in training, in timed drills, and in any repeated process you are trying to make faster.

The countdown is the everyday one: cooking, presentations kept to time, timed exam practice, and anything that needs an alert rather than monitoring. The interval timer covers structured training formats — HIIT, circuits, Tabata — where the value is not having to watch a clock at all while working.

One practical caveat for any browser-based timer: mobile browsers aggressively throttle background tabs and may suspend a page entirely when the screen locks, which can delay or suppress an alert. For anything where missing the alert matters, keeping the screen on and the tab in the foreground is the reliable approach — or using a device alarm instead.

Timing runs in your browser with no account, no ads interrupting the countdown, and nothing transmitted.`,

  'url-shortener': `The URL Shortener turns a long link into a short one that is easier to share, print, or fit into a character-limited message.

The tradeoff to understand before using any shortener for anything important is permanence. A short link only works for as long as the service redirecting it exists. Shortening services have shut down before, and when they do every link ever created through them breaks simultaneously — including links in printed material, published articles, and archived documents, none of which can be updated. For anything intended to last, the original URL is the safer thing to publish even when it is ugly.

The second consideration is trust. Short links hide their destination, which is exactly why they are used in phishing, and why many corporate mail filters and some social platforms treat them with suspicion or block them outright. A recipient cannot tell where a shortened link goes before clicking it, which is a genuine reason some people will not.

Where shorteners are clearly worth it: print and physical media where a long URL would be unusable, verbal or on-screen sharing where someone has to type it, messages with hard character limits, and campaign links where you want click tracking separated by channel.

For anything long-lived, a custom short domain you control is the better answer, since you keep the ability to repoint links.

Links are created in your browser via a shortening service; no personal data is attached to them.`,

  'checklist-maker': `The Checklist Maker turns a list of items into a formatted, printable checklist with tick boxes.

Checklists earn their reputation in settings where the cost of forgetting is high. Aviation has used them since the 1930s, and their introduction into surgery produced measurable reductions in complications — not because surgeons did not know the steps, but because expertise does not protect against omission under pressure, fatigue, or interruption. That is the specific failure a checklist addresses: not ignorance, but the routine step skipped because something else demanded attention at the wrong moment.

What makes a checklist work is discipline about scope. A list of sixty items does not get used; it gets skimmed and then abandoned. Effective checklists cover the steps that are both critical and genuinely easy to miss, which is usually a much shorter list than the full procedure. Items should be specific and verifiable — "confirm backup completed" rather than "check backups" — so that ticking the box requires actually establishing something.

The other useful distinction is between a read-do checklist, worked through step by step as you perform the task, and a do-confirm checklist, completed from memory and then verified against the list. The second suits experienced people doing familiar work; the first suits unfamiliar or high-stakes procedures.

The checklist is generated in your browser and downloads ready to print.`,

  'meeting-cost-calculator': `The Meeting Cost Calculator multiplies the number of attendees by their hourly cost and the meeting's duration to show what it costs the organisation in salary time.

The figure is usually startling, which is the point. A one-hour meeting with eight mid-salary people is a substantial expense, and it recurs every week if the meeting is a standing one — the annual cost of a weekly meeting is a number that changes how people think about whether it should exist. Meeting time is generally invisible in budgets in a way that software licences and travel are not, despite typically costing far more.

Two things the raw calculation understates. Salary is not the full cost of an employee — benefits, taxes, equipment, and overheads mean the true cost is meaningfully higher than the salary figure, often by a third or more. And the disruption cost is real but unmeasured: a meeting in the middle of an afternoon does not consume one hour, it fragments the surrounding block into two periods too short for focused work, which is why several scattered meetings can consume a day.

What to do with the number is the useful part. It rarely justifies cancelling meetings outright, but it does justify shortening them, cutting the attendee list to people who actually need to be there, and asking whether a decision that could be made in writing needs everyone in a room.

Calculation happens in your browser; salary figures are never transmitted.`,

  'domain-age-checker': `The Domain Age Checker looks up when a domain was first registered and how long it has been active, from public WHOIS registration data.

Age is used as a trust signal in two contexts. For SEO, domain age itself is not a ranking factor — Google has been explicit about this — but age correlates with things that are: an established domain has had longer to accumulate links, content, and history. The correlation gets mistaken for causation constantly, and buying an old domain does not confer ranking ability on its own. What matters is what the domain actually accumulated, which is why checking archived history and existing backlinks matters far more than the registration date when evaluating a domain to acquire.

The more practical use is fraud assessment. A shopping site offering heavy discounts on a domain registered three weeks ago is a recognisable pattern, and registration date is one of the quicker checks available. Legitimate businesses occasionally have new domains, so it is a signal rather than a verdict — but combined with no contact details, no trading history, and payment methods with no buyer protection, it is a strong one.

A caveat on the data: privacy protection services obscure registrant details on most domains now, and some registries restrict WHOIS output. Registration and expiry dates generally remain visible even when ownership details do not, and a domain that has lapsed and been re-registered may show a recent date despite a long earlier history.

The lookup queries public registration data.`,

  // ── EDUCATION ─────────────────────────────────────────────
  'gpa-calculator': `The GPA Calculator computes grade point average from your course grades and credit hours, handling the credit-weighting that makes hand calculation error-prone.

Weighting by credit hours is the part people get wrong. GPA is not the average of your grade points — it is the average weighted by how many credits each course carried, so a four-credit course influences the result twice as much as a two-credit one. Averaging grades directly produces a number that can be meaningfully different from your actual GPA, usually in whichever direction your heavier courses went.

Scales differ by institution and by country, which is why a GPA figure means little without knowing the scale behind it. The 4.0 scale is standard in the United States, with variants that treat plus and minus grades differently — some institutions award 3.7 for an A-minus, others award a flat 4.0 for any A, and the difference compounds across a degree. Weighted scales used in some high schools extend above 4.0 for advanced courses. Percentage-based and classification-based systems elsewhere do not map cleanly onto any of them, which is why converting an international transcript is a formal process rather than arithmetic.

Cumulative versus term GPA is the other distinction: a strong term does less to a cumulative average than expected once several terms are already counted, which is worth knowing before relying on one good semester to fix a low overall figure.

Calculation happens in your browser; no grade data is transmitted.`,

  'grade-calculator': `The Grade Calculator works out a weighted final grade from component scores — assignments, midterms, participation, finals — each carrying its stated percentage of the total.

The weighting is what makes it worth calculating rather than eyeballing. A course where the final exam is 40 percent of the grade behaves very differently from one where it is 15, and the same exam score produces a very different outcome in each. Knowing the weights tells you where effort actually pays, which is frequently not where it feels most urgent.

The genuinely useful mode is working backwards: given what you have scored so far, what do you need on the remaining assessments to reach a target grade? That answer is often clarifying in both directions. Sometimes the target is comfortably reachable and the anxiety was disproportionate. Sometimes it turns out to be arithmetically impossible, which is unwelcome but far better known now than after the exam — because it redirects effort toward courses where the marginal grade point is still available.

Two things to confirm against the syllabus before trusting any calculation: whether the lowest score in a category gets dropped, which many courses do and which changes the arithmetic substantially, and whether the final is weighted or can replace an earlier score.

Calculation runs entirely in your browser.`,

  'citation-generator': `The Citation Generator formats references in APA, MLA, and Chicago style from the details of a source — author, title, publication, date, and URL or DOI.

The three styles differ in ways that are small individually and consequential in aggregate, because markers check them. APA leads with author and year and is standard across the sciences and social sciences. MLA leads with author and page and is standard in the humanities. Chicago offers two distinct systems — notes-and-bibliography, used heavily in history, and author-date, closer to APA. Details like whether first names are given in full or initialled, how multiple authors are ordered and truncated, and which elements are italicised all vary, and getting them wrong costs marks even when the source is correct.

What a generator cannot do is verify the source details you give it. A citation formatted perfectly from a wrong publication year is still wrong, and the errors that propagate furthest come from copying metadata that was already incorrect. Checking author spelling, year, and page numbers against the source itself is the step that matters.

Two format notes worth knowing: a DOI is preferred over a URL wherever one exists, because DOIs are permanent while URLs rot; and "accessed" dates are required for some source types in some styles and omitted in others.

Also worth remembering that citing correctly is the mechanical part of academic integrity — the substantive part is citing anything whose ideas are not your own, regardless of how much the wording changed.

Formatting happens in your browser.`,

  'roman-numerals': `The Roman Numeral Converter translates numbers into Roman numerals and back, following the standard subtractive rules.

The system uses seven letters — I, V, X, L, C, D, M for 1, 5, 10, 50, 100, 500, 1000 — combined additively, with a subtractive shortcut for the cases just below a higher value: IV for 4, IX for 9, XL for 40, XC for 90, CD for 400, CM for 900. The rule people most often break is repetition: the same symbol appears at most three times consecutively, which is why 4 is IV and not IIII, and 40 is XL and not XXXX.

Subtraction also has constraints that keep the notation unambiguous. Only I, X, and C are used subtractively, and only before the next two higher values — so 99 is XCIX rather than the intuitive-looking IC. Getting this wrong is the most common source of incorrectly formed numerals, including on a surprising number of published items.

The system has no zero and no standard way to write fractions or negative numbers, which is a substantial part of why positional notation replaced it for calculation. Its survival is entirely conventional: monarchs and popes, film copyright dates, book preface pagination, clock faces, sporting events, and building inscriptions.

The one well-known deliberate exception: clock faces often use IIII rather than IV for visual balance against the VIII opposite it, a convention that has persisted for centuries despite being technically incorrect.

Conversion happens instantly in your browser.`,

  'number-base-converter': `The Number Base Converter translates values between binary, octal, decimal, and hexadecimal.

Each base exists because it fits a particular job. Binary is what hardware actually uses, since a bit is a physical state. Hexadecimal is the practical way to read binary, because one hex digit maps exactly onto four bits — so a byte is always exactly two hex characters, which makes memory dumps, colour values, and byte-level data readable in a way a long binary string is not. Octal maps onto three bits and survives mainly in Unix file permissions, where 755 and 644 are three-bit permission triples rather than arbitrary numbers.

The conversions turn up constantly once you know where to look. CSS colours are three hex bytes. MAC addresses, memory addresses, and hash digests are hex. Bitmask flags and subnet masks make sense in binary and look arbitrary in decimal. Character codes and escape sequences appear in hex or octal depending on the convention in use.

Two details worth knowing. Hex digits above 9 use letters A through F for 10 through 15, and case is not significant. And the same digit sequence means different values in different bases — 100 is four in binary, sixty-four in octal, and two hundred and fifty-six in hex — which is why prefixes like 0b, 0o, and 0x exist and why omitting them in documentation causes real confusion.

Conversion is instant in your browser.`,

  'flashcard-maker': `The Flashcard Maker turns a list of question-and-answer pairs into digital cards you can study from, flipping to reveal the answer.

The reason flashcards work better than re-reading is that they force retrieval. Reading a page again feels productive because it feels familiar, but familiarity is not recall — the well-documented finding is that trying to retrieve an answer, even unsuccessfully, produces far stronger retention than reviewing the material passively. The effort of failing to remember is doing the work.

The second principle is spacing. Reviewing material at increasing intervals — a day later, then three, then a week — retains far more than the same total time spent in one session. Cramming produces a score the next morning and very little a month later, which matters for anything cumulative.

What makes an individual card effective is being narrow. A card asking "explain the causes of the First World War" cannot be answered correctly or incorrectly in any useful sense. Several cards, each on one specific cause, can be. If you find yourself partially remembering a card repeatedly, that is the signal it contains more than one fact and should be split.

Writing the cards is itself worth something — the process of deciding what the question is forces you to identify what actually matters in the material, which is why pre-made decks are consistently less effective than ones you made.

Cards are created and stored in your browser.`,

  'pronunciation-guide': `The Word Pronunciation Tool speaks any word aloud using your browser's built-in speech synthesis, so you can hear it rather than guess from spelling.

English spelling is an unusually unreliable guide to pronunciation, which is the whole reason this is needed. The language absorbed vocabulary from Old English, Norse, French, Latin, and Greek while spelling conventions froze at various points, so the same letters behave differently depending on a word's origin — "through", "though", "thought", "tough", and "thorough" share four letters and no pronunciation pattern. Learners are not being careless when they get these wrong; the spelling genuinely does not encode the answer.

Two practical limitations of synthesised speech. It works from general rules and a dictionary, so unusual proper nouns, surnames, and technical terms are frequently mispronounced — often confidently. And accent matters: a synthesiser produces one regional pronunciation, and words like "schedule", "route", and "either" differ legitimately between British and American English rather than one being correct.

For words where the exact pronunciation carries weight — a name you are about to say out loud to its owner, or terminology in a presentation — a recording of a native speaker is better than synthesis, and dictionaries with audio from human speakers are the more reliable source.

Speech is generated by your browser's own speech engine, so the available voices depend on your device and nothing is sent to a server.`,

  'logic-puzzle-generator': `The Sudoku and Puzzle Generator creates playable Sudoku grids at a range of difficulty levels, each with a unique solution.

The uniqueness constraint is what separates a real Sudoku from an arbitrary partially-filled grid. A properly constructed puzzle has exactly one valid completion, which is what makes pure logical deduction sufficient — you never have to guess between branches. Generating one requires solving the grid backwards from a complete solution, removing clues while verifying at each step that uniqueness still holds, which is why generated puzzles are more reliable than hand-made ones.

Difficulty is not simply the number of clues given, which is the common assumption. It is determined by which solving techniques are required: an easy puzzle can be completed by scanning for cells with only one possibility, while harder grids require chained deductions across multiple units. Two puzzles with an identical clue count can sit at very different difficulties depending on where those clues are placed. The known minimum for a uniquely solvable grid is 17 clues, proven by exhaustive computer search in 2012.

Sudoku involves no arithmetic at all despite using digits — the numbers are just nine distinguishable symbols, and the puzzle would work identically with colours or letters. It is a constraint-satisfaction problem, which is why it appeals to people who dislike mental arithmetic.

Puzzles are generated in your browser and can be played on screen or printed.`,
};

export const HOW_TO_STEPS: Record<string, [string, string, string]> = {
  'timezone-converter': [
    'Pick your source city and time.',
    'Add the cities you are converting to and read their local times.',
    'Re-check around daylight saving changeover weeks — offsets shift, and the dates differ by country.',
  ],
  'date-difference': [
    'Enter the two dates you want the gap between.',
    'Read the result in days, weeks, months, and years.',
    'Decide whether your use case counts the interval or both endpoints — contracts usually specify which.',
  ],
  'random-number': [
    'Set the minimum and maximum of your range.',
    'Choose how many numbers you need and whether duplicates are allowed.',
    'Generate — and do not use these for passwords or tokens, which need a cryptographic source.',
  ],
  'random-name-picker': [
    'Paste your list of names, one per line.',
    'Choose how many to draw, and turn off replacement so nobody is picked twice.',
    'Draw the winner, ideally where participants can see it happen if there is a real prize.',
  ],
  'pomodoro-timer': [
    'Start a 25-minute focus interval and work on one thing.',
    'Take the short break away from a screen when it ends — that is where the recovery happens.',
    'Extend the interval to 50 or 90 minutes for deep work that suffers from being interrupted.',
  ],
  stopwatch: [
    'Choose stopwatch, countdown, or interval mode.',
    'Start timing, recording laps on the stopwatch to compare segments.',
    'Keep the tab in the foreground with the screen on — mobile browsers throttle background timers.',
  ],
  'url-shortener': [
    'Paste your long URL.',
    'Generate the short link and copy it.',
    'Publish the original URL instead for anything long-lived or printed — short links break if the service closes.',
  ],
  'checklist-maker': [
    'Enter your items, keeping the list to the steps that are both critical and easy to miss.',
    'Write each one as something verifiable — "confirm backup completed" rather than "check backups".',
    'Download or print, and decide whether it is worked through step by step or used to verify afterwards.',
  ],
  'meeting-cost-calculator': [
    'Enter the number of attendees, their average hourly cost, and the duration.',
    'Multiply by the number of occurrences if it is a recurring meeting — that is the number that changes minds.',
    'Use it to shorten the meeting and trim the attendee list rather than to cancel outright.',
  ],
  'domain-age-checker': [
    'Enter the domain you want to check.',
    'Read the registration date and how long it has been active.',
    'Treat a very new domain on a discount shopping site as a warning sign, and remember age itself is not an SEO ranking factor.',
  ],
  'gpa-calculator': [
    'Enter each course with its grade and credit hours.',
    'Confirm the scale your institution uses — plus/minus handling varies and changes the result.',
    'Read the weighted GPA, remembering heavier-credit courses count proportionally more.',
  ],
  'grade-calculator': [
    'Enter each component score with the percentage weight it carries.',
    'Check the syllabus for dropped lowest scores or a replaceable final, which change the arithmetic.',
    'Work backwards from a target grade to see what the remaining assessments need to be.',
  ],
  'citation-generator': [
    'Enter the source details — author, title, publication, date, and DOI or URL.',
    'Pick the style your course requires: APA, MLA, or Chicago.',
    'Check the author spelling, year, and page numbers against the source before pasting the citation in.',
  ],
  'roman-numerals': [
    'Enter a number to convert to Roman numerals, or a numeral to convert back.',
    'Check the result follows the rules — no symbol four times in a row, and only I, X, and C used subtractively.',
    'Copy the result; note 99 is XCIX, not IC.',
  ],
  'number-base-converter': [
    'Enter your value and select which base it is currently in.',
    'Read the equivalent in binary, octal, decimal, and hexadecimal.',
    'Label the base when you use the result — 100 means a different value in each.',
  ],
  'flashcard-maker': [
    'Enter your question and answer pairs, keeping each card to a single fact.',
    'Study by attempting recall before flipping — the effort of retrieval is what builds retention.',
    'Review at increasing intervals rather than cramming, and split any card you only ever half-remember.',
  ],
  'pronunciation-guide': [
    'Type the word you want to hear.',
    'Play it, and repeat it aloud yourself.',
    'For names and technical terms, check a human recording too — synthesis mispronounces those confidently.',
  ],
  'logic-puzzle-generator': [
    'Pick a difficulty level and generate a grid.',
    'Solve by deduction — a correctly generated puzzle has one solution and never requires guessing.',
    'Play on screen or print it; raise the difficulty when scanning for single candidates stops being enough.',
  ],
};
