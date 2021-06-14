'use strict';

function loadScript(src, callback) {
    if (Array.isArray(src)) {
        for (let i = 0; i < src.length; i++) {
            let scriptArray = document.createElement('script');
            scriptArray.src = src[i];
            scriptArray.onload = callback;
            document.head.insertAdjacentElement("beforeend", scriptArray);
            console.log(`array item ${i+1}`)
        };
    } else if (typeof src === 'string') {
        let scriptStr = document.createElement('script');
        scriptStr.src = src;
        scriptStr.onload = callback;
        document.head.insertAdjacentElement("beforeend", scriptStr);
        console.log('string loaded');
    } else {
        console.log('smth else')
    };

};

loadScript('./common.js', () => {
    log();
    console.log('load index.js');
});

loadScript(['./common.js', './common2.js'], () => {
    console.log('array loaded')
});

loadScript(() => {
    return 'callback loaded';
});