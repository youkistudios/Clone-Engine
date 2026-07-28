# Security policy

## Reporting a vulnerability

Please do not post security vulnerabilities, credentials, or private source material in a public issue. Open a private GitHub security advisory for `youkistudios/Clone-Engine` or contact the repository owner through GitHub.

Include a clear description, affected path or behaviour, reproduction steps, and any safe mitigation you identified.

## Dependency audit

CI runs `npm run audit:production` and fails on high-severity findings in packages shipped with the application.

The full development-tree audit currently reports `GHSA-mh99-v99m-4gvg` through ESLint 9 and its plugins. This is a denial-of-service risk in glob expansion during local linting. ESLint 10 carries the patched dependency, but the current Next.js React lint plugin fails under ESLint 10. Keep lint inputs repository-controlled and update once that plugin supports ESLint 10; do not force the incompatible upgrade or override `brace-expansion` across unsupported major versions.

## Data handling

This public repository is not a place for source corpora or client data. If you encounter either in the repository or a pull request, stop sharing it and report the location privately.
