import helperUsedInternallyReturningFoo from "./some_internal_helper";

/** @public */
export default class PublicClassFromB {

  /** @internal */
  internalFunctionB() {
    return helperUsedInternallyReturningFoo()
  }

}

export interface Foo {
  bar: string;
}