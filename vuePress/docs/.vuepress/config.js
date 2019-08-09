// dcos/.vuepress/config.js
module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    dest: './dist', // 设置输出目录
    base: '/', // 设置站点根路径
    // base: '/FF-blog/',      // 设置站点根路径
    repo: 'https://github.com/orere/FF-blog', // 添加 github 链接

    // 对于多级目录的侧边栏，我们需要用使用对象描述的写法，下面的 /git/ 表示在 git 目录，默认指向 /git/README.md 文件
    themeConfig: {
        sidebarDepth: 2,
        displayAllHeaders: true,
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
                    { text: 'vue', link: '/vue/one/' },
                    {
                        text: '选择语言',
                        items: [
                            { text: '简体中文', link: '/home/' },
                            { text: 'English', link: '/en/home/' }
                        ]
                    },
                ],
                sidebar: [
                    '/home/',
                    {
                        title: 'vue模块',
                        children: [
                            '/vue/',
                            '/vue/one',
                        ]
                    },
                    {
                        title: '日常懵逼的设计模式',
                        children: [
                            '/DesignPatterns/',
                        ]
                    },
                ],

            }
        }
    },
}