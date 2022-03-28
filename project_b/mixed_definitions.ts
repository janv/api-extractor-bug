import helper from "./some_internal_helper";

/** @public */
export default class PublicClass {

  /** @internal */
  someFunction() {
    helper()
  }

}

export interface Foo {
  bar: string;
}