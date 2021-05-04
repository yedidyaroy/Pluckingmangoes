class Launcher
{
    constructor(bodyA, pointB)
    {
        var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.04,
        length: 10 
        }
     this.pointB=pointB;
     this.launcherObject = Constraint.create(options);
     World.add(world, this.launcherObject);
    
    } 
         fly(){ this.launcherObject.bodyA=null;
            } 
            
    display()
    { 
     if (this.launcherObject.bodyA){
    var pointA = this.launcherObject.bodyA.position;
    var pointB = this.pointB; 
    strokeWeight(4);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
          } 
        }
     }