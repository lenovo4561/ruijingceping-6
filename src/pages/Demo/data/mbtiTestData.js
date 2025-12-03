/**
 * MBTI 人格测试数据
 * 共 52 道题，分为 4 个维度：
 * - E-I（外倾-内倾）：13 道
 * - S-N（感觉-直觉）：13 道
 * - T-F（思考-情感）：13 道
 * - J-P（判断-知觉）：13 道
 *
 * 评分规则：
 * - 每个维度统计选择 A 和 B 的数量
 * - A 对应维度前者（E/S/T/J），B 对应维度后者（I/N/F/P）
 * - 得分高的即为该维度的倾向
 */

import mbtiPersonalityTypes from './mbtiPersonalityTypes.js'

const mbtiTestData = {
  title: 'MBTI 人格测试',
  description: '通过 52 道题目，测试你的 MBTI 人格类型',
  dimensions: [
    { id: 'EI', name: '外倾(E) - 内倾(I)', optionA: 'E', optionB: 'I' },
    { id: 'SN', name: '感觉(S) - 直觉(N)', optionA: 'S', optionB: 'N' },
    { id: 'TF', name: '思考(T) - 情感(F)', optionA: 'T', optionB: 'F' },
    { id: 'JP', name: '判断(J) - 知觉(P)', optionA: 'J', optionB: 'P' }
  ],
  questions: [
    // ========== 外倾（E）- 内倾（I）维度（13 道）==========
    {
      id: 1,
      dimension: 'EI',
      question: '当你参加聚会时，你更倾向于：',
      options: [
        { label: 'A', text: '主动与很多人交流，享受热闹氛围' },
        { label: 'B', text: '只和熟悉的人聊天，避免过多社交' }
      ]
    },
    {
      id: 2,
      dimension: 'EI',
      question: '你获取能量的主要方式是：',
      options: [
        { label: 'A', text: '与他人相处互动' },
        { label: 'B', text: '独自安静思考' }
      ]
    },
    {
      id: 3,
      dimension: 'EI',
      question: '面对重要决策，你通常会：',
      options: [
        { label: 'A', text: '先和他人讨论，听取不同意见' },
        { label: 'B', text: '自己先冷静分析，再做决定' }
      ]
    },
    {
      id: 4,
      dimension: 'EI',
      question: '周末休息时，你更愿意：',
      options: [
        { label: 'A', text: '约朋友出门游玩、看电影等' },
        { label: 'B', text: '在家看书、追剧或做自己喜欢的事' }
      ]
    },
    {
      id: 5,
      dimension: 'EI',
      question: '当你有好消息时，你会：',
      options: [
        { label: 'A', text: '立刻分享给身边的人' },
        { label: 'B', text: '先自己开心一会儿，再选择性分享' }
      ]
    },
    {
      id: 6,
      dimension: 'EI',
      question: '在团队工作中，你更擅长：',
      options: [
        { label: 'A', text: '组织协调大家的工作，活跃团队气氛' },
        { label: 'B', text: '专注完成自己负责的部分，保证质量' }
      ]
    },
    {
      id: 7,
      dimension: 'EI',
      question: '你更倾向于在什么情况下思考问题：',
      options: [
        { label: 'A', text: '和他人交流过程中，碰撞出思路' },
        { label: 'B', text: '独自安静的环境中，深入思考' }
      ]
    },
    {
      id: 8,
      dimension: 'EI',
      question: '你对新认识的人，通常会：',
      options: [
        { label: 'A', text: '很快就能和对方熟悉起来' },
        { label: 'B', text: '需要较长时间才能真正了解对方' }
      ]
    },
    {
      id: 9,
      dimension: 'EI',
      question: '当工作任务繁重时，你会：',
      options: [
        { label: 'A', text: '找同事一起分担，共同完成' },
        { label: 'B', text: '自己默默承担，尽力完成' }
      ]
    },
    {
      id: 10,
      dimension: 'EI',
      question: '你更喜欢哪种学习方式：',
      options: [
        { label: 'A', text: '参加线下培训班，和同学一起学习' },
        { label: 'B', text: '在线上自主学习，按照自己的节奏来' }
      ]
    },
    {
      id: 11,
      dimension: 'EI',
      question: '在社交场合中，你是否会主动发起话题：',
      options: [
        { label: 'A', text: '经常主动发起' },
        { label: 'B', text: '很少主动，更倾向于回应他人' }
      ]
    },
    {
      id: 12,
      dimension: 'EI',
      question: '你更愿意把时间花在：',
      options: [
        { label: 'A', text: '参加各种社交活动' },
        { label: 'B', text: '进行个人兴趣爱好相关的活动' }
      ]
    },
    {
      id: 13,
      dimension: 'EI',
      question: '当你遇到困难时，你首先会：',
      options: [
        { label: 'A', text: '向他人求助' },
        { label: 'B', text: '自己尝试解决' }
      ]
    },

    // ========== 感觉（S）- 直觉（N）维度（13 道）==========
    {
      id: 14,
      dimension: 'SN',
      question: '你在了解一件新事物时，更关注：',
      options: [
        { label: 'A', text: '具体的细节和实际情况' },
        { label: 'B', text: '事物的整体趋势和潜在可能性' }
      ]
    },
    {
      id: 15,
      dimension: 'SN',
      question: '你做决策时，更依赖：',
      options: [
        { label: 'A', text: '过去的经验和实际数据' },
        { label: 'B', text: '自己的直觉和想象' }
      ]
    },
    {
      id: 16,
      dimension: 'SN',
      question: '你对未来的规划，更倾向于：',
      options: [
        { label: 'A', text: '基于当前的情况，制定具体可行的计划' },
        { label: 'B', text: '畅想各种可能性，灵活调整计划' }
      ]
    },
    {
      id: 17,
      dimension: 'SN',
      question: '你阅读时，更注重：',
      options: [
        { label: 'A', text: '书中的具体内容和事实信息' },
        { label: 'B', text: '书中传达的观点和启发' }
      ]
    },
    {
      id: 18,
      dimension: 'SN',
      question: '当你看到一个新产品时，你首先会想到：',
      options: [
        { label: 'A', text: '它的功能、使用方法和价格等实际信息' },
        { label: 'B', text: '它可能带来的新变化和发展前景' }
      ]
    },
    {
      id: 19,
      dimension: 'SN',
      question: '你在解决问题时，更擅长：',
      options: [
        { label: 'A', text: '一步一步分析，找出具体的解决方案' },
        { label: 'B', text: '从不同角度思考，寻找创新的解决办法' }
      ]
    },
    {
      id: 20,
      dimension: 'SN',
      question: '你对生活的态度，更偏向于：',
      options: [
        { label: 'A', text: '注重当下的生活，享受眼前的快乐' },
        { label: 'B', text: '期待未来的变化，追求更有意义的生活' }
      ]
    },
    {
      id: 21,
      dimension: 'SN',
      question: '你在回忆过去时，更容易记住：',
      options: [
        { label: 'A', text: '具体的事件、时间和地点等细节' },
        { label: 'B', text: '当时的感受和整体的氛围' }
      ]
    },
    {
      id: 22,
      dimension: 'SN',
      question: '你在学习新技能时，更关注：',
      options: [
        { label: 'A', text: '技能的实际应用和操作步骤' },
        { label: 'B', text: '技能背后的原理和拓展空间' }
      ]
    },
    {
      id: 23,
      dimension: 'SN',
      question: '你对他人的评价，更看重：',
      options: [
        { label: 'A', text: '对方的实际行为和具体表现' },
        { label: 'B', text: '对方的内在品质和潜在能力' }
      ]
    },
    {
      id: 24,
      dimension: 'SN',
      question: '你在安排日程时，更倾向于：',
      options: [
        { label: 'A', text: '制定详细的时间表，严格按照计划执行' },
        { label: 'B', text: '只确定大致的方向，根据情况灵活调整' }
      ]
    },
    {
      id: 25,
      dimension: 'SN',
      question: '你看到一幅画时，首先会注意到：',
      options: [
        { label: 'A', text: '画的色彩、线条等具体细节' },
        { label: 'B', text: '画所表达的主题和情感' }
      ]
    },
    {
      id: 26,
      dimension: 'SN',
      question: '你在面对变化时，更倾向于：',
      options: [
        { label: 'A', text: '保持稳定，尽量避免太大的变动' },
        { label: 'B', text: '积极适应，从中寻找新的机会' }
      ]
    },

    // ========== 思考（T）- 情感（F）维度（13 道）==========
    {
      id: 27,
      dimension: 'TF',
      question: '当你需要评判一个人的行为时，你更注重：',
      options: [
        { label: 'A', text: '行为是否符合客观规则和道理' },
        { label: 'B', text: '行为是否考虑到他人的感受和需求' }
      ]
    },
    {
      id: 28,
      dimension: 'TF',
      question: '你在做决策时，更优先考虑：',
      options: [
        { label: 'A', text: '决策的合理性和逻辑性' },
        { label: 'B', text: '决策对他人的影响和情感因素' }
      ]
    },
    {
      id: 29,
      dimension: 'TF',
      question: '当团队中出现矛盾时，你会：',
      options: [
        { label: 'A', text: '理性分析矛盾的原因，提出客观的解决方案' },
        { label: 'B', text: '先关注双方的情绪，努力调和彼此的关系' }
      ]
    },
    {
      id: 30,
      dimension: 'TF',
      question: '你对他人的建议，更倾向于：',
      options: [
        { label: 'A', text: '从理性角度分析建议的可行性' },
        { label: 'B', text: '考虑建议背后他人的善意和情感' }
      ]
    },
    {
      id: 31,
      dimension: 'TF',
      question: '当你看到不公平的事情发生时，你会：',
      options: [
        { label: 'A', text: '依据规则和道理，维护公平正义' },
        { label: 'B', text: '先同情受委屈的一方，再想办法帮助' }
      ]
    },
    {
      id: 32,
      dimension: 'TF',
      question: '你在工作中，更看重：',
      options: [
        { label: 'A', text: '工作的效率和成果' },
        { label: 'B', text: '同事之间的和谐氛围和合作关系' }
      ]
    },
    {
      id: 33,
      dimension: 'TF',
      question: '你在批评他人时，会：',
      options: [
        { label: 'A', text: '直接指出问题所在，给出改进建议' },
        { label: 'B', text: '先考虑对方的感受，委婉地提出批评' }
      ]
    },
    {
      id: 34,
      dimension: 'TF',
      question: '你在选择职业时，更关注：',
      options: [
        { label: 'A', text: '职业的发展前景和薪资待遇等实际因素' },
        { label: 'B', text: '职业是否符合自己的价值观和兴趣爱好，能否帮助他人' }
      ]
    },
    {
      id: 35,
      dimension: 'TF',
      question: '当你和他人发生分歧时，你会：',
      options: [
        { label: 'A', text: '坚持自己的观点，用道理说服对方' },
        { label: 'B', text: '尽量理解对方的想法，寻求双方都能接受的方案' }
      ]
    },
    {
      id: 36,
      dimension: 'TF',
      question: '你在评价一个项目时，更看重：',
      options: [
        { label: 'A', text: '项目的经济效益和实际成果' },
        { label: 'B', text: '项目对团队成员的成长和对社会的贡献' }
      ]
    },
    {
      id: 37,
      dimension: 'TF',
      question: '当你需要拒绝他人时，你会：',
      options: [
        { label: 'A', text: '直接说明原因，明确拒绝' },
        { label: 'B', text: '尽量委婉，避免伤害对方的感情' }
      ]
    },
    {
      id: 38,
      dimension: 'TF',
      question: '你在处理人际关系时，更注重：',
      options: [
        { label: 'A', text: '保持理性和客观，避免情绪化' },
        { label: 'B', text: '关注他人的情感需求，建立良好的关系' }
      ]
    },
    {
      id: 39,
      dimension: 'TF',
      question: '你在做道德判断时，更依据：',
      options: [
        { label: 'A', text: '普遍的道德准则和逻辑推理' },
        { label: 'B', text: '个人的情感和对他人的同情' }
      ]
    },

    // ========== 判断（J）- 知觉（P）维度（13 道）==========
    {
      id: 40,
      dimension: 'JP',
      question: '你更倾向于：',
      options: [
        { label: 'A', text: '提前做好计划，按照计划行事' },
        { label: 'B', text: '灵活应对，根据实际情况调整' }
      ]
    },
    {
      id: 41,
      dimension: 'JP',
      question: '当工作任务还没完成时，你会：',
      options: [
        { label: 'A', text: '尽快完成，避免拖延' },
        { label: 'B', text: '不着急，在截止日期前完成即可' }
      ]
    },
    {
      id: 42,
      dimension: 'JP',
      question: '你对生活的安排，更偏向于：',
      options: [
        { label: 'A', text: '有规律、有秩序' },
        { label: 'B', text: '自由、灵活，不受太多约束' }
      ]
    },
    {
      id: 43,
      dimension: 'JP',
      question: '当你有多个任务需要完成时，你会：',
      options: [
        { label: 'A', text: '先制定计划，按重要性和紧急程度排序完成' },
        { label: 'B', text: '先做自己感兴趣的，再逐步完成其他任务' }
      ]
    },
    {
      id: 44,
      dimension: 'JP',
      question: '你更喜欢哪种工作环境：',
      options: [
        { label: 'A', text: '有明确的规章制度和工作流程' },
        { label: 'B', text: '氛围轻松，工作方式灵活' }
      ]
    },
    {
      id: 45,
      dimension: 'JP',
      question: '当你收到一个任务时，你会：',
      options: [
        { label: 'A', text: '立刻开始做，尽早完成' },
        { label: 'B', text: '先了解任务情况，再慢慢开始' }
      ]
    },
    {
      id: 46,
      dimension: 'JP',
      question: '你对自己的物品，更倾向于：',
      options: [
        { label: 'A', text: '整理得井井有条' },
        { label: 'B', text: '随意放置，只要自己能找到就行' }
      ]
    },
    {
      id: 47,
      dimension: 'JP',
      question: '当计划被打乱时，你会：',
      options: [
        { label: 'A', text: '感到焦虑，尽快重新制定计划' },
        { label: 'B', text: '觉得无所谓，灵活调整即可' }
      ]
    },
    {
      id: 48,
      dimension: 'JP',
      question: '你在购物时，更倾向于：',
      options: [
        { label: 'A', text: '提前列好购物清单，按清单购买' },
        { label: 'B', text: '即兴购物，看到喜欢的就买' }
      ]
    },
    {
      id: 49,
      dimension: 'JP',
      question: '你在完成工作后，会：',
      options: [
        { label: 'A', text: '仔细检查，确保没有问题' },
        { label: 'B', text: '大致看一下，觉得可以就行' }
      ]
    },
    {
      id: 50,
      dimension: 'JP',
      question: '你对时间的观念，更偏向于：',
      options: [
        { label: 'A', text: '严格遵守时间，不迟到' },
        { label: 'B', text: '对时间要求不那么严格，偶尔迟到也没关系' }
      ]
    },
    {
      id: 51,
      dimension: 'JP',
      question: '你在准备考试时，会：',
      options: [
        { label: 'A', text: '提前制定复习计划，按计划复习' },
        { label: 'B', text: '根据自己的状态，随时调整复习内容和时间' }
      ]
    },
    {
      id: 52,
      dimension: 'JP',
      question: '你更愿意生活在：',
      options: [
        { label: 'A', text: '一切都有安排、可预测的环境中' },
        { label: 'B', text: '充满变化、充满惊喜的环境中' }
      ]
    }
  ],

  // 16 种人格类型详细解读
  personalityTypes: mbtiPersonalityTypes
}

export default mbtiTestData
