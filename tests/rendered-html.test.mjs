import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the simplified Clone System explanation", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>Clone System — From content to useful advice<\/title>/i);
  assert.match(html, /Three jobs\. One checker\./);
  assert.match(html, /knowledge-foundry-hero-v1\.jpg/);
  assert.match(html, /evidence-audit-v1\.jpg/);
  assert.match(html, /property="og:image" content="\/og\.png"/);
  assert.match(html, /Four skills\. One evidence chain\./);
  assert.match(html, /Process once\. Remember forever\./);
  assert.match(html, /Frequency is a signal—not truth\./);
  assert.match(html, /Serving decision:/);
  assert.doesNotMatch(html, /codex-preview|Building your site|react-loading-skeleton/i);
});

test("renders all specialist skills and public-data boundaries", async () => {
  const response = await render();
  const html = await response.text();
  for (const label of [
    "Ingest sources",
    "Extract knowledge",
    "Build the advisor",
    "Audit fidelity",
  ]) {
    assert.match(html, new RegExp(label));
  }
  for (const value of ["1", "0"]) {
    assert.match(html, new RegExp(`>${value}<`));
  }
  assert.match(html, /BLOCKED BY DESIGN/);
});
