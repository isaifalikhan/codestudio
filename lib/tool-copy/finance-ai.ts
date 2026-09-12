/**
 * Page copy for finance calculators and AI writing tools.
 * See lib/tool-copy-extended.ts for why these exist.
 */

export const LONG_DESCRIPTIONS: Record<string, string> = {
  // ── FINANCE ───────────────────────────────────────────────
  'loan-calculator': `The Loan EMI Calculator works out your equated monthly instalment from the principal, annual interest rate, and term, then shows the total interest you will pay across the life of the loan and a month-by-month amortisation breakdown.

The breakdown is the part worth studying, because the headline monthly figure hides how the money is actually allocated. Every instalment is the same size, but the split between interest and principal shifts continuously: early payments are mostly interest, since interest accrues on a large outstanding balance, and only later do they start meaningfully reducing what you owe. On a long loan this means that several years in, the balance has fallen far less than the amount paid would suggest — which is not a trick, just how amortisation works, but it surprises people at their first statement.

Two comparisons the calculator makes concrete. Term length: a shorter term raises the monthly payment but cuts total interest sharply, often by more than people expect, because interest is charged on the balance for fewer years. And rate sensitivity: on a long loan, even a difference of half a percentage point compounds into a substantial sum, which is what makes shopping between lenders worth the paperwork.

One thing it does not include is the fees that sit outside the interest rate — processing charges, insurance requirements, and early-repayment penalties — which is why the advertised rate and the true cost of borrowing can differ.

All calculation happens in your browser; no financial details are transmitted or stored.`,

  'compound-interest': `The Compound Interest Calculator projects how a balance grows when returns are earned on previous returns as well as on the original principal, taking your starting amount, regular contributions, expected rate, compounding frequency, and time horizon.

Compounding is non-linear, and that is the whole point. The growth curve is nearly flat for years and then bends upward sharply, which means the outcome is far more sensitive to time than to the amount contributed. A smaller sum invested early routinely beats a larger sum invested later, and the gap widens the longer the horizon — this is the single most important fact in personal finance and the least intuitive.

Compounding frequency matters less than people assume. Moving from annual to monthly compounding at the same nominal rate adds a modest amount; moving from monthly to daily adds very little. The rate and the number of years dominate everything else.

Two honesty checks on any projection. First, it assumes a constant rate, and real markets do not deliver one — a 7 percent average across twenty years arrives as a sequence of good and bad years, and the order of those years affects the outcome if you are withdrawing. Second, the figure is nominal. At 3 percent inflation, money roughly halves in purchasing power over 24 years, so a projection that looks large in future currency is worth meaningfully less in today's terms. Subtracting inflation from your assumed rate gives a more honest picture.

Calculation runs entirely in your browser.`,

  'vat-calculator': `The VAT Calculator adds VAT to a net price or strips it out of a gross price at whatever rate you set, showing the net amount, the tax amount, and the gross total separately.

Removing VAT is the operation people get wrong, and it is worth stating plainly: you do not subtract the VAT percentage from the gross price. At a 20 percent rate, the VAT contained in a 120 gross price is 20, not 24 — because the tax was calculated on the 100 net figure, not on the total. The correct operation is dividing by 1.20, and doing it the intuitive way overstates the tax on every line.

Rates vary by country and by product category. The UK standard rate is 20 percent with reduced rates of 5 percent and zero on specific categories; Ireland is 23; Germany 19; Pakistan's general sales tax sits at 18 for most goods. Many jurisdictions also apply reduced rates to food, books, children's clothing, or energy, so the applicable rate depends on what is being sold as well as where.

The practical uses are invoicing and reconciliation: working out what to charge a client when you have quoted a net fee, extracting the recoverable tax from a supplier receipt for a return, and checking that a gross figure on a purchase order breaks down the way the supplier claims.

Calculation runs instantly in your browser; nothing you enter is transmitted.`,

  'discount-calculator': `The Discount Calculator works out the final price after a percentage or fixed-amount reduction, showing what you pay and how much you save.

The case worth understanding is stacked discounts, because they do not add up the way the signage implies. An extra 20 percent off an item already reduced by 30 percent is not 50 percent off — the second discount applies to the already-reduced price, giving 0.7 multiplied by 0.8, which is 0.56, so 44 percent off rather than 50. This gap widens as the discounts get larger, and it is the arithmetic behind a great deal of retail signage.

Working backwards is the other common need: given a sale price and the original, what discount is that actually? Retailers frequently express the same reduction in whichever direction sounds larger, and converting between the two is the fastest way to compare offers described differently.

Worth a note of scepticism: in many markets the "original price" a discount is calculated from is a reference price the item was rarely sold at. A 60 percent reduction from an inflated anchor can be a worse deal than 20 percent off a realistic price, which is why comparing the final price against other sellers beats comparing discount percentages.

All calculation happens in your browser instantly, with no data sent anywhere.`,

  'profit-margin-calculator': `The Profit Margin Calculator computes gross and net margin from revenue and costs, and converts between margin and markup — two numbers that are constantly confused and are not the same thing.

That distinction costs businesses real money. Markup is profit as a percentage of cost; margin is profit as a percentage of the selling price. An item costing 100 and sold at 150 carries a 50 percent markup but a 33 percent margin. A business that applies a 30 percent markup believing it is earning a 30 percent margin is systematically under-pricing every product it sells, and the shortfall only becomes visible when the annual accounts do not match expectations.

Gross versus net is the other split that matters. Gross margin covers only the direct cost of what you sold and tells you whether the product itself is viable. Net margin subtracts everything else — rent, salaries, software, marketing, tax — and tells you whether the business is. A healthy gross margin with a negative net margin is an extremely common pattern and points at overheads rather than pricing.

Typical margins vary enormously by sector, so benchmarks are only useful within an industry: grocery retail runs on very thin net margins at high volume, while software can run high because the marginal cost of another customer is near zero. Comparing across sectors tells you nothing useful.

Calculation runs entirely in your browser.`,

  'salary-calculator': `The Salary to Hourly Calculator converts an annual salary into hourly, daily, weekly, and monthly equivalents, and works in the other direction so you can turn a contract hourly rate into an annual figure.

The conversion is where a lot of contractors underprice themselves. Dividing an annual salary by 2,080 hours — 40 hours across 52 weeks — gives a nominal hourly rate, but that number is not comparable to a freelance rate, because a salary carries paid holiday, sick leave, employer pension contributions, health cover, equipment, and the administrative work someone else does. A contractor covers all of that, plus unpaid time spent finding work, invoicing, and chasing payment. As a rough working figure, a freelance rate needs to be substantially above the nominal salaried equivalent to produce the same real income, and treating them as equal is the most common costing error in independent work.

The other direction is useful for comparing offers structured differently — an annual salary against a day rate against an hourly contract — and for working out what a job is actually worth once you normalise the hours. A well-paid role at 55 hours a week can have a lower effective hourly rate than a modest one at 37.

Everything is computed in your browser; no salary information is transmitted or stored.`,

  'roi-calculator': `The ROI Calculator expresses the return on an investment as a percentage of what was put in, dividing net gain by cost, and also shows annualised return so investments held for different lengths of time can be compared.

Annualising is the part that makes ROI meaningful rather than misleading. A 50 percent return sounds excellent until you learn it took eight years, at which point it is roughly 5 percent a year — worse than many far safer options. Raw ROI ignores time entirely, so comparing two investments on raw ROI alone systematically favours whichever was held longer. Any comparison between opportunities needs the annualised figure.

Two costs routinely get left out and both flatter the result. Transaction and holding costs — fees, commissions, platform charges, maintenance, tax — come out of the return and often account for a meaningful share of it. And opportunity cost: capital committed to one thing could have been earning elsewhere, so the honest comparison for a marketing spend or a project is against the next best use of the money, not against zero.

For marketing specifically, attribution is the harder problem than the arithmetic. Calculating ROI on a campaign requires knowing which revenue the campaign actually caused rather than which revenue happened afterwards, and those are different questions that most reporting quietly conflates.

Calculation happens in your browser; no figures are transmitted.`,

  'receipt-generator': `The Receipt Generator produces a printable receipt for a cash or card sale, with your business details, itemised lines, quantities, tax, and a total, exported as a document you can print or send.

A receipt and an invoice do different jobs and the distinction matters for bookkeeping. An invoice is a request for payment issued before money changes hands; a receipt is proof that payment was made. Issuing a receipt where an invoice was needed, or vice versa, creates reconciliation problems later, and in some jurisdictions affects when the transaction is recognised for tax.

What a receipt needs to contain to be useful as a record is fairly consistent: who sold, who bought, what was sold, the date, the amount, the tax component shown separately, and a unique reference number. The tax breakdown is the part most often omitted from handwritten receipts and the part a buyer needs if they intend to reclaim it. Sequential numbering matters too — gaps in a receipt sequence are exactly what an audit looks for.

The realistic users are small and cash-based operations: market stalls, tutors, tradespeople, small workshops, and anyone taking payment in person who still needs to give the customer something and keep a matching record.

The receipt is generated entirely in your browser and downloads directly, so customer names and transaction amounts are never uploaded.`,

  'pay-stub-generator': `The Pay Stub Generator creates a payslip showing gross pay, itemised deductions, and net pay for a pay period, formatted as a document you can print or send to an employee.

A payslip's function is transparency: it shows an employee exactly how the number that arrived in their account was arrived at. The standard components are gross earnings — broken into regular hours, overtime, and any bonus — then deductions listed individually, then net pay, with year-to-date totals alongside so the employee can see the cumulative picture. Deductions vary by country but generally split into statutory items (income tax, social insurance or national insurance, pension) and voluntary ones (additional pension contributions, insurance, salary sacrifice arrangements).

Two things to be clear about. First, the tool formats a payslip from figures you supply — it does not calculate statutory tax or social insurance for your jurisdiction, and those calculations are specific, frequently updated, and carry legal consequences if wrong. The figures need to come from your payroll process or your accountant. Second, in most jurisdictions providing an itemised payslip is a legal obligation with a required set of fields and a required timeframe, so it is worth checking local requirements rather than assuming a generic template satisfies them.

Creating a payslip for someone who was not actually paid, or misstating figures on one, is document fraud — these are records employees rely on for mortgages, visas, and benefits claims.

Everything is generated in your browser; employee names and pay figures are never uploaded.`,

  'hours-calculator': `The Hours and Pay Calculator adds up hours worked across a set of start and end times, subtracts breaks, and multiplies the total by an hourly rate to give gross pay, handling overnight shifts that cross midnight.

Time arithmetic is genuinely error-prone by hand for one specific reason: hours are base 60 and decimal pay is base 10. Seven hours and 45 minutes is 7.75 hours, not 7.45, and treating the minutes as a decimal fraction is the single most common timesheet error. It always under- or over-pays, and on a monthly sheet the accumulated drift is significant.

Overnight shifts are the other reliable source of mistakes. A shift from 22:00 to 06:00 is eight hours, but subtracting the clock values gives a negative number, so any calculation that does not account for the date change produces nonsense. The calculator handles the rollover rather than requiring you to split the shift manually.

Break handling is worth being deliberate about, because paid and unpaid breaks are treated differently by law and by contract. An unpaid 30-minute lunch comes out of the payable total; a paid rest break does not. Getting this wrong consistently across a team is the kind of thing that surfaces in a wage dispute.

Overtime is the remaining variable — many contracts and jurisdictions require a premium rate beyond a threshold of hours per day or per week, which is applied on top of the base calculation.

All calculation runs in your browser; no timesheet or pay data is transmitted.`,

  // ── AI TOOLS ──────────────────────────────────────────────
  'ai-blog-generator': `The AI Blog Post Generator produces a structured first draft from a topic and a few parameters — an outline, headings, and body copy you can edit into a finished article.

The useful framing is that this solves the blank page, not the whole job. A generated draft gives you structure and momentum, which is where most writing stalls, but it cannot contain what makes an article worth reading: your own data, a customer example, a specific opinion, the thing you learned the hard way. Publishing a generated draft unedited produces exactly the kind of competent, generic content that already exists in quantity and gives a reader no reason to stay.

That is also the practical SEO position. Google's guidance is that it rewards helpful content regardless of how it was produced, and penalises content produced at scale primarily to manipulate rankings. The distinction it makes is about value, not authorship — so an AI-assisted draft that a knowledgeable person has substantially improved is fine, while a hundred generated posts published untouched is the pattern the March 2024 scaled-content-abuse policy was written to target.

The other thing to verify before publishing: generated text states facts, statistics, and citations with complete confidence whether or not they are correct. Any number, date, name, or claim in a draft needs checking against a real source, because a confidently wrong statistic in a published article damages credibility more than a missing one would.

Your prompt is sent to an AI model server-side to generate the draft and is not retained.`,

  'ai-email-writer': `The AI Email Writer drafts a professional email from a description of what you need to say, who it is going to, and the tone you want.

Email is where most people's writing time actually goes, and the friction is rarely not knowing what to say — it is the phrasing of awkward messages. Chasing an overdue invoice without damaging the relationship, declining work politely, following up for the third time, delivering bad news to a client, asking for something from someone senior: these are the messages that get rewritten five times and then sat on for two days. A generated draft gets past that hesitation, and editing a draft is much faster than composing from nothing.

What to change before sending, reliably: the opening and the specifics. Generated emails default to a slightly over-formal register with padding phrases — "I hope this email finds you well", "I wanted to reach out regarding" — that experienced readers skim past. Cutting the first sentence entirely usually improves the email. And the details that make a message land, like referencing the actual conversation or the actual deadline, have to come from you.

Length is the other edit. Short emails get replies; long ones get postponed. If the ask is not clear within the first two lines, it needs restructuring rather than polishing.

Your input is sent to an AI model server-side to generate the draft and is not stored afterwards. Do not paste confidential client information or credentials into the prompt.`,

  'ai-paraphraser': `The AI Paraphrasing Tool rewrites text while preserving its meaning, with control over the tone — more formal, more casual, simpler, shorter.

The legitimate uses are real and worth separating from the illegitimate one. Rewriting your own writing to fit a different audience, simplifying a dense technical explanation for a general reader, tightening a paragraph that runs long, adapting one piece of copy for several channels, or getting unstuck on a sentence you have rewritten four times — these are ordinary editing tasks that a rewriter genuinely speeds up.

The use it will not solve is passing off someone else's work as your own. Paraphrasing a source does not make it yours; academic plagiarism policies explicitly cover reworded text taken without attribution, and the fact that the words changed is not a defence. If the ideas came from a source, the source needs citing regardless of how much the phrasing moved.

A quality note worth knowing: rewriting the same passage repeatedly degrades it. Each pass drifts further from the original meaning and tends toward blander, more generic phrasing, so a paragraph run through four times often says less than it did at the start. One pass, then human editing, produces better results than iterating.

Always read the output against the original before using it. Rewriting can subtly change meaning — reversing a qualifier, dropping a caveat, or strengthening a claim the source hedged.

Your text is sent to an AI model for processing and is not retained.`,

  'ai-summarizer': `The AI Text Summarizer condenses a long passage into its main points, with control over how short the summary should be.

Summarising well means deciding what matters, which is why summary length is a real tradeoff rather than a preference. A three-sentence summary of a long report necessarily discards nuance, conditions, and counter-arguments; a longer summary keeps more of the reasoning but saves less time. Choosing the length deliberately based on what you need the summary for — a decision, a briefing, a filing note — produces better results than always picking the shortest option.

The failure mode to watch for is the one summarisation shares with all generated text: it can drop a qualifier and turn a hedged finding into a confident claim. A source that says a treatment "may reduce symptoms in some patients under specific conditions" can summarise into "reduces symptoms", which is a meaningfully different statement. For anything where the caveats carry weight — medical, legal, financial, or scientific material — the summary is a navigation aid for finding the relevant section, not a replacement for reading it.

Where it works best is triage: deciding whether a long document is worth reading in full, extracting the shape of a research paper before committing to it, catching up on a thread you were not part of, or turning meeting notes into a list of what was decided.

Your text is sent to an AI model server-side and is not retained. Do not paste confidential documents.`,

  'ai-grammar-checker': `The AI Grammar Checker reviews text for grammar, spelling, punctuation, and clarity, and suggests corrections with the reasoning behind them.

What distinguishes a model-based checker from a traditional rule-based one is context. Rule-based checkers work on patterns and miss the errors that are only errors in context — the correctly spelled wrong word. "Their" for "there", "affect" for "effect", "complement" for "compliment", and "its" for "it's" all pass a spell check cleanly because every one of them is a real word. These are also the errors that most damage how a piece of writing reads, because they signal carelessness rather than a typo.

Beyond correctness, the clarity suggestions tend to be where the real improvement is: sentences that run too long to follow, passive constructions that hide who did what, and a piece of jargon used where a plain word would do. These are not grammar errors at all — the sentence is valid — but they are usually what makes writing hard to read.

The judgement to retain is your own voice. Suggestions tend toward a neutral, slightly formal register, and accepting all of them flattens the personality out of writing that had some. A deliberate sentence fragment, an informal aside, or a long sentence that builds to something are stylistic choices, not mistakes. Take the corrections; weigh the rewrites.

Your text is sent to an AI model for analysis and is not retained.`,

  'ai-ad-copy': `The AI Ad Copy Generator writes advertising copy for Facebook, Instagram, and Google campaigns from a description of the product, the audience, and the angle you want.

Ad copy is heavily constrained by format, which is half the difficulty. Google responsive search ads cap headlines at 30 characters and descriptions at 90, and the headline has to carry the offer within that. Facebook primary text truncates after roughly 125 characters before a "See more" link that most people never tap. These limits mean the strongest version of an idea usually will not fit, and the work is compressing it without losing the thing that made it work.

The angle matters more than the wording. Copy built on a specific, concrete benefit consistently outperforms copy built on adjectives — a number, a timeframe, a named outcome. Copy that names the problem the reader actually has outperforms copy that describes the product's features. Generating several variations on genuinely different angles is more useful than generating twenty rewordings of one angle, because the angle is what you should be testing.

Which is the real point: ad copy is decided by data, not judgement. Run several variants, let them accumulate enough impressions to be meaningful, and keep what performs. A generated draft is a fast way to get variants into a test, not a prediction of what will win.

Also check claims before publishing — ad platforms reject unsubstantiated superlatives and specific performance claims, and generated copy produces both readily.

Your input is processed server-side by an AI model and is not retained.`,

  'ai-business-name': `The AI Business Name Generator produces name ideas from a description of what your business does and the feel you are aiming for.

A generator is useful for volume and for breaking out of the loop you get into after an hour of thinking about it yourself, where everything starts sounding like a variation on the same three words. What it cannot do is the part that actually determines whether a name is usable, and that part is entirely mechanical checking.

Before getting attached to any name, check four things in order. Is the domain available, or available at a price you will pay? Are the handles free on the platforms you will use? Is the name already registered as a trademark in your category and jurisdiction — this is the one that can force a rebrand years later, at real cost, and a quick search of your national trademark register is free. And does it already belong to a well-known business in an adjacent field, which causes confusion even when it is legally clear?

Two practical qualities separate names that work from names that look good written down. Say it out loud — a name that has to be spelled every time someone hears it will be spelled every time, forever. And check what it means in the other languages your customers speak, which is a well-worn source of expensive embarrassment.

Your input is sent to an AI model to generate suggestions and is not retained.`,

  'ai-caption-generator': `The AI Caption Generator writes social captions for Instagram, LinkedIn, and similar platforms from a description of the post and the tone you want.

Captions do different jobs on different platforms, which is why one caption reposted everywhere underperforms. On Instagram the image stops the scroll and the caption's first line decides whether anyone expands it, so the hook has to land before the "more" cutoff. On LinkedIn there is no image doing that work — the first two lines are the entire hook, and the platform's own algorithm weights dwell time heavily, which is why the long-form storytelling format performs there and would feel out of place on Instagram.

The most reliable improvement to almost any caption is ending with something that invites a response. Comments and saves are weighted far more heavily than likes by every major platform's ranking, and a caption that ends with a genuine question consistently generates more of both than one that ends with a full stop. The question has to be answerable in a few words — asking something that requires effort gets no replies.

Hashtags belong at the end and in moderation. The era of thirty hashtags is over on most platforms, and a handful of specific, relevant tags now outperforms a wall of broad ones.

Edit for voice before posting. Generated captions are competent and slightly generic by default, and social audiences are unusually good at detecting copy that nobody actually wrote.

Your input is processed by an AI model server-side and is not retained.`,

  'ai-cover-letter': `The AI Cover Letter Writer produces a tailored cover letter from your background and the job posting, structured to the format recruiters expect.

Tailoring is the entire value, because the alternative — one letter sent everywhere with the company name swapped — is transparently obvious to anyone who reads applications for a living. Feeding the tool the actual job posting rather than a job title lets the letter mirror the language the employer used, which matters both to the human reader and to applicant tracking systems that screen on keyword overlap before a person sees anything.

What to add after generating, without exception: something specific about this employer that could not appear in any other letter. A product you have used, a recent announcement, a problem the team has described publicly, a person whose work you know. Ten minutes of reading produces a sentence that immediately distinguishes the letter from every templated application in the pile, and no amount of polishing the rest substitutes for it.

What to cut: the generic enthusiasm. "I am excited to apply for this opportunity at your esteemed organisation" is the opening of a large fraction of the letters a recruiter reads that day, and it communicates nothing. Opening with the concrete reason you are a fit for this specific role is stronger and shorter.

Keep it to one page. The letter's job is to make someone read the CV, not to duplicate it.

Your details are sent to an AI model to generate the letter and are not retained.`,

  'ai-plagiarism-checker': `This tool analyses text for statistical patterns associated with AI-generated writing and for phrasing that appears to be reproduced from elsewhere, returning an assessment rather than a verdict.

It is important to be honest about reliability, because a great deal of harm has been done by treating these tools as authoritative. AI-detection classifiers work by measuring statistical properties of text — how predictable each word is given the ones before it — and human writing that happens to be clear, formulaic, or plainly structured scores as machine-generated with uncomfortable frequency. The documented bias against non-native English writers is particularly well-established, since writing in a second language tends toward more conventional phrasing, exactly the signal these classifiers read as artificial. OpenAI withdrew its own detector in 2023 citing low accuracy, and no detector since has solved the underlying problem.

The practical consequence: a high score is a reason to look more closely, never evidence on its own. Accusing a student or a writer of misconduct on the basis of a detector score is unsafe, and institutions that have done so have had to reverse those findings. Process evidence — draft history, version control, the ability to discuss the work — is far more reliable than any classifier output.

Where the tool is genuinely useful is self-checking: reviewing your own draft before submission, spotting passages that read as unattributed from a source, or seeing which sections of your own writing read as mechanical and could use a human pass.

Your text is sent to a model for analysis and is not retained.`,
};

export const HOW_TO_STEPS: Record<string, [string, string, string]> = {
  'loan-calculator': [
    'Enter the loan amount, annual interest rate, and term in years.',
    'Read the monthly instalment, then open the amortisation table to see the interest-versus-principal split.',
    'Compare a shorter term or a slightly lower rate — both cut total interest more than the monthly figure suggests.',
  ],
  'compound-interest': [
    'Enter your starting amount, regular contribution, expected annual rate, and time horizon.',
    'Set the compounding frequency — the difference between monthly and daily is small; years and rate dominate.',
    'Subtract your inflation assumption from the rate to see the result in today’s purchasing power.',
  ],
  'vat-calculator': [
    'Enter the price and the VAT rate that applies to your country and product category.',
    'Choose whether to add VAT to a net price or extract it from a gross one.',
    'Read the net, tax, and gross figures separately — extracting VAT divides by 1 plus the rate, it does not subtract the percentage.',
  ],
  'discount-calculator': [
    'Enter the original price and the discount, as a percentage or a fixed amount.',
    'For a stacked offer, apply each discount in turn — 30 percent then 20 percent is 44 percent off, not 50.',
    'Compare the final price against other sellers rather than comparing discount percentages.',
  ],
  'profit-margin-calculator': [
    'Enter your revenue and your costs.',
    'Read gross margin (direct costs only) and net margin (everything) separately — they answer different questions.',
    'Check the margin-versus-markup conversion before setting a price; a 50 percent markup is only a 33 percent margin.',
  ],
  'salary-calculator': [
    'Enter an annual salary to convert down, or an hourly rate to convert up.',
    'Set the hours per week and weeks per year that actually apply to you.',
    'For freelance comparisons, price well above the nominal equivalent to cover holiday, pension, admin, and unbilled time.',
  ],
  'roi-calculator': [
    'Enter the amount invested and the amount returned.',
    'Add the holding period so the annualised figure is calculated — raw ROI is not comparable across different timeframes.',
    'Include fees and taxes in the cost, and compare against the next best use of the money rather than against zero.',
  ],
  'receipt-generator': [
    'Enter your business details, the customer, and the itemised lines with quantities and prices.',
    'Show the tax component separately and give the receipt a unique sequential number.',
    'Download or print it, and keep the matching copy for your records.',
  ],
  'pay-stub-generator': [
    'Enter the employee details, pay period, gross earnings, and each deduction from your payroll figures.',
    'Add year-to-date totals so the employee can see the cumulative position.',
    'Download the payslip, and check it meets the required fields for your jurisdiction.',
  ],
  'hours-calculator': [
    'Enter each shift’s start and end time, including any that cross midnight.',
    'Subtract unpaid breaks but not paid rest breaks — they are treated differently in law and contract.',
    'Enter the hourly rate for gross pay; note 7 hours 45 minutes is 7.75 decimal hours, not 7.45.',
  ],
  'ai-blog-generator': [
    'Enter your topic, target audience, and rough length.',
    'Generate the draft, then substantially rewrite it — add your own data, examples, and opinion.',
    'Verify every statistic, date, and citation against a real source before publishing.',
  ],
  'ai-email-writer': [
    'Describe what you need to say, who it is going to, and the tone you want.',
    'Generate the draft, then delete the opening pleasantry and add the specific details only you know.',
    'Cut it until the ask is clear in the first two lines, then send.',
  ],
  'ai-paraphraser': [
    'Paste the text you want rewritten and choose a tone.',
    'Run one pass only — repeated rewriting drifts from the meaning and flattens the writing.',
    'Read the output against the original to check no qualifier was dropped, and cite the source if the ideas are not yours.',
  ],
  'ai-summarizer': [
    'Paste the long text and choose a summary length that matches what you need it for.',
    'Read the summary against the source for any hedged claim that became a confident one.',
    'Use it to find the section worth reading in full, not as a replacement for reading it.',
  ],
  'ai-grammar-checker': [
    'Paste your text and run the check.',
    'Accept the corrections — especially the correctly spelled wrong words a spell check misses.',
    'Weigh the clarity rewrites rather than accepting all of them; some of what it flags is your voice.',
  ],
  'ai-ad-copy': [
    'Describe the product, the audience, and the angle you want to lead with.',
    'Generate variants on genuinely different angles, not rewordings of one, and fit them to the platform limits.',
    'Check any claim would survive the ad platform’s review, then test the variants against real data.',
  ],
  'ai-business-name': [
    'Describe what the business does and the feel you want.',
    'Shortlist, then check domain, social handles, and your national trademark register for each.',
    'Say the finalists out loud and check the meaning in your customers’ other languages.',
  ],
  'ai-caption-generator': [
    'Describe the post, the platform, and the tone.',
    'Make sure the hook lands in the first line before the truncation cutoff.',
    'End with a question that can be answered in a few words, add a handful of specific hashtags, and edit for your voice.',
  ],
  'ai-cover-letter': [
    'Paste the actual job posting along with your background, not just the job title.',
    'Generate the letter, then replace the generic opening with something specific to this employer.',
    'Trim to one page — the letter exists to make someone read your CV, not repeat it.',
  ],
  'ai-plagiarism-checker': [
    'Paste the text you want to check.',
    'Read the score as a prompt to look closer, never as evidence — false positives are common, especially for non-native English writers.',
    'Use it on your own drafts; do not make an accusation on the basis of a detector score.',
  ],
};
