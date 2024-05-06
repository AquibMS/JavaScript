// prisoners are standing on a cartesian coordinate system present inside a  jail. Each prisoner stands at a unique point with both the coordinates (x,y) being integers. Each prisoner should be at a position that forms a rectangle or square with 3 other prisoners.

// More formally, every prisoner at a coordinates pair [x,y] should have
// 1. at least one prisoner standing at integer coordinates [x,ay] where ay != y.
// 2. at least one prisoner standing at integer coordinates [bx,y] where bx != x.

// Unfortunately one prisoner has escaped. Find the coordinates of that prisoner.


function findPrisoner(prisoners){
    let escapedX, escapedY;

    for(let [x,y] of prisoners){
        let foundX = false, foundY = false;

        for(let [otherX, otherY] of prisoners){
            if(otherX === x && otherY !== y){
                foundX = true;
                break;
            }
        }

        for(let [otherX, otherY] of prisoners){
            if(otherY === y && otherX !== x){
                foundY = true;
                break;
            }
        }

        if(!foundX) escapedX = x;
        if(!foundY) escapedY = y;

        if(escapedX !== undefined && escapedY !== undefined) break;
    }
    return [escapedX, escapedY];
}

const prisoners = [
    [1, 1],
    [1, 3],
    [2, 1],
    // The prisoner at coordinates [2,2] is missing
];
console.log(findPrisoner(prisoners));