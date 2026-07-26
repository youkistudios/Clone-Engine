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

test("renders the Clone System map", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>Clone System — Source-grounded digital advisors<\/title>/i);
  assert.match(html, /Four skills\. One evidence chain\./);
  assert.match(html, /Process once\. Remember forever\./);
  assert.match(html, /Frequency is a signal—not truth\./);
  assert.match(html, /Release decision:/);
  assert.doesNotMatch(html, /codex-preview|Building your site|react-loading-skeleton/i);
});

test("renders all specialist skills and honest pilot numbers", async () => {
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
  for (const value of ["10", "91", "12", "0"]) {
    assert.match(html, new RegExp(`>${value}<`));
  }
});
