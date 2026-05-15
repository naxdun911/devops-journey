Complete Deep-Dive: Temperature Corrected Ready-Reckoner Chart for Metrolac

1. Background and Context
The Sri Lankan Rubber Industry Payment System
In Sri Lanka, rubber harvesters (tappers) collect latex by making thin cuts (excisions) in the bark of Hevea trees. The latex drips into collection cups. At the end of each tapping session, the latex is collected and its value is calculated — not just by volume, but by how much actual dry rubber is inside it.
This is called Dry Rubber Content (DRC), expressed as a percentage. For example, a DRC of 35% means that in 100g of latex, 35g is actual rubber and the rest is water and other substances.
DRC typically ranges from 20% to 45% and varies depending on:

Clone type (genetic variety of the rubber tree)
Season and climate
Whether chemical stimulants were applied to increase yield
Tapping system used (how deep, how often cuts are made)
Soil conditions

Because harvesters are paid based on the weight of dry rubber — not the volume of latex — accurately measuring DRC is directly tied to their income. This is not just a scientific measurement; it's a financial transaction happening in the field every single day.

2. The Measurement Tool: Metrolac
What it is
The Metrolac is a type of hydrometer — a device that measures the density of a liquid. A standard hydrometer floats higher in denser liquids. The Metrolac works on the same upthrust (buoyancy) principle — the denser the surrounding liquid, the more upward force pushes the device, causing it to float higher.
Why the scale is inverted
Here's the key physics: rubber particles are less dense than water. So when you mix latex into water:

More rubber content = lower overall mixture density (because rubber is pulling density down)
Lower density = less upthrust = Metrolac sinks deeper = higher numerical reading on the scale

This is the opposite of a normal hydrometer, which reads higher when the liquid is denser. The Metrolac's scale is deliberately inverted to account for this — a higher Metrolac reading means higher rubber content, even though the liquid is actually less dense.
The measurement procedure
You don't measure raw latex directly. The standard procedure is:

Take 1 part latex
Mix with 2 parts clean water (this is called a 1:2 dilution)
Pour the mixture into a cylinder until it overflows (to ensure consistent volume and remove air at the top)
Remove any froth from the surface
Gently lower the Metrolac into the cylinder
Once it settles, read the value where the meniscus (the curved liquid surface) meets the stem
Take the temperature of the mixture
Look up that reading + temperature in the ready-reckoner chart to get DRC%

The Metrolac reading scale goes from 50 to 150 in the paper's chart (Table 1).

3. The Core Problem: Temperature
The physics of why temperature matters
The Metrolac is calibrated at 29°C. This means the lookup chart was built assuming the latex-water mixture is exactly 29°C at the time of reading. In reality, this almost never happens consistently.
Here's what temperature does physically:
When temperature increases above 29°C:

The liquid undergoes thermal expansion — the same molecules take up more space
Volume increases → density decreases (same mass, more volume)
Lower density → less upthrust → Metrolac sinks deeper
Deeper sinking → higher numerical reading
Higher reading → chart gives you a higher DRC value
Result: DRC is OVERESTIMATED — you think there's more rubber than there actually is

When temperature decreases below 29°C:

The liquid undergoes thermal contraction — molecules pack closer together
Volume decreases → density increases
Higher density → more upthrust → Metrolac floats higher
Higher floating → lower numerical reading
Lower reading → chart gives you a lower DRC value
Result: DRC is UNDERESTIMATED — you think there's less rubber than there actually is

How big is this error?
The paper quantifies this precisely: every 1°C deviation from 29°C causes approximately 0.91% error in DRC. That means:

At 25°C (4°C below calibration): error of ~3.64% — farmer gets underpaid
At 33°C (4°C above calibration): error of ~3.64% — factory overpays or farmer is overpaid

At industrial scale, across hundreds of kilograms of rubber and hundreds of workers, this error has serious financial consequences.
Real-world temperature range
In traditional rubber growing areas (Kalutara, Kegalle, Ratnapura districts in the wet zone), temperatures are relatively stable. But in non-traditional areas, the problem is severe:

Nuwaraeliya and Badulla (up-country): significantly cooler — temperatures as low as 17°C in the latex-water mixture
Moneragala and Ampara (low-country intermediate zone): hotter and drier — temperatures potentially reaching 32°C+

The paper specifically tested samples from Dartonfield estate (Kalutara), Sanquhar estate (Nuwaraeliya), and Keppetigala estate (Kurunegala) — deliberately chosen to represent this geographic diversity.
Human manipulation of the system
Because temperature inflates readings, some workers deliberately exploited this:

Adding hot water instead of room-temperature water during the 1:2 dilution
Keeping latex under direct sunlight before measurement
Both methods raise the mixture temperature → Metrolac sinks deeper → inflated DRC reading → higher payment

Conversely, latex collectors who transport latex to factories often unload at night, when cooler temperatures cause the opposite — lower readings, meaning the collector gets paid less for the same rubber. This created real financial disputes in the industry.

4. How the New Chart Was Built
Step 1: Sample collection
Approximately 400 fresh latex samples were collected. Fresh is important — latex quality changes over time due to premature coagulation and bacterial action.
Step 2: Temperature manipulation
For each sample, the latex-water mixture was prepared (1:2 dilution) and then its temperature was adjusted artificially using:

An ice bath to bring temperature down
A hot water bath to bring temperature up

This gave them control to take Metrolac readings at every integer degree from 15°C to 35°C — a range of 21 data points per sample.
Step 3: Using 29°C as the baseline
Since the existing chart is already calibrated at 29°C, they used the 29°C reading as the reference point for each sample. The logic was: "whatever DRC the 29°C reading gives you from the old chart is our baseline truth for that sample."
They then looked at how the reading changed at every other temperature and quantified the deviation.
Step 4: Regression equations
For each temperature (15°C, 16°C, 17°C... all the way to 35°C), they performed a linear regression:

MDRC at 29°C = m × MDRC at temperature X + c

Where m is the slope and c is the intercept. These equations let them convert any reading at any temperature into what it would be at 29°C — and therefore into an accurate DRC value.
These equations were then used to pre-compute all the values in the new lookup table (Table 1), so field workers don't need to do any math — they just look up their reading and temperature in the table.
The resulting table (Table 1)
Table 1 in the paper has:

Rows: Metrolac readings from 50 to 150 (in steps of 10)
Columns: Temperature from 15°C to 35°C (in steps of 1°C)
Values: The corrected DRC as a decimal (e.g., 0.34 = 34%)

For example, if your Metrolac reads 100 and temperature is 20°C, the table gives 0.39 (39% DRC). But if temperature is 35°C at the same reading of 100, you get 0.24 (24% DRC). The same physical reading, but very different actual rubber content depending on temperature.

5. Validation — How They Tested the New Chart
Two testing conditions
They didn't just test on the same samples used to build the chart. They validated on a completely separate set of ~400 samples under two distinct conditions:
Condition A — Natural conditions:
Samples collected from the three estates (Kalutara, Nuwaraeliya, Kurunegala) and measured at whatever temperature the latex-water mixture naturally was at the time of reading. No artificial heating or cooling. This simulates real field usage.
Condition B — Artificially simulated temperatures:
About 140 samples where temperature was deliberately manipulated using hot or cold water during dilution. This simulates workers trying to cheat the system, or extreme weather conditions.
The gold standard: Laboratory DRC (LDRC)
For every sample in both conditions, they also measured the DRC using the ISO 126 standard laboratory method — the most accurate technique, involving analytical balances to precisely weigh the rubber after drying. This gives the true DRC of each sample, which they call LDRC (Laboratory DRC).
They compared both the old chart estimate (Metro_E) and new chart estimate (Metro_N) against this laboratory truth.

6. The Graphs — Full Detailed Explanation
Figure 1: How well does the estimated DRC track the actual DRC?
What this graph is measuring:
Figure 1 answers the question: "If I use the Metrolac chart to estimate DRC, how closely does my estimate match what the lab actually measures?"
Both plots are scatter plots where:

X-axis: Laboratory DRC% (the true value — what's actually in the latex)
Y-axis: Metrolac DRC% (what the chart tells you — the estimated value)
Blue diamonds (Metro_E): Points from the old/existing chart
Pink/red squares (Metro_N): Points from the new temperature-corrected chart
Two trend lines: One for each chart, showing the best linear fit through the data

What a perfect chart would look like:
If a chart were perfectly accurate, every point would fall exactly on the line y = x (a 45° diagonal). The estimated DRC would equal the actual DRC every time. The R² would be 1.0 (100%).

Plot a — Natural conditions:
Trend line equations:

Metro_E (old): y = 1.014x − 5.156
Metro_N (new): y = 0.936x − 1.117

What these equations tell you:
For the old chart (y = 1.014x − 5.156):

The slope is 1.014 — very close to 1, which seems good
But the intercept is −5.156 — this means the line is shifted downward by about 5 percentage points
In practice: when the lab says DRC is 30%, the old chart predicts approximately (1.014 × 30) − 5.156 = 25.3% — almost 5% lower than truth
When lab says 40%, old chart predicts (1.014 × 40) − 5.156 = 35.4% — again about 5% too low
The R² for old chart under natural conditions is 0.49 — only 49% of the variation in actual DRC is captured by the old chart's estimates. The other 51% is essentially noise/error caused by temperature

For the new chart (y = 0.936x − 1.117):

Slope of 0.936 is slightly below 1 (ideal), meaning it slightly underestimates at higher DRC values
Intercept of −1.117 is much closer to 0 than the old chart
When lab says 30%: (0.936 × 30) − 1.117 = 26.96% — about 3% off
When lab says 40%: (0.936 × 40) − 1.117 = 36.32% — about 3.7% off
Still not perfect, but substantially better than old chart
R² = 0.84 — 84% of variation in actual DRC is now captured correctly

Visually what you see in plot a:

Both sets of points form an upward cloud from bottom-left to top-right
The Metro_N (pink squares) cluster more tightly around their trend line — less scatter
The Metro_E (blue diamonds) are more widely scattered, especially at higher DRC values where they tend to cluster below the trend line — confirming the old chart consistently underestimates high DRC values under natural field conditions
At low DRC values (around 20-25%), both charts perform similarly
The performance gap widens as DRC increases toward 45-50%


Plot b — Artificially simulated temperatures:
Trend line equations:

Metro_E (old): y = 0.717x + 5.015
Metro_N (new): y = 0.980x − 2.208

This is where things get dramatically different. The slope of the old chart drops to 0.717 — far from the ideal 1.0. The intercept jumps to +5.015.
What this means for the old chart:

When lab says 30%: (0.717 × 30) + 5.015 = 26.5%
When lab says 40%: (0.717 × 40) + 5.015 = 33.7% — over 6% too low
When lab says 45%: (0.717 × 45) + 5.015 = 37.3% — almost 8% too low at high DRC

The flat slope (0.717) means the old chart fails to distinguish between medium and high DRC samples under temperature manipulation. Everything gets compressed toward the middle — the chart loses its ability to detect differences at the high end.
The positive intercept (+5.015) means at very low DRC values, the old chart actually overestimates. So the old chart oscillates between overestimating at low DRC and severely underestimating at high DRC when temperatures are manipulated.
For the new chart (y = 0.980x − 2.208):

Slope of 0.980 is extremely close to 1 — nearly perfect tracking
Small negative intercept of −2.208
When lab says 30%: (0.980 × 30) − 2.208 = 27.2%
When lab says 40%: (0.980 × 40) − 2.208 = 37.0% — only about 3% off
The new chart maintains good performance even under deliberately manipulated temperatures

Visually what you see in plot b:

The Metro_E (blue diamonds) scatter is much wider, and their trend line has a noticeably flatter angle compared to the ideal 45° line
The Metro_N (pink squares) trend line is almost parallel to the ideal — nearly the right slope
Both charts have similar behavior at very low DRC (around 20%), but the gap explodes at high DRC
This plot makes the most compelling visual case for the new chart — the old chart nearly collapses under temperature manipulation while the new chart holds its accuracy


Figure 2: How large is the error, and does it relate to actual DRC?
What this graph is measuring:
Figure 2 shifts focus from "how close is the estimate to truth" to "how big is the mistake, and is there a pattern based on how much rubber is actually present?"
Both plots are scatter plots where:

X-axis: Laboratory DRC% (true rubber content, ranging from about 20% to 50%)
Y-axis: % difference observed from laboratory DRC (i.e., Metrolac estimate minus Lab DRC — positive means overestimate, negative means underestimate)
Blue diamonds (Metro_E): Old chart error
Pink squares (Metro_N): New chart error
Horizontal line at y=0: Perfect accuracy — zero error

Ideal chart behavior:
All points would sit right on the y=0 line. Random scatter around zero (with no pattern) would indicate unbiased measurement. Systematic drift above or below zero would indicate consistent over or underestimation.

Plot a — Natural conditions:
Error ranges:

Old chart (Metro_E): −12.69% to +9.25%
New chart (Metro_N): −7.56% to +5.31%

What you observe in the scatter:
For the old chart (blue diamonds):

Points spread widely above and below zero
There's a slight downward trend from left to right — meaning as actual DRC increases, the old chart tends to increasingly underestimate. At low DRC (around 20-25%), some points are positive (overestimate). At high DRC (40-50%), most points are negative (underestimate)
The extreme negative outliers (around −12 to −13%) occur at medium-to-high DRC values — these represent the worst cases, likely samples measured at significantly lower temperatures than 29°C
The extreme positive outliers (+9%) likely represent samples measured at higher temperatures

For the new chart (pink squares):

Points are noticeably more compressed vertically — the cloud is thinner
The range is nearly halved compared to the old chart
The downward trend at high DRC is still visible but much less pronounced
Fewer extreme outliers — the worst cases are contained within about ±7.5%
The scatter appears more randomly distributed around zero, suggesting the temperature correction has removed the systematic directional bias

The key insight from this plot:
The old chart doesn't just have large errors — the errors are systematic and predictable based on temperature. If you're measuring in a cool environment, you're consistently underpaying the farmer. If you're measuring in a hot environment, you're consistently overpaying. The new chart breaks this systematic pattern.

Plot b — Artificially simulated temperatures:
Error ranges:

Old chart (Metro_E): −14.89% to +4.00%
New chart (Metro_N): −6.48% to +3.25%

Notice something important comparing the two plots: under artificially simulated temperatures, the negative errors get much worse for the old chart (−14.89% vs −12.69% in natural conditions) but the positive errors actually get smaller (+4.00% vs +9.25%).
Why? Because when temperatures are artificially manipulated, the researchers pushed temperatures to more extreme low values (cooler ice baths) than what naturally occurs. Extreme cold → severe underestimation → large negative errors. Meanwhile, deliberate temperature manipulation tends to be more controlled than random weather variation, so the extremes in the overestimation direction are smaller.
For the new chart under artificial conditions:

Negative errors: −6.48% (vs −7.56% in natural conditions — slightly better!)
Positive errors: +3.25% (vs +5.31% in natural conditions — also better)
This is surprising: the new chart actually performs slightly better under artificial temperature manipulation than under natural conditions
This makes sense because artificially controlled temperatures are more stable — there's less ambiguity about what the actual temperature is, so the correction is more precise

The key insight from plot b:
The new chart is robust to deliberate temperature manipulation. Even if someone tries to game the system by heating or cooling the latex-water mixture, the temperature correction compensates. This has important implications for payment fairness in the industry.

Figure 3: How does temperature itself relate to the error?
What this graph is measuring:
Figure 3 is the most direct visualization of the temperature problem. It answers: "Does the error in DRC estimation depend on the temperature of the mixture at the time of reading?"
Both plots are scatter plots where:

X-axis: Temperature of the weighing mixture in °C (ranging from about 10°C to 40°C)
Y-axis: % difference observed from laboratory DRC (same as Figure 2's y-axis)
Blue diamonds (Metro_E): Old chart error at each temperature
Pink squares (Metro_N): New chart error at each temperature
Horizontal line at y=0: Perfect accuracy

What a temperature-dependent error looks like:
If temperature causes errors, you'd expect to see a clear pattern — not random scatter. Specifically, for the old chart, you'd expect a positive slope (errors increase as temperature increases, because higher temperature → overestimation → positive error values).

Plot a — Natural conditions:
This plot delivers the most visually striking evidence in the entire paper.
For the old chart (Metro_E — blue diamonds):

At low temperatures (15-20°C): almost all points are below zero (negative errors) — the old chart consistently underestimates DRC in cold conditions
Around 29°C: points cluster near zero — this is expected, since 29°C is the calibration temperature
Above 29°C (30-35°C): points shift toward positive territory — overestimation
There is a clear upward trend from left to right — as temperature increases, error increases from negative to positive
The slope of this trend is approximately +0.91% per degree — meaning each 1°C above 29°C adds about +0.91% to the estimated DRC, and each 1°C below 29°C subtracts ~0.91%
This confirms temperature is not a random source of noise — it is a systematic, quantifiable source of bias
The spread at any given temperature is still somewhat large (due to other factors like clone variation, season), but the directional trend is unmistakable

For the new chart (Metro_N — pink squares):

Points scatter much more randomly around zero across the entire temperature range
There is no visible upward or downward trend — the line is essentially flat near zero
At low temperatures (15-20°C), where the old chart had strongly negative errors, the new chart's points are close to zero
At high temperatures (30-35°C), where the old chart was overestimating, the new chart's points remain near zero
The temperature correction has removed the directional relationship between temperature and error

Visually what you see:
The old chart data looks like a cloud that tilts upward from left to right — a clear diagonal pattern. The new chart data looks like a cloud that's flat — no tilt, just random scatter around zero. This single visual comparison is the strongest argument in the entire paper.

Plot b — Artificially simulated temperatures:
This plot is essentially the same story as plot a, but more exaggerated because the artificially controlled temperatures pushed to more extreme values.
For the old chart (Metro_E):

The upward trend is even clearer because temperatures were pushed further from 29°C in both directions
At artificially created low temperatures (around 15-17°C), the negative errors reach their worst — approaching −15%
At high temperatures (32-35°C), errors are positive and significant
The directional pattern is now so clear it's essentially a straight-line relationship

For the new chart (Metro_N):

Still flat. Still randomly scattered around zero.
Even under extreme temperature manipulation, the correction holds
This confirms the correction equations are working correctly and aren't just fitting well to natural variation — they genuinely correct the underlying physics

The key insight from Figure 3:
Figure 3 is the diagnostic proof and Figure 1 is the performance proof. Figure 3 shows exactly why the old chart fails (temperature causes a linear, predictable, systematic error) and Figure 3 also shows that the new chart has successfully eliminated that specific error source. What remains in the new chart's error is due to other factors — clone variation, seasonal effects, procedural errors — which cannot be fixed by temperature correction alone.

7. What the Paper Admits It Cannot Fix
Even with the new chart, some errors remain. The paper explicitly identifies these:
Adulterants:
If someone adds plant sap, soapy water, or other substances to the latex, this changes the viscosity — the thickness of the liquid. The Metrolac's movement through the liquid depends on both density (which the correction handles) and viscosity (which it doesn't). A more viscous mixture slows the Metrolac's descent and can give a false reading that the chart cannot correct for.
The dilution water temperature interaction:
Even though you measure the temperature of the final mixture, the paper notes that adding water at a different temperature from the latex creates a non-linear relationship between dilution ratio and density. This means even with perfect temperature correction, slight inconsistencies in how water is mixed can introduce errors.
Procedural errors:

Improper straining of latex before measurement
Getting the dilution ratio slightly wrong (not exactly 1:2)
Inadequate mixing before pouring
Misreading the meniscus (reading from the wrong side of the curved surface)
Not waiting for froth to fully settle

These are human/process errors that no chart — old or new — can account for.
Age, region, season:
Cited from prior research (Sarath Kumara and Prasad, 2006): tree age, regional climate, and seasonal changes in tree physiology do not significantly affect Metrolac accuracy. These are already factored into natural DRC variation, not instrument error.

8. The Bigger Picture for Smart-Metrolac
The paper establishes three things that directly define what your system needs to do:
1. Temperature must be measured at the moment of Metrolac reading — your DS18B20 temperature sensor does exactly this.
2. The correction is a mathematical function (linear regression equations) — your firmware doesn't need to store the entire lookup table. You can implement the equations directly to compute corrected DRC from any Metrolac reading at any temperature.
3. The error that remains (~16% unexplained) is not temperature-related — it comes from biological variation in rubber trees, procedural inconsistency, and measurement noise. Your system cannot eliminate this either, but by eliminating the temperature error, you're already delivering far more accuracy than the current manual process.
In effect, this paper proves that what your ESP32 terminal needs to do — read the Metrolac value, read the temperature, apply the correction, output the DRC — is scientifically validated by Sri Lanka's own Rubber Research Institute.