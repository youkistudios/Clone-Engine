const skills = [
  {
    number: "01",
    name: "Ingest sources",
    id: "ingest",
    role: "Capture the source without interpreting it.",
    value:
      "Preserves the fullest observable evidence: words, speakers, pages, tables, diagrams, timestamps, editions, rights and hashes.",
    inputs: "Video · audio · books · PDFs · newsletters · courses",
    outputs: "Admitted or quarantined source package",
    gate: "Identity + rights + raw evidence + measured quality",
    accent: "signal",
  },
  {
    number: "02",
    name: "Extract knowledge",
    id: "extract",
    role: "Turn admitted evidence into reviewable knowledge.",
    value:
      "Separates claims, cases, procedures, reasoning moves, values, boundaries, rhetoric and contradictions instead of flattening everything into summaries.",
    inputs: "Admitted, page/time-addressable evidence",
    outputs: "Candidate knowledge with evidence pointers",
    gate: "Entailment + attribution + atomicity + review",
    accent: "blue",
  },
  {
    number: "03",
    name: "Build the advisor",
    id: "build",
    role: "Assemble an inspectable model of published judgment.",
    value:
      "Connects reviewed knowledge into a temporal person model, retrieval layer and consulting workflow—without claiming to recreate a private mind.",
    inputs: "Reviewed claims, cases, procedures and conflicts",
    outputs: "Frozen person model + serving candidate",
    gate: "Released objects only; client memory stays separate",
    accent: "ink",
  },
  {
    number: "04",
    name: "Audit fidelity",
    id: "audit",
    role: "Independently decide what the system can honestly claim.",
    value:
      "Reopens raw evidence, tests speaker contamination, held-out decisions, citations, abstention, revocation, tenant isolation and style drift.",
    inputs: "Frozen project, runtime and hidden evaluation set",
    outputs: "PASS · NARROW · REJECT · BLOCKED",
    gate: "No self-certification; automatic failures win",
    accent: "red",
  },
];

const evidenceTypes = [
  ["Raw evidence", "Immutable media, pages, HTML and metadata"],
  ["Normalized evidence", "Stable timestamps, pages, turns and regions"],
  ["Candidate knowledge", "Claims, cases, procedures and reasoning moves"],
  ["Reviewed knowledge", "Evidence-verified and speaker-cleared objects"],
  ["Person model", "Temporal principles, boundaries, modes and conflicts"],
  ["Serving index", "Only material that passes every release gate"],
  ["Client session", "Tenant-isolated facts that never rewrite the source model"],
];

const sourceTypes = [
  "Owned videos",
  "Podcasts",
  "Guest interviews",
  "Books & workbooks",
  "Newsletters",
  "Courses",
  "Live consulting",
  "Slides & demonstrations",
];

const calibration = [
  ["Prominence", "How often the idea returns across independent events.", "Ranks emphasis"],
  ["Confidence", "How strong, attributable and reviewed the evidence is.", "Controls trust"],
  ["Universality", "How many audiences and situations it is applied to.", "Controls breadth"],
  ["Specificity", "How tightly it depends on stage, channel or conditions.", "Controls fit"],
  ["Currentness", "Whether later evidence supports, narrows or replaces it.", "Controls time"],
];

const automaticFailures = [
  "Fabricated citation or quotation",
  "Wrong-speaker knowledge",
  "Revoked-source influence",
  "Cross-client memory leak",
  "Deceptive impersonation or endorsement",
  "Style adding a new proposition",
  "Evaluation leakage",
];

export default function Home() {
  return (
    <main id="top">
      <nav className="rail" aria-label="Page sections">
        <a className="rail__mark" href="#top" aria-label="Clone System home">
          CS
        </a>
        <div className="rail__links">
          <a href="#map">Map</a>
          <a href="#skills">Skills</a>
          <a href="#proof">Proof</a>
          <a href="#repo">Repo</a>
        </div>
        <span className="rail__version">v1.0</span>
      </nav>

      <div className="page">
        <header className="hero">
          <div className="hero__meta">
            <span>Open architecture</span>
            <span>Source-grounded</span>
            <span>Release-blocked by default</span>
          </div>
          <h1>Clone System</h1>
          <div className="hero__split">
            <p className="hero__lede">
              A reusable system for turning years of public work into an
              evidence-backed digital advisor—without confusing fluency with
              fidelity.
            </p>
            <p className="hero__note">
              It does not copy a private mind. It builds an inspectable model
              of published knowledge, judgment and communication—then proves
              exactly where that model works.
            </p>
          </div>
          <div className="truth-strip" aria-label="Current pilot status">
            <div><strong>10</strong><span>sources registered</span></div>
            <div><strong>91</strong><span>candidate claims</span></div>
            <div><strong>12</strong><span>calibrated principles</span></div>
            <div className="truth-strip__blocked">
              <strong>0</strong><span>serving-approved principles</span>
            </div>
          </div>
        </header>

        <section className="orientation" aria-labelledby="orientation-title">
          <p className="section-label">The idea in plain language</p>
          <h2 id="orientation-title">Four skills. One evidence chain.</h2>
          <p>
            Think of the Clone System as a publishing house, research lab and
            consulting team working together. One skill captures the material.
            One extracts what matters. One builds the advisor. One audits
            whether the result deserves to be trusted.
          </p>
        </section>

        <section className="map-section" id="map" aria-labelledby="map-title">
          <div className="section-heading">
            <div>
              <p className="section-label">System map</p>
              <h2 id="map-title">Source → judgment → answer</h2>
            </div>
            <p>
              Every arrow is a gate. Later stages cannot repair missing raw
              evidence, uncertain speakers or unresolved rights.
            </p>
          </div>

          <div className="system-map" aria-label="Clone System architecture">
            <div className="map-band map-band--source">
              <span className="map-band__title">Source universe</span>
              <div className="source-cloud">
                {sourceTypes.map((source) => <span key={source}>{source}</span>)}
              </div>
            </div>

            <div className="map-arrow" aria-hidden="true">↓</div>

            <div className="map-skill-row">
              {skills.map((skill) => (
                <article className={`map-node map-node--${skill.accent}`} key={skill.id}>
                  <span>{skill.number}</span>
                  <h3>{skill.name}</h3>
                  <p>{skill.role}</p>
                </article>
              ))}
            </div>

            <div className="map-arrow" aria-hidden="true">↓</div>

            <div className="map-band map-band--stores">
              <span className="map-band__title">Evidence stores</span>
              <div className="store-line">
                {evidenceTypes.map(([name, description], index) => (
                  <div className="store" key={name}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{name}</strong>
                    <small>{description}</small>
                  </div>
                ))}
              </div>
            </div>

            <div className="map-arrow map-arrow--split" aria-hidden="true">↓</div>

            <div className="map-outcomes">
              <div>
                <span>Allowed outcome</span>
                <strong>Audited, source-cited advice</strong>
              </div>
              <div>
                <span>Fail-closed outcome</span>
                <strong>Abstain, narrow scope or block release</strong>
              </div>
            </div>
          </div>

          <div className="map-legend">
            <span><i className="legend-dot legend-dot--solid" /> Evidence or approved state</span>
            <span><i className="legend-dot legend-dot--open" /> Candidate or unresolved state</span>
            <span><i className="legend-dot legend-dot--red" /> Automatic release failure</span>
          </div>
        </section>

        <section className="skills-section" id="skills" aria-labelledby="skills-title">
          <div className="section-heading">
            <div>
              <p className="section-label">Skill dossiers</p>
              <h2 id="skills-title">What each specialist owns</h2>
            </div>
            <p>
              Separation of duties is a quality control. The extractor does
              not approve itself. The stylist cannot invent knowledge. The
              runtime cannot edit the person model.
            </p>
          </div>

          <div className="skill-dossiers">
            {skills.map((skill) => (
              <details className={`dossier dossier--${skill.accent}`} key={skill.id}>
                <summary>
                  <span className="dossier__number">{skill.number}</span>
                  <span className="dossier__title">
                    <strong>{skill.name}</strong>
                    <small>{skill.role}</small>
                  </span>
                  <span className="dossier__toggle">Open</span>
                </summary>
                <div className="dossier__body">
                  <p>{skill.value}</p>
                  <dl>
                    <div><dt>Receives</dt><dd>{skill.inputs}</dd></div>
                    <div><dt>Produces</dt><dd>{skill.outputs}</dd></div>
                    <div><dt>Cannot pass without</dt><dd>{skill.gate}</dd></div>
                  </dl>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="lifecycle" aria-labelledby="lifecycle-title">
          <p className="section-label">Evidence lifecycle</p>
          <h2 id="lifecycle-title">Twelve controlled transitions</h2>
          <ol className="lifecycle__track">
            {[
              "Define", "Discover", "Admit", "Preserve", "Normalize", "Attribute",
              "Extract", "Adjudicate", "Synthesize", "Evaluate", "Release", "Operate",
            ].map((stage, index) => (
              <li key={stage}><span>{index + 1}</span><strong>{stage}</strong></li>
            ))}
          </ol>
          <p className="lifecycle__rule">
            A source can move forward only when its current gate passes.
            “Active,” “popular” or “frequently repeated” never means
            “approved for serving.”
          </p>
        </section>

        <section className="proof-grid" id="proof">
          <article className="registry-panel">
            <p className="section-label">Content registry</p>
            <h2>Process once. Remember forever.</h2>
            <p>
              Before acquisition, the registry checks native IDs, canonical
              URLs, media hashes, transcript hashes and underlying source
              events. Exact matches are blocked. Derivatives point back to the
              original.
            </p>
            <div className="registry-check">
              <span>Candidate: youtube:JDR-R--4HhM</span>
              <strong>Duplicate blocked</strong>
              <small>Matched native ID + canonical URL</small>
            </div>
            <ul>
              <li>Append-only history preserves every processing state.</li>
              <li>Reprocessing requires a changed artifact, pipeline or repair reason.</li>
              <li>Clips and reposts add no independent evidence weight.</li>
            </ul>
          </article>

          <article className="calibration-panel">
            <p className="section-label">Weighted calibration</p>
            <h2>Frequency is a signal—not truth.</h2>
            <p>
              Repetition helps identify what the subject publicly emphasizes.
              It does not prove the advice is correct, universal or current.
            </p>
            <div className="calibration-list">
              {calibration.map(([name, description, use], index) => (
                <div key={name}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{name}</strong>
                  <p>{description}</p>
                  <small>{use}</small>
                </div>
              ))}
            </div>
            <p className="formula">
              Independent events use a saturating curve: the second mention
              matters far more than the hundredth.
            </p>
          </article>
        </section>

        <section className="runtime" aria-labelledby="runtime-title">
          <div className="section-heading">
            <div>
              <p className="section-label">Consulting runtime</p>
              <h2 id="runtime-title">How a client transcript becomes advice</h2>
            </div>
            <p>
              Client facts are temporary working memory. They never become
              evidence about the thought leader.
            </p>
          </div>
          <div className="runtime-flow">
            {[
              ["Client facts", "Objectives · constraints · metrics · unknowns"],
              ["Neutral diagnosis", "Rank the bottleneck before adopting a persona"],
              ["Evidence retrieval", "Pull reviewed principles, cases and conflicts"],
              ["Reasoning pass", "Apply cited diagnostic and decision patterns"],
              ["Style firewall", "Render tone only after meaning is frozen"],
              ["Auditable answer", "Actions · owner · metric · timebox · stop rule · sources"],
            ].map(([name, description], index) => (
              <div key={name}>
                <span>{index + 1}</span>
                <strong>{name}</strong>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="safeguards" aria-labelledby="safeguards-title">
          <div>
            <p className="section-label">Non-negotiable safeguards</p>
            <h2 id="safeguards-title">The system is designed to say no.</h2>
            <p>
              A useful digital advisor must know when its evidence is
              insufficient, its source is restricted or the client’s situation
              falls outside the tested scope.
            </p>
          </div>
          <div className="failure-list">
            {automaticFailures.map((failure) => (
              <div key={failure}><span>×</span><p>{failure}</p></div>
            ))}
          </div>
        </section>

        <section className="repo" id="repo" aria-labelledby="repo-title">
          <div className="section-heading">
            <div>
              <p className="section-label">Repository anatomy</p>
              <h2 id="repo-title">Everything has an address</h2>
            </div>
            <p>
              Raw evidence stays authoritative. Every derived layer can be
              rebuilt, corrected or revoked without hiding its lineage.
            </p>
          </div>
          <div className="repo-tree" role="tree" aria-label="Clone System repository">
            <div><strong>skills/</strong><span>Four specialist operating contracts</span></div>
            <div className="repo-tree__child"><strong>ingest-thought-leader-sources/</strong><span>Capture and normalize</span></div>
            <div className="repo-tree__child"><strong>extract-thought-leader-knowledge/</strong><span>Recover structured knowledge</span></div>
            <div className="repo-tree__child"><strong>build-thought-leader-agent/</strong><span>Orchestrate and consult</span></div>
            <div className="repo-tree__child"><strong>audit-thought-leader-fidelity/</strong><span>Test and gate release</span></div>
            <div><strong>sources/</strong><span>Immutable raw + normalized evidence</span></div>
            <div><strong>knowledge/</strong><span>Claims, cases, principles and person model</span></div>
            <div><strong>registry/</strong><span>Content ledger, duplicate index and rights</span></div>
            <div><strong>evaluations/</strong><span>Held-out tests and fidelity matrix</span></div>
            <div><strong>reviews/</strong><span>Human verification and adjudication queues</span></div>
            <div><strong>releases/</strong><span>Frozen manifests and rollback targets</span></div>
          </div>
        </section>

        <section className="readiness" aria-labelledby="readiness-title">
          <div>
            <p className="section-label">Current truth</p>
            <h2 id="readiness-title">Architecture ready. Advisor blocked.</h2>
          </div>
          <div className="readiness__body">
            <p>
              The pilot proves the evidence pipeline, indexing, structured
              extraction and calibration machinery. It does not yet prove that
              the advisor can safely answer “the way Alex would.”
            </p>
            <dl>
              <div><dt>Claims awaiting approval</dt><dd>91</dd></div>
              <div><dt>Principles not released</dt><dd>12</dd></div>
              <div><dt>Sources missing rights basis</dt><dd>10</dd></div>
              <div><dt>Serving knowledge objects</dt><dd>0</dd></div>
            </dl>
            <p className="readiness__decision">
              Release decision: <strong>BLOCKED</strong>
            </p>
          </div>
        </section>

        <section className="questions" aria-labelledby="questions-title">
          <p className="section-label">Common questions</p>
          <h2 id="questions-title">What the system does—and does not do</h2>
          <details>
            <summary>Is this a literal clone of a person?</summary>
            <p>No. It is an independently branded, source-grounded advisor built from observable published material.</p>
          </details>
          <details>
            <summary>Does repeating advice make it more correct?</summary>
            <p>No. Repetition increases observed prominence. Correctness, applicability and confidence are evaluated separately.</p>
          </details>
          <details>
            <summary>Can interviewers contaminate the model?</summary>
            <p>The ingestion and extraction contracts preserve interviewer turns as context and require verified subject attribution before promotion.</p>
          </details>
          <details>
            <summary>Can a client conversation teach the public model?</summary>
            <p>No. Client memory is tenant-isolated and cannot silently modify source evidence or the person model.</p>
          </details>
        </section>

        <footer className="colophon">
          <div>
            <strong>Clone System</strong>
            <p>Evidence before imitation. Judgment before style. Audit before release.</p>
          </div>
          <div className="colophon__meta">
            <span>Architecture v1.0</span>
            <span>Updated 26 July 2026</span>
            <a href="#top">Back to top</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
