import { HideCharactersPipe } from './hidecharacters.pipe';

describe('HideCharactersPipe', () => {
  it('create an instance', () => {
    const pipe = new HideCharactersPipe();
    expect(pipe).toBeTruthy();
  });
});
