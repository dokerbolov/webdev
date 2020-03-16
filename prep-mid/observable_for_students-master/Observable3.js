class NewsPaper {
    constructor(name) {
        this.name = name
    }

    publishNews(news) {
        console.log(this.name + ' : ' + news)
    }
}

class FashionNewsObservable {
    constructor() {
        this.subscribers = []
    }

    subscribe(sub) {
        this.subscribers.push(sub)
    }

    unsubscribe(exSub) {
        this.subscribers = this.subscribers.filter(sub => sub !== exSub)
    }

    notify(news) {
        this.subscribers.forEach(newsPaper => newsPaper.publishNews(news))
    }
}

const oriflame = new NewsPaper('oriflame');
const avon = new NewsPaper('avon');
const glamour = new NewsPaper('glamour');

const milano = new FashionNewsObservable()

/*
* milano.subsribers = []
* */

milano.subscribe(oriflame);
//milano.subsribers = [oriflame]
milano.subscribe(avon);
//milano.subsribers = [oriflame, avon]
milano.subscribe(glamour);
//milano.subsribers = [oriflame, avon]

milano.notify('Волк слабее льва и тигра, но в цирке не выступает');

milano.unsubscribe(oriflame);

milano.notify('Без Орифлейм(');
