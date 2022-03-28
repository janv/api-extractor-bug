import helper from "./some_internal_helper";

/** @public */
export default class PublicClass {

  /** @internal */
  someFunction() {
    return helper()
  }

}

export interface Foo {
  bar: string;
}