const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should;
require('mocha-sinon');

const { Clog, LOGLEVEL } = require('../dist/index');

beforeEach(function() {
  this.sinon.stub(console, 'log');
});

afterEach(function() {
  this.sinon.reset();
});

describe('log a message', function() {
  describe('with DEBUG as min level', function() {
    const clog = new Clog(LOGLEVEL.DEBUG);

    it('should log at DEBUG level', function() {
      clog.log('Debug level entry', LOGLEVEL.DEBUG);
      expect(console.log.calledOnce).to.be.true;
      expect(console.log.lastCall.args[0]).to.contain('[DEBUG]');
    });
  
    it('should log at INFO level', function() {
      clog.log('Info level entry', LOGLEVEL.INFO);
      expect(console.log.calledOnce).to.be.true;
      expect(console.log.lastCall.args[0]).to.contain('[INFO]');
    });

    it('should log at WARN level', function() {
      clog.log('WARN level entry', LOGLEVEL.WARN);
      expect(console.log.calledOnce).to.be.true;
      expect(console.log.lastCall.args[0]).to.contain('[WARN]');
    });

    it('should log at ERROR level', function() {
      clog.log('ERROR level entry', LOGLEVEL.ERROR);
      expect(console.log.calledOnce).to.be.true;
      expect(console.log.lastCall.args[0]).to.contain('[ERROR]');
    });

    it('should log at FATAL level', function() {
      clog.log('FATAL level entry', LOGLEVEL.FATAL);
      expect(console.log.calledOnce).to.be.true;
      expect(console.log.lastCall.args[0]).to.contain('[FATAL]');
    });

    it('should NOT log at OFF level', function() {
      clog.log('OFF level entry', LOGLEVEL.OFF);
      expect(console.log.calledOnce).to.not.be.true;
    });
  });

  describe('with INFO as min level', function() {
    const clog = new Clog(LOGLEVEL.INFO);

    it('should NOT log at DEBUG level', function() {
      clog.log('Debug level entry', LOGLEVEL.DEBUG);
      expect(console.log.calledOnce).to.not.be.true;
    });
  
    it('should log at INFO level', function() {
      clog.log('Info level entry', LOGLEVEL.INFO);
      expect(console.log.calledOnce).to.be.true;
      expect(console.log.lastCall.args[0]).to.contain('[INFO]');
    });

    it('should log at WARN level', function() {
      clog.log('WARN level entry', LOGLEVEL.WARN);
      expect(console.log.calledOnce).to.be.true;
      expect(console.log.lastCall.args[0]).to.contain('[WARN]');
    });

    it('should log at ERROR level', function() {
      clog.log('ERROR level entry', LOGLEVEL.ERROR);
      expect(console.log.calledOnce).to.be.true;
      expect(console.log.lastCall.args[0]).to.contain('[ERROR]');
    });

    it('should log at FATAL level', function() {
      clog.log('FATAL level entry', LOGLEVEL.FATAL);
      expect(console.log.calledOnce).to.be.true;
      expect(console.log.lastCall.args[0]).to.contain('[FATAL]');
    });

    it('should NOT log at OFF level', function() {
      clog.log('OFF level entry', LOGLEVEL.OFF);
      expect(console.log.calledOnce).to.not.be.true;
    });
  });

  describe('with WARN as min level', function() {
    const clog = new Clog(LOGLEVEL.WARN);

    it('should NOT log at DEBUG level', function() {
      clog.log('Debug level entry', LOGLEVEL.DEBUG);
      expect(console.log.calledOnce).to.not.be.true;
    });
  
    it('should NOT log at INFO level', function() {
      clog.log('Info level entry', LOGLEVEL.INFO);
      expect(console.log.calledOnce).to.not.be.true;
    });

    it('should log at WARN level', function() {
      clog.log('WARN level entry', LOGLEVEL.WARN);
      expect(console.log.calledOnce).to.be.true;
      expect(console.log.lastCall.args[0]).to.contain('[WARN]');
    });

    it('should log at ERROR level', function() {
      clog.log('ERROR level entry', LOGLEVEL.ERROR);
      expect(console.log.calledOnce).to.be.true;
      expect(console.log.lastCall.args[0]).to.contain('[ERROR]');
    });

    it('should log at FATAL level', function() {
      clog.log('FATAL level entry', LOGLEVEL.FATAL);
      expect(console.log.calledOnce).to.be.true;
      expect(console.log.lastCall.args[0]).to.contain('[FATAL]');
    });

    it('should NOT log at OFF level', function() {
      clog.log('OFF level entry', LOGLEVEL.OFF);
      expect(console.log.calledOnce).to.not.be.true;
    });
  });

  describe('with ERROR as min level', function() {
    const clog = new Clog(LOGLEVEL.ERROR);

    it('should NOT log at DEBUG level', function() {
      clog.log('Debug level entry', LOGLEVEL.DEBUG);
      expect(console.log.calledOnce).to.not.be.true;
    });
  
    it('should NOT log at INFO level', function() {
      clog.log('Info level entry', LOGLEVEL.INFO);
      expect(console.log.calledOnce).to.not.be.true;
    });

    it('should NOT log at WARN level', function() {
      clog.log('WARN level entry', LOGLEVEL.WARN);
      expect(console.log.calledOnce).to.not.be.true;
    });

    it('should log at ERROR level', function() {
      clog.log('ERROR level entry', LOGLEVEL.ERROR);
      expect(console.log.calledOnce).to.be.true;
      expect(console.log.lastCall.args[0]).to.contain('[ERROR]');
    });

    it('should log at FATAL level', function() {
      clog.log('FATAL level entry', LOGLEVEL.FATAL);
      expect(console.log.calledOnce).to.be.true;
      expect(console.log.lastCall.args[0]).to.contain('[FATAL]');
    });

    it('should NOT log at OFF level', function() {
      clog.log('OFF level entry', LOGLEVEL.OFF);
      expect(console.log.calledOnce).to.not.be.true;
    });
  });

  describe('with FATAL as min level', function() {
    const clog = new Clog(LOGLEVEL.FATAL);

    it('should NOT log at DEBUG level', function() {
      clog.log('Debug level entry', LOGLEVEL.DEBUG);
      expect(console.log.calledOnce).to.not.be.true;
    });
  
    it('should NOT log at INFO level', function() {
      clog.log('Info level entry', LOGLEVEL.INFO);
      expect(console.log.calledOnce).to.not.be.true;
    });

    it('should NOT log at WARN level', function() {
      clog.log('WARN level entry', LOGLEVEL.WARN);
      expect(console.log.calledOnce).to.not.be.true;
    });

    it('should NOT log at ERROR level', function() {
      clog.log('ERROR level entry', LOGLEVEL.ERROR);
      expect(console.log.calledOnce).to.not.be.true;
    });

    it('should log at FATAL level', function() {
      clog.log('FATAL level entry', LOGLEVEL.FATAL);
      expect(console.log.calledOnce).to.be.true;
      expect(console.log.lastCall.args[0]).to.contain('[FATAL]');
    });

    it('should NOT log at OFF level', function() {
      clog.log('OFF level entry', LOGLEVEL.OFF);
      expect(console.log.calledOnce).to.not.be.true;
    });
  });

  describe('with OFF as min level', function() {
    const clog = new Clog(LOGLEVEL.OFF);

    it('should NOT log at DEBUG level', function() {
      clog.log('Debug level entry', LOGLEVEL.DEBUG);
      expect(console.log.calledOnce).to.not.be.true;
    });
  
    it('should NOT log at INFO level', function() {
      clog.log('Info level entry', LOGLEVEL.INFO);
      expect(console.log.calledOnce).to.not.be.true;
    });

    it('should NOT log at WARN level', function() {
      clog.log('WARN level entry', LOGLEVEL.WARN);
      expect(console.log.calledOnce).to.not.be.true;
    });

    it('should NOT log at ERROR level', function() {
      clog.log('ERROR level entry', LOGLEVEL.ERROR);
      expect(console.log.calledOnce).to.not.be.true;
    });

    it('should NOT log at FATAL level', function() {
      clog.log('FATAL level entry', LOGLEVEL.FATAL);
      expect(console.log.calledOnce).to.not.be.true;
    });

    it('should NOT log at OFF level', function() {
      clog.log('OFF level entry', LOGLEVEL.OFF);
      expect(console.log.calledOnce).to.not.be.true;
    });
  });
});