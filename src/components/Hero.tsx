import './Hero.css'
import SimpleButton from './SimpleButton'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1>打造现代化前端应用</h1>
        <p>
          使用 React + Vite 构建的高性能演示项目，
          展示了现代前端开发的最佳实践。
        </p>
        <div className="hero-buttons">
          <button className="btn" onClick={() => alert('开始体验！')}>
            开始体验
          </button>
          <button className="btn btn-secondary" onClick={() => alert('查看文档')}>
            查看文档
          </button>
        </div>
        <div className="hero-simple-button">
          <SimpleButton text="立即试用" onClick={() => alert('欢迎试用 SimpleButton！')} />
        </div>
      </div>
    </section>
  )
}

export default Hero
