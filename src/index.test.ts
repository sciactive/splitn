import splitn from '.';

describe('splitn', () => {
  it('splits a string', () => {
    expect(splitn('a,b,c', ',')).toEqual(['a', 'b', 'c']);
  });

  it('splits a string with a multi-char delimiter', () => {
    expect(splitn('a, b, c', ', ')).toEqual(['a', 'b', 'c']);
  });

  it('splits a string with surrogate pairs', () => {
    expect(splitn('😃😂🧘🏻😂🌍', '😂')).toEqual(['😃', '🧘🏻', '🌍']);
  });

  it('splits a string with regex delimiter', () => {
    expect(splitn('a,b, c', /,\s*/)).toEqual(['a', 'b', 'c']);
  });

  it("splits a string with regex delimiter that could, but shouldn't, match twice", () => {
    expect(splitn('a b  c', /\s+/)).toEqual(['a', 'b', 'c']);
  });

  it('splits a string with a double delimiter', () => {
    expect(splitn('a,b,,c', ',')).toEqual(['a', 'b', '', 'c']);
  });

  it('splits a string with just delimiters', () => {
    expect(splitn(',,', ',')).toEqual(['', '', '']);
  });

  it('splits a very very very long list', () => {
    const list = [...new Array(100000)].map((v, i) => `${i}`);
    expect(splitn(list.join(' '), ' ')).toEqual(list);
  });

  it('returns the remainder on split', () => {
    expect(splitn('a,b,c', ',', 2)).toEqual(['a', 'b,c']);
  });

  it('returns the remainder on split with multi-char delimiter', () => {
    expect(splitn('a, b, c', ', ', 2)).toEqual(['a', 'b, c']);
  });

  it('returns the remainder on split with regex delimiter', () => {
    expect(splitn('a,b, c', /,\s*/, 2)).toEqual(['a', 'b, c']);
  });

  it('returns the whole string when the limit is 1', () => {
    expect(splitn('a,b,c', ',', 1)).toEqual(['a,b,c']);
  });

  it('returns empty array when the limit is 0', () => {
    expect(splitn('a,b,c', ',', 0)).toEqual([]);
  });
});
