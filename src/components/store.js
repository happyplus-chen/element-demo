import Vue from 'vue';

const Store = function(table, initialState = {}) {
  if (!table) {
    throw new Error('Table is required.');
  }
  this.table = table;

  this.states = {
    selectData: {},
    selectArray: []
  };

  for (let prop in initialState) {
    if (initialState.hasOwnProperty(prop) && this.states.hasOwnProperty(prop)) {
      this.states[prop] = initialState[prop];
    }
  }
};

Store.prototype.mutations = {
  select(states, data) {
    data.forEach(function(item) {
      states.selectData[item.name] = item;
    });
    states.selectArray = Object.values(states.selectData)
  },
  unselect(states, data) {
    data.forEach(function(item) {
      delete states.selectData[item.name]
    })
    states.selectArray = Object.values(states.selectData)
  }
};


Store.prototype.commit = function(name, ...args) {
  const mutations = this.mutations;
  if (mutations[name]) {
    mutations[name].apply(this, [this.states].concat(args));
  } else {
    throw new Error(`Action not found: ${name}`);
  }
};

export default Store;
