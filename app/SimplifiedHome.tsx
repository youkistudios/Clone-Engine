const coreSteps = [
  {
    number: "1",
    name: "Collect",
    technical: "Ingest sources",
    description:
      "Bring in videos, podcasts, books, newsletters and courses. Save the original material and identify who said what.",
    result: "Clean, traceable source material",
  },
  {
    number: "2",
    name: "Understand",
    technical: "Extract knowledge",
    description:
      "Pull out principles, examples, decision rules, exceptions and contradictions. Repeated ideas become more prominent—not automatically more true.",
    result: "Reviewed ideas with source links",
  },
  {
    number: "3",
    name: "Advise",
    technical: "Build the advisor",
    description:
      "Read a client conversation, find the real bottleneck, retrieve the best-fit ideas and turn them into a practical action plan.",
    result: "Specific advice with evidence",
  },
];

const weightSignals = [
  ["Repeated", "Does the idea appear across independent sources?"],
  ["Well supported", "Can every claim be traced to the right speaker and source?"],
  ["Broad or narrow", "Is it a general principle or useful only in one situation?"],
  ["Current", "Has later material reinforced, changed or replaced it?"],
];

const technicalLayers = [
  "Raw evidence",
  "Clean transcript or page text",
  "Candidate ideas",
  "Human-reviewed knowledge",
  "Advisor model",
  "Approved serving index",
  "Separate client session",
];

export default function SimplifiedHome() {
  return (
    <main className="simple" id="top">
      <div className="simple__page">
        <nav className="simple__nav" aria-label="Page sections">
          <a className="simple__wordmark" href="#top">Clone System</a>
          <div>
            <a href="#how">How it works</a>
            <a href="#quality">Quality</a>
            <a href="#detail">Technical detail</a>
          </div>
        </nav>

        <header className="simple__hero">
          <p className="simple__kicker">A simpler explanation</p>
          <h1>Turn years of content into useful business advice.</h1>
          <p className="simple__lede">
            Give the system a client conversation. It finds the real problem,
            applies the thought leader’s most relevant published ideas, and
            returns a practical plan with sources.
          </p>
          <a className="simple__text-link" href="#how">
            See the three-step system ↓
          </a>
        </header>

        <section className="simple__promise" aria-label="System promise">
          <div>
            <p>You provide</p>
            <strong>A client transcript</strong>
          </div>
          <span aria-hidden="true">→</span>
          <div>
            <p>You receive</p>
            <strong>A source-backed action plan</strong>
          </div>
        </section>

        <section id="how" aria-labelledby="how-title">
          <p className="simple__kicker">The whole system</p>
          <h2 id="how-title">Three jobs. One checker.</h2>
          <p className="simple__intro">
            The machinery is detailed, but the operating model is not.
          </p>

          <div className="simple__flow">
            {coreSteps.map((step) => (
              <article key={step.name}>
                <span className="simple__number">{step.number}</span>
                <p className="simple__technical-name">{step.technical}</p>
                <h3>{step.name}</h3>
                <p>{step.description}</p>
                <small>{step.result}</small>
              </article>
            ))}
          </div>

          <aside className="simple__checker">
            <div>
              <p className="simple__kicker">Independent quality checker</p>
              <h3>Audit every step</h3>
            </div>
            <p>
              A fourth skill checks the speaker, source, meaning, fit and final
              answer. If the evidence is weak, the system narrows the advice or
              says it does not know.
            </p>
          </aside>
          <p className="simple__legacy-line">Four skills. One evidence chain.</p>
        </section>

        <section className="simple__example" aria-labelledby="example-title">
          <p className="simple__kicker">What happens with a client</p>
          <h2 id="example-title">Diagnose first. Advise second.</h2>
          <div className="simple__example-grid">
            <div>
              <span>1</span>
              <strong>Read the situation</strong>
              <p>Goals, numbers, constraints, symptoms and missing facts.</p>
            </div>
            <div>
              <span>2</span>
              <strong>Find the bottleneck</strong>
              <p>Identify the highest-leverage problem before choosing advice.</p>
            </div>
            <div>
              <span>3</span>
              <strong>Match the evidence</strong>
              <p>Retrieve relevant principles, examples and exceptions.</p>
            </div>
            <div>
              <span>4</span>
              <strong>Build the plan</strong>
              <p>Actions, owner, metric, timebox, stop rule and sources.</p>
            </div>
          </div>
          <p className="simple__privacy">
            The client’s private information stays in that client session. It
            never becomes part of the thought leader’s knowledge model.
          </p>
        </section>

        <section id="quality" aria-labelledby="quality-title">
          <p className="simple__kicker">How the system decides what to trust</p>
          <h2 id="quality-title">Frequency is a signal—not truth.</h2>
          <p className="simple__intro">
            An idea mentioned ten times matters more than an idea mentioned
            once, but repetition alone never makes advice correct.
          </p>
          <div className="simple__weights">
            {weightSignals.map(([name, description]) => (
              <div key={name}>
                <strong>{name}</strong>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="simple__memory" aria-labelledby="memory-title">
          <div>
            <p className="simple__kicker">No wasted processing</p>
            <h2 id="memory-title">Process once. Remember forever.</h2>
          </div>
          <div>
            <p>
              Every video, episode, book and page gets a permanent identity.
              The system checks that identity before doing expensive work.
            </p>
            <ul>
              <li>Exact duplicates are blocked.</li>
              <li>Clips and reposts point back to the original.</li>
              <li>Reprocessing needs a clear reason.</li>
            </ul>
          </div>
        </section>

        <section className="simple__status" aria-labelledby="status-title">
          <p className="simple__kicker">Current pilot</p>
          <h2 id="status-title">Built carefully. Not pretending to be finished.</h2>
          <div className="simple__stats">
            <div><strong>10</strong><span>sources registered</span></div>
            <div><strong>91</strong><span>candidate claims</span></div>
            <div><strong>12</strong><span>calibrated principles</span></div>
            <div><strong>0</strong><span>approved for live advice</span></div>
          </div>
          <p className="simple__release">
            Release decision: <strong>BLOCKED</strong> until the evidence,
            rights and independent tests pass.
          </p>
        </section>

        <section id="detail" className="simple__detail" aria-labelledby="detail-title">
          <p className="simple__kicker">Optional depth</p>
          <h2 id="detail-title">For builders and auditors</h2>
          <p className="simple__intro">
            The simple model above is how people use the system. The controls
            below are how the system stays inspectable.
          </p>

          <details>
            <summary>See the seven evidence layers</summary>
            <ol>
              {technicalLayers.map((layer) => <li key={layer}>{layer}</li>)}
            </ol>
          </details>
          <details>
            <summary>See the twelve internal transitions</summary>
            <p>
              Define → Discover → Admit → Preserve → Normalize → Attribute →
              Extract → Adjudicate → Synthesize → Evaluate → Release → Operate
            </p>
          </details>
          <details>
            <summary>See the four specialist skills</summary>
            <dl>
              <div><dt>Ingest sources</dt><dd>Capture and normalize evidence.</dd></div>
              <div><dt>Extract knowledge</dt><dd>Recover structured ideas and reasoning.</dd></div>
              <div><dt>Build the advisor</dt><dd>Retrieve evidence and produce client advice.</dd></div>
              <div><dt>Audit fidelity</dt><dd>Test attribution, citations, safety and fit.</dd></div>
            </dl>
          </details>
        </section>

        <section className="simple__questions" aria-labelledby="questions-title">
          <p className="simple__kicker">Plain answers</p>
          <h2 id="questions-title">What this is—and is not</h2>
          <details>
            <summary>Is it a literal clone of a person?</summary>
            <p>No. It is an independently branded advisor built from observable, published material.</p>
          </details>
          <details>
            <summary>Can an interviewer’s ideas leak into the model?</summary>
            <p>Interviewers remain context only. Advice is promoted only when it is attributed to the subject.</p>
          </details>
          <details>
            <summary>What if the system lacks enough evidence?</summary>
            <p>It should say so, narrow its answer or block the answer—not improvise.</p>
          </details>
        </section>

        <footer className="simple__footer">
          <strong>Clone System</strong>
          <p>Collect. Understand. Advise. Verify.</p>
          <a href="#top">Back to top ↑</a>
        </footer>
      </div>
    </main>
  );
}
