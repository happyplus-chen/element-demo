
<script>
export default {
    data() {
        return {
            author: "微信公众号 jinkey-love",
            articles: [],
            level: 3
        }
    },
    render: function (createElement) {
        return createElement(
            // {String | Object | Function}
            // 一个 HTML 标签，组件选项，或一个函数
            // 必须 Return 上述其中一个
            'div',
            // {Object}
            // 一个对应属性的数据对象
            // 您可以在 template 中使用.可选项.
            {
                // (下一章，将详细说明相关细节)
                attrs: {
                    id: 'testid1'
                }
            },
            // {String | Array}
            // 子节点(VNodes). 可选项.
            [
                createElement('h1', 'hello world'),
                createElement('div', {
                    attrs: {
                        id: 'testid2'
                    }
                }, [
                        createElement('div', 'im leve3-a'),
                        createElement('div', 'im leve3-b', [
                            createElement('div', 'im leve4-a')
                        ])
                    ]
                ),
                'bar'
            ]
        )
    },
    // props: {
    //     level: {
    //         type: Number,
    //         required: true,
    //         default: 'test6'
    //     }
    // }
}
</script>
