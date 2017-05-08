
    //封装函数
    var animation = {
        animate: function (el, properties, fn) {
            clearInterval(el.timer);
            el.timer = setInterval(function () {
                var allToTarget = true;
                for (var prop in properties) {
                    var current;
                    if (prop === 'opacity') {
                        current = Math.round(parseFloat(animation.getStyle(el, prop)) * 100);
                    } else {
                        current = parseInt(animation.getStyle(el, prop));
                    }
                    var target = properties[prop];
                    var speed = (target - current) / 70;
                    if (current !== target) {
                        allToTarget = false;
                    }
                    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                    if (prop === 'opacity') {
                        el.style.opacity = (current + speed) / 100;
                        el.style.filter = 'alpha(opacity:' + (current + speed) + ')';
                    } else {
                        el.style[prop] = current + speed + 'px';
                    }
                }
                if (allToTarget) {
                    clearInterval(el.timer);
                    if (typeof fn === "function") {
                        fn();
                    }
                }
            }, 15);
        },
        getStyle: function (el, prop) {
            if (el.currentStyle) {
                return el.currentStyle[prop];
            } else {
                return getComputedStyle(el)[prop];
            }
        }

};
