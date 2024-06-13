// ==UserScript==
// @name         一键打开360夸克所有资产
// @namespace    http://tampermonkey.net/
// @version      2024-06-13
// @description  一键打开360夸克所有资产，为mj老板定制！
// @author       Tajang
// @match        https://quake.360.net/quake/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=360.net
// @grant        none
// @license      GPL-3.0
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('load', function() {
        console.log("为mj老板定制！");
        const outputButton = document.querySelector('.picker-box button');
        const preposition = document.querySelector('.model-box');
        // const preButton = document.querySelector('.btn-prev');
        // const parentElement = document.querySelector('.is-background')

        if (outputButton) {
            const openButton = outputButton.cloneNode(true);
            openButton.innerHTML = '打开全部资产';
            openButton.type = 'button';
            openButton.style.marginLeft = '1em';
            openButton.addEventListener('click', function() {
                // 使用 querySelectorAll 方法获取具有类名 'item-top-line' 的所有元素
                var itemTopLineElements = document.querySelectorAll('.item-top-line');

                // 遍历每个 'item-top-line' 元素
                itemTopLineElements.forEach(function(itemTopLine) {
                    // 在每个 'item-top-line' 元素中查找所有的 <a> 标签
                    var aElements = itemTopLine.querySelectorAll('a');
                    
                    // 遍历每个 <a> 元素
                    aElements.forEach(function(a) {
                        // 对每个 <a> 元素进行操作
                        console.log(a); // 输出 <a> 元素
                        // 如果你想在新标签页中打开链接，可以这样做：
                        window.open(a.href, '_blank');
                    });
                });
            });
            preposition.appendChild(openButton);
            // const openButton2=openButton.cloneNode(true)
            // parentElement.insertBefore(openButton2,preButton);
        }
    });
})();
