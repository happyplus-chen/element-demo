import Vue from 'vue'
import Validator from 'vue-validator'
Vue.use(Validator)
export default {
    name: 'gridCell',
    render: function (h) {
        var self = this
        if (this.edit) {
            this.$el.focus()
            return h('el-' + this.type, {
                props: Object.assign({ value: this.value, autofocus: true }, this.option.editOp),
                style: { width: '100%' },
                on: {
                    'input': (value) => { this.$emit('input', value); this.$emit('change', value, this) },
                    'change': () => { this.type !== 'input' ? this.edit = false : null }
                },
            }, [
                    this.type === 'select' && this.option.editOp.conf.map(item => {
                        return h('el-option', {
                            props: {
                                label: item.label,
                                value: item.value
                            }
                        })
                    })
                ])
        } else {
            // return h('div', {
            //     domProps: {
            //         'innerHTML': self.value
            //     },
            //     on: {
            //         'click': () => { this.edit = true }
            //     },
            //     style: { width: '100%', height: 'inherit' },
            // })
            return h(Vue.compile('<div><span style="color:red">11111</span></div>'))
        }

    },
    data() {
        return {
            edit: false
        }
    },
    props: {
        type: {
            type: String,
            default: 'input'
        },
        value: '',
        option: {}
    },
    mounted() {

    }
}