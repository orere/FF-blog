// dcos/.vuepress/config.js
module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    dest: './dist', // 设置输出目录
    base: '/', // 设置站点根路径
    // base: '/FF-blog/',      // 设置站点根路径
    repo: 'https://github.com/orere/FF-blog', // 添加 github 链接
    // themeConfig: {
    //     // 添加导航栏
    //     nav: [
    //         { text: 'vue', link: '/' },
    //         { text: 'css', link: '/blog/' },
    //         { text: 'js', link: '/zhihu/' },
    //         {
    //             text: 'github',
    //             // 这里是下拉列表展现形式。
    //             items: [
    //             { text: 'focus-outside', link: 'https://github.com/TaoXuSheng/focus-outside' },
    //             { text: 'stylus-converter', link: 'https://github.com/TaoXuSheng/stylus-converter' },
    //             ]
    //         }
    //     ],
    //     // 为以下路由添加侧边栏
    //     sidebar: ['/', '/git', '/vue']
    // },

    // 对于多级目录的侧边栏，我们需要用使用对象描述的写法，下面的 /git/ 表示在 git 目录，默认指向 /git/README.md 文件
    themeConfig: {
        // sidebar: {
        //     '/vue/': [
        //         'one',
        //     ],
        //     '/js/': [
        //         'one',
        //         'four'
        //     ]
        // },
        // sidebar: 'auto',
        locales: {
            '/en/': {
                selectText: 'Languages',
                label: 'English',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                algolia: {},
                nav: [
                    {
                        text: 'Languages',
                        items: [
                            { text: '简体中文', link: '/home/' },
                            { text: 'English', link: '/en/home/' }
                        ]
                    },
                    { text: 'vue', link: '/en/vue/one' },
                ],
                // sidebar: {
                //     '/en/': [ /* ... */ ],
                //     '/vue/one': 'vue/one/',
                // }
                sidebar: 'auto'
            },
            '/': {
                // 多语言下拉菜单的标题
                selectText: '选择语言',
                // 该语言在下拉菜单中的标签
                label: '简体中文',
                // 编辑链接文字
                editLinkText: '在 GitHub 上编辑此页',
                // Service Worker 的配置
                serviceWorker: {
                    updatePopup: {
                        message: "发现新内容可用.",
                        buttonText: "刷新"
                    }
                },
                // 当前 locale 的 algolia docsearch 选项
                algolia: {},
                nav: [
                    {
                        text: '选择语言',
                        items: [
                            { text: '简体中文', link: '/home/' },
                            { text: 'English', link: '/en/home/' }
                        ]
                    },
                    { text: 'vue', link: '/vue/one/' },
                ],
                sidebar: [
                    {
                        title: 'home',
                        // collapsable: false,
                        children: [
                            '/home/',
                        ]
                        // '/':[],
                        // '/home/': [],
                        // '/vue/': [
                        //     'one',
                        // ],
                        // '/js/': [
                        //     'one',
                        // ],
                    },
                    {
                        title: 'vue',
                        // collapsable: false,
                        children: [
                            ['/vue','one']
                        ]
                    },
                    // {
                    //     title: 'js',
                    //     // collapsable: false,
                    //     children: [
                    //         '/js/','/js/one/'
                    //     ]
                    // },

                ],
                // sidebar: 'auto',
            }
        }
    },

    // locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        // '/': {
        //     lang: 'zh-CN',
        //     title: 'VuePress',
        //     description: 'Vue 驱动的静态网站生成器'
        // },
        // '/en': {
        //     lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
        //     title: 'VuePress',
        //     description: 'Vue-powered Static Site Generator'
        // },
    // }
}