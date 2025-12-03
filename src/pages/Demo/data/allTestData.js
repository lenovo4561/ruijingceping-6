/**
 * 测试数据汇总文件
 * 整合所有测试数据，方便统一导入使用
 */
import emotionTestData from './emotionTestData'
import emotionTestData2 from './emotionTestData2'
import personalityTestData from './personalityTestData'
import personalityTestData2 from './personalityTestData2'
import careerTestData from './careerTestData'
import careerTestData2 from './careerTestData2'
import interestTestData from './interestTestData'
import interestTestData2 from './interestTestData2'
import eqTestData from './eqTestData'
import lifeKnowledgeData from './lifeKnowledgeData'

// 合并情感测试数据（10套）
const allEmotionTests = [...emotionTestData, ...emotionTestData2]

// 合并性格测试数据（10套）
const allPersonalityTests = [...personalityTestData, ...personalityTestData2]

// 合并事业测试数据（10套）
const allCareerTests = [...careerTestData, ...careerTestData2]

// 合并趣味测试数据（10套）
const allInterestTests = [...interestTestData, ...interestTestData2]

// 所有测试数据汇总
const allTestData = {
  // 情感测试（10套）
  qinggan: allEmotionTests,

  // 性格测试（10套）
  xingge: allPersonalityTests,

  // 事业测试（10套）
  shiye: allCareerTests,

  // 趣味测试（10套）
  quwei: allInterestTests,

  // 情商测试（1套）
  eq: eqTestData,

  // 生活常识（知识类）
  knowledge: lifeKnowledgeData
}

export default allTestData

// 也可以单独导出各类测试数据
export {
  allEmotionTests,
  allPersonalityTests,
  allCareerTests,
  allInterestTests,
  eqTestData,
  lifeKnowledgeData
}
