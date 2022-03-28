
/** @public */
export default class PublicClassFromB {

  /** @internal */
  internalFunctionB() {
    return helperUsedInternallyReturningFoo()
  }

}

function helperUsedInternallyReturningFoo() {
  const foo:Foo = {bar: 'bar'};
  return foo;
}

interface Foo {
  bar: string;
}