let eventHandlers;

/**
 * Abstract observer
 */
export class Observer {
  /**
   * Register callback `handler` to fire on event `eventName`
   * @param {String} eventName   
   * @param {Function} handler 
   */
  on(eventName, handler) {
    throw new Error('unimplemented abstract method');
  }
  async notify(eventName, eventData) {
    throw new Error('unimplemented abstract method');
  }
}

class ObserverImpl extends Observer {
  constructor() {
    eventHandlers = new Map();
    super();
  }

  /**
   * @override
   */
  on(eventName, handler) {
    if (eventName && typeof handler !== 'function') {
      throw new Error('eventName or handler invalid');
    }
    if (eventHandlers.has(eventName)) {
      eventHandlers.get(eventName).push(handler);
    } else {
      eventHandlers.set(eventName, [handler]);
    }
  }

  /**
   * @override
   */
  async notify(eventName, eventData) {
    if (eventHandlers.has(eventName)) {
      return await eventHandlers.get(eventName).forEach(handler => handler(eventData));
    }
  }
}


const ObserverFactory = (() => {
  let instance;

  function createInstance() {
    return new ObserverImpl();
  }

  return Object.freeze({
    /**
     * @returns {Observer} observer singleton
     */
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  });
})();

export default ObserverFactory;
