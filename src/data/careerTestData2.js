/**
 * 事业测试数据（第6-10套）
 */
const careerTestData2 = [
  {
    id: 'shiye_6',
    title: '职场时间管理能力测试',
    questions: [
      {
        question: '每天开始工作前，你会？',
        options: [
          { label: 'A', text: '列出当天任务清单，按优先级排序', score: 4 },
          { label: 'B', text: '大致想一下要做什么', score: 3 },
          { label: 'C', text: '来什么做什么，没有计划', score: 2 },
          { label: 'D', text: '经常不知道该做什么', score: 1 }
        ]
      },
      {
        question: '面对多项任务时，你会？',
        options: [
          { label: 'A', text: '区分紧急重要程度，优先处理重要任务', score: 4 },
          { label: 'B', text: '先做紧急的，再做其他的', score: 3 },
          { label: 'C', text: '随机处理，哪个想起来做哪个', score: 2 },
          { label: 'D', text: '经常被打断，无法专注完成', score: 1 }
        ]
      },
      {
        question: '对于会议和约定，你会？',
        options: [
          { label: 'A', text: '提前到达，做好准备', score: 4 },
          { label: 'B', text: '准时到达', score: 3 },
          { label: 'C', text: '偶尔迟到', score: 2 },
          { label: 'D', text: '经常迟到或忘记', score: 1 }
        ]
      },
      {
        question: '工作中被临时任务打断，你会？',
        options: [
          { label: 'A', text: '快速评估，合理安排，不影响原计划', score: 4 },
          { label: 'B', text: '处理完再回到原任务', score: 3 },
          { label: 'C', text: '被打断后很难集中注意力', score: 2 },
          { label: 'D', text: '经常忘记原来在做什么', score: 1 }
        ]
      },
      {
        question: '对于长期项目，你会？',
        options: [
          { label: 'A', text: '制定阶段性计划，定期检查进度', score: 4 },
          { label: 'B', text: '有大致计划，按部就班推进', score: 3 },
          { label: 'C', text: '临近截止日期才开始赶工', score: 2 },
          { label: 'D', text: '经常无法按时完成', score: 1 }
        ]
      }
    ],
    results: [
      {
        min: 16,
        max: 20,
        title: '时间管理大师',
        desc:
          '你是时间管理的高手，能高效利用每一分钟，工作有条不紊。你的时间管理能力是职业成功的重要保障。'
      },
      {
        min: 12,
        max: 15,
        title: '时间管理良好',
        desc:
          '你的时间管理能力良好，能完成大多数任务。建议进一步优化任务优先级判断，提升效率。'
      },
      {
        min: 8,
        max: 11,
        title: '时间管理一般',
        desc:
          '你的时间管理能力有待提升，存在拖延和效率低的问题。建议学习时间管理方法，如番茄工作法、四象限法则等。'
      },
      {
        min: 5,
        max: 7,
        title: '时间管理不足',
        desc:
          '你的时间管理能力较弱，经常无法按时完成任务。建议从制定每日计划开始，逐步培养时间管理习惯。'
      }
    ]
  },
  {
    id: 'shiye_7',
    title: '职场学习能力测试',
    questions: [
      {
        question: '面对工作中的新知识，你会？',
        options: [
          { label: 'A', text: '主动学习，快速掌握并应用', score: 4 },
          { label: 'B', text: '按需学习，能基本掌握', score: 3 },
          { label: 'C', text: '被动学习，学得比较慢', score: 2 },
          { label: 'D', text: '抵触学习，能不学就不学', score: 1 }
        ]
      },
      {
        question: '对于行业动态和新技术，你会？',
        options: [
          { label: 'A', text: '主动关注，定期学习更新知识', score: 4 },
          { label: 'B', text: '偶尔关注，有兴趣的会了解', score: 3 },
          { label: 'C', text: '很少关注，觉得和工作关系不大', score: 2 },
          { label: 'D', text: '完全不关注', score: 1 }
        ]
      },
      {
        question: '工作中犯错后，你会？',
        options: [
          { label: 'A', text: '深入分析原因，总结经验避免再犯', score: 4 },
          { label: 'B', text: '反思一下，尽量不再犯', score: 3 },
          { label: 'C', text: '简单反思，但经常重复犯错', score: 2 },
          { label: 'D', text: '不反思，觉得是运气不好', score: 1 }
        ]
      },
      {
        question: '对于提升专业能力，你会？',
        options: [
          { label: 'A', text: '制定学习计划，持续提升', score: 4 },
          { label: 'B', text: '有空时会学习', score: 3 },
          { label: 'C', text: '觉得现有能力够用，不需要提升', score: 2 },
          { label: 'D', text: '不愿意花时间学习', score: 1 }
        ]
      },
      {
        question: '遇到不懂的问题，你会？',
        options: [
          { label: 'A', text: '主动查资料或请教他人，直到弄懂', score: 4 },
          { label: 'B', text: '尝试了解，不懂就算了', score: 3 },
          { label: 'C', text: '等别人告诉自己', score: 2 },
          { label: 'D', text: '不懂就不懂，无所谓', score: 1 }
        ]
      }
    ],
    results: [
      {
        min: 16,
        max: 20,
        title: '学习能力超强',
        desc:
          '你是职场学习达人，善于快速掌握新知识，持续提升自己。你的学习能力是职业发展的核心竞争力。'
      },
      {
        min: 12,
        max: 15,
        title: '学习能力良好',
        desc:
          '你的学习能力良好，能跟上工作要求。建议更主动地学习，培养终身学习的习惯。'
      },
      {
        min: 8,
        max: 11,
        title: '学习能力一般',
        desc:
          '你的学习意愿和能力有待提升。建议认识到学习对职业发展的重要性，制定学习计划。'
      },
      {
        min: 5,
        max: 7,
        title: '学习能力不足',
        desc:
          '你缺乏学习意愿，可能会被职场淘汰。建议立即改变态度，从感兴趣的领域开始学习。'
      }
    ]
  },
  {
    id: 'shiye_8',
    title: '职场情商测试',
    questions: [
      {
        question: '同事情绪不好时，你会？',
        options: [
          { label: 'A', text: '主动关心，提供适当的支持', score: 4 },
          { label: 'B', text: '表示关心，但不深入', score: 3 },
          { label: 'C', text: '觉得是对方的事，不主动过问', score: 2 },
          { label: 'D', text: '完全不在意', score: 1 }
        ]
      },
      {
        question: '自己情绪不好时，你会？',
        options: [
          { label: 'A', text: '调整情绪，不影响工作和他人', score: 4 },
          { label: 'B', text: '尽量控制，但偶尔会表现出来', score: 3 },
          { label: 'C', text: '情绪明显影响工作状态', score: 2 },
          { label: 'D', text: '把情绪发泄到工作和同事身上', score: 1 }
        ]
      },
      {
        question: '面对职场中的不公平，你会？',
        options: [
          { label: 'A', text: '理性分析，通过正当渠道解决', score: 4 },
          { label: 'B', text: '有些不满，但能接受', score: 3 },
          { label: 'C', text: '抱怨不停，影响工作', score: 2 },
          { label: 'D', text: '愤怒冲动，做出过激行为', score: 1 }
        ]
      },
      {
        question: '和不喜欢的同事合作，你会？',
        options: [
          { label: 'A', text: '保持专业，以工作为重', score: 4 },
          { label: 'B', text: '尽量配合，但保持距离', score: 3 },
          { label: 'C', text: '消极应对，影响合作效果', score: 2 },
          { label: 'D', text: '拒绝合作或公开冲突', score: 1 }
        ]
      },
      {
        question: '收到负面反馈时，你会？',
        options: [
          { label: 'A', text: '感谢反馈，认真改进', score: 4 },
          { label: 'B', text: '接受反馈，但心里有点不舒服', score: 3 },
          { label: 'C', text: '为自己辩解，不太愿意接受', score: 2 },
          { label: 'D', text: '非常抵触，认为对方针对自己', score: 1 }
        ]
      }
    ],
    results: [
      {
        min: 16,
        max: 20,
        title: '职场情商超高',
        desc:
          '你是职场情商高手，善于管理自己和他人的情绪，人际关系融洽。你的情商是职业成功的重要因素。'
      },
      {
        min: 12,
        max: 15,
        title: '职场情商良好',
        desc:
          '你的职场情商良好，能处理大多数人际关系。建议进一步提升情绪管理和共情能力。'
      },
      {
        min: 8,
        max: 11,
        title: '职场情商一般',
        desc:
          '你的职场情商有待提升，情绪管理和人际关系方面存在问题。建议学习情商相关知识，多反思自己的行为。'
      },
      {
        min: 5,
        max: 7,
        title: '职场情商不足',
        desc:
          '你的职场情商较低，严重影响工作和人际关系。建议系统学习情商知识，必要时寻求专业帮助。'
      }
    ]
  },
  {
    id: 'shiye_9',
    title: '职业忠诚度测试',
    questions: [
      {
        question: '对于当前的工作，你的态度是？',
        options: [
          { label: 'A', text: '热爱工作，愿意长期发展', score: 4 },
          { label: 'B', text: '比较满意，暂时不考虑跳槽', score: 3 },
          { label: 'C', text: '一般，有更好的机会会考虑', score: 2 },
          { label: 'D', text: '随时准备跳槽', score: 1 }
        ]
      },
      {
        question: '公司遇到困难时，你会？',
        options: [
          { label: 'A', text: '与公司共渡难关，贡献自己的力量', score: 4 },
          { label: 'B', text: '继续工作，但会关注外部机会', score: 3 },
          { label: 'C', text: '开始找下家，准备离开', score: 2 },
          { label: 'D', text: '立即跳槽，不愿承担风险', score: 1 }
        ]
      },
      {
        question: '对于公司的商业机密，你会？',
        options: [
          { label: 'A', text: '严格保密，绝不泄露', score: 4 },
          { label: 'B', text: '基本保密，但可能无意中提及', score: 3 },
          { label: 'C', text: '不太在意，觉得无所谓', score: 2 },
          { label: 'D', text: '可能会为了利益泄露', score: 1 }
        ]
      },
      {
        question: '离职时，你会？',
        options: [
          { label: 'A', text: '做好交接，感谢公司培养', score: 4 },
          { label: 'B', text: '完成基本交接', score: 3 },
          { label: 'C', text: '草草交接，急于离开', score: 2 },
          { label: 'D', text: '不交接，直接走人', score: 1 }
        ]
      },
      {
        question: '对于公司的发展，你会？',
        options: [
          { label: 'A', text: '主动提建议，关心公司成长', score: 4 },
          { label: 'B', text: '做好本职工作，偶尔提建议', score: 3 },
          { label: 'C', text: '只关心自己的工作', score: 2 },
          { label: 'D', text: '公司发展和我无关', score: 1 }
        ]
      }
    ],
    results: [
      {
        min: 16,
        max: 20,
        title: '忠诚度极高',
        desc:
          '你是公司的忠诚员工，热爱工作，愿意与公司共同成长。你的忠诚度是职业发展的重要资本。'
      },
      {
        min: 12,
        max: 15,
        title: '忠诚度良好',
        desc:
          '你对公司有一定的忠诚度，能稳定工作。建议更主动地参与公司发展，增强归属感。'
      },
      {
        min: 8,
        max: 11,
        title: '忠诚度一般',
        desc:
          '你的职业忠诚度一般，容易受外部机会影响。建议思考长期职业规划，不要频繁跳槽。'
      },
      {
        min: 5,
        max: 7,
        title: '忠诚度不足',
        desc:
          '你缺乏职业忠诚度，可能会影响职业发展和口碑。建议反思自己的职业态度，培养责任感。'
      }
    ]
  },
  {
    id: 'shiye_10',
    title: '职业适应能力测试',
    questions: [
      {
        question: '公司调整组织架构，你的工作内容大幅变化，你会？',
        options: [
          {
            label: 'A',
            text: '快速了解新工作要求，学习相关技能，尽快适应',
            score: 4
          },
          { label: 'B', text: '慢慢适应，遇到问题再解决', score: 3 },
          { label: 'C', text: '抱怨调整，工作消极', score: 2 },
          { label: 'D', text: '直接辞职，不接受变化', score: 1 }
        ]
      },
      {
        question: '被派往陌生城市的分公司工作，你会？',
        options: [
          {
            label: 'A',
            text: '提前了解当地情况，主动融入新团队，适应新环境',
            score: 4
          },
          { label: 'B', text: '接受安排，但只专注工作，不融入环境', score: 3 },
          { label: 'C', text: '找借口拒绝外派', score: 2 },
          { label: 'D', text: '勉强外派，但频繁请假回原城市', score: 1 }
        ]
      },
      {
        question: '公司引入新的工作系统，操作方式与之前完全不同，你会？',
        options: [
          {
            label: 'A',
            text: '参加培训，主动摸索，最快掌握系统操作',
            score: 4
          },
          { label: 'B', text: '等待同事学会后再请教', score: 3 },
          { label: 'C', text: '抱怨系统难用，仍用旧方法工作', score: 2 },
          { label: 'D', text: '拒绝使用新系统，影响工作进度', score: 1 }
        ]
      },
      {
        question: '从基层岗位晋升到管理岗位，你会？',
        options: [
          {
            label: 'A',
            text: '学习管理知识，向资深管理者请教，快速转变角色',
            score: 4
          },
          { label: 'B', text: '沿用基层工作思路，慢慢摸索管理方法', score: 3 },
          { label: 'C', text: '觉得压力大，想退回基层', score: 2 },
          { label: 'D', text: '摆官架子，不实际做事', score: 1 }
        ]
      },
      {
        question: '行业突然出现颠覆性技术，你的专业技能面临淘汰，你会？',
        options: [
          { label: 'A', text: '紧急学习新技能，转型适应行业变化', score: 4 },
          { label: 'B', text: '焦虑不安，被动等待', score: 3 },
          { label: 'C', text: '抱怨行业变化快，不愿学习', score: 2 },
          { label: 'D', text: '放弃该行业，盲目转行', score: 1 }
        ]
      }
    ],
    results: [
      {
        min: 16,
        max: 20,
        title: '适应力超强，顺势而为',
        desc:
          '你拥有极强的职业适应能力，能快速应对工作内容、环境、角色等各类变化。你能将变化视为成长机会，展现出"顺势而为"的职业智慧。'
      },
      {
        min: 12,
        max: 15,
        title: '适应能力良好，可应对常规变化',
        desc:
          '你具备基本的职业适应能力，能应对工作中的常规变化。建议学习变化管理技巧，提升适应质量。'
      },
      {
        min: 8,
        max: 11,
        title: '适应能力不足，抵触变化',
        desc:
          '你的职业适应能力较为薄弱，面对工作变化时第一反应是抵触和抱怨。建议转变心态，主动学习新技能。'
      },
      {
        min: 5,
        max: 7,
        title: '适应困难，发展受限',
        desc:
          '你对变化存在强烈的抵触情绪，适应能力薄弱。这种态度会严重限制职业发展。建议认识到适应能力的重要性，从小变化开始练习。'
      }
    ]
  }
]

export default careerTestData2
