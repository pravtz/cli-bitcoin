const { describe, it } = require('mocha');
const { expect } = require('chai');
const inquirer = require('inquirer');
const sandbox = require('sinon').createSandbox();
const { order } = require('../../src/orderInquirer');

describe('Suit testing Order inquirer', () => {
  context('Command Defalt order', () => {
    afterEach(() => {
      sandbox.restore();
    });
    it('should test inquirer order', async () => {
      const inquirerPromptStub = sandbox.stub(inquirer, 'prompt');

      inquirerPromptStub.onCall(0).resolves(console.log());
      order();
      expect();
    });
  });
});
