---
"oxlint-plugin-react-doctor": patch
"eslint-plugin-react-doctor": patch
---

Require native-array evidence before recommending a Set for repeated `includes` or `indexOf` membership checks. Avoid unsafe recommendations for inferred strings and unproven receivers while preserving supported array lookups and existing equality, sparse-array, and argument safeguards.
