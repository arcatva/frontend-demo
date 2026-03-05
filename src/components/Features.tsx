import './Features.css'
import SimpleButton from './SimpleButton'

const features = [
  {
    icon: '⚡',
    title: '高性能',
    description: '基于 Vite 构建，启动快、热更新及时，开发体验极佳。',
  },
  {
    icon: '🎨',
    title: '现代设计',
    description: '采用现代化 UI 设计，简洁美观的界面，良好的用户体验。',
  },
  {
    icon: '📱',
    title: '响应式布局',
    description: '适配各种屏幕尺寸，无论手机、平板还是桌面端都能完美展示。',
  },
  {
    icon: '📜',
    title: '类型安全',
    description: '使用 TypeScript 开发，提供完整的类型支持，减少运行时错误。',
  },
]

function Features() {
  return (
    <section className="features">
      <div className="container">
        <h2 className="section-title">核心特性</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="features-action">
          <SimpleButton text="了解更多功能" onClick={() => alert('更多功能即将上线')} />
        </div>
      </div>
    </section>
  )
}

export default Features
