// rule: js-set-map-lookups
// weakness: type-provenance
// verdict: pass

const read = () => "generated content";

export const retainInferredStringMembership = (markers: string[]): boolean => {
  const current = read();
  const copied = current;
  return markers.every((marker) => current.includes(marker) && copied.indexOf(marker) !== -1);
};

declare function readGenerated(): Generator<never, string, unknown>;

export function* retainGeneratorStringMembership(markers: string[]) {
  const current = yield* readGenerated();
  const copied = current;
  return markers.every((marker) => current.indexOf(marker) !== -1 && copied.includes(marker));
}
