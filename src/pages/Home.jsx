import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import styles from './Home.module.css'

const tags = ['UX & HCI', 'Machine Learning']

// ── ORION (left sky) — true proportions
// Orion is tall: head at top-center, wide shoulders, diagonal belt, wide feet
// Belt tilts ~20° (Mintaka highest-left → Alnitak lowest-right)
// Index: 0=Betelgeuse, 1=Bellatrix, 2=Mintaka, 3=Alnilam, 4=Alnitak, 5=Saiph, 6=Rigel, 7=Meissa

 const ORION = {
  name: 'ORION', labelX: 17, labelY: 6,
  stars: [
  //  { x:13, y:26, r:0.58, color:'#ffb347', name:'Betelgeuse' }, // 0 left shoulder, orange
  //  { x:24, y:23, r:0.36, color:'#cce6ff', name:'Bellatrix'  }, // 1 right shoulder, blue-white
  //  { x:14, y:37, r:0.28, color:'#e8f4ff', name:'Mintaka'    }, // 2 belt left  (highest)
  //  { x:18, y:39, r:0.32, color:'#f0f8ff', name:'Alnilam'    }, // 3 belt center
  //  { x:22, y:41, r:0.28, color:'#e8f4ff', name:'Alnitak'    }, // 4 belt right (lowest)
  // { x:16, y:56, r:0.34, color:'#cce6ff', name:'Saiph'      }, // 5 left foot
  //  { x:26, y:52, r:0.62, color:'#b8d4ff', name:'Rigel'      }, // 6 right foot, brightest
  //  { x:18, y:15, r:0.22, color:'#ffffff', name:'Meissa'      }, // 7 head
  ],
  // head→shoulders, shoulders→belt-ends, belt line, belt→feet
  lines: [
    [7,0],[7,1],       // head to shoulders
    [0,2],[1,4],       // shoulders down to belt ends
    [2,3],[3,4],       // belt L→C→R
    [0,5],[1,6],       // shoulders to feet (crossed, Orion's stance)
    [2,5],[4,6],       // belt ends to feet
  ],
}
 

// ── LEO (right sky)
const LEO = {
  name: 'LEO', labelX: 72, labelY: 8,
  stars: [
    { x:7.75, y:68,    r:0.38, color:'#ffffff', name:'Denebola'  },
    { x:8.25, y:60.25, r:0.32, color:'#ffffff', name:'Zosma'     },
    { x:11.15, y:62.8, r:0.30, color:'#ffffff', name:'Chertan'   },
    { x:20.5, y:54.8,  r:0.40, color:'#ffffff', name:'Regulus'   },
    { x:17.6, y:52.6,  r:0.30, color:'#ffffff', name:'Asterism'  },
    { x:14.4, y:53.2,  r:0.38, color:'#ffffff', name:'Algieba'   },
    { x:12.6, y:51.2,  r:0.30, color:'#ffffff', name:'Adhafera'  },
    { x:13.25, y:46.65,r:0.30, color:'#ffffff', name:'Rasalas'   },
    { x:15.3, y:46.8,  r:0.30, color:'#ffffff', name:'Algenubi'  },
  ],
  lines: [[0,1],[1,2],[0,2],[2,3],[3,4],[4,5],[1,5],[5,6],[6,7],[7,8]],
}

// Milky Way — tiny, faint, clustered in a band
const MILKY_WAY = Array.from({ length: 180 }, (_, i) => {
  const t = i / 180
  return {
    id: i,
    x: (t * 110 - 5).toFixed(1),
    y: (30 + Math.sin(t * Math.PI * 1.4) * 18 + Math.sin(i * 7.3) * 4).toFixed(1),
    r: ((Math.sin(i * 97.3) * 0.5 + 0.5) * 0.12 + 0.04).toFixed(3),
    o: ((Math.sin(i * 37.1) * 0.5 + 0.5) * 0.3 + 0.05).toFixed(2),
  }
})

// Background stars — small, sharp, realistic
// viewBox is 0–100 so r should be ~0.08–0.28 for pixel-sized stars
const BG_STARS = Array.from({ length: 200 }, (_, i) => {
  const colors = ['#ffffff','#ffe8d0','#d0e8ff','#fff8f0','#e8f0ff','#fffde8']
  const sizeSeed = Math.sin(i * 97.3) * 0.5 + 0.5
  return {
    id: i,
    x: ((Math.sin(i * 127.1) * 0.5 + 0.5) * 98 + 1).toFixed(2),
    y: ((Math.sin(i * 311.7) * 0.5 + 0.5) * 98 + 1).toFixed(2),
    r:  (sizeSeed * 0.18 + 0.07).toFixed(3),   // 0.07–0.25 — actual star-sized dots
    color: colors[i % colors.length],
    delay:    ((i * 0.17) % 3).toFixed(2),
    duration: (2 + (i * 0.13) % 2).toFixed(2),
    o: (sizeSeed * 0.5 + 0.45).toFixed(2),     // 0.45–0.95 — visible but not glaring
  }
})

// ── DARK WORLD: Space scene
function SpaceScene() {
  return (
    <>
      <svg className={styles.starfield} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          {/* Very subtle glow — only applied to named constellation stars */}
          <filter id="cStarGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="0.15" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0.2" y2="1">
            <stop offset="0%"   stopColor="#000005"/>
            <stop offset="50%"  stopColor="#02000b"/>
            <stop offset="100%" stopColor="#04010f"/>
          </linearGradient>
        </defs>

        {/* Deep sky */}
        <rect width="100" height="100" fill="url(#skyGrad)"/>

        {/* Milky Way band — no filter, just faint dots */}
        {MILKY_WAY.map(s => (
          <circle key={`mw-${s.id}`} cx={s.x} cy={s.y} r={s.r}
            fill="#d4c8ff" opacity={s.o}/>
        ))}

        {/* Background stars — NO filter, sharp points */}
        {BG_STARS.map(s => (
          <circle key={s.id} cx={s.x} cy={s.y} r={s.r}
            fill={s.color} opacity={s.o}
            style={{ animation:`twinkle ${s.duration}s ${s.delay}s ease-in-out infinite alternate` }}
          />
        ))}

        /**  */
        
        

        {/* LEO lines */}
        {LEO.lines.map(([a,b],i) => (
          <line key={`ll${i}`}
            x1={LEO.stars[a].x} y1={LEO.stars[a].y}
            x2={LEO.stars[b].x} y2={LEO.stars[b].y}
            stroke="rgba(144,0,179,0.3)" strokeWidth="0.15" strokeLinecap="round"/>
        ))}
        {LEO.stars.map((s,i) => (
          <g key={`ls${i}`}>
            <circle cx={s.x} cy={s.y} r={s.r * 2.5} fill={s.color} opacity="0.12"/>
            <circle cx={s.x} cy={s.y} r={s.r} fill={s.color} filter="url(#cStarGlow)" opacity="0.95"/>
          </g>
        ))}
        <text x={LEO.labelX} y={LEO.labelY} fontSize="1.4"
          fill="rgba(144,0,179,0.45)" fontFamily="serif" letterSpacing="0.25" textAnchor="middle">
          LEO
        </text>
      </svg>

      {/* Moon */}
      <div className={styles.moon}>
        <div className={styles.moonGlow}/>
        <div className={styles.moonCrater} style={{top:'22%',left:'30%',width:14,height:14}}/>
        <div className={styles.moonCrater} style={{top:'55%',left:'55%',width:8,height:8}}/>
        <div className={styles.moonCrater} style={{top:'38%',left:'62%',width:5,height:5}}/>
      </div>

      {/* Astronaut */}
      <div className={styles.mascotWrapper}>
        <div className={styles.mascotTooltip}>Space Explorer ✦</div>
        <svg className={styles.astronaut} viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="60" cy="156" rx="28" ry="5" fill="rgba(0,0,0,0.25)"/>
          <rect x="43" y="90" width="34" height="26" rx="8" fill="#37000a"/>
          <rect x="49" y="95" width="9" height="7" rx="3" fill="#1a0005"/>
          <rect x="62" y="95" width="9" height="7" rx="3" fill="#1a0005"/>
          <rect x="33" y="102" width="12" height="7" rx="4" fill="#7e007b"/>
          <rect x="75" y="102" width="12" height="7" rx="4" fill="#7e007b"/>
          <ellipse cx="39" cy="112" rx="3" ry="6" fill="#b3c2f2" opacity="0.75" className={styles.flame}/>
          <ellipse cx="81" cy="112" rx="3" ry="6" fill="#b3c2f2" opacity="0.75" className={styles.flame}/>
          <rect x="36" y="74" width="48" height="48" rx="18" fill="#9000b3"/>
          <rect x="48" y="84" width="24" height="14" rx="6" fill="#7e007b"/>
          <circle cx="60" cy="91" r="5" fill="#735cdd" opacity="0.9"/>
          <circle cx="60" cy="91" r="2" fill="white" opacity="0.85"/>
          <g transform="rotate(18,38,82)">
            <rect x="27" y="78" width="13" height="27" rx="6" fill="#7e007b"/>
            <ellipse cx="33" cy="107" rx="7" ry="5" fill="#37000a"/>
          </g>
          <g className={styles.waveArm} style={{transformOrigin:'82px 82px'}}>
            <rect x="80" y="78" width="13" height="27" rx="6" fill="#7e007b"/>
            <ellipse cx="86" cy="107" rx="7" ry="5" fill="#37000a"/>
          </g>
          <rect x="44" y="117" width="14" height="22" rx="7" fill="#7e007b"/>
          <rect x="62" y="117" width="14" height="22" rx="7" fill="#7e007b"/>
          <ellipse cx="51" cy="139" rx="10" ry="6" fill="#37000a"/>
          <ellipse cx="69" cy="139" rx="10" ry="6" fill="#37000a"/>
          <circle cx="60" cy="54" r="26" fill="#7e007b"/>
          <ellipse cx="60" cy="54" rx="17" ry="19" fill="#0a0518"/>
          <ellipse cx="60" cy="54" rx="17" ry="19" fill="url(#visorG)" opacity="0.8"/>
          <ellipse cx="52" cy="46" rx="5" ry="3.5" fill="white" opacity="0.12" transform="rotate(-20,52,46)"/>
          <circle cx="53" cy="53" r="3.5" fill="white" opacity="0.88"/>
          <circle cx="67" cy="53" r="3.5" fill="white" opacity="0.88"/>
          <circle cx="54" cy="53" r="2" fill="#1a0a05"/>
          <circle cx="68" cy="53" r="2" fill="#1a0a05"/>
          <circle cx="54.8" cy="52" r="0.8" fill="white"/>
          <circle cx="68.8" cy="52" r="0.8" fill="white"/>
          <path d="M 54 60 Q 60 65 66 60" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.88"/>
          <circle cx="60" cy="54" r="26" fill="none" stroke="#9000b3" strokeWidth="2.5"/>
          <circle cx="60" cy="54" r="26" fill="none" stroke="#b3c2f2" strokeWidth="0.8" opacity="0.4"/>
          <line x1="60" y1="28" x2="60" y2="20" stroke="#b3c2f2" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="60" cy="17" r="4" fill="#735cdd"/>
          <circle cx="60" cy="17" r="1.8" fill="white" opacity="0.75"/>
          <text x="20" y="46" fontSize="7" fill="#b3c2f2" opacity="0.7">✦</text>
          <text x="94" y="70" fontSize="5" fill="#9000b3" opacity="0.7">✧</text>
          <defs>
            <linearGradient id="visorG" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9000b3" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#0a0518" stopOpacity="0.9"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  )
}

// ── LIGHT WORLD: Nature scene
function NatureScene() {
  return (
    <>
      <div className={styles.natureSky}/>
      <div className={styles.sun}>
        <div className={styles.sunGlow}/>
        {[0,45,90,135].map(deg => (
          <div key={deg} className={styles.sunRay} style={{transform:`rotate(${deg}deg)`}}/>
        ))}
      </div>
      <div className={styles.cloud} style={{top:'15%', left:'8%', animationDelay:'0s', transform:'scale(1.2)'}}>
        <div className={styles.cloudPuff} style={{width:60, height:40, left:10, bottom:0}}/>
        <div className={styles.cloudPuff} style={{width:80, height:55, left:30, bottom:0}}/>
        <div className={styles.cloudPuff} style={{width:55, height:38, left:80, bottom:0}}/>
      </div>
      <div className={styles.cloud} style={{top:'22%', right:'12%', animationDelay:'3s', transform:'scale(0.85)'}}>
        <div className={styles.cloudPuff} style={{width:50, height:35, left:5, bottom:0}}/>
        <div className={styles.cloudPuff} style={{width:70, height:48, left:25, bottom:0}}/>
        <div className={styles.cloudPuff} style={{width:45, height:32, left:68, bottom:0}}/>
      </div>
      <div className={styles.cloud} style={{top:'10%', left:'40%', animationDelay:'6s', transform:'scale(0.7)'}}>
        <div className={styles.cloudPuff} style={{width:45, height:32, left:5, bottom:0}}/>
        <div className={styles.cloudPuff} style={{width:60, height:42, left:20, bottom:0}}/>
      </div>
      <div className={styles.meadow}/>
      {[8,18,28,38,52,62,72,82,90].map((x,i) => (
        <div key={i} className={styles.flower}
          style={{left:`${x}%`, animationDelay:`${i*0.3}s`,
            bottom:`${5+(i%3)*1.5}%`, transform:`scale(${0.7+(i%3)*0.2})`}}>
          <div className={styles.flowerStem}/>
          <div className={styles.flowerHead}
            style={{background:['#f9a8d4','#fde68a','#a8c4b0','#fca5a5','#c4b5fd'][i%5]}}/>
          <div className={styles.flowerCenter}/>
        </div>
      ))}
      <div className={styles.tree} style={{left:'3%', bottom:'14%', transform:'scale(0.75)'}}>
        <div className={styles.treeTrunk}/>
        <div className={styles.treeTop} style={{background:'#5a8c6a'}}/>
        <div className={styles.treeTop} style={{bottom:'55%',width:70,height:65,left:'50%',transform:'translateX(-50%)',background:'#4a7a5a'}}/>
      </div>
      <div className={styles.tree} style={{right:'3%', bottom:'14%', transform:'scale(0.8)'}}>
        <div className={styles.treeTrunk}/>
        <div className={styles.treeTop} style={{background:'#6a9c7a'}}/>
        <div className={styles.treeTop} style={{bottom:'55%',width:65,height:60,left:'50%',transform:'translateX(-50%)',background:'#5a8c6a'}}/>
      </div>
      <div className={styles.mascotWrapper}>
        <div className={styles.mascotTooltip}>Hi there! 🌸</div>
        <svg className={styles.pig} viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="60" cy="136" rx="30" ry="6" fill="rgba(0,0,0,0.1)"/>
          <ellipse cx="60" cy="100" rx="34" ry="30" fill="#f9a8d4"/>
          <ellipse cx="60" cy="103" rx="20" ry="16" fill="#fce7f3" opacity="0.7"/>
          <rect x="34" y="118" width="14" height="18" rx="7" fill="#f472b6"/>
          <rect x="72" y="118" width="14" height="18" rx="7" fill="#f472b6"/>
          <ellipse cx="41" cy="136" rx="8" ry="5" fill="#db2777"/>
          <ellipse cx="79" cy="136" rx="8" ry="5" fill="#db2777"/>
          <g transform="rotate(-25,28,92)">
            <rect x="22" y="90" width="12" height="22" rx="6" fill="#f9a8d4"/>
            <ellipse cx="28" cy="113" rx="7" ry="5" fill="#f472b6"/>
          </g>
          <g className={styles.waveArm} style={{transformOrigin:'88px 90px'}}>
            <rect x="82" y="88" width="12" height="24" rx="6" fill="#f9a8d4"/>
            <ellipse cx="88" cy="113" rx="7" ry="5" fill="#f472b6"/>
          </g>
          <circle cx="60" cy="66" r="28" fill="#fce7f3"/>
          <ellipse cx="36" cy="48" rx="11" ry="13" fill="#f9a8d4"/>
          <ellipse cx="84" cy="48" rx="11" ry="13" fill="#f9a8d4"/>
          <ellipse cx="36" cy="48" rx="7" ry="9" fill="#fbcfe8"/>
          <ellipse cx="84" cy="48" rx="7" ry="9" fill="#fbcfe8"/>
          <ellipse cx="60" cy="76" rx="13" ry="10" fill="#f9a8d4"/>
          <circle cx="55" cy="77" r="3.2" fill="#db2777" opacity="0.55"/>
          <circle cx="65" cy="77" r="3.2" fill="#db2777" opacity="0.55"/>
          <circle cx="51" cy="60" r="5.5" fill="white"/>
          <circle cx="69" cy="60" r="5.5" fill="white"/>
          <circle cx="52" cy="60" r="3.2" fill="#1e1b4b"/>
          <circle cx="70" cy="60" r="3.2" fill="#1e1b4b"/>
          <circle cx="53" cy="59" r="1.1" fill="white"/>
          <circle cx="71" cy="59" r="1.1" fill="white"/>
          <ellipse cx="43" cy="68" rx="7" ry="4.5" fill="#f472b6" opacity="0.3"/>
          <ellipse cx="77" cy="68" rx="7" ry="4.5" fill="#f472b6" opacity="0.3"/>
          <path d="M 52 72 Q 60 79 68 72" stroke="#db2777" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
          <text x="60" y="34" fontSize="9" textAnchor="middle" fill="#c9714a">🌸</text>
        </svg>
      </div>
    </>
  )
}

export default function Home() {
  const { isDark } = useTheme()
  return (
    <div className={`page ${styles.homePage} ${isDark ? styles.darkHome : styles.lightHome}`}>
      {isDark ? <SpaceScene /> : <NatureScene />}
      <div className={styles.hero}>
        <div className={styles.text}>
          <span className={styles.eyebrow}>CS · IE · UX {isDark ? '✦' : '🌿'}</span>
          <h1 className={styles.heading}>
            Hi, I'm <span className={styles.name}>Hayleigh</span> —<br/>
            I build things that<br/>
            <em className={styles.italic}>work for people.</em>
          </h1>
          <p className={styles.desc}>
            Computer science grad from NC State, now pursuing a Master's in
            Industrial Engineering. I care about the intersection of technology,
            human behavior, and design.
          </p>
          <div className={styles.tags}>
            {tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
          <div className={styles.ctas}>
            <Link to="/projects" className="btn btn-primary">See My Work</Link>
            <Link to="/contact"  className="btn btn-outline">Get In Touch</Link>
          </div>
        </div>
      </div>
    </div>
  )
}