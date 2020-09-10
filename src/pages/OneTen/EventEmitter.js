class EventEmitter {
  constructor() {
    this.listeners = {};
  }

  on(type, cb) {
    let cbs = this.listeners[type];
    if (!cbs) {
      cbs = [];
    }
    cbs.push(cb);
    this.listeners[type] = cbs;
    return () => {
      this.remove(type, cb);
    };
  }

  emit(type, ...args) {
    const cbs = this.listeners[type];
    if (Array.isArray(cbs)) {
      for (let i = 0; i < cbs.length; i++) {
        const cb = cbs[i];
        if (typeof cb === "function") {
          cb(...args);
        }
      }
    }
  }

  remove(type, cb) {
    if (cb) {
      let cbs = this.listeners[type];
      cbs = cbs.filter((eMap) => eMap.cb !== cb);
      this.listeners[type] = cbs;
    } else {
      this.listeners[type] = null;
      delete this.listeners[type];
    }
  }
}

export default EventEmitter;
