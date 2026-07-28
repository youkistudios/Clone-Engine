# Clone Engine

Clone Engine shows how to turn a person's published work into a digital advisor that can explain where its advice came from. It is for teams that need to keep source material, interpretation, client information, and final approval separate.

This repository explains the architecture and includes a working demonstration site. It does not contain a person's source material, impersonate anyone, or provide a production advisor service.

## What this repository contains

- A polished public explainer site for the Clone System architecture.
- The four operating roles: ingest sources, extract knowledge, build the advisor, and audit fidelity.
- A Vinext application that builds as a Cloudflare Worker, with lint, build, and rendered-page tests. Hosting configuration is left to the operator.
- Original illustrative artwork used by the site.

## What it intentionally excludes

- Raw videos, transcripts, books, podcasts, or other third-party source material.
- Derived claims, quotes, embeddings, speaker profiles, or client transcripts.
- Credentials, provider configuration, production access, and live advisory behaviour.

Keeping those materials out of the public repository is a feature: a public architecture should not accidentally publish restricted content, private client data, or an unsupported claim of identity fidelity.

## How it works

```text
Published source
  -> preserve and attribute
  -> extract reviewable knowledge
  -> test fit, conflicts, and evidence quality
  -> retrieve for a specific client situation
  -> render a cited action plan
  -> independently audit before release
```

Repeated advice may show what a person discusses often; repetition does not make the advice true. When the system cannot trace or evaluate a recommendation, it should narrow its answer or decline instead of guessing.

## Local development

Requirements: Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

Open the local URL printed by Vinext.

## Quality checks

```bash
npm run lint
npm test
```

`npm test` runs the production build and then checks the rendered HTML for the core public explanation, images, metadata, and release boundary.

## Deployment

The app builds to a Cloudflare Worker through Vinext. This repository does not choose or configure a public host for you.

Before any public deployment, set `NEXT_PUBLIC_SITE_URL` to the final canonical HTTPS URL. This gives Open Graph and Twitter metadata an absolute base URL without hard-coding a temporary preview host.

```bash
NEXT_PUBLIC_SITE_URL=https://example.com npm run build
```

Review the deployment provider's access controls, privacy terms, and asset policy before publishing. The legacy `.openai/hosting.json` is retained only for local project lineage; it is not a deployment credential or a production hosting recommendation.

## Responsible use

- Use only material you have a legitimate right to process.
- Preserve provenance and distinguish source evidence from inference.
- Keep host/interviewer turns as context until speaker attribution is verified.
- Keep client data tenant-isolated; it must not train or silently edit the source model.
- Do not present an advisor as the real person, an endorsement, or an affiliate.
- Require independent evaluation before serving client-facing advice.

See [CONTRIBUTING.md](CONTRIBUTING.md) and [SECURITY.md](SECURITY.md) for project expectations.

## License

The code and original project materials in this repository are available under the [MIT License](LICENSE). Third-party sources are not included or licensed by this repository.
