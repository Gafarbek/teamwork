export const routes = [
    {
        path: /^\/signin$/,
        view: async (app) => {
            const response = await fetch('src/pages/signin/index.html');

            app.innerHTML = await response.text();
        },
        loadStyles: async () => {
            await import('../pages/signin/styles/index.css');
        },
        loadScripts: async () => {
            await import('../pages/signin/scripts/index.js');
        }
    },
    {
        path: /^\/signup$/,
        view: async (app) => {
            const response = await fetch('src/pages/signup/index.html');

            app.innerHTML = await response.text();
        },
        loadStyles: async () => {
            await import('../pages/signup/styles/index.css');
        },
        loadScripts: async () => {
            await import('../pages/signup/scripts/index.js');
        }
    },
    {
        path: /^\/$/,
        view: async (app) => {
            const response = await fetch('src/pages/home/index.html');

            app.innerHTML = await response.text();
        },
        loadStyles: async () => {
            await import('../pages/home/styles/index.css');
        },
        loadScripts: async () => {
            await import('../pages/home/scripts/index.js');
        }
    },
    {
        path: /^\/account$/,
        view: async (app) => {
            const response = await fetch('src/pages/account/index.html');

            app.innerHTML = await response.text();
        },
        loadStyles: async () => {
            await import('../pages/account/styles/index.css');
        },
        loadScripts: async () => {
            await import('../pages/account/scripts/index.js');
        }
    },
    {
        path: /^\/blog\/(.+)$/,
        view: async (app, match) => {
            const postId = match[1];
            const { data } = await useService('blogs').get(postId);
    
            const html = `
                <div class="post-page">
                    <h1>${data.title}</h1>
                    <img src="${data.img}" />
                    <p>${data.description}</p>
                    <p>${data.content}</p>
                </div>
            `;
    
            app.innerHTML = html;
        },
        loadStyles: async () => {
            // можешь импортировать отдельные стили
        },
        loadScripts: async () => {
            // если нужно
        }
    }
    
];