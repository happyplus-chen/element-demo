import Vue from 'vue'
import Hello from 'src/components/element'

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const dom = document.createElement('div')
    document.body.appendChild(dom)
    dom.id='testDom'

    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount('#testDom')
    
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
