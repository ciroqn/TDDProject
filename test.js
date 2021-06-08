const {assert} = require('chai');

describe('User visits project root', () => {
  describe('posting a quote', () => {
    it('saves quote and metadata submitted by user', () => {
      
      // Setup
      const quote = 'I dwell in and around the sea, for all time, ship or no ship; I pervade the salty air, the waves, the dark.';
      const attributed = 'Davy Jones';
      const source = "Davy Jones' diary";
      
      // Exercise
      browser.url('/');
      browser.setValue('textarea[id=quote]', quote);
      browser.setValue('input[id=attributed]', attributed);
      browser.setValue('input[id=source]', source);
      browser.click('input[type=submit]');
      
      // Verify
      assert.include(browser.getText('#quotes'), quote);
      assert.include(browser.getText('#quotes'), attributed);
      assert.include(browser.getText('#quotes'), source);
    });
  });
});
