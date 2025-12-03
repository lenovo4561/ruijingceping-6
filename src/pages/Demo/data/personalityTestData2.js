/**
 * 性格测试数据（第6-10套）
 */
const personalityTestData2 = [
  {
    id: 'xingge_6',
    title: '急性子vs慢性子测试',
    questions: [
      {
        question: '等待时（如排队、等人），你会？',
        options: [
          { label: 'A', text: '非常焦躁，忍不住催促或抱怨', score: 1 },
          { label: 'B', text: '有点着急，但能控制情绪', score: 2 },
          { label: 'C', text: '比较平静，会找事情打发时间', score: 3 },
          { label: 'D', text: '完全不着急，享受等待的时光', score: 4 }
        ]
      },
      {
        question: '做事情时，你的节奏是？',
        options: [
          { label: 'A', text: '追求速度，能快则快', score: 1 },
          { label: 'B', text: '效率优先，但也注重质量', score: 2 },
          { label: 'C', text: '稳扎稳打，不急不躁', score: 3 },
          { label: 'D', text: '慢工出细活，不在乎时间', score: 4 }
        ]
      },
      {
        question: '和别人说话时，你会？',
        options: [
          { label: 'A', text: '语速很快，有时会打断别人', score: 1 },
          { label: 'B', text: '语速较快，但会注意倾听', score: 2 },
          { label: 'C', text: '语速适中，有耐心听完', score: 3 },
          { label: 'D', text: '语速较慢，喜欢慢慢聊', score: 4 }
        ]
      },
      {
        question: '面对一个需要长期坚持的目标，你会？',
        options: [
          { label: 'A', text: '希望尽快看到结果，否则容易放弃', score: 1 },
          { label: 'B', text: '能坚持，但会设置阶段性目标', score: 2 },
          { label: 'C', text: '有耐心，按计划稳步推进', score: 3 },
          { label: 'D', text: '非常有耐心，不急于求成', score: 4 }
        ]
      },
      {
        question: '吃饭时，你的速度是？',
        options: [
          { label: 'A', text: '很快，经常是最先吃完的', score: 1 },
          { label: 'B', text: '比较快，但会注意咀嚼', score: 2 },
          { label: 'C', text: '中等速度，细嚼慢咽', score: 3 },
          { label: 'D', text: '很慢，享受用餐过程', score: 4 }
        ]
      }
    ],
    results: [
      {
        min: 5,
        max: 8,
        title: '典型急性子',
        desc:
          '你是典型的急性子，做事追求速度，缺乏耐心。这种特质让你效率很高，但也容易因为急躁而出错或影响人际关系。建议学习放慢节奏，培养耐心。'
      },
      {
        min: 9,
        max: 12,
        title: '偏急性子',
        desc:
          '你偏向急性子，但能在一定程度上控制。你追求效率的同时也会注意质量，这是一种较好的状态。建议在重要事情上多给自己一些时间。'
      },
      {
        min: 13,
        max: 16,
        title: '偏慢性子',
        desc:
          '你偏向慢性子，做事稳重，有耐心。这种特质让你更细致，但有时可能会影响效率。建议在需要快速响应的场合适当提高节奏。'
      },
      {
        min: 17,
        max: 20,
        title: '典型慢性子',
        desc:
          '你是典型的慢性子，做事不紧不慢，非常有耐心。这种特质让你很稳重，但在快节奏的环境中可能会不适应。建议根据场合调整自己的节奏。'
      }
    ]
  },
  {
    id: 'xingge_7',
    title: '完美主义vs随性测试',
    questions: [
      {
        question: '完成一项工作后，你会？',
        options: [
          { label: 'A', text: '反复检查，确保没有任何瑕疵', score: 1 },
          { label: 'B', text: '检查一遍，修正明显的问题', score: 2 },
          { label: 'C', text: '大致看一下，差不多就行', score: 3 },
          { label: 'D', text: '完成就好，不会特意检查', score: 4 }
        ]
      },
      {
        question: '对于自己的外表，你会？',
        options: [
          { label: 'A', text: '非常在意，出门前要花很长时间打扮', score: 1 },
          { label: 'B', text: '比较在意，会注意整洁得体', score: 2 },
          { label: 'C', text: '一般在意，简单收拾即可', score: 3 },
          { label: 'D', text: '不太在意，舒服就好', score: 4 }
        ]
      },
      {
        question: '当事情没有按计划进行时，你会？',
        options: [
          { label: 'A', text: '非常焦虑，难以接受', score: 1 },
          { label: 'B', text: '有点不舒服，但会调整计划', score: 2 },
          { label: 'C', text: '接受变化，随机应变', score: 3 },
          { label: 'D', text: '无所谓，本来就没有严格的计划', score: 4 }
        ]
      },
      {
        question: '对于家里的整洁度，你的要求是？',
        options: [
          { label: 'A', text: '必须一尘不染，物品摆放整齐', score: 1 },
          { label: 'B', text: '保持整洁，定期打扫', score: 2 },
          { label: 'C', text: '大致整洁，有点乱也能接受', score: 3 },
          { label: 'D', text: '怎么舒服怎么来，不在意整洁', score: 4 }
        ]
      },
      {
        question: '对于自己的错误，你会？',
        options: [
          { label: 'A', text: '非常自责，长时间无法释怀', score: 1 },
          { label: 'B', text: '反思后改进，不过度纠结', score: 2 },
          { label: 'C', text: '简单反思，很快就过去了', score: 3 },
          { label: 'D', text: '不太在意，人无完人', score: 4 }
        ]
      }
    ],
    results: [
      {
        min: 5,
        max: 8,
        title: '高度完美主义者',
        desc:
          '你是高度完美主义者，对自己和事物有极高的要求，难以容忍瑕疵。这种特质让你做事精益求精，但也容易给自己带来压力。建议学会接受"足够好"，减少不必要的焦虑。'
      },
      {
        min: 9,
        max: 12,
        title: '适度完美主义者',
        desc:
          '你有一定的完美主义倾向，但能在追求完美和接受现实之间找到平衡。你会努力做好，但也能接受不完美。这是一种健康的状态。'
      },
      {
        min: 13,
        max: 16,
        title: '偏随性者',
        desc:
          '你偏向随性，对事物的要求不高，能接受变化和不完美。这种特质让你更轻松，但有时可能会影响工作质量。建议在重要事情上提高标准。'
      },
      {
        min: 17,
        max: 20,
        title: '高度随性者',
        desc:
          '你是高度随性的人，对事物几乎没有要求，怎么舒服怎么来。这种特质让你很放松，但可能会给人不够认真的印象。建议在必要时提高对自己的要求。'
      }
    ]
  },
  {
    id: 'xingge_8',
    title: '责任感测试',
    questions: [
      {
        question: '工作中出现失误，你会？',
        options: [
          { label: 'A', text: '主动承担责任，积极补救', score: 1 },
          { label: 'B', text: '承认错误，配合解决问题', score: 2 },
          { label: 'C', text: '先解释原因，再承担部分责任', score: 3 },
          { label: 'D', text: '尽量推卸责任，避免受罚', score: 4 }
        ]
      },
      {
        question: '答应别人的事情，你会？',
        options: [
          { label: 'A', text: '无论如何都会完成，不轻易食言', score: 1 },
          { label: 'B', text: '尽力完成，实在不行会提前告知', score: 2 },
          { label: 'C', text: '尽量完成，但有时会忘记或拖延', score: 3 },
          { label: 'D', text: '随口答应，经常做不到', score: 4 }
        ]
      },
      {
        question: '看到公共场所有垃圾，你会？',
        options: [
          { label: 'A', text: '主动捡起来扔进垃圾桶', score: 1 },
          { label: 'B', text: '如果顺手会捡，不顺手就算了', score: 2 },
          { label: 'C', text: '觉得应该有人清理，不是我的责任', score: 3 },
          { label: 'D', text: '完全不在意，视而不见', score: 4 }
        ]
      },
      {
        question: '对于家庭责任，你的态度是？',
        options: [
          { label: 'A', text: '主动承担，照顾家人是我的责任', score: 1 },
          { label: 'B', text: '愿意承担，但希望家人也能分担', score: 2 },
          { label: 'C', text: '能推就推，觉得自己还年轻', score: 3 },
          { label: 'D', text: '不愿承担，觉得是负担', score: 4 }
        ]
      },
      {
        question: '工作中发现同事的疏漏可能导致问题，你会？',
        options: [
          { label: 'A', text: '主动提醒同事，帮助避免问题', score: 1 },
          { label: 'B', text: '私下告诉同事，让他自己处理', score: 2 },
          { label: 'C', text: '觉得不是我的事，不主动提醒', score: 3 },
          { label: 'D', text: '等着看同事出错', score: 4 }
        ]
      }
    ],
    results: [
      {
        min: 5,
        max: 8,
        title: '高度责任感者',
        desc:
          '你具备高度的责任感，是勇于担当的践行者。你主动承担责任，信守承诺，是团队中的核心力量。但需注意避免过度承担导致身心疲惫。'
      },
      {
        min: 9,
        max: 12,
        title: '适度责任感者',
        desc:
          '你的责任感适度且理性，能在承担责任和保护自身利益之间找到平衡。你是务实的责任承担者，值得信赖。'
      },
      {
        min: 13,
        max: 16,
        title: '责任感薄弱者',
        desc:
          '你的责任感较为薄弱，面对责任时习惯被动应对或敷衍。建议从身边的小事开始培养责任感，逐步建立"责任意识"。'
      },
      {
        min: 17,
        max: 20,
        title: '缺乏责任感者',
        desc:
          '你严重缺乏责任感，以自我为中心，对自身的责任和承诺漠视。建议深刻认识到责任感对个人发展的重要性，从最基本的本职工作入手。'
      }
    ]
  },
  {
    id: 'xingge_9',
    title: '学习能力测试',
    questions: [
      {
        question: '遇到一个全新的知识领域时，你会？',
        options: [
          { label: 'A', text: '充满兴趣，主动查阅资料并深入学习', score: 1 },
          { label: 'B', text: '有需求时会系统学习，掌握核心内容', score: 2 },
          { label: 'C', text: '只学习表面知识，满足基本需求即可', score: 3 },
          { label: 'D', text: '感到困难，不愿学习', score: 4 }
        ]
      },
      {
        question: '学习新技能时，你会？',
        options: [
          { label: 'A', text: '制定学习计划，坚持练习直到熟练掌握', score: 1 },
          { label: 'B', text: '跟着教程学习，遇到问题及时请教', score: 2 },
          { label: 'C', text: '偶尔学习，遇到困难就放弃', score: 3 },
          { label: 'D', text: '只看教程，不实际练习', score: 4 }
        ]
      },
      {
        question: '当学习中遇到复杂难题时，你会？',
        options: [
          {
            label: 'A',
            text: '主动拆解问题，查阅资料或请教他人直至解决',
            score: 1
          },
          {
            label: 'B',
            text: '尝试独立解决，长时间无果后再寻求帮助',
            score: 2
          },
          { label: 'C', text: '暂时搁置，等他人解决后参考答案', score: 3 },
          { label: 'D', text: '直接放弃，认为自己无法解决', score: 4 }
        ]
      },
      {
        question: '学习新内容后，你会如何巩固？',
        options: [
          {
            label: 'A',
            text: '主动复盘总结，通过实践或测试检验成果',
            score: 1
          },
          { label: 'B', text: '做课后习题，复习重点内容', score: 2 },
          { label: 'C', text: '仅在考试或应用前临时复习', score: 3 },
          { label: 'D', text: '学完就忘，不进行专门巩固', score: 4 }
        ]
      },
      {
        question: '面对他人分享的新知识点，你会？',
        options: [
          { label: 'A', text: '积极记录，主动拓展相关内容的学习', score: 1 },
          { label: 'B', text: '认真倾听，判断有用后会简单了解', score: 2 },
          { label: 'C', text: '表面应付，不会深入研究', score: 3 },
          { label: 'D', text: '毫无兴趣，不愿倾听', score: 4 }
        ]
      }
    ],
    results: [
      {
        min: 5,
        max: 8,
        title: '主动钻研型',
        desc:
          '你具备极强的学习能力和主动求知欲，是典型的主动钻研型学习者。你能快速掌握各类知识和技能，在职业发展中具备极强的竞争力。'
      },
      {
        min: 9,
        max: 12,
        title: '高效实用型',
        desc:
          '你属于高效实用型学习者，学习目标明确，能根据需求选择合适的学习方式。你能精准获取所需知识，快速应用于实践。'
      },
      {
        min: 13,
        max: 16,
        title: '被动应付型',
        desc:
          '你的学习态度较为被动，缺乏主动钻研的意识，学习多停留在表面。建议树立明确的学习目标，从感兴趣的领域入手，培养主动学习的习惯。'
      },
      {
        min: 17,
        max: 20,
        title: '抵触逃避型',
        desc:
          '你对学习存在明显的抵触和逃避情绪，缺乏学习的主动性和进取心。建议首先转变对学习的认知，从最简单的小目标开始，逐步培养学习习惯。'
      }
    ]
  },
  {
    id: 'xingge_10',
    title: '适应能力测试',
    questions: [
      {
        question: '当你换到一个新的工作环境时，你会？',
        options: [
          {
            label: 'A',
            text: '快速熟悉同事和工作内容，一周内适应节奏',
            score: 1
          },
          { label: 'B', text: '主动了解环境，两周左右逐渐适应', score: 2 },
          {
            label: 'C',
            text: '被动等待他人引导，一个月以上才慢慢适应',
            score: 3
          },
          { label: 'D', text: '难以适应，长期感到焦虑和不适', score: 4 }
        ]
      },
      {
        question: '当生活习惯被迫改变（如搬家、作息调整）时，你会？',
        options: [
          { label: 'A', text: '主动调整自己，快速适应新习惯', score: 1 },
          { label: 'B', text: '逐步调整，一周左右适应新状态', score: 2 },
          { label: 'C', text: '感到不适，需要他人提醒才能调整', score: 3 },
          { label: 'D', text: '强烈抵触，长时间无法适应', score: 4 }
        ]
      },
      {
        question: '当团队工作模式突然改变（如从线下改为线上）时，你会？',
        options: [
          { label: 'A', text: '主动学习新工具，带动他人适应新模式', score: 1 },
          { label: 'B', text: '快速学习操作方法，确保不影响工作', score: 2 },
          { label: 'C', text: '勉强学习，工作效率明显下降', score: 3 },
          { label: 'D', text: '无法适应，拒绝使用新的工作模式', score: 4 }
        ]
      },
      {
        question: '当你到一个陌生的城市生活时，你会？',
        options: [
          { label: 'A', text: '主动探索城市，快速融入当地生活', score: 1 },
          { label: 'B', text: '逐步熟悉周边环境，慢慢适应生活节奏', score: 2 },
          { label: 'C', text: '局限于住所附近，很少主动探索', score: 3 },
          { label: 'D', text: '感到孤独无助，无法融入当地环境', score: 4 }
        ]
      },
      {
        question: '当工作中需要使用全新的专业工具时，你会？',
        options: [
          { label: 'A', text: '立刻查阅资料学习，短期内熟练掌握', score: 1 },
          { label: 'B', text: '跟着培训学习，及时请教问题直至掌握', score: 2 },
          { label: 'C', text: '仅学习基础操作，勉强应对工作', score: 3 },
          { label: 'D', text: '感到困难，不愿学习，影响工作推进', score: 4 }
        ]
      }
    ],
    results: [
      {
        min: 5,
        max: 8,
        title: '快速适应型',
        desc:
          '你具备出色的适应能力，能快速应对环境、模式和习惯的变化，是灵活应变的掌控者。这种强大的适应能力让你在各种变化中都能保持稳定的表现。'
      },
      {
        min: 9,
        max: 12,
        title: '稳健适应型',
        desc:
          '你属于稳健适应型人格，面对变化时能保持积极态度，通过主动调整逐步适应。你能较好地应对各类常规变化，在变化中保持稳定性。'
      },
      {
        min: 13,
        max: 16,
        title: '被动适应型',
        desc:
          '你的适应能力处于中等偏下水平，面对变化时缺乏主动性，习惯被动跟随。建议培养主动适应的意识，在变化来临前提前了解相关信息。'
      },
      {
        min: 17,
        max: 20,
        title: '适应困难型',
        desc:
          '你对变化存在强烈的抵触情绪，适应能力薄弱，难以应对环境和模式的改变。建议尝试接受"变化是常态"的认知，从微小的变化开始练习适应。'
      }
    ]
  }
]

export default personalityTestData2
