import k from '../kaboom'
import down from './sprites/front.png'
import right from './sprites/right.png'
import left from './sprites/left.png'
import up from './sprites/back.png'



const MOVE_SPEED = 120

k.loadRoot('https://i.imgur.com/')
k.loadSprite('link-going-left', left)
k.loadSprite('link-going-right', right)
k.loadSprite('link-going-down', down)
k.loadSprite('link-going-up', up)
k.loadSprite('left-wall', 'rfDoaa1.png')
k.loadSprite('top-wall', 'QA257Bj.png')
k.loadSprite('bottom-wall', 'vWJWmvb.png')
k.loadSprite('right-wall', 'SmHhgUn.png')
k.loadSprite('bottom-left-wall', 'awnTfNC.png')
k.loadSprite('bottom-right-wall', '84oyTFy.png')
k.loadSprite('top-left-wall', 'xlpUxIm.png')
k.loadSprite('top-right-wall', 'z0OmBd1.jpg')
k.loadSprite('top-door', 'U9nre4n.png')
k.loadSprite('fire-pot', 'I7xSp7w.png')
k.loadSprite('left-door', 'okdJNls.png')
k.loadSprite('lanterns', 'wiSiY09.png')
k.loadSprite('slicer', 'c6JFi5Z.png')
k.loadSprite('skeletor', 'Ei1VnX8.png')
k.loadSprite('kaboom', 'o9WizfI.png')
k.loadSprite('stairs', 'VghkL08.png')
k.loadSprite('bg', 'u4DVsx6.png')

// k.scene('main',()=>{
k.scene("game", ({ level, score }) => {

  k.layers(['bg', 'obj', 'ui'], 'obj')


  const maps = [
    [
      'ycc)cc^ccccccccw',
      'a              b',
      'a      *       b',
      'a    (         b',
      '%              b',
      'a              b',
      'a    (         b',
      'a   *          b',
      'a              b',
      'xdd)dd)ddddddddz',
    ],
    [
      'yccccccccw',
      'a        b',
      ')        )',
      'a        b',
      'a        b',
      'a    $   b',
      ')   }    )',
      'a        b',
      'xddddddddz',
    ],
    [
      'ycccccccccccccw',
      'a             b',
      'a  ((      $( b',
      'a         }   b',
      'a     } *     b',
      'a             b',
      'a  ()      () b',
      'a       }     b',
      'xdddddddddddddz'
    ],
    [
      'ycccccccccccccccccccccccw',
      'a                      $b',
      'a         *             b',
      'a          *           }b',
      'a                       b',
      'a           }           b',
      'a                       b',
      'a            }        } b',
      'a            *          b',
      'a           *           b',
      'a                       b',
      'xdddddddddddddddddddddddz'
    ]

  ]


  const levelCfg = {
    width: 48,
    height: 48,
    'a': [k.sprite('left-wall'), k.solid(), 'wall'],
    'b': [k.sprite('right-wall'), k.solid(), 'wall'],
    'c': [k.sprite('top-wall'), k.solid(), 'wall'],
    'd': [k.sprite('bottom-wall'), k.solid(), 'wall'],
    'w': [k.sprite('top-right-wall'), k.solid(), 'wall'],
    'x': [k.sprite('bottom-left-wall'), k.solid(), 'wall'],
    'y': [k.sprite('top-left-wall'), k.solid(), 'wall'],
    'z': [k.sprite('bottom-right-wall'), k.solid(), 'wall'],
    '%': [k.sprite('left-door'), k.solid(), 'door'],
    '^': [k.sprite('top-door'), 'next-level'],
    '$': [k.sprite('stairs'), 'next-level'],
    '*': [k.sprite('slicer'), 'slicer', { dir: -1 }, 'dangerous'],
    '}': [k.sprite('skeletor'), 'dangerous', 'skeletor', { dir: -1, timer: 0 }],
    ')': [k.sprite('lanterns'), k.solid()],
    '(': [k.sprite('fire-pot'), k.solid()],
  }
  k.addLevel(maps[level], levelCfg)

  const floor = k.add([k.sprite('bg'),
  k.layer('bg'),
  k.scale(1.75)
  ])


  const scoreLabel = k.add([
    k.text('0'),
    k.pos(400, 450),
    k.layer('ui'),
    {
      value: score,
    },
    k.scale(2)
  ])

  k.add([k.text('level ' + parseInt(level + 1)), k.pos(400, 485), k.scale(2)])

  const player = k.add([
    k.sprite('link-going-right'),
    k.pos(5, 190),
    {
      // right by default
      dir: k.vec2(1, 0),
    }
  ])

  player.action(() => {
    player.resolve()
  })

  player.overlaps('next-level', () => {
    k.go("game", {
      level: (level + 1) % maps.length,
      score: scoreLabel.value
    })
  })

  k.keyDown('left', () => {
    player.changeSprite('link-going-left')
    player.move(-MOVE_SPEED, 0)
    player.dir = k.vec2(-1, 0)
  })

  k.keyDown('right', () => {
    player.changeSprite('link-going-right')
    player.move(MOVE_SPEED, 0)
    player.dir = k.vec2(1, 0)
  })

  k.keyDown('up', () => {
    player.changeSprite('link-going-up')
    player.move(0, -MOVE_SPEED)
    player.dir = k.vec2(0, -1)
  })

  k.keyDown('down', () => {
    player.changeSprite('link-going-down')
    player.move(0, MOVE_SPEED)
    player.dir = k.vec2(0, 1)
  })

  function spawnKaboom(p) {
    const obj = k.add([k.sprite('kaboom'), k.pos(p), 'kaboom'])
    k.wait(1, () => {
      k.destroy(obj)
    })
  }

  k.keyPress('space', () => {
    spawnKaboom(player.pos.add(player.dir.scale(48)))
  })

  player.collides('door', (d) => {
    k.destroy(d)
  })

  k.collides('kaboom', 'skeletor', (k, s) => {
    k.camShake(4)
    k.wait(1, () => {
      k.destroy(k)
    })
    k.destroy(s)
    scoreLabel.value++
    scoreLabel.text = scoreLabel.value
  })

  const SLICER_SPEED = 100

  k.action('slicer', (s) => {
    s.move(s.dir * SLICER_SPEED, 0)
  })

  k.collides('slicer', 'wall', (s) => {
    s.dir = -s.dir
  })

  const SKELETOR_SPEED = 60

  k.action('skeletor', (s) => {
    s.move(0, s.dir * SKELETOR_SPEED)
    s.timer -= k.dt()
    if (s.timer <= 0) {
      s.dir = - s.dir
      s.timer = k.rand(5)
    }
  })

  k.collides('skeletor', 'wall', (s) => {
    s.dir = -s.dir
  })

  player.overlaps('dangerous', () => {
    k.go('lose', { score: scoreLabel.value })
  })
})

k.scene("lose", ({ score }) => {
  k.add([k.text(score, 32), origin('center'), k.pos(k.width() / 2, k.height() / 2)])

  // k.go('hello-world')

})


// k.start('main')



// k.scene('test',()=>{
//     console.log('test screen loaded')
// })

// k.start('test')

export const gameStart = () => { k.start("game", { level: 0, score: 0 }) }


