'use strict';
Package.describe({
    summary: 'x-editable in a Blaze template, taking care of reactive updates to x-editable automatically',
    version: '1.0.0',
    git: 'https://github.com/davidworkman9/x-editable-reactive-template.git',
    name: 'workman:x-editable-reactive-template'
});

Package.on_use(function (api) {
    api.use([
        'templating'
    ], 'client');

    api.use([
        'natestrauser:x-editable-bootstrap'
    ], 'client', { weak: true });

    api.addFiles([
        'main.html',
        'main.js'
    ], 'client');
});