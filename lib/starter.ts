// System.import('core.js');

System.map['crypto'] = '@empty';

System.import('core-js');
System.import('zone.js');
System.import('reflect-metadata');

System.import('app')
    .then(() => {
        console.log('App started');
    })
    .catch((err) => {
        console.error(err);
    });
