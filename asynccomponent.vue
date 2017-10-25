

const config = {
  process1: {
    task1: {
      head: 'head2',
      appov: 'appov2',
      buss: 'buss2',
      log: 'log2'
    },
    task2: {
      buss: 'buss2',
      log: 'log2'
    }
  },
  process2: {
    task3: {
      head: 'head1',
      appov: 'appov1',
      buss: 'buss1',
      log: 'log1'
    },
    task4: {
      buss: 'buss1',
      log: 'log1'
    }
  }

}


function getcomp(config) {
  let taskcomp = {}
  let compNames = []
  for (let process in config) {
    for (let task in config[process]) {
      compNames.push(...Object.values(config[process][task]))
    }
  }
  [...new Set(compNames)].forEach(name => {
    taskcomp[name] = () => import(`./reads/${name}.vue`)
  })
  return taskcomp
}

const taskcomp = getcomp(config)


export default config
export { taskcomp }
