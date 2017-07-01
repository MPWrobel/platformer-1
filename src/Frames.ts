class Frames extends Array {
    
    constructor(start: number, end: number) {
        
        super();
        
        for (var i = start; i <= end; i++) {
        
            this.push(i);

        }
    
    }

}