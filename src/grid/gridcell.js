export default {
    name: 'gridCell',
    render: function (h) {
        var self = this
        debugger
        return h('el-' + this.type, {
            props: Object.assign({ value: this.value }, this.option.editOp),
            // domProps: {
            //     'value': self.value
            // },
            style: { width: '100%' },
            on: {
                'input': (value) => { this.$emit('input', value) }
            }
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
    },
    data() {
        return {
            // value:'fdsa'
        }
    },
    props: {
        type: {
            type: String,
            default: 'input'
        },
        value: '',
        option: {}
    }
}