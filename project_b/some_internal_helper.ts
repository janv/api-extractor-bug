import { Foo } from "./mixed_definitions"

export default function helperUsedInternallyReturningFoo() {
  const foo:Foo = {bar: 'bar'};
  return foo;
}
