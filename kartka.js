import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

// wczytywanoe obrazków

loadSprite("kartka","kartkasw.png")
loadSprite("balwan","balwanek.png")
loadSound("muzyka","gdyslicznapanna.mp3")


add([
    sprite("kartka"),
    pos(0,0)
])

const balwan = add([
    sprite("balwan"),
    pos(0,150)
])



onKeyPress("space",()=>{play("muzyka")})

onUpdate(()=>{

    if (balwan.pos.x < 300
        )
     balwan.pos.x = balwan.pos.x+1
}
)