/** @public */
export default class MyClass {
  hello() {
    console.log('Hello World');
  }

  /** @internal */
  internalFunction():SomeEnum {
    return SomeEnum.one
  }
}

export enum SomeEnum {
  one, two
}