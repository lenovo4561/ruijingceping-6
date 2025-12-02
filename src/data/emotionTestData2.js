/**
 * 情感测试数据（第6-10套）
 */
const emotionTestData2 = [
  {
    id: 'qinggan_6',
    title: '亲子沟通有效性测试',
    questions: [
      {
        question: '孩子向你分享学校的趣事，你会？',
        options: [
          { label: 'A', text: '放下手中的事认真倾听，主动提问互动', score: 4 },
          { label: 'B', text: '认真听，偶尔回应几句', score: 3 },
          { label: 'C', text: '一边做事一边听，敷衍回应', score: 2 },
          { label: 'D', text: '打断孩子，让孩子别打扰自己', score: 1 }
        ]
      },
      {
        question: '孩子考试成绩不理想，你会？',
        options: [
          { label: 'A', text: '安慰孩子，和孩子一起分析错题原因', score: 4 },
          { label: 'B', text: '有点生气，但会鼓励孩子下次努力', score: 3 },
          { label: 'C', text: '批评孩子不够努力，拿别人和孩子比较', score: 2 },
          { label: 'D', text: '打骂孩子，禁止孩子娱乐', score: 1 }
        ]
      },
      {
        question: '孩子拒绝按照你的要求做事，你会？',
        options: [
          {
            label: 'A',
            text: '询问孩子拒绝的原因，和孩子商量解决方案',
            score: 4
          },
          { label: 'B', text: '强制孩子执行，但会解释原因', score: 3 },
          { label: 'C', text: '严厉批评孩子不听话', score: 2 },
          { label: 'D', text: '不管不顾，和孩子冷战', score: 1 }
        ]
      },
      {
        question: '孩子向你表达负面情绪（如伤心、愤怒），你会？',
        options: [
          {
            label: 'A',
            text: '接纳孩子的情绪，安抚后引导孩子表达原因',
            score: 4
          },
          { label: 'B', text: '安抚孩子，但不太愿意深入了解', score: 3 },
          { label: 'C', text: '告诉孩子"别难过""别生气"，忽视情绪', score: 2 },
          { label: 'D', text: '指责孩子小题大做，不懂事', score: 1 }
        ]
      },
      {
        question: '你会向孩子分享自己的工作和生活吗？',
        options: [
          { label: 'A', text: '经常分享，让孩子了解自己的状态', score: 4 },
          { label: 'B', text: '偶尔分享，孩子问起时会说', score: 3 },
          { label: 'C', text: '很少分享，觉得孩子不懂', score: 2 },
          { label: 'D', text: '从不分享，觉得没必要', score: 1 }
        ]
      }
    ],
    results: [
      {
        min: 16,
        max: 20,
        title: '亲子沟通典范，关系亲密和谐',
        desc:
          '你是亲子沟通的高手，能充分尊重孩子的想法和情绪，认真倾听孩子的表达，用平等的姿态与孩子沟通。建议继续保持这种模式，随着孩子成长调整沟通方式。'
      },
      {
        min: 12,
        max: 15,
        title: '亲子沟通良好，需注重细节',
        desc:
          '你与孩子的沟通整体良好，能做到倾听和关心孩子，但在一些细节上还有提升空间。建议多学习儿童心理学知识，在沟通时更精准地把握孩子的需求。'
      },
      {
        min: 8,
        max: 11,
        title: '亲子沟通不畅，存在认知偏差',
        desc:
          '你与孩子的沟通存在明显障碍，缺乏对孩子的尊重和理解。建议转变教育观念，将孩子视为独立的个体，学会倾听和接纳孩子的情绪。'
      },
      {
        min: 5,
        max: 7,
        title: '亲子沟通严重缺失，关系紧张',
        desc:
          '你与孩子之间几乎没有有效的沟通，长期用打骂、冷战、命令等极端方式对待孩子。建议立即停止这种错误的教育方式，寻求专业亲子教育咨询师的帮助。'
      }
    ]
  },
  {
    id: 'qinggan_7',
    title: '职场人际关系和谐度测试',
    questions: [
      {
        question: '同事需要你帮忙完成一份紧急工作，你力所能及的情况下会？',
        options: [
          { label: 'A', text: '主动帮忙，合理安排自己的工作', score: 4 },
          { label: 'B', text: '答应帮忙，但会说明自己的工作优先级', score: 3 },
          { label: 'C', text: '不太愿意，但不好意思拒绝', score: 2 },
          { label: 'D', text: '直接拒绝，觉得和自己无关', score: 1 }
        ]
      },
      {
        question: '同事在工作中出现失误影响到你，你会？',
        options: [
          {
            label: 'A',
            text: '先解决问题，事后和同事委婉沟通失误原因',
            score: 4
          },
          { label: 'B', text: '有点生气，但会一起解决问题', score: 3 },
          { label: 'C', text: '当场指责同事，让同事承担责任', score: 2 },
          { label: 'D', text: '向领导告状，隐瞒自己的处理过程', score: 1 }
        ]
      },
      {
        question: '你会主动和同事交流工作心得或生活趣事吗？',
        options: [
          { label: 'A', text: '经常交流，主动营造良好的同事关系', score: 4 },
          { label: 'B', text: '偶尔交流，工作之余会聊几句', score: 3 },
          { label: 'C', text: '只和熟悉的同事交流，其他人很少接触', score: 2 },
          { label: 'D', text: '从不交流，觉得和同事只是工作关系', score: 1 }
        ]
      },
      {
        question: '领导把一项重要任务交给你和同事合作，你会？',
        options: [
          {
            label: 'A',
            text: '主动和同事分工，明确责任，定期沟通进度',
            score: 4
          },
          { label: 'B', text: '按照自己的想法做事，偶尔和同事沟通', score: 3 },
          { label: 'C', text: '尽量推给同事做，自己少出力', score: 2 },
          { label: 'D', text: '和同事争夺主导权，互不配合', score: 1 }
        ]
      },
      {
        question: '同事获得晋升，你会？',
        options: [
          { label: 'A', text: '主动祝贺，向同事学习优点', score: 4 },
          { label: 'B', text: '心里有点羡慕，但会礼貌祝贺', score: 3 },
          { label: 'C', text: '心里嫉妒，觉得不公平', score: 2 },
          { label: 'D', text: '背后诋毁同事，散布负面言论', score: 1 }
        ]
      }
    ],
    results: [
      {
        min: 16,
        max: 20,
        title: '职场社交达人，人际氛围融洽',
        desc:
          '你拥有出色的职场人际关系处理能力，能主动营造良好的同事关系，做到互助互利、相互尊重。建议继续发挥协调优势，在团队中发挥协调作用。'
      },
      {
        min: 12,
        max: 15,
        title: '职场人际良好，合作顺畅',
        desc:
          '你与职场同事的关系良好，能做到基本的尊重和配合。建议在合作中更主动地表达自己的想法，同时多倾听同事的意见。'
      },
      {
        min: 8,
        max: 11,
        title: '职场人际紧张，合作存在阻碍',
        desc:
          '你在职场中的人际关系较为紧张，缺乏主动沟通的意识。建议转变职场心态，主动向优秀的同事学习，在合作中多付出、少计较。'
      },
      {
        min: 5,
        max: 7,
        title: '职场人际恶劣，发展受限',
        desc:
          '你在职场中的人际关系非常恶劣，缺乏基本的职业素养。建议深刻反思自己的行为，学习职场礼仪和沟通技巧，重新建立职场信任。'
      }
    ]
  },
  {
    id: 'qinggan_8',
    title: '共情能力测试',
    questions: [
      {
        question: '朋友向你倾诉失恋的痛苦，你会？',
        options: [
          {
            label: 'A',
            text: '陪伴在朋友身边，表达理解和心疼，倾听细节',
            score: 4
          },
          { label: 'B', text: '说些安慰的话，认同朋友的感受', score: 3 },
          { label: 'C', text: '劝朋友"别难过了，再找一个"', score: 2 },
          { label: 'D', text: '觉得朋友小题大做，转移话题', score: 1 }
        ]
      },
      {
        question: '看到陌生人在公共场合情绪崩溃，你会？',
        options: [
          {
            label: 'A',
            text: '主动上前询问是否需要帮助，递上纸巾等',
            score: 4
          },
          { label: 'B', text: '远远关注，担心对方有危险', score: 3 },
          { label: 'C', text: '觉得对方影响公共秩序，有点反感', score: 2 },
          { label: 'D', text: '视而不见，匆匆离开', score: 1 }
        ]
      },
      {
        question: '家人因工作失误被批评，回家后情绪低落，你会？',
        options: [
          {
            label: 'A',
            text: '主动关心，听家人倾诉，帮家人分析问题',
            score: 4
          },
          { label: 'B', text: '安慰家人，让家人别往心里去', score: 3 },
          {
            label: 'C',
            text: '说"这点小事不算什么"，忽视家人的情绪',
            score: 2
          },
          { label: 'D', text: '指责家人不够努力，才会被批评', score: 1 }
        ]
      },
      {
        question: '和观点不同的人争论时，你会？',
        options: [
          {
            label: 'A',
            text: '认真倾听对方的想法，尝试理解对方的立场',
            score: 4
          },
          { label: 'B', text: '坚持自己的观点，但会听对方说完', score: 3 },
          { label: 'C', text: '打断对方，极力说服对方', score: 2 },
          { label: 'D', text: '直接反驳，嘲笑对方的观点', score: 1 }
        ]
      },
      {
        question: '下属因压力大而工作效率下降，你会？',
        options: [
          {
            label: 'A',
            text: '和下属沟通，了解压力来源，提供支持和调整建议',
            score: 4
          },
          { label: 'B', text: '提醒下属提高效率，但不问原因', score: 3 },
          { label: 'C', text: '批评下属态度不认真', score: 2 },
          { label: 'D', text: '直接安排其他人接手工作', score: 1 }
        ]
      }
    ],
    results: [
      {
        min: 16,
        max: 20,
        title: '共情能力卓越，善解人意',
        desc:
          '你拥有卓越的共情能力，能快速捕捉他人的情绪变化，真正站在对方的角度理解其感受和需求。建议继续发挥这种优势，同时注意保护自己的情绪，避免过度共情导致自身疲惫。'
      },
      {
        min: 12,
        max: 15,
        title: '共情能力良好，能感知他人情绪',
        desc:
          '你的共情能力良好，能感知到他人的情绪变化，在对方需要时会给予安慰和支持。建议多关注不同群体的生活经历，拓宽自己的认知边界。'
      },
      {
        min: 8,
        max: 11,
        title: '共情能力不足，缺乏换位思考',
        desc:
          '你的共情能力较为薄弱，很难真正理解他人的情绪和需求。建议多倾听他人的故事，刻意练习换位思考，在交流时先关注情绪再解决问题。'
      },
      {
        min: 5,
        max: 7,
        title: '共情能力缺失，人际关系疏离',
        desc:
          '你几乎缺乏共情能力，完全无法感知他人的情绪，对他人的困境漠不关心。建议认识到共情能力对人际关系的重要性，从关心身边的人做起。'
      }
    ]
  },
  {
    id: 'qinggan_9',
    title: '失恋后心理恢复能力测试',
    questions: [
      {
        question: '刚失恋时，你会如何调节情绪？',
        options: [
          {
            label: 'A',
            text: '接纳失恋的痛苦，通过运动、社交等方式释放情绪',
            score: 4
          },
          { label: 'B', text: '向家人朋友倾诉，寻求安慰', score: 3 },
          { label: 'C', text: '独自躲起来伤心，不愿和人交流', score: 2 },
          { label: 'D', text: '借酒消愁，沉迷游戏等逃避现实', score: 1 }
        ]
      },
      {
        question: '看到前任和新欢的消息，你会？',
        options: [
          { label: 'A', text: '坦然面对，祝福对方，专注自己的生活', score: 4 },
          { label: 'B', text: '有点失落，但会尽快转移注意力', score: 3 },
          { label: 'C', text: '心里嫉妒，忍不住关注对方的动态', score: 2 },
          { label: 'D', text: '愤怒不已，想报复对方或新欢', score: 1 }
        ]
      },
      {
        question: '失恋一个月后，你能正常投入工作和生活吗？',
        options: [
          { label: 'A', text: '能正常投入，还会主动提升自己', score: 4 },
          { label: 'B', text: '基本能投入，但偶尔会情绪低落', score: 3 },
          { label: 'C', text: '工作生活受影响，效率明显下降', score: 2 },
          { label: 'D', text: '无法投入，整日精神恍惚', score: 1 }
        ]
      },
      {
        question: '你会如何看待这段失恋的经历？',
        options: [
          { label: 'A', text: '认为是成长的机会，从中总结经验', score: 4 },
          { label: 'B', text: '觉得有点遗憾，但接受现实', score: 3 },
          { label: 'C', text: '沉浸在遗憾中，后悔自己的做法', score: 2 },
          { label: 'D', text: '觉得是对方的错，怨恨对方', score: 1 }
        ]
      },
      {
        question: '失恋后，你会愿意开始新的感情吗？',
        options: [
          { label: 'A', text: '调整好自己后，会主动接触新的人', score: 4 },
          { label: 'B', text: '等缘分，有人追求会考虑', score: 3 },
          { label: 'C', text: '暂时不愿意，害怕再次受伤', score: 2 },
          { label: 'D', text: '再也不想谈恋爱，对感情失去信心', score: 1 }
        ]
      }
    ],
    results: [
      {
        min: 16,
        max: 20,
        title: '恢复能力超强，理性面对失恋',
        desc:
          '你拥有极强的失恋后心理恢复能力，能坦然接纳失恋的痛苦，并用健康的方式释放情绪。建议继续保持这种理性，在新的感情中运用过往的经验。'
      },
      {
        min: 12,
        max: 15,
        title: '恢复能力良好，逐步走出阴影',
        desc:
          '你的失恋后心理恢复能力良好，能通过倾诉、自我调节等方式释放负面情绪。建议多参与社交活动，培养新的兴趣爱好，让自己的生活更加丰富。'
      },
      {
        min: 8,
        max: 11,
        title: '恢复能力不足，难以走出失恋',
        desc:
          '你的失恋后心理恢复能力较弱，长时间沉浸在失恋的痛苦中。建议主动寻求家人朋友的帮助，必要时可咨询心理咨询师。'
      },
      {
        min: 5,
        max: 7,
        title: '恢复能力极弱，陷入情感困境',
        desc:
          '你几乎无法从失恋中恢复，长期处于负面情绪中，甚至出现报复、自我伤害等极端想法。建议立即寻求专业心理帮助，在专业指导下走出困境。'
      }
    ]
  },
  {
    id: 'qinggan_10',
    title: '情感表达能力测试',
    questions: [
      {
        question: '当你想对家人表达爱意时，你会？',
        options: [
          { label: 'A', text: '直接说出"我爱你"，并配合拥抱等行动', score: 4 },
          { label: 'B', text: '通过行动表达，如做家务、买礼物', score: 3 },
          { label: 'C', text: '心里想但说不出口，觉得不好意思', score: 2 },
          { label: 'D', text: '觉得没必要表达，家人应该知道', score: 1 }
        ]
      },
      {
        question: '当你对朋友的行为感到不满时，你会？',
        options: [
          {
            label: 'A',
            text: '找合适的时机，委婉但清晰地表达自己的感受',
            score: 4
          },
          { label: 'B', text: '直接告诉朋友，但语气可能有点冲', score: 3 },
          { label: 'C', text: '憋在心里，不愿引发冲突', score: 2 },
          { label: 'D', text: '在背后抱怨，但不当面说', score: 1 }
        ]
      },
      {
        question: '当你在工作中取得成绩时，你会？',
        options: [
          { label: 'A', text: '适度分享喜悦，感谢帮助过自己的人', score: 4 },
          { label: 'B', text: '和亲近的人分享，但不会大范围宣传', score: 3 },
          { label: 'C', text: '低调处理，担心被人说炫耀', score: 2 },
          { label: 'D', text: '觉得没什么值得分享的', score: 1 }
        ]
      },
      {
        question: '当你感到压力很大时，你会？',
        options: [
          { label: 'A', text: '主动向家人朋友倾诉，寻求支持', score: 4 },
          { label: 'B', text: '通过运动、听歌等方式自我调节', score: 3 },
          { label: 'C', text: '独自承受，不愿让别人担心', score: 2 },
          { label: 'D', text: '把情绪发泄到身边人身上', score: 1 }
        ]
      },
      {
        question: '当你想感谢帮助过你的人时，你会？',
        options: [
          {
            label: 'A',
            text: '当面真诚表达感谢，并说明对方的帮助有多重要',
            score: 4
          },
          { label: 'B', text: '发消息或送小礼物表示感谢', score: 3 },
          { label: 'C', text: '心里感激，但不知道怎么表达', score: 2 },
          { label: 'D', text: '觉得对方帮忙是应该的，不用特意感谢', score: 1 }
        ]
      }
    ],
    results: [
      {
        min: 16,
        max: 20,
        title: '情感表达高手，沟通顺畅',
        desc:
          '你拥有出色的情感表达能力，能清晰、恰当地表达自己的情感，无论是爱意、感谢还是不满。建议继续保持这种能力，同时也鼓励身边的人学会表达。'
      },
      {
        min: 12,
        max: 15,
        title: '情感表达良好，偶有保留',
        desc:
          '你的情感表达能力良好，能在大多数情况下表达自己的感受。建议在表达不满时更注重方式方法，在表达爱意时更直接一些。'
      },
      {
        min: 8,
        max: 11,
        title: '情感表达不足，容易产生误解',
        desc:
          '你的情感表达能力较弱，习惯把情感藏在心里，不愿主动表达。建议从小事开始练习表达，如每天向家人说一句感谢的话。'
      },
      {
        min: 5,
        max: 7,
        title: '情感表达缺失，人际关系受阻',
        desc:
          '你几乎不会表达自己的情感，要么沉默，要么用不恰当的方式发泄。建议认识到情感表达对人际关系的重要性，学习基本的表达技巧。'
      }
    ]
  }
]

export default emotionTestData2
