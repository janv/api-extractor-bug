This illustrates api-extractor emitting unused types.

1. Perform `yarn install`
2. Inside of `project_b`, run `yarn api:update` (the results of this are already checked in)
3. Observe how the emitted types in `project_b/trimmed.d.ts` include types that are not used.
   This behavior can lead to significant bloat and accidental leakage of internals.