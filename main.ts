input.onButtonPressed(Button.B, function () {
    story_num = randint(min_story_num, max_story_num)
    Story()
})
function Story () {
    if (story_num == 1) {
        basic.showString("Hello!")
        basic.showString("Hello!")
    } else if (story_num == 2) {
        basic.showString("Hello!")
        basic.showString("Hello!")
    } else if (story_num == 3) {
        basic.showString("Hello!")
        basic.showString("Hello!")
    } else if (story_num == 4) {
        basic.showString("Hello!")
        basic.showString("Hello!")
    } else if (story_num == 5) {
        basic.showString("Hello!")
        basic.showString("Hello!")
    } else if (story_num == 6) {
        basic.showString("Hello!")
        basic.showString("Hello!")
    } else if (story_num == 7) {
        basic.showString("Hello!")
        basic.showString("Hello!")
    } else if (story_num == 8) {
        basic.showString("Hello!")
        basic.showString("Hello!")
    }
}
let story_num = 0
let max_story_num = 0
let min_story_num = 0
min_story_num = 1
max_story_num = 8
story_num = randint(min_story_num, max_story_num)
Story()
