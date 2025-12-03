/**
 * 趣味测试数据（第6-10套）
 */
const interestTestData2 = [
  {
    id: 'quwei_6',
    title: '你的好奇心指数测试',
    questions: [
      {
        question: '遇到不懂的事物，你会？',
        options: [
          { label: 'A', text: '立刻查资料，直到弄懂', score: 4 },
          { label: 'B', text: '有兴趣会了解一下', score: 3 },
          { label: 'C', text: '不太在意，知道个大概就行', score: 2 },
          { label: 'D', text: '完全不关心', score: 1 }
        ]
      },
      {
        question: '对于新鲜事物，你的态度是？',
        options: [
          { label: 'A', text: '非常感兴趣，想要尝试', score: 4 },
          { label: 'B', text: '有选择地关注', score: 3 },
          { label: 'C', text: '观望为主，不急于尝试', score: 2 },
          { label: 'D', text: '不感兴趣，坚持旧的', score: 1 }
        ]
      },
      {
        question: '你会主动学习工作之外的知识吗？',
        options: [
          { label: 'A', text: '经常，涉猎广泛', score: 4 },
          { label: 'B', text: '偶尔，感兴趣的会学', score: 3 },
          { label: 'C', text: '很少，觉得没必要', score: 2 },
          { label: 'D', text: '从不，工作已经够累了', score: 1 }
        ]
      },
      {
        question: '看到有趣的现象，你会？',
        options: [
          { label: 'A', text: '思考背后的原因和原理', score: 4 },
          { label: 'B', text: '觉得有趣，但不深究', score: 3 },
          { label: 'C', text: '看看就过了', score: 2 },
          { label: 'D', text: '不会注意到', score: 1 }
        ]
      },
      {
        question: '你的阅读习惯是？',
        options: [
          { label: 'A', text: '广泛阅读，各类书籍都看', score: 4 },
          { label: 'B', text: '有选择地阅读', score: 3 },
          { label: 'C', text: '很少阅读', score: 2 },
          { label: 'D', text: '几乎不阅读', score: 1 }
        ]
      }
    ],
    results: [
      {
        min: 16,
        max: 20,
        title: '好奇心爆棚',
        desc:
          '你拥有强烈的好奇心，对世界充满探索欲。这种特质让你知识丰富，思维活跃。保持好奇心，它是创新的源泉。'
      },
      {
        min: 12,
        max: 15,
        title: '好奇心良好',
        desc:
          '你具备良好的好奇心，能对感兴趣的事物深入了解。建议拓宽兴趣范围，保持学习的热情。'
      },
      {
        min: 8,
        max: 11,
        title: '好奇心一般',
        desc:
          '你的好奇心有待激发，可能对很多事物不太感兴趣。建议培养探索精神，多问"为什么"。'
      },
      {
        min: 5,
        max: 7,
        title: '好奇心较弱',
        desc:
          '你可能对新事物缺乏兴趣，生活比较单调。建议尝试接触新领域，重新点燃好奇心。'
      }
    ]
  },
  {
    id: 'quwei_7',
    title: '你的运动热情测试',
    questions: [
      {
        question: '你每周运动的频率是？',
        options: [
          { label: 'A', text: '4次以上，运动是生活的一部分', score: 4 },
          { label: 'B', text: '2-3次，保持基本运动量', score: 3 },
          { label: 'C', text: '偶尔运动，不太规律', score: 2 },
          { label: 'D', text: '几乎不运动', score: 1 }
        ]
      },
      {
        question: '对于运动，你的态度是？',
        options: [
          { label: 'A', text: '热爱，运动让我快乐', score: 4 },
          { label: 'B', text: '认为有必要，会坚持', score: 3 },
          { label: 'C', text: '知道应该运动，但懒得动', score: 2 },
          { label: 'D', text: '讨厌运动', score: 1 }
        ]
      },
      {
        question: '你会尝试新的运动项目吗？',
        options: [
          { label: 'A', text: '经常尝试，喜欢挑战', score: 4 },
          { label: 'B', text: '偶尔尝试，有兴趣的会学', score: 3 },
          { label: 'C', text: '很少，只做熟悉的运动', score: 2 },
          { label: 'D', text: '不会，不喜欢运动', score: 1 }
        ]
      },
      {
        question: '运动后的感觉是？',
        options: [
          { label: 'A', text: '神清气爽，充满能量', score: 4 },
          { label: 'B', text: '有点累但很舒服', score: 3 },
          { label: 'C', text: '很累，不想再动', score: 2 },
          { label: 'D', text: '不运动，不知道', score: 1 }
        ]
      },
      {
        question: '你会为了运动调整生活安排吗？',
        options: [
          { label: 'A', text: '会，运动是优先事项', score: 4 },
          { label: 'B', text: '尽量安排，但不强求', score: 3 },
          { label: 'C', text: '有空才运动', score: 2 },
          { label: 'D', text: '不会专门安排', score: 1 }
        ]
      }
    ],
    results: [
      {
        min: 16,
        max: 20,
        title: '运动达人',
        desc:
          '你是运动爱好者，运动已经成为生活的一部分。你的运动习惯让你保持健康和活力。继续保持！'
      },
      {
        min: 12,
        max: 15,
        title: '运动良好',
        desc:
          '你具备基本的运动习惯，能保持一定的运动量。建议增加运动频率，尝试更多运动项目。'
      },
      {
        min: 8,
        max: 11,
        title: '运动一般',
        desc:
          '你的运动量不足，可能比较懒或没有养成习惯。建议从简单的运动开始，逐步培养运动习惯。'
      },
      {
        min: 5,
        max: 7,
        title: '运动缺乏',
        desc:
          '你几乎不运动，这对健康不利。建议立即开始运动，哪怕每天走路30分钟也是好的开始。'
      }
    ]
  },
  {
    id: 'quwei_8',
    title: '你的音乐品味测试',
    questions: [
      {
        question: '你听音乐的频率是？',
        options: [
          { label: 'A', text: '每天都听，音乐是生活必需品', score: 4 },
          { label: 'B', text: '经常听，放松时会听', score: 3 },
          { label: 'C', text: '偶尔听，不是特别需要', score: 2 },
          { label: 'D', text: '很少听音乐', score: 1 }
        ]
      },
      {
        question: '你的音乐口味是？',
        options: [
          { label: 'A', text: '广泛，各种类型都能欣赏', score: 4 },
          { label: 'B', text: '有偏好，但也接受其他类型', score: 3 },
          { label: 'C', text: '只听固定的几种类型', score: 2 },
          { label: 'D', text: '对音乐类型没概念', score: 1 }
        ]
      },
      {
        question: '听到好听的音乐，你会？',
        options: [
          { label: 'A', text: '深入了解歌手和专辑', score: 4 },
          { label: 'B', text: '收藏起来反复听', score: 3 },
          { label: 'C', text: '听听就过了', score: 2 },
          { label: 'D', text: '不太会注意', score: 1 }
        ]
      },
      {
        question: '你会去听演唱会或音乐节吗？',
        options: [
          { label: 'A', text: '经常去，非常享受现场', score: 4 },
          { label: 'B', text: '偶尔去，喜欢的歌手会去', score: 3 },
          { label: 'C', text: '很少去，觉得没必要', score: 2 },
          { label: 'D', text: '从不去', score: 1 }
        ]
      },
      {
        question: '音乐对你来说是？',
        options: [
          { label: 'A', text: '精神食粮，不可或缺', score: 4 },
          { label: 'B', text: '放松的方式之一', score: 3 },
          { label: 'C', text: '背景音，有没有都行', score: 2 },
          { label: 'D', text: '噪音，不喜欢', score: 1 }
        ]
      }
    ],
    results: [
      {
        min: 16,
        max: 20,
        title: '音乐发烧友',
        desc:
          '你是音乐的忠实爱好者，音乐是你生活中不可或缺的一部分。你的音乐品味丰富，能从音乐中获得极大的愉悦。'
      },
      {
        min: 12,
        max: 15,
        title: '音乐爱好者',
        desc:
          '你喜欢音乐，能从中获得放松和愉悦。建议拓宽音乐类型，发现更多好音乐。'
      },
      {
        min: 8,
        max: 11,
        title: '音乐一般',
        desc:
          '你对音乐的兴趣一般，可能没有深入了解。建议尝试不同类型的音乐，找到自己的喜好。'
      },
      {
        min: 5,
        max: 7,
        title: '音乐冷淡',
        desc:
          '你对音乐不太感兴趣。建议尝试听一些轻音乐或流行音乐，也许会发现音乐的魅力。'
      }
    ]
  },
  {
    id: 'quwei_9',
    title: '你的美食态度测试',
    questions: [
      {
        question: '对于吃饭，你的态度是？',
        options: [
          { label: 'A', text: '美食是人生一大乐趣', score: 4 },
          { label: 'B', text: '喜欢吃好吃的，但不强求', score: 3 },
          { label: 'C', text: '填饱肚子就行', score: 2 },
          { label: 'D', text: '吃饭是任务，越快越好', score: 1 }
        ]
      },
      {
        question: '你会为了美食专门去一个地方吗？',
        options: [
          { label: 'A', text: '经常，为了美食可以跑很远', score: 4 },
          { label: 'B', text: '偶尔，特别想吃的会去', score: 3 },
          { label: 'C', text: '很少，就近解决', score: 2 },
          { label: 'D', text: '不会，太麻烦', score: 1 }
        ]
      },
      {
        question: '尝试新餐厅或新菜品，你会？',
        options: [
          { label: 'A', text: '非常乐意，喜欢探索', score: 4 },
          { label: 'B', text: '愿意尝试，但也吃熟悉的', score: 3 },
          { label: 'C', text: '比较保守，不太愿意尝试', score: 2 },
          { label: 'D', text: '只吃固定的几样', score: 1 }
        ]
      },
      {
        question: '你会自己做饭吗？',
        options: [
          { label: 'A', text: '经常做，享受烹饪的过程', score: 4 },
          { label: 'B', text: '偶尔做，简单的会做', score: 3 },
          { label: 'C', text: '很少做，主要靠外卖', score: 2 },
          { label: 'D', text: '不会做饭', score: 1 }
        ]
      },
      {
        question: '吃到好吃的东西，你会？',
        options: [
          { label: 'A', text: '研究怎么做，分享给朋友', score: 4 },
          { label: 'B', text: '记住这家店，下次再来', score: 3 },
          { label: 'C', text: '觉得好吃，但不会特意记', score: 2 },
          { label: 'D', text: '吃完就忘了', score: 1 }
        ]
      }
    ],
    results: [
      {
        min: 16,
        max: 20,
        title: '美食家',
        desc:
          '你是真正的美食爱好者，对美食有着极高的热情和追求。美食是你生活中重要的快乐来源。'
      },
      {
        min: 12,
        max: 15,
        title: '美食爱好者',
        desc:
          '你喜欢美食，能欣赏好吃的东西。建议多尝试不同的美食，丰富味蕾体验。'
      },
      {
        min: 8,
        max: 11,
        title: '美食一般',
        desc:
          '你对美食的兴趣一般，吃饭更多是为了填饱肚子。建议偶尔犒劳自己，享受美食的乐趣。'
      },
      {
        min: 5,
        max: 7,
        title: '美食冷淡',
        desc:
          '你对美食不太感兴趣，可能错过了很多美味。建议尝试关注食物的味道，发现吃的乐趣。'
      }
    ]
  },
  {
    id: 'quwei_10',
    title: '你的宠物主人潜质测试',
    questions: [
      {
        question: '你对养宠物的态度是？',
        options: [
          { label: 'A', text: '非常想养，已经养了或正在准备', score: 4 },
          { label: 'B', text: '喜欢宠物，条件允许会养', score: 3 },
          { label: 'C', text: '无所谓，养不养都行', score: 2 },
          { label: 'D', text: '不想养，觉得麻烦', score: 1 }
        ]
      },
      {
        question: '如果养宠物，你会选择？',
        options: [
          { label: 'A', text: '根据自己的生活方式选择合适的', score: 4 },
          { label: 'B', text: '选择流行的或可爱的', score: 3 },
          { label: 'C', text: '随便养一个', score: 2 },
          { label: 'D', text: '不会养', score: 1 }
        ]
      },
      {
        question: '养宠物前，你会做哪些准备？',
        options: [
          { label: 'A', text: '详细了解习性，准备好用品和环境', score: 4 },
          { label: 'B', text: '简单了解，买些基本用品', score: 3 },
          { label: 'C', text: '不太准备，养着再说', score: 2 },
          { label: 'D', text: '不会养', score: 1 }
        ]
      },
      {
        question: '宠物生病了，你会？',
        options: [
          { label: 'A', text: '立即带去看医生，不惜花费', score: 4 },
          { label: 'B', text: '先观察，严重了再去医院', score: 3 },
          { label: 'C', text: '自己买药治疗', score: 2 },
          { label: 'D', text: '不管它，让它自己好', score: 1 }
        ]
      },
      {
        question: '你愿意为宠物付出多少时间和精力？',
        options: [
          { label: 'A', text: '很多，宠物是家人', score: 4 },
          { label: 'B', text: '一定的时间，但不能影响工作', score: 3 },
          { label: 'C', text: '很少，没太多时间', score: 2 },
          { label: 'D', text: '不愿意付出', score: 1 }
        ]
      }
    ],
    results: [
      {
        min: 16,
        max: 20,
        title: '完美宠物主人',
        desc:
          '你具备成为优秀宠物主人的潜质，有爱心、有责任感、愿意付出。你的宠物一定会很幸福。'
      },
      {
        min: 12,
        max: 15,
        title: '合格宠物主人',
        desc:
          '你基本具备养宠物的条件和意愿。建议在养宠物前充分了解，确保能给宠物好的生活。'
      },
      {
        min: 8,
        max: 11,
        title: '宠物主人潜质一般',
        desc:
          '你对养宠物的热情和准备不足。建议慎重考虑是否养宠物，避免因准备不足而伤害宠物。'
      },
      {
        min: 5,
        max: 7,
        title: '不适合养宠物',
        desc:
          '你目前不适合养宠物，缺乏养宠物的意愿和条件。建议等条件成熟后再考虑。'
      }
    ]
  }
]

export default interestTestData2
