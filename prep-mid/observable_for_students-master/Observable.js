class NewsPaper {
    constructor(name) {
        this.name = name
    }
     publishNews(news) {
         console.log(this.name + ':' + news)
     }
}

class NewsObservable {
    constructor() {
        this.subscribers = []
    }

    subscribe(sub) {
        this.subscribers.push(sub)
    }

    unsubscribe(exSub) {
        this.subscribers = this.subscribers.filter(subscriber => subscriber !== exSub)
    }

    notify(news) {
        this.subscribers.forEach(sub => sub.publishNews(news))
    }
}

const NewsCNN = new NewsObservable();

const tengriNews = new NewsPaper('tengriNews');
const times = new NewsPaper('times');
const moyaSemiya = new NewsPaper('moyaSemiya');

NewsCNN.subscribe(tengriNews)
NewsCNN.subscribe(times)
NewsCNN.subscribe(moyaSemiya)

NewsCNN.notify('ШОК!!! МЫ НАПИСАЛИ ПАТТЕРН')
NewsCNN.notify('Новость 2')

NewsCNN.unsubscribe(moyaSemiya)

NewsCNN.notify('Без Моей Семьи(((')

let oldSubs = ['tengriNews', 'times', 'moyaSemiya']
oldSubs = ['tengriNews', 'times']
