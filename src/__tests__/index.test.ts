import {expect} from "chai";
import {greet} from "../index";

describe('Index', () => {
  it('returns welcome greeting', () => {
    expect(greet('Foo')).to.eql('Hello Foo')
  });
})
