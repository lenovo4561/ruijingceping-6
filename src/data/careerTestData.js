/**
 * 事业测试数据（10套）
 * 评分规则：每题A选项得4分，B选项得3分，C选项得2分，D选项得1分
 * 总分5-20分，分段：16-20分（优秀）、12-15分（良好）、8-11分（一般）、5-7分（待提升）
 */
const careerTestData = [
  {
    id: 'shiye_1',
    title: '职场抗压能力测试',
    questions: [
      {
        question: '同时接到3项紧急工作，你会？',
        options: [
          { label: 'A', text: '冷静分析优先级，逐一高效完成', score: 4 },
          { label: 'B', text: '有点焦虑，但能按计划推进', score: 3 },
          { label: 'C', text: '手忙脚乱，效率明显下降', score: 2 },
          { label: 'D', text: '完全崩溃，不知道从何下手', score: 1 }
        ]
      },
      {
        question: '项目临近截止日期，发现重大问题需要返工，你会？',
        options: [
          { label: 'A', text: '立即调整方案，加班加点完成', score: 4 },
          { label: 'B', text: '和团队沟通，争取延期或简化方案', score: 3 },
          { label: 'C', text: '感到绝望，抱怨为什么会这样', score: 2 },
          { label: 'D', text: '想放弃，觉得无法完成', score: 1 }
        ]
      },
      {
        question: '连续加班一周后，你的状态是？',
        options: [
          { label: 'A', text: '虽然累但能保持工作质量', score: 4 },
          { label: 'B', text: '有点疲惫，但能坚持', score: 3 },
          { label: 'C', text: '身心俱疲，工作效率大幅下降', score: 2 },
          { label: 'D', text: '完全撑不住，想请假休息', score: 1 }
        ]
      },
      {
        question: '领导对你的工作提出严厉批评，你会？',
        options: [
          { label: 'A', text: '虚心接受，分析问题并改进', score: 4 },
          { label: 'B', text: '有点难受，但会反思自己的问题', score: 3 },
          { label: 'C', text: '感到委屈，情绪低落好几天', score: 2 },
          { label: 'D', text: '非常愤怒或沮丧，想辞职', score: 1 }
        ]
      },
      {
        question: '面对不确定的职业前景，你会？',
        options: [
          { label: 'A', text: '积极提升自己，为各种可能做准备', score: 4 },
          { label: 'B', text: '有些担忧，但会努力工作', score: 3 },
          { label: 'C', text: '非常焦虑，影响工作状态', score: 2 },
          { label: 'D', text: '陷入恐慌，无法正常工作', score: 1 }
        ]
      }
    ],
    results: [
      {
        min: 16,
        max: 20,
        title: '抗压能力超强',
        desc:
          '你是工作中的"抗压强者"，面对高强度压力能游刃有余。你能冷静分析问题，高效解决，是团队中的定海神针。建议在保持抗压能力的同时，注意身心健康。'
      },
      {
        min: 12,
        max: 15,
        title: '抗压能力良好',
        desc:
          '你的抗压能力良好，能应对大多数工作压力。在压力下虽有波动但能保持工作质量。建议学习更多压力管理技巧，进一步提升抗压能力。'
      },
      {
        min: 8,
        max: 11,
        title: '抗压能力一般',
        desc:
          '你的抗压能力一般，面对压力容易焦虑和效率下降。建议学习时间管理和情绪调节技巧，逐步提升抗压能力。'
      },
      {
        min: 5,
        max: 7,
        title: '抗压能力不足',
        desc:
          '你的抗压能力较弱，面对压力容易崩溃。建议从小压力开始锻炼，学习压力管理方法，必要时寻求专业帮助。'
      }
    ]
  },
  {
    id: 'shiye_2',
    title: '职场沟通能力测试',
    questions: [
      {
        question: '向领导汇报工作时，你会？',
        options: [
          { label: 'A', text: '条理清晰，重点突出，数据支撑', score: 4 },
          { label: 'B', text: '能说清楚主要内容，偶尔有遗漏', score: 3 },
          { label: 'C', text: '比较紧张，表达不够流畅', score: 2 },
          { label: 'D', text: '语无伦次，经常被打断', score: 1 }
        ]
      },
      {
        question: '和同事意见不一致时，你会？',
        options: [
          { label: 'A', text: '理性讨论，寻找共识或最优方案', score: 4 },
          { label: 'B', text: '表达自己的观点，尊重对方意见', score: 3 },
          { label: 'C', text: '坚持己见，不太愿意妥协', score: 2 },
          { label: 'D', text: '直接争吵或冷战', score: 1 }
        ]
      },
      {
        question: '需要跨部门协调资源时，你会？',
        options: [
          { label: 'A', text: '主动沟通，说明需求和价值，达成合作', score: 4 },
          { label: 'B', text: '通过正式渠道申请，等待回复', score: 3 },
          { label: 'C', text: '觉得麻烦，能不协调就不协调', score: 2 },
          { label: 'D', text: '不知道怎么沟通，经常碰壁', score: 1 }
        ]
      },
      {
        question: '给客户或合作伙伴发邮件时，你会？',
        options: [
          { label: 'A', text: '措辞专业得体，逻辑清晰，格式规范', score: 4 },
          { label: 'B', text: '内容完整，基本得体', score: 3 },
          { label: 'C', text: '比较随意，有时会有错别字', score: 2 },
          { label: 'D', text: '不太会写正式邮件，经常出问题', score: 1 }
        ]
      },
      {
        question: '在会议上发言时，你会？',
        options: [
          { label: 'A', text: '自信表达，观点明确，能带动讨论', score: 4 },
          { label: 'B', text: '能清楚表达自己的想法', score: 3 },
          { label: 'C', text: '尽量少说，怕说错', score: 2 },
          { label: 'D', text: '几乎不发言，除非被点名', score: 1 }
        ]
      }
    ],
    results: [
      {
        min: 16,
        max: 20,
        title: '沟通能力出色',
        desc:
          '你是职场沟通高手，能清晰表达、有效倾听、灵活协调。你的沟通能力是职业发展的重要助力。建议继续发挥优势，帮助团队提升沟通效率。'
      },
      {
        min: 12,
        max: 15,
        title: '沟通能力良好',
        desc:
          '你的沟通能力良好，能应对大多数职场沟通场景。建议在跨部门协调和向上汇报方面进一步提升，让沟通更高效。'
      },
      {
        min: 8,
        max: 11,
        title: '沟通能力一般',
        desc:
          '你的沟通能力有待提升，在表达和协调方面存在不足。建议多学习沟通技巧，多练习在正式场合发言。'
      },
      {
        min: 5,
        max: 7,
        title: '沟通能力不足',
        desc:
          '你的沟通能力较弱，影响工作效率和人际关系。建议系统学习职场沟通技巧，从日常小事开始练习。'
      }
    ]
  },
  {
    id: 'shiye_3',
    title: '职场执行力测试',
    questions: [
      {
        question: '接到一项任务后，你会？',
        options: [
          { label: 'A', text: '立即制定计划，马上开始执行', score: 4 },
          { label: 'B', text: '思考一下方案，然后开始行动', score: 3 },
          { label: 'C', text: '拖延一段时间，临近截止日期才开始', score: 2 },
          { label: 'D', text: '一直拖延，经常无法按时完成', score: 1 }
        ]
      },
      {
        question: '执行任务过程中遇到困难，你会？',
        options: [
          { label: 'A', text: '主动寻找解决方案，不等不靠', score: 4 },
          { label: 'B', text: '尝试解决，不行再求助', score: 3 },
          { label: 'C', text: '等待他人指导或帮助', score: 2 },
          { label: 'D', text: '放弃或绕过问题', score: 1 }
        ]
      },
      {
        question: '对于领导交代的任务，你会？',
        options: [
          { label: 'A', text: '超额完成，主动汇报进度', score: 4 },
          { label: 'B', text: '按要求完成，及时交付', score: 3 },
          { label: 'C', text: '基本完成，但质量一般', score: 2 },
          { label: 'D', text: '经常无法按时完成或质量不达标', score: 1 }
        ]
      },
      {
        question: '工作中需要学习新技能，你会？',
        options: [
          { label: 'A', text: '主动学习，快速掌握并应用', score: 4 },
          { label: 'B', text: '按要求学习，能基本掌握', score: 3 },
          { label: 'C', text: '被动学习，学得比较慢', score: 2 },
          { label: 'D', text: '抵触学习，能不学就不学', score: 1 }
        ]
      },
      {
        question: '对于工作目标，你的态度是？',
        options: [
          { label: 'A', text: '主动设定更高目标，挑战自我', score: 4 },
          { label: 'B', text: '努力完成既定目标', score: 3 },
          { label: 'C', text: '差不多就行，不追求超额', score: 2 },
          { label: 'D', text: '能完成多少算多少', score: 1 }
        ]
      }
    ],
    results: [
      {
        min: 16,
        max: 20,
        title: '执行力超强',
        desc:
          '你是执行力超强的行动派，说干就干，高效完成。你是团队中最可靠的执行者。建议在保持执行力的同时，也要注意方向的正确性。'
      },
      {
        min: 12,
        max: 15,
        title: '执行力良好',
        desc:
          '你的执行力良好，能按时完成大多数任务。建议进一步提升主动性和效率，向更高标准看齐。'
      },
      {
        min: 8,
        max: 11,
        title: '执行力一般',
        desc:
          '你的执行力有待提升，存在拖延和被动的问题。建议制定明确的计划，设置截止日期，培养立即行动的习惯。'
      },
      {
        min: 5,
        max: 7,
        title: '执行力不足',
        desc:
          '你的执行力较弱，经常无法按时完成任务。建议深刻认识执行力的重要性，从小任务开始培养执行习惯。'
      }
    ]
  },
  {
    id: 'shiye_4',
    title: '职场创新能力测试',
    questions: [
      {
        question: '面对常规工作，你会？',
        options: [
          { label: 'A', text: '主动思考优化方案，提升效率', score: 4 },
          { label: 'B', text: '偶尔会想有没有更好的方法', score: 3 },
          { label: 'C', text: '按照既定流程执行', score: 2 },
          { label: 'D', text: '只管完成，不考虑改进', score: 1 }
        ]
      },
      {
        question: '当团队需要新想法时，你会？',
        options: [
          { label: 'A', text: '积极贡献创意，不怕被否定', score: 4 },
          { label: 'B', text: '有想法会说，但不太主动', score: 3 },
          { label: 'C', text: '等别人先说，自己附和', score: 2 },
          { label: 'D', text: '觉得创新是别人的事', score: 1 }
        ]
      },
      {
        question: '遇到从未解决过的问题，你会？',
        options: [
          { label: 'A', text: '尝试多种新方法，直到找到解决方案', score: 4 },
          { label: 'B', text: '参考类似案例，适当调整', score: 3 },
          { label: 'C', text: '按照以前的方法尝试', score: 2 },
          { label: 'D', text: '等待他人解决或放弃', score: 1 }
        ]
      },
      {
        question: '对于行业新趋势和新技术，你会？',
        options: [
          { label: 'A', text: '主动关注学习，思考如何应用', score: 4 },
          { label: 'B', text: '有兴趣了解，但不深入研究', score: 3 },
          { label: 'C', text: '等到必须用时才学', score: 2 },
          { label: 'D', text: '不关心，觉得和自己无关', score: 1 }
        ]
      },
      {
        question: '你的创意被否定时，你会？',
        options: [
          { label: 'A', text: '分析原因，改进后再提出', score: 4 },
          { label: 'B', text: '有点失落，但会继续思考', score: 3 },
          { label: 'C', text: '不再提创意，按要求做', score: 2 },
          { label: 'D', text: '觉得创新没意义，以后不提了', score: 1 }
        ]
      }
    ],
    results: [
      {
        min: 16,
        max: 20,
        title: '创新能力出色',
        desc:
          '你是职场创新达人，善于发现问题、提出新想法、推动变革。你的创新能力是团队的宝贵财富。建议继续保持创新热情，同时注意创新的可行性。'
      },
      {
        min: 12,
        max: 15,
        title: '创新能力良好',
        desc:
          '你具备一定的创新能力，能在工作中提出改进建议。建议更主动地关注行业趋势，培养创新思维。'
      },
      {
        min: 8,
        max: 11,
        title: '创新能力一般',
        desc:
          '你的创新意识较弱，习惯按部就班。建议多接触新事物，培养好奇心，尝试从不同角度思考问题。'
      },
      {
        min: 5,
        max: 7,
        title: '创新能力不足',
        desc:
          '你缺乏创新意识，对新事物不感兴趣。建议认识到创新对职业发展的重要性，从小改进开始培养创新习惯。'
      }
    ]
  },
  {
    id: 'shiye_5',
    title: '职场领导力测试',
    questions: [
      {
        question: '团队成员遇到困难时，你会？',
        options: [
          { label: 'A', text: '主动了解情况，提供指导和支持', score: 4 },
          { label: 'B', text: '在对方求助时给予帮助', score: 3 },
          { label: 'C', text: '觉得是对方自己的事', score: 2 },
          { label: 'D', text: '不关心，只关注自己的工作', score: 1 }
        ]
      },
      {
        question: '需要带领团队完成项目时，你会？',
        options: [
          { label: 'A', text: '明确目标，合理分工，激励团队', score: 4 },
          { label: 'B', text: '安排任务，跟进进度', score: 3 },
          { label: 'C', text: '自己多做一些，减少协调', score: 2 },
          { label: 'D', text: '不知道怎么带团队，压力很大', score: 1 }
        ]
      },
      {
        question: '团队成员之间产生矛盾，你会？',
        options: [
          { label: 'A', text: '主动调解，找到双方都能接受的方案', score: 4 },
          { label: 'B', text: '分别沟通，了解情况后处理', score: 3 },
          { label: 'C', text: '让他们自己解决', score: 2 },
          { label: 'D', text: '回避矛盾，假装没看见', score: 1 }
        ]
      },
      {
        question: '对于团队成员的成长，你会？',
        options: [
          { label: 'A', text: '主动指导，帮助制定发展计划', score: 4 },
          { label: 'B', text: '在工作中给予一些指导', score: 3 },
          { label: 'C', text: '觉得是他们自己的事', score: 2 },
          { label: 'D', text: '担心他们超过自己，不愿培养', score: 1 }
        ]
      },
      {
        question: '面对重大决策，你会？',
        options: [
          { label: 'A', text: '综合分析，果断决策，承担责任', score: 4 },
          { label: 'B', text: '收集意见后做出决定', score: 3 },
          { label: 'C', text: '犹豫不决，希望别人做决定', score: 2 },
          { label: 'D', text: '逃避决策，拖延处理', score: 1 }
        ]
      }
    ],
    results: [
      {
        min: 16,
        max: 20,
        title: '领导力出色',
        desc:
          '你具备出色的领导力，能带领团队达成目标，善于激励和培养下属。你是天生的领导者。建议继续提升战略思维和决策能力。'
      },
      {
        min: 12,
        max: 15,
        title: '领导力良好',
        desc:
          '你具备基本的领导能力，能完成团队管理任务。建议加强团队激励和人才培养方面的能力。'
      },
      {
        min: 8,
        max: 11,
        title: '领导力一般',
        desc:
          '你的领导能力有待提升，在团队管理方面存在不足。建议学习领导力相关知识，多实践带团队。'
      },
      {
        min: 5,
        max: 7,
        title: '领导力不足',
        desc:
          '你缺乏领导意识和能力，不适合目前承担管理职责。建议从小团队开始锻炼，逐步培养领导能力。'
      }
    ]
  }
]

export default careerTestData
