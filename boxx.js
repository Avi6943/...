class Boxx{
    constructor(){
        this.x=100,
        this.y=100,
        this.w=50,
        this.h=50
    }

    set_width(w){
        this.w=this.w+w
    }
    show(){
        rect(this.x,this.y,this.w,this.h) 
    }
}