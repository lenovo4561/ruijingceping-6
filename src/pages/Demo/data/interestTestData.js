/**
 * 趣味测试数据（10套）
 * 评分规则：每题A选项得4分，B选项得3分，C选项得2分，D选项得1分
 * 总分5-20分，分段：16-20分（优秀）、12-15分（良好）、8-11分（一般）、5-7分（待提升）
 */
const interestTestData = [
  {
    id: 'quwei_1',
    title: '你的幽默感类型测试',
    questions: [
      {
        question: '朋友聚会时，你通常扮演什么角色？',
        options: [
          { label: 'A', text: '段子手，负责逗大家笑', score: 4 },
          { label: 'B', text: '捧哏，配合别人的笑话', score: 3 },
          { label: 'C', text: '安静的听众，偶尔笑笑', score: 2 },
          { label: 'D', text: '不太参与，觉得无聊', score: 1 }
        ]
      },
      {
        question: '遇到尴尬场面，你会？',
        options: [
          { label: 'A', text: '用幽默化解，让大家哈哈大笑', score: 4 },
          { label: 'B', text: '开个小玩笑缓解气氛', score: 3 },
          { label: 'C', text: '假装没发生，默默等待', score: 2 },
          { label: 'D', text: '更加尴尬，不知所措', score: 1 }
        ]
      },
      {
        question: '你喜欢什么类型的喜剧？',
        options: [
          { label: 'A', text: '脱口秀、相声等语言类', score: 4 },
          { label: 'B', text: '情景喜剧、搞笑电影', score: 3 },
          { label: 'C', text: '偶尔看看，不是特别喜欢', score: 2 },
          { label: 'D', text: '不喜欢喜剧', score: 1 }
        ]
      },
      {
        question: '别人讲冷笑话时，你会？',
        options: [
          { label: 'A', text: '秒懂笑点，还能接梗', score: 4 },
          { label: 'B', text: '能get到笑点，礼貌性笑笑', score: 3 },
          { label: 'C', text: '经常get不到笑点', score: 2 },
          { label: 'D', text: '觉得冷笑话很无聊', score: 1 }
        ]
      },
      {
        question: '你会主动讲笑话逗别人开心吗？',
        options: [
          { label: 'A', text: '经常，而且效果很好', score: 4 },
          { label: 'B', text: '偶尔，看场合和对象', score: 3 },
          { label: 'C', text: '很少，怕讲不好', score: 2 },
          { label: 'D', text: '从不，不擅长', score: 1 }
        ]
      }
    ],
    results: [
      {
        min: 16,
        max: 20,
        title: '幽默大师',
        desc:
          '你是天生的幽默大师，善于用语言和行为制造欢乐。你的幽默感让你在社交中如鱼得水，是朋友圈的开心果。'
      },
      {
        min: 12,
        max: 15,
        title: '幽默达人',
        desc:
          '你具备良好的幽默感，能在适当的时候展现幽默。建议多积累素材，让幽默更自然。'
      },
      {
        min: 8,
        max: 11,
        title: '幽默一般',
        desc:
          '你的幽默感有待开发，可能比较内敛或不善表达。建议多接触喜剧作品，培养幽默感。'
      },
      {
        min: 5,
        max: 7,
        title: '幽默细胞较少',
        desc:
          '你可能比较严肃，不太擅长幽默。建议放松心态，学会欣赏和制造轻松的氛围。'
      }
    ]
  },
  {
    id: 'quwei_2',
    title: '你的审美品味测试',
    questions: [
      {
        question: '选择家居装修风格，你会选？',
        options: [
          { label: 'A', text: '简约现代，注重设计感', score: 4 },
          { label: 'B', text: '温馨舒适，实用为主', score: 3 },
          { label: 'C', text: '随意搭配，不太讲究', score: 2 },
          { label: 'D', text: '无所谓，能住就行', score: 1 }
        ]
      },
      {
        question: '对于穿着打扮，你会？',
        options: [
          { label: 'A', text: '注重搭配，有自己的风格', score: 4 },
          { label: 'B', text: '追求整洁得体', score: 3 },
          { label: 'C', text: '舒服就好，不太在意搭配', score: 2 },
          { label: 'D', text: '完全不在意外表', score: 1 }
        ]
      },
      {
        question: '欣赏艺术作品时，你会？',
        options: [
          { label: 'A', text: '能感受到作品的美和内涵', score: 4 },
          { label: 'B', text: '觉得好看，但说不出为什么', score: 3 },
          { label: 'C', text: '看不太懂，但会尝试理解', score: 2 },
          { label: 'D', text: '完全不感兴趣', score: 1 }
        ]
      },
      {
        question: '拍照时，你会？',
        options: [
          { label: 'A', text: '注重构图、光线、角度', score: 4 },
          { label: 'B', text: '尽量拍好看，但不太专业', score: 3 },
          { label: 'C', text: '随手拍，记录就好', score: 2 },
          { label: 'D', text: '不喜欢拍照', score: 1 }
        ]
      },
      {
        question: '对于生活中的美，你会？',
        options: [
          { label: 'A', text: '经常发现并欣赏身边的美', score: 4 },
          { label: 'B', text: '偶尔会注意到', score: 3 },
          { label: 'C', text: '很少关注', score: 2 },
          { label: 'D', text: '觉得没什么美不美的', score: 1 }
        ]
      }
    ],
    results: [
      {
        min: 16,
        max: 20,
        title: '审美达人',
        desc:
          '你拥有出色的审美品味，善于发现和创造美。你的审美能力让生活更有品质。'
      },
      {
        min: 12,
        max: 15,
        title: '审美良好',
        desc:
          '你具备良好的审美意识，能欣赏美的事物。建议多接触艺术，进一步提升审美。'
      },
      {
        min: 8,
        max: 11,
        title: '审美一般',
        desc: '你的审美意识有待培养。建议多关注设计、艺术等领域，提升审美能力。'
      },
      {
        min: 5,
        max: 7,
        title: '审美待开发',
        desc: '你可能对美的事物不太敏感。建议从生活小事开始，培养发现美的眼睛。'
      }
    ]
  },
  {
    id: 'quwei_3',
    title: '你的冒险精神测试',
    questions: [
      {
        question: '有机会尝试蹦极，你会？',
        options: [
          { label: 'A', text: '迫不及待想要尝试', score: 4 },
          { label: 'B', text: '有点害怕，但愿意挑战', score: 3 },
          { label: 'C', text: '需要很大勇气才会尝试', score: 2 },
          { label: 'D', text: '绝对不会尝试', score: 1 }
        ]
      },
      {
        question: '旅行时，你更喜欢？',
        options: [
          { label: 'A', text: '探索未知的地方，越野越好', score: 4 },
          { label: 'B', text: '去热门景点，偶尔探索', score: 3 },
          { label: 'C', text: '跟团游，安全省心', score: 2 },
          { label: 'D', text: '不喜欢旅行，待在家里', score: 1 }
        ]
      },
      {
        question: '尝试新食物时，你会？',
        options: [
          { label: 'A', text: '什么都愿意尝试，越奇特越好', score: 4 },
          { label: 'B', text: '愿意尝试，但有底线', score: 3 },
          { label: 'C', text: '比较保守，只吃熟悉的', score: 2 },
          { label: 'D', text: '只吃固定的几种食物', score: 1 }
        ]
      },
      {
        question: '面对未知的挑战，你会？',
        options: [
          { label: 'A', text: '兴奋，迫不及待想要尝试', score: 4 },
          { label: 'B', text: '有点紧张，但愿意尝试', score: 3 },
          { label: 'C', text: '犹豫不决，需要很大鼓励', score: 2 },
          { label: 'D', text: '回避，不愿意冒险', score: 1 }
        ]
      },
      {
        question: '你的人生座右铭更接近？',
        options: [
          { label: 'A', text: '人生就是要不断挑战', score: 4 },
          { label: 'B', text: '适当冒险，把握机会', score: 3 },
          { label: 'C', text: '稳定最重要', score: 2 },
          { label: 'D', text: '安全第一，不冒任何险', score: 1 }
        ]
      }
    ],
    results: [
      {
        min: 16,
        max: 20,
        title: '冒险家',
        desc:
          '你是天生的冒险家，热爱挑战和未知。你的冒险精神让生活充满刺激和可能性。注意评估风险，保护好自己。'
      },
      {
        min: 12,
        max: 15,
        title: '理性冒险者',
        desc:
          '你愿意冒险，但会理性评估。这是一种平衡的态度，让你既能抓住机会，又能控制风险。'
      },
      {
        min: 8,
        max: 11,
        title: '谨慎保守者',
        desc:
          '你偏向保守，对风险比较敏感。建议适当走出舒适区，尝试一些小的挑战。'
      },
      {
        min: 5,
        max: 7,
        title: '安全至上者',
        desc:
          '你非常害怕风险，总是选择最安全的路。建议从小事开始，逐步培养接受挑战的勇气。'
      }
    ]
  },
  {
    id: 'quwei_4',
    title: '你的社交风格测试',
    questions: [
      {
        question: '参加聚会时，你通常会？',
        options: [
          { label: 'A', text: '主动认识新朋友，活跃气氛', score: 4 },
          { label: 'B', text: '和熟人聊天，偶尔认识新人', score: 3 },
          { label: 'C', text: '安静待着，等别人来搭话', score: 2 },
          { label: 'D', text: '尽量不参加聚会', score: 1 }
        ]
      },
      {
        question: '你的朋友圈规模是？',
        options: [
          { label: 'A', text: '很大，认识很多人', score: 4 },
          { label: 'B', text: '中等，有一群固定的朋友', score: 3 },
          { label: 'C', text: '较小，只有几个好朋友', score: 2 },
          { label: 'D', text: '很小，几乎没有朋友', score: 1 }
        ]
      },
      {
        question: '和陌生人交流时，你会？',
        options: [
          { label: 'A', text: '自然大方，很快熟络', score: 4 },
          { label: 'B', text: '礼貌友好，但需要时间', score: 3 },
          { label: 'C', text: '有点紧张，不太主动', score: 2 },
          { label: 'D', text: '非常不自在，尽量回避', score: 1 }
        ]
      },
      {
        question: '你更喜欢哪种社交方式？',
        options: [
          { label: 'A', text: '大型聚会，人越多越热闹', score: 4 },
          { label: 'B', text: '小型聚会，三五好友', score: 3 },
          { label: 'C', text: '一对一深度交流', score: 2 },
          { label: 'D', text: '线上交流，不喜欢见面', score: 1 }
        ]
      },
      {
        question: '社交对你来说是？',
        options: [
          { label: 'A', text: '享受，是获取能量的方式', score: 4 },
          { label: 'B', text: '必要的，但不是最重要的', score: 3 },
          { label: 'C', text: '有点累，但会参与', score: 2 },
          { label: 'D', text: '负担，尽量避免', score: 1 }
        ]
      }
    ],
    results: [
      {
        min: 16,
        max: 20,
        title: '社交达人',
        desc:
          '你是天生的社交达人，善于与人交往，朋友遍天下。你的社交能力是重要的人生资源。'
      },
      {
        min: 12,
        max: 15,
        title: '社交良好',
        desc:
          '你具备良好的社交能力，能维持健康的人际关系。建议在保持社交的同时，也注重深度关系的培养。'
      },
      {
        min: 8,
        max: 11,
        title: '社交一般',
        desc:
          '你的社交能力有待提升，可能比较内向或不善交际。建议从小范围社交开始，逐步扩大舒适区。'
      },
      {
        min: 5,
        max: 7,
        title: '社交困难',
        desc:
          '你可能存在社交障碍，对社交感到焦虑或抵触。建议寻求专业帮助，学习社交技巧。'
      }
    ]
  },
  {
    id: 'quwei_5',
    title: '你的生活仪式感测试',
    questions: [
      {
        question: '对于节日和纪念日，你会？',
        options: [
          { label: 'A', text: '精心准备，创造美好回忆', score: 4 },
          { label: 'B', text: '简单庆祝，表达心意', score: 3 },
          { label: 'C', text: '偶尔记得，随意过', score: 2 },
          { label: 'D', text: '不在意，和平常一样', score: 1 }
        ]
      },
      {
        question: '早晨起床后，你会？',
        options: [
          { label: 'A', text: '有固定的晨间仪式，如冥想、运动', score: 4 },
          { label: 'B', text: '简单洗漱，吃个早餐', score: 3 },
          { label: 'C', text: '匆忙出门，经常不吃早餐', score: 2 },
          { label: 'D', text: '能多睡一会是一会', score: 1 }
        ]
      },
      {
        question: '对于生活中的小确幸，你会？',
        options: [
          { label: 'A', text: '刻意创造，如买花、点蜡烛', score: 4 },
          { label: 'B', text: '偶尔会做，增添生活情趣', score: 3 },
          { label: 'C', text: '很少关注', score: 2 },
          { label: 'D', text: '觉得没必要', score: 1 }
        ]
      },
      {
        question: '吃饭时，你会？',
        options: [
          { label: 'A', text: '注重摆盘和用餐环境', score: 4 },
          { label: 'B', text: '尽量吃得好一点', score: 3 },
          { label: 'C', text: '填饱肚子就行', score: 2 },
          { label: 'D', text: '经常随便对付', score: 1 }
        ]
      },
      {
        question: '对于生活品质，你的态度是？',
        options: [
          { label: 'A', text: '追求精致，注重细节', score: 4 },
          { label: 'B', text: '在能力范围内追求品质', score: 3 },
          { label: 'C', text: '实用为主，不太讲究', score: 2 },
          { label: 'D', text: '能用就行，不在意品质', score: 1 }
        ]
      }
    ],
    results: [
      {
        min: 16,
        max: 20,
        title: '仪式感达人',
        desc:
          '你是生活的艺术家，善于创造仪式感，让平凡的日子充满美好。你的生活态度值得学习。'
      },
      {
        min: 12,
        max: 15,
        title: '仪式感良好',
        desc:
          '你具备一定的仪式感意识，能在重要时刻创造美好。建议在日常生活中也增添一些小仪式。'
      },
      {
        min: 8,
        max: 11,
        title: '仪式感一般',
        desc:
          '你的生活可能比较平淡，缺乏仪式感。建议从小事开始，如认真吃一顿早餐，培养仪式感。'
      },
      {
        min: 5,
        max: 7,
        title: '仪式感缺乏',
        desc:
          '你可能对生活品质不太关注，日子过得比较随意。建议尝试增添一些仪式感，提升生活幸福感。'
      }
    ]
  }
]

export default interestTestData
