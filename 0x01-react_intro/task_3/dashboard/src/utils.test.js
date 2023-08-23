import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test('getFullYear', () => {
  it('returns the correct year', () => {
    const expected = new Date().getFullYear();
    expect(getFullYear()).toBe(expected);
  });
});

test('getFooterCopy', () => {
  it('returns correct string when the argument is true', () => {
    const expected = getFooterCopy(true);
    expect(expected).toBe('Holberton School');
  });

  it('returns correct string when the argument is false', () => {
    const expected = getFooterCopy(false);
    expect(expected).toBe('Holberton School main dashboard');
  });
});

test('getLatestNotification', () => {
  it('returns the correct string', () => {
    const expected = '<strong>Urgent requirement</strong> - complete by EOD';
    expect(getLatestNotification()).toBe(expected);
  });
});
