class NewsPaper {
    constructor(name) {
        this.name = name
    }

    publishNews(news) {
        console.log(this.name + ': ' + news)
    }
}

class itNewsObservable {
    constructor() {
        this.subscribers = []
    }

    subscribe(sub) {
        this.subscribers.push(sub)
    }

    unsubscribe(exSub) {
        function filterFunction(sub) {
            return sub !== exSub
        }
        this.subscribers = this.subscribers.filter(filterFunction)
    }

    notify(news) {
        this.subscribers.forEach(newsPaper => newsPaper.publishNews(news))
    }
}

const haudiHo = new itNewsObservable();

const alpha = new NewsPaper('alpha');
const gamma = new NewsPaper('gamma');
const beta = new NewsPaper('beta');

haudiHo.subscribe(alpha)
haudiHo.subscribe(gamma)
haudiHo.subscribe(beta)

haudiHo.notify('НОВОЕ ВИДЕО СОБРАЛ ДИНОЗАВРИКА 3Д')

haudiHo.unsubscribe(gamma)

haudiHo.notify('Жизнь без гаммы')
