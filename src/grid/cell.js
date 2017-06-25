export default {
    name: 'gridCell',
    render: function (h) {
        var self = this
        if (this.edit) {
            window.vue = this
            this.$el.focus()
            return h('el-' + this.type, {
                props: Object.assign({ value: this.value ,autofocus:true}, this.option.editOp),
                
                // domProps: {
                //     'value': self.value
                // },
                style: { width: '100%' },
                on: {
                    'input': (value) => { this.$emit('input', value) },
                    'blur': () => { this.type==='input'? this.edit = false:null; console.log(this.edit) },
                    'change':()=>{this.type!=='input'?this.edit = false:null}
                },
                // nativeOn :{
                //     'blur': () => { this.edit = false; console.log(this.edit) }
                // }
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
            return h('div', {
                domProps: {
                    'innerHTML': self.value
                },
                on: {
                    'click': () => { this.edit = true }
                },
                // nativeOn :{
                //     'blur': () => { this.edit = false; console.log(this.edit) }
                // },
                style: { width: '100%' ,height:'inherit'},
            })
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
    }
}