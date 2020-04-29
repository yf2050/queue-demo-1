let divScreen = document.querySelector('#screen')
let btnCreateNumber = document.querySelector('#createNumber')
let btnCallNumber = document.querySelector('#callNumber')
let spanNewNumber = document.querySelector('#newNumber')
let spanQueue = document.querySelector('#queue')
let n = 0;
let queue = [];
//叫号点击事件
btnCreateNumber.onclick = () => {
    n += 1;
    spanNewNumber.innerText = n;
    queue.push.call(queue, n);
    //显示当前数组
    spanQueue.innerText = JSON.stringify(queue)
}
//取号点击事件
btnCallNumber.onclick = () => {
    //当没有号了，什么都不做
    if (queue.length === 0) {
        return;
    }
    //取出第一个数
    let m = queue.shift.call(queue);
    divScreen.innerText = '第' + m + '号顾客请就餐';
    //此时再次更新当前数目
    spanQueue.innerText = JSON.stringify(queue)
}