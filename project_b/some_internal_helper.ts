import { Foo } from "./mixed_definitions"

export default function helper() {
  const foo:Foo = {bar: 'bar'};
  return foo;
}
