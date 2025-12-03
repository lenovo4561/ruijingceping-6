/**
 * 情感测试数据（10套）
 * 统一评分规则：每题A选项得4分，B选项得3分，C选项得2分，D选项得1分
 * 总分5-20分，分段：16-20分（优秀）、12-15分（良好）、8-11分（一般）、5-7分（待提升）
 */
const emotionTestData = [
  {
    id: 'qinggan_1',
    title: '恋爱中的安全感测试',
    questions: [
      {
        question: '伴侣晚归且未及时回复消息，你会？',
        options: [
          { label: 'A', text: '安心等待，相信对方忙完会联系', score: 4 },
          { label: 'B', text: '有点担心，发一条消息询问后耐心等待', score: 3 },
          { label: 'C', text: '频繁发消息、打电话，内心焦虑不安', score: 2 },
          { label: 'D', text: '直接认定对方不在乎自己，心生怨气', score: 1 }
        ]
      },
      {
        question: '当伴侣夸其他异性时，你会觉得？',
        options: [
          { label: 'A', text: '正常社交表达，不影响彼此感情', score: 4 },
          { label: 'B', text: '稍微留意，但相信伴侣的忠诚度', score: 3 },
          { label: 'C', text: '心里不舒服，怀疑伴侣对自己的感情', score: 2 },
          { label: 'D', text: '立刻反驳，认为伴侣是在暗示自己不好', score: 1 }
        ]
      },
      {
        question: '你们产生矛盾争吵后，你会？',
        options: [
          { label: 'A', text: '冷静后主动沟通，共同解决问题', score: 4 },
          { label: 'B', text: '等待对方先让步，但愿意配合沟通', score: 3 },
          { label: 'C', text: '冷战等待，担心对方不重视自己的感受', score: 2 },
          { label: 'D', text: '认为争吵就是感情破裂的信号，想逃避', score: 1 }
        ]
      },
      {
        question: '伴侣需要出差一周，你会？',
        options: [
          { label: 'A', text: '提前帮对方准备行李，约定空闲时视频', score: 4 },
          { label: 'B', text: '有点不舍，但会支持对方的工作', score: 3 },
          {
            label: 'C',
            text: '担心对方在外地照顾不好自己，也担心感情变淡',
            score: 2
          },
          { label: 'D', text: '觉得对方出差是故意疏远自己，情绪低落', score: 1 }
        ]
      },
      {
        question: '当你向伴侣倾诉烦恼时，对方反应平淡，你会？',
        options: [
          { label: 'A', text: '理解对方可能疲惫，换个时间再沟通', score: 4 },
          { label: 'B', text: '稍微有点失落，但会询问对方的状态', score: 3 },
          { label: 'C', text: '觉得对方不关心自己，内心委屈', score: 2 },
          { label: 'D', text: '认定对方不爱自己了，不再愿意分享', score: 1 }
        ]
      }
    ],
    results: [
      {
        min: 16,
        max: 20,
        title: '安全感爆棚，情感内核稳定',
        desc:
          '你在恋爱中拥有极强的安全感，这源于你对自我价值的清晰认知和对伴侣的充分信任。你懂得尊重伴侣的独立性，也能清晰表达自己的需求，不会因外界的小波动就怀疑感情。'
      },
      {
        min: 12,
        max: 15,
        title: '安全感良好，偶有波动',
        desc:
          '你在恋爱中整体安全感充足，大多数时候能信任伴侣，但面对特殊情况时会产生轻微的焦虑。建议在产生疑虑时，直接向伴侣表达自己的感受，而非独自猜测。'
      },
      {
        min: 8,
        max: 11,
        title: '安全感不足，易产生焦虑',
        desc:
          '你在恋爱中安全感较为匮乏，容易因伴侣的一些细微行为就引发强烈的负面情绪。建议先学会关注自我成长，提升自我价值感，明白安全感更多源于自身而非他人。'
      },
      {
        min: 5,
        max: 7,
        title: '安全感严重缺失，情感易失衡',
        desc:
          '你在恋爱中存在严重的安全感问题，对伴侣极度不信任。建议暂时停下对感情的过度纠结，先进行自我探索，必要时可寻求心理咨询师的帮助。'
      }
    ]
  },
  {
    id: 'qinggan_2',
    title: '亲情联结深度测试',
    questions: [
      {
        question: '父母忘记你的生日，你会？',
        options: [
          { label: 'A', text: '主动提醒，顺便和父母约着吃饭', score: 4 },
          { label: 'B', text: '有点小失落，但知道父母可能忙碌', score: 3 },
          { label: 'C', text: '心里难过，觉得父母不够重视自己', score: 2 },
          { label: 'D', text: '很生气，认为父母根本不在乎自己', score: 1 }
        ]
      },
      {
        question: '父母反对你的职业选择，你会？',
        options: [
          { label: 'A', text: '耐心解释自己的规划，倾听父母的担忧', score: 4 },
          { label: 'B', text: '坚持自己的选择，但会安抚父母的情绪', score: 3 },
          { label: 'C', text: '和父母争吵，觉得他们不理解自己', score: 2 },
          { label: 'D', text: '冷战对抗，不再和父母谈论工作话题', score: 1 }
        ]
      },
      {
        question: '你多久和父母深入沟通一次生活琐事和内心想法？',
        options: [
          { label: 'A', text: '每周1-2次，主动分享和倾听', score: 4 },
          { label: 'B', text: '每月2-3次，父母询问时会详细说', score: 3 },
          { label: 'C', text: '只有遇到困难时才会说，平时很少沟通', score: 2 },
          { label: 'D', text: '几乎不沟通，觉得和父母没有共同语言', score: 1 }
        ]
      },
      {
        question: '父母身体不适但没告诉你，你偶然得知后会？',
        options: [
          {
            label: 'A',
            text: '立刻回家或联系照顾，之后提醒父母及时告知',
            score: 4
          },
          { label: 'B', text: '赶紧打电话询问细节，安排就医', score: 3 },
          {
            label: 'C',
            text: '有点埋怨父母隐瞒，同时担心他们的健康',
            score: 2
          },
          { label: 'D', text: '觉得父母不相信自己能承担，内心受伤', score: 1 }
        ]
      },
      {
        question: '你会主动为父母准备节日礼物或惊喜吗？',
        options: [
          {
            label: 'A',
            text: '每个重要节日都会，会根据父母需求挑选',
            score: 4
          },
          { label: 'B', text: '春节、生日等大节日会准备', score: 3 },
          { label: 'C', text: '父母提醒后才会准备，或者直接发红包', score: 2 },
          { label: 'D', text: '很少准备，觉得家人不用讲究这些形式', score: 1 }
        ]
      }
    ],
    results: [
      {
        min: 16,
        max: 20,
        title: '亲情联结深厚，相处和谐',
        desc:
          '你与父母之间建立了深厚且健康的亲情联结，懂得尊重父母的想法，也能清晰表达自己的需求。建议继续保持定期的深度沟通，多带父母体验新事物。'
      },
      {
        min: 12,
        max: 15,
        title: '亲情联结良好，偶有隔阂',
        desc:
          '你与父母的亲情基础稳固，总体相处融洽，但在面对分歧时偶尔会产生隔阂。建议在沟通时多倾听父母的担忧，用实际行动证明自己的规划。'
      },
      {
        min: 8,
        max: 11,
        title: '亲情联结薄弱，沟通匮乏',
        desc:
          '你与父母的亲情联结较为薄弱，日常沟通很少。建议从小事做起，如每天分享一件生活琐事、定期回家陪伴父母，慢慢打破沟通壁垒。'
      },
      {
        min: 5,
        max: 7,
        title: '亲情联结疏离，矛盾尖锐',
        desc:
          '你与父母的关系较为疏离，甚至存在尖锐的矛盾。建议放下过往的偏见，主动迈出沟通的第一步，若自行调解困难，可借助心理咨询。'
      }
    ]
  },
  {
    id: 'qinggan_3',
    title: '友情稳定性测试',
    questions: [
      {
        question: '好朋友有了新的亲密好友，减少了和你的联系，你会？',
        options: [
          { label: 'A', text: '为朋友开心，主动约朋友三人一起聚会', score: 4 },
          { label: 'B', text: '有点失落，但会尊重朋友的社交圈', score: 3 },
          { label: 'C', text: '担心朋友会疏远自己，刻意讨好维系', score: 2 },
          { label: 'D', text: '觉得朋友背叛自己，主动疏远对方', score: 1 }
        ]
      },
      {
        question: '你向朋友借一笔钱应急，朋友表示暂时无力帮忙，你会？',
        options: [
          { label: 'A', text: '表示理解，再找其他解决办法', score: 4 },
          { label: 'B', text: '有点失望，但知道朋友有难处', score: 3 },
          { label: 'C', text: '心里嘀咕，觉得朋友不够仗义', score: 2 },
          { label: 'D', text: '非常生气，认为关键时刻朋友靠不住', score: 1 }
        ]
      },
      {
        question: '朋友在众人面前无意间调侃了你的缺点，你会？',
        options: [
          { label: 'A', text: '当场幽默化解，事后和朋友轻松提及', score: 4 },
          { label: 'B', text: '当时有点尴尬，但事后不放在心上', score: 3 },
          { label: 'C', text: '心里不舒服，觉得朋友不尊重自己', score: 2 },
          { label: 'D', text: '当场反驳，和朋友争吵起来', score: 1 }
        ]
      },
      {
        question: '你和朋友因价值观产生分歧，你会？',
        options: [
          { label: 'A', text: '尊重彼此差异，求同存异', score: 4 },
          { label: 'B', text: '尝试理解对方的视角，保留自己的观点', score: 3 },
          { label: 'C', text: '努力说服对方，担心分歧影响感情', score: 2 },
          { label: 'D', text: '觉得无法沟通，逐渐疏远朋友', score: 1 }
        ]
      },
      {
        question: '好朋友遇到重大挫折（如失业、失恋），你会？',
        options: [
          {
            label: 'A',
            text: '主动陪伴，帮忙分析问题并提供实际支持',
            score: 4
          },
          { label: 'B', text: '经常打电话关心，听对方倾诉', score: 3 },
          {
            label: 'C',
            text: '想帮忙但不知道怎么做，只能说些安慰的话',
            score: 2
          },
          { label: 'D', text: '觉得对方负能量太重，尽量回避', score: 1 }
        ]
      }
    ],
    results: [
      {
        min: 16,
        max: 20,
        title: '友情经营能手，关系稳固长久',
        desc:
          '你非常擅长经营友情，能以开放和尊重的态度对待朋友的社交圈，在朋友遇到困难时主动提供支持。建议继续保持这种相处模式，让友情在双向奔赴中更长久。'
      },
      {
        min: 12,
        max: 15,
        title: '友情基础良好，相处有分寸',
        desc:
          '你与朋友的关系基础良好，能做到相互尊重和关心。建议在产生疑虑时，直接和朋友沟通自己的感受，避免因误解影响感情。'
      },
      {
        min: 8,
        max: 11,
        title: '友情维系被动，易产生裂痕',
        desc:
          '你在友情中较为被动，缺乏主动维系关系的意识。建议学会主动表达对朋友的关心，用包容代替指责，让友情更稳定。'
      },
      {
        min: 5,
        max: 7,
        title: '友情观念偏差，关系易破裂',
        desc:
          '你对友情的认知存在偏差，将朋友视为"专属品"。建议重新树立正确的友情观，明白友情的核心是尊重和包容，而非占有。'
      }
    ]
  },
  {
    id: 'qinggan_4',
    title: '自我情绪管理能力测试',
    questions: [
      {
        question: '工作中被领导当众批评，你会？',
        options: [
          { label: 'A', text: '认真倾听批评，事后反思改进', score: 4 },
          { label: 'B', text: '当场有点难堪，事后冷静分析问题', score: 3 },
          { label: 'C', text: '心里委屈，忍不住和同事抱怨', score: 2 },
          { label: 'D', text: '当场反驳领导，情绪激动', score: 1 }
        ]
      },
      {
        question: '计划好的事情突然被打乱，你会？',
        options: [
          { label: 'A', text: '迅速调整计划，寻找替代方案', score: 4 },
          { label: 'B', text: '有点烦躁，但会尽快适应变化', score: 3 },
          { label: 'C', text: '陷入焦虑，不知道该怎么办', score: 2 },
          { label: 'D', text: '抱怨不停，拒绝接受变化', score: 1 }
        ]
      },
      {
        question: '连续一周遭遇不顺心的事，你会？',
        options: [
          { label: 'A', text: '通过运动、听歌等方式调节，积极面对', score: 4 },
          { label: 'B', text: '向家人朋友倾诉，缓解情绪', score: 3 },
          { label: 'C', text: '情绪低落，做事提不起精神', score: 2 },
          { label: 'D', text: '变得暴躁，把情绪发泄到身边人身上', score: 1 }
        ]
      },
      {
        question: '和家人发生激烈争吵后，你会？',
        options: [
          { label: 'A', text: '冷静后主动道歉或和解，避免矛盾升级', score: 4 },
          { label: 'B', text: '等情绪平复后，和家人沟通感受', score: 3 },
          { label: 'C', text: '长时间冷战，不愿主动低头', score: 2 },
          { label: 'D', text: '记恨家人，翻旧账加剧矛盾', score: 1 }
        ]
      },
      {
        question: '看到别人比自己优秀，你会？',
        options: [
          { label: 'A', text: '把对方当作榜样，努力提升自己', score: 4 },
          { label: 'B', text: '有点羡慕，但会专注于自己的进度', score: 3 },
          { label: 'C', text: '心里嫉妒，觉得自己运气不好', score: 2 },
          { label: 'D', text: '诋毁对方，认为对方的成功不光彩', score: 1 }
        ]
      }
    ],
    results: [
      {
        min: 16,
        max: 20,
        title: '情绪管理大师，心态成熟稳定',
        desc:
          '你拥有极强的自我情绪管理能力，能快速识别并接纳自己的情绪，无论是正面还是负面情绪，都能合理调节。建议继续保持这种能力，同时可分享自己的情绪调节方法。'
      },
      {
        min: 12,
        max: 15,
        title: '情绪管理良好，偶有失控',
        desc:
          '你整体的情绪管理能力较好，大多数时候能理性应对情绪。建议在情绪激动时，先通过深呼吸、暂时离开现场等方式平复情绪，再处理问题。'
      },
      {
        min: 8,
        max: 11,
        title: '情绪调节不足，易受外界影响',
        desc:
          '你的情绪调节能力较为薄弱，容易被外界事件左右。建议学习一些基础的情绪调节技巧，如运动、冥想、写情绪日记等。'
      },
      {
        min: 5,
        max: 7,
        title: '情绪管理失控，影响生活质量',
        desc:
          '你存在严重的情绪管理问题，无法控制自己的情绪。建议高度重视这个问题，尽快寻求专业心理咨询师的帮助。'
      }
    ]
  },
  {
    id: 'qinggan_5',
    title: '婚姻幸福感测试',
    questions: [
      {
        question: '你和配偶每天会有多少高质量的交流？',
        options: [
          { label: 'A', text: '30分钟以上，每天都会主动交流', score: 4 },
          { label: 'B', text: '15-30分钟，睡前或饭后会聊天', score: 3 },
          {
            label: 'C',
            text: '偶尔交流，大多是关于孩子或家务的琐事',
            score: 2
          },
          { label: 'D', text: '几乎不交流，各做各的事', score: 1 }
        ]
      },
      {
        question: '配偶为你做了一件小事（如倒杯水），你会？',
        options: [
          {
            label: 'A',
            text: '及时表达感谢，也会主动为对方做类似的事',
            score: 4
          },
          { label: 'B', text: '心里开心，会用行动回应', score: 3 },
          { label: 'C', text: '觉得是理所当然，很少回应', score: 2 },
          { label: 'D', text: '觉得对方是在敷衍，不领情', score: 1 }
        ]
      },
      {
        question: '你们面对家庭重大决策时，会？',
        options: [
          { label: 'A', text: '共同商量，充分尊重彼此的意见', score: 4 },
          { label: 'B', text: '一方主导，另一方会提出自己的想法', score: 3 },
          { label: 'C', text: '一方独断，另一方只能被动接受', score: 2 },
          { label: 'D', text: '互相争执，谁也不愿让步', score: 1 }
        ]
      },
      {
        question: '你们多久会有一次二人世界？',
        options: [
          { label: 'A', text: '每月1-2次，主动安排二人时光', score: 4 },
          { label: 'B', text: '每季度1次，特殊节日会庆祝', score: 3 },
          { label: 'C', text: '很少有，总是被家庭琐事占据', score: 2 },
          { label: 'D', text: '从来没有，觉得没必要', score: 1 }
        ]
      },
      {
        question: '当配偶犯错时，你会？',
        options: [
          { label: 'A', text: '委婉指出，一起分析原因并改正', score: 4 },
          { label: 'B', text: '直接指出问题，希望对方改进', score: 3 },
          { label: 'C', text: '不停指责，翻旧账', score: 2 },
          { label: 'D', text: '冷战不理，让对方自行反省', score: 1 }
        ]
      }
    ],
    results: [
      {
        min: 16,
        max: 20,
        title: '婚姻幸福美满，经营能力出色',
        desc:
          '你拥有极高的婚姻经营能力，与配偶之间建立了深厚的情感联结和良好的沟通模式。建议继续保持这种状态，定期和配偶回顾婚姻中的美好瞬间。'
      },
      {
        min: 12,
        max: 15,
        title: '婚姻质量良好，偶有摩擦',
        desc:
          '你的婚姻整体质量良好，夫妻关系稳定。建议增加夫妻间的高质量交流时间，主动为对方准备小惊喜，让婚姻更甜蜜。'
      },
      {
        min: 8,
        max: 11,
        title: '婚姻幸福感不足，沟通存在障碍',
        desc:
          '你的婚姻幸福感较为匮乏，夫妻间的沟通很少。建议夫妻双方共同参与婚姻咨询，学习有效的沟通技巧。'
      },
      {
        min: 5,
        max: 7,
        title: '婚姻关系紧张，濒临危机',
        desc:
          '你的婚姻关系非常紧张，夫妻间缺乏基本的尊重和沟通。建议立即停止负面的相处模式，共同寻求专业婚姻咨询师的帮助。'
      }
    ]
  }
]

export default emotionTestData
