import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>欢迎来到我的个人主页</h1>
        <p>前端开发工程师 | React 爱好者</p>
      </header>
      
      <main className="main-content">
        <section className="about-me">
          <h2>关于我</h2>
          <p>热爱编程，专注于前端开发，擅长 React、JavaScript 和 CSS。</p>
        </section>

        <section className="skills">
          <h2>技能专长</h2>
          <div className="skills-grid">
            <div className="skill-item">React</div>
            <div className="skill-item">JavaScript</div>
            <div className="skill-item">HTML5</div>
            <div className="skill-item">CSS3</div>
            <div className="skill-item">Git</div>
            <div className="skill-item">Node.js</div>
          </div>
        </section>

        <section className="projects">
          <h2>项目展示</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>项目一</h3>
              <p>使用 React 开发的个人博客系统</p>
            </div>
            <div className="project-card">
              <h3>项目二</h3>
              <p>基于 Node.js 的在线聊天应用</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2024 个人主页 | 由 React 强力驱动</p>
      </footer>
    </div>
  );
}

export default App;
