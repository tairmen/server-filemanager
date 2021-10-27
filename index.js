let config = {
    fsRoot: '/1/umdemo/api/public/uploads',
    rootName: 'Root folder',
    port: process.env.PORT || '3020',
    host: process.env.HOST || 'localhost'
};

let filemanager = require('@opuscapita/filemanager-server');
filemanager.server.run(config);