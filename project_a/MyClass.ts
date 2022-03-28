/** @public */
export default class PublicClassFromA {
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