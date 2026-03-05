import './About.css'

function About() {
  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">关于我们</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>项目介绍</h3>
            <p>
              这是一个使用 React + Vite + TypeScript 构建的前端演示项目，
              展示了现代前端开发的最佳实践。项目包含完整的页面结构、
              响应式设计和用户交互功能。
            </p>
            <p>
              通过这个项目，您可以了解如何使用现代前端技术栈构建高质量的 Web 应用。
            </p>
          </div>
          <div className="team-section">
            <h3>技术栈</h3>
            <div className="tech-stack">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Vite</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">CSS3</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
