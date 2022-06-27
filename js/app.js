const tetrisGame = {
    name: 'Pure JavaScript Tetris Clone',
    author: 'Santiago Moncada',
    version: '1.0.0',
    license: undefined,
    description: 'A game where you fit the pieces together and try not to go outside the board',
    ctx: undefined,
    canvasSize: {
        w: undefined,
        h: undefined
    },
    fps: 60,
    init(canvasId) {
        this.ctx = document.querySelector(canvasId).getContext('2d');
        this.setDimensions(canvasId);

        const board = new tetrisBoard();

        console.log(board.getTextBoard());
        //this.createEventListeners()
        //this.drawAll();
    },
    setDimensions(canvasId) {
        const width = window.innerWidth;
        const height = window.innerHeight;

        this.canvasSize = { w: width, h: height };
        // const aspectRatio = width / height;
        // if (aspectRatio > 2) {
        //     this.canvasSize = {
        //         w: height * 2,
        //         h: height,
        //     }
        // } else {
        //     this.canvasSize = {
        //         w: width,
        //         h: width / 2,
        //     }
        // }

        document.querySelector(canvasId).setAttribute('width', this.canvasSize.w)
        document.querySelector(canvasId).setAttribute('height', this.canvasSize.h)
    },
    drawAll() {


        setInterval(() => {
            this.clearAll();

            this.ctx.fillRect(0, 0, 100, 100);



        }, 1000 / this.fps)
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
}