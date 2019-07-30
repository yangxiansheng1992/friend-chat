import Mock from 'mockjs';
import mockApiUrl from '../mock-config';

Mock.mock(`${mockApiUrl.meItemList}`, 'post', {
  'data': [
    {
      title: '读《必然》后感',
      img: Mock.Random.image(),
      time: Mock.Random.time('A HH:mm:ss'),
      id: 'read-BiRan',
      name: 'read-detail',
      detail: {
        head: '免费大行其道，怎么让用户掏钱呢？KK(凯文·凯利) 列举了几项原生性特征',
        list: [
          { name: '1,即时性（Immediacy）', text: '许多人会在首映式的时候前去电影院花大价钱看那些以后会通过下载和租赁方式变得免费，或者几乎免费的电影。从非常现实的角度来看，他们花钱购买的并不是电影（电影是“免费的”），而是即时看到最新的电影。' },
          { name: '2,个性化（Personalization）', text: '个性化要求是创造者与消费者、艺术家与粉丝、生产者与用户之间的不断对话。它是一种典型的原生性，因为它可以交互，是一种对时间的消费。营销人员将这种情况称为“粘性”，因为在这种关系中，双方都对原生资产有所投入，同时也不愿意移情别恋，更不愿意从头再来。这种关系的紧密程度，是无法通过复制粘贴得到的。' },
          { name: '3,解释性（Interpretation）', text: '有个老笑话是这么讲的：软件下载免费，用户手册一万美元。' },
          { name: '4,可靠性（Authenticity）', text: '你或许能免费获得一个流行的软件应用，但即便你不需要看说明书，你也得考虑这个软件有没有缺陷、是不是恶意程序或者垃圾软件。这种情况下，你会很高兴地为可靠性付钱。这样，你在使用软件时就会自由自在，脑袋里不用为别的事情操心。' },
          { name: '5,获取权（Accessibility）', text: '拥有往往是件烦人的事情。从某种程度上讲，iTunes通过云端提供的内容，就是在向你出售获取权。虽然可以从其他地方下载到免费版本，但你还是会为了方便地获取音乐而付费。你花钱购买的不是这些东西，而是简单获取的便利，以及不用再去维护的义务。' },
          { name: '6,实体化（Embodiment）', text: '在实体化的最佳案例方面，没有什么能比得上具有切真实体的音乐现场演出。在这种情况里，音乐是免费的，实体演出却是昂贵的。图书是免费的，但亲身与作者交谈是昂贵的。现场演出巡演、TED现场演讲、电台现场节目，甚至在你面前表演厨艺的厨师，都能展现出那些本可能免费下载到的事物，其实体化付费片段所具有的威力和价值。' },
          { name: '7,可赞助（patronage）', text: '从本质上讲，热心的受众和爱好者希望为创作者买单。爱好者们喜欢奖励，无论对方是艺术家、音乐家、作家、演员，还是其他创造欣赏价值的创造者，因为这能让爱好者们和倾慕的对象建立联系。但他们只在以下几种情况里才会买单：' },
          { name: '8,支付', text: '1支付方式必须超级简单；2支付金额必须合理；3可以看到支付后的收益；4花出去的钱必须让人感到能让创造者获益。' },
          { name: '9,可寻性（Discoverability）', text: '当世界上的图书、歌曲、电影、应用和其他所有事情都以数百万计（其中大部分都是免费的）争夺你的注意力的时候，能被寻找到就具有了价值。而鉴于被创造出来的作品每天都以爆发性的数字增长，能被寻找到就更成了难能之事。爱好者们会用很多方法从百亿千亿的产品中发掘出有价值的作品。他们利用评论、评测和品牌（出版商、厂牌、工作室），而越来越多地则依赖其他爱好者和朋友来推荐好东西。他们也越来越希望为引导买单。据说《电视指南》赚到的钱，比它提供指南的美国三大电视台赚到的还要多。你花钱购买的并不是复制品，而是能够找到想要物品的能力。' },
          { name: '10,使用', text: '对事物的占有不再像曾经那样重要，而对事物的使用则比以往更加重要。云端的一个核心优势在于它变得越来越大，我们的设备就变得越来越小巧轻薄。' },
          { name: '11,共享', text: '每个成功的无政府体系中总会存在一个长老会组织。蜂巢思维，大量的失控元素与少量自上而下的控制相结合，既愚笨，又足够聪明，可以胜任许多工作。虽然不能解决所有问题，但是是开始解决问题的最佳方式。' },
          {
            name: '12,追踪', text: '当匿名变成常态时，系统必然失败。充斥匿名者的社群要么自行毁灭，要么从完全匿名变成伪匿名状态。'
          },
          { name: '13,提问', text: '答案将变的廉价，而问题会更有价值。计算机是无用的，它们只能给你答案。' },
        ]
      }
    },
  ],
});