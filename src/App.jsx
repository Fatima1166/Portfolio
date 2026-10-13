import { useEffect, useRef, useState } from 'react'
import ICONS from './icons'
import './index.css'

const Icon = ({ n }) => <svg className="i" viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: ICONS[n] }} />

const NAV = [['home','Home'],['about','About'],['exp','Experience'],['projects','Projects'],['skills','Skills'],['edu','Education'],['certs','Certifications'],['ach','Achievements'],['contact','Contact']]
const ROLES = ['AI & Software Developer','Research Assistant · FUI Energy Analytics','Teaching Assistant · Programming Fundamentals']
const EMAIL = 'fatimaiqbal1166@gmail.com'
const EMAIL_LINK = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`
const PROJECTS = [
  { tag:'Final Year Project', name:'DermaScanAI — Smart SkinCare', text:'An AI-powered skincare project combining machine learning and LLM technology with a React Native app and Firebase.', tech:['ML','LLM','React Native','Firebase'] },
  { tag:'Web & Mobile', name:'Probation Evaluator', text:'A student probation case evaluation application with a FastAPI backend and a React frontend.', tech:['FastAPI','React','Tailwind'], href:'https://probation-evaluator.vercel.app', cta:'Live demo' },
  { tag:'Web & Mobile', name:'Cognitive Metamorphic Cipher', text:'A data security project that explores adaptive cipher behaviour to support secure handling of information.', tech:['PHP','Security'], href:'https://github.com/Fatima1166/CONITIVE-METAMORPHIC-CIPHER-', cta:'GitHub' },
  { tag:'Web & Mobile', name:'MaisonNoir Reservation System', text:'A restaurant booking application designed to help customers make reservations and manage their dining plans.', tech:['Booking','Web'] },
  { tag:'C++ Console', name:'Bookstore Management System', text:'A C++ console application for bookstore management, applying OOP, file handling, and data structure concepts.', tech:['C++','OOP'] },
  { tag:'AI & NLP', name:'RAG Document Project', text:'A Retrieval-Augmented Generation project that uses language models to work with documents and answer queries using their content.', tech:['RAG','LLM','AI'] },
]
const SKILLS = [['Programming','C++, Python, JavaScript, PHP, C#'],['Web','HTML5, CSS3, React, Next.js, ASP.NET'],['Mobile','React Native, Expo, TypeScript'],['Database','MySQL, MongoDB, NoSQL, Firebase, SQL Server'],['AI & ML','Machine Learning Fundamentals, Data Analysis'],['Tools','Git, GitHub, Visual Studio, VS Code, Power BI, Google Colab'],['Concepts','OOP, Data Structures, File Handling, REST APIs, Networking Fundamentals, Cyber Security'],['Soft skills','Problem Solving, Teamwork, Communication, Time Management, Adaptability']]
const CERTS = [['Data Science Essentials with Python','Cisco Networking Academy'],['Artificial Intelligence Fundamentals','IBM SkillsBuild'],['Power BI for Beginners','Microsoft & Simplilearn']]

function useReveal() {
  const ref = useRef(null), [on, setOn] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect() } }, { threshold: 0.12 })
    io.observe(ref.current); return () => io.disconnect()
  }, [])
  return [ref, on]
}

function Card({ as: T = 'div', className = '', children, ...rest }) {
  const [ref, on] = useReveal()
  const move = e => {
    const r = ref.current.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5
    ref.current.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(8px)`
  }
  return <T ref={ref} className={`card rv ${on ? 'on' : ''} ${className}`} onMouseMove={move} onMouseLeave={() => (ref.current.style.transform = '')} {...rest}>{children}</T>
}

function Head({ eyebrow, title }) {
  const [ref, on] = useReveal()
  return <div ref={ref} className={`rv ${on ? 'on' : ''}`}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>
}

function Stat({ to, text, label }) {
  const [ref, on] = useReveal(), [n, setN] = useState(0)
  useEffect(() => {
    if (!on || !to) return
    let c = 0; const k = setInterval(() => { setN(++c); if (c >= to) clearInterval(k) }, 90)
    return () => clearInterval(k)
  }, [on, to])
  return <div ref={ref} className={`card stat rv ${on ? 'on' : ''}`}><b>{to ? n : text}</b><span>{label}</span></div>
}

function useTyper(words) {
  const [t, setT] = useState('')
  useEffect(() => {
    let i = 0, c = 0, d = false, id
    const tick = () => {
      const w = words[i]; setT(w.slice(0, c))
      if (!d && c++ === w.length) { d = true; id = setTimeout(tick, 1400); return }
      if (d && --c < 0) { d = false; c = 0; i = (i + 1) % words.length }
      id = setTimeout(tick, d ? 30 : 60)
    }
    tick(); return () => clearTimeout(id)
  }, [words])
  return t
}

function Scene() {
  const ref = useRef(null)
  useEffect(() => {
    const tilt = (x, y) => { ref.current.style.transform = `rotateY(${-16 + x * 30}deg) rotateX(${8 - y * 22}deg)` }
    tilt(0, 0)
    const mm = e => tilt(e.clientX / innerWidth - 0.5, e.clientY / innerHeight - 0.5)
    const dv = e => { if (e.gamma != null) tilt(e.gamma / 60, (e.beta - 45) / 90) }
    addEventListener('mousemove', mm); addEventListener('deviceorientation', dv)
    return () => { removeEventListener('mousemove', mm); removeEventListener('deviceorientation', dv) }
  }, [])
  return (
    <div className="stage"><div className="sc" ref={ref}>
      <div className="ly l1" /><div className="ly l2" />
      <div className="ly l3"><div>
        <svg className="bulb" viewBox="0 0 24 24" overflow="visible">
          <g className="rays"><path d="M12 -1.5v-2M3.6 1.6 2.2 .2M20.4 1.6l1.4-1.4M-1 10h-2M25 10h2" /></g>
          <path d="M9 18h6M10 21h4M12 2a6 6 0 0 0-3.5 10.9c.7.6 1 1.3 1 2.1h5c0-.8.3-1.5 1-2.1A6 6 0 0 0 12 2z" />
        </svg><br /><span>Innovation</span>
      </div></div>
      <span className="nd n1">Python · ML</span><span className="nd n2">React Native</span><span className="nd n3">Data Analysis</span>
    </div></div>
  )
}

function Carousel() {
  const ring = useRef(null), st = useRef({ rot: 0, drag: false, x: 0, hover: false })
  const N = PROJECTS.length, step = 360 / N, R = Math.round(150 / Math.tan(Math.PI / N)) + 40
  useEffect(() => {
    let id
    const loop = () => {
      const s = st.current; if (!s.hover && !s.drag) s.rot -= 0.12
      ring.current.style.transform = `translateZ(${-R}px) rotateY(${s.rot}deg)`; id = requestAnimationFrame(loop)
    }
    loop()
    const up = () => (st.current.drag = false)
    const mv = e => { const s = st.current; if (s.drag) { s.rot += (e.clientX - s.x) * 0.35; s.x = e.clientX } }
    addEventListener('pointerup', up); addEventListener('pointermove', mv)
    return () => { cancelAnimationFrame(id); removeEventListener('pointerup', up); removeEventListener('pointermove', mv) }
  }, [R])
  return (
    <>
      <div className="car" onPointerDown={e => { st.current.drag = true; st.current.x = e.clientX }} onMouseEnter={() => (st.current.hover = true)} onMouseLeave={() => (st.current.hover = false)}>
        <div className="ring" ref={ring}>
          {PROJECTS.map((p, i) => {
            const T = p.href ? 'a' : 'div', link = p.href ? { href: p.href, target: '_blank', rel: 'noopener' } : {}
            return (
              <T key={p.name} className="card" style={{ transform: `rotateY(${i * step}deg) translateZ(${R}px)` }} {...link}>
                <p className="meta">{p.tag}</p><h3>{p.name}</h3><p>{p.text}</p>
                <div style={{ marginTop: 'auto' }}>{p.tech.map(t => <span className="chip" key={t}>{t}</span>)}
                  {p.href && <p className="meta" style={{ margin: '10px 0 0' }}>{p.cta} ↗</p>}</div>
              </T>
            )
          })}
        </div>
      </div>
      <div className="ctl"><button aria-label="Previous" onClick={() => (st.current.rot += step)}>←</button><button aria-label="Next" onClick={() => (st.current.rot -= step)}>→</button></div>
    </>
  )
}

function Particles() {
  const ref = useRef(null)
  useEffect(() => {
    const cv = ref.current, cx = cv.getContext('2d'); let W, H, id
    const rs = () => { W = cv.width = innerWidth; H = cv.height = innerHeight }; rs(); addEventListener('resize', rs)
    const P = Array.from({ length: 40 }, () => ({ x: Math.random() * 2 - 1, y: Math.random() * 2 - 1, z: Math.random() }))
    const draw = () => {
      cx.clearRect(0, 0, W, H)
      for (const p of P) {
        p.z -= 0.0014; if (p.z <= 0.02) { p.z = 1; p.x = Math.random() * 2 - 1; p.y = Math.random() * 2 - 1 }
        const s = 0.25 / p.z; cx.beginPath(); cx.fillStyle = `rgba(15,118,110,${0.25 * (1 - p.z)})`
        cx.arc(W / 2 + p.x * W * s * 0.5, H / 2 + p.y * H * s * 0.5, Math.max(0.6, 3 * (1 - p.z)), 0, 7); cx.fill()
      }
      id = requestAnimationFrame(draw)
    }
    draw(); return () => { cancelAnimationFrame(id); removeEventListener('resize', rs) }
  }, [])
  return <canvas id="fx" ref={ref} />
}

export default function App() {
  const role = useTyper(ROLES), [active, setActive] = useState('home')
  useEffect(() => {
    const so = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-40% 0px -55% 0px' })
    NAV.forEach(([id]) => so.observe(document.getElementById(id))); return () => so.disconnect()
  }, [])
  return (
    <>
      <Particles /><div className="floor"><i /></div>
      <div className="shell">
        <aside>
          <div className="logo">F</div><h1>Fatima Iqbal</h1><small>AI &amp; Software Developer</small>
          <nav>{NAV.map(([id, label]) => <a key={id} href={`#${id}`} className={active === id ? 'on' : ''}>{label}</a>)}</nav>
          <div className="soc">
            <a href={EMAIL_LINK} target="_blank" rel="noopener noreferrer" aria-label="Email"><Icon n="mail" /></a>
            <a href="https://github.com/Fatima1166" target="_blank" rel="noopener" aria-label="GitHub"><Icon n="gh" /></a>
            <a href="https://www.linkedin.com/in/fatima1166/" target="_blank" rel="noopener" aria-label="LinkedIn"><Icon n="in" /></a>
          </div>
        </aside>
        <main>
          <section id="home">
            <div>
              <p className="eyebrow">Portfolio 2026</p>
              <h2>Building intelligent software, <em>one dataset</em> at a time.</h2>
              <p className="role"><span>{role}</span><i>&nbsp;</i></p>
              <p className="lead">IT student at Foundation University with hands-on experience as a Teaching Assistant and Research Assistant. I build web, mobile and ML-based projects, and I'm seeking a remote internship in software development, AI/ML or data-driven roles.</p>
              <a className="btn p" href="#projects">Explore projects</a><a className="btn s" href={EMAIL_LINK} target="_blank" rel="noopener noreferrer"><Icon n="mail" />Get in touch</a>
            </div>
            <Scene />
          </section>

          <section id="about"><Head eyebrow="About" title="At a glance" />
            <div className="grid"><Stat to={PROJECTS.length} label="Projects built" /><Stat to={3} label="Certifications (2026)" /><Stat to={2} label="Academic roles" /><Stat text="2027" label="Expected graduation" /></div>
            <Card style={{ marginTop: 20 }}><p style={{ color: 'var(--ink)' }}>Strong foundation in OOP, data structures, REST APIs and data analysis. Built multiple web, mobile and ML-based projects, including DermaScanAI and a RAG-based document project.</p></Card>
          </section>

          <section id="exp"><Head eyebrow="Experience" title="Where I've worked" />
            <div className="tl">
              <Card><p className="meta">Foundation University</p><h3>Research Assistant — FUI Energy Analytics</h3>
                <ul><li>Collecting, cleaning, analyzing, and visualizing energy data</li><li>Exploring AI, Machine Learning, and data-driven approaches to identify patterns</li><li>Generating insights to support research and decision-making</li></ul></Card>
              <Card><p className="meta">Foundation University</p><h3>Teaching Assistant — Programming Fundamentals (PF)</h3>
                <ul><li>Assisted students with programming concepts, lab tasks and practical exercises</li><li>Helped students understand basic programming concepts and solve coding problems</li></ul></Card>
            </div>
          </section>

          <section id="projects"><Head eyebrow="Projects" title="Selected work" /><Carousel /></section>

          <section id="skills"><Head eyebrow="Skills" title="Technical toolkit" />
            <div className="grid">{SKILLS.map(([t, s]) => <Card key={t}><h3>{t}</h3>{s.split(', ').map(x => <span className="chip" key={x}>{x}</span>)}</Card>)}</div></section>

          <section id="edu"><Head eyebrow="Education" title="Academic background" />
            <div className="grid">
              <Card><div className="ic"><Icon n="cap" /></div><p className="meta">2023 – 2027</p><h3>Bachelor of Science in Information Technology</h3><p>Foundation University · Current CGPA: 3.32</p></Card>
              <Card><div className="ic"><Icon n="cap" /></div><p className="meta">2020 – 2022</p><h3>Intermediate in Computer Science (ICS)</h3><p>Global College · Grade: A</p></Card>
            </div></section>

          <section id="certs"><Head eyebrow="Certifications" title="Continuous learning" />
            <div className="grid">{CERTS.map(([t, s]) => <Card key={t}><div className="ic"><Icon n="award" /></div><p className="meta">2026</p><h3>{t}</h3><p>{s}</p></Card>)}</div></section>

          <section id="ach"><Head eyebrow="Achievements" title="Recognition & events" />
            <div className="grid">
              <Card><div className="ic"><Icon n="box" /></div><h3>Open House Project Exhibition</h3><p>Presented a university project at the Open House and explained its features and implementation to visitors and faculty members.</p></Card>
              <Card><div className="ic"><Icon n="box" /></div><h3>Alibaba Cloud AI Hackathon</h3><p>Participated and gained practical experience in AI-based problem solving and developing technology solutions.</p></Card>
            </div></section>

          <section id="contact"><Head eyebrow="Contact" title="Let's work together" />
            <Card style={{ maxWidth: 640 }}><p style={{ marginBottom: 18 }}>Seeking a remote internship in software development, AI/ML or data-driven roles.</p>
              <a className="btn p" href={EMAIL_LINK} target="_blank" rel="noopener noreferrer"><Icon n="mail" />{EMAIL}</a>
              <a className="btn s" href="https://www.linkedin.com/in/fatima1166/" target="_blank" rel="noopener">LinkedIn</a>
              <a className="btn s" href="https://github.com/Fatima1166" target="_blank" rel="noopener">GitHub</a></Card>
            <footer>© 2026 Fatima Iqbal</footer></section>
        </main>
      </div>
    </>
  )
}
