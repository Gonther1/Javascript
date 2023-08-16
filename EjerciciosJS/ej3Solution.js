numeros=[2,4,3,6,9,8]
target=10

function array(nums, target) {
    let parejas = []
    for (let i = 0; i < nums.length; i++) {
        for (let j= i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] ===target) {
                parejas.push([nums[i], nums[j]])
            }
        }
    }
    return parejas
}
console.log(array(numeros,target))