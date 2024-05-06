// In the assembly line, the factory assembles three parts 'a' 'b' 'c' of a triangle toy. A valid toy is one where the two shorter sided added together are greater in length than the longest side.
// There are two forms of valid triangles to identify.
// 1. if 2 parts are of equal length, the form is 'isosceles'.
// 2. if all 3 parts are of equal length, the form is 'equilateral'.

// if a toy is not valid or is not one of those 2 forms, it is 'None of these'

// Ex: triangleToy = ['2 2 1', '3 3 3', '3 4 5', '1 1 3']
// Result is ["isosceles", "None of these", "None of these"]

function classifyTriangles(triangleToy){
    const result = [];
    for(let i = 0 ; i < triangleToy.length ; i++){
        const sides = triangleToy[i].split(' ').map(Number);
        sides.sort((a,b) => a - b);

        const [a,b,c] = sides;

        if(a + b > c){
            if(a == b && b == c){
                result.push('equilateral');
            } else if(a == b || b == c){
                result.push('isosceles');
            } else {
                result.push('None of these');
            }
        } else {
            result.push('None of these');
        }
    }
    return result;
}

const triangleToy = ['2 2 1', '3 3 3', '3 4 5', '1 1 3'];
console.log(classifyTriangles(triangleToy));