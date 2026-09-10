import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const skillRoot = root;
const requiredFiles = [
  'SKILL.md',
  'agents/openai.yaml',
  'references/diagram-classification.md',
  'references/diagram-grammar.md',
  'references/annotation-policy.md',
  'references/rendering-and-verification.md',
];

test('content-to-flowchart exposes the editable-diagram delivery contract', () => {
  for (const relativePath of requiredFiles) {
    assert.equal(
      existsSync(path.join(skillRoot, relativePath)),
      true,
      `missing ${relativePath}`,
    );
  }

  const skill = readFileSync(path.join(skillRoot, 'SKILL.md'), 'utf8');
  assert.match(skill, /^---\nname: content-to-flowchart\n/m);
  assert.match(skill, /description: Use when /);
  assert.match(skill, /Mermaid/);
  assert.match(skill, /PNG/);
  assert.match(skill, /diagram-classification\.md/);
  assert.match(skill, /diagram-grammar\.md/);
  assert.match(skill, /annotation-policy\.md/);
  assert.match(skill, /rendering-and-verification\.md/);
});

test('approval fixture is a complete editable flow with a safe return loop', (t) => {
  const fixture = path.join(root, 'tests/fixtures/content-to-flowchart/approval-flow.mmd');
  const source = readFileSync(fixture, 'utf8');

  assert.match(source, /^flowchart TD/m);
  assert.match(source, /资料是否齐全？/);
  assert.match(source, /审批是否通过？/);
  assert.match(source, /补充资料/);
  assert.match(source, /创建采购订单/);

  const pngPath = process.env.FLOWCHART_PNG
    || path.join(root, 'tests/fixtures/content-to-flowchart/approval-flow.png');
  if (!existsSync(pngPath)) {
    t.skip('renderer smoke path not supplied');
    return;
  }

  const png = readFileSync(pngPath);
  assert.deepEqual([...png.subarray(0, 8)], [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
});
